"use client";

import { useState } from "react";

const CG = "'Cormorant Garamond', Georgia, serif";
const MS = "'Montserrat', Arial, sans-serif";
const GOLD = "#cbb26a";
const GRAD = "linear-gradient(135deg, #bb8b4a, #f7eb9e)";

export default function ElectricalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const included: string[] = [
    "200A & 400A panel upgrades & service entrance work",
    "Whole-home smart home wiring (Lutron, Crestron, Control4)",
    "Architectural recessed lighting design & installation",
    "Outdoor landscape & hardscape lighting",
    "EV charging station installation",
    "Structured media center & Cat6 network wiring",
    "Under-cabinet & cove lighting systems",
    "Generator & backup power system installation",
  ];
  const faqs: { q: string; a: string }[] = [
    {
      q: "How much does a panel upgrade cost in Marin County?",
      a: "A 200A to 400A service panel upgrade in Marin County typically ranges from $8,000 to $18,000 including permits, trenching if required, and PG&E coordination. Whole-home rewiring projects typically range from $25,000 to $85,000+ depending on square footage and accessibility. All ConstruBay electrical projects are performed by licensed electricians and delivered under a fixed-scope contract.",
    },
    {
      q: "Do I need a permit for electrical work in Marin County?",
      a: "Yes — permits are required for virtually all electrical work beyond basic fixture replacement in Marin County. Panel upgrades, new circuits, and service entrance work require both electrical permits and PG&E coordination. ConstruBay handles all electrical permit applications and coordinates directly with PG&E for service upgrades as part of every project scope.",
    },
    {
      q: "What smart home systems do you wire for in Marin County?",
      a: "ConstruBay wires for all major luxury smart home platforms including Lutron RadioRA3 and HomeWorks QS for lighting control, Control4 and Crestron for whole-home automation, and Sonos and Savant for whole-home audio. We coordinate with your AV integrator or smart home programmer throughout the rough-in phase to ensure conduit routing, gang box placement, and wire labeling meet the integrator&apos;s specifications exactly.",
    },
    {
      q: "Can you install EV chargers in Marin County?",
      a: "Yes — EV charging station installation is one of our most commonly requested electrical services. We install Level 2 (240V) EV chargers from Tesla, ChargePoint, JuiceBox, and other major manufacturers. All EV charger installations require an electrical permit, and some properties require a panel upgrade to accommodate the additional 50A circuit. ConstruBay provides a full electrical assessment before specifying EV charger solutions.",
    },
  ];
  const relatedServices: { name: string; href: string; desc: string }[] = [
    { name: "HVAC", href: "/services/hvac-marin-county", desc: "Whisper-quiet climate systems & radiant floor heating" },
    { name: "Plumbing", href: "/services/plumbing-marin-county", desc: "Luxury fixture installation & whole-home plumbing systems" },
    { name: "Full Home Remodel", href: "/services/whole-house-remodel-marin-county", desc: "Complete whole-home renovation — structural to aesthetic" },
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', fontFamily: MS }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '72vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services/electrical-hero.jpg" alt="Luxury Electrical Contractor Marin County" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '860px', padding: '0 24px' }}>
          <p style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, marginBottom: '20px' }}>ConstruBay · CSLB #1106798</p>
          <h1 style={{ fontFamily: CG, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px' }}>Electrical in Marin County</h1>
          <p style={{ fontFamily: MS, fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '40px' }}>Smart Home Wiring, Architectural Lighting &amp; Panel Upgrades</p>
          <a href="/request-a-bid" style={{ display: 'inline-block', background: GRAD, color: '#000000', fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Schedule a Private Consultation</a>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '96px 24px' }}>
        <p style={{ fontFamily: CG, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: 1.85, marginBottom: '32px' }}>Electrical work on a luxury estate is not a commodity trade — it is the infrastructure that determines how your home functions, looks, and can be expanded in the future. We install comprehensive smart home wiring systems, architectural lighting circuits, and panel upgrades designed for the way luxury Marin County homes are actually lived in, with structured wiring, whole-home audio, and lighting control at the core.</p>
        <p style={{ fontFamily: CG, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: 1.85, marginBottom: '32px' }}>Every electrical project begins with a load calculation and panel assessment. We evaluate existing infrastructure, identify upgrade requirements, and design a wiring system that accommodates current needs while leaving capacity for future smart home expansion — because the cost of adding a conduit during construction is a fraction of the cost of adding it later.</p>
        <p style={{ fontFamily: MS, fontSize: '12px', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.45)', lineHeight: 1.9 }}>ConstruBay (CSLB #1106798) is based in Mill Valley and has executed luxury electrical projects across Marin, Sonoma, and Napa Counties.</p>
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
        <p style={{ fontFamily: MS, fontSize: '14px', lineHeight: 1.95, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.03em' }}>Electrical work in Marin County requires permits for virtually all new circuits, panel work, and fixture installations beyond basic replacement. Our PlanPass.ai platform manages electrical permit submissions across all Marin County jurisdictions, and our in-house electricians are licensed and current on California Electrical Code. For smart home projects, we coordinate with Lutron, Crestron, and Control4 programming specialists as part of the project scope. We are also deeply familiar with PG&amp;E interconnection requirements for solar and battery backup systems, which are increasingly common on Marin County luxury properties.</p>
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
          <p style={{ fontFamily: CG, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 300, color: '#ffffff', marginBottom: '8px' }}>$10,000 – $85,000+</p>
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
        <h2 style={{ fontFamily: CG, fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '24px', lineHeight: 1.1 }}>Begin Your Electrical Project</h2>
        <p style={{ fontFamily: MS, fontSize: '13px', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.58)', maxWidth: '500px', margin: '0 auto 48px', lineHeight: 1.9 }}>Fixed-scope contract. No surprises. Schedule a private consultation with Paulo.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://calendly.com/construbay/initial-consultation-construbay" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: GRAD, color: '#000000', fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Book a Private Consultation</a>
          <a href="tel:4159689494" style={{ display: 'inline-block', border: '1px solid rgba(203,178,106,0.4)', color: GOLD, fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Or Call (415) 968-9494</a>
        </div>
      </section>
    </div>
  );
}
