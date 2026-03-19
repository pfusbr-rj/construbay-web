"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does an ADU cost in Sonoma County?",
    answer:
      "ADU construction in Sonoma County typically ranges from $165,000 to $400,000 or more. Garage conversions start around $165,000, while detached new construction ADUs range from $250,000 to $400,000+ depending on size, finish level, and site conditions. Rural properties with septic requirements may have additional costs for wastewater evaluation and system upgrades.",
  },
  {
    question: "What are the septic requirements for an ADU in Sonoma County?",
    answer:
      "If your property is on septic, Sonoma County requires a septic evaluation to confirm the existing system can handle the additional wastewater load from an ADU. If the system is undersized or failing, it must be upgraded or replaced before the ADU can be built. This can add $15,000 to $40,000 to the project cost. Properties on municipal sewer do not have this requirement.",
  },
  {
    question: "Can I rent out my ADU in Sonoma County?",
    answer:
      "Yes, ADUs in Sonoma County can be rented as long-term rentals (30+ day leases). Short-term vacation rentals (under 30 days) are subject to Sonoma County's vacation rental ordinance, which varies by jurisdiction and may require a permit or be restricted in certain areas. JADUs cannot be used as short-term rentals. Check your specific city or county regulations for current rules.",
  },
  {
    question: "How do Sonoma County ADU rules differ from Marin County?",
    answer:
      "Both counties follow California's statewide ADU legislation (AB 2221, SB 897), but local implementation differs. Sonoma County generally has lower permit fees, faster processing times, and fewer Design Review requirements than Marin County. However, Sonoma County has more properties on septic and well water, which adds complexity. Fire-resistant construction requirements in WUI zones are significant in both counties.",
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
      "Standalone structures up to 1,200 square feet, built separately from the primary home. In Sonoma County, detached ADUs are popular for rental income, wine country guest houses, and multigenerational living. Larger lots in Petaluma, Sebastopol, and rural areas provide ample space for detached units with private entrances and outdoor areas.",
  },
  {
    title: "Attached ADUs",
    description:
      "Built as an extension of the existing home, sharing at least one wall with the primary residence. Attached ADUs can be up to 50% of the primary dwelling's floor area. They are often more cost-effective because they share structural elements and utility connections with the main house.",
  },
  {
    title: "Garage Conversions",
    description:
      "Converting an existing garage into a living space is the most affordable ADU option, typically starting at $165,000 in Sonoma County. The existing structure provides the shell, reducing framing and roofing costs. Replacement parking is generally not required under current state law.",
  },
  {
    title: "Junior ADUs (JADUs)",
    description:
      "Created within the existing footprint of your primary home, limited to 500 square feet. JADUs require a cooking facility and separate entrance but do not need separate utility connections. They are the most affordable option and ideal for family members or supplemental income.",
  },
];

const cityHighlights = [
  {
    title: "Petaluma ADUs",
    description:
      "Petaluma is one of the most affordable cities in the North Bay for ADU construction, with lower permit fees and a streamlined approval process. The city's strong rental market makes ADUs an excellent investment. Petaluma properties tend to have good-sized lots and municipal sewer, avoiding the septic complications common in rural Sonoma County.",
  },
  {
    title: "Santa Rosa ADUs",
    description:
      "Santa Rosa has seen a surge in ADU construction following the devastating wildfires. The city actively encourages ADU development as part of its housing recovery strategy. Santa Rosa offers expedited ADU permits and reduced fees for properties in fire-impacted areas. Many homeowners are building ADUs alongside fire rebuilds to maximize their property's potential.",
  },
  {
    title: "Sebastopol ADUs",
    description:
      "Sebastopol homeowners lean toward eco-friendly ADU designs with solar panels, energy-efficient systems, and sustainable materials. Many Sebastopol properties are on larger lots with septic systems, requiring careful planning for wastewater capacity. The town's progressive character makes it receptive to innovative ADU designs including prefab and modular approaches.",
  },
];

const processSteps = [
  {
    step: "Site Assessment",
    detail:
      "We evaluate your Sonoma County property for ADU feasibility, including lot size, setbacks, utility connections, septic capacity (if applicable), and access. You receive a clear assessment of what can be built and what it will cost.",
  },
  {
    step: "Design & Permits with PlanPass.ai",
    detail:
      "Architectural design tailored to your lot and goals. Our PlanPass.ai system pre-analyzes plans for Sonoma County zoning, fire codes, septic setbacks, and Title 24 energy compliance before submission — reducing permit delays.",
  },
  {
    step: "Construction",
    detail:
      "Licensed construction with a dedicated project manager. Foundation, framing, mechanical, finishes, and utility connections are all managed under one contract with regular progress updates.",
  },
  {
    step: "Final Inspection & Occupancy",
    detail:
      "We coordinate all final inspections, obtain Certificate of Occupancy, and ensure your ADU is fully permitted and ready for use — whether as a rental, guest house, or family living space.",
  },
];

