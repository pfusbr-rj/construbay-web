"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does an ADU cost to build in Mill Valley?",
    answer:
      "ADU construction in Mill Valley typically ranges from $200,000 to $500,000 or more. Hillside lots, Design Review Board requirements, and the premium finishes expected in this market push costs above county averages. ConstruBay (CSLB #1106798) provides transparent line-item estimates after an on-site assessment.",
  },
  {
    question: "Do I need Design Review Board approval for my Mill Valley ADU?",
    answer:
      "In most cases, yes. Mill Valley's Design Review Board evaluates ADU projects for neighborhood compatibility, exterior materials, bulk and mass, and privacy impacts. ConstruBay has presented numerous projects to this Board and understands what they prioritize.",
  },
  {
    question: "Can I build an ADU on a steep hillside lot in Mill Valley?",
    answer:
      "Absolutely. We specialize in hillside ADU construction throughout Tam Valley, Strawberry Point, Alto, and Homestead Valley. Additional geotechnical engineering, retaining walls, and fire access planning are required but very achievable with our experienced team.",
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

export default function AduBuilderMillValleyPage() {
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
            ADU Builder in Mill Valley, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Hillside ADU specialists serving Tam Valley, Strawberry Point, and
            every Mill Valley neighborhood. Full design-build with AI-powered
            permit analysis through PlanPass.ai.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get Your Free ADU Assessment
          </Link>
        </div>
      </section>

      {/* Why Mill Valley */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Why Build an ADU in Mill Valley
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Mill Valley sits at the base of Mount Tamalpais with median home
            values exceeding $2 million and rental demand that far outpaces
            supply. An accessory dwelling unit here generates $2,800 to $4,500
            per month in rental income while adding $150,000 to $250,000 in
            immediate property value. Whether you are building for aging parents,
            returning adult children, or rental income, the financial case is
            compelling.
          </p>
          <p>
            The challenge is that Mill Valley&apos;s terrain and regulatory
            environment demand specialized expertise. Hillside lots require
            geotechnical reports, engineered retaining walls, and fire access
            planning for WUI zone compliance. The Design Review Board adds
            another layer of scrutiny that generic contractors often fail to
            navigate efficiently. ConstruBay (CSLB #1106798) was built for
            exactly this environment.
          </p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Mill Valley Neighborhoods We Build In
          </h2>
          <div className="space-y-6">
            {[
              {
                name: "Tam Valley",
                note: "Mixed terrain with accessible ADU sites. Generally straightforward utility connections through the Tamalpais Community Services District. Ideal for both detached ADUs and garage conversions.",
              },
              {
                name: "Strawberry Point",
                note: "Flat to gentle slopes with excellent vehicle access. Many lots accommodate detached ADUs with standard setbacks. Proximity to Highway 101 makes these units attractive to commuter renters.",
              },
              {
                name: "Alto & Homestead Valley",
                note: "Hillside neighborhoods with panoramic views. ADU construction here requires engineered retaining walls, geotechnical reports, and careful fire access planning. The elevation commands premium rents.",
              },
            ].map((n) => (
              <div key={n.name} className="border border-white/20 p-6">
                <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                  {n.name}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {n.note}
                </p>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-sm mt-8">
            Also serving Corte Madera, Larkspur, Tiburon, and Sausalito. CSLB
            #1106798.
          </p>
        </div>
      </section>

      {/* Design Review & Permits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Design Review Board &amp; Permit Navigation
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Mill Valley&apos;s Community Development Department evaluates ADU
            applications for zoning compliance, lot coverage, setbacks, and
            neighborhood compatibility. Most projects also face the Design Review
            Board, which scrutinizes exterior materials, roof pitch, window
            placement, and privacy impacts on adjacent homes.
          </p>
          <p>
            ConstruBay has presented dozens of projects to this Board. We design
            each ADU with approval in mind from day one, reducing revision cycles
            and hearing continuances. Our PlanPass.ai technology catches code
            conflicts before submission, compressing the permit timeline by weeks
            or months. From Title 24 energy compliance to WUI fire code
            requirements, every issue is flagged and resolved before your plans
            reach the city.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Mill Valley ADU FAQs
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
            Start Your Mill Valley ADU Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From hillside engineering to Design Review presentations to final
            inspection, ConstruBay manages every detail. Based at 18 El Paseo
            Lane, Mill Valley. Licensed general contractor CSLB #1106798.
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
