"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "What types of projects does ConstruBay build in Sonoma?",
    answer:
      "We specialize in wine country construction: custom pools, outdoor kitchens, pool houses, ADUs and guest houses for visitors, kitchen remodels, and whole property renovations. Sonoma's entertaining lifestyle drives demand for indoor-outdoor living spaces and high-end finishes.",
  },
  {
    question: "Can ConstruBay build on vineyard properties in Sonoma?",
    answer:
      "Yes. Vineyard properties have unique zoning considerations including agricultural preserve restrictions, setbacks from planted areas, and access requirements. We work with Sonoma County PRMD to navigate agricultural zoning while building residential structures that complement vineyard settings.",
  },
  {
    question: "How does the Sonoma permit process work?",
    answer:
      "Properties within the City of Sonoma are permitted through the Sonoma Planning Department at No. 1 The Plaza. Unincorporated areas including Glen Ellen, Boyes Hot Springs, and Kenwood go through Sonoma County PRMD. We manage both systems and use PlanPass.ai to pre-analyze plans.",
  },
  {
    question: "Does ConstruBay build guest houses and ADUs for wine country visitors?",
    answer:
      "Absolutely. Many Sonoma property owners build ADUs or guest houses specifically for visiting family and friends who come for wine country experiences. These units can also serve as rental income properties. We design and build units that match the main residence aesthetic and meet all code requirements.",
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
  description: "Licensed General Contractor in Sonoma, CA",
  url: "https://www.construbay.com/sonoma",
  telephone: "(415) 968-9494",
  areaServed: {
    "@type": "City",
    name: "Sonoma",
    addressRegion: "CA",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sonoma",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function SonomaPage() {
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
            Licensed General Contractor in Sonoma, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Wine country homes, custom pools, outdoor kitchens, guest houses,
            and ADUs in the heart of Sonoma Valley. Building spaces designed
            for entertaining and the good life.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Wine Country Construction in Sonoma Valley
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Sonoma is the jewel of California wine country &mdash; a community
            where the good life is not just a marketing phrase but a daily
            reality. From the historic charm of Sonoma Plaza to the vineyard
            estates of Glen Ellen, from the hot springs retreats of Boyes Hot
            Springs to the mountain vineyards of Kenwood, this valley attracts
            homeowners who value outdoor entertaining, premium finishes, and
            properties that make the most of Sonoma&apos;s extraordinary
            climate and landscape. The construction projects here reflect that
            lifestyle: custom pools, outdoor kitchens, pool houses, guest
            cottages, and homes designed for hosting.
          </p>
          <p>
            ConstruBay (CSLB #1106798) provides full-service general
            contracting throughout Sonoma Valley. Our work here is defined by
            the wine country lifestyle &mdash; creating indoor-outdoor living
            spaces that flow seamlessly from kitchen to patio, building pool
            and spa complexes that serve as the centerpiece of entertaining,
            and constructing guest houses and ADUs that welcome the stream of
            visitors drawn to this world-class wine region. Many Sonoma
            homeowners maintain second homes here, and they need a contractor
            who can manage projects remotely with complete reliability.
          </p>
          <p>
            Sonoma Valley properties range from compact lots near the Plaza to
            expansive vineyard estates of ten acres or more. Vineyard properties
            present unique construction considerations including agricultural
            preserve zoning, setbacks from planted areas, well water and septic
            system requirements, and access road standards. Our team has
            experience building on vineyard properties and understands how to
            navigate Sonoma County&apos;s agricultural zoning while delivering
            the residential construction our clients envision.
          </p>
          <p>
            Building permits in the Sonoma area are handled by two jurisdictions.
            Properties within the City of Sonoma go through the Sonoma Planning
            Department at No. 1 The Plaza. Unincorporated areas &mdash;
            including Glen Ellen, Boyes Hot Springs, and Kenwood &mdash; fall
            under the Sonoma County Permit and Resource Management Department
            (PRMD). We navigate both systems as a matter of course, using
            PlanPass.ai to pre-analyze plans against the applicable codes and
            zoning requirements for each jurisdiction.
          </p>
          <p>
            Whether you are building a custom pool overlooking your Glen Ellen
            vineyard, adding a guest house to a Sonoma Plaza property, or
            renovating the kitchen of your Kenwood retreat to create the
            ultimate wine country entertaining space, ConstruBay delivers the
            craftsmanship, project management, and permit expertise that Sonoma
            Valley demands. Licensed general contractor CSLB #1106798, building
            the wine country lifestyle throughout Sonoma and Marin Counties.
          </p>
        </div>
      </section>

      {/* Services Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Our Sonoma Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/custom-pool-builder-marin-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                Custom Pool
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Custom pools, spas, and outdoor living complexes designed for
                Sonoma&apos;s wine country entertaining lifestyle.
              </p>
            </Link>
            <Link
              href="/services/adu-builder-sonoma-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                ADU &amp; Guest House
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Guest houses and ADUs for wine country visitors, built to match
                your main residence and maximize property value.
              </p>
            </Link>
            <Link
              href="/services/kitchen-remodel-marin-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                Kitchen Remodel
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Chef-caliber kitchens designed for wine country entertaining
                with premium appliances and custom finishes.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Sonoma Construction FAQs
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
            Start Your Sonoma Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From custom pools to guest houses and kitchen remodels, ConstruBay
            builds the wine country lifestyle. Licensed general contractor CSLB
            #1106798, serving all of Sonoma Valley.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Book a Consultation
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
