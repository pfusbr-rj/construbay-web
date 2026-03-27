'use client'
import { useState, useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const LOGO = '/images/logo.png'
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
  padding: '13px 14px', fontFamily: 'inherit', fontSize: 16, color: '#fff',
  outline: 'none', boxSizing: 'border-box' as const, WebkitAppearance: 'none' as const,
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'rgba(203,178,106,0.55)', letterSpacing: 1.5, textTransform: 'uppercase' as const, marginBottom: 4 }}>{label}</label>
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

  const col2 = (mob: boolean) => ({ display: 'grid', gridTemplateColumns: mob ? '1fr' : '1fr 1fr', gap: 8 })

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
      {status === 'error' && <p style={{ fontSize: 12, color: '#f87171', margin: '4px 0 6px', textAlign: 'center' }}>Something went wrong — please call (415) 968-9494</p>}
      <button type="submit" disabled={status === 'loading'} style={{ width: '100%', background: grad, color: navy, fontWeight: 800, fontSize: mob ? 16 : 15, padding: mob ? '16px' : '15px', border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: 0.3, marginTop: 6 }}>
        {status === 'loading' ? 'Sending...' : '📅 Book My Free Site Visit →'}
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '12px 0 8px' }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(203,178,106,0.13)' }} />
        <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(203,178,106,0.4)', letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Or connect directly</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(203,178,106,0.13)' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <a href={PHONE} onClick={() => track('call_click')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '12px', borderRadius: 6, background: gold, color: navy, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>📞 Call Now</a>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '12px', borderRadius: 6, background: 'transparent', color: gold, border: '1.5px solid #cbb26a', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>WhatsApp</a>
      </div>
    </form>
  )

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif", background: navy, color: gold, minHeight: '100vh' }}>

      {/* ── HEADER: logo left, phone right ── */}
      <header style={{ background: navy, padding: isMobile ? '12px 16px' : '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO} alt="ConstruBay" style={{ height: isMobile ? 36 : 48, objectFit: 'contain', maxWidth: isMobile ? 160 : 240 }} />
        <a href={PHONE} onClick={() => track('call_click')} style={{ color: gold, fontWeight: 700, fontSize: isMobile ? 13 : 15, textDecoration: 'none', border: '1.5px solid rgba(203,178,106,0.4)', padding: isMobile ? '6px 10px' : '7px 16px', borderRadius: 4, whiteSpace: 'nowrap' as const }}>
          (415) 968-9494
        </a>
      </header>

      {/* ── CONTENT ── */}
      {isMobile ? (
        <div style={{ padding: '14px 16px 110px' }}>
          <div style={{ textAlign: 'center', marginBottom: 14 }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(203,178,106,0.5)', marginBottom: 6 }}>Marin · Sonoma · Napa · CSLB #1106798</div>
            <h1 style={{ fontSize: 'clamp(22px,7vw,32px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: -0.5, margin: '0 0 6px' }}>
              Your Backyard Could Be{' '}
              <span style={{ background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block' }}>Earning $4,500/Month</span>
            </h1>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, margin: '0 0 8px' }}>Free site visit · Licensed team · Design, permits &amp; build</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
              {['5.0★ Google','Licensed & Insured','Free Visit'].map(t => (
                <span key={t} style={{ fontSize: 9, fontWeight: 600, color: 'rgba(203,178,106,0.75)', border: '1px solid rgba(203,178,106,0.22)', padding: '3px 8px', borderRadius: 100 }}>✓ {t}</span>
              ))}
            </div>
          </div>
          <div style={{ background: panel, border: '1px solid rgba(203,178,106,0.18)', borderRadius: 10, padding: '14px 14px', boxShadow: '0 16px 48px rgba(0,0,0,0.5)' }}>
            {/* Logo + phone above mobile form */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid rgba(203,178,106,0.12)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO} alt="ConstruBay" style={{ height: 30, objectFit: 'contain' }} />
              <a href={PHONE} onClick={() => track('call_click')} style={{ color: gold, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>(415) 968-9494</a>
            </div>
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: gold, marginBottom: 2 }}>Free Site Visit — No Obligation</div>
              <h2 style={{ fontSize: 15, fontWeight: 800, color: '#fff', margin: 0 }}>Get Your Free ADU Assessment</h2>
            </div>
            <FormBody mob={true} />
          </div>
        </div>
      ) : (
        <div style={{ padding: '16px 24px 40px', maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', padding: '12px 0 16px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(203,178,106,0.55)', marginBottom: 8 }}>Marin · Sonoma · Napa County · CSLB #1106798</div>
            <h1 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: -1, margin: '0 0 8px' }}>
              Your Backyard Could Be{' '}
              <span style={{ background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block' }}>Earning $4,500/Month</span>
            </h1>
            <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 520, margin: '0 auto 12px' }}>
              Build a fully permitted ADU and add $150,000+ to your home value. One team handles design, permits, construction, and move-in. Free site visit — no obligation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6, marginBottom: 16 }}>
              {['5.0★ Google','10+ Years North Bay','Licensed & Insured','Free Site Visit'].map(t => (
                <span key={t} style={{ fontSize: 10, fontWeight: 600, color: 'rgba(203,178,106,0.75)', border: '1px solid rgba(203,178,106,0.22)', padding: '4px 10px', borderRadius: 100 }}>✓ {t}</span>
              ))}
            </div>
          </div>
          <div style={{ background: panel, border: '1px solid rgba(203,178,106,0.18)', borderRadius: 12, padding: '20px 28px 20px', maxWidth: 720, margin: '0 auto', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            {/* Logo + phone above form */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid rgba(203,178,106,0.12)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO} alt="ConstruBay" style={{ height: 38, objectFit: 'contain' }} />
              <a href={PHONE} onClick={() => track('call_click')} style={{ color: gold, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>(415) 968-9494</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 6 }}>
              <div>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: gold, marginBottom: 3 }}>Free Site Visit — No Obligation</div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#fff', margin: 0 }}>Get Your Free ADU Assessment</h2>
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textAlign: 'right', lineHeight: 1.6 }}>We respond within 2 hrs<br />No pressure · No spam</div>
            </div>
            <FormBody mob={false} />
          </div>
        </div>
      )}

      {/* ── MOBILE STICKY BAR ── */}
      {isMobile && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 199, background: '#04080f', borderTop: '1px solid rgba(203,178,106,0.15)', padding: '10px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <a href={PHONE} onClick={() => track('call_click')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '13px', borderRadius: 6, background: gold, color: navy, fontWeight: 800, fontSize: 14, textDecoration: 'none' }}>📞 Call Now</a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '13px', borderRadius: 6, background: 'transparent', border: '1.5px solid #cbb26a', color: gold, fontWeight: 800, fontSize: 14, textDecoration: 'none' }}>WhatsApp</a>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        /* Nuke everything from root layout */
        body > div > header, body > div > nav, body > div > footer,
        header:not(#adu-header), nav, footer,
        [class*="social"],[class*="Social"],[id*="social"],
        a[href*="houzz.com"], a[href*="yelp.com"],
        a[href*="facebook.com"]:not(form a), a[href*="instagram.com"]:not(form a),
        a[href*="twitter.com"]:not(form a), a[href*="linkedin.com"]:not(form a) { display: none !important; }
        html, body { overflow-x: hidden; margin: 0; padding: 0; }
        input::placeholder { color: rgba(255,255,255,0.2); }
        input:focus, select:focus { border-color: rgba(203,178,106,0.55) !important; background: rgba(255,255,255,0.07) !important; }
        @media (max-width: 768px) { input, select { font-size: 16px !important; } }
      `}</style>
    </div>
  )
}
