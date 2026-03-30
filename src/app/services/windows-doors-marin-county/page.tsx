"use client";

import { useState } from "react";

const CG = "'Cormorant Garamond', Georgia, serif";
const MS = "'Montserrat', Arial, sans-serif";
const GOLD = "#cbb26a";
const GRAD = "linear-gradient(135deg, #bb8b4a, #f7eb9e)";

export default function WindowsDoorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const included: string[] = [
    "Marvin, Andersen & custom aluminum window systems",
    "Pivot, Dutch & grand entry door installations",
    "Pocket and sliding glass door systems",
    "Steel-framed window and door installations",
    "Structural header engineering & rough opening modification",
    "High-performance weatherstripping & thermal break systems",
    "Custom window trim & interior casing millwork",
    "Historic & Design Review Board-compliant window replacements",
  ];
  const faqs: { q: string; a: string }[] = [
    {
      q: "How much do replacement windows cost in Marin County?",
      a: "Window replacement in Marin County typically ranges from $800 to $2,500 per window installed, depending on size, material, and operability type. A whole-home window replacement project typically ranges from $25,000 to $95,000+. Custom steel-framed or large-format pivot windows can run $3,000–$8,000+ per unit installed. ConstruBay provides fixed-scope pricing that includes structural rough opening work, flashing, trim, and final inspection.",
    },
    {
      q: "Do I need approval to replace windows in Marin County?",
      a: "In many Marin County jurisdictions, window replacements that match the existing size and configuration require only a building permit. However, any changes to window size, configuration, or material type in Design Review Board jurisdictions — including Mill Valley, Ross, Belvedere, and Tiburon — require DRB approval before permits can be pulled. ConstruBay manages the entire approval process as part of your project scope.",
    },
    {
      q: "What window brands do you recommend for Marin County homes?",
      a: "For most Marin County luxury applications, we specify Marvin Signature or Integrity window systems for wood and fiberglass options, and NanaWall or Fleetwood for large-format sliding and folding glazing systems. For contemporary steel-look aesthetics, we work with Optimum Window and Mondrian steel window systems. All specifications are tailored to your architectural style and thermal performance requirements.",
    },
    {
      q: "What is the best entry door material for a Marin County home?",
      a: "For Marin County&apos;s coastal climate, we recommend fiberglass or steel entry door systems over wood for exterior applications. Fiberglass doors from Therma-Tru or Simpson provide the wood aesthetic with significantly better dimensional stability in Marin&apos;s moisture cycling. For architecturally significant estates where wood appearance is required, we specify mahogany or teak with marine-grade finish systems that maintain appearance and performance in coastal conditions.",
    },
  ];
  const relatedServices: { name: string; href: string; desc: string }[] = [
    { name: "Roofing", href: "/services/roofing-marin-county", desc: "Premium slate, metal & clay tile systems for Marin estates" },
    { name: "Interior & Exterior Paint", href: "/services/painting-marin-county", desc: "Museum-grade finishes & master painter execution" },
    { name: "Full Home Remodel", href: "/services/whole-house-remodel-marin-county", desc: "Complete whole-home renovation — structural to aesthetic" },
  ];

  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: MS }}>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services/windows-doors-hero.jpg" alt="Luxury Windows Doors Marin County" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "860px", padding: "0 24px" }}>
          <p style={{ fontFamily: MS, fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD, marginBottom: "20px" }}>ConstruBay · CSLB #1106798</p>
          <h1 style={{ fontFamily: CG, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.05, marginBottom: "24px" }}>Windows &amp; Doors in Marin County</h1>
          <p style={{ fontFamily: MS, fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>Architectural Glazing &amp; Custom Entry Systems — Precision-Installed</p>
          <a href="/request-a-bid" style={{ display: "inline-block", background: GRAD, color: "#000000", fontFamily: MS, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 52px", textDecoration: "none" }}>Schedule a Private Consultation</a>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "96px 24px" }}>
        <p style={{ fontFamily: CG, fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 300, color: "rgba(255,255,255,0.9)", lineHeight: 1.85, marginBottom: "32px" }}>Windows and doors are the architectural punctuation of your estate — defining how light enters, how views are framed, and how the exterior aesthetic reads at every approach. We install custom aluminum-clad, fiberglass, and wood window systems and bespoke entry door packages that are engineered for Marin County&apos;s seismic and coastal conditions while elevating every elevation of your home.</p>
        <p style={{ fontFamily: CG, fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 300, color: "rgba(255,255,255,0.9)", lineHeight: 1.85, marginBottom: "32px" }}>Every window and door installation begins with a thorough structural assessment of the rough opening, header, and flashing conditions. We engineer correct water management, thermal breaks, and seismic anchorage for every opening before specifying the unit — because the most beautiful window system will fail within years if the underlying installation is not executed with precision.</p>
        <p style={{ fontFamily: MS, fontSize: "12px", letterSpacing: "0.07em", color: "rgba(255,255,255,0.45)", lineHeight: 1.9 }}>ConstruBay (CSLB #1106798) is based in Mill Valley and has executed luxury window and door installation projects across Marin, Sonoma, and Napa Counties.</p>
      </section>

      <div style={{ height: "1px", background: GRAD, margin: "0 48px", opacity: 0.35 }} />

      {/* INCLUDED */}
      <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "96px 24px" }}>
        <h2 style={{ fontFamily: CG, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: GOLD, textAlign: "center", marginBottom: "16px" }}>What Is Included</h2>
        <div style={{ width: "40px", height: "1px", background: GRAD, margin: "0 auto 56px", opacity: 0.6 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px" }}>
          {included.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "20px 24px", border: "1px solid rgba(203,178,106,0.12)" }}>
              <span style={{ color: GOLD, fontSize: "14px", flexShrink: 0, marginTop: "3px" }}>◆</span>
              <span style={{ fontFamily: MS, fontSize: "13px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: "1px", background: GRAD, margin: "0 48px", opacity: 0.35 }} />

      {/* MARIN ADVANTAGE */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "96px 24px" }}>
        <h2 style={{ fontFamily: CG, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: GOLD, marginBottom: "16px" }}>The Marin Advantage</h2>
        <div style={{ width: "40px", height: "1px", background: GRAD, marginBottom: "40px", opacity: 0.6 }} />
        <p style={{ fontFamily: MS, fontSize: "14px", lineHeight: 1.95, color: "rgba(255,255,255,0.7)", letterSpacing: "0.03em" }}>Window and door replacement in many Marin County neighborhoods — particularly in Mill Valley, Ross, and Belvedere — requires Design Review Board approval for changes to window size, configuration, or material. Our PlanPass.ai platform pre-screens window permit applications for DRB compliance requirements before we commission custom units, preventing costly redesigns after fabrication. We are also deeply familiar with the seismic bracing requirements for large-format glazing on Marin&apos;s hillside properties, and we specify laminated safety glass as a standard practice for any opening in a seismically sensitive location.</p>
      </section>

      {/* PROCESS */}
      <section style={{ backgroundColor: "rgba(203,178,106,0.04)", padding: "96px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: CG, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: GOLD, textAlign: "center", marginBottom: "16px" }}>Our Process</h2>
          <div style={{ width: "40px", height: "1px", background: GRAD, margin: "0 auto 64px", opacity: 0.6 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "48px", textAlign: "center" }}>
            {[
              { num: "01", title: "Curation & Design", desc: "We begin with an in-depth discovery session at your property, translating your vision into a fixed-scope brief with transparent pricing." },
              { num: "02", title: "Artful Execution", desc: "Our licensed craftsmen execute with precision under direct site supervision — every material sourced, every detail approved by you before installation." },
              { num: "03", title: "The Final Reveal", desc: "A thorough walkthrough with your project lead ensures every element meets our standard before you take possession of your transformed space." },
            ].map((s) => (
              <div key={s.num}>
                <div style={{ fontFamily: CG, fontSize: "3.5rem", fontWeight: 300, color: GOLD, opacity: 0.3, lineHeight: 1 }}>{s.num}</div>
                <h3 style={{ fontFamily: CG, fontSize: "1.5rem", fontWeight: 300, color: "#ffffff", margin: "16px 0 12px" }}>{s.title}</h3>
                <p style={{ fontFamily: MS, fontSize: "12px", lineHeight: 1.85, color: "rgba(255,255,255,0.55)", letterSpacing: "0.03em" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section style={{ maxWidth: "680px", margin: "0 auto", padding: "96px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: CG, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: GOLD, marginBottom: "16px" }}>Investment Range</h2>
        <div style={{ width: "40px", height: "1px", background: GRAD, margin: "0 auto 40px", opacity: 0.6 }} />
        <div style={{ border: "1px solid rgba(203,178,106,0.25)", padding: "48px 32px", marginBottom: "28px" }}>
          <p style={{ fontFamily: CG, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 300, color: "#ffffff", marginBottom: "8px" }}>$25,000 – $95,000+</p>
          <p style={{ fontFamily: MS, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, opacity: 0.65 }}>Typical Project Range</p>
        </div>
        <p style={{ fontFamily: MS, fontSize: "12px", lineHeight: 1.85, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>All projects are delivered under a fixed-scope contract — the number you approve is the number you pay.</p>
      </section>

      <div style={{ height: "1px", background: GRAD, margin: "0 48px", opacity: 0.35 }} />

      {/* FAQ */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "96px 24px" }}>
        <h2 style={{ fontFamily: CG, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: GOLD, marginBottom: "16px" }}>Frequently Asked Questions</h2>
        <div style={{ width: "40px", height: "1px", background: GRAD, marginBottom: "48px", opacity: 0.6 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(203,178,106,0.12)" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "24px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <span style={{ fontFamily: CG, fontSize: "1.2rem", fontWeight: 300, color: "#ffffff", lineHeight: 1.4 }}>{faq.q}</span>
                <span style={{ color: GOLD, fontSize: "22px", flexShrink: 0, transition: "transform 0.3s", transform: openFaq === i ? "rotate(45deg)" : "none", display: "inline-block" }}>+</span>
              </button>
              {openFaq === i && <p style={{ fontFamily: MS, fontSize: "13px", lineHeight: 1.95, color: "rgba(255,255,255,0.62)", paddingBottom: "24px", letterSpacing: "0.03em" }}>{faq.a}</p>}
            </div>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />
      </section>

      {/* RELATED */}
      <section style={{ backgroundColor: "rgba(203,178,106,0.04)", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: CG, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, color: GOLD, textAlign: "center", marginBottom: "48px" }}>Related Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2px" }}>
            {relatedServices.map((s) => (
              <a key={s.href} href={s.href} style={{ display: "block", padding: "40px 32px", backgroundColor: "#0a0a0a", border: "1px solid rgba(203,178,106,0.1)", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(203,178,106,0.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(203,178,106,0.1)")}>
                <h3 style={{ fontFamily: CG, fontSize: "1.4rem", fontWeight: 300, color: "#ffffff", marginBottom: "10px" }}>{s.name}</h3>
                <p style={{ fontFamily: MS, fontSize: "12px", color: "rgba(255,255,255,0.48)", lineHeight: 1.7, marginBottom: "20px" }}>{s.desc}</p>
                <span style={{ fontFamily: MS, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD }}>Explore →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "120px 24px", textAlign: "center", backgroundColor: "#000000" }}>
        <p style={{ fontFamily: MS, fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD, marginBottom: "24px", opacity: 0.7 }}>Begin Your Project</p>
        <h2 style={{ fontFamily: CG, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "24px", lineHeight: 1.1 }}>Begin Your Window &amp; Door Project</h2>
        <p style={{ fontFamily: MS, fontSize: "13px", letterSpacing: "0.07em", color: "rgba(255,255,255,0.58)", maxWidth: "500px", margin: "0 auto 48px", lineHeight: 1.9 }}>Fixed-scope contract. No surprises. Schedule a private consultation with Paulo.</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://calendly.com/construbay/initial-consultation-construbay" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: GRAD, color: "#000000", fontFamily: MS, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 52px", textDecoration: "none" }}>Book a Private Consultation</a>
          <a href="tel:4159689494" style={{ display: "inline-block", border: "1px solid rgba(203,178,106,0.4)", color: GOLD, fontFamily: MS, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 52px", textDecoration: "none" }}>Or Call (415) 968-9494</a>
        </div>
      </section>
    </div>
  );
}
