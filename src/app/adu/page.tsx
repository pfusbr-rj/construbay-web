'use client'
import { useState, useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const LOGO = '/images/logo.png'
const WA_LINK = 'https://wa.me/14159689494?text=Hi%2C%20I%27m%20interested%20in%20building%20an%20ADU%20on%20my%20property.%20Can%20we%20chat%3F'
const CALENDLY_URL = 'https://calendly.com/construbay/initial-contractor-consultation-construbay'

export default function ADULandingPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    propertyAddress: '',
    propertyCity: '',
    propertyZip: '',
    aduType: '',
    timeline: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [showExit, setShowExit] = useState(false)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0) setShowExit(true)
    }
    document.addEventListener('mouseleave', handler, { once: true })
    return () => document.removeEventListener('mouseleave', handler)
  }, [])

  const track = (event: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, { event_category: 'conversion' })
    }
  }

  const set = (k: keyof typeof form) => (v: string) => setForm(p => ({ ...p, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const fullName = `${form.firstName} ${form.lastName}`.trim()
      const fullAddress = [form.propertyAddress, form.propertyCity, form.propertyZip].filter(Boolean).join(', ')
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone: form.phone,
          email: form.email,
          propertyCity: form.propertyCity,
          message: `Property Address: ${fullAddress} | ADU Type: ${form.aduType} | Timeline: ${form.timeline}`,
          projectType: 'ADU Construction',
          source: 'adu-landing'
        }),
      })
      if (res.ok) {
        track('form_submit')
        setStatus('success')
        window.location.href = CALENDLY_URL
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const navy = '#0a1628'
  const gold = '#cbb26a'
  const grad = 'linear-gradient(135deg,#bb8b4a 0%,#f7eb9e 100%)'
  const panel = '#0d1a30'
  const border = '1px solid rgba(203,178,106,0.22)'
  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border,
    borderRadius: 6,
    padding: '13px 14px',
    fontFamily: 'inherit',
    fontSize: 14,
    color: '#fff',
    outline: 'none',
    boxSizing: 'border-box' as const
  }
  const selectStyle = {
    ...inputStyle,
    background: navy,
    cursor: 'pointer'
  }

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif", background: navy, color: gold, minHeight: '100vh' }}>

      {/* EXIT INTENT */}
      {showExit && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999, background: grad, color: navy, textAlign: 'center', padding: '14px 48px', fontWeight: 700, fontSize: 15 }}>
          🏠 Wait — get your FREE ADU site visit before you go!{' '}
          <a href="#form-top" style={{ color: navy, fontWeight: 800, textDecoration: 'underline' }} onClick={() => setShowExit(false)}>Book Now</a>
          <button onClick={() => setShowExit(false)} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: navy, fontWeight: 700 }}>×</button>
        </div>
      )}

      {/* HEADER */}
      <header style={{ background: navy, borderBottom: '1px solid rgba(203,178,106,0.2)', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', position: 'sticky', top: 0, zIndex: 100 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO} alt="ConstruBay" style={{ height: 34, objectFit: 'contain' }} />
        <a href="tel:4159689494" onClick={() => track('call_click')} style={{ color: gold, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: '1.5px solid rgba(203,178,106,0.4)', padding: '7px 16px', borderRadius: 4 }}>
          (415) 968-9494
        </a>
      </header>

      {/* HERO + FORM — one screen, nothing below */}
      <section id="form-top" style={{ padding: '0 20px 40px', maxWidth: 1140, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', padding: '32px 0 20px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(203,178,106,0.55)', marginBottom: 10 }}>
            Marin · Sonoma · Napa County · CSLB #1106798
          </div>
          <h1 style={{ fontSize: 'clamp(30px,4.5vw,54px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, letterSpacing: -1, margin: '0 0 10px' }}>
            Your Backyard Could Be{' '}
            <span style={{ background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block' }}>
              Earning $4,500/Month
            </span>
          </h1>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 560, margin: '0 auto 16px' }}>
            Build a fully permitted ADU and add $150,000+ to your home value. One team handles design, permits, construction, and move-in. Free site visit — no obligation.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 24 }}>
            {['5.0★ Google &amp; Yelp', '10+ Years North Bay', 'Zero Permit Rejections', 'Free Site Visit'].map(t => (
              <span key={t} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(203,178,106,0.75)', border: '1px solid rgba(203,178,106,0.22)', padding: '5px 12px', borderRadius: 100 }} dangerouslySetInnerHTML={{ __html: '✓ ' + t }} />
            ))}
          </div>
        </div>

        <div style={{ background: panel, border: '1px solid rgba(203,178,106,0.18)', borderRadius: 12, padding: '28px 28px 24px', maxWidth: 780, margin: '0 auto', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, flexWrap: 'wrap', gap: 8 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: gold, marginBottom: 4 }}>Free Site Visit — No Obligation</div>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.2 }}>Get Your Free ADU Assessment</h2>
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textAlign: 'right', lineHeight: 1.6 }}>
              We respond within 2 hrs<br />No pressure · No spam
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
              <Field label="First Name *">
                <input style={inputStyle} type="text" value={form.firstName} onChange={e => set('firstName')(e.target.value)} placeholder="First name" required />
              </Field>
              <Field label="Last Name *">
                <input style={inputStyle} type="text" value={form.lastName} onChange={e => set('lastName')(e.target.value)} placeholder="Last name" required />
              </Field>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
              <Field label="Phone *">
                <input style={inputStyle} type="tel" value={form.phone} onChange={e => set('phone')(e.target.value)} placeholder="(415) 000-0000" required />
              </Field>
              <Field label="Email *">
                <input style={inputStyle} type="email" value={form.email} onChange={e => set('email')(e.target.value)} placeholder="you@email.com" required />
              </Field>
            </div>
            <div style={{ marginBottom: 10 }}>
              <Field label="Property Street Address">
                <input style={inputStyle} type="text" value={form.propertyAddress} onChange={e => set('propertyAddress')(e.target.value)} placeholder="123 Main Street" />
              </Field>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
              <Field label="City">
                <input style={inputStyle} type="text" value={form.propertyCity} onChange={e => set('propertyCity')(e.target.value)} placeholder="Mill Valley, Tiburon..." />
              </Field>
              <Field label="ZIP Code">
                <input style={inputStyle} type="text" value={form.propertyZip} onChange={e => set('propertyZip')(e.target.value)} placeholder="94941" />
              </Field>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
              <Field label="ADU Type">
                <select style={selectStyle} value={form.aduType} onChange={e => set('aduType')(e.target.value)}>
                  <option value="">Select a type...</option>
                  {['Detached ADU — new backyard structure', 'Garage Conversion', 'Attached Addition', 'Junior ADU (JADU)', 'Not sure — need guidance'].map(o => <option key={o} style={{ background: navy }}>{o}</option>)}
                </select>
              </Field>
              <Field label="Timeline">
                <select style={selectStyle} value={form.timeline} onChange={e => set('timeline')(e.target.value)}>
                  <option value="">When to start?</option>
                  {['ASAP — ready to move', '1–3 months', '3–6 months', 'Just exploring'].map(o => <option key={o} style={{ background: navy }}>{o}</option>)}
                </select>
              </Field>
            </div>
            {status === 'error' && (
              <p style={{ fontSize: 12, color: '#f87171', marginBottom: 10, textAlign: 'center' }}>
                Something went wrong — please call (415) 968-9494
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{ width: '100%', background: grad, color: navy, fontWeight: 800, fontSize: 16, padding: '16px', border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: 0.3 }}
            >
              {status === 'loading' ? 'Sending...' : '📅 Book My Free Site Visit →'}
            </button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '16px 0 12px' }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(203,178,106,0.13)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(203,178,106,0.4)', letterSpacing: 1.5, textTransform: 'uppercase' }}>Or connect directly</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(203,178,106,0.13)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <a href="tel:4159689494" onClick={() => track('call_click')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 14px', borderRadius: 6, background: gold, color: navy, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>📞 Call Now</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 14px', borderRadius: 6, background: 'transparent', color: gold, border: '1.5px solid #cbb26a', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>WhatsApp</a>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="adu-mob-bar">
        <a href="tel:4159689494" onClick={() => track('call_click')} style={{ background: gold, color: navy, fontWeight: 800, fontSize: 14, padding: 13, borderRadius: 5, textDecoration: 'none', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>📞 Call Now</a>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click')} style={{ background: 'transparent', border: '1.5px solid #cbb26a', color: gold, fontWeight: 800, fontSize: 14, padding: 13, borderRadius: 5, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>WhatsApp</a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        .adu-mob-bar {
          display: none;
          position: sticky;
          bottom: 0;
          z-index: 199;
          background: #0a1628;
          border-top: 1px solid rgba(203,178,106,0.2);
          padding: 10px 16px;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        @media(max-width:640px){
          .adu-mob-bar { display: grid; }
          header { padding: 0 14px !important; }
          #form-top { padding: 0 12px 32px !important; }
        }
        @media(max-width:520px){
          form > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
        input::placeholder { color: rgba(255,255,255,0.22); }
        input:focus, select:focus { border-color: rgba(203,178,106,0.55) !important; background: rgba(255,255,255,0.07) !important; }
      `}</style>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 0 }}>
      <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'rgba(203,178,106,0.5)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 5 }}>{label}</label>
      {children}
    </div>
  )
}
