"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How does PlanPass.ai reduce permit timelines in Marin County?",
    answer:
      "PlanPass.ai uses artificial intelligence to analyze your construction blueprints against all applicable codes including California Building Code, Title 24 energy standards, local zoning ordinances, and fire codes. It flags every potential issue before you submit to the city, eliminating the back-and-forth correction cycles that add weeks or months to traditional permitting. ConstruBay CSLB #1106798.",
  },
  {
    question: "Which Marin County cities does ConstruBay handle permits for?",
    answer:
      "We expedite permits across all Marin jurisdictions including Mill Valley, Tiburon, Sausalito, San Rafael, Corte Madera, Larkspur, San Anselmo, Fairfax, Ross, Kentfield, Novato, and unincorporated Marin County. Each jurisdiction has its own review process, and our team knows the staff, priorities, and common correction items at every counter.",
  },
  {
    question: "Can architects and designers use PlanPass.ai directly?",
    answer:
      "Yes. We partner with architects and designers throughout Marin County who use PlanPass.ai to pre-screen their plans before submission. This collaboration reduces revision cycles for the design team and speeds the overall project timeline. Contact us to learn about our architect partnership program.",
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

export default function PermitExpeditingMarinPage() {
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
            PlanPass.ai Technology &middot; CSLB #1106798
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Permit Expediting in Marin County
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            AI-powered blueprint analysis that catches code issues before
            submission. Faster permits across every Marin city. Architect
            partnerships welcome.
          </p>
          <Link
            href="/permit-risk-report"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Permit Risk Report
          </Link>
        </div>
      </section>

      {/* PlanPass.ai Technology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          PlanPass.ai: AI-Powered Permit Analysis
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Traditional permit expediting means hiring someone to stand in line
            at the planning counter and chase corrections. PlanPass.ai
            eliminates the root cause of delays by analyzing your blueprints
            with artificial intelligence before you submit them. The system
            reads your plans against the California Building Code, Title 24
            energy standards, local zoning ordinances, fire codes, and
            accessibility requirements, flagging every conflict, omission, and
            compliance gap in a comprehensive report.
          </p>
          <p>
            The result is a set of plans that arrives at the Marin County
            planning counter already clean. Plan checkers find fewer issues,
            correction cycles are reduced or eliminated, and your permit is
            issued weeks or months ahead of the traditional timeline. For
            homeowners and developers, this means faster construction starts
            and lower carrying costs. For architects and designers, it means
            fewer revision rounds and happier clients. ConstruBay (CSLB
            #1106798) developed PlanPass.ai specifically for the complex
            regulatory environment of Marin and Sonoma Counties.
          </p>
        </div>
      </section>

      {/* All Marin Cities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Every Marin County Jurisdiction
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "Mill Valley",
              "Tiburon",
              "Sausalito",
              "San Rafael",
              "Corte Madera",
              "Larkspur",
              "San Anselmo",
              "Fairfax",
              "Ross",
              "Novato",
              "Kentfield",
              "Unincorporated Marin",
            ].map((city) => (
              <div key={city} className="border border-white/20 p-4 text-center">
                <p className="text-white/80 text-sm">{city}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6 text-white/80 leading-relaxed mt-10">
            <p>
              Each Marin jurisdiction has its own planning department, review
              process, and set of local amendments to the California codes.
              Mill Valley&apos;s Design Review Board operates differently from
              Tiburon&apos;s. San Rafael&apos;s plan check priorities differ
              from Sausalito&apos;s. Novato&apos;s zoning code has provisions
              that do not exist in Ross. ConstruBay&apos;s permit team knows
              every counter, every staff member, and every local nuance. This
              institutional knowledge, layered on top of PlanPass.ai&apos;s
              automated analysis, creates the fastest path to permit issuance
              in Marin County.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Reduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Timeline Reduction &amp; Architect Partnerships
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            On average, PlanPass.ai reduces Marin County permit timelines by
            four to eight weeks. For complex projects involving Design Review
            Board hearings, WUI zone compliance, or hillside-specific
            regulations, the time savings can be even greater. Every week saved
            in permitting is a week saved in project carrying costs, temporary
            housing expenses, and delayed rental income for ADU projects.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            <div className="border border-brand-tan/30 p-5 text-center">
              <p className="text-[#C9A84C] text-sm uppercase tracking-wider mb-2">
                Traditional
              </p>
              <p className="text-2xl text-white font-bold">12&ndash;20 Weeks</p>
              <p className="text-white/60 text-sm mt-1">
                Multiple correction cycles typical
              </p>
            </div>
            <div className="border border-brand-tan/30 p-5 text-center">
              <p className="text-[#C9A84C] text-sm uppercase tracking-wider mb-2">
                With PlanPass.ai
              </p>
              <p className="text-2xl text-white font-bold">6&ndash;12 Weeks</p>
              <p className="text-white/60 text-sm mt-1">
                Pre-screened plans, fewer corrections
              </p>
            </div>
            <div className="border border-brand-tan/30 p-5 text-center">
              <p className="text-[#C9A84C] text-sm uppercase tracking-wider mb-2">
                Time Saved
              </p>
              <p className="text-2xl text-white font-bold">4&ndash;8 Weeks</p>
              <p className="text-white/60 text-sm mt-1">
                Average reduction across projects
              </p>
            </div>
          </div>
          <p>
            We actively partner with architects, designers, and engineers
            throughout Marin County. Design professionals can use PlanPass.ai
            to validate their plans before client review or city submission.
            This collaboration strengthens the entire design-build process and
            creates better outcomes for homeowners. Contact us to learn about
            our architect partnership program and volume pricing.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Permit Expediting FAQs
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
            Get Your Permits Faster
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Stop waiting months for permit corrections. PlanPass.ai catches
            every issue before submission, and ConstruBay&apos;s permit team
            knows every Marin County counter. CSLB #1106798.
          </p>
          <Link
            href="/permit-risk-report"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Permit Risk Report
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
            <Link href="/services/permit-expediting-marin-county" className="hover:text-brand-tan transition-colors">
              Permit Expediting Services
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
