"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "What makes Petaluma a good market for ADU construction?",
    answer:
      "Petaluma offers more affordable home prices than Marin County with strong rental demand driven by the growing food and wine scene. Larger lots in East Petaluma and the Helen Putnam area easily accommodate detached ADUs. The city has streamlined its ADU permitting process to meet state housing goals.",
  },
  {
    question: "Does ConstruBay handle septic system considerations?",
    answer:
      "Yes. Many rural Petaluma properties rely on septic systems rather than municipal sewer. Adding an ADU or expanding a home on a septic system requires percolation testing, system capacity evaluation, and potentially a new or expanded leach field. We coordinate all septic engineering as part of our scope.",
  },
  {
    question: "How does the Petaluma permit process work?",
    answer:
      "Building permits are processed through the Petaluma Community Development Department at 11 English Street. The city has been proactive about ADU approvals and maintains reasonable plan check timelines. We use PlanPass.ai to pre-screen plans before submission, reducing review cycles.",
  },
  {
    question: "What style of construction is popular in Petaluma?",
    answer:
      "Petaluma has embraced a farmhouse modern aesthetic that reflects the city's agricultural heritage while incorporating contemporary design elements. Board-and-batten siding, metal roofs, open floor plans, and indoor-outdoor living spaces are all popular here.",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ConstruBay",
  description: "Licensed General Contractor in Petaluma, CA",
  url: "https://www.construbay.com/petaluma",
  telephone: "(415) 968-9494",
  areaServed: {
    "@type": "City",
    name: "Petaluma",
    addressRegion: "CA",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Petaluma",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function PetalumaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/50 via-brand-dark to-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
            Licensed General Contractor &middot; CSLB #1106798
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Licensed General Contractor in Petaluma, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Farmhouse modern builds, ADUs with excellent rental potential,
            custom pools, and full-service construction in Sonoma County&apos;s
            most charming river city.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Building in Petaluma: Where Farmhouse Meets Modern
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Petaluma sits at the southern edge of Sonoma County, a river city
            with deep agricultural roots that has evolved into one of the Bay
            Area&apos;s most desirable communities. Historic Downtown Petaluma
            offers turn-of-the-century iron-front buildings and Victorian homes,
            while the Westside features established neighborhoods with mature
            landscaping, East Petaluma provides newer developments with larger
            lots, and the Helen Putnam area and Casa Grande neighborhoods offer
            rural properties with vineyard and pasture views. Petaluma is more
            affordable than Marin County while offering a quality of life that
            attracts families, remote workers, and retirees from San Francisco
            and the greater Bay Area.
          </p>
          <p>
            ConstruBay (CSLB #1106798) brings full-service general contracting
            to Petaluma and the surrounding area. The construction market here
            is defined by the farmhouse modern aesthetic that has become
            Petaluma&apos;s signature style &mdash; board-and-batten siding,
            standing-seam metal roofs, open floor plans, and seamless
            indoor-outdoor living spaces that connect to the surrounding
            landscape. Whether building new or renovating existing homes, we
            design and construct spaces that honor Petaluma&apos;s agricultural
            character while delivering contemporary comfort and efficiency.
          </p>
          <p>
            ADU construction in Petaluma offers excellent investment potential.
            The city&apos;s growing food and wine scene, proximity to both Marin
            and Sonoma wine country, and relative affordability create strong
            rental demand. Larger lots in East Petaluma and the Helen Putnam
            area easily accommodate detached ADUs of 800 to 1,200 square feet.
            Rural properties outside city limits require attention to septic
            system capacity and well water supply &mdash; considerations our
            team manages as standard practice for Petaluma-area builds.
          </p>
          <p>
            Building permits for Petaluma projects within city limits are
            processed through the Petaluma Community Development Department at
            11 English Street. For properties in unincorporated Sonoma County
            near Petaluma, permits go through the Sonoma County Permit and
            Resource Management Department (PRMD). We navigate both systems
            routinely and use our PlanPass.ai technology to pre-analyze plans
            against applicable codes before submission, whether city or county.
          </p>
          <p>
            From a custom pool overlooking Petaluma&apos;s rolling hills, to an
            ADU designed as a farmhouse cottage on an East Petaluma property, to
            a full remodel of a Downtown Victorian, ConstruBay delivers the
            craftsmanship and project management that Petaluma homeowners
            expect. Licensed general contractor CSLB #1106798, serving Petaluma
            and all of Sonoma County.
          </p>
        </div>
      </section>

      {/* Services Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Our Petaluma Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/adu-builder-sonoma-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                ADU Construction
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Farmhouse-style ADUs and detached units designed for Petaluma&apos;s
                larger lots and strong rental market.
              </p>
            </Link>
            <Link
              href="/services/custom-pool-builder-marin-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                Custom Pool
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Custom pools and outdoor living spaces that complement
                Petaluma&apos;s warm-season climate and rural views.
              </p>
            </Link>
            <Link
              href="/services/general-contractor-sonoma-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                General Contractor
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Full-service general contracting for Petaluma&apos;s residential
                construction and renovation projects.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Petaluma Construction FAQs
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
            Start Your Petaluma Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From farmhouse ADUs to custom pools, ConstruBay brings expert
            construction management to Petaluma. Licensed general contractor
            CSLB #1106798.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Estimate
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
        </div>
      </section>
    </>
  );
}
