import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { formatAttributionForEmail, type AttributionData } from '@/lib/attribution'

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Known entry points for this route. Anything else falls back to the default so
 * a caller cannot inject arbitrary values into the `source` column.
 */
const GUIDE_SOURCES = ['free-remodel-guide', 'exit-intent-popup'] as const
type GuideSource = (typeof GUIDE_SOURCES)[number]

const DEFAULT_SOURCE: GuideSource = 'free-remodel-guide'

/** Keeps exit-popup captures distinguishable from guide-page downloads. */
const PROJECT_TYPE_BY_SOURCE: Record<GuideSource, string> = {
  'free-remodel-guide': 'Free Guide Download',
  'exit-intent-popup': 'Exit Popup Guide Request',
}

function resolveSource(value: unknown): GuideSource {
  return typeof value === 'string' && (GUIDE_SOURCES as readonly string[]).includes(value)
    ? (value as GuideSource)
    : DEFAULT_SOURCE
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch (parseErr) {
    console.error('Guide API: invalid JSON body:', parseErr)
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const { name, firstName, email, source, company, attribution } = body as {
    name?: string
    firstName?: string
    email?: string
    source?: string
    company?: string
    attribution?: AttributionData | null
  }

  // Honeypot. Real users never see this field; bots that fill every input do.
  // Answer 200 so the bot cannot tell it was rejected, but write nothing and
  // send nothing.
  if (typeof company === 'string' && company.trim() !== '') {
    console.warn('Guide API: honeypot triggered, submission discarded.')
    return NextResponse.json({ success: true })
  }

  // Email stays the only required field. Location is deliberately NOT required
  // here — this route is a guide capture, not the lead pipeline.
  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  }

  const resolvedSource = resolveSource(source)
  const providedName = (name || firstName || '').trim()

  const guidePayload = {
    full_name: providedName || 'Guide Download',
    email,
    project_type: PROJECT_TYPE_BY_SOURCE[resolvedSource],
    source: resolvedSource,
  }

  let supabaseOk = false
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase env vars')
    }
    const supabase = createClient(supabaseUrl, supabaseKey)
    const { error: dbError } = await supabase.from('leads').insert(guidePayload)
    if (dbError) throw dbError
    supabaseOk = true
  } catch (dbErr) {
    console.error('Guide Supabase write failed:', dbErr)
  }

  let attributionBlock = ''
  try {
    const attributionText = formatAttributionForEmail(attribution ?? null)
    attributionBlock = `<div style="padding: 0 24px 24px; background: #f9f9f9;"><pre style="font-family: ui-monospace, Menlo, monospace; font-size: 12px; color: #333; background: #ffffff; padding: 16px; border: 1px solid #e5e5e5; margin: 0; white-space: pre-wrap; word-break: break-word;">${escapeHtml(attributionText).trimStart()}</pre></div>`
  } catch (attrErr) {
    console.error('Attribution formatting failed:', attrErr)
    attributionBlock = ''
  }

  let emailOk = false
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('Missing RESEND_API_KEY')
    }
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'ConstruBay Leads <leads@construbay.com>',
      to: 'paulo@construbay.com',
      subject: `${PROJECT_TYPE_BY_SOURCE[resolvedSource]} — ${providedName || email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #000000; padding: 20px; text-align: center;">
            <h1 style="color: #cbb26a; margin: 0; font-size: 22px;">${escapeHtml(PROJECT_TYPE_BY_SOURCE[resolvedSource])}</h1>
          </div>
          <div style="padding: 24px; background: #f9f9f9;">
            <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(providedName) || 'Not provided'}</p>
            <p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #cbb26a;">${email}</a></p>
            <p style="margin: 0;"><strong>Source:</strong> ${escapeHtml(resolvedSource)}</p>
          </div>
          ${attributionBlock}
          <div style="background: #000000; padding: 16px; text-align: center;">
            <p style="color: #cbb26a; margin: 0; font-size: 12px;">ConstruBay — CSLB #1106798 — (415) 968-9494</p>
          </div>
        </div>
      `,
    })
    emailOk = true
  } catch (emailErr) {
    console.error('Guide email notification failed:', emailErr)
  }

  if (!supabaseOk && !emailOk) {
    console.error(
      'GUIDE_RECOVERY_LOG ' +
        JSON.stringify({
          route: 'guide',
          received_at: new Date().toISOString(),
          lead: guidePayload,
          attribution: attribution ?? null,
        })
    )
  }

  return NextResponse.json({ success: true })
}
