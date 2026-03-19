"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does an ADU cost in Marin County?",
    answer:
      "$185,000 to $450,000+ depending on type, size, and site conditions. Garage conversions start lower, while detached hillside units cost more.",
  },
  {
    question: "Can I build an ADU on a hillside in Mill Valley?",
    answer:
      "Yes, but hillside ADUs require additional engineering for grading, retaining walls, and fire access. Our team specializes in these challenging builds.",
  },
  {
    question: "How long do ADU permits take in Marin County?",
    answer:
      "Typically 3-6 months through standard review. With our PlanPass.ai pre-analysis, we reduce delays by catching issues before submission.",
  },
  {
    question: "What is the maximum ADU size in Marin County?",
    answer:
      "Detached ADUs can be up to 1,200 sq ft. Attached ADUs can be up to 50% of the primary dwelling. JADUs are limited to 500 sq ft.",
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

const aduTypes = [
  {
    title: "Detached ADUs",
    description:
      "Standalone structures built separately from your primary home. These offer maximum privacy for tenants or family members and can be up to 1,200 square feet. Detached ADUs in Marin County are popular for rental income, home offices, or multi-generational living. They require their own utility connections and must comply with setback requirements, but recent state legislation has significantly relaxed many local barriers.",
  },
  {
    title: "Attached ADUs",
    description:
      "Built as an addition or extension of your existing home, attached ADUs share at least one wall with the primary residence. They can be up to 50% of the primary dwelling\u2019s floor area. Attached ADUs are often more cost-effective than detached units because they share structural elements, roofing, and utility connections with the main house.",
  },
  {
    title: "Garage Conversions",
    description:
      "Converting an existing garage into a living space is one of the most cost-effective ADU options in Marin County. The existing structure provides the shell, reducing construction costs significantly. Garage conversions typically range from $185,000 to $280,000 depending on the condition of the existing structure and the level of finish. Replacement parking is generally not required under current state law.",
  },
  {
    title: "Junior ADUs (JADUs)",
    description:
      "JADUs are created within the existing footprint of your primary home and are limited to 500 square feet. They must include a cooking facility (can be a wet bar with a microwave and small sink) and have their own entrance. JADUs are the most affordable ADU option and do not require a separate utility connection, though they do need a separate entrance.",
  },
];

const processSteps = [
  {
    step: "Design",
    detail:
      "Architectural design tailored to your lot, zoning, and goals. We handle Design Review Board submissions where required.",
  },
  {
    step: "Permits with PlanPass.ai",
    detail:
      "AI-powered pre-submission analysis flags Title 24, zoning, and code issues before the county sees your plans. This reduces permit timelines by weeks or months.",
  },
  {
    step: "Construction",
    detail:
      "Licensed general contractor build-out with dedicated project manager. Regular progress updates and quality inspections throughout.",
  },
  {
    step: "Final Inspection",
    detail:
      "We coordinate all final inspections, obtain Certificate of Occupancy, and ensure your ADU is fully permitted and ready for use.",
  },
];

export default function AduMarinCountyPage() {
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
            ADU Builder in Marin County, CA &mdash; Design, Permits &amp;
            Construction
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Full-service ADU construction from design through final inspection.
            Garage conversions, detached units, hillside builds. AI-powered
            permit planning via PlanPass.ai.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Why ADUs in Marin County */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Why Build an ADU in Marin County?
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Marin County faces one of the most severe housing shortages in the
            Bay Area. Median home prices exceed $1.5 million, rental vacancy
            rates hover near 2%, and the county has committed to building
            thousands of new housing units under its Regional Housing Needs
            Allocation. Accessory Dwelling Units are a central part of that
            strategy, and state legislation &mdash; including SB 9, SB 897, and
            AB 2221 &mdash; has removed many of the local barriers that
            previously made ADU construction difficult.
          </p>
          <p>
            For homeowners, an ADU represents a significant financial
            opportunity. A well-built ADU in Marin County can generate $2,500 to
            $4,500 per month in rental income, depending on size, finish level,
            and location. Beyond rental income, ADUs add substantial property
            value &mdash; typically 20% to 30% of the construction cost is
            recouped immediately in added home value, with the remainder earned
            back through rental income over 5 to 8 years.
          </p>
          <p>
            ADUs also serve non-rental purposes: aging-in-place suites for
            parents, private home offices that became essential during the remote
            work shift, guest houses for visitors to wine country, and
            independent living spaces for adult children priced out of the Marin
            County housing market.
          </p>
          <p>
            ConstruBay (CSLB #1106798) is a licensed general contractor based
            in Mill Valley, specializing in ADU construction throughout Marin
            County. We handle every phase &mdash; architectural design, permit
            expediting with our PlanPass.ai technology, and full construction
            management.
          </p>
        </div>
      </section>

      {/* ADU Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            ADU Types We Build in Marin County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aduTypes.map((type) => (
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

      {/* Marin County ADU Specifics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Marin County ADU Requirements and Challenges
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Building an ADU in Marin County involves navigating a regulatory
            landscape that is more complex than most California jurisdictions.
            While state law has streamlined many requirements, Marin County
            retains several local provisions that can catch unprepared
            homeowners off guard.
          </p>
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            Design Review Board Requirements
          </h3>
          <p>
            Several Marin County communities &mdash; including Mill Valley,
            Tiburon, and parts of unincorporated Marin &mdash; require Design
            Review Board approval for ADU projects. This board evaluates
            architectural compatibility with the surrounding neighborhood,
            including materials, colors, massing, and roof pitch. Preparing for
            Design Review adds time and requires careful architectural planning,
            but ConstruBay has extensive experience presenting ADU projects to
            these boards successfully.
          </p>
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            Hillside Construction Challenges
          </h3>
          <p>
            Much of Marin County&apos;s residential land is on hillsides, particularly
            in Mill Valley, Tiburon, and the unincorporated areas around Mt.
            Tamalpais. Hillside ADU construction requires geotechnical
            investigation, engineered retaining walls, grading permits, and
            often a soils report. Steep lots also present access challenges for
            construction equipment and materials delivery. Our team has built
            multiple hillside ADUs and understands the engineering requirements
            intimately.
          </p>
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            Setback and Coverage Rules
          </h3>
          <p>
            Under current California law, ADUs can be built with a 4-foot rear
            and side setback, overriding many local setback requirements.
            However, front setbacks and lot coverage maximums still apply in most
            Marin County jurisdictions. Understanding which rules have been
            preempted by state law and which remain in effect requires deep
            knowledge of both state legislation and local code &mdash; precisely
            the kind of analysis our PlanPass.ai system performs.
          </p>
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            Utility Connections
          </h3>
          <p>
            Detached ADUs in Marin County require separate utility connections
            for water, sewer, and electric. In Marin Municipal Water District
            territory, new water connections involve capacity fees that can range
            from $10,000 to $25,000. Sewer connection fees through Sanitary
            Districts vary by location. We factor all utility costs into our
            project estimates so there are no surprises.
          </p>
        </div>
      </section>

      {/* Mill Valley Hillside Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-y border-brand-tan/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
            Mill Valley Hillside ADUs: Our Specialty
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Mill Valley presents some of the most challenging &mdash; and
              rewarding &mdash; ADU building sites in Marin County. The town is
              nestled at the base of Mt. Tamalpais, with many residential lots
              on steep grades that require specialized construction techniques.
            </p>
            <p>
              Hillside ADU challenges in Mill Valley include limited equipment
              access on narrow mountain roads, significant grading and soil
              stabilization requirements, fire department access road compliance
              in WUI (Wildland-Urban Interface) zones, and the need for
              engineered retaining walls to create level building pads. Mt.
              Tamalpais fire codes are among the strictest in the state,
              requiring defensible space, fire-resistant materials, and
              emergency vehicle access that can significantly impact ADU design
              and placement.
            </p>
            <p>
              ConstruBay is headquartered in Mill Valley and has built multiple
              hillside ADUs in the area. We understand the terrain, the
              permitting requirements, and the construction logistics that make
              these projects successful. Our experience with Mill Valley&apos;s
              Design Review Board and the Marin County Community Development
              Agency means fewer surprises and faster approvals.
            </p>
            <p>
              <Link
                href="/services/adu-builder-mill-valley"
                className="text-[#C9A84C] hover:underline"
              >
                Learn more about our Mill Valley ADU services &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Cost Range */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          ADU Cost Ranges in Marin County
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            ADU construction costs in Marin County range from $185,000 to
            $450,000 or more, depending on the type of unit, size, site
            conditions, and finish level. Here is a general breakdown:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <div className="border border-brand-tan/30 p-5">
              <h3 className="text-[#C9A84C] font-semibold mb-1">
                Garage Conversion
              </h3>
              <p className="text-2xl text-white font-bold">$185K &ndash; $280K</p>
              <p className="text-white/60 text-sm mt-1">
                Existing structure, 400&ndash;600 sq ft typical
              </p>
            </div>
            <div className="border border-brand-tan/30 p-5">
              <h3 className="text-[#C9A84C] font-semibold mb-1">JADU</h3>
              <p className="text-2xl text-white font-bold">$120K &ndash; $200K</p>
              <p className="text-white/60 text-sm mt-1">
                Within existing home, up to 500 sq ft
              </p>
            </div>
            <div className="border border-brand-tan/30 p-5">
              <h3 className="text-[#C9A84C] font-semibold mb-1">
                Detached ADU (Flat Lot)
              </h3>
              <p className="text-2xl text-white font-bold">$280K &ndash; $400K</p>
              <p className="text-white/60 text-sm mt-1">
                New construction, 600&ndash;1,200 sq ft
              </p>
            </div>
            <div className="border border-brand-tan/30 p-5">
              <h3 className="text-[#C9A84C] font-semibold mb-1">
                Detached ADU (Hillside)
              </h3>
              <p className="text-2xl text-white font-bold">$350K &ndash; $450K+</p>
              <p className="text-white/60 text-sm mt-1">
                Includes grading, retaining walls, engineering
              </p>
            </div>
          </div>
          <p>
            These ranges include design, permitting, construction, and utility
            connections. Actual costs depend on your specific site, local
            jurisdiction fees, and finish selections. ConstruBay (CSLB #1106798)
            provides detailed project estimates after an initial site
            assessment.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10 text-center">
            Our ADU Construction Process
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
            We use AI-powered permit analysis to catch issues before submission
            &mdash; saving you weeks or months of delay.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            ADU FAQs &mdash; Marin County
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
            Start Your Marin County ADU Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From initial design consultation to Certificate of Occupancy,
            ConstruBay manages every detail. Licensed general contractor CSLB
            #1106798, based in Mill Valley, serving all of Marin and Sonoma
            Counties.
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
            <Link href="/services/adu-builder-mill-valley" className="hover:text-brand-tan transition-colors">
              ADU Builder Mill Valley
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
