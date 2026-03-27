"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "Does ConstruBay handle well and septic systems for Sebastopol projects?",
    answer:
      "Yes. Many Sebastopol properties rely on private wells and septic systems. We coordinate well pump testing, water quality analysis, septic capacity evaluations, and all required Sonoma County PRMD permits. Our team has extensive experience with rural utility systems throughout West County. CSLB #1106798.",
  },
  {
    question: "Can ConstruBay build eco-friendly and sustainable homes in Sebastopol?",
    answer:
      "Absolutely. Sebastopol's community values align perfectly with our commitment to sustainable construction. We offer solar-ready designs, high-performance insulation, reclaimed materials sourcing, low-VOC finishes, and water-efficient systems. Every project meets or exceeds Title 24 energy standards.",
  },
  {
    question: "What areas around Sebastopol does ConstruBay serve?",
    answer:
      "We serve Sebastopol proper and surrounding West Sonoma County communities including Graton, Occidental, Freestone, Bodega, and unincorporated areas along the Bohemian Highway and Bodega Highway corridors. ConstruBay also serves all of Marin County.",
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

export default function GeneralContractorSebastopolPage() {
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
            Licensed General Contractor in Sebastopol, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Eco-friendly construction for West Sonoma County&apos;s artistic
            community. Rural builds, well and septic expertise, and sustainable
            design-build services.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Request a Free Consultation
          </Link>
        </div>
      </section>

      {/* West County Character */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Building for West County&apos;s Unique Character
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Sebastopol is the creative heart of West Sonoma County, a community
            where artists, farmers, and professionals have built a culture that
            values sustainability, individuality, and connection to the land.
            Construction here is not about cookie-cutter spec homes. It is about
            buildings that reflect the character of their owners and respect the
            natural environment. ConstruBay (CSLB #1106798) approaches every
            Sebastopol project with this philosophy.
          </p>
          <p>
            From the repurposed industrial spaces along The Barlow to the
            apple orchards and vineyards that surround the town, Sebastopol
            demands a contractor who understands that building in West County
            is different. Our team designs and constructs homes, ADUs, and
            renovations that use sustainable materials, minimize environmental
            impact, and create spaces that feel authentic to this community.
            We are not bringing Marin County aesthetics to Sebastopol. We are
            building what belongs here.
          </p>
        </div>
      </section>

      {/* Rural Construction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Rural Construction &amp; Well/Septic Expertise
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Many properties in and around Sebastopol are on private well
              water and septic systems, particularly along the Bodega Highway
              corridor, in the hills above Graton, and throughout the
              unincorporated areas of West Sonoma County. Building or
              renovating on these properties requires a contractor who
              understands rural infrastructure. ConstruBay coordinates well
              pump testing and water quality analysis, septic system capacity
              evaluations and upgrades, Sonoma County PRMD permitting for rural
              properties, and extended utility runs for power and
              communications.
            </p>
            <p>
              Rural Sebastopol properties often have gravel access roads,
              limited staging areas, and environmental constraints including
              creek setbacks, heritage tree protections, and agricultural
              preserve considerations. Our project management team plans for
              these realities from the start, ensuring construction logistics
              do not become surprises mid-project. We have built on properties
              throughout West County and know how to deliver quality
              construction in rural settings without the cost overruns that
              less experienced contractors encounter.
            </p>
          </div>
        </div>
      </section>

      {/* Eco-Friendly */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Eco-Friendly &amp; Sustainable Building
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Sebastopol&apos;s community has long championed environmental
            responsibility, and ConstruBay shares that commitment. We offer
            solar-ready roof designs and solar panel installation coordination,
            high-performance wall and roof insulation systems that exceed code
            minimums, reclaimed and sustainably harvested lumber sourcing,
            low-VOC paints, adhesives, and finishes throughout, water-efficient
            fixtures and greywater system compatibility, and native and
            drought-tolerant landscaping integration.
          </p>
          <p>
            Every ConstruBay project meets or exceeds California&apos;s Title
            24 energy standards. For Sebastopol clients who want to go further,
            we design to near-zero energy performance levels using advanced
            building envelopes, heat pump HVAC systems, and smart home energy
            management. Our PlanPass.ai technology verifies energy compliance
            during the design phase, not after costly plan check corrections.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Sebastopol General Contractor FAQs
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
            Build Sustainably in Sebastopol
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From eco-friendly renovations to rural new builds, ConstruBay
            is your licensed general contractor for West Sonoma County.
            CSLB #1106798.
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
            <Link href="/services/general-contractor-sonoma-county" className="hover:text-brand-tan transition-colors">
              General Contractor Sonoma County
            </Link>
            <Link href="/sebastopol" className="hover:text-brand-tan transition-colors">
              Sebastopol
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
