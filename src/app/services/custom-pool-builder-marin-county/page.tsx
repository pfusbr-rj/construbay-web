"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does a pool cost in Marin County?",
    answer:
      "Custom pool construction in Marin County typically ranges from $120,000 to $300,000 or more depending on pool type, size, site conditions, and finish selections. Plunge pools and spas start around $80,000 to $120,000. Infinity edge pools, hillside pools, and projects requiring extensive site work fall toward the higher end.",
  },
  {
    question: "How long does it take to build a pool?",
    answer:
      "Pool construction in Marin County typically takes 3 to 6 months from groundbreaking to completion. The full timeline including design, engineering, and permitting is usually 6 to 10 months. Hillside pools and projects requiring extensive grading or retaining walls take longer. Permitting alone can take 6 to 12 weeks depending on the jurisdiction.",
  },
  {
    question: "Do I need a permit for a pool in Marin County?",
    answer:
      "Yes, all swimming pools in Marin County require a building permit. The permit application includes engineering plans, a site plan showing setbacks and fencing, electrical plans for pumps and heaters, and drainage plans. Pool fencing with self-closing, self-latching gates is required by California Building Code. ConstruBay handles all permit applications through our design-build service.",
  },
  {
    question: "Can you build a pool on a hillside?",
    answer:
      "Yes, ConstruBay specializes in hillside pool construction throughout Marin County. Hillside pools require geotechnical investigation, engineered retaining walls, proper drainage systems, and often grading permits. The engineering adds cost but enables stunning vanishing edge and infinity pool designs that take advantage of Marin's hillside views.",
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

const poolTypes = [
  {
    title: "Infinity / Vanishing Edge",
    description:
      "The signature luxury pool for Marin County hillside properties. Water flows over one or more edges into a hidden catch basin, creating a seamless visual connection with the landscape. Ideal for properties with bay views, valley overlooks, or dramatic elevation changes.",
  },
  {
    title: "Lap Pools",
    description:
      "Long, narrow pools designed for exercise and fitness swimming. Typically 40 to 75 feet in length and 8 to 10 feet wide. Popular with Marin County's health-conscious homeowners. Can be integrated into smaller lots where a full recreation pool wouldn't fit.",
  },
  {
    title: "Natural / Organic Pools",
    description:
      "Free-form designs that blend with natural landscapes using stone, boulders, and native plantings. Some incorporate biological filtration systems that reduce chemical use. Well-suited to Marin's environmentally conscious communities and properties adjacent to open space.",
  },
  {
    title: "Plunge Pools & Spas",
    description:
      "Compact pools designed for relaxation, hydrotherapy, and cooling off rather than swimming laps. Typically 10 to 15 feet in length. Perfect for smaller Marin County lots or as a complement to a larger pool. Can include heating, jets, and bench seating.",
  },
];

const processSteps = [
  {
    step: "Site Assessment & Design",
    detail:
      "Evaluate your property's topography, soil conditions, access, and views. Develop custom pool design with 3D renderings, material selections, and integration with your outdoor living vision.",
  },
  {
    step: "Engineering",
    detail:
      "Structural engineering for the pool shell, retaining walls if needed, drainage systems, and equipment specifications. Geotechnical investigation for hillside sites.",
  },
  {
    step: "Permits with PlanPass.ai",
    detail:
      "Complete permit application including building, grading (if applicable), and electrical permits. PlanPass.ai pre-analyzes plans for code compliance before submission to the county.",
  },
  {
    step: "Excavation & Structural",
    detail:
      "Site preparation, excavation, steel reinforcement, plumbing rough-in, and gunite or shotcrete shell installation. Retaining walls and drainage systems installed as needed.",
  },
  {
    step: "Finish & Equipment",
    detail:
      "Interior finish (plaster, pebble, tile), coping and decking, equipment installation (pumps, heaters, filters, automation), lighting, and landscaping integration.",
  },
  {
    step: "Final Inspection & Startup",
    detail:
      "County final inspection, pool fill, chemical balancing, equipment programming, and homeowner orientation. We ensure everything operates perfectly before handover.",
  },
];

export default function CustomPoolBuilderMarinCountyPage() {
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
            Custom Pool Builder in Marin County
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Custom pool design and construction in Marin and Sonoma County.
            Infinity edge, lap pools, hillside builds, and luxury outdoor
            living spaces. Full permits and engineering handled.
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
          Outdoor Living in Marin &amp; Sonoma County
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Marin and Sonoma County&apos;s climate makes outdoor living a
            year-round reality. A custom pool is more than a luxury &mdash;
            it&apos;s an investment in your property&apos;s value and your
            family&apos;s quality of life. With warm summers, mild winters, and
            some of the most beautiful residential landscapes in California,
            a well-designed pool becomes the centerpiece of your outdoor living
            experience.
          </p>
          <p>
            Property value data consistently shows that pools add 5% to 15%
            to home values in premium California markets. In Marin County,
            where median home prices exceed $1.5 million, that translates to
            a significant return. Beyond resale value, a custom pool creates a
            private resort experience that eliminates the need to travel for
            relaxation and entertainment.
          </p>
          <p>
            ConstruBay (CSLB #1106798) designs and builds custom pools
            throughout Marin and Sonoma Counties. We handle every aspect
            &mdash; design, engineering, permitting, construction, and finish
            &mdash; as a single integrated service. Our PlanPass.ai technology
            streamlines the permit process, getting you from concept to
            groundbreaking faster.
          </p>
        </div>
      </section>

      {/* Pool Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Pool Types We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {poolTypes.map((type) => (
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

      {/* Sonoma County Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Sonoma County: Wine Country Outdoor Living
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Sonoma County&apos;s wine country lifestyle revolves around outdoor
            entertaining, and a custom pool is the anchor of that experience.
            Properties in Sonoma, Petaluma, Santa Rosa, and Healdsburg
            increasingly feature pool houses, outdoor kitchens, fire features,
            and entertainment pavilions alongside the pool itself.
          </p>
          <p>
            Sonoma County&apos;s larger lots provide more design flexibility than
            typical Marin properties. This opens possibilities for resort-style
            pool complexes with separate spa areas, swim-up bars, water
            features, and extensive hardscape that would be constrained on
            smaller Marin lots. The wine country aesthetic &mdash; natural
            stone, Mediterranean plantings, rustic-modern architecture &mdash;
            lends itself to stunning pool environments.
          </p>
          <p>
            ConstruBay serves both Marin and Sonoma Counties, and we design
            pools that complement each property&apos;s unique character. Whether
            you&apos;re on a Marin hillside with bay views or a Sonoma County
            estate surrounded by vineyards, we create outdoor spaces that feel
            inevitable for the setting.
          </p>
        </div>
      </section>

      {/* Petaluma & Santa Rosa */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-y border-brand-tan/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
            Petaluma &amp; Santa Rosa Pool Projects
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Petaluma and Santa Rosa represent significant opportunity for
              pool construction. Both cities have active building departments
              with specific permit requirements for pools, including fencing
              standards, equipment setbacks, and drainage management. Petaluma
              in particular has been growing rapidly, with many new and
              existing homeowners investing in outdoor living improvements.
            </p>
            <p>
              Santa Rosa&apos;s rebuilding effort after the 2017 and 2019 fires
              has created a wave of new homes with generous outdoor spaces
              designed for pool integration. These newer properties often have
              pre-planned utility connections and grading that simplify pool
              construction.
            </p>
            <p>
              The larger lot sizes common in Petaluma and Santa Rosa &mdash;
              often a quarter acre or more &mdash; provide exceptional design
              flexibility. We take advantage of this space to create complete
              outdoor living environments that include the pool, spa, outdoor
              kitchen, fire features, and landscaping as a cohesive design.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Engineering: Hillside Pools &amp; Site Challenges
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Many of the most dramatic pool sites in Marin County are on
            hillsides. Building a pool on sloped terrain requires geotechnical
            investigation to assess soil conditions, bearing capacity, and
            slope stability. Engineered retaining walls, proper drainage
            systems, and sometimes caisson or pier foundations are necessary
            to create a stable, long-lasting pool structure.
          </p>
          <p>
            Hillside pools also present access challenges for excavation
            equipment and concrete delivery. Our team plans logistics
            carefully, coordinating equipment access, staging areas, and
            material delivery to minimize disruption and ensure construction
            proceeds efficiently on challenging sites.
          </p>
          <p>
            Drainage is critical for hillside pools. Improper drainage can
            lead to erosion, hydrostatic pressure on the pool shell, and
            damage to neighboring properties. ConstruBay designs comprehensive
            drainage systems that manage water around the pool, protect the
            hillside, and comply with Marin County grading and drainage
            requirements.
          </p>
        </div>
      </section>

      {/* Permits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-8">
            Pool Permits in Marin &amp; Sonoma County
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Every swimming pool in Marin and Sonoma County requires a
              building permit. The permit package includes structural
              engineering for the pool shell, a site plan showing setbacks from
              property lines and structures, electrical plans for pumps,
              heaters, and lighting, and a fencing plan that complies with
              California Building Code barrier requirements.
            </p>
            <p>
              Pool fencing must be at least 48 inches high with self-closing,
              self-latching gates. The gate latch must be at least 54 inches
              from the ground on the pool side. These safety requirements are
              strictly enforced during final inspection.
            </p>
            <p>
              Hillside pools may also require grading permits, which involve
              additional review by the county&apos;s engineering department.
              Properties in environmentally sensitive areas may need additional
              approvals for drainage and runoff management.
            </p>
            <p>
              ConstruBay handles all permit applications, plan check responses,
              and inspection scheduling. Our PlanPass.ai system pre-analyzes
              pool plans for code compliance before submission, reducing
              correction cycles and accelerating approvals.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Range */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Pool Construction Cost Ranges
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Custom pool construction in Marin and Sonoma County ranges from
            $120,000 to $300,000 or more depending on pool type, size, site
            conditions, and finish level.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <div className="border border-brand-tan/30 p-5">
              <h3 className="text-[#C9A84C] font-semibold mb-1">
                Plunge Pool / Spa
              </h3>
              <p className="text-2xl text-white font-bold">$80K &ndash; $120K</p>
              <p className="text-white/60 text-sm mt-1">
                Compact pool or spa, flat lot, standard finishes.
              </p>
            </div>
            <div className="border border-brand-tan/30 p-5">
              <h3 className="text-[#C9A84C] font-semibold mb-1">
                Standard Pool
              </h3>
              <p className="text-2xl text-white font-bold">$120K &ndash; $180K</p>
              <p className="text-white/60 text-sm mt-1">
                Recreation pool, flat to moderate grade, quality finishes.
              </p>
            </div>
            <div className="border border-brand-tan/30 p-5">
              <h3 className="text-[#C9A84C] font-semibold mb-1">
                Custom / Infinity Edge
              </h3>
              <p className="text-2xl text-white font-bold">$180K &ndash; $300K</p>
              <p className="text-white/60 text-sm mt-1">
                Vanishing edge, premium finishes, integrated spa, water features.
              </p>
            </div>
            <div className="border border-brand-tan/30 p-5">
              <h3 className="text-[#C9A84C] font-semibold mb-1">
                Hillside / Complex Site
              </h3>
              <p className="text-2xl text-white font-bold">$250K &ndash; $300K+</p>
              <p className="text-white/60 text-sm mt-1">
                Retaining walls, grading, engineering, challenging access.
              </p>
            </div>
          </div>
          <p>
            These ranges include design, engineering, permitting, construction,
            and equipment. Outdoor kitchens, pool houses, and extensive
            hardscape are additional. ConstruBay provides detailed estimates
            after a site assessment.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10 text-center">
            Our Pool Construction Process
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
            PlanPass.ai for Pool Permits
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Pool permits in Marin County involve building, electrical,
              and sometimes grading reviews &mdash; each with its own code
              requirements and potential for correction cycles. PlanPass.ai
              pre-analyzes your pool plans against all applicable codes before
              we submit to the county, catching the issues that cause delays.
            </p>
            <p>
              For pool projects, common issues include equipment setback
              violations, fencing non-compliance, electrical bonding and
              grounding details, drainage plan deficiencies, and energy code
              requirements for pool equipment. Our AI catches these before the
              county reviewer does, resulting in faster permit approvals.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10 text-center">
            Pool Construction FAQs &mdash; Marin County
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
            Start Your Custom Pool Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From concept to completion, ConstruBay designs and builds custom
            pools that transform your outdoor living experience. Licensed
            general contractor CSLB #1106798, based in Mill Valley, serving
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
            <Link href="/services/whole-house-remodel-marin-county" className="hover:text-brand-tan transition-colors">
              Whole House Remodel
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
