"use client";

import { useState } from "react";

const CG = "'Cormorant Garamond', Georgia, serif";
const MS = "'Montserrat', Arial, sans-serif";
const GOLD = "#cbb26a";
const GRAD = "linear-gradient(135deg, #bb8b4a, #f7eb9e)";

export default function LandscapingGradingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const included: string[] = [
    "Site grading & slope stabilization engineering",
    "Retaining wall design & construction (concrete, stone & gabion)",
    "Drainage system design & installation",
    "Irrigation system design & installation",
    "Decomposed granite & natural stone pathways",
    "Outdoor staircase & level change construction",
    "Planting bed preparation & soil amendment",
    "Landscape lighting design & installation",
  ];
  const faqs: { q: string; a: string }[] = [
    {
      q: "How much does estate landscaping cost in Marin County?",
      a: "Estate landscaping and grading in Marin County typically ranges from $25,000 to $120,000+ for the civil and construction scope — excluding planting and softscape. Retaining wall construction typically runs $200–$600+ per linear foot depending on height, material, and engineering requirements. Drainage system installation for a typical hillside Marin property runs $15,000–$40,000. ConstruBay provides fixed-scope pricing for all landscape construction and grading work.",
    },
    {
      q: "Do I need a grading permit in Marin County?",
      a: "Grading permits are required in Marin County for earthwork that exceeds certain cut or fill thresholds — typically 50 cubic yards in unincorporated Marin County, with lower thresholds in incorporated cities. Grading permits require an engineer-stamped grading plan, drainage calculations, and in some cases an erosion control plan. ConstruBay manages the grading permit process through our PlanPass.ai platform and coordinates with civil engineers as part of the project scope.",
    },
    {
      q: "How do you manage drainage on a Marin County hillside property?",
      a: "Hillside drainage management in Marin County requires a combination of surface drainage swales, subsurface drainage systems (French drains, catch basins), and in many cases retaining structures that redirect water away from foundations and slopes. We conduct a site drainage assessment as part of every hillside project, and we coordinate with civil engineers for properties with complex drainage patterns or documented erosion history. Our drainage systems are designed to handle Marin&apos;s highest-intensity storm events.",
    },
    {
      q: "Can you build retaining walls in Marin County fire hazard zones?",
      a: "Yes — retaining walls are typically permitted and often required in WUI fire hazard zones to manage slope stability and provide defensible space structure. Non-combustible retaining materials (concrete, stone, gabion) are preferred and often required in close proximity to structures. We design retaining systems in compliance with both structural engineering requirements and Marin County Fire&apos;s non-combustible zone guidelines, and we manage the permit submissions for both agencies.",
    },
  ];
  const relatedServices: { name: string; href: string; desc: string }[] = [
    { name: "Driveways & Hardscape", href: "/services/driveways-hardscape-marin-county", desc: "Grand entrances & permeable stone hardscaping" },
    { name: "Deck & Outdoor Living", href: "/services/deck-outdoor-living-marin-county", desc: "Year-round outdoor living spaces for Marin estates" },
    { name: "Fencing & Gates", href: "/services/fencing-gates-marin-county", desc: "Custom estate perimeters & automated gate systems" },
  ];

  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: MS }}>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services/landscaping-hero.jpg" alt="Hillside estate landscaping with stone retaining walls and graded terraces" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "860px", padding: "0 24px" }}>
          <p style={{ fontFamily: MS, fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD, marginBottom: "20px" }}>ConstruBay · CSLB #1106798</p>
          <h1 style={{ fontFamily: CG, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.05, marginBottom: "24px" }}>Landscaping &amp; Grading in Marin County</h1>
          <p style={{ fontFamily: MS, fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>Hillside Grading, Drainage &amp; Estate Landscape Construction</p>
          <a href="/request-a-bid" style={{ display: "inline-block", background: GRAD, color: "#000000", fontFamily: MS, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 52px", textDecoration: "none" }}>Schedule a Private Consultation</a>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "96px 24px" }}>
        <p style={{ fontFamily: CG, fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 300, color: "rgba(255,255,255,0.9)", lineHeight: 1.85, marginBottom: "32px" }}>In Marin County, landscape and grading work is inseparable from civil engineering. Hillside lots require retaining systems, drainage management, and soil stability solutions that must be engineered before any planting or hardscape is specified. We manage the civil and structural aspects of landscape construction — grading, drainage, retaining walls, and irrigation infrastructure — as part of a unified scope.</p>
        <p style={{ fontFamily: CG, fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 300, color: "rgba(255,255,255,0.9)", lineHeight: 1.85, marginBottom: "32px" }}>We partner with Marin County&apos;s premier landscape architects and designers to deliver complete estate landscapes that integrate naturally with the surrounding terrain. Our role is to execute the civil and construction scope with precision — preparing the canvas for planting and finishing with the same rigor we bring to interior construction.</p>
        <p style={{ fontFamily: MS, fontSize: "12px", letterSpacing: "0.07em", color: "rgba(255,255,255,0.45)", lineHeight: 1.9 }}>ConstruBay (CSLB #1106798) is based in Mill Valley and has executed landscaping and grading projects across Marin, Sonoma, and Napa Counties.</p>
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
        <p style={{ fontFamily: MS, fontSize: "14px", lineHeight: 1.95, color: "rgba(255,255,255,0.7)", letterSpacing: "0.03em" }}>Grading and landscape construction in Marin County triggers a range of regulatory requirements depending on project scope — including grading permits for earthwork above certain cut/fill thresholds, stormwater pollution prevention plans (SWPPP) for disturbed areas above 1 acre, and in many hillside areas, geotechnical reports for retaining wall systems above 3 feet in height. Our PlanPass.ai platform manages the multi-agency permit coordination that significant landscape and grading projects require in Marin County. We have completed hillside grading projects throughout Mill Valley, Tiburon, Ross, and Kentfield, and we maintain strong relationships with the geotechnical engineers and landscape architects whose expertise is required on complex Marin hillside projects.</p>
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
          <p style={{ fontFamily: CG, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 300, color: "#ffffff", marginBottom: "8px" }}>$25,000 – $120,000+</p>
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
        <h2 style={{ fontFamily: CG, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "24px", lineHeight: 1.1 }}>Begin Your Landscaping &amp; Grading Project</h2>
        <p style={{ fontFamily: MS, fontSize: "13px", letterSpacing: "0.07em", color: "rgba(255,255,255,0.58)", maxWidth: "500px", margin: "0 auto 48px", lineHeight: 1.9 }}>Fixed-scope contract. No surprises. Schedule a private consultation with Paulo.</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://calendly.com/construbay/initial-consultation-construbay" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: GRAD, color: "#000000", fontFamily: MS, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 52px", textDecoration: "none" }}>Book a Private Consultation</a>
          <a href="tel:4159689494" style={{ display: "inline-block", border: "1px solid rgba(203,178,106,0.4)", color: GOLD, fontFamily: MS, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 52px", textDecoration: "none" }}>Or Call (415) 968-9494</a>
        </div>
      </section>
    </div>
  );
}