export default function AduSonomaCountyPage() {
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
            ADU Builder in Sonoma County, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Design, permits, and construction for ADUs in Petaluma, Santa Rosa,
            Sebastopol, and Sonoma. Garage conversions, detached units, and
            guest houses. AI-powered permit planning via PlanPass.ai.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Why ADUs in Sonoma */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          The ADU Opportunity in Sonoma County
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Sonoma County offers one of the best environments for ADU
            construction in the North Bay. Larger lots, lower permit fees, and
            a strong rental market make ADUs both feasible and financially
            rewarding. Whether you are building a rental unit for income, a
            wine country guest house, or a multigenerational living space,
            Sonoma County&apos;s regulations and lot sizes work in your favor.
          </p>
          <p>
            The rental market in Sonoma County remains strong, with ADUs
            commanding $1,800 to $3,500 per month depending on location, size,
            and finish level. In tourist-heavy areas like Sonoma, Healdsburg,
            and the Russian River corridor, short-term rental potential adds
            another income dimension &mdash; though local regulations on
            vacation rentals vary by jurisdiction and must be carefully
            evaluated.
          </p>
          <p>
            Multigenerational living is particularly popular in Sonoma County,
            where families want to keep aging parents nearby on the same
            property or provide independent living spaces for adult children.
            ADUs provide privacy and independence while maintaining proximity
            and shared outdoor spaces.
          </p>
          <p>
            ConstruBay (CSLB #1106798) builds ADUs throughout Sonoma County,
            from urban lots in Petaluma and Santa Rosa to rural vineyard
            properties. We handle every phase from site assessment through
            Certificate of Occupancy, including the septic and utility
            considerations that are unique to Sonoma County properties.
          </p>
        </div>
      </section>

      {/* ADU Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            ADU Types We Build in Sonoma County
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

      {/* City Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          ADU Construction by City
        </h2>
        <div className="space-y-8">
          {cityHighlights.map((city) => (
            <div key={city.title}>
              <h3 className="text-xl text-white font-semibold mb-3">
                {city.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {city.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Septic & Rural Considerations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-y border-brand-tan/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
            Septic &amp; Rural Property Considerations
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Many Sonoma County properties rely on septic systems rather than
              municipal sewer. Building an ADU on a septic property requires a
              septic evaluation by a licensed professional to determine whether
              the existing system can accommodate the additional wastewater
              load. If the system is undersized, aging, or failing, it must be
              upgraded or replaced &mdash; adding $15,000 to $40,000 to the
              project budget.
            </p>
            <p>
              Well water properties face a similar evaluation: the well must
              produce sufficient flow rate (typically 2+ gallons per minute) to
              serve both the primary home and the ADU. Water quality testing
              may also be required. Properties on municipal water and sewer
              avoid these requirements but pay connection fees.
            </p>
            <p>
              Setback requirements from septic systems, wells, and property
              lines affect where an ADU can be placed on the lot. Our
              PlanPass.ai system maps these constraints during the design phase
              to identify the optimal ADU location before plans are finalized.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Range */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          ADU Cost Ranges in Sonoma County
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            ADU costs in Sonoma County are generally 10% to 15% lower than
            Marin County for comparable projects, though rural site conditions
            can narrow that gap.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <div className="border border-brand-tan/30 p-5">
              <h3 className="text-[#C9A84C] font-semibold mb-1">
                Garage Conversion
              </h3>
              <p className="text-2xl text-white font-bold">$165K &ndash; $250K</p>
              <p className="text-white/60 text-sm mt-1">
                Existing structure, 400&ndash;600 sq ft typical
              </p>
            </div>
            <div className="border border-brand-tan/30 p-5">
              <h3 className="text-[#C9A84C] font-semibold mb-1">JADU</h3>
              <p className="text-2xl text-white font-bold">$100K &ndash; $180K</p>
              <p className="text-white/60 text-sm mt-1">
                Within existing home, up to 500 sq ft
              </p>
            </div>
            <div className="border border-brand-tan/30 p-5">
              <h3 className="text-[#C9A84C] font-semibold mb-1">
                Detached ADU (Municipal Sewer)
              </h3>
              <p className="text-2xl text-white font-bold">$250K &ndash; $375K</p>
              <p className="text-white/60 text-sm mt-1">
                New construction, 600&ndash;1,200 sq ft
              </p>
            </div>
            <div className="border border-brand-tan/30 p-5">
              <h3 className="text-[#C9A84C] font-semibold mb-1">
                Detached ADU (Septic Property)
              </h3>
              <p className="text-2xl text-white font-bold">$280K &ndash; $400K+</p>
              <p className="text-white/60 text-sm mt-1">
                Includes septic evaluation and potential upgrade
              </p>
            </div>
          </div>
          <p>
            These ranges include design, permitting, construction, and utility
            connections. ConstruBay (CSLB #1106798) provides detailed estimates
            after an initial site assessment.
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
            PlanPass.ai pre-analyzes your plans for Sonoma County code
            compliance &mdash; saving weeks of permit delays.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            ADU FAQs &mdash; Sonoma County
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
            Start Your Sonoma County ADU Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From site assessment to Certificate of Occupancy, ConstruBay
            manages every detail. Licensed general contractor CSLB #1106798,
            serving all of Marin and Sonoma Counties.
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
            <Link href="/services/general-contractor-sonoma-county" className="hover:text-brand-tan transition-colors">
              General Contractor Sonoma
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
