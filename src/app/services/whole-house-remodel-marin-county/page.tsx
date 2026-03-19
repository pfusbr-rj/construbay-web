"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does a whole house remodel cost in Marin County?",
    answer:
      "Whole house remodels in Marin County typically range from $300,000 to $800,000 or more depending on the home's size, structural scope, finish level, and site conditions. Homes requiring seismic retrofitting, foundation work, or hillside engineering fall toward the higher end. ConstruBay provides detailed estimates after an in-home assessment.",
  },
  {
    question: "Do I need seismic upgrades for my Marin County home?",
    answer:
      "Many Marin County homes built before 1980 benefit from seismic retrofitting, and it may be required when undertaking a major remodel. Common upgrades include foundation bolting, cripple wall bracing, and soft-story retrofitting for homes with garages or living space over open areas. A structural engineer evaluates your home's specific needs during our assessment phase.",
  },
  {
    question: "How long does a complete home renovation take?",
    answer:
      "A complete whole house remodel in Marin County typically takes 6 to 18 months for construction, depending on scope. The design and permitting phase adds 2 to 4 months. Homes requiring structural modifications, seismic upgrades, or hillside engineering tend toward the longer timelines. Our PlanPass.ai system helps compress the permitting portion.",
  },
  {
    question: "Is it better to remodel or rebuild in Marin County?",
    answer:
      "In most cases, remodeling is more cost-effective than rebuilding in Marin County. Rebuilding triggers full compliance with current zoning, setbacks, and building codes, which can reduce the allowable building footprint. Remodeling preserves non-conforming elements, maintains the home's character, and typically costs 30% to 50% less than a full rebuild. However, if the existing structure has severe foundation issues or the layout is fundamentally incompatible with your goals, rebuilding may make sense.",
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

const scopeItems = [
  {
    title: "Structural Modifications",
    description:
      "Wall removal, room additions, floor plan reconfiguration, and load-bearing changes. Engineered solutions for opening up spaces, adding rooms, or reconfiguring the home's flow.",
  },
  {
    title: "Foundation Upgrades",
    description:
      "Foundation repair, replacement, and seismic retrofitting. Many older Marin homes sit on unreinforced foundations that require bolting, bracing, or full replacement during a major remodel.",
  },
  {
    title: "Seismic Retrofitting",
    description:
      "Cripple wall bracing, foundation bolting, soft-story retrofitting, and shear wall installation. Critical for pre-1980 homes and required when remodel scope triggers structural upgrade thresholds.",
  },
  {
    title: "Complete Interior Redesign",
    description:
      "Kitchen, bathrooms, bedrooms, living areas, and all interior finishes. Custom millwork, premium materials, and thoughtful space planning throughout the entire home.",
  },
  {
    title: "Systems Upgrade",
    description:
      "Complete replacement of HVAC, electrical, and plumbing systems. Panel upgrades to 200-amp service, copper or PEX repiping, new ductwork, and energy-efficient HVAC systems.",
  },
  {
    title: "Exterior Renovation",
    description:
      "New siding, roofing, windows, doors, and exterior finishes. Decks, patios, landscaping integration, and fire-resistant materials for WUI zone compliance.",
  },
];

const processSteps = [
  {
    step: "Assessment & Planning",
    detail:
      "Comprehensive evaluation of your home's structure, systems, and site conditions. We identify opportunities and constraints, then develop a phased plan that aligns with your budget and timeline.",
  },
  {
    step: "Design & Engineering",
    detail:
      "Architectural design, structural engineering, and interior design coordinated as a single effort. 3D renderings, material boards, and detailed specifications for every element of the home.",
  },
  {
    step: "Permits with PlanPass.ai",
    detail:
      "AI-powered pre-submission review catches code conflicts, Title 24 issues, and local amendment violations before plans reach the county. This reduces permit timelines significantly.",
  },
  {
    step: "Demolition & Structural",
    detail:
      "Controlled demolition, structural modifications, foundation work, and seismic upgrades. This phase establishes the bones of your remodeled home.",
  },
  {
    step: "Systems & Rough-In",
    detail:
      "New plumbing, electrical, HVAC, and insulation installed throughout. All rough work inspected and approved before finishes begin.",
  },
  {
    step: "Finish & Completion",
    detail:
      "All interior and exterior finishes, fixtures, cabinetry, countertops, flooring, painting, and final detailing. Comprehensive walkthrough and punch list completion.",
  },
];

export default function WholeHouseRemodelMarinCountyPage() {
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
            Complete home renovations from foundation to roof. Structural
            upgrades, seismic retrofitting, luxury finishes, and full permit
            management via PlanPass.ai.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Why Marin Homeowners Choose to Remodel
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Marin County homeowners face a unique decision when their home no
            longer meets their needs: remodel or rebuild. In most cases,
            remodeling wins &mdash; and for good reasons. A whole house remodel
            preserves the character and history of your home, avoids triggering
            full zoning compliance that could reduce your buildable footprint,
            and costs significantly less than tearing down and starting over.
          </p>
          <p>
            Many Marin homes were built in the 1950s through 1970s with solid
            bones but outdated layouts, aging systems, and finishes that no
            longer reflect how families live today. A whole house remodel
            transforms these properties into modern, efficient, and beautiful
            homes while retaining the lot coverage, setbacks, and non-conforming
            elements that would be lost in a rebuild.
          </p>
          <p>
            Zoning restrictions in Marin County are among the most complex in
            California. Rebuilding often triggers current code requirements
            that reduce the allowable square footage, increase setbacks, or
            require Design Review Board approval that wasn&apos;t needed for the
            original structure. Remodeling avoids many of these triggers while
            still achieving a transformative result.
          </p>
          <p>
            ConstruBay (CSLB #1106798) specializes in whole house remodels
            throughout Marin County, from structural overhauls to luxury
            finish installations. We manage design, engineering, permitting,
            and construction as a single integrated service.
          </p>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Scope of Work: What a Whole House Remodel Includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scopeItems.map((item) => (
              <div
                key={item.title}
                className="border border-white/20 p-6"
              >
                <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seismic Upgrades */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Seismic Upgrades for Marin County Homes
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Marin County sits adjacent to the San Andreas Fault, and many
            homes in the area were built before modern seismic codes were
            established. When undertaking a whole house remodel, seismic
            retrofitting is often required &mdash; and always recommended for
            pre-1980 construction.
          </p>
          <p>
            Common seismic upgrades include foundation bolting (securing the
            wood frame to the concrete foundation), cripple wall bracing
            (strengthening the short walls between the foundation and first
            floor), and soft-story retrofitting for homes with large openings
            like garages on the ground level. These upgrades dramatically
            improve earthquake performance and are increasingly required by
            lenders and insurers.
          </p>
          <p>
            ConstruBay works with licensed structural engineers who specialize
            in seismic evaluation and retrofit design. We integrate seismic
            upgrades seamlessly into the remodel scope so the work is completed
            efficiently without extending the project timeline unnecessarily.
          </p>
        </div>
      </section>

      {/* WUI Fire Codes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-y border-brand-tan/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
            WUI Fire Codes: Wildland-Urban Interface Requirements
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Large portions of Marin County fall within Wildland-Urban
              Interface (WUI) zones, particularly hillside communities in Mill
              Valley, Tiburon, and the unincorporated areas around Mt.
              Tamalpais. A whole house remodel in a WUI zone triggers
              compliance with California&apos;s Chapter 7A fire-resistance
              standards.
            </p>
            <p>
              WUI requirements affect roofing materials (Class A fire-rated),
              exterior siding (non-combustible or ignition-resistant), windows
              (tempered glass or dual-pane), vents (ember-resistant), decking
              (non-combustible or ignition-resistant), and defensible space
              around the structure. These requirements significantly impact
              material selections and can affect project costs.
            </p>
            <p>
              ConstruBay has extensive experience building in Marin&apos;s WUI
              zones. We specify fire-resistant materials that meet code
              requirements while maintaining the aesthetic quality our clients
              expect. Our PlanPass.ai system verifies WUI compliance during
              the pre-submission review, preventing costly plan check
              corrections.
            </p>
          </div>
        </div>
      </section>

      {/* Hillside Structural */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Hillside Structural Engineering
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Many of Marin County&apos;s most desirable neighborhoods are built on
            hillsides, and whole house remodels in these locations require
            specialized structural engineering. Slope stability, soil
            conditions, drainage management, and retaining wall design are
            critical considerations that affect both safety and project scope.
          </p>
          <p>
            Hillside remodels often require geotechnical investigation to
            assess soil bearing capacity and slope stability. Engineered
            retaining walls, upgraded drainage systems, and pier foundations
            may be necessary to support structural modifications. Grading
            permits from Marin County add a layer of regulatory complexity
            that our team navigates routinely.
          </p>
          <p>
            ConstruBay has completed numerous hillside remodels throughout
            Marin County. We coordinate geotechnical engineers, structural
            engineers, and civil engineers as needed, managing the entire
            technical scope alongside the architectural design and finish work.
          </p>
        </div>
      </section>

      {/* Cost Range */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-8">
            Whole House Remodel Cost Ranges in Marin County
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Whole house remodel costs in Marin County range from $300,000 to
              $800,000 or more, depending on the home&apos;s size, structural scope,
              and finish level.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Systems &amp; Finishes
                </h3>
                <p className="text-2xl text-white font-bold">$300K &ndash; $450K</p>
                <p className="text-white/60 text-sm mt-1">
                  New HVAC, electrical, plumbing, and complete interior refresh.
                </p>
              </div>
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Structural + Interior
                </h3>
                <p className="text-2xl text-white font-bold">$450K &ndash; $600K</p>
                <p className="text-white/60 text-sm mt-1">
                  Wall removal, additions, seismic upgrades, luxury finishes.
                </p>
              </div>
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Comprehensive Overhaul
                </h3>
                <p className="text-2xl text-white font-bold">$600K &ndash; $800K</p>
                <p className="text-white/60 text-sm mt-1">
                  Foundation, structure, systems, interior, and exterior.
                </p>
              </div>
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Ultra-Premium / Hillside
                </h3>
                <p className="text-2xl text-white font-bold">$800K+</p>
                <p className="text-white/60 text-sm mt-1">
                  Complex engineering, premium materials, extensive site work.
                </p>
              </div>
            </div>
            <p>
              These ranges include design, engineering, permitting, and
              construction. Actual costs depend on your specific home,
              structural requirements, and finish selections.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Timeline: 6 to 18 Months
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            A whole house remodel in Marin County typically takes 6 to 18
            months for construction, with the design and permitting phase
            adding 2 to 4 months upfront. The timeline depends on scope:
            homes requiring structural modifications, seismic upgrades, or
            hillside engineering take longer than primarily cosmetic overhauls.
          </p>
          <p>
            During a whole house remodel, most homeowners relocate temporarily.
            ConstruBay helps coordinate timing so you can plan your temporary
            housing around the construction schedule. We provide regular
            progress updates and maintain a transparent timeline throughout
            the project.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10 text-center">
            Our Whole House Remodel Process
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
        </div>
      </section>

      {/* PlanPass.ai */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
            Faster Permits with PlanPass.ai
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Whole house remodel permits in Marin County are among the most
              complex residential permits issued. They touch structural,
              mechanical, electrical, plumbing, energy, and sometimes planning
              codes simultaneously. A single omission can trigger a correction
              cycle that delays the project by weeks.
            </p>
            <p>
              PlanPass.ai, our proprietary AI-powered analysis tool, reviews
              your complete plan set against all applicable codes before
              submission. This pre-analysis catches 90% of common issues,
              resulting in cleaner submissions and faster approvals. For whole
              house remodels, this can save months compared to the traditional
              submit-and-correct approach.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10 text-center">
            Whole House Remodel FAQs &mdash; Marin County
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
            Start Your Whole House Remodel
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From initial assessment to final walkthrough, ConstruBay manages
            every phase of your home&apos;s transformation. Licensed general
            contractor CSLB #1106798, based in Mill Valley, serving all of
            Marin and Sonoma Counties.
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
            <Link href="/services/kitchen-remodel-marin-county" className="hover:text-brand-tan transition-colors">
              Kitchen Remodel
            </Link>
            <Link href="/services/adu-builder-marin-county" className="hover:text-brand-tan transition-colors">
              ADU Builder Marin County
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
