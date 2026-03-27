"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "Why choose ConstruBay as your Mill Valley general contractor?",
    answer:
      "ConstruBay is based at 18 El Paseo Lane in Mill Valley. We are not commuting from out of county. Our team lives in this community, understands the terrain, the regulations, and the Design Review Board. Over 10 years of local experience across ADUs, kitchens, whole house remodels, and additions. CSLB #1106798.",
  },
  {
    question: "What services does ConstruBay offer in Mill Valley?",
    answer:
      "We provide full design-build services including ADU construction, kitchen remodels, bathroom remodels, whole house renovations, home additions, custom pools, and permit expediting through our PlanPass.ai technology. Every project is managed by a single point of contact from design through final inspection.",
  },
  {
    question: "Is ConstruBay licensed and insured?",
    answer:
      "Yes. ConstruBay holds California Contractors State License Board license #1106798 (Class B General Building Contractor). We carry general liability insurance, workers' compensation coverage, and are fully bonded as required by California law.",
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

export default function GeneralContractorMillValleyPage() {
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
            Licensed General Contractor in Mill Valley, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Your neighbor and builder. 10+ years of local experience across
            every type of residential construction. Based at 18 El Paseo Lane,
            Mill Valley.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Request a Free Consultation
          </Link>
        </div>
      </section>

      {/* Local Presence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          A General Contractor Who Lives Here
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            ConstruBay is not a contractor who drives in from the East Bay or
            Sacramento for your project. We are based in Mill Valley at 18 El
            Paseo Lane, and our team lives in the communities we serve. This
            matters because Mill Valley&apos;s hillside terrain, narrow roads,
            Design Review Board, and WUI zone requirements demand a contractor
            who understands the local environment intimately. Over ten years of
            building in Mill Valley has given us deep knowledge of every
            neighborhood from Tam Valley to Homestead, from Strawberry Point
            to Alto.
          </p>
          <p>
            When you call ConstruBay (CSLB #1106798), you reach a team that
            knows your neighborhood&apos;s soil conditions, the planning
            staff&apos;s review priorities, the fire department&apos;s access
            requirements, and the subcontractors who do their best work in
            Marin County. This local knowledge translates directly into fewer
            surprises, faster permits, and smoother construction.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Full-Service Residential Construction
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { service: "ADU Construction", desc: "Detached, attached, and garage conversions" },
              { service: "Kitchen Remodels", desc: "Open concept, indoor-outdoor, custom cabinetry" },
              { service: "Whole House Remodels", desc: "Complete renovations with seismic upgrades" },
              { service: "Home Additions", desc: "Second stories, room additions, bump-outs" },
              { service: "Bathroom Remodels", desc: "Luxury fixtures, accessible design, tile work" },
              { service: "Permit Expediting", desc: "AI-powered analysis through PlanPass.ai" },
            ].map((item) => (
              <div key={item.service} className="border border-white/20 p-5">
                <h3 className="text-lg font-semibold text-[#C9A84C] mb-2">
                  {item.service}
                </h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-sm mt-8">
            Every project managed by a single point of contact. CSLB #1106798.
          </p>
        </div>
      </section>

      {/* Neighborhood Knowledge */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Neighborhood-Level Expertise
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Mill Valley is not one neighborhood but many, each with distinct
            terrain, architectural character, and construction challenges.
            Strawberry Point&apos;s flat lots with standard access differ
            dramatically from Homestead Valley&apos;s steep, narrow-road
            properties. Alto&apos;s panoramic hillside sites require different
            engineering than the canyon-floor homes along Cascade Drive.
          </p>
          <p>
            ConstruBay has built in every Mill Valley neighborhood. We know
            which areas have challenging soil conditions, where utility
            connections require extra coordination, which streets restrict
            construction vehicle access, and how the Design Review Board
            evaluates projects in different parts of town. This
            neighborhood-level expertise means your project starts with
            realistic expectations and proceeds with confidence.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            General Contractor FAQs
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
            Your Mill Valley Building Partner
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From initial consultation to final walkthrough, ConstruBay is your
            single point of contact for every residential construction project
            in Mill Valley. Licensed general contractor CSLB #1106798.
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
            <Link href="/services/general-contractor-marin-county" className="hover:text-brand-tan transition-colors">
              General Contractor Marin County
            </Link>
            <Link href="/mill-valley" className="hover:text-brand-tan transition-colors">
              Mill Valley
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
