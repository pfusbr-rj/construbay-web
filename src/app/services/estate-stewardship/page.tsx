"use client";

import { useState } from "react";

const CG = "'Cormorant Garamond', Georgia, serif";
const MS = "'Montserrat', Arial, sans-serif";
const GOLD = "#cbb26a";
const GRAD = "linear-gradient(135deg, #bb8b4a, #f7eb9e)";

export default function EstateStewardshipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const included: string[] = [
    "Annual envelope & drainage inspection",
    "Priority emergency response (24-48 hour response time)",
    "Seasonal exterior maintenance planning",
    "Pre-storm preparation & post-storm assessment",
    "Mechanical system coordination & vendor management",
    "Pre-planned improvement project scheduling",
    "Property history & specification documentation",
    "Preferred client pricing on all improvement work",
  ];
  const faqs: { q: string; a: string }[] = [
    {
      q: "What is included in ConstruBay&apos;s Estate Stewardship program?",
      a: "The Estate Stewardship program includes annual full-property envelope and systems inspection, priority 24–48 hour emergency response, seasonal maintenance coordination, pre-storm preparation visits, and proactive identification of maintenance needs. Stewardship clients also receive preferred pricing on all improvement and repair work, a dedicated coordinator who maintains your property&apos;s specification and history documentation, and priority scheduling for new project work.",
    },
    {
      q: "Who is the Estate Stewardship program designed for?",
      a: "The program is designed for owners of luxury Marin County, Sonoma County, and Napa County estates who want to protect their investment through proactive maintenance rather than reactive repairs. Many of our stewardship clients are primary homeowners who travel frequently, owners of second estates who want professional oversight during periods of absence, and estates managed by family offices or property management firms who need a trusted licensed contractor as a dedicated resource.",
    },
    {
      q: "How does priority emergency response work?",
      a: "Stewardship clients receive a direct emergency line to their designated project coordinator. We guarantee a site assessment within 24–48 hours of an emergency call — and in most cases, same-day response for critical issues like active water intrusion, storm damage, or mechanical failure. Emergency repairs are invoiced at preferred stewardship rates, and we maintain material inventory for the most common emergency repair scenarios on Marin County estates.",
    },
    {
      q: "Can I join the Estate Stewardship program even if ConstruBay did not build my home?",
      a: "Yes — we accept a limited number of select estates into the program each year regardless of prior contractor relationship. New estate onboarding includes a comprehensive inspection and documentation session, after which we establish your property&apos;s specification record and begin your stewardship program. Estates are accepted at the discretion of our stewardship team based on property type, location, and program capacity.",
    },
  ];
  const relatedServices: { name: string; href: string; desc: string }[] = [
    { name: "Full Home Remodel", href: "/services/whole-house-remodel-marin-county", desc: "Complete whole-home renovation — structural to aesthetic" },
    { name: "New Construction", href: "/services/new-construction-marin-county", desc: "Ground-up architect-designed custom homes in Marin County" },
    { name: "Deck & Outdoor Living", href: "/services/deck-outdoor-living-marin-county", desc: "Year-round outdoor living spaces for Marin estates" },
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', fontFamily: MS }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '72vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services/estate-stewardship-hero.jpg" alt="Estate Stewardship Marin County" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '860px', padding: '0 24px' }}>
          <p style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, marginBottom: '20px' }}>ConstruBay · CSLB #1106798</p>
          <h1 style={{ fontFamily: CG, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px' }}>Estate Stewardship</h1>
          <p style={{ fontFamily: MS, fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '40px' }}>Ongoing Estate Care — Priority Access, Preventative Maintenance &amp; Annual Planning</p>
          <a href="/request-a-bid" style={{ display: 'inline-block', background: GRAD, color: '#000000', fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Schedule a Private Consultation</a>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '96px 24px' }}>
        <p style={{ fontFamily: CG, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: 1.85, marginBottom: '32px' }}>A luxury estate requires the same level of ongoing stewardship as the original construction that created it. ConstruBay&apos;s Estate Stewardship program provides our past clients and select new estates with priority access to our team for ongoing maintenance, seasonal inspections, and pre-planned improvement projects — ensuring that your estate performs and presents at its highest level year-round.</p>
        <p style={{ fontFamily: CG, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: 1.85, marginBottom: '32px' }}>Estate Stewardship is not a service contract — it is a relationship. Your dedicated stewardship coordinator maintains a living record of your property&apos;s systems, finishes, and improvement history, and proactively identifies maintenance needs before they become emergency repairs. We schedule annual envelope inspections, mechanical system service, and exterior maintenance as a planned program rather than a reactive response.</p>
        <p style={{ fontFamily: MS, fontSize: '12px', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.45)', lineHeight: 1.9 }}>ConstruBay (CSLB #1106798) is based in Mill Valley and has executed estate stewardship projects across Marin, Sonoma, and Napa Counties.</p>
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
        <p style={{ fontFamily: MS, fontSize: '14px', lineHeight: 1.95, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.03em' }}>Estate stewardship in Marin County requires intimate knowledge of the local climate cycles — wet winters with potential for roof, drainage, and envelope failures; dry summers with fire risk preparation; and the year-round salt air exposure that affects metal fasteners, exterior finishes, and glazing systems. Our stewardship coordinators are based in Mill Valley and are familiar with the specific maintenance requirements of estates throughout Marin County, Sonoma County, and Napa County. We maintain a dedicated crew for stewardship client priority response, independent from our active construction workforce.</p>
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
          <p style={{ fontFamily: CG, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 300, color: '#ffffff', marginBottom: '8px' }}>Retainer-Based Program</p>
          <p style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, opacity: 0.65 }}>Custom Annual Pricing — Contact for Details</p>
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
        <h2 style={{ fontFamily: CG, fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '24px', lineHeight: 1.1 }}>Begin Your Estate Stewardship Project</h2>
        <p style={{ fontFamily: MS, fontSize: '13px', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.58)', maxWidth: '500px', margin: '0 auto 48px', lineHeight: 1.9 }}>Fixed-scope contract. No surprises. Schedule a private consultation with Paulo.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://calendly.com/construbay/initial-consultation-construbay" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: GRAD, color: '#000000', fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Book a Private Consultation</a>
          <a href="tel:4159689494" style={{ display: 'inline-block', border: '1px solid rgba(203,178,106,0.4)', color: GOLD, fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Or Call (415) 968-9494</a>
        </div>
      </section>
    </div>
  );
}
