"use client";

import { useState } from "react";

const CG = "'Cormorant Garamond', Georgia, serif";
const MS = "'Montserrat', Arial, sans-serif";
const GOLD = "#cbb26a";
const GRAD = "linear-gradient(135deg, #bb8b4a, #f7eb9e)";

export default function AduBuilderPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const included: string[] = [
    "Detached ADU design & construction",
    "Attached ADU & garage conversion",
    "Junior ADU (JADU) interior conversions",
    "SB 9 lot split & second unit compliance",
    "Architectural language matching — siding, roofline & windows",
    "Full permit navigation via PlanPass.ai",
    "Utility connection engineering (water, sewer, electrical)",
    "Landscaping & access pathway integration",
  ];
  const faqs: { q: string; a: string }[] = [
    {
      q: "How much does an ADU cost in Marin County?",
      a: "An ADU in Marin County typically ranges from $175,000 to $450,000+ depending on size, type (detached vs. garage conversion), site complexity, and finish level. Garage conversions are typically the most cost-effective option at $175,000–$275,000. Detached ADUs typically range from $250,000 to $450,000+. All ConstruBay ADU projects are delivered under a fixed-scope contract — the number you approve before we break ground is the final number you pay.",
    },
    {
      q: "How long does it take to build an ADU in Marin County?",
      a: "An ADU permit in Marin County typically takes 3–8 months to obtain depending on jurisdiction and whether Design Review Board approval is required. Construction of a detached ADU typically takes 6–9 months from permit approval. Garage conversions typically take 4–6 months. ConstruBay&apos;s PlanPass.ai platform routinely reduces permit timelines by 30–45% through pre-screening and direct communication with plan checkers in each jurisdiction.",
    },
    {
      q: "Can I rent out an ADU in Marin County?",
      a: "Yes — ADUs in Marin County can be rented as long-term rentals (30+ days). Short-term rentals (less than 30 days) are subject to separate local regulations that vary by jurisdiction and may require a business license and transient occupancy tax registration. Consult your specific city&apos;s short-term rental ordinance before marketing your ADU as a vacation rental. ConstruBay can refer you to local property managers and rental market specialists as part of the project consultation.",
    },
    {
      q: "What is the difference between a JADU and a standard ADU in Marin County?",
      a: "A Junior ADU (JADU) is a unit created entirely within the existing footprint of the primary dwelling — typically a converted bedroom or garage space — and is limited to 500 square feet under California law. JADUs require the property owner to occupy either the primary unit or the JADU. A standard ADU can be a detached structure, an addition, or a conversion of a larger existing space, and can be up to 1,200 square feet in most California jurisdictions. ConstruBay designs and builds both JADUs and standard ADUs and can advise on the best configuration for your specific property and goals.",
    },
  ];
  const relatedServices: { name: string; href: string; desc: string }[] = [
    { name: "Home Addition", href: "/services/home-addition-marin-county", desc: "Primary suite wings, second stories & structural expansions" },
    { name: "New Construction", href: "/services/new-construction-marin-county", desc: "Ground-up architect-designed custom homes in Marin County" },
    { name: "Full Home Remodel", href: "/services/whole-house-remodel-marin-county", desc: "Complete whole-home renovation — structural to aesthetic" },
  ];

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', fontFamily: MS }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '72vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services/adu-hero.jpg" alt="Custom detached ADU with architectural finishes in a Marin County backyard" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '860px', padding: '0 24px' }}>
          <p style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, marginBottom: '20px' }}>ConstruBay · CSLB #1106798</p>
          <h1 style={{ fontFamily: CG, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.05, marginBottom: '24px' }}>ADU &amp; Garage Conversion in Marin County</h1>
          <p style={{ fontFamily: MS, fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '40px' }}>Architectural Quality Accessory Dwellings — Indistinguishable From Your Main Home</p>
          <a href="/request-a-bid" style={{ display: 'inline-block', background: GRAD, color: '#000000', fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Schedule a Private Consultation</a>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '96px 24px' }}>
        <p style={{ fontFamily: CG, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: 1.85, marginBottom: '32px' }}>An Accessory Dwelling Unit should never look like an afterthought. We design and build detached luxury suites and garage conversions that mirror the architectural language of your main home — perfect for multi-generational living, guest quarters, or high-yield estate rentals. Every ADU we build is finished to the same material standard as the primary residence.</p>
        <p style={{ fontFamily: CG, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: 1.85, marginBottom: '32px' }}>California&apos;s ADU laws have created extraordinary investment opportunities for Marin County homeowners — but navigating <a href="/blog/adu-permit-timeline-marin-county" style={{ color: GOLD, textDecoration: 'underline', textUnderlineOffset: '3px' }}>the permit process</a>, SB 9 compliance, utility connections, and design review requirements requires local expertise. Our PlanPass.ai permit intelligence platform has accelerated ADU permit approvals across all Marin County jurisdictions, and our team has completed ADU projects on lots ranging from standard urban parcels to complex hillside sites with septic system requirements.</p>
        <p style={{ fontFamily: MS, fontSize: '12px', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.45)', lineHeight: 1.9 }}>ConstruBay (CSLB #1106798) is based in Mill Valley and has executed ADU and garage conversion projects across Marin, Sonoma, and Napa Counties.</p>
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
        <p style={{ fontFamily: MS, fontSize: '14px', lineHeight: 1.95, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.03em' }}>ADU permitting in Marin County is governed by state ADU law (AB 68, SB 9, AB 2221) as well as local ordinances from each of Marin&apos;s 11 cities and unincorporated county areas. Our PlanPass.ai platform maintains current ADU compliance matrices for every Marin County jurisdiction — including Tiburon, Mill Valley, Sausalito, San Rafael, Novato, Ross, Belvedere, San Anselmo, Fairfax, Corte Madera, and Larkspur. We pre-screen every ADU application for setback, height, coverage, and owner-occupancy requirements before investing in construction drawings, preventing the costly redesigns that occur when projects hit regulatory obstacles mid-design. Our team has also completed ADU projects in Sonoma County jurisdictions including the City of Sonoma, Petaluma, and unincorporated Sonoma County.</p>
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
          <p style={{ fontFamily: CG, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 300, color: '#ffffff', marginBottom: '8px' }}>$175,000 – $450,000+</p>
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
        <h2 style={{ fontFamily: CG, fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '24px', lineHeight: 1.1 }}>Begin Your ADU Project</h2>
        <p style={{ fontFamily: MS, fontSize: '13px', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.58)', maxWidth: '500px', margin: '0 auto 48px', lineHeight: 1.9 }}>Fixed-scope contract. No surprises. Schedule a private consultation with Paulo.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://calendly.com/construbay/initial-consultation-construbay" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: GRAD, color: '#000000', fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Book a Private Consultation</a>
          <a href="tel:4159689494" style={{ display: 'inline-block', border: '1px solid rgba(203,178,106,0.4)', color: GOLD, fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none' }}>Or Call (415) 968-9494</a>
        </div>
      </section>
    </div>
  );
}
