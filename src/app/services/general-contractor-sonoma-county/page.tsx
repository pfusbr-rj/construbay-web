"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "Does ConstruBay serve Sonoma County?",
    answer:
      "Yes. ConstruBay serves all of Sonoma County including Petaluma, Santa Rosa, Sebastopol, Sonoma, Windsor, Healdsburg, and rural unincorporated areas. We are based in Mill Valley and have been working throughout Sonoma County for years, with deep experience in both urban and rural construction.",
  },
  {
    question: "How do construction costs in Sonoma County compare to Marin County?",
    answer:
      "Construction costs in Sonoma County are generally 10% to 20% lower than Marin County for comparable projects. This is due to lower permit fees, less restrictive Design Review requirements in many jurisdictions, and slightly lower labor costs. However, rural properties with septic, well water, or long driveways can offset these savings with additional site preparation costs.",
  },
  {
    question: "What are the considerations for building on rural Sonoma County properties?",
    answer:
      "Rural Sonoma County properties often have septic systems instead of municipal sewer, well water instead of city water, propane instead of natural gas, and longer utility runs. These factors affect project planning, cost, and permitting. Septic systems may need evaluation or replacement to support additional construction. Well water capacity must be verified. We have extensive experience building on rural Sonoma County properties.",
  },
  {
    question: "Does ConstruBay do fire rebuilding in Sonoma County?",
    answer:
      "Yes. Following the Tubbs Fire, Kincade Fire, and Glass Fire, ConstruBay has helped Sonoma County homeowners rebuild. Fire rebuilds involve unique challenges including site clearing, soil testing, updated fire codes, defensible space requirements, and insurance coordination. We manage the entire rebuild process from demolition through Certificate of Occupancy.",
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

const sonomaCities = [
  "Petaluma",
  "Santa Rosa",
  "Sebastopol",
  "Sonoma",
  "Windsor",
  "Healdsburg",
  "Cloverdale",
  "Rohnert Park",
  "Cotati",
  "Glen Ellen",
  "Kenwood",
  "Occidental",
  "Bodega Bay",
  "Penngrove",
  "Graton",
];

const serviceAreas = [
  {
    title: "Petaluma",
    description:
      "Petaluma offers a mix of historic downtown homes, newer suburban developments, and rural properties. Construction costs are among the most affordable in the North Bay. Popular projects include whole house remodels of historic Victorians, ADUs for rental income, and outdoor living spaces. The city's permitting process is straightforward compared to many Marin County jurisdictions.",
  },
  {
    title: "Santa Rosa",
    description:
      "As Sonoma County's largest city, Santa Rosa has significant construction activity including fire rebuilds in Fountaingrove and Coffey Park, new ADU construction, and whole house remodels. Post-fire building codes have been updated with stricter fire-resistant requirements. ConstruBay has experience navigating Santa Rosa's updated building department and fire rebuild process.",
  },
  {
    title: "Sebastopol",
    description:
      "Sebastopol attracts homeowners focused on sustainability and eco-friendly building. Green building practices, solar integration, rainwater harvesting, and energy-efficient design are common requests. Many Sebastopol properties are on larger lots with septic systems, making ADU construction feasible but requiring careful planning for wastewater capacity.",
  },
  {
    title: "Sonoma",
    description:
      "The town of Sonoma and surrounding wine country properties require construction that blends with the area's historic and agricultural character. Guest houses, wine caves, outdoor entertaining spaces, and pool houses are popular. Sonoma's Design Review process focuses on maintaining the town's historic character, particularly near the Plaza.",
  },
];

const processSteps = [
  {
    step: "Consultation",
    detail:
      "We visit your Sonoma County property to assess site conditions, discuss your goals, and evaluate any rural considerations like septic, well water, or access. You get a clear understanding of scope, cost, and timeline.",
  },
  {
    step: "Design & Permits with PlanPass.ai",
    detail:
      "Architectural design tailored to your property and goals. Our PlanPass.ai system pre-analyzes plans for Sonoma County code requirements, including fire codes for WUI zones, septic setbacks, and energy compliance.",
  },
  {
    step: "Construction",
    detail:
      "Licensed construction with a dedicated project manager. We coordinate all trades, manage the schedule, and handle inspections. Regular progress updates keep you informed throughout the build.",
  },
  {
    step: "Completion",
    detail:
      "Final inspections, Certificate of Occupancy, and project closeout. We ensure every detail meets our quality standards and your expectations before the final walkthrough.",
  },
];

export default function GeneralContractorSonomaCountyPage() {
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
            Licensed General Contractor in Sonoma County, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Serving Petaluma, Santa Rosa, Sebastopol, and Sonoma. Remodels,
            ADUs, pools, fire rebuilds, and outdoor living. AI-powered permit
            planning via PlanPass.ai.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* Sonoma County Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Construction in Sonoma County
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Sonoma County is different from Marin County &mdash; larger lots,
            more rural properties, wine country lifestyle, and a construction
            landscape shaped by both opportunity and wildfire recovery. From
            historic homes in downtown Petaluma to vineyard estates in the
            Sonoma Valley, the building requirements and homeowner priorities
            here are distinct.
          </p>
          <p>
            Many Sonoma County properties are on acreage with septic systems,
            well water, and propane. These rural considerations significantly
            affect project planning, particularly for ADUs, home additions,
            and pool construction. Septic capacity must be evaluated before
            adding square footage, well water flow rates must support
            additional fixtures, and utility runs are often longer and more
            expensive than in urban settings.
          </p>
          <p>
            The Sonoma County permit process is generally more streamlined than
            Marin County&apos;s, with lower fees and fewer Design Review
            requirements in most jurisdictions. However, properties in
            Wildland-Urban Interface (WUI) zones face strict fire-resistant
            building requirements that add cost and complexity.
          </p>
          <p>
            ConstruBay (CSLB #1106798) brings the same quality, transparency,
            and PlanPass.ai technology advantage to Sonoma County that we
            deliver in Marin. Our team has extensive experience with rural
            properties, fire rebuilds, and the unique lifestyle construction
            that Sonoma County homeowners demand.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Communities We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceAreas.map((area) => (
              <div
                key={area.title}
                className="border border-white/20 p-6"
              >
                <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                  {area.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            {sonomaCities.map((city) => (
              <span
                key={city}
                className="border border-white/20 px-4 py-2 text-sm text-white/60"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor Living & Pools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Outdoor Living &amp; Wine Country Lifestyle
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Sonoma County&apos;s warm climate and expansive lots make outdoor
            living a central part of the lifestyle. Pools, pool houses,
            outdoor kitchens, fire pits, covered patios, and landscaped
            entertaining areas are among the most popular projects we build
            in the region.
          </p>
          <p>
            Custom pools in Sonoma County range from classic gunite
            installations to modern vanishing-edge designs that take advantage
            of vineyard and hillside views. Pool houses serve as guest
            quarters, changing rooms, and entertainment hubs. Outdoor kitchens
            with built-in grills, pizza ovens, refrigeration, and bar seating
            extend the living space year-round.
          </p>
          <p>
            The cost of construction in Sonoma County is generally 10% to 20%
            lower than Marin County for comparable projects. Lower permit fees,
            fewer design review requirements, and slightly lower labor rates
            contribute to this difference. However, rural site preparation
            &mdash; septic upgrades, well evaluation, long utility runs, and
            fire-resistant construction in WUI zones &mdash; can offset these
            savings on some properties.
          </p>
        </div>
      </section>

      {/* Fire Rebuilding */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-y border-brand-tan/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
            Fire Rebuild Experience
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Sonoma County has been impacted by several devastating wildfires
              including the 2017 Tubbs Fire, 2019 Kincade Fire, and 2020 Glass
              Fire. Thousands of homes were destroyed, and many homeowners are
              still in the process of rebuilding.
            </p>
            <p>
              Fire rebuilds involve unique challenges that go beyond standard
              new construction: site clearing and soil testing for
              contamination, updated fire codes that are significantly stricter
              than original construction, Chapter 7A requirements for
              fire-resistant exterior assemblies, defensible space landscaping,
              and coordination with insurance companies on coverage and
              disbursement schedules.
            </p>
            <p>
              ConstruBay has helped Sonoma County homeowners navigate the
              rebuild process from insurance negotiation support through design,
              permitting, and construction. Our PlanPass.ai technology is
              particularly valuable for fire rebuilds, where updated codes
              create compliance challenges that can delay permits if not
              addressed proactively.
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
            PlanPass.ai pre-analyzes your plans for Sonoma County code
            compliance &mdash; catching issues before permit submission.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            General Contractor FAQs &mdash; Sonoma County
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
            Start Your Sonoma County Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            ConstruBay brings Marin County quality to Sonoma County projects.
            Licensed, bonded, insured, and powered by PlanPass.ai. CSLB
            #1106798.
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
            <Link href="/services/general-contractor-marin-county" className="hover:text-brand-tan transition-colors">
              Marin County
            </Link>
            <Link href="/services/adu-builder-sonoma-county" className="hover:text-brand-tan transition-colors">
              ADU Builder Sonoma
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
