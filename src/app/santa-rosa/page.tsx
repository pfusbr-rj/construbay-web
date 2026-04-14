"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "Does ConstruBay have experience with post-fire rebuilding?",
    answer:
      "Yes. Santa Rosa experienced devastating losses in the Tubbs Fire (2017) and Glass Fire (2020), particularly in Coffey Park and Fountaingrove. We have direct experience with fire-rebuild projects including navigating the streamlined permit process for fire-loss properties, insurance coordination, and building to current fire-resistant codes.",
  },
  {
    question: "What fire-resistant construction methods does ConstruBay use?",
    answer:
      "We build with Class A fire-rated roofing, fire-resistant siding (fiber cement, stucco), tempered dual-pane windows, enclosed eaves and soffits, ember-resistant vents, and non-combustible decking materials. All projects in WUI zones comply with Chapter 7A of the California Building Code.",
  },
  {
    question: "How does the Santa Rosa permit process work?",
    answer:
      "Building permits are processed through the Santa Rosa Planning and Economic Development Department at 100 Santa Rosa Avenue. The city has maintained streamlined processes developed during post-fire rebuilding. We use PlanPass.ai to pre-screen plans and manage the entire permit lifecycle.",
  },
  {
    question: "What neighborhoods does ConstruBay serve in Santa Rosa?",
    answer:
      "We serve all Santa Rosa neighborhoods including Coffey Park, Fountaingrove, Rincon Valley, Bennett Valley, and the Railroad Square area. Each neighborhood has distinct characteristics and construction considerations that we navigate as part of our full-service approach.",
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
  description: "Licensed General Contractor in Santa Rosa, CA",
  url: "https://www.construbay.com/santa-rosa",
  telephone: "(415) 968-9494",
  areaServed: {
    "@type": "City",
    name: "Santa Rosa",
    addressRegion: "CA",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santa Rosa",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function SantaRosaPage() {
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
            Licensed General Contractor in Santa Rosa, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Post-fire rebuilding, fire-resistant construction, whole house
            remodels, and ADUs in Sonoma County&apos;s largest city. Experienced
            with Coffey Park and Fountaingrove rebuilds.
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
          Santa Rosa: Resilient Construction for Sonoma&apos;s Largest City
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Santa Rosa is the largest city in Sonoma County and the economic hub
            of the North Bay. With a population exceeding 180,000, Santa Rosa
            offers the most diverse housing stock in the region &mdash; from the
            rebuilt neighborhoods of Coffey Park and Fountaingrove to the
            established communities of Rincon Valley and Bennett Valley, and the
            historic charm of Railroad Square. The city&apos;s construction
            landscape has been fundamentally shaped by wildfire: the Tubbs Fire
            of October 2017 destroyed over 3,000 homes, and the Glass Fire of
            September 2020 devastated Fountaingrove again. These events have
            made fire-resistant construction not just a code requirement in Santa
            Rosa, but a community imperative.
          </p>
          <p>
            ConstruBay (CSLB #1106798) brings direct experience with Santa
            Rosa&apos;s post-fire rebuilding environment. We understand the
            streamlined permit processes the city developed for fire-loss
            properties, the insurance coordination required for rebuild
            projects, and most importantly, the fire-resistant construction
            techniques that are now standard for all new builds in fire-prone
            areas. Class A fire-rated roofing, fiber cement or stucco siding,
            tempered dual-pane windows, enclosed eaves, ember-resistant vents,
            and non-combustible deck materials are all part of our standard
            specifications for Santa Rosa projects.
          </p>
          <p>
            Beyond fire rebuilding, Santa Rosa&apos;s diverse neighborhoods
            support every type of residential construction. Rincon Valley offers
            family homes on generous lots ideal for ADU construction. Bennett
            Valley provides a semi-rural setting with larger parcels. Coffey
            Park has been substantially rebuilt with modern, code-compliant
            homes, and many homeowners are now adding ADUs and outdoor living
            spaces. The Railroad Square area features historic homes and mixed
            commercial-residential properties with renovation opportunities.
          </p>
          <p>
            Building permits for Santa Rosa projects are processed through the
            Santa Rosa Planning and Economic Development Department at 100 Santa
            Rosa Avenue. The city maintains the efficient review processes it
            developed during the post-fire rebuild period. Our PlanPass.ai
            technology pre-screens all plans against current codes &mdash;
            including updated fire-resistant construction requirements &mdash;
            before submission, ensuring smooth and predictable permit timelines.
          </p>
          <p>
            Whether you are rebuilding a fire-loss home in Fountaingrove,
            adding an ADU to a Rincon Valley property, or remodeling a Bennett
            Valley ranch home, ConstruBay delivers the fire-conscious
            construction expertise and project management that Santa Rosa
            demands. Licensed general contractor CSLB #1106798, building
            resilient homes throughout Sonoma County and <Link href="/services/general-contractor-marin-county" className="text-brand-tan hover:underline">Marin County</Link>.
          </p>
        </div>
      </section>

      {/* Services Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Our Santa Rosa Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/whole-house-remodel-marin-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                Whole House Remodel
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Complete renovations and rebuilds with fire-resistant
                construction methods for Santa Rosa homes.
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
                Full-service general contracting for Santa Rosa&apos;s diverse
                residential construction needs.
              </p>
            </Link>
            <Link
              href="/services/adu-builder-sonoma-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                ADU Construction
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Fire-code-compliant ADUs for Santa Rosa&apos;s growing housing
                needs across all neighborhoods.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Santa Rosa Construction FAQs
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
            Start Your Santa Rosa Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From fire-resilient rebuilds to ADUs and remodels, ConstruBay
            delivers expert construction management across all Santa Rosa
            neighborhoods. Licensed general contractor CSLB #1106798.
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
