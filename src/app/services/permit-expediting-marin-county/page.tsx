"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How long do permits take in Marin County?",
    answer:
      "Standard building permits in Marin County take 3 to 6 months on average, including plan check review and correction cycles. Complex projects involving planning review, Design Review Board, or multiple departments can take 6 to 12 months. Incomplete or non-compliant submissions are the primary cause of extended timelines. ConstruBay's PlanPass.ai pre-analysis significantly reduces these delays.",
  },
  {
    question: "Can you expedite my permit?",
    answer:
      "Yes. ConstruBay offers permit expediting services that include complete application preparation, PlanPass.ai pre-analysis for code compliance, direct communication with plan checkers, rapid response to correction notices, and coordination across multiple departments. While we cannot bypass the county's review process, we eliminate the delays caused by incomplete submissions and avoidable errors.",
  },
  {
    question: "What is PlanPass.ai?",
    answer:
      "PlanPass.ai is ConstruBay's proprietary AI-powered plan review technology. It analyzes construction plans against Title 24 energy code, California Building Code, California Plumbing and Electrical Codes, and local amendments specific to your jurisdiction. By catching errors and omissions before submission, PlanPass.ai eliminates the correction cycles that cause most permit delays in Marin County.",
  },
  {
    question: "Do you handle permits for architects and designers?",
    answer:
      "Yes. ConstruBay partners with architects and designers throughout Marin and Sonoma County to manage the permit process on their behalf. We run plans through PlanPass.ai to catch issues before submission, prepare and submit permit applications, respond to plan check corrections, and coordinate inspections. This frees architects and designers to focus on their core work while ensuring their projects stay on schedule.",
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

const permitTypes = [
  {
    title: "Building Permits",
    description:
      "Structural, mechanical, electrical, and plumbing permits for residential and commercial construction. New construction, remodels, additions, and tenant improvements.",
  },
  {
    title: "Planning Permits",
    description:
      "Use permits, variances, conditional use permits, and zoning compliance. Required when projects involve changes in use, non-conforming conditions, or development standards.",
  },
  {
    title: "Design Review",
    description:
      "Design Review Board applications for communities that require architectural review including Mill Valley, Tiburon, Sausalito, and parts of unincorporated Marin County.",
  },
  {
    title: "Grading Permits",
    description:
      "Required for projects involving earthwork, hillside construction, retaining walls, and drainage modifications. Involves engineering review and environmental compliance.",
  },
  {
    title: "Encroachment Permits",
    description:
      "Required when construction affects public right-of-way, sidewalks, or utilities. Common for projects that need temporary street access or utility connections.",
  },
  {
    title: "Fire Department Review",
    description:
      "Fire marshal review for projects in WUI zones, commercial buildings, and any project requiring fire sprinklers, fire access roads, or defensible space compliance.",
  },
];

const citiesServed = [
  { name: "Mill Valley", detail: "Design Review Board, hillside regulations, WUI fire codes" },
  { name: "Tiburon", detail: "Design Review Board, waterfront regulations, hillside engineering" },
  { name: "Sausalito", detail: "Design Review Board, waterfront and hillside constraints" },
  { name: "San Rafael", detail: "Largest city in Marin, active building department, downtown specific plans" },
  { name: "Novato", detail: "Suburban development, residential and commercial permits" },
  { name: "Corte Madera", detail: "Design review requirements, residential remodel permits" },
  { name: "Larkspur", detail: "Historic district considerations, residential permits" },
  { name: "Fairfax", detail: "Environmental review, hillside and creek setback regulations" },
  { name: "San Anselmo", detail: "Flood zone considerations, residential renovation permits" },
  { name: "Ross", detail: "Design Review Board, strict architectural standards" },
  { name: "Petaluma", detail: "Growing city, active building department, residential and commercial" },
  { name: "Santa Rosa", detail: "Post-fire rebuilding, expedited review programs, largest Sonoma city" },
];

export default function PermitExpeditingMarinCountyPage() {
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
            Permit Expediting in Marin County
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Speed up your Marin County construction permits with AI-powered
            plan review. PlanPass.ai catches issues before submission, avoiding
            the 3&ndash;6 month delays that plague most projects.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Marin County: One of California&apos;s Slowest Permit Jurisdictions
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Marin County is consistently ranked among the slowest
            jurisdictions in California for construction permit processing.
            Standard building permits take 3 to 6 months on average, with
            complex projects stretching to 12 months or more. For homeowners
            and builders, these delays translate directly into higher costs,
            missed deadlines, and extended uncertainty.
          </p>
          <p>
            The problem isn&apos;t just bureaucracy &mdash; it&apos;s a combination of
            understaffed plan check departments, complex local regulations
            layered on top of state codes, and a high volume of incomplete or
            non-compliant submissions that clog the review pipeline. Every
            correction cycle adds 3 to 6 weeks to the timeline, and the
            average project goes through 2 to 3 correction cycles before
            approval.
          </p>
          <p>
            ConstruBay (CSLB #1106798) offers permit expediting services
            powered by PlanPass.ai, our proprietary AI plan review technology.
            We don&apos;t cut corners &mdash; we eliminate the errors and omissions
            that cause delays in the first place, resulting in cleaner
            submissions and faster approvals.
          </p>
        </div>
      </section>

      {/* Why Permits Take So Long */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-8">
            Why Permits Take So Long in Marin County
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Understanding why permits are slow is the first step to making
              them faster. The primary causes of permit delays in Marin County
              include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="border border-white/20 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-2">Plan Check Backlog</h3>
                <p className="text-white/70 text-sm">County plan checkers are overloaded with submissions, creating a queue that extends initial review times to 4-8 weeks.</p>
              </div>
              <div className="border border-white/20 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-2">Incomplete Submissions</h3>
                <p className="text-white/70 text-sm">Missing calculations, inadequate details, or absent documentation triggers immediate resubmission requirements.</p>
              </div>
              <div className="border border-white/20 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-2">Code Conflicts</h3>
                <p className="text-white/70 text-sm">Plans that violate Title 24, CBC, local amendments, or zoning codes require correction cycles that add 3-6 weeks each.</p>
              </div>
              <div className="border border-white/20 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-2">Multiple Revision Cycles</h3>
                <p className="text-white/70 text-sm">The average project goes through 2-3 rounds of corrections. Each round re-enters the review queue from the back.</p>
              </div>
            </div>
            <p>
              ConstruBay&apos;s approach targets these specific bottlenecks.
              PlanPass.ai eliminates code conflicts and incomplete submissions
              before the plans reach the county, while our experienced permit
              team manages the process to prevent unnecessary delays.
            </p>
          </div>
        </div>
      </section>

      {/* PlanPass.ai Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          The PlanPass.ai Solution
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            PlanPass.ai is ConstruBay&apos;s proprietary AI-powered plan review
            system. Before we submit any plans to Marin County, PlanPass.ai
            analyzes every sheet against the applicable codes &mdash; Title 24
            energy requirements, California Building Code, California
            Plumbing Code, California Electrical Code, California Mechanical
            Code, and local amendments specific to your jurisdiction.
          </p>
          <p>
            The system catches approximately 90% of the common issues that
            trigger plan check corrections. These include Title 24 energy
            calculation errors, missing structural details, plumbing fixture
            count discrepancies, electrical load calculation gaps, zoning
            setback violations, and incomplete accessibility compliance.
          </p>
          <p>
            By submitting clean, comprehensive plans on the first attempt, we
            avoid the correction cycles that cause most delays. The result is
            a permit timeline that is weeks or months shorter than the typical
            experience &mdash; without cutting any corners on code compliance.
          </p>
          <p>
            PlanPass.ai is not a shortcut. It&apos;s a higher standard of
            preparation that benefits everyone: the homeowner gets faster
            approvals, the county gets cleaner submissions that are easier to
            review, and the project stays on schedule.
          </p>
        </div>
      </section>

      {/* For Homeowners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-y border-brand-tan/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
            For Homeowners: We Manage the Entire Permit Process
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              If you&apos;re a homeowner planning a construction project in Marin
              County, the permit process can be overwhelming. Different
              departments, overlapping requirements, confusing forms, and long
              wait times make it one of the most stressful parts of any
              project.
            </p>
            <p>
              ConstruBay handles everything. From preparing the initial
              application to responding to plan check corrections to
              scheduling inspections, we manage the permit process end-to-end.
              You don&apos;t need to visit the county building department, decipher
              correction notices, or track down missing documents. We keep you
              informed with clear status updates while handling all the
              technical details.
            </p>
            <p>
              For design-build clients, permit expediting is included in our
              service. For homeowners who already have plans from an architect
              and need permit management only, we offer standalone permit
              expediting services.
            </p>
          </div>
        </div>
      </section>

      {/* For Architects & Designers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          For Architects &amp; Designers: Protect Your Project Timelines
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Architects and designers in Marin County know the frustration of
            permit delays derailing carefully planned project timelines. A
            design that took months to perfect sits in a plan check queue,
            comes back with corrections, and the entire schedule shifts.
            Clients lose confidence, contractors lose availability, and the
            project suffers.
          </p>
          <p>
            ConstruBay partners with architects and designers to eliminate
            this bottleneck. We run your completed plans through PlanPass.ai
            before submission, catching code issues that your team may not
            specialize in &mdash; particularly Title 24 energy compliance,
            local amendment conflicts, and interdisciplinary coordination
            gaps between structural, mechanical, and electrical systems.
          </p>
          <p>
            Our partnership model is straightforward: you design, we manage
            permits. We prepare applications, submit plans, respond to
            corrections, and coordinate with the county on your behalf. Your
            firm maintains the client relationship and design control while
            we handle the regulatory process. This is particularly valuable
            for firms with multiple active projects competing for staff time.
          </p>
          <p>
            Several Marin County architecture firms use ConstruBay as their
            preferred permit partner. Contact us to discuss how we can
            support your practice.
          </p>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Permit Types We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {permitTypes.map((type) => (
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

      {/* Cities We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Cities We Serve in Marin &amp; Sonoma County
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Every jurisdiction in Marin and Sonoma County has its own building
            department, local amendments, and review processes. ConstruBay has
            working relationships with building departments throughout both
            counties and understands each jurisdiction&apos;s specific requirements
            and review patterns.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-8">
            {citiesServed.map((city) => (
              <div key={city.name} className="border border-brand-tan/30 p-4">
                <h3 className="text-[#C9A84C] font-semibold text-sm">{city.name}</h3>
                <p className="text-white/60 text-xs mt-1">{city.detail}</p>
              </div>
            ))}
          </div>
          <p>
            We also serve unincorporated Marin County (processed through the
            Marin County Community Development Agency) and additional Sonoma
            County jurisdictions including Healdsburg, Sebastopol, Sonoma,
            and Windsor.
          </p>
        </div>
      </section>

      {/* Cost */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-8">
            Permit Expediting Fees
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              For ConstruBay design-build clients, permit expediting and
              PlanPass.ai analysis are included in the construction contract
              at no additional charge. This is one of the key advantages of
              our integrated design-build model &mdash; permit management is
              built into the service, not an afterthought.
            </p>
            <p>
              For standalone permit expediting (when you have plans from
              another architect or designer), fees vary based on project
              complexity and the jurisdictions involved. Contact us for a
              quote specific to your project. Standalone services include
              PlanPass.ai pre-analysis, application preparation and
              submission, plan check correction responses, and inspection
              coordination.
            </p>
            <p>
              In either case, our goal is the same: get your project permitted
              as fast as possible with zero surprises. The time and stress
              saved by professional permit management consistently outweighs
              the cost.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Permit Expediting FAQs &mdash; Marin County
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
            Stop Waiting on Permits
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Whether you&apos;re a homeowner, architect, or designer, ConstruBay&apos;s
            permit expediting service gets your project through Marin County
            faster. AI-powered plan review. Expert permit management. Licensed
            general contractor CSLB #1106798.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started
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
