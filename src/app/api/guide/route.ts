import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const body = await req.json()
    const { name, email } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    }

    const { error: dbError } = await supabase.from('leads').insert({
      full_name: name || 'Guide Download',
      email,
      project_type: 'Free Guide Download',
      source: 'free-remodel-guide',
    })

    if (dbError) {
      console.error('Supabase insert error:', JSON.stringify(dbError))
      return NextResponse.json({ error: 'Failed to save.' }, { status: 500 })
    }

    try {
      await resend.emails.send({
        from: 'ConstruBay Leads <leads@construbay.com>',
        to: 'paulo@construbay.com',
        subject: `Free Guide Download — ${name || email}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #000000; padding: 20px; text-align: center;">
              <h1 style="color: #cbb26a; margin: 0; font-size: 22px;">Free Guide Download</h1>
            </div>
            <div style="padding: 24px; background: #f9f9f9;">
              <p style="margin: 0 0 8px;"><strong>Name:</strong> ${name || 'Not provided'}</p>
              <p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #cbb26a;">${email}</a></p>
              <p style="margin: 0;"><strong>Source:</strong> /free-remodel-guide</p>
            </div>
            <div style="background: #000000; padding: 16px; text-align: center;">
              <p style="color: #cbb26a; margin: 0; font-size: 12px;">ConstruBay — CSLB #1106798 — (415) 968-9494</p>
            </div>
          </div>
        `,
      })
    } catch (emailErr) {
      console.error('Email notification failed:', emailErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Guide API error:', err)
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
}
