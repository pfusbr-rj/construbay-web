"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How does ConstruBay handle well and septic for Sebastopol builds?",
    answer:
      "Many Sebastopol and West Sonoma County properties rely on private wells and septic systems. We coordinate well flow testing, water quality analysis, septic percolation testing, and system design as part of our project scope. For ADUs, we determine whether the existing septic system can handle additional capacity or if expansion is needed.",
  },
  {
    question: "What is the permit process for building in Sebastopol?",
    answer:
      "Properties within Sebastopol city limits are permitted through the Sebastopol Planning Department at 7120 Bodega Avenue. Rural properties outside city limits go through the Sonoma County Permit and Resource Management Department (PRMD). We navigate both systems and use PlanPass.ai to pre-analyze plans.",
  },
  {
    question: "Does ConstruBay build eco-friendly homes in Sebastopol?",
    answer:
      "Absolutely. Sebastopol's community values align with sustainable construction, and we build with energy-efficient systems, sustainable materials, solar-ready designs, and water-conservation features. We help clients exceed Title 24 energy requirements and incorporate green building practices throughout.",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ConstruBay",
  description: "Licensed General Contractor in Sebastopol, CA",
  url: "https://www.construbay.com/sebastopol",
  telephone: "(415) 968-9494",
  areaServed: {
    "@type": "City",
    name: "Sebastopol",
    addressRegion: "CA",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sebastopol",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function SebastopolPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/50 via-brand-dark to-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
            Licensed General Contractor &middot; CSLB #1106798
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Licensed General Contractor in Sebastopol, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Eco-friendly builds, ADUs, and whole house remodels in West Sonoma
            County&apos;s artistic community. Well and septic expertise for
            rural properties.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Sebastopol: Sustainable Building in West Sonoma County
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Sebastopol is the creative heart of West Sonoma County &mdash; a
            small city with an outsized commitment to sustainability, artistic
            expression, and community character. Surrounded by apple orchards,
            vineyards, and rolling hillsides, Sebastopol and its neighboring
            communities of Graton, Freestone, and the Cunningham area attract
            homeowners who value eco-conscious living, unique architecture, and
            connection to the land. The construction projects here reflect those
            values: energy-efficient homes, sustainable materials, and designs
            that work with the natural landscape rather than against it.
          </p>
          <p>
            ConstruBay (CSLB #1106798) serves Sebastopol and all of West Sonoma
            County with full-service general contracting tailored to the
            region&apos;s unique requirements. Many properties in and around
            Sebastopol are on private well water and septic systems &mdash; a
            reality that significantly impacts construction planning. Adding an
            ADU or expanding a home on a septic system requires careful
            evaluation of existing system capacity, percolation testing, and
            potentially designing a new or expanded leach field. Well water
            supply must be tested for flow rate and quality. Our team coordinates
            all of these assessments as a standard part of our project planning.
          </p>
          <p>
            The Sebastopol community has long embraced green building practices,
            and ConstruBay aligns with that ethos. We build with high-efficiency
            HVAC systems, advanced insulation, solar-ready electrical panels,
            water-conserving fixtures, and sustainably sourced materials. Our
            projects regularly exceed California&apos;s Title 24 energy
            requirements, delivering homes that are comfortable, efficient, and
            aligned with Sebastopol&apos;s environmental values.
          </p>
          <p>
            Permits for properties within Sebastopol city limits are processed
            through the Sebastopol Planning Department at 7120 Bodega Avenue.
            However, many properties in the Sebastopol area are technically in
            unincorporated Sonoma County and fall under the jurisdiction of the
            Sonoma County Permit and Resource Management Department (PRMD). The
            distinction matters because PRMD has different review timelines,
            fees, and requirements than the city. ConstruBay navigates both
            systems routinely and uses PlanPass.ai to pre-screen plans
            regardless of jurisdiction.
          </p>
          <p>
            Whether you are building an eco-friendly ADU on a Graton orchard
            property, renovating a Downtown Sebastopol craftsman, or planning a
            whole house remodel that brings a rural Freestone home into the
            modern era, ConstruBay provides the licensed expertise (CSLB
            #1106798), environmental sensitivity, and construction management
            that West County projects demand.
          </p>
        </div>
      </section>

      {/* Services Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Our Sebastopol Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/adu-builder-sonoma-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                ADU Construction
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Eco-friendly ADUs designed for Sebastopol&apos;s rural lots with
                well and septic considerations built in.
              </p>
            </Link>
            <Link
              href="/services/general-contractor-sonoma-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                General Contractor
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Full-service sustainable construction for Sebastopol and West
                Sonoma County properties.
              </p>
            </Link>
            <Link
              href="/services/whole-house-remodel-marin-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                Whole House Remodel
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Complete home transformations that honor Sebastopol&apos;s
                character while upgrading every system for efficiency.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Sebastopol Construction FAQs
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
            Start Your Sebastopol Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From eco-friendly ADUs to whole house remodels, ConstruBay builds
            with the sustainability and craftsmanship Sebastopol values.
            Licensed general contractor CSLB #1106798.
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
        </div>
      </section>
    </>
  );
}
