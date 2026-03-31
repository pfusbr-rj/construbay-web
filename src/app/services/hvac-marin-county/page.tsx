"use client";

import { useState } from "react";

const CG = "'Cormorant Garamond', Georgia, serif";
const MS = "'Montserrat', Arial, sans-serif";
const GOLD = "#cbb26a";
const GRAD = "linear-gradient(135deg, #bb8b4a, #f7eb9e)";

export default function HvacPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const included: string[] = [
    "Whole-home ducted heat pump system design & installation",
    "Ductless multi-zone mini-split systems (Mitsubishi, Daikin)",
    "Hydronic radiant floor heating design & installation",
    "Zoned temperature control systems",
    "ERV & HRV fresh air ventilation systems",
    "Duct sealing & insulation upgrades",
    "Whole-home air filtration & dehumidification",
    "Smart thermostat & home automation integration",
  ];
  const faqs: { q: string; a: string }[] = [
    {
      q: "How much does a new HVAC system cost in Marin County?",
      a: "A complete HVAC system replacement in Marin County typically ranges from $15,000 to $95,000+ depending on home size, system type, and zoning complexity. A single-zone heat pump replacement typically runs $15,000–$30,000. Multi-zone ducted systems for 3,000–5,000 square foot homes typically range from $35,000 to $65,000. Hydronic radiant heating systems with heat pump water heaters run $45,000–$95,000+ depending on the extent of floor system required. All projects are fixed-scope priced.",
    },
    {
      q: "What HVAC system is best for a Marin County home?",
      a: "For most Marin County applications, we recommend variable-speed heat pump systems — either ducted or ductless — over gas furnace systems. Heat pumps provide both heating and cooling from a single system, qualify for Marin Clean Energy incentives, and perform excellently in Marin&apos;s mild climate where extreme cold is rare. Mitsubishi and Daikin mini-split systems are our preferred specifications for zoned applications; Carrier and Trane ducted heat pump systems are our preference for whole-home ducted applications.",
    },
    {
      q: "Do I need a permit for HVAC installation in Marin County?",
      a: "Yes — all HVAC installations, replacements, and significant modifications require mechanical permits in Marin County. New equipment installations also require Title 24 energy compliance documentation. ConstruBay prepares all Title 24 documentation and manages mechanical permit applications as part of every HVAC project scope. For projects that also require electrical work (panel upgrades, new circuits), we coordinate electrical and mechanical permit submissions simultaneously through our PlanPass.ai platform.",
    },
    {
      q: "What is the best heating system for a hillside Marin County home?",
      a: "For hillside homes in Mill Valley, Tiburon, and Ross — where ductwork installation is difficult due to complex framing and limited attic access — ductless multi-zone mini-split systems are typically the most practical and cost-effective solution. Modern Mitsubishi Hyper Heat systems maintain full heating capacity down to -13°F, making them effective even during Marin&apos;s occasional cold spells. For new construction or major remodels where duct installation can be integrated into the framing design, ducted heat pump systems with zoned control provide more uniform distribution and better resale appeal.",
    },
  ];
  const relatedServices: { name: string; href: string; desc: string }[] = [
    { name: "Electrical", href: "/services/electrical-marin-county", desc: "Smart home wiring, architectural lighting & panel upgrades" },
    { name: "Plumbing", href: "/services/plumbing-marin-county", desc: "Luxury fixture installation & whole-home plumbing systems" },
    { name: "Full Home Remodel", href: "/services/whole-house-remodel-marin-county", desc: "Complete whole-home renovation — structural to aesthetic" },
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', fontFamily: MS }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '72vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services/hvac-hero.jpg" alt="Quiet-run split-system HVAC installation in a luxury residential home" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '860px', padding: '0 24px' }}>
          <p style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, marginBottom: '20px' }}>ConstruBay · CSLB #1106798</p>
          <h1 style={{ fontFamily: CG, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px' }}>HVAC in Marin County</h1>
          <p style={{ fontFamily: MS, fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '40px' }}>Whisper-Quiet Climate Systems &amp; Radiant Heating — Invisible Comfort</p>
          <a href="/request-a-bid" style={{ display: 'inline-block', background: GRAD, color: '#000000', fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Schedule a Private Consultation</a>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '96px 24px' }}>
        <p style={{ fontFamily: CG, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: 1.85, marginBottom: '32px' }}>The best HVAC system in a luxury home is the one you never notice — whisper-quiet, perfectly distributed, and invisible within the architecture. We design and install ducted and ductless mini-split systems, radiant hydronic heating, and heat pump systems that deliver precise temperature control in every zone of your estate without the architectural compromise of exposed equipment or intrusive mechanical noise.</p>
        <p style={{ fontFamily: CG, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: 1.85, marginBottom: '32px' }}>Climate system design on a luxury estate begins with a Manual J load calculation — the engineering foundation that determines the correct equipment capacity for each zone. Oversized equipment short-cycles, creating humidity problems and premature equipment failure. Undersized equipment runs continuously and never achieves setpoints. We engineer systems to exact load requirements and coordinate mechanical, electrical, and structural permits as a single coordinated scope.</p>
        <p style={{ fontFamily: MS, fontSize: '12px', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.45)', lineHeight: 1.9 }}>ConstruBay (CSLB #1106798) is based in Mill Valley and has executed luxury HVAC projects across Marin, Sonoma, and Napa Counties.</p>
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
        <p style={{ fontFamily: MS, fontSize: '14px', lineHeight: 1.95, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.03em' }}>HVAC installations in Marin County require mechanical permits with Title 24 energy compliance documentation — one of the most stringent building energy code frameworks in the United States. Our team prepares Title 24 compliance documentation for every HVAC project using current CalCERTS-approved calculation tools, and our PlanPass.ai platform manages mechanical permit submissions across Marin County jurisdictions. For homes transitioning from gas heating to electric heat pump systems — an increasingly common project in Marin County as part of all-electric utility programs — we coordinate the panel upgrade, service entrance work, and utility interconnection as part of a unified project scope, eliminating the coordination friction that delays these projects when managed by separate contractors.</p>
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
          <p style={{ fontFamily: CG, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 300, color: '#ffffff', marginBottom: '8px' }}>$15,000 – $95,000+</p>
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
        <h2 style={{ fontFamily: CG, fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '24px', lineHeight: 1.1 }}>Begin Your HVAC Project</h2>
        <p style={{ fontFamily: MS, fontSize: '13px', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.58)', maxWidth: '500px', margin: '0 auto 48px', lineHeight: 1.9 }}>Fixed-scope contract. No surprises. Schedule a private consultation with Paulo.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://calendly.com/construbay/initial-consultation-construbay" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: GRAD, color: '#000000', fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Book a Private Consultation</a>
          <a href="tel:4159689494" style={{ display: 'inline-block', border: '1px solid rgba(203,178,106,0.4)', color: GOLD, fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Or Call (415) 968-9494</a>
        </div>
      </section>
    </div>
  );
}
