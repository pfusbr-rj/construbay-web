/*
Run this SQL in Supabase to create the table:

CREATE TABLE inquiry_leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  full_name text,
  email text,
  phone text,
  project_address text,
  project_type text,
  budget text,
  timeline text,
  design_status text,
  property_status text,
  architect_involved text,
  referral_source text,
  notes text,
  lead_score integer,
  lead_tier text,
  tags text[],
  status text DEFAULT 'New',
  source text
);
*/

import { NextRequest, NextResponse } from 'next/server';
import { calculateLeadScore, getLeadTier, generateTags } from '@/lib/leadScoring';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { Resend } = await import('resend');
    const { createClient } = await import('@supabase/supabase-js');

    const resend = new Resend(process.env.RESEND_API_KEY);
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const score = calculateLeadScore(body);
    const tier = getLeadTier(score);
    const tags = generateTags(body);

    // Save to Supabase
    const { error: dbError } = await supabase.from('inquiry_leads').insert([{
      full_name: body.full_name,
      email: body.email,
      phone: body.phone,
      project_address: body.project_address,
      project_type: body.project_type,
      budget: body.budget,
      timeline: body.timeline,
      design_status: body.design_status,
      property_status: body.property_status,
      architect_involved: body.architect_involved,
      referral_source: body.referral_source,
      notes: body.notes || '',
      lead_score: score,
      lead_tier: tier,
      tags: tags,
      status: 'New',
      source: 'Homepage Inquiry Modal',
    }]);

    if (dbError) console.error('Supabase error:', dbError);

    // Send email to Paulo
    await resend.emails.send({
      from: 'leads@construbay.com',
      to: 'paulo@construbay.com',
      subject: `[${tier === 'A' ? '🔥 HOT' : tier === 'B' ? '⭐ WARM' : '📋 NEW'}] Lead: ${body.full_name} — ${body.project_type} — ${body.budget}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0a1628; padding: 24px; text-align: center;">
            <h1 style="color: #cbb26a; margin: 0; font-size: 24px;">New ConstruBay Inquiry</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 8px 0 0; font-size: 14px;">
              Lead Tier: <strong style="color: #cbb26a;">${tier}</strong> | Score: ${score}/100
            </p>
          </div>
          <div style="padding: 32px; background: #f8f8f8;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; width: 40%;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">${body.full_name}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Phone</td><td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="tel:${body.phone}">${body.phone}</a></td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Address</td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${body.project_address}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Project Type</td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${body.project_type}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Budget</td><td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #0a1628;">${body.budget}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Timeline</td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${body.timeline}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Design Status</td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${body.design_status}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Property Status</td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${body.property_status}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Architect Involved</td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${body.architect_involved}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;">Referral Source</td><td style="padding: 12px 0; border-bottom: 1px solid #eee;">${body.referral_source}</td></tr>
              <tr><td style="padding: 12px 0; color: #666;">Notes</td><td style="padding: 12px 0;">${body.notes || 'None'}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #0a1628; border-radius: 4px;">
              <p style="color: #cbb26a; margin: 0; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Tags: ${tags.join(' · ')}</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Inquiry API error:', err);
    return NextResponse.json({ error: 'Failed to submit inquiry' }, { status: 500 });
  }
}
