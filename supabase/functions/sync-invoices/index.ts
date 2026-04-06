/**
 * sync-invoices: Syncs invoices from Gmail into the project_invoices table.
 *
 * Reads from: paulo@construbay.com inbox via Gmail API
 *             Searches for: "from:joist OR subject:invoice"
 * Writes to:  project_invoices (project_id, invoice_number, amount, status, due_date, file_url, message_id)
 * Dedup:      Skips emails whose Gmail message ID already exists in the table
 * Schedule:   Every Sunday at 8pm UTC (configured in supabase/config.toml)
 *
 * NOTE: Requires domain-wide delegation configured for the service account
 *       with subject set to paulo@construbay.com
 */

import { getGoogleAccessToken } from "../_shared/google-auth.ts";
import { getSupabaseClient } from "../_shared/supabase-client.ts";

const PROJECT_ID = "01ad8e99-a2fc-4f32-93ad-8f2b8b7eee4e";
const GMAIL_USER = "paulo@construbay.com";
const GMAIL_SCOPE = "https://www.googleapis.com/auth/gmail.readonly";
const SEARCH_QUERY = "from:joist OR subject:invoice has:attachment";

interface GmailMessage {
  id: string;
  threadId: string;
}

interface GmailMessageListResponse {
  messages?: GmailMessage[];
  nextPageToken?: string;
}

interface GmailMessagePart {
  partId: string;
  mimeType: string;
  filename: string;
  body: {
    attachmentId?: string;
    size: number;
    data?: string;
  };
  parts?: GmailMessagePart[];
}

interface GmailMessageDetail {
  id: string;
  payload: {
    headers: Array<{ name: string; value: string }>;
    parts?: GmailMessagePart[];
    body?: { data?: string };
  };
  internalDate: string;
}

/**
 * Finds a header value by name (case-insensitive).
 */
function getHeader(headers: Array<{ name: string; value: string }>, name: string): string {
  const header = headers.find((h) => h.name.toLowerCase() === name.toLowerCase());
  return header?.value || "";
}

/**
 * Recursively finds PDF attachment parts in a message.
 */
function findPdfAttachments(parts: GmailMessagePart[]): GmailMessagePart[] {
  const pdfs: GmailMessagePart[] = [];
  for (const part of parts) {
    if (
      part.mimeType === "application/pdf" ||
      (part.filename && part.filename.toLowerCase().endsWith(".pdf"))
    ) {
      pdfs.push(part);
    }
    if (part.parts) {
      pdfs.push(...findPdfAttachments(part.parts));
    }
  }
  return pdfs;
}

/**
 * Adds 30 days to a date and returns ISO string.
 */
function addDays(date: Date, days: number): string {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString();
}

/**
 * Lists Gmail message IDs matching the search query (handles pagination).
 */
async function listGmailMessages(accessToken: string): Promise<string[]> {
  const allIds: string[] = [];
  let pageToken: string | undefined;

  do {
    const params = new URLSearchParams({
      q: SEARCH_QUERY,
      maxResults: "500",
    });
    if (pageToken) params.set("pageToken", pageToken);

    const response = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/${GMAIL_USER}/messages?${params}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Gmail API error (list): ${response.status} ${error}`);
    }

    const data: GmailMessageListResponse = await response.json();
    const ids = (data.messages || []).map((m) => m.id);
    allIds.push(...ids);
    pageToken = data.nextPageToken;
  } while (pageToken);

  return allIds;
}

/**
 * Fetches full details of a Gmail message.
 */
async function getGmailMessage(
  messageId: string,
  accessToken: string
): Promise<GmailMessageDetail> {
  const response = await fetch(
    `https://gmail.googleapis.com/gmail/v1/users/${GMAIL_USER}/messages/${messageId}?format=full`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gmail API error (get): ${response.status} ${error}`);
  }

  return await response.json();
}

/**
 * Returns the set of Gmail message IDs already stored in project_invoices.
 */
async function getExistingMessageIds(projectId: string): Promise<Set<string>> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("project_invoices")
    .select("message_id")
    .eq("project_id", projectId)
    .not("message_id", "is", null);

  if (error) throw new Error(`Failed to query project_invoices: ${error.message}`);

  return new Set(
    (data || [])
      .map((row: { message_id: string | null }) => row.message_id)
      .filter(Boolean) as string[]
  );
}

Deno.serve(async (_req: Request) => {
  try {
    console.log("Starting sync-invoices...");

    // Get auth token (Gmail requires domain-wide delegation)
    const accessToken = await getGoogleAccessToken([GMAIL_SCOPE]);

    // List matching message IDs
    console.log(`Searching Gmail for: ${SEARCH_QUERY}`);
    const messageIds = await listGmailMessages(accessToken);
    console.log(`Found ${messageIds.length} matching messages`);

    if (messageIds.length === 0) {
      return new Response(
        JSON.stringify({ success: true, inserted: 0, message: "No invoice emails found" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    // Get existing message IDs to deduplicate
    const existingIds = await getExistingMessageIds(PROJECT_ID);
    console.log(`Found ${existingIds.size} existing invoice message IDs in database`);

    const newMessageIds = messageIds.filter((id) => !existingIds.has(id));
    console.log(`Processing ${newMessageIds.length} new messages (${messageIds.length - newMessageIds.length} already exist)`);

    if (newMessageIds.length === 0) {
      return new Response(
        JSON.stringify({ success: true, inserted: 0, message: "All invoices already synced" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    // Fetch details for each new message and build rows
    const newRows = [];
    for (const messageId of newMessageIds) {
      try {
        const message = await getGmailMessage(messageId, accessToken);
        const headers = message.payload.headers;

        const subject = getHeader(headers, "Subject") || `Invoice ${messageId}`;
        const dateHeader = getHeader(headers, "Date");
        const emailDate = dateHeader ? new Date(dateHeader) : new Date(parseInt(message.internalDate));

        // Find PDF attachments
        const parts = message.payload.parts || [];
        const pdfAttachments = findPdfAttachments(parts);

        // Build a file_url reference for the first PDF attachment (if any)
        // Using a Gmail attachment URL pattern for the portal to access later
        let fileUrl: string | null = null;
        if (pdfAttachments.length > 0 && pdfAttachments[0].body.attachmentId) {
          const attachId = pdfAttachments[0].body.attachmentId;
          fileUrl = `https://gmail.googleapis.com/gmail/v1/users/${GMAIL_USER}/messages/${messageId}/attachments/${attachId}`;
        }

        newRows.push({
          project_id: PROJECT_ID,
          invoice_number: subject,
          amount: 0, // Amount not parsed from email — update manually or via OCR
          status: "pending",
          due_date: addDays(emailDate, 30),
          file_url: fileUrl,
          message_id: messageId,
        });
      } catch (msgErr) {
        const msg = msgErr instanceof Error ? msgErr.message : String(msgErr);
        console.error(`Failed to process message ${messageId}: ${msg}`);
        // Continue processing remaining messages
      }
    }

    if (newRows.length === 0) {
      return new Response(
        JSON.stringify({ success: true, inserted: 0, message: "No processable invoice emails found" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    const supabase = getSupabaseClient();
    const { error: insertError } = await supabase
      .from("project_invoices")
      .insert(newRows);

    if (insertError) {
      throw new Error(`Failed to insert invoices: ${insertError.message}`);
    }

    console.log(`Successfully inserted ${newRows.length} invoices`);
    return new Response(
      JSON.stringify({ success: true, inserted: newRows.length }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("sync-invoices error:", message);
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
