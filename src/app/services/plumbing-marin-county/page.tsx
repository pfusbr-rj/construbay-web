"use client";

import { useState } from "react";

const CG = "'Cormorant Garamond', Georgia, serif";
const MS = "'Montserrat', Arial, sans-serif";
const GOLD = "#cbb26a";
const GRAD = "linear-gradient(135deg, #bb8b4a, #f7eb9e)";

export default function PlumbingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const included: string[] = [
    "Luxury fixture installation (Waterworks, Dornbracht, Rohl)",
    "Whole-home copper & PEX-A replumbing",
    "Steam generator installation & steam shower rough-in",
    "Tankless water heater systems",
    "Recirculating hot water systems for instant hot delivery",
    "Outdoor kitchen & bar plumbing",
    "Gas line design & installation",
    "Water filtration & softening system installation",
  ];
  const faqs: { q: string; a: string }[] = [
    {
      q: "How much does whole-home replumbing cost in Marin County?",
      a: "Whole-home replumbing in Marin County typically ranges from $25,000 to $75,000+ depending on home size, accessibility, and the extent of drain line replacement required. Supply line replacement alone typically runs $15,000–$40,000. Adding drain, waste, and vent system replacement adds $15,000–$35,000 depending on the condition of existing drain lines. ConstruBay provides fixed-scope pricing for all replumbing work with no open-ended billing.",
    },
    {
      q: "What luxury plumbing fixture brands do you install?",
      a: "ConstruBay installs the full range of luxury fixture brands including Waterworks, Dornbracht, Rohl, Grohe, Hansgrohe, Kohler Artifacts, and Brizo. We coordinate directly with your interior designer or fixture supplier for pre-order rough-in specifications, ensuring that supply stub-out locations, drain placements, and wall blocking are precisely positioned before finishes are applied — eliminating the need for costly corrections after tile installation.",
    },
    {
      q: "Do I need a permit for plumbing work in Marin County?",
      a: "Yes — all plumbing work beyond basic fixture replacement requires permits in Marin County. This includes any supply or drain line work, water heater replacement, steam generator installation, and gas line modification. ConstruBay manages all plumbing permit applications and coordinates inspections at required stages as part of every plumbing project scope.",
    },
    {
      q: "What is a recirculating hot water system and should I install one?",
      a: "A recirculating hot water system maintains constant hot water circulation through your supply lines, delivering instant hot water at every fixture without running cold water down the drain. For large Marin County estates where the master bath may be 100+ feet from the water heater, recirculating systems eliminate the daily frustration of waiting 30–60 seconds for hot water — and dramatically reduce water waste. We install demand-control recirculating systems that only circulate when triggered by a motion sensor or button, minimizing energy consumption.",
    },
  ];
  const relatedServices: { name: string; href: string; desc: string }[] = [
    { name: "Electrical", href: "/services/electrical-marin-county", desc: "Smart home wiring, architectural lighting & panel upgrades" },
    { name: "HVAC", href: "/services/hvac-marin-county", desc: "Whisper-quiet climate systems & radiant floor heating" },
    { name: "Bathroom Remodel", href: "/services/bathroom-remodel-marin-county", desc: "Spa-grade sanctuaries with heated stone floors & custom steam showers" },
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', fontFamily: MS }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '72vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services/plumbing-hero.jpg" alt="Custom plumbing installation with designer fixtures and freestanding soaking tub" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '860px', padding: '0 24px' }}>
          <p style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, marginBottom: '20px' }}>ConstruBay · CSLB #1106798</p>
          <h1 style={{ fontFamily: CG, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px' }}>Plumbing in Marin County</h1>
          <p style={{ fontFamily: MS, fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '40px' }}>Luxury Fixture Installation &amp; Whole-Home Plumbing Systems</p>
          <a href="/request-a-bid" style={{ display: 'inline-block', background: GRAD, color: '#000000', fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Schedule a Private Consultation</a>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '96px 24px' }}>
        <p style={{ fontFamily: CG, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: 1.85, marginBottom: '32px' }}>Plumbing in a luxury estate is not background infrastructure — it is the tactile experience of a $10,000 shower system functioning exactly as designed every single morning. We install high-end fixture packages from Waterworks, Dornbracht, Rohl, and Grohe, and we engineer the supply and drainage systems that allow those fixtures to perform at their specified pressure, temperature, and flow rate for decades.</p>
        <p style={{ fontFamily: CG, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: 1.85, marginBottom: '32px' }}>Whole-home replumbing removes the single largest long-term maintenance risk from any estate — aging galvanized or copper supply lines. We use PEX-A (Uponor) or copper supply systems depending on application, and we re-engineer drain, waste, and vent systems to eliminate the recurring blockage and drain performance issues common in homes with original cast iron or ABS drain lines.</p>
        <p style={{ fontFamily: MS, fontSize: '12px', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.45)', lineHeight: 1.9 }}>ConstruBay (CSLB #1106798) is based in Mill Valley and has executed luxury plumbing projects across Marin, Sonoma, and Napa Counties.</p>
      </section>

      <div style={{ height: '1px', background: GRAD, margin: '0 48px', opacity: 0.35 }} />

      {/* INCLUDED */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '96px 24px' }}>
        <h2 style={{ fontFamily: CG, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: GOLD, textAlign: 'center', marginBottom: '16px' }}>What Is Included</h2>
        <div style={{ width: '40px', height: '1px', background: GRAD, margin: '0 auto 56px', opacity: 0.6 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
          {included.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '20px 24px', border: '1px solid rgba(203,178,106,0.12)' }}>
              <span style={{ color: GOLD, fontSize: '14px', flexShrink: 0, marginTop: '3px' }}>◆</span>
              <span style={{ fontFamily: MS, fontSize: '13px', letterSpacing: '0.04em', color: 'rgba(255,255,255,0.78)', lineHeight: 1.7 }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: '1px', background: GRAD, margin: '0 48px', opacity: 0.35 }} />

      {/* MARIN ADVANTAGE */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '96px 24px' }}>
        <h2 style={{ fontFamily: CG, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: GOLD, marginBottom: '16px' }}>The Marin Advantage</h2>
        <div style={{ width: '40px', height: '1px', background: GRAD, marginBottom: '40px', opacity: 0.6 }} />
        <p style={{ fontFamily: MS, fontSize: '14px', lineHeight: 1.95, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.03em' }}>Plumbing permits in Marin County and incorporated cities within the county require licensed plumber certification and inspection at rough-in, pressure test, and final stages. Our in-house plumbers are C-36 licensed in California and current on the California Plumbing Code, including the specific fixture unit and supply sizing requirements for large luxury homes with multiple master bathrooms and outdoor kitchen applications. For steam shower systems — which require coordinated plumbing, electrical, and mechanical permits — our PlanPass.ai platform manages the multi-agency submission process. We have completed full replumbing projects on historic estates in Mill Valley and Tiburon where original cast iron and galvanized supply lines required careful demolition management.</p>
      </section>

      {/* PROCESS */}
      <section style={{ backgroundColor: 'rgba(203,178,106,0.04)', padding: '96px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: CG, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: GOLD, textAlign: 'center', marginBottom: '16px' }}>Our Process</h2>
          <div style={{ width: '40px', height: '1px', background: GRAD, margin: '0 auto 64px', opacity: 0.6 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '48px', textAlign: 'center' }}>
            {([
              { num: '01', title: 'Curation & Design', desc: 'We begin with an in-depth discovery session at your property, translating your vision into a fixed-scope brief with transparent pricing.' },
              { num: '02', title: 'Artful Execution', desc: 'Our licensed craftsmen execute with precision under direct site supervision — every material sourced, every detail approved by you before installation.' },
              { num: '03', title: 'The Final Reveal', desc: 'A thorough walkthrough with your project lead ensures every element meets our standard before you take possession of your transformed space.' },
            ] as { num: string; title: string; desc: string }[]).map((s) => (
              <div key={s.num}>
                <div style={{ fontFamily: CG, fontSize: '3.5rem', fontWeight: 300, color: GOLD, opacity: 0.3, lineHeight: 1 }}>{s.num}</div>
                <h3 style={{ fontFamily: CG, fontSize: '1.5rem', fontWeight: 300, color: '#ffffff', margin: '16px 0 12px' }}>{s.title}</h3>
                <p style={{ fontFamily: MS, fontSize: '12px', lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.03em' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section style={{ maxWidth: '680px', margin: '0 auto', padding: '96px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: CG, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: GOLD, marginBottom: '16px' }}>Investment Range</h2>
        <div style={{ width: '40px', height: '1px', background: GRAD, margin: '0 auto 40px', opacity: 0.6 }} />
        <div style={{ border: '1px solid rgba(203,178,106,0.25)', padding: '48px 32px', marginBottom: '28px' }}>
          <p style={{ fontFamily: CG, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 300, color: '#ffffff', marginBottom: '8px' }}>$10,000 – $75,000+</p>
          <p style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, opacity: 0.65 }}>Typical Project Range</p>
        </div>
        <p style={{ fontFamily: MS, fontSize: '12px', lineHeight: 1.85, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>All projects are delivered under a fixed-scope contract — the number you approve is the number you pay.</p>
      </section>

      <div style={{ height: '1px', background: GRAD, margin: '0 48px', opacity: 0.35 }} />

      {/* FAQ */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '96px 24px' }}>
        <h2 style={{ fontFamily: CG, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: GOLD, marginBottom: '16px' }}>Frequently Asked Questions</h2>
        <div style={{ width: '40px', height: '1px', background: GRAD, marginBottom: '48px', opacity: 0.6 }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(203,178,106,0.12)' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', textAlign: 'left', padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontFamily: CG, fontSize: '1.2rem', fontWeight: 300, color: '#ffffff', lineHeight: 1.4 }}>{faq.q}</span>
                <span style={{ color: GOLD, fontSize: '22px', flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none', display: 'inline-block' }}>+</span>
              </button>
              {openFaq === i && <p style={{ fontFamily: MS, fontSize: '13px', lineHeight: 1.95, color: 'rgba(255,255,255,0.62)', paddingBottom: '24px', letterSpacing: '0.03em' }}>{faq.a}</p>}
            </div>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
      </section>

      {/* RELATED */}
      <section style={{ backgroundColor: 'rgba(203,178,106,0.04)', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: CG, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300, color: GOLD, textAlign: 'center', marginBottom: '48px' }}>Related Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
            {relatedServices.map((s) => (
              <a key={s.href} href={s.href} style={{ display: 'block', padding: '40px 32px', backgroundColor: '#0a0a0a', border: '1px solid rgba(203,178,106,0.1)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(203,178,106,0.4)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(203,178,106,0.1)')}>
                <h3 style={{ fontFamily: CG, fontSize: '1.4rem', fontWeight: 300, color: '#ffffff', marginBottom: '10px' }}>{s.name}</h3>
                <p style={{ fontFamily: MS, fontSize: '12px', color: 'rgba(255,255,255,0.48)', lineHeight: 1.7, marginBottom: '20px' }}>{s.desc}</p>
                <span style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD }}>Explore →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '120px 24px', textAlign: 'center', backgroundColor: '#000000' }}>
        <p style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, marginBottom: '24px', opacity: 0.7 }}>Begin Your Project</p>
        <h2 style={{ fontFamily: CG, fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '24px', lineHeight: 1.1 }}>Begin Your Plumbing Project</h2>
        <p style={{ fontFamily: MS, fontSize: '13px', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.58)', maxWidth: '500px', margin: '0 auto 48px', lineHeight: 1.9 }}>Fixed-scope contract. No surprises. Schedule a private consultation with Paulo.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://calendly.com/construbay/initial-consultation-construbay" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: GRAD, color: '#000000', fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Book a Private Consultation</a>
          <a href="tel:4159689494" style={{ display: 'inline-block', border: '1px solid rgba(203,178,106,0.4)', color: GOLD, fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Or Call (415) 968-9494</a>
        </div>
      </section>
    </div>
  );
}
