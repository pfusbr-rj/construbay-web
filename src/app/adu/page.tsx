'use client'
import { useState, useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const LOGO = '/images/logo_vector-02.png'
const WA_LINK = 'https://wa.me/14159689494?text=Hi%2C%20I%27m%20interested%20in%20building%20an%20ADU%20on%20my%20property.%20Can%20we%20chat%3F'
const CALENDLY_URL = 'https://calendly.com/construbay/adu-planning-session-design-permits-budget'
const PHONE = 'tel:4159689494'
const navy = '#0a1628'
const gold = '#cbb26a'
const grad = 'linear-gradient(135deg,#bb8b4a 0%,#f7eb9e 100%)'
const panel = '#0d1a30'
const border = '1px solid rgba(203,178,106,0.22)'
const inputBase = {
  width: '100%', background: 'rgba(255,255,255,0.05)', border, borderRadius: 6,
  padding: '14px', fontFamily: 'inherit', fontSize: 16, color: '#fff',
  outline: 'none', boxSizing: 'border-box' as const, WebkitAppearance: 'none' as const,
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'rgba(203,178,106,0.55)', letterSpacing: 1.5, textTransform: 'uppercase' as const, marginBottom: 5 }}>{label}</label>
      {children}
    </div>
  )
}

export default function ADULandingPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', propertyAddress: '', propertyCity: '', propertyZip: '', aduType: '', timeline: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const track = (event: string) => {
    if (typeof window !== 'undefined' && window.gtag) window.gtag('event', event, { event_category: 'conversion' })
  }
  const set = (k: keyof typeof form) => (v: string) => setForm(p => ({ ...p, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const fullName = `${form.firstName} ${form.lastName}`.trim()
      const fullAddress = [form.propertyAddress, form.propertyCity, form.propertyZip].filter(Boolean).join(', ')
      const res = await fetch('/api/lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, phone: form.phone, email: form.email, propertyCity: form.propertyCity, message: `Property Address: ${fullAddress} | ADU Type: ${form.aduType} | Timeline: ${form.timeline}`, projectType: 'ADU Construction', source: 'adu-landing' }),
      })
      if (res.ok) { track('form_submit'); setStatus('success'); window.location.href = CALENDLY_URL }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const col2 = (mob: boolean) => ({ display: 'grid', gridTemplateColumns: mob ? '1fr' : '1fr 1fr', gap: 10 })

  const FormBody = ({ mob }: { mob: boolean }) => (
    <form onSubmit={handleSubmit}>
      <div style={col2(mob)}>
        <Field label="First Name *"><input style={inputBase} type="text" value={form.firstName} onChange={e => set('firstName')(e.target.value)} placeholder="First name" required autoComplete="given-name" /></Field>
        <Field label="Last Name *"><input style={inputBase} type="text" value={form.lastName} onChange={e => set('lastName')(e.target.value)} placeholder="Last name" required autoComplete="family-name" /></Field>
      </div>
      <div style={col2(mob)}>
        <Field label="Phone *"><input style={inputBase} type="tel" value={form.phone} onChange={e => set('phone')(e.target.value)} placeholder="(415) 000-0000" required autoComplete="tel" /></Field>
        <Field label="Email *"><input style={inputBase} type="email" value={form.email} onChange={e => set('email')(e.target.value)} placeholder="you@email.com" required autoComplete="email" /></Field>
      </div>
      <Field label="Property Street Address *"><input style={inputBase} type="text" value={form.propertyAddress} onChange={e => set('propertyAddress')(e.target.value)} placeholder="123 Main Street" required autoComplete="street-address" /></Field>
      <div style={col2(false)}>
        <Field label="City *"><input style={inputBase} type="text" value={form.propertyCity} onChange={e => set('propertyCity')(e.target.value)} placeholder="Mill Valley..." required /></Field>
        <Field label="ZIP *"><input style={inputBase} type="text" value={form.propertyZip} onChange={e => set('propertyZip')(e.target.value)} placeholder="94941" required inputMode="numeric" /></Field>
      </div>
      <div style={col2(mob)}>
        <Field label="ADU Type *">
          <select style={{ ...inputBase, background: navy, cursor: 'pointer' }} value={form.aduType} onChange={e => set('aduType')(e.target.value)} required>
            <option value="">Select type...</option>
            {['Detached ADU','Garage Conversion','Attached ADU','Junior ADU (JADU)','Not sure yet'].map(o => <option key={o} style={{ background: navy }}>{o}</option>)}
          </select>
        </Field>
        <Field label="Timeline *">
          <select style={{ ...inputBase, background: navy, cursor: 'pointer' }} value={form.timeline} onChange={e => set('timeline')(e.target.value)} required>
            <option value="">When to start?</option>
            {['ASAP — ready to move','1–3 months','3–6 months','Just exploring'].map(o => <option key={o} style={{ background: navy }}>{o}</option>)}
          </select>
        </Field>
      </div>
      {status === 'error' && <p style={{ fontSize: 13, color: '#f87171', margin: '4px 0 8px', textAlign: 'center' }}>Something went wrong — please call (415) 968-9494</p>}
      <button type="submit" disabled={status === 'loading'} style={{ width: '100%', background: grad, color: navy, fontWeight: 800, fontSize: mob ? 17 : 16, padding: mob ? '18px' : '16px', border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: 0.3, marginTop: 4 }}>
        {status === 'loading' ? 'Sending...' : '📅 Book My Free Site Visit →'}
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '14px 0 10px' }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(203,178,106,0.13)' }} />
        <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(203,178,106,0.4)', letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Or connect directly</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(203,178,106,0.13)' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <a href={PHONE} onClick={() => track('call_click')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: mob ? '14px' : '12px', borderRadius: 6, background: gold, color: navy, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>📞 Call Now</a>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: mob ? '14px' : '12px', borderRadius: 6, background: 'transparent', color: gold, border: '1.5px solid #cbb26a', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>WhatsApp</a>
      </div>
    </form>
  )

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif", background: navy, color: gold, minHeight: '100vh' }}>

      {/* ── TOP LOGO BAR — centered logo + phone ── */}
      <div style={{ background: navy, padding: isMobile ? '16px 20px 12px' : '20px 40px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO} alt="ConstruBay" style={{ height: isMobile ? 44 : 60, objectFit: 'contain' }} />
        <a href={PHONE} onClick={() => track('call_click')} style={{ color: gold, fontWeight: 700, fontSize: isMobile ? 14 : 16, textDecoration: 'none', letterSpacing: 0.3 }}>
          (415) 968-9494
        </a>
      </div>

      {/* ── MAIN CONTENT ── */}
      {isMobile ? (
        <div style={{ padding: '12px 16px 110px' }}>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(203,178,106,0.5)', marginBottom: 7 }}>Marin · Sonoma · Napa · CSLB #1106798</div>
            <h1 style={{ fontSize: 'clamp(24px,7.5vw,34px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: -0.5, margin: '0 0 7px' }}>
              Your Backyard Could Be{' '}
              <span style={{ background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block' }}>Earning $4,500/Month</span>
            </h1>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55, margin: '0 0 10px' }}>Free site visit. Licensed team — design, permits &amp; build.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 5, marginBottom: 4 }}>
              {['5.0★ Google','Zero Rejections','Free Visit'].map(t => (
                <span key={t} style={{ fontSize: 10, fontWeight: 600, color: 'rgba(203,178,106,0.75)', border: '1px solid rgba(203,178,106,0.22)', padding: '3px 9px', borderRadius: 100 }}>✓ {t}</span>
              ))}
            </div>
          </div>
          <div style={{ background: panel, border: '1px solid rgba(203,178,106,0.18)', borderRadius: 12, padding: '18px 14px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: gold, marginBottom: 2 }}>Free Site Visit — No Obligation</div>
              <h2 style={{ fontSize: 16, fontWeight: 800, color: '#fff', margin: 0 }}>Get Your Free ADU Assessment</h2>
            </div>
            <FormBody mob={true} />
          </div>
        </div>
      ) : (
        <div style={{ padding: '0 20px 48px', maxWidth: 1140, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', padding: '20px 0 18px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(203,178,106,0.55)', marginBottom: 10 }}>Marin · Sonoma · Napa County · CSLB #1106798</div>
            <h1 style={{ fontSize: 'clamp(30px,4.5vw,54px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: -1, margin: '0 0 10px' }}>
              Your Backyard Could Be{' '}
              <span style={{ background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block' }}>Earning $4,500/Month</span>
            </h1>
            <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 560, margin: '0 auto 14px' }}>
              Build a fully permitted ADU and add $150,000+ to your home value. One team handles design, permits, construction, and move-in. Free site visit — no obligation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 22 }}>
              {['5.0★ Google','10+ Years North Bay','Zero Permit Rejections','Free Site Visit'].map(t => (
                <span key={t} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(203,178,106,0.75)', border: '1px solid rgba(203,178,106,0.22)', padding: '5px 12px', borderRadius: 100 }}>✓ {t}</span>
              ))}
            </div>
          </div>
          <div style={{ background: panel, border: '1px solid rgba(203,178,106,0.18)', borderRadius: 12, padding: '28px 28px 24px', maxWidth: 780, margin: '0 auto', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap', gap: 8 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: gold, marginBottom: 4 }}>Free Site Visit — No Obligation</div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.2 }}>Get Your Free ADU Assessment</h2>
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textAlign: 'right', lineHeight: 1.6 }}>We respond within 2 hrs<br />No pressure · No spam</div>
            </div>
            <FormBody mob={false} />
          </div>
        </div>
      )}

      {/* ── MOBILE STICKY BAR ── */}
      {isMobile && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 199, background: '#04080f', borderTop: '1px solid rgba(203,178,106,0.2)', padding: '10px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <a href={PHONE} onClick={() => track('call_click')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '13px', borderRadius: 6, background: gold, color: navy, fontWeight: 800, fontSize: 14, textDecoration: 'none' }}>📞 Call Now</a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '13px', borderRadius: 6, background: 'transparent', border: '1.5px solid #cbb26a', color: gold, fontWeight: 800, fontSize: 14, textDecoration: 'none' }}>WhatsApp</a>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        /* Kill EVERYTHING from root layout except our own div */
        body > div > header, body > div > nav, body > div > footer,
        header:not(#adu-noop), nav:not(#adu-noop), footer { display: none !important; }
        /* Kill any social/review sidebars */
        [class*="social"],[class*="Social"],[id*="social"],
        a[href*="houzz.com"], a[href*="yelp.com"],
        a[href*="facebook.com"]:not(form a), a[href*="instagram.com"]:not(form a),
        a[href*="twitter.com"]:not(form a), a[href*="linkedin.com"]:not(form a) { display: none !important; }
        html, body { overflow-x: hidden; margin: 0; padding: 0; }
        input::placeholder { color: rgba(255,255,255,0.22); }
        input:focus, select:focus { border-color: rgba(203,178,106,0.55) !important; background: rgba(255,255,255,0.07) !important; }
        @media (max-width: 768px) { input, select { font-size: 16px !important; } }
      `}</style>
    </div>
  )
}
