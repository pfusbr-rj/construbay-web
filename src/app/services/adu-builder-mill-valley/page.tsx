"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does an ADU cost in Mill Valley?",
    answer:
      "$200,000 to $500,000+ for Mill Valley. Hillside sites, Design Review requirements, and premium finishes typical of the area push costs higher than county averages.",
  },
  {
    question:
      "Do I need Design Review Board approval for an ADU in Mill Valley?",
    answer:
      "In most cases, yes. Mill Valley\u2019s Design Review Board evaluates ADU projects for neighborhood compatibility, especially on hillside lots.",
  },
  {
    question: "How long does it take to build an ADU in Mill Valley?",
    answer:
      "Plan for 8-12 months total: 2-3 months design, 3-4 months permits, and 4-6 months construction.",
  },
  {
    question: "Can I build an ADU if my lot is on a steep slope?",
    answer:
      "Yes, we specialize in hillside construction. Additional engineering for grading, retaining walls, and fire access is required but very doable with experienced contractors.",
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

const neighborhoods = [
  {
    name: "Strawberry Point",
    note: "Flat to gentle slopes with good vehicle access. Many lots here accommodate detached ADUs with standard setbacks. Proximity to Highway 101 makes these attractive rental units for commuters.",
  },
  {
    name: "Tam Valley",
    note: "Mixed terrain with some flat parcels and hillside lots along the edges. Tam Valley offers some of the more accessible ADU sites in Mill Valley, with generally straightforward utility connections through the Tamalpais Community Services District.",
  },
  {
    name: "Almonte",
    note: "Close to the freeway and Marin City, Almonte has a mix of older homes on moderate lots. Garage conversions are particularly popular here due to the existing structure inventory and relatively flat terrain.",
  },
  {
    name: "Alto",
    note: "Hillside neighborhood with panoramic views. ADU sites here often require engineered retaining walls and geotechnical reports, but the elevation makes these units highly desirable for tenants willing to pay premium rents.",
  },
  {
    name: "Homestead Valley",
    note: "Steep terrain, narrow roads, and heavy tree canopy. ADU construction in Homestead Valley requires careful fire access planning, defensible space compliance, and often creative site engineering. Our team has built in this neighborhood and understands its unique constraints.",
  },
];

export default function AduMillValleyPage() {
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
            Custom ADU Builder in Mill Valley, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Hillside specialists. Design, permits, and full construction by a
            local licensed general contractor. AI-powered permit analysis via
            PlanPass.ai.
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
          ADU Opportunities in Mill Valley
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Mill Valley is one of the most desirable communities in the San
            Francisco Bay Area, with a median home price exceeding $2 million
            and rental demand that consistently outpaces supply. The town&apos;s
            combination of natural beauty, excellent schools, and proximity to
            San Francisco makes it an ideal market for Accessory Dwelling
            Units.
          </p>
          <p>
            For homeowners, an ADU in Mill Valley represents a compelling
            financial opportunity. Monthly rental rates for a well-finished ADU
            in Mill Valley range from $2,800 to $4,500, depending on size,
            finish level, and location within the town. At these rates, a
            $300,000 ADU investment can generate positive cash flow within 6 to
            8 years &mdash; while simultaneously increasing your property value
            by an estimated $150,000 to $250,000 immediately upon completion.
          </p>
          <p>
            Beyond pure investment returns, Mill Valley homeowners build ADUs
            for aging parents who want to remain close to family, adult children
            who cannot afford to buy in Marin County, dedicated home offices
            that provide true separation from the main home, and guest suites
            for visitors. Whatever your reason, ConstruBay (CSLB #1106798)
            brings deep local knowledge and specialized hillside construction
            expertise to every Mill Valley ADU project.
          </p>
          <p>
            We are based in Mill Valley at 18 El Paseo Lane, and we build
            exclusively in Marin and Sonoma Counties. When you work with
            ConstruBay, you work with a team that lives in this community and
            understands its character, its regulations, and its construction
            challenges firsthand.
          </p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Mill Valley Neighborhoods We Serve
          </h2>
          <div className="space-y-6">
            {neighborhoods.map((n) => (
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
            We also serve neighboring communities including Corte Madera,
            Larkspur, Tiburon, and Sausalito. ConstruBay CSLB #1106798.
          </p>
        </div>
      </section>

      {/* Mill Valley Planning Department */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Navigating Mill Valley&apos;s Planning Department
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Mill Valley&apos;s Community Development Department handles ADU
            permit applications, and the process involves several layers that
            homeowners need to understand before committing time and money to a
            project.
          </p>
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            The Permit Process
          </h3>
          <p>
            ADU applications in Mill Valley go through a planning review that
            evaluates zoning compliance, lot coverage, setbacks, height limits,
            and neighborhood compatibility. For projects that require Design
            Review, there is an additional hearing before the Design Review
            Board &mdash; a body of appointed community members who evaluate
            the aesthetic and architectural impact of new construction on the
            surrounding neighborhood.
          </p>
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            Design Review Board Requirements
          </h3>
          <p>
            Mill Valley&apos;s Design Review Board evaluates ADU projects
            for bulk, mass, and scale relative to the primary residence and
            adjacent homes. They review exterior materials and colors,
            window placement and privacy impacts on neighbors, roof form and
            pitch compatibility, landscaping and screening plans, and lighting
            impacts. The Board typically meets twice a month, and projects may
            require one or two hearings before approval. ConstruBay has
            presented numerous projects to this Board and understands what they
            look for &mdash; saving you revision cycles and hearing
            continuances.
          </p>
          <h3 className="text-xl text-white font-semibold mt-8 mb-3">
            Neighborhood Compatibility Standards
          </h3>
          <p>
            Mill Valley places significant emphasis on maintaining the
            character of its diverse neighborhoods. ADU designs must complement
            the existing architectural vocabulary of the street &mdash; this
            does not mean your ADU must match your house exactly, but it
            should feel harmonious with the surrounding context. Our
            architectural team designs each ADU with neighborhood compatibility
            as a core consideration, which streamlines the approval process.
          </p>
        </div>
      </section>

      {/* Hillside Engineering */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-y border-brand-tan/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
            Hillside Engineering and WUI Zone Compliance
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Mill Valley sits at the base of Mt. Tamalpais, and a significant
              portion of the town&apos;s residential properties are on
              hillsides with slopes ranging from moderate to severe. Building
              an ADU on a hillside lot adds engineering complexity but is
              absolutely feasible with the right team.
            </p>
            <h3 className="text-xl text-white font-semibold mt-8 mb-3">
              Geotechnical Requirements
            </h3>
            <p>
              Hillside ADU projects in Mill Valley require a geotechnical
              investigation by a licensed geotechnical engineer. This report
              evaluates soil bearing capacity, slope stability, groundwater
              conditions, and seismic risks. The geotechnical recommendations
              directly inform the structural engineering design, including
              foundation types (drilled piers, grade beams, or caissons) and
              retaining wall specifications.
            </p>
            <h3 className="text-xl text-white font-semibold mt-8 mb-3">
              Fire Access and WUI Zone Compliance
            </h3>
            <p>
              Much of Mill Valley falls within the Wildland-Urban Interface
              (WUI) zone, which imposes strict fire safety requirements. ADUs
              in WUI zones must use fire-resistant exterior materials (Class A
              roofing, ignition-resistant siding, tempered glass), maintain
              defensible space clearances, and ensure emergency vehicle access.
              Mill Valley Fire Department requires a minimum 20-foot-wide
              access road and a turnaround for fire apparatus &mdash;
              requirements that can significantly impact ADU placement on steep
              lots.
            </p>
            <h3 className="text-xl text-white font-semibold mt-8 mb-3">
              Grading and Retaining Walls
            </h3>
            <p>
              Creating a level building pad on a hillside typically requires
              cut-and-fill grading and engineered retaining walls. In Mill
              Valley, grading permits are required for any earthwork exceeding
              50 cubic yards, and the city requires erosion control plans
              during construction. Retaining walls over 4 feet high require a
              separate building permit and structural engineering. ConstruBay
              manages all of these requirements as part of our integrated
              design-build process.
            </p>
          </div>
        </div>
      </section>

      {/* Cost and Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Mill Valley ADU Costs and Timeline
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            ADU construction costs in Mill Valley range from $200,000 to
            $500,000 or more. Mill Valley tends to run higher than county
            averages due to hillside site conditions, Design Review Board
            requirements that push architectural standards higher, premium
            finish expectations in the local market, and access constraints on
            narrow mountain roads that increase construction logistics costs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            <div className="border border-brand-tan/30 p-5 text-center">
              <p className="text-[#C9A84C] text-sm uppercase tracking-wider mb-2">
                Design Phase
              </p>
              <p className="text-2xl text-white font-bold">2&ndash;3 Months</p>
              <p className="text-white/60 text-sm mt-1">
                Architecture, engineering, Design Review prep
              </p>
            </div>
            <div className="border border-brand-tan/30 p-5 text-center">
              <p className="text-[#C9A84C] text-sm uppercase tracking-wider mb-2">
                Permit Phase
              </p>
              <p className="text-2xl text-white font-bold">3&ndash;4 Months</p>
              <p className="text-white/60 text-sm mt-1">
                Plan check, Design Review, PlanPass.ai analysis
              </p>
            </div>
            <div className="border border-brand-tan/30 p-5 text-center">
              <p className="text-[#C9A84C] text-sm uppercase tracking-wider mb-2">
                Construction
              </p>
              <p className="text-2xl text-white font-bold">4&ndash;6 Months</p>
              <p className="text-white/60 text-sm mt-1">
                Foundation through final inspection
              </p>
            </div>
          </div>
          <p>
            Total timeline from initial consultation to move-in ready ADU is
            typically 8 to 12 months. Our PlanPass.ai permit analysis is
            especially valuable in Mill Valley, where Design Review Board
            requirements and plan check corrections can add months to the
            standard timeline. By catching every code and design issue before
            submission, we compress the permit phase and get you to
            construction faster.
          </p>
          <p>
            ConstruBay provides detailed cost estimates after an on-site
            assessment. We believe in transparent pricing with no hidden fees
            &mdash; every line item is documented and explained. Licensed
            general contractor CSLB #1106798.
          </p>
        </div>
      </section>

      {/* PlanPass.ai Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.15em] uppercase text-[#C9A84C] mb-4">
            The ConstruBay Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            AI-Powered Permit Analysis for Mill Valley ADUs
          </h2>
          <p className="text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
            Our AI permit analysis through PlanPass.ai is especially valuable
            in Mill Valley, where Design Review Board requirements, WUI zone
            fire codes, and hillside-specific regulations create a complex web
            of compliance requirements. PlanPass.ai reads your blueprints and
            flags every potential issue &mdash; from Title 24 energy gaps to
            setback conflicts to fire code deficiencies &mdash; before you
            submit to the city. This saves weeks or months of back-and-forth
            with plan checkers and reduces costly revision cycles.
          </p>
          <Link
            href="/permit-risk-report"
            className="inline-block border border-white text-white text-sm tracking-[0.15em] uppercase px-8 py-3 hover:bg-white/10 transition-colors"
          >
            Get a Free Permit Risk Report
          </Link>
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
            Build Your Mill Valley ADU with ConstruBay
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From hillside engineering to Design Review Board presentations to
            final inspection, ConstruBay handles every aspect of your Mill
            Valley ADU project. We are your neighbors &mdash; based at 18 El
            Paseo Lane, Mill Valley. Licensed general contractor CSLB
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
