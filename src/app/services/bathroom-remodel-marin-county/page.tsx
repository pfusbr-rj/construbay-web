"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does a bathroom remodel cost in Marin County?",
    answer:
      "Bathroom remodels in Marin County typically range from $40,000 to $150,000 or more. A standard guest bathroom remodel starts around $40,000, while a primary suite with luxury finishes, heated floors, and custom tile work can exceed $150,000. The final cost depends on scope, materials, and whether structural or plumbing changes are involved.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "Most bathroom remodels in Marin County take 6 to 10 weeks from demolition to final walkthrough. Simpler cosmetic refreshes can be completed in 4 to 5 weeks, while full gut renovations with structural changes, plumbing relocation, or expansion may take 10 to 12 weeks. Permitting adds 2 to 6 weeks before construction begins.",
  },
  {
    question: "Do I need permits for a bathroom remodel in Marin County?",
    answer:
      "Yes, permits are required for any work involving plumbing changes, electrical modifications, structural alterations, or changes to ventilation. Cosmetic updates like painting, new fixtures on existing rough-ins, or replacing a vanity typically do not require permits. ConstruBay handles all permit applications and inspections as part of our service.",
  },
  {
    question: "Can you expand my bathroom in Marin County?",
    answer:
      "Yes, bathroom expansions are one of our specialties. We can borrow space from adjacent closets or rooms, bump out an exterior wall, or reconfigure the floor plan to create a larger bathroom. Expansions require structural engineering, updated permits, and careful waterproofing. Our PlanPass.ai system helps identify zoning and code requirements before we submit plans.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const bathroomFeatures = [
  {
    title: "Walk-In Showers",
    description:
      "Curbless and low-threshold walk-in showers are the most requested feature in Marin County bathroom remodels. We build frameless glass enclosures with linear drains, bench seating, recessed niches, and rain showerheads. Every walk-in shower is waterproofed with Schluter DITRA or Kerdi membrane systems to prevent moisture damage behind the tile.",
  },
  {
    title: "Freestanding Tubs",
    description:
      "Freestanding soaking tubs create a spa-like focal point in primary bathrooms. We install stone resin, cast iron, and acrylic freestanding tubs with floor-mounted fillers and proper structural support. Placement requires careful planning for plumbing access, floor reinforcement, and drain positioning.",
  },
  {
    title: "Heated Floors",
    description:
      "Radiant heated floors transform cold tile into a warm, luxurious surface. We install electric radiant heat mats beneath tile, stone, and engineered wood flooring. The system is controlled by a programmable thermostat and adds minimal thickness to the floor assembly. Heated floors are especially popular in Marin County homes where cool mornings are the norm year-round.",
  },
  {
    title: "Custom Vanities & Cabinetry",
    description:
      "Custom vanities maximize storage and set the design tone for the entire bathroom. We build floating vanities, double-sink configurations, and furniture-style pieces with soft-close drawers, integrated outlets, and custom countertops in quartz, marble, or porcelain slab. Every vanity is designed to fit your specific space and style.",
  },
];

const processSteps = [
  {
    step: "Design Consultation",
    detail:
      "We assess your existing bathroom, discuss your vision, and develop a design plan including layout, materials, and fixtures. We provide 3D renderings so you can visualize the finished space before construction begins.",
  },
  {
    step: "Permits with PlanPass.ai",
    detail:
      "For remodels involving plumbing, electrical, or structural changes, we handle all permit applications. Our PlanPass.ai system pre-analyzes plans against Title 24 energy code, plumbing code, and local requirements to avoid delays.",
  },
  {
    step: "Construction",
    detail:
      "Demolition, rough plumbing and electrical, waterproofing, tile installation, fixture setting, and finish work. A dedicated project manager keeps you informed with regular updates and coordinates all trades.",
  },
  {
    step: "Final Walkthrough",
    detail:
      "We conduct a detailed walkthrough, address any punch list items, and ensure everything meets our quality standards and your expectations. All permits are finalized and closed.",
  },
];

export default function BathroomRemodelMarinCountyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/50 via-brand-dark to-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
            Licensed General Contractor &middot; CSLB #1106798
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Bathroom Remodel in Marin County
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Luxury bathroom remodeling with spa-inspired design. Walk-in
            showers, freestanding tubs, heated floors, custom vanities. Fully
            permitted. CSLB #1106798.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* Why Remodel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Luxury Bathroom Trends in Marin County
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Marin County homeowners are investing in spa-inspired bathroom
            designs that transform daily routines into moments of luxury. The
            trend toward larger, more open bathrooms with natural materials,
            warm lighting, and high-end fixtures reflects the wellness-focused
            lifestyle that defines communities like Mill Valley, Tiburon, and
            San Anselmo.
          </p>
          <p>
            The most requested features include curbless walk-in showers with
            frameless glass, freestanding soaking tubs, heated porcelain or
            natural stone floors, floating vanities with integrated storage,
            and wet rooms that eliminate the traditional shower-tub barrier.
            Natural materials &mdash; marble, travertine, wood-look porcelain,
            and matte black or brushed gold hardware &mdash; dominate the Marin
            County aesthetic.
          </p>
          <p>
            Beyond aesthetics, modern bathroom remodels address critical
            functional concerns: waterproofing systems like Schluter DITRA and
            Kerdi membranes protect the structure behind the tile, proper
            ventilation prevents mold in our coastal climate, and ADA-compliant
            features like grab bars, comfort-height toilets, and barrier-free
            showers add long-term accessibility for aging in place.
          </p>
          <p>
            ConstruBay (CSLB #1106798) is a licensed general contractor
            specializing in bathroom remodeling throughout Marin County. We
            manage every phase from design through final inspection, including
            all permits for plumbing and structural changes.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            What We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bathroomFeatures.map((feature) => (
              <div
                key={feature.title}
                className="border border-white/20 p-6"
              >
                <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waterproofing & Tile */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Waterproofing &amp; Tile Systems
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Proper waterproofing is the most critical element of any bathroom
            remodel, and it is where many contractors cut corners. Water damage
            behind tile is the number one cause of costly bathroom failures,
            often not discovered until mold, rot, or structural damage has
            already occurred.
          </p>
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            Schluter Systems
          </h3>
          <p>
            We exclusively use Schluter DITRA and Kerdi waterproofing membranes
            &mdash; the industry gold standard. DITRA provides uncoupling,
            waterproofing, and vapor management beneath tile floors. Kerdi
            membrane waterproofs shower walls, curbs, and benches. The Schluter
            system includes integrated drains, niches, and edge profiles that
            create a fully waterproof assembly from substrate to finished tile.
          </p>
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            Tile Installation
          </h3>
          <p>
            Our tile installers are experienced with large-format porcelain
            slabs, natural stone, mosaic accents, and complex patterns
            including herringbone, chevron, and waterfall installations. We use
            leveling systems for lippage-free results and color-matched grout
            for a seamless finish. Every tile installation is inspected for
            proper thinset coverage, grout consistency, and waterproof
            integrity.
          </p>
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            ADA &amp; Accessibility
          </h3>
          <p>
            Many Marin County homeowners are incorporating accessibility
            features into their bathroom remodels for aging-in-place comfort.
            We install blocking for future grab bars, comfort-height toilets,
            barrier-free shower entries, hand-held showerheads, and wider
            doorways. These features can be designed to blend seamlessly with
            luxury aesthetics.
          </p>
        </div>
      </section>

      {/* Cost Range */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-y border-brand-tan/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
            Bathroom Remodel Cost Ranges in Marin County
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Bathroom remodel costs in Marin County range from $40,000 to
              $150,000 or more, depending on scope, materials, and whether
              structural changes are involved.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Guest Bathroom Refresh
                </h3>
                <p className="text-2xl text-white font-bold">$40K &ndash; $65K</p>
                <p className="text-white/60 text-sm mt-1">
                  New tile, vanity, fixtures, lighting
                </p>
              </div>
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Primary Bathroom Remodel
                </h3>
                <p className="text-2xl text-white font-bold">$65K &ndash; $100K</p>
                <p className="text-white/60 text-sm mt-1">
                  Walk-in shower, freestanding tub, custom vanity
                </p>
              </div>
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Luxury Spa Bathroom
                </h3>
                <p className="text-2xl text-white font-bold">$100K &ndash; $150K+</p>
                <p className="text-white/60 text-sm mt-1">
                  Heated floors, steam shower, premium materials
                </p>
              </div>
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Bathroom Expansion
                </h3>
                <p className="text-2xl text-white font-bold">$80K &ndash; $150K+</p>
                <p className="text-white/60 text-sm mt-1">
                  Structural changes, plumbing relocation
                </p>
              </div>
            </div>
            <p>
              These ranges include design, materials, labor, permits, and
              project management. ConstruBay (CSLB #1106798) provides detailed
              estimates after an initial consultation and site visit.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10 text-center">
            Our Bathroom Remodel Process
          </h2>
          <div className="space-y-8">
            {processSteps.map((item, i) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
                  <span className="text-[#C9A84C] font-bold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.step}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-sm mt-10 text-center">
            PlanPass.ai pre-analyzes your plans to catch code and permit issues
            before submission &mdash; saving weeks of delay.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Bathroom Remodel FAQs &mdash; Marin County
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-brand-tan/30">
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-semibold pr-4">
                    {item.question}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#B5A48B"
                    strokeWidth="2"
                    className={`flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-white/70 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-t border-brand-tan/20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Start Your Bathroom Remodel
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From design consultation to final walkthrough, ConstruBay manages
            every detail of your bathroom remodel. Licensed general contractor
            CSLB #1106798, based in Mill Valley, serving all of Marin County.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Estimate
          </Link>
          <p className="mt-6 text-white/50 text-sm">
            Or call us directly:{" "}
            <a
              href="tel:4159689494"
              className="text-brand-tan hover:underline"
            >
              (415) 968-9494
            </a>{" "}
            &middot; CSLB #1106798
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <Link href="/services/kitchen-remodel-marin-county" className="hover:text-brand-tan transition-colors">
              Kitchen Remodel
            </Link>
            <Link href="/services/whole-house-remodel-marin-county" className="hover:text-brand-tan transition-colors">
              Whole House Remodel
            </Link>
            <Link href="/services" className="hover:text-brand-tan transition-colors">
              All Services
            </Link>
            <Link href="/" className="hover:text-brand-tan transition-colors">
              Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
