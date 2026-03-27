"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How do I verify a contractor's license in California?",
    answer:
      "Visit the California Contractors State License Board (CSLB) website at cslb.ca.gov and search by license number or contractor name. ConstruBay's license number is 1106798 — you can verify our active status, bonding, insurance, and any complaint history directly on the CSLB site. Always verify before hiring any contractor.",
  },
  {
    question: "What does a general contractor do?",
    answer:
      "A general contractor manages every aspect of a construction project: obtaining permits, hiring and coordinating subcontractors (electricians, plumbers, tile setters, etc.), scheduling inspections, managing the budget and timeline, and ensuring all work meets building code. The GC is your single point of accountability for the entire project.",
  },
  {
    question: "How much does a general contractor charge in Marin County?",
    answer:
      "General contractors in Marin County typically charge 15% to 25% of total project cost as their fee, which covers project management, coordination, scheduling, and overhead. Some contractors use cost-plus pricing, others use fixed-price contracts. ConstruBay provides transparent pricing with detailed line-item estimates so you know exactly where every dollar goes.",
  },
  {
    question: "What is the difference between a general contractor and a handyman?",
    answer:
      "A licensed general contractor (Class B license) can manage projects of any size, pull building permits, and perform or supervise structural, electrical, plumbing, and mechanical work. A handyman is limited to projects under $500 in California and cannot pull permits or perform work requiring a specialty license. For any project involving permits, structural changes, or significant scope, you need a licensed GC.",
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

const services = [
  {
    title: "Kitchen Remodels",
    description:
      "Complete kitchen renovations from layout redesign to cabinet installation, countertops, appliances, lighting, and flooring. Custom and semi-custom cabinetry, quartz and natural stone countertops, professional-grade appliances.",
    href: "/services/kitchen-remodel-marin-county",
  },
  {
    title: "Bathroom Remodels",
    description:
      "Luxury bathroom remodeling with walk-in showers, freestanding tubs, heated floors, custom vanities, and Schluter waterproofing systems. Spa-inspired design for primary suites and guest bathrooms.",
    href: "/services/bathroom-remodel-marin-county",
  },
  {
    title: "Whole House Remodels",
    description:
      "Full-scale renovations that transform your entire home. Open floor plans, updated kitchens and bathrooms, new flooring, lighting, windows, and mechanical systems. Design-build from concept through completion.",
    href: "/services/whole-house-remodel-marin-county",
  },
  {
    title: "Home Additions",
    description:
      "Second stories, room additions, bump-outs, and sunrooms. Architectural design, structural engineering, foundation work, and seamless integration with your existing home.",
    href: "/services/home-addition-contractor-marin-county",
  },
  {
    title: "ADU Construction",
    description:
      "Accessory Dwelling Units — detached, attached, garage conversions, and JADUs. Full design-build service including permits, construction, and utility connections. AI-powered permit planning via PlanPass.ai.",
    href: "/services/adu-builder-marin-county",
  },
  {
    title: "Custom Pools & Pool Houses",
    description:
      "Custom pool design and construction, pool houses, outdoor kitchens, and hardscape. Gunite, pebble finish, automation systems, heating, and landscaping integration.",
    href: "/services/custom-pool-builder-marin-county",
  },
];

const marinCities = [
  "Mill Valley",
  "Tiburon",
  "Belvedere",
  "Sausalito",
  "Corte Madera",
  "Larkspur",
  "San Anselmo",
  "Fairfax",
  "Ross",
  "Kentfield",
  "Greenbrae",
  "San Rafael",
  "Terra Linda",
  "Lucas Valley",
  "Novato",
  "Stinson Beach",
  "Bolinas",
  "Point Reyes Station",
];

const processSteps = [
  {
    step: "Consultation",
    detail:
      "We meet at your property to understand your goals, assess existing conditions, and discuss budget and timeline. You get an honest evaluation of what is feasible and what it will cost.",
  },
  {
    step: "Design & Estimating",
    detail:
      "Architectural design, engineering as needed, and a detailed line-item estimate. Our PlanPass.ai technology pre-analyzes plans for code compliance before permit submission.",
  },
  {
    step: "Permitting",
    detail:
      "We handle all permit applications, plan check responses, and agency coordination. Our experience with Marin County building departments means fewer revisions and faster approvals.",
  },
  {
    step: "Construction & Management",
    detail:
      "A dedicated project manager coordinates all trades, manages the schedule, and provides regular progress updates. Quality inspections at every stage ensure work meets our standards and building code.",
  },
];

export default function GeneralContractorMarinCountyPage() {
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
            Licensed General Contractor in Marin County, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Remodels, ADUs, home additions, pools, and custom builds. Fully
            licensed, bonded, and insured. AI-powered permit planning via
            PlanPass.ai. Free consultation.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          What Makes ConstruBay Different
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            ConstruBay is a licensed general contractor (CSLB #1106798) based
            in Mill Valley, serving all of Marin County. We combine local
            construction expertise with proprietary AI technology to deliver
            projects that are on time, on budget, and fully code-compliant.
          </p>
          <p>
            Our differentiator is PlanPass.ai &mdash; our AI-powered permit
            analysis platform that reviews construction plans against Title 24
            energy code, local zoning ordinances, building code requirements,
            and agency-specific submission standards before your plans are
            submitted. This catches issues that would otherwise result in plan
            check corrections, saving weeks or months of permitting delays and
            thousands of dollars in redesign costs.
          </p>
          <p>
            We have built our reputation on transparency, communication, and
            craftsmanship. Every project gets a dedicated project manager, a
            detailed line-item estimate with no hidden allowances, and weekly
            progress updates. Our subcontractor relationships are built on years
            of collaboration &mdash; we work with the same trusted electricians,
            plumbers, tile installers, and finish carpenters on every project.
          </p>
          <p>
            ConstruBay is fully licensed, bonded, and insured. You can verify
            our license status at any time on the California Contractors State
            License Board website using license number 1106798.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="border border-white/20 p-6 hover:border-[#C9A84C]/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Areas We Serve in Marin County
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            ConstruBay serves all communities in Marin County, from the
            waterfront towns of Sausalito and Tiburon to the inland communities
            of San Anselmo, Fairfax, and Novato. We understand the unique
            building requirements, Design Review Board processes, and
            permitting timelines for each jurisdiction.
          </p>
          <div className="flex flex-wrap gap-3 my-8">
            {marinCities.map((city) => (
              <span
                key={city}
                className="border border-brand-tan/30 px-4 py-2 text-sm text-white/70"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Licensed GC */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-y border-brand-tan/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
            Why Hire a Licensed General Contractor
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Hiring a licensed general contractor protects you legally,
              financially, and structurally. In California, any project over
              $500 (including labor and materials) legally requires a licensed
              contractor. Working with an unlicensed contractor means no
              recourse through the CSLB if something goes wrong, no guarantee
              of insurance coverage, and potential issues with home insurance
              claims, resale, and code compliance.
            </p>
            <p>
              A licensed GC carries general liability insurance (typically $1M
              to $2M), workers&apos; compensation insurance for employees,
              and a contractor&apos;s bond. These protections mean that if a
              worker is injured on your property or if work is defective, you
              are not personally liable.
            </p>
            <p>
              Licensed contractors also understand building code, pull proper
              permits, schedule required inspections, and ensure that all work
              is done to code. Unpermitted work can result in fines, forced
              removal, and significant problems when you sell your home.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10 text-center">
            Our Process
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
            PlanPass.ai gives ConstruBay clients a technology advantage that
            no other Marin County contractor offers.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            General Contractor FAQs &mdash; Marin County
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
            Ready to Start Your Project?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            ConstruBay is Marin County&apos;s technology-forward general
            contractor. Licensed, bonded, insured, and powered by PlanPass.ai.
            CSLB #1106798.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Consultation
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
              Sonoma County
            </Link>
            <Link href="/permit-risk-report" className="hover:text-brand-tan transition-colors">
              Permit Risk Report
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
