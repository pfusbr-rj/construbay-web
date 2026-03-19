"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does a home addition cost in Marin County?",
    answer:
      "Home additions in Marin County typically range from $200,000 to $600,000 or more. A single-room ground-floor addition starts around $200,000, while a full second-story addition with multiple rooms, bathrooms, and structural reinforcement can exceed $600,000. Costs depend on size, complexity, site conditions, and finish level.",
  },
  {
    question: "How long does a home addition take in Marin County?",
    answer:
      "Most home additions take 6 to 14 months from design through completion. A simple bump-out or single-room addition may take 6 to 8 months, while a second-story addition or large multi-room project typically runs 10 to 14 months. Permitting in Marin County adds 2 to 4 months before construction begins.",
  },
  {
    question: "Do I need an architect for a home addition?",
    answer:
      "For most home additions in Marin County, yes. Structural additions require architectural drawings stamped by a licensed architect or engineer for permit submission. ConstruBay works with experienced local architects as part of our design-build service, so you get seamless coordination between design and construction teams.",
  },
  {
    question: "Can I add a second story to my home in Marin County?",
    answer:
      "In most cases, yes, but second-story additions in Marin County must comply with height limits (typically 25-35 feet depending on zoning), setback requirements, and Floor Area Ratio (FAR) limits. Some communities require Design Review Board approval. The existing foundation must also be evaluated and potentially reinforced to support the additional load. ConstruBay handles all engineering and permitting for second-story additions.",
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

const additionTypes = [
  {
    title: "Second-Story Additions",
    description:
      "Adding a second story is the most effective way to significantly increase living space without expanding your home's footprint. Second-story additions are ideal for Marin County lots where setback requirements limit horizontal expansion. They require foundation evaluation and often structural reinforcement of the existing first floor, but they preserve yard space and can dramatically transform your home's appearance and value.",
  },
  {
    title: "Room Additions",
    description:
      "Ground-floor room additions extend your home's footprint to add bedrooms, family rooms, home offices, or primary suites. In Marin County, room additions must comply with lot coverage maximums, setback requirements, and Floor Area Ratio (FAR) limits. New foundations, roofing tie-ins, and exterior finishes are matched to the existing home for a seamless result.",
  },
  {
    title: "Bump-Outs",
    description:
      "Bump-outs extend an existing room by 2 to 10 feet, adding valuable square footage without the cost of a full addition. Common bump-outs in Marin County include kitchen extensions for island seating, bathroom expansions for walk-in showers, and bedroom extensions for sitting areas. Bump-outs are often the most cost-effective way to solve a space problem.",
  },
  {
    title: "Sunrooms & Enclosed Porches",
    description:
      "Sunrooms and enclosed porches bring the outdoors in while adding climate-controlled living space. In Marin County's mild climate, sunrooms with large windows or glass walls create bright, versatile rooms that connect to gardens and views. Proper insulation and energy-efficient glazing ensure year-round comfort and Title 24 compliance.",
  },
];

const processSteps = [
  {
    step: "Design & Architecture",
    detail:
      "We assess your home, discuss goals, and develop architectural plans that complement your existing structure. Our design-build approach ensures the architect and builder work together from day one.",
  },
  {
    step: "Permits with PlanPass.ai",
    detail:
      "Home additions require building permits, structural engineering, and often Design Review Board approval. Our PlanPass.ai system pre-analyzes plans for zoning compliance, FAR calculations, setback requirements, and Title 24 energy code before submission.",
  },
  {
    step: "Foundation & Framing",
    detail:
      "New foundations are poured, structural connections to the existing home are made, and framing goes up. For second stories, existing foundations are reinforced as needed. Every structural connection is engineered and inspected.",
  },
  {
    step: "Finish & Final Inspection",
    detail:
      "Mechanical rough-ins, insulation, drywall, finishes, and exterior work. We match materials, trim profiles, and architectural details to the existing home. Final inspections are coordinated and Certificate of Occupancy obtained.",
  },
];

export default function HomeAdditionMarinCountyPage() {
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
            Home Addition Contractor in Marin County
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Second stories, room additions, bump-outs, and sunrooms. Design-build
            service from architecture through construction. Fully permitted.
            CSLB #1106798.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Why Add */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Home Additions in Marin County
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Marin County homeowners frequently need more space but love their
            neighborhoods, schools, and commute. With median home prices
            exceeding $1.5 million, building an addition is often more
            cost-effective than buying a larger home &mdash; and it lets you
            customize the space to exactly fit your needs.
          </p>
          <p>
            Home additions in Marin County must navigate a complex regulatory
            environment including Floor Area Ratio (FAR) limits, setback
            requirements, height restrictions, and often Design Review Board
            approval. Many communities &mdash; including Mill Valley, Tiburon,
            Larkspur, and San Anselmo &mdash; have specific design guidelines
            that govern how additions must relate to the existing home and
            surrounding neighborhood character.
          </p>
          <p>
            Hillside properties present additional challenges: geotechnical
            investigations, engineered retaining walls, grading permits, and
            fire department access requirements. Older homes may need foundation
            reinforcement to support a second story or seismic retrofitting to
            meet current code.
          </p>
          <p>
            ConstruBay (CSLB #1106798) is a licensed general contractor
            specializing in home additions throughout Marin County. Our
            design-build approach means your architect and builder work as one
            team from the first sketch through final inspection, eliminating
            the coordination gaps that cause delays and cost overruns.
          </p>
        </div>
      </section>

      {/* Addition Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Types of Home Additions We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionTypes.map((type) => (
              <div
                key={type.title}
                className="border border-white/20 p-6"
              >
                <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                  {type.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoning & Regulations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Marin County Zoning &amp; Building Requirements
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            Floor Area Ratio (FAR) Limits
          </h3>
          <p>
            Most Marin County jurisdictions limit total floor area relative to
            lot size. FAR limits typically range from 25% to 45% depending on
            zoning district. Any addition must keep the total home square
            footage within these limits. Our PlanPass.ai system calculates FAR
            compliance automatically during the design phase.
          </p>
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            Setback Requirements
          </h3>
          <p>
            Additions must maintain minimum distances from property lines.
            Front, rear, and side setbacks vary by zoning district and can
            significantly affect where an addition can be placed. In some cases,
            a variance may be required, adding time and uncertainty to the
            process.
          </p>
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            Hillside &amp; Foundation Considerations
          </h3>
          <p>
            Second-story additions require an engineering evaluation of the
            existing foundation. Many older Marin County homes have
            unreinforced foundations that need bolting, cripple wall bracing,
            or even partial replacement to support additional loads. Hillside
            properties may need retaining walls, grading permits, and
            geotechnical reports.
          </p>
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            Matching Existing Architecture
          </h3>
          <p>
            Design Review Boards in communities like Mill Valley and Tiburon
            require that additions be architecturally compatible with the
            existing home and neighborhood. Roof pitch, materials, window
            proportions, and massing must be carefully designed to create a
            cohesive result. Our design-build team has extensive experience
            navigating these requirements.
          </p>
        </div>
      </section>

      {/* Cost Range */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-y border-brand-tan/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
            Home Addition Cost Ranges in Marin County
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Home addition costs in Marin County range from $200,000 to
              $600,000 or more, depending on type, size, site conditions, and
              finish level.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Bump-Out
                </h3>
                <p className="text-2xl text-white font-bold">$80K &ndash; $200K</p>
                <p className="text-white/60 text-sm mt-1">
                  2&ndash;10 ft extension of existing room
                </p>
              </div>
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Room Addition
                </h3>
                <p className="text-2xl text-white font-bold">$200K &ndash; $400K</p>
                <p className="text-white/60 text-sm mt-1">
                  New room, 200&ndash;500 sq ft, ground floor
                </p>
              </div>
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Second-Story Addition
                </h3>
                <p className="text-2xl text-white font-bold">$350K &ndash; $600K+</p>
                <p className="text-white/60 text-sm mt-1">
                  Full second floor, foundation reinforcement
                </p>
              </div>
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Sunroom / Enclosed Porch
                </h3>
                <p className="text-2xl text-white font-bold">$100K &ndash; $250K</p>
                <p className="text-white/60 text-sm mt-1">
                  Glass walls, insulated, climate-controlled
                </p>
              </div>
            </div>
            <p>
              These ranges include architectural design, engineering,
              permitting, construction, and project management. ConstruBay
              (CSLB #1106798) provides detailed estimates after an initial site
              assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10 text-center">
            Our Home Addition Process
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
            PlanPass.ai pre-analyzes your addition plans for zoning, FAR, and
            code compliance &mdash; catching issues before permit submission.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Home Addition FAQs &mdash; Marin County
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
            Start Your Home Addition Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From architectural design to Certificate of Occupancy, ConstruBay
            manages every detail. Licensed general contractor CSLB #1106798,
            based in Mill Valley, serving all of Marin County.
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
              Whole House Remodel
            </Link>
            <Link href="/services/adu-builder-marin-county" className="hover:text-brand-tan transition-colors">
              ADU Builder
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
