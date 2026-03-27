import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase env vars");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const body = await req.json();

    const {
      projectType, propertyCity, propertyZip, budgetRange,
      timeline, fullName, phone, email, message, source,
    } = body;

    if (!fullName || !phone || !projectType) {
      return NextResponse.json({ error: "Name, phone, and project type are required." }, { status: 400 });
    }

    const { error: dbError } = await supabase.from("leads").insert({
      full_name: fullName,
      phone,
      email: email || null,
      project_type: projectType,
      budget_range: budgetRange || null,
      timeline: timeline || null,
      message: message || null,
      property_city: propertyCity || null,
      property_zip: propertyZip || null,
      source: source || "website",
    });

    if (dbError) {
      console.error("Supabase insert error:", JSON.stringify(dbError));
      return NextResponse.json({ error: "Failed to save. Please call (415) 968-9494." }, { status: 500 });
    }

    try {
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
            <div style="background: #0a1628; padding: 16px; text-align: center;">
              <p style="color: #cbb26a; margin: 0; font-size: 12px;">ConstruBay — CSLB #1106798 — (415) 968-9494</p>
            </div>
          </div>
        `,
      });
    } catch (emailErr) {
      console.error("Email notification failed:", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
