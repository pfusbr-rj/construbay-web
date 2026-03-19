"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "Does ConstruBay handle Sonoma County permits for Petaluma projects?",
    answer:
      "Yes. We manage all permitting for Petaluma projects through both the City of Petaluma Community Development Department and Sonoma County PRMD for unincorporated areas. Our PlanPass.ai technology pre-screens plans for code compliance before submission, reducing review cycles. CSLB #1106798.",
  },
  {
    question: "What types of projects does ConstruBay build in Petaluma?",
    answer:
      "We handle ADU construction, kitchen and bathroom remodels, whole house renovations, farmhouse restorations, home additions, and new accessory structures. Petaluma's mix of historic downtown properties, suburban homes, and rural parcels means we work across every project type.",
  },
  {
    question: "Can ConstruBay renovate historic farmhouse properties in Petaluma?",
    answer:
      "Absolutely. Petaluma has some of Sonoma County's finest farmhouse and Victorian-era properties. We approach historic renovations with respect for original character while integrating modern systems, seismic upgrades, and energy efficiency. Our design team balances preservation with livability.",
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

export default function GeneralContractorPetalumaPage() {
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
            Licensed General Contractor in Petaluma, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Sonoma County permit expertise. Farmhouse remodels, ADU
            construction, and full residential builds in Petaluma&apos;s growing
            market.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Request a Free Consultation
          </Link>
        </div>
      </section>

      {/* Petaluma Market */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Building in Petaluma&apos;s Growing Market
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Petaluma is one of Sonoma County&apos;s fastest-growing
            communities, attracting homeowners who want the North Bay lifestyle
            without Marin County price tags. The city&apos;s mix of historic
            downtown properties, mid-century suburban homes, and rural parcels
            on the east side creates diverse construction opportunities. Whether
            you are renovating a Victorian in the Theatre District or building
            an ADU on a half-acre lot off East Washington, ConstruBay (CSLB
            #1106798) brings the expertise and permits knowledge to deliver your
            project on time and on budget.
          </p>
          <p>
            Petaluma&apos;s position at the Marin-Sonoma border means many
            homeowners here are Bay Area professionals who expect quality
            construction and professional project management. ConstruBay
            delivers both. Our design-build approach gives you a single team
            from concept through completion, with AI-powered permit analysis
            through PlanPass.ai that catches issues before they become costly
            delays.
          </p>
        </div>
      </section>

      {/* Farmhouse Remodels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Farmhouse Remodels &amp; Rural Builds
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Petaluma&apos;s agricultural heritage has left a legacy of
              beautiful farmhouse properties that deserve thoughtful renovation.
              ConstruBay approaches these projects with respect for the original
              architecture while integrating modern systems that make these
              homes comfortable and efficient for today&apos;s families. We
              preserve original woodwork, restore period-appropriate details,
              and add seismic bracing and insulation that the original builders
              never imagined.
            </p>
            <p>
              Rural properties around Petaluma present their own construction
              considerations including well water systems, septic capacity
              planning, longer utility runs, and gravel road access for
              construction equipment. Our team has extensive experience with
              rural builds throughout Sonoma County and manages these logistics
              seamlessly. We coordinate well pump upgrades, septic engineering,
              and PG&amp;E service modifications as part of our integrated
              project management.
            </p>
          </div>
        </div>
      </section>

      {/* ADU Opportunities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          ADU Opportunities in Petaluma
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Petaluma&apos;s larger lot sizes and relatively affordable land
            costs make it one of the best ADU markets in the North Bay.
            Homeowners here can often build a detached ADU with room to spare
            for setbacks and outdoor living space. Monthly rents for a finished
            ADU range from $1,800 to $3,200, providing meaningful income that
            offsets mortgage payments or funds retirement.
          </p>
          <p>
            The City of Petaluma has been proactive about ADU approvals,
            implementing California&apos;s streamlined permitting laws
            efficiently. Combined with ConstruBay&apos;s PlanPass.ai
            pre-submission analysis, Petaluma ADU permits move faster than most
            North Bay jurisdictions. If you have been considering an ADU, now
            is the time to act while construction costs remain manageable and
            rental demand continues to grow.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Petaluma General Contractor FAQs
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
            Build with Confidence in Petaluma
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From farmhouse restorations to new ADU construction, ConstruBay
            is your licensed general contractor for every Petaluma project.
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
            <Link href="/petaluma" className="hover:text-brand-tan transition-colors">
              Petaluma
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
