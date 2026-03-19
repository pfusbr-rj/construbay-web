import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase env vars");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
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
      console.error("Supabase insert error:", JSON.stringify(dbError));
      return NextResponse.json(
        { error: "Failed to save. Please call (415) 968-9494." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
