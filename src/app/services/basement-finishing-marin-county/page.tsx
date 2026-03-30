"use client";

import { useState } from "react";

const CG = "'Cormorant Garamond', Georgia, serif";
const MS = "'Montserrat', Arial, sans-serif";
const GOLD = "#cbb26a";
const GRAD = "linear-gradient(135deg, #bb8b4a, #f7eb9e)";

export default function BasementFinishingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const included: string[] = [
    "Custom wine cellar design & climate control systems",
    "Home theater acoustic engineering & AV rough-in",
    "Subterranean wellness suite & gym construction",
    "Waterproofing membrane & interior drainage systems",
    "Egress window installation & natural light engineering",
    "Moisture barrier & radon mitigation systems",
    "Custom bar & entertainment space construction",
    "Structural ceiling height optimization",
  ];

  const faqs: { q: string; a: string }[] = [
    {
      q: "How much does basement finishing cost in Marin County?",
      a: "Basement finishing in Marin County typically ranges from $95,000 to $250,000+ depending on scope, height, and finish level. Wine cellars with climate control and custom racking typically run $40,000–$90,000 as a standalone scope. Home theater buildouts with acoustic treatment and AV infrastructure commonly range from $60,000–$130,000. ConstruBay delivers fixed-scope pricing before any work begins.",
    },
    {
      q: "Do I need a permit to finish my basement in Marin County?",
      a: "Yes — virtually all basement finishing work in Marin County requires permits covering at minimum electrical, mechanical, and egress compliance. Projects involving structural modifications, waterproofing systems, or wine cellar cooling units require additional permit types. ConstruBay manages the full permit package through our PlanPass.ai platform and handles all inspections as part of your project scope.",
    },
    {
      q: "How do you waterproof a basement in Marin County&apos;s wet climate?",
      a: "We use a combination of interior drainage channel systems, sump pumps, dimple mat moisture barriers, and vapor-barrier wall assemblies engineered for Marin County&apos;s winter rainfall patterns. For hillside properties in Mill Valley and Ross where groundwater pressure is elevated, we often specify exterior waterproofing membrane systems in conjunction with interior solutions. Our waterproofing specifications carry a transferable warranty.",
    },
    {
      q: "Can I build a wine cellar in my Marin County basement?",
      a: "Absolutely — below-grade wine cellars are one of the most popular basement finishing projects we complete in Marin County. We design custom wine cellars with passive or active climate control systems, custom racking (wood, metal, or acrylic), dedicated circuits for cooling units, and vapor barriers engineered to maintain optimal humidity. We have completed wine cellars ranging from 300-bottle intimate collections to 3,000-bottle estate cellars across Mill Valley, Tiburon, and Sonoma County.",
    },
  ];

  const relatedServices: { name: string; href: string; desc: string }[] = [
    {
      name: "Full Home Remodel",
      href: "/services/whole-house-remodel-marin-county",
      desc: "Complete whole-home renovation — structural to aesthetic",
    },
    {
      name: "Home Addition",
      href: "/services/home-addition-marin-county",
      desc: "Primary suite wings, second stories & structural expansions",
    },
    {
      name: "New Construction",
      href: "/services/new-construction-marin-county",
      desc: "Ground-up architect-designed custom homes in Marin County",
    },
  ];

  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: MS }}>

      {/* SECTION 1 — HERO */}
      <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services/basement-hero.jpg" alt="Basement Finishing Marin County" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "860px", padding: "0 24px" }}>
          <p style={{ fontFamily: MS, fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD, marginBottom: "20px" }}>ConstruBay · CSLB #1106798</p>
          <h1 style={{ fontFamily: CG, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.05, marginBottom: "24px" }}>Basement Finishing in Marin County</h1>
          <p style={{ fontFamily: MS, fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>Below-Grade Luxury Spaces — Wine Cellars, Home Theaters &amp; Wellness Retreats</p>
          <a href="/request-a-bid" style={{ display: "inline-block", background: GRAD, color: "#000000", fontFamily: MS, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 52px", textDecoration: "none" }}>Schedule a Private Consultation</a>
        </div>
      </section>

      {/* SECTION 2 — PHILOSOPHY */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "96px 24px" }}>
        <p style={{ fontFamily: CG, fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 300, color: "rgba(255,255,255,0.9)", lineHeight: 1.85, marginBottom: "32px" }}>Below-grade spaces offer unparalleled acoustic isolation — the ideal canvas for wine cellars, private screening rooms, and subterranean wellness retreats. We engineer lower levels with uncompromising waterproofing and climate control that protects your luxury investments and creates spaces that are as functional as they are dramatic.</p>
        <p style={{ fontFamily: CG, fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 300, color: "rgba(255,255,255,0.9)", lineHeight: 1.85, marginBottom: "32px" }}>Basement finishing in Marin County requires specialized knowledge of below-grade waterproofing systems, drainage engineering, and egress compliance. We approach every basement project as a structural engineering challenge first, ensuring that moisture mitigation, seismic anchoring, and mechanical access are fully resolved before any luxury finishes are specified.</p>
        <p style={{ fontFamily: MS, fontSize: "12px", letterSpacing: "0.07em", color: "rgba(255,255,255,0.45)", lineHeight: 1.9 }}>ConstruBay (CSLB #1106798) is based in Mill Valley and has executed basement finishing projects across Marin, Sonoma, and Napa Counties.</p>
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
        <p style={{ fontFamily: MS, fontSize: "14px", lineHeight: 1.95, color: "rgba(255,255,255,0.7)", letterSpacing: "0.03em" }}>Basement finishing projects in Marin County must navigate seismic regulations, below-grade moisture management specific to the region&apos;s wet winters, and egress requirements that vary by jurisdiction. Our team has completed below-grade projects on hillside lots throughout Mill Valley, Ross, and Kentfield, where groundwater management is a primary engineering consideration. We use our PlanPass.ai permit platform to manage the multi-discipline permit packages that basement finishing requires — structural, electrical, mechanical, and egress — coordinating submissions to minimize review cycles across Marin County Building Services and local city jurisdictions.</p>
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
          <p style={{ fontFamily: CG, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 300, color: "#ffffff", marginBottom: "8px" }}>$95,000 – $250,000+</p>
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
        <h2 style={{ fontFamily: CG, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "24px", lineHeight: 1.1 }}>Begin Your Basement Finishing Project</h2>
        <p style={{ fontFamily: MS, fontSize: "13px", letterSpacing: "0.07em", color: "rgba(255,255,255,0.58)", maxWidth: "500px", margin: "0 auto 48px", lineHeight: 1.9 }}>Fixed-scope contract. No surprises. Schedule a private consultation with Paulo.</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://calendly.com/construbay/initial-consultation-construbay" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: GRAD, color: "#000000", fontFamily: MS, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 52px", textDecoration: "none" }}>Book a Private Consultation</a>
          <a href="tel:4159689494" style={{ display: "inline-block", border: "1px solid rgba(203,178,106,0.4)", color: GOLD, fontFamily: MS, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", padding: "18px 52px", textDecoration: "none" }}>Or Call (415) 968-9494</a>
        </div>
      </section>

    </div>
  );
}
