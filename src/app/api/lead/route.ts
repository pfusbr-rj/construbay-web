import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { formatAttributionForEmail, type AttributionData } from "@/lib/attribution";
import { isValidLocation, LOCATION_ERROR_MESSAGE } from "@/lib/validation";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch (parseErr) {
    console.error("Lead API: invalid JSON body:", parseErr);
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const {
    projectType, propertyCity, propertyZip, budgetRange,
    timeline, fullName, phone, email, message, source,
    company, attribution,
  } = body as {
    projectType?: string; propertyCity?: string; propertyZip?: string;
    budgetRange?: string; timeline?: string; fullName?: string;
    phone?: string; email?: string; message?: string; source?: string;
    company?: string; attribution?: AttributionData | null;
  };

  // Honeypot. Real users never see this field; bots that fill every input do.
  // Answer 200 so the bot cannot tell it was rejected, but write nothing and
  // send nothing.
  if (typeof company === "string" && company.trim() !== "") {
    console.warn("Lead API: honeypot triggered, submission discarded.");
    return NextResponse.json({ success: true });
  }

  if (!fullName || !phone || !projectType) {
    return NextResponse.json(
      { error: "Name, phone, and project type are required." },
      { status: 400 }
    );
  }

  // Location gate. Runs before the Supabase insert and before the Resend
  // notification, so spam submissions never reach the table or the inbox.
  // No source-based exemptions: bots post straight to this route and can set
  // `source` to anything they like.
  if (!isValidLocation(propertyCity)) {
    return NextResponse.json({ error: LOCATION_ERROR_MESSAGE }, { status: 400 });
  }

  const leadPayload = {
    full_name: fullName,
    phone,
    email: email || null,
    project_type: projectType,
    budget_range: budgetRange || null,
    timeline: timeline || null,
    message: message || null,
    property_city: propertyCity.trim(),
    property_zip: propertyZip || null,
    source: source || "website",
  };

  let supabaseOk = false;
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase env vars");
    }
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { error: dbError } = await supabase.from("leads").insert(leadPayload);
    if (dbError) throw dbError;
    supabaseOk = true;
  } catch (dbErr) {
    console.error("Lead Supabase write failed:", dbErr);
  }

  let attributionBlock = "";
  try {
    const attributionText = formatAttributionForEmail(attribution ?? null);
    attributionBlock = `<div style="padding: 0 24px 24px; background: #f9f9f9;"><pre style="font-family: ui-monospace, Menlo, monospace; font-size: 12px; color: #333; background: #ffffff; padding: 16px; border: 1px solid #e5e5e5; margin: 0; white-space: pre-wrap; word-break: break-word;">${escapeHtml(attributionText).trimStart()}</pre></div>`;
  } catch (attrErr) {
    console.error("Attribution formatting failed:", attrErr);
    attributionBlock = "";
  }

  let emailOk = false;
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "ConstruBay Leads <leads@construbay.com>",
      to: "paulo@construbay.com",
      subject: `New Lead: ${projectType} — ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0a1628; padding: 20px; text-align: center;">
            <h1 style="color: #cbb26a; margin: 0; font-size: 24px;">New Lead from ConstruBay.com</h1>
          </div>
          <div style="padding: 24px; background: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 12px; font-weight: bold; color: #333; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px 12px; color: #555; border-bottom: 1px solid #eee;">${fullName}</td></tr>
              <tr><td style="padding: 8px 12px; font-weight: bold; color: #333; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px 12px; color: #555; border-bottom: 1px solid #eee;"><a href="tel:${phone}" style="color: #cbb26a;">${phone}</a></td></tr>
              <tr><td style="padding: 8px 12px; font-weight: bold; color: #333; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px 12px; color: #555; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #cbb26a;">${email || "Not provided"}</a></td></tr>
              <tr><td style="padding: 8px 12px; font-weight: bold; color: #333; border-bottom: 1px solid #eee;">Project</td><td style="padding: 8px 12px; color: #555; border-bottom: 1px solid #eee;">${projectType}</td></tr>
              <tr><td style="padding: 8px 12px; font-weight: bold; color: #333; border-bottom: 1px solid #eee;">Timeline</td><td style="padding: 8px 12px; color: #555; border-bottom: 1px solid #eee;">${timeline || "Not specified"}</td></tr>
              <tr><td style="padding: 8px 12px; font-weight: bold; color: #333; border-bottom: 1px solid #eee;">Location</td><td style="padding: 8px 12px; color: #555; border-bottom: 1px solid #eee;">${propertyCity || ""} ${propertyZip || ""}</td></tr>
              <tr><td style="padding: 8px 12px; font-weight: bold; color: #333; border-bottom: 1px solid #eee;">Source</td><td style="padding: 8px 12px; color: #555; border-bottom: 1px solid #eee;">${source || "website"}</td></tr>
              ${message ? `<tr><td style="padding: 8px 12px; font-weight: bold; color: #333;">Details</td><td style="padding: 8px 12px; color: #555;">${message}</td></tr>` : ""}
            </table>
          </div>
          ${attributionBlock}
          <div style="background: #0a1628; padding: 16px; text-align: center;">
            <p style="color: #cbb26a; margin: 0; font-size: 12px;">ConstruBay — CSLB #1106798 — (415) 968-9494</p>
          </div>
        </div>
      `,
    });
    emailOk = true;
  } catch (emailErr) {
    console.error("Lead email notification failed:", emailErr);
  }

  if (!supabaseOk && !emailOk) {
    console.error(
      "LEAD_RECOVERY_LOG " +
        JSON.stringify({
          route: "lead",
          received_at: new Date().toISOString(),
          lead: leadPayload,
          attribution: attribution ?? null,
        })
    );
  }

  return NextResponse.json({ success: true });
}
