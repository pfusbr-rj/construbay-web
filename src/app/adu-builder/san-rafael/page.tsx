"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "What types of ADUs work best in San Rafael?",
    answer:
      "San Rafael's diverse lot sizes support detached new-build ADUs, garage conversions, and above-garage units. Garage conversions are particularly popular in the Canal and Dominican neighborhoods where existing two-car garages provide cost-effective conversion opportunities. ConstruBay (CSLB #1106798) evaluates your property to recommend the optimal ADU type.",
  },
  {
    question: "How long does ADU permitting take in San Rafael?",
    answer:
      "San Rafael, as Marin County's seat, has a well-staffed Community Development Department. ADU permits typically take 2-4 months for plan check and approval. Our PlanPass.ai technology reduces this further by catching code issues before submission.",
  },
  {
    question: "Does ConstruBay serve the Brazilian community in San Rafael?",
    answer:
      "Yes. ConstruBay's founder is Brazilian-American, and we proudly serve San Rafael's vibrant Brazilian community. We offer bilingual consultations in Portuguese and English and understand the cultural preferences that make a home feel right.",
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

export default function AduBuilderSanRafaelPage() {
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
            ADU Builder in San Rafael, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Garage conversions, detached ADUs, and new builds across San
            Rafael&apos;s diverse neighborhoods. County seat permit expertise
            with AI-powered plan analysis.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get Your Free ADU Assessment
          </Link>
        </div>
      </section>

      {/* San Rafael ADU Market */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          ADU Opportunities in San Rafael
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            San Rafael is Marin County&apos;s largest city and its county seat,
            offering the most diverse ADU opportunities in the region. From flat
            lots in the Canal district to hillside properties in Terra Linda and
            Sun Valley, the range of lot sizes and configurations means almost
            every San Rafael homeowner has a viable path to building an
            accessory dwelling unit.
          </p>
          <p>
            Garage conversions are particularly popular in San Rafael&apos;s
            established neighborhoods. Many homes built in the 1950s through
            1970s have oversized two-car garages that convert efficiently into
            400 to 600 square foot studios or one-bedroom units. These
            conversions typically cost 30 to 40 percent less than ground-up
            construction because the shell, foundation, and roof already exist.
            ConstruBay (CSLB #1106798) has completed numerous garage conversions
            throughout San Rafael and understands the structural, mechanical, and
            code requirements specific to this project type.
          </p>
        </div>
      </section>

      {/* County Seat Permits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            County Seat Permit Expertise
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              As Marin&apos;s county seat, San Rafael has a well-staffed
              Community Development Department with dedicated planning and
              building divisions. The city has been proactive in implementing
              California&apos;s ADU legislation, streamlining the approval
              process compared to smaller Marin jurisdictions. Plan check
              turnaround is typically two to four months, and the staff is
              experienced with the full range of ADU configurations.
            </p>
            <p>
              ConstruBay maintains strong working relationships with San
              Rafael&apos;s planning and building staff. We know their review
              priorities, preferred drawing formats, and common correction
              items. This institutional knowledge, combined with our PlanPass.ai
              pre-submission analysis, means fewer plan check cycles and faster
              permits. We handle all coordination with the city on your behalf,
              from initial planning inquiry through final certificate of
              occupancy.
            </p>
          </div>
        </div>
      </section>

      {/* Community Connection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Serving San Rafael&apos;s Diverse Community
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            San Rafael is home to one of the largest Brazilian communities in
            the Bay Area. ConstruBay&apos;s founder is Brazilian-American, and
            we are proud to serve this community with bilingual consultations in
            Portuguese and English. Whether you are building an ADU for family
            members, rental income, or a home-based business, we understand the
            cultural context and practical needs that shape your project goals.
          </p>
          <p>
            Beyond the Brazilian community, San Rafael&apos;s diversity is one
            of its greatest strengths. We build for homeowners across every
            neighborhood, from the flatlands of the Canal to the hills of
            Glenwood, from the estates of Peacock Gap to the bungalows of
            downtown. Every project receives the same attention to design
            quality, code compliance, and construction craftsmanship.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            San Rafael ADU FAQs
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
            Start Your San Rafael ADU Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Garage conversions, detached builds, and everything in between.
            ConstruBay brings county seat permit expertise and local community
            knowledge to every project. Licensed general contractor CSLB
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
            <Link href="/services/adu-builder-marin-county" className="hover:text-brand-tan transition-colors">
              ADU Builder Marin County
            </Link>
            <Link href="/san-rafael" className="hover:text-brand-tan transition-colors">
              San Rafael
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
