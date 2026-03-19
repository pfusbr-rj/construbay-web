"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does an ADU cost in Petaluma?",
    answer:
      "Petaluma ADU construction ranges from $150,000 to $400,000 depending on size, site conditions, and finishes. Properties on septic systems may require additional engineering. ConstruBay (CSLB #1106798) provides detailed estimates after a free on-site assessment.",
  },
  {
    question: "Can I build an ADU on a property with a septic system?",
    answer:
      "Yes. Many Petaluma properties outside city sewer service areas use septic systems. Your existing system may need to be upgraded or a new system designed to handle the additional capacity. We coordinate all septic engineering and Sonoma County permits.",
  },
  {
    question: "What rental income can I expect from a Petaluma ADU?",
    answer:
      "A well-finished ADU in Petaluma generates $1,800 to $3,200 per month depending on size and location. With Petaluma's growing rental market and proximity to both Marin and Santa Rosa employment centers, demand is consistently strong.",
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

export default function AduBuilderPetalumaPage() {
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
            ADU Builder in Petaluma, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Affordable ADU construction with farmhouse character. Septic-ready
            designs, rental income focus, and full permitting through
            PlanPass.ai technology.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get Your Free ADU Assessment
          </Link>
        </div>
      </section>

      {/* Petaluma ADU Market */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          The Petaluma ADU Opportunity
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Petaluma offers one of the most attractive ADU markets in the North
            Bay. Larger lot sizes, lower land costs compared to Marin County,
            and a growing rental market create ideal conditions for homeowners
            looking to generate passive income or house family members. The
            city&apos;s position along the Highway 101 corridor provides easy
            commuter access to both San Francisco and Santa Rosa, making ADU
            rentals highly sought after.
          </p>
          <p>
            Petaluma&apos;s architectural character leans toward farmhouse and
            agrarian aesthetics that blend beautifully with the surrounding
            Sonoma County landscape. ConstruBay (CSLB #1106798) designs ADUs
            that honor this character while maximizing livable space and modern
            amenities. Board-and-batten siding, standing-seam metal roofing, and
            covered porches create units that feel like natural extensions of
            Petaluma&apos;s built environment.
          </p>
        </div>
      </section>

      {/* Septic & Site Considerations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Septic Systems &amp; Site Planning
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Many Petaluma properties, particularly those on the east side and
              in unincorporated areas, rely on septic systems rather than
              municipal sewer. Adding an ADU to a septic property requires
              careful capacity analysis. ConstruBay coordinates with licensed
              septic engineers to evaluate your existing system, determine
              whether an upgrade or replacement is needed, and design the ADU
              footprint to maintain required leach field setbacks.
            </p>
            <p>
              For properties connected to city sewer, the process is more
              straightforward but still requires connection fees and capacity
              verification. Either way, our team manages the entire utility
              coordination process so you have a single point of contact from
              design through final inspection. Petaluma&apos;s Community
              Development Department has been proactive about ADU approvals
              under state law, making the permit timeline more predictable than
              many neighboring jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* Rental Income Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Rental Income &amp; Investment Returns
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Petaluma&apos;s rental market has tightened considerably as housing
            production lags behind demand. A one-bedroom ADU rents for $1,800 to
            $2,400 per month, while a two-bedroom unit commands $2,500 to $3,200.
            At these rates, a $250,000 ADU investment can achieve positive cash
            flow within five to seven years while adding an estimated $100,000 to
            $200,000 in property value upon completion.
          </p>
          <p>
            ConstruBay designs every Petaluma ADU with rental viability in mind.
            We optimize layouts for livability, specify durable finishes that
            withstand tenant turnover, and ensure each unit meets accessibility
            standards that expand your potential renter pool. Our PlanPass.ai
            permit analysis catches every code issue before submission,
            compressing the timeline from design to occupancy.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Petaluma ADU FAQs
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
            Build Your Petaluma ADU with ConstruBay
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From farmhouse-style design to septic coordination to final
            inspection, ConstruBay handles every aspect of your Petaluma ADU.
            Licensed general contractor CSLB #1106798.
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
            <Link href="/services/adu-builder-sonoma-county" className="hover:text-brand-tan transition-colors">
              ADU Builder Sonoma County
            </Link>
            <Link href="/petaluma" className="hover:text-brand-tan transition-colors">
              Petaluma
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
