/**
 * sync-photos: Syncs image files from Google Drive into the project_photos table.
 *
 * Reads from: Google Drive folder specified by GOOGLE_DRIVE_PHOTOS_FOLDER_ID
 * Writes to:  project_photos (project_id, url, caption, phase, taken_at)
 * Dedup:      Skips files whose url (webViewLink) already exists in the table
 * Schedule:   Every Sunday at 8pm UTC (configured in supabase/config.toml)
 */

import { getGoogleAccessToken } from "../_shared/google-auth.ts";
import { getSupabaseClient } from "../_shared/supabase-client.ts";

const PROJECT_ID = "01ad8e99-a2fc-4f32-93ad-8f2b8b7eee4e";
const DRIVE_SCOPE = "https://www.googleapis.com/auth/drive.readonly";
const IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/heic",
  "image/webp",
  "image/heif",
];

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  webViewLink: string;
  createdTime: string;
}

interface DriveListResponse {
  files: DriveFile[];
  nextPageToken?: string;
}

/**
 * Lists all image files in a Google Drive folder (handles pagination).
 */
async function listDriveImages(
  folderId: string,
  accessToken: string
): Promise<DriveFile[]> {
  const allFiles: DriveFile[] = [];
  let pageToken: string | undefined;

  const mimeQuery = IMAGE_MIME_TYPES.map((m) => `mimeType='${m}'`).join(" or ");
  const baseQuery = `'${folderId}' in parents and (${mimeQuery}) and trashed=false`;

  do {
    const params = new URLSearchParams({
      q: baseQuery,
      fields: "nextPageToken,files(id,name,mimeType,webViewLink,createdTime)",
      pageSize: "1000",
      orderBy: "createdTime desc",
    });
    if (pageToken) params.set("pageToken", pageToken);

    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?${params}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Drive API error: ${response.status} ${error}`);
    }

    const data: DriveListResponse = await response.json();
    allFiles.push(...(data.files || []));
    pageToken = data.nextPageToken;
  } while (pageToken);

  return allFiles;
}

/**
 * Returns the set of Drive URLs already stored in project_photos.
 */
async function getExistingUrls(projectId: string): Promise<Set<string>> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("project_photos")
    .select("url")
    .eq("project_id", projectId);

  if (error) throw new Error(`Failed to query project_photos: ${error.message}`);

  return new Set((data || []).map((row: { url: string }) => row.url));
}

Deno.serve(async (_req: Request) => {
  try {
    console.log("Starting sync-photos...");

    const folderId = Deno.env.get("GOOGLE_DRIVE_PHOTOS_FOLDER_ID");
    if (!folderId) {
      throw new Error("GOOGLE_DRIVE_PHOTOS_FOLDER_ID environment variable is not set");
    }

    // Get auth token
    const accessToken = await getGoogleAccessToken([DRIVE_SCOPE]);

    // Fetch files from Drive
    console.log(`Listing images in Drive folder: ${folderId}`);
    const files = await listDriveImages(folderId, accessToken);
    console.log(`Found ${files.length} image files in Drive`);

    if (files.length === 0) {
      return new Response(
        JSON.stringify({ success: true, inserted: 0, message: "No images found in folder" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    // Get existing URLs to deduplicate
    const existingUrls = await getExistingUrls(PROJECT_ID);
    console.log(`Found ${existingUrls.size} existing photos in database`);

    // Build rows for new files only
    const newRows = files
      .filter((file) => !existingUrls.has(file.webViewLink))
      .map((file) => ({
        project_id: PROJECT_ID,
        url: file.webViewLink,
        caption: file.name.replace(/\.[^/.]+$/, ""), // strip extension
        phase: "active",
        taken_at: file.createdTime,
      }));

    console.log(`Inserting ${newRows.length} new photos (${files.length - newRows.length} already exist)`);

    if (newRows.length === 0) {
      return new Response(
        JSON.stringify({ success: true, inserted: 0, message: "All photos already synced" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    const supabase = getSupabaseClient();
    const { error: insertError } = await supabase
      .from("project_photos")
      .insert(newRows);

    if (insertError) {
      throw new Error(`Failed to insert photos: ${insertError.message}`);
    }

    console.log(`Successfully inserted ${newRows.length} photos`);
    return new Response(
      JSON.stringify({ success: true, inserted: newRows.length }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("sync-photos error:", message);
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
