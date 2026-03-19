import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      projectType,
      propertyCity,
      propertyZip,
      budgetRange,
      timeline,
      fullName,
      phone,
      email,
      message,
    } = body;

    if (!fullName || !phone || !projectType) {
      return NextResponse.json(
        { error: "Name, phone, and project type are required." },
        { status: 400 }
      );
    }

    // Save to Supabase
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
      source: "website",
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save lead." },
        { status: 500 }
      );
    }

    // Send email notification via Google Apps Script or similar
    // For now, we use a simple fetch to a Google Apps Script Web App
    // You can set this up later. The lead is safely stored in Supabase.
    try {
      await sendEmailNotification({
        fullName,
        phone,
        email,
        projectType,
        budgetRange,
        timeline,
        propertyCity,
        propertyZip,
        message,
      });
    } catch (emailErr) {
      // Don't fail the request if email fails — lead is in Supabase
      console.error("Email notification failed:", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}

async function sendEmailNotification(lead: Record<string, string>) {
  // Simple email via Supabase Edge Function or webhook
  // For now, we'll use the Supabase database trigger approach
  // The lead data is already in Supabase — you can set up
  // email notifications from the Supabase dashboard under
  // Database > Webhooks, or use a Supabase Edge Function.

  // Alternative: Use Resend, SendGrid, or Google Apps Script
  // If you have a webhook URL, uncomment and set it:
  //
  // const WEBHOOK_URL = process.env.EMAIL_WEBHOOK_URL;
  // if (WEBHOOK_URL) {
  //   await fetch(WEBHOOK_URL, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(lead),
  //   });
  // }

  console.log("New lead received:", lead.fullName, lead.phone, lead.projectType);
}
