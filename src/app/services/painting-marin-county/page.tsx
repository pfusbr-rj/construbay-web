"use client";

import { useState } from "react";

const CG = "'Cormorant Garamond', Georgia, serif";
const MS = "'Montserrat', Arial, sans-serif";
const GOLD = "#cbb26a";
const GRAD = "linear-gradient(135deg, #bb8b4a, #f7eb9e)";

export default function PaintingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const included: string[] = [
    "Multi-step surface preparation & repair",
    "Exterior wood siding preparation & priming",
    "Premium Benjamin Moore & Farrow & Ball application",
    "Custom color consultation & color sampling",
    "Interior wall, ceiling & trim painting",
    "Cabinetry spray finishing",
    "Deck & fence staining & sealing",
    "Wallpaper installation & removal",
  ];

  const faqs: { q: string; a: string }[] = [
    {
      q: "How much does a luxury home painting project cost in Marin County?",
      a: "Interior painting for a Marin County estate typically ranges from $15,000 to $35,000 for 3,000–5,000 square feet, including multi-step prep, premium paint, and trim work. Full exterior painting projects typically range from $20,000 to $65,000+ depending on siding type, accessibility, and the extent of surface repair and wood replacement required. ConstruBay provides detailed fixed-scope estimates with line-item pricing for all surfaces, prep work, and materials.",
    },
    {
      q: "What paint brands do you use for Marin County homes?",
      a: "ConstruBay specifies Benjamin Moore Aura, Sherwin-Williams Emerald, and Farrow & Ball as our primary interior paint brands, depending on finish requirement and client preference. For exterior applications in Marin&apos;s coastal climate, we typically specify Benjamin Moore Regal Select Exterior or Sherwin-Williams Duration, both of which provide excellent UV and moisture resistance. We can work with any premium paint brand based on client preference.",
    },
    {
      q: "How long does exterior paint last on a Marin County home?",
      a: "In Marin County&apos;s coastal climate, a properly prepared and applied premium exterior paint system should last 8–12 years before requiring full repainting. The critical factors are surface preparation quality (especially on wood siding), primer selection, and topcoat film thickness. We apply a minimum of two topcoats on all exterior surfaces and use quality control checks at each stage of the application process.",
    },
    {
      q: "Do I need approval to change my home&apos;s exterior paint color in Marin County?",
      a: "In many Marin County neighborhoods — particularly in Mill Valley, Ross, and San Anselmo — properties within Design Review Board jurisdiction require approval for exterior color changes. Historic districts and hillside areas have the most stringent requirements. ConstruBay can advise on whether your property requires Design Review Board approval and can manage the color submission process as part of your painting project.",
    },
  ];

  const relatedServices: { name: string; href: string; desc: string }[] = [
    {
      name: "Roofing",
      href: "/services/roofing-marin-county",
      desc: "Premium slate, metal & clay tile systems for Marin estates",
    },
    {
      name: "Windows & Doors",
      href: "/services/windows-doors-marin-county",
      desc: "Architectural glazing & custom entry systems",
    },
    {
      name: "Full Home Remodel",
      href: "/services/whole-house-remodel-marin-county",
      desc: "Complete whole-home renovation — structural to aesthetic",
    },
  ];

  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: MS }}>

      {/* SECTION 1 — HERO */}
      <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services/painting-hero.jpg" alt="Luxury Painting Contractor Marin County" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "860px", padding: "0 24px" }}>
          <p style={{ fontFamily: MS, fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD, marginBottom: "20px" }}>ConstruBay · CSLB #1106798</p>
          <h1 style={{ fontFamily: CG, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.05, marginBottom: "24px" }}>Interior &amp; Exterior Painting in Marin County</h1>
          <p style={{ fontFamily: MS, fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>Museum-Grade Finishes — Where Surface Preparation Defines the Result</p>
          <a href="/request-a-bid" style={{ display: "inline-block", background: GRAD, color: "#000000", fontFamily: MS, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 52px", textDecoration: "none" }}>Schedule a Private Consultation</a>
        </div>
      </section>

      {/* SECTION 2 — PHILOSOPHY */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "96px 24px" }}>
        <p style={{ fontFamily: CG, fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 300, color: "rgba(255,255,255,0.9)", lineHeight: 1.85, marginBottom: "32px" }}>The difference between a mediocre paint job and a museum-grade finish is almost entirely in the preparation. Our master painters execute multi-step surface preparation protocols — filling, sanding, priming, and sealing — before a single topcoat is applied. The result is a finish that holds for decades rather than years, and looks better at five years than most painters&apos; work looks on day one.</p>
        <p style={{ fontFamily: CG, fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 300, color: "rgba(255,255,255,0.9)", lineHeight: 1.85, marginBottom: "32px" }}>We apply the same material specification discipline to painting that we apply to structural work. Every project begins with a materials review — evaluating the existing substrate, moisture conditions, sun exposure, and finish sheen requirements — before we recommend a paint system. In Marin&apos;s coastal climate, vapor permeability and UV resistance are as important as color accuracy.</p>
        <p style={{ fontFamily: MS, fontSize: "12px", letterSpacing: "0.07em", color: "rgba(255,255,255,0.45)", lineHeight: 1.9 }}>ConstruBay (CSLB #1106798) is based in Mill Valley and has executed interior and exterior painting projects across Marin, Sonoma, and Napa Counties.</p>
      </section>

      <div style={{ height: "1px", background: GRAD, margin: "0 48px", opacity: 0.35 }} />

      {/* SECTION 3 — WHAT IS INCLUDED */}
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

      {/* SECTION 4 — MARIN ADVANTAGE */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "96px 24px" }}>
        <h2 style={{ fontFamily: CG, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: GOLD, marginBottom: "16px" }}>The Marin Advantage</h2>
        <div style={{ width: "40px", height: "1px", background: GRAD, marginBottom: "40px", opacity: 0.6 }} />
        <p style={{ fontFamily: MS, fontSize: "14px", lineHeight: 1.95, color: "rgba(255,255,255,0.7)", letterSpacing: "0.03em" }}>Exterior painting in Marin County&apos;s coastal climate requires paint systems formulated for salt air, high UV exposure, and significant moisture cycling between wet winters and dry summers. We specify exterior paint systems with elastomeric properties for wood substrates that experience seasonal movement, and we use vapor-permeable primers on any substrate where moisture intrusion is a risk. For historic properties in Mill Valley and Ross that are subject to Design Review Board approval, we manage color approval submissions as part of the project scope, coordinating with the relevant preservation guidelines.</p>
      </section>

      {/* SECTION 5 — PROCESS */}
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

      {/* SECTION 6 — INVESTMENT */}
      <section style={{ maxWidth: "680px", margin: "0 auto", padding: "96px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: CG, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: GOLD, marginBottom: "16px" }}>Investment Range</h2>
        <div style={{ width: "40px", height: "1px", background: GRAD, margin: "0 auto 40px", opacity: 0.6 }} />
        <div style={{ border: "1px solid rgba(203,178,106,0.25)", padding: "48px 32px", marginBottom: "28px" }}>
          <p style={{ fontFamily: CG, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 300, color: "#ffffff", marginBottom: "8px" }}>$15,000 – $65,000+</p>
          <p style={{ fontFamily: MS, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, opacity: 0.65 }}>Typical Project Range</p>
        </div>
        <p style={{ fontFamily: MS, fontSize: "12px", lineHeight: 1.85, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>All projects are delivered under a fixed-scope contract — the number you approve is the number you pay.</p>
      </section>

      <div style={{ height: "1px", background: GRAD, margin: "0 48px", opacity: 0.35 }} />

      {/* SECTION 7 — FAQ */}
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

      {/* SECTION 8 — RELATED SERVICES */}
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

      {/* SECTION 9 — FINAL CTA */}
      <section style={{ padding: "120px 24px", textAlign: "center", backgroundColor: "#000000" }}>
        <p style={{ fontFamily: MS, fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD, marginBottom: "24px", opacity: 0.7 }}>Begin Your Project</p>
        <h2 style={{ fontFamily: CG, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "24px", lineHeight: 1.1 }}>Begin Your Painting Project</h2>
        <p style={{ fontFamily: MS, fontSize: "13px", letterSpacing: "0.07em", color: "rgba(255,255,255,0.58)", maxWidth: "500px", margin: "0 auto 48px", lineHeight: 1.9 }}>Fixed-scope contract. No surprises. Schedule a private consultation with Paulo.</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://calendly.com/construbay/initial-consultation-construbay" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: GRAD, color: "#000000", fontFamily: MS, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 52px", textDecoration: "none" }}>Book a Private Consultation</a>
          <a href="tel:4159689494" style={{ display: "inline-block", border: "1px solid rgba(203,178,106,0.4)", color: GOLD, fontFamily: MS, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 52px", textDecoration: "none" }}>Or Call (415) 968-9494</a>
        </div>
      </section>

    </div>
  );
}
