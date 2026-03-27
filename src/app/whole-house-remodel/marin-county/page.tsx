"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does a whole house remodel cost in Marin County?",
    answer:
      "Whole house remodels in Marin County range from $300,000 to $1.5 million or more depending on home size, scope, and finish level. Seismic retrofitting, WUI zone compliance, and the premium materials expected in Marin communities all factor into final costs. ConstruBay (CSLB #1106798) provides transparent line-item estimates after an in-home assessment.",
  },
  {
    question: "Do I need seismic retrofitting during a whole house remodel in Marin?",
    answer:
      "In most cases, yes. Marin County homes built before 1980 typically lack modern seismic bracing. A whole house remodel is the ideal time to add foundation bolting, cripple wall bracing, and shear wall upgrades. These improvements protect your investment and are often required when the scope of work exceeds 50 percent of the home's value.",
  },
  {
    question: "How long does a whole house remodel take in Marin County?",
    answer:
      "Plan for 6 to 18 months depending on scope. A comprehensive renovation of a 2,000 square foot home typically takes 8 to 12 months for construction, plus 2 to 4 months for design and permitting. ConstruBay provides detailed schedules with milestone tracking.",
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

export default function WholeHouseRemodelMarinPage() {
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
            Whole House Remodel in Marin County
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Comprehensive home renovations across Mill Valley, Tiburon,
            Sausalito, and all Marin communities. Seismic upgrades, WUI
            compliance, and luxury finishes under one licensed contractor.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Schedule a Whole House Consultation
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Why Marin Homeowners Choose Whole House Remodels
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Marin County&apos;s housing stock spans a century of architectural
            styles, from Craftsman bungalows and mid-century ranches to
            contemporary hillside homes. Many of these homes have exceptional
            bones and irreplaceable locations but lack the modern systems,
            layouts, and finishes that today&apos;s families need. A whole house
            remodel preserves what makes your home special while transforming
            everything else.
          </p>
          <p>
            ConstruBay (CSLB #1106798) specializes in comprehensive renovations
            that address structure, systems, and aesthetics simultaneously.
            Rather than piecemeal improvements that never quite come together, a
            whole house approach lets us integrate seismic upgrades, energy
            efficiency improvements, modern mechanical systems, and premium
            finishes into a cohesive plan. The result is a home that functions
            like new construction while retaining the character and location
            that drew you to Marin in the first place.
          </p>
        </div>
      </section>

      {/* Seismic & WUI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Seismic Retrofitting &amp; WUI Zone Compliance
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Marin County sits adjacent to the San Andreas Fault, and homes
              built before modern seismic codes are vulnerable to earthquake
              damage. A whole house remodel is the most cost-effective time to
              add seismic protection because walls are already open and
              structural connections are accessible. ConstruBay integrates
              foundation bolting, cripple wall bracing, hold-down hardware, and
              shear wall installation into every qualifying project.
            </p>
            <p>
              Much of Marin falls within the Wildland-Urban Interface zone,
              requiring fire-resistant construction standards. During a whole
              house remodel, we upgrade roofing to Class A materials, install
              ignition-resistant siding and soffits, replace single-pane windows
              with tempered dual-pane units, and create defensible space
              landscaping plans. These upgrades protect your family and often
              reduce insurance premiums significantly.
            </p>
          </div>
        </div>
      </section>

      {/* City-Specific Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Marin Communities We Serve
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            ConstruBay performs whole house remodels across every Marin County
            community. Each town has its own architectural character, permit
            requirements, and construction challenges. Our local expertise means
            we understand the specific design review processes, neighborhood
            compatibility standards, and site conditions in every jurisdiction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            <Link href="/mill-valley" className="border border-brand-tan/30 p-5 text-center hover:bg-white/5 transition-colors">
              <p className="text-[#C9A84C] font-semibold">Mill Valley</p>
              <p className="text-white/60 text-sm mt-1">Hillside homes, Design Review Board</p>
            </Link>
            <Link href="/tiburon" className="border border-brand-tan/30 p-5 text-center hover:bg-white/5 transition-colors">
              <p className="text-[#C9A84C] font-semibold">Tiburon</p>
              <p className="text-white/60 text-sm mt-1">Waterfront estates, Belvedere Island</p>
            </Link>
            <Link href="/sausalito" className="border border-brand-tan/30 p-5 text-center hover:bg-white/5 transition-colors">
              <p className="text-[#C9A84C] font-semibold">Sausalito</p>
              <p className="text-white/60 text-sm mt-1">Hillside and waterfront properties</p>
            </Link>
          </div>
          <p>
            We also serve San Rafael, Corte Madera, Larkspur, San Anselmo,
            Fairfax, Ross, Kentfield, Novato, and unincorporated Marin County
            areas. Every project benefits from the same AI-powered permit
            analysis through PlanPass.ai and the same commitment to quality
            craftsmanship.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Marin County Whole House Remodel FAQs
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
            Transform Your Marin County Home
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From seismic retrofitting to luxury finishes, ConstruBay delivers
            whole house remodels that honor Marin&apos;s architectural heritage
            while meeting modern standards. Licensed general contractor CSLB
            #1106798.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
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
            <Link href="/services/whole-house-remodel-marin-county" className="hover:text-brand-tan transition-colors">
              Whole House Remodel Services
            </Link>
            <Link href="/permit-risk-report" className="hover:text-brand-tan transition-colors">
              Permit Risk Report
            </Link>
            <Link href="/services" className="hover:text-brand-tan transition-colors">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
