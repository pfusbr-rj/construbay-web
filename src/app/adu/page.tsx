'use client'

import { useState, useEffect } from 'react'

const LOGO = '/images/logo.png'
const WA_LINK = 'https://wa.me/14159689494?text=Hi%2C%20I%27m%20interested%20in%20building%20an%20ADU%20on%20my%20property.%20Can%20we%20chat%3F'

export default function ADULandingPage() {
  const [form, setForm] = useState({ fullName:'', phone:'', email:'', propertyCity:'', aduType:'', timeline:'' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [showExit, setShowExit] = useState(false)

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (e.clientY <= 0) setShowExit(true) }
    document.addEventListener('mouseleave', handler, { once: true })
    return () => document.removeEventListener('mouseleave', handler)
  }, [])

  const track = (event: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', event, { event_category: 'conversion' })
    }
  }

  const set = (k: keyof typeof form) => (v: string) => setForm(p => ({ ...p, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, projectType: 'ADU Construction', source: 'adu-landing' }),
      })
      if (res.ok) {
        setStatus('success')
        track('form_submit')
        setTimeout(() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }), 1500)
      } else { setStatus('error') }
    } catch { setStatus('error') }
  }

  const navy = '#0a1628'
  const gold = '#cbb26a'
  const grad = 'linear-gradient(135deg,#bb8b4a 0%,#f7eb9e 100%)'
  const panel = '#080f1c'
  const border = '1px solid rgba(203,178,106,0.18)'

  return (
    <div style={{ fontFamily:"'DM Sans',sans-serif", background:navy, color:gold, minHeight:'100vh' }}>

      {/* EXIT INTENT */}
      {showExit && (
        <div style={{ position:'fixed', top:0, left:0, right:0, zIndex:999, background:grad, color:navy, textAlign:'center', padding:'14px 48px', fontWeight:700, fontSize:15 }}>
          🏠 Wait — get your FREE ADU site visit before you go!{' '}
          <a href="#form-top" style={{ color:navy, fontWeight:800, textDecoration:'underline' }} onClick={() => setShowExit(false)}>Book Now</a>
          <button onClick={() => setShowExit(false)} style={{ position:'absolute', right:16, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', fontSize:22, cursor:'pointer', color:navy, fontWeight:700 }}>×</button>
        </div>
      )}

      {/* HEADER — logo is plain img, NOT a link */}
      <header style={{ background:navy, borderBottom:'1px solid rgba(203,178,106,0.2)', height:64, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 32px', position:'sticky', top:0, zIndex:100 }}>
        <img src={LOGO} alt="ConstruBay" style={{ height:38, objectFit:'contain' }} />
        <a href="tel:4159689494" onClick={() => track('call_click')} style={{ color:gold, fontWeight:700, fontSize:17, textDecoration:'none', border:'1.5px solid rgba(203,178,106,0.4)', padding:'8px 18px', borderRadius:4 }}>
          (415) 968-9494
        </a>
      </header>

      {/* HERO — split layout */}
      <section id="form-top" style={{ display:'grid', gridTemplateColumns:'1fr 460px', minHeight:'calc(100vh - 64px)' }}>

        {/* LEFT */}
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', padding:'72px 56px', borderRight:'1px solid rgba(203,178,106,0.12)' }}>
          <div style={{ marginBottom:32 }}>
            <img src={LOGO} alt="ConstruBay" style={{ height:72, objectFit:'contain' }} />
          </div>
          <div style={{ fontSize:11, fontWeight:700, letterSpacing:3, textTransform:'uppercase', color:'rgba(203,178,106,0.6)', marginBottom:20 }}>
            Marin · Sonoma · Napa County · CSLB #1106798
          </div>
          <h1 style={{ fontSize:'clamp(38px,5vw,66px)', fontWeight:800, color:'#fff', lineHeight:1.05, letterSpacing:-1, marginBottom:20 }}>
            Your Backyard Could Be{' '}
            <span style={{ background:grad, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', display:'block' }}>
              Earning $4,500/Month
            </span>
          </h1>
          <p style={{ fontSize:18, fontWeight:300, color:'rgba(255,255,255,0.65)', lineHeight:1.7, maxWidth:480, marginBottom:36 }}>
            Build a fully permitted ADU and add $150,000+ to your home value. One team handles design, permits, construction, and move-in. Free site visit — no obligation.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
            {['5.0★ Google & Yelp','10+ Years North Bay','Zero Permit Rejections','Free Site Visit'].map(t => (
              <span key={t} style={{ fontSize:12, fontWeight:600, color:'rgba(203,178,106,0.8)', border:'1px solid rgba(203,178,106,0.25)', padding:'6px 14px', borderRadius:100 }}>✓ {t}</span>
            ))}
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div style={{ background:panel, padding:'52px 40px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <div style={{ fontSize:10, fontWeight:700, letterSpacing:3, textTransform:'uppercase', color:gold, marginBottom:8 }}>Free Site Visit — No Obligation</div>
          <h2 style={{ fontSize:24, fontWeight:800, color:'#fff', lineHeight:1.2, marginBottom:6 }}>Get Your Free ADU Assessment</h2>
          <p style={{ fontSize:13, color:'rgba(255,255,255,0.4)', lineHeight:1.6, marginBottom:22 }}>We come to your property, assess your lot, and show you exactly what's possible — free, no pressure.</p>

          {status === 'success' ? (
            <div style={{ background:'rgba(203,178,106,0.08)', border:'1px solid rgba(203,178,106,0.3)', borderRadius:8, padding:24, textAlign:'center' }}>
              <div style={{ fontSize:32, marginBottom:10 }}>✓</div>
              <h3 style={{ fontSize:18, fontWeight:700, color:gold, marginBottom:8 }}>Request Received!</h3>
              <p style={{ fontSize:13, color:'rgba(255,255,255,0.5)', lineHeight:1.6 }}>We'll call you within 2 hours. Scroll down to pick a time on our calendar.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                <Field label="First Name *"><input style={{ width:'100%', background:'rgba(255,255,255,0.04)', border, borderRadius:5, padding:'12px 14px', fontFamily:'inherit', fontSize:14, color:'#fff', outline:'none' }} type="text" value={form.fullName} onChange={e => set('fullName')(e.target.value)} placeholder="Your name" required /></Field>
                <Field label="Phone *"><input style={{ width:'100%', background:'rgba(255,255,255,0.04)', border, borderRadius:5, padding:'12px 14px', fontFamily:'inherit', fontSize:14, color:'#fff', outline:'none' }} type="tel" value={form.phone} onChange={e => set('phone')(e.target.value)} placeholder="(415) 000-0000" required /></Field>
              </div>
              <Field label="Email *"><input style={{ width:'100%', background:'rgba(255,255,255,0.04)', border, borderRadius:5, padding:'12px 14px', fontFamily:'inherit', fontSize:14, color:'#fff', outline:'none' }} type="email" value={form.email} onChange={e => set('email')(e.target.value)} placeholder="you@email.com" required /></Field>
              <Field label="Property City"><input style={{ width:'100%', background:'rgba(255,255,255,0.04)', border, borderRadius:5, padding:'12px 14px', fontFamily:'inherit', fontSize:14, color:'#fff', outline:'none' }} type="text" value={form.propertyCity} onChange={e => set('propertyCity')(e.target.value)} placeholder="Mill Valley, Tiburon, Santa Rosa..." /></Field>
              <Field label="ADU Type">
                <select style={{ width:'100%', background:navy, border, borderRadius:5, padding:'12px 14px', fontFamily:'inherit', fontSize:14, color:'#fff', outline:'none' }} value={form.aduType} onChange={e => set('aduType')(e.target.value)}>
                  <option value="">Select a type...</option>
                  {['Detached ADU — new backyard structure','Garage Conversion','Attached Addition','Junior ADU (JADU)','Not sure — need guidance'].map(o => <option key={o} style={{ background:navy }}>{o}</option>)}
                </select>
              </Field>
              <Field label="Timeline">
                <select style={{ width:'100%', background:navy, border, borderRadius:5, padding:'12px 14px', fontFamily:'inherit', fontSize:14, color:'#fff', outline:'none' }} value={form.timeline} onChange={e => set('timeline')(e.target.value)}>
                  <option value="">When do you want to start?</option>
                  {['ASAP — ready to move','1–3 months','3–6 months','Just exploring'].map(o => <option key={o} style={{ background:navy }}>{o}</option>)}
                </select>
              </Field>
              {status === 'error' && <p style={{ fontSize:12, color:'#f87171', marginBottom:8, textAlign:'center' }}>Something went wrong — please call (415) 968-9494</p>}
              <button type="submit" disabled={status==='loading'} style={{ width:'100%', marginTop:6, background:grad, color:navy, fontWeight:800, fontSize:15, padding:16, border:'none', borderRadius:5, cursor:'pointer', fontFamily:'inherit' }}>
                {status==='loading' ? 'Sending...' : 'Book My Free Site Visit →'}
              </button>
              <p style={{ textAlign:'center', marginTop:8, fontSize:11, color:'rgba(255,255,255,0.2)' }}>We respond within 2 hours · No spam · No pressure</p>
            </form>
          )}

          <div style={{ display:'flex', alignItems:'center', gap:12, margin:'18px 0' }}>
            <div style={{ flex:1, height:1, background:'rgba(203,178,106,0.15)' }} />
            <span style={{ fontSize:10, fontWeight:700, color:'rgba(203,178,106,0.4)', letterSpacing:1.5, textTransform:'uppercase' }}>Or connect directly</span>
            <div style={{ flex:1, height:1, background:'rgba(203,178,106,0.15)' }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
            <a href="tel:4159689494" onClick={() => track('call_click')} style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, padding:'12px 14px', borderRadius:5, background:gold, color:navy, fontWeight:700, fontSize:14, textDecoration:'none' }}>📞 Call Now</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click')} style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, padding:'12px 14px', borderRadius:5, background:'transparent', color:gold, border:'1.5px solid #cbb26a', fontWeight:700, fontSize:14, textDecoration:'none' }}>
              <img src="/images/icons/whatsapp.png" alt="" style={{ height:18, borderRadius:2 }} onError={e => { (e.target as HTMLImageElement).style.display='none' }} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background:grad, padding:'20px 40px', display:'flex', justifyContent:'center', flexWrap:'wrap' }}>
        {[['$150K+','Added Home Value'],['$4,500','Max Monthly Rent'],['5.0★','Google & Yelp'],['Zero','Permit Rejections'],['10+','Years North Bay']].map(([n,l]) => (
          <div key={l} style={{ flex:1, minWidth:130, textAlign:'center', padding:'8px 20px', borderRight:'1px solid rgba(10,22,40,0.15)' }}>
            <span style={{ fontSize:28, fontWeight:800, color:navy, display:'block', lineHeight:1, marginBottom:3 }}>{n}</span>
            <span style={{ fontSize:10, fontWeight:700, color:'rgba(10,22,40,0.55)', letterSpacing:0.5, textTransform:'uppercase' }}>{l}</span>
          </div>
        ))}
      </div>

      {/* ADU TYPES */}
      <section style={{ padding:'80px 48px', maxWidth:1100, margin:'0 auto' }}>
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:3, textTransform:'uppercase', color:'rgba(203,178,106,0.55)', marginBottom:10 }}>ADU Types We Build</div>
        <h2 style={{ fontSize:'clamp(28px,3.5vw,44px)', fontWeight:800, color:'#fff', lineHeight:1.1, marginBottom:12 }}>Every Type of ADU, Fully Permitted</h2>
        <p style={{ fontSize:16, color:'rgba(255,255,255,0.45)', maxWidth:600, lineHeight:1.75, marginBottom:48, fontWeight:300 }}>We build every kind of ADU across Marin, Sonoma & Napa County. One licensed team handles everything from design to move-in.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:2, background:'rgba(203,178,106,0.08)', borderRadius:10, overflow:'hidden', border:'1px solid rgba(203,178,106,0.1)' }}>
          {[
            { icon:'🏡', title:'Detached ADU', desc:'A completely separate structure in your backyard. Maximum privacy and rental value.', tag:'Up to 1,200 sq ft · Full kitchen & bath' },
            { icon:'🚗', title:'Garage Conversion', desc:'Turn an unused garage into a permitted living space. Most cost-effective option.', tag:'Fastest timeline · No new foundation' },
            { icon:'🏠', title:'Attached ADU', desc:'An addition connected to your home with a private entrance. Perfect for multigenerational living.', tag:'Seamless architectural match' },
            { icon:'🛏️', title:'Junior ADU (JADU)', desc:'Convert an interior room up to 500 sq ft into a rentable unit with a private entrance.', tag:'Lowest cost · Interior conversion' },
          ].map(c => (
            <div key={c.title} style={{ background:panel, padding:'32px 28px' }}>
              <div style={{ fontSize:28, marginBottom:14 }}>{c.icon}</div>
              <div style={{ fontSize:17, fontWeight:700, color:'#fff', marginBottom:8 }}>{c.title}</div>
              <p style={{ fontSize:13, color:'rgba(255,255,255,0.45)', lineHeight:1.75, marginBottom:12 }}>{c.desc}</p>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:1, textTransform:'uppercase', color:gold, opacity:0.7 }}>{c.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ borderTop:'1px solid rgba(203,178,106,0.1)', borderBottom:'1px solid rgba(203,178,106,0.1)', padding:'80px 48px' }}>
        <div style={{ maxWidth:1000, margin:'0 auto' }}>
          <div style={{ fontSize:10, fontWeight:700, letterSpacing:3, textTransform:'uppercase', color:'rgba(203,178,106,0.55)', marginBottom:10 }}>How It Works</div>
          <h2 style={{ fontSize:'clamp(28px,3.5vw,44px)', fontWeight:800, color:'#fff', lineHeight:1.1, marginBottom:12 }}>From Free Visit to Move-In Day</h2>
          <p style={{ fontSize:16, color:'rgba(255,255,255,0.45)', maxWidth:500, lineHeight:1.75, marginBottom:40, fontWeight:300 }}>We manage every step so you don't have to.</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:1, background:'rgba(203,178,106,0.08)', borderRadius:10, overflow:'hidden' }}>
            {[
              { n:'01', title:'Free Site Visit', desc:"We come to your property, assess your lot, and show you exactly what's possible — no charge." },
              { n:'02', title:'Design & Plans', desc:'Full architectural drawings tailored to your lot, budget, and style.' },
              { n:'03', title:'Permits', desc:'We submit clean plans to the county. Our track record: zero permit rejections.' },
              { n:'04', title:'Construction', desc:'Our licensed crew builds your ADU top to bottom. Weekly updates, on schedule.' },
            ].map(s => (
              <div key={s.n} style={{ background:panel, padding:'32px 24px' }}>
                <div style={{ fontSize:44, fontWeight:800, background:grad, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', opacity:0.35, lineHeight:1, marginBottom:12 }}>{s.n}</div>
                <h3 style={{ fontSize:15, fontWeight:700, color:'#fff', marginBottom:8 }}>{s.title}</h3>
                <p style={{ fontSize:13, color:'rgba(255,255,255,0.4)', lineHeight:1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDLY */}
      <section id="book" style={{ padding:'80px 48px', maxWidth:900, margin:'0 auto', textAlign:'center' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(203,178,106,0.08)', border:'1px solid rgba(203,178,106,0.2)', color:gold, fontSize:10, fontWeight:700, letterSpacing:2, textTransform:'uppercase', padding:'7px 16px', borderRadius:100, marginBottom:20 }}>Pick Your Time</div>
        <h2 style={{ fontSize:'clamp(26px,3.5vw,40px)', fontWeight:800, color:'#fff', marginBottom:12, lineHeight:1.2 }}>Book Your Free Site Visit</h2>
        <p style={{ fontSize:16, color:'rgba(255,255,255,0.4)', maxWidth:520, margin:'0 auto 36px', lineHeight:1.75, fontWeight:300 }}>Pick a time that works for you. We come to your property anywhere in Marin, Sonoma or Napa County.</p>
        <div style={{ background:panel, border:'1px solid rgba(203,178,106,0.15)', borderRadius:10, overflow:'hidden' }}>
          <div className="calendly-inline-widget" data-url="https://calendly.com/construbay/initial-contractor-consultation-construbay?hide_gdpr_banner=1&primary_color=cbb26a&text_color=ffffff&background_color=080f1c" style={{ minWidth:320, height:680 }} />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ background:grad, padding:'72px 40px', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:800, color:navy, marginBottom:12, lineHeight:1.1 }}>Ready to See What's Possible on Your Lot?</h2>
        <p style={{ fontSize:17, color:'rgba(10,22,40,0.65)', maxWidth:500, margin:'0 auto 36px', lineHeight:1.7 }}>Free site visit. No pressure. No obligation. We come to you anywhere in Marin, Sonoma or Napa County.</p>
        <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
          <a href="tel:4159689494" style={{ background:navy, color:gold, fontWeight:800, fontSize:15, padding:'16px 36px', borderRadius:5, textDecoration:'none', display:'flex', alignItems:'center', gap:10 }}>📞 Call (415) 968-9494</a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ background:'transparent', color:navy, border:`2px solid ${navy}`, fontWeight:800, fontSize:15, padding:'16px 36px', borderRadius:5, textDecoration:'none', display:'flex', alignItems:'center', gap:10 }}>WhatsApp Us</a>
        </div>
        <p style={{ fontSize:12, color:'rgba(10,22,40,0.45)', marginTop:20 }}>CSLB #1106798 · Licensed & Insured · Mill Valley, CA</p>
      </section>

      {/* FOOTER — construbay.com is plain text, NOT a link */}
      <footer style={{ background:'#04080f', borderTop:'1px solid rgba(203,178,106,0.1)', padding:'36px 40px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:20 }}>
        <img src={LOGO} alt="ConstruBay" style={{ height:32, objectFit:'contain' }} />
        <div style={{ fontSize:13, color:'rgba(203,178,106,0.35)', textAlign:'center', lineHeight:1.8 }}>
          <a href="tel:4159689494" style={{ color:gold, textDecoration:'none' }}>(415) 968-9494</a>
          {' · '}
          <span style={{ color:'rgba(203,178,106,0.4)' }}>construbay.com</span>
          <br />Mill Valley, CA · Marin · Sonoma · Napa County
        </div>
        <div style={{ fontSize:12, color:'rgba(203,178,106,0.25)', textAlign:'right', lineHeight:1.7 }}>CSLB #1106798<br />Licensed · Bonded · Insured</div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="adu-mob-bar">
        <a href="tel:4159689494" onClick={() => track('call_click')} style={{ background:gold, color:navy, fontWeight:800, fontSize:14, padding:13, borderRadius:5, textDecoration:'none', textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center', gap:6 }}>📞 Call Now</a>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click')} style={{ background:'transparent', border:`1.5px solid ${gold}`, color:gold, fontWeight:800, fontSize:14, padding:13, borderRadius:5, textDecoration:'none', display:'flex', alignItems:'center', justifyContent:'center', gap:6 }}>WhatsApp</a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        .adu-mob-bar { display:none; position:sticky; bottom:0; z-index:199; background:#0a1628; border-top:1px solid rgba(203,178,106,0.2); padding:10px 16px; grid-template-columns:1fr 1fr; gap:8px; }
        @media(max-width:960px){ section:nth-of-type(1){ grid-template-columns:1fr !important; min-height:auto !important; } }
        @media(max-width:640px){ .adu-mob-bar{ display:grid; } header{ padding:0 16px !important; } }
      `}</style>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom:12 }}>
      <label style={{ display:'block', fontSize:10, fontWeight:700, color:'rgba(203,178,106,0.5)', letterSpacing:1, textTransform:'uppercase', marginBottom:5 }}>{label}</label>
      {children}
    </div>
  )
                                                                             }
