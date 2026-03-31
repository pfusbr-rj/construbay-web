"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "Why is Novato ideal for ADU construction?",
    answer:
      "Novato has the most affordable home prices in Marin County and the largest suburban lots, making it ideal for detached ADU construction. The city actively supports ADU development, and the larger lot sizes in Hamilton, Bel Marin Keys, and Indian Valley provide ample room for new structures without variance requirements.",
  },
  {
    question: "Does ConstruBay offer services in Portuguese?",
    answer:
      "Sim! Novato has a growing Brazilian community and our team provides full atendimento em Portugues. From initial consultation through final walkthrough, we can communicate in Portuguese to ensure nothing is lost in translation. Call us at (415) 968-9494.",
  },
  {
    question: "How are building permits processed in Novato?",
    answer:
      "Permits are processed through the Novato Community Development Department at 922 Machin Avenue. Novato's building division handles plan review and inspections for properties within city limits. We manage the entire process and use PlanPass.ai to pre-analyze plans before submission.",
  },
  {
    question: "What areas in Novato does ConstruBay serve?",
    answer:
      "We serve all Novato neighborhoods including Hamilton, Bel Marin Keys, Ignacio, Indian Valley, and Black Point. Each area has unique characteristics from the converted military housing in Hamilton to the waterfront properties in Bel Marin Keys.",
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
  description: "Licensed General Contractor in Novato, CA",
  url: "https://www.construbay.com/novato",
  telephone: "(415) 968-9494",
  areaServed: {
    "@type": "City",
    name: "Novato",
    addressRegion: "CA",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Novato",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function NovatoPage() {
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
            Licensed General Contractor in Novato, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            ADUs, home additions, and remodels in Marin&apos;s most affordable
            and family-friendly city. Suburban lots ideal for accessory
            dwelling units and home expansions.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Book a Consultation
          </Link>
          {/* Portuguese callout */}
          <div className="mt-6 inline-block border border-[#C9A84C]/40 rounded-lg px-6 py-3 bg-brand-dark/60">
            <p className="text-[#C9A84C] text-sm font-medium">
              Atendimento em Portugu&ecirc;s &mdash;{" "}
              <a href="tel:4159689494" className="underline hover:opacity-80">
                (415) 968-9494
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Novato: Marin&apos;s Best Value for New Construction
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Novato is Marin County&apos;s most affordable city and its most
            family-friendly community. Located at the northern gateway to Marin,
            Novato offers what much of the county cannot: spacious suburban lots,
            relatively accessible home prices, and a welcoming atmosphere that
            has attracted a diverse population including a growing Brazilian
            community. For homeowners looking to build ADUs, add square footage,
            or renovate, Novato provides the best combination of lot size,
            affordability, and permitting predictability in all of Marin County.
          </p>
          <p>
            ConstruBay (CSLB #1106798) serves all Novato neighborhoods &mdash;
            from the converted military housing and newer developments in
            Hamilton, to the waterfront properties along Bel Marin Keys, the
            established neighborhoods of Ignacio, the spacious parcels in Indian
            Valley, and the rural character of Black Point. Each area presents
            its own opportunities and we tailor our approach accordingly.
          </p>
          <p>
            ADU construction is where Novato truly excels. The city&apos;s
            suburban lot sizes &mdash; significantly larger than those in
            southern Marin communities like Sausalito or Mill Valley &mdash;
            make it straightforward to site a detached ADU without requiring
            variances or special approvals. Many Novato properties can
            accommodate a full 1,200 square foot detached ADU while still
            maintaining comfortable setbacks and outdoor space. The rental
            market for ADUs in Novato is strong, with units commanding $2,000 to
            $3,200 per month depending on size and finish level.
          </p>
          <p>
            Building permits for Novato projects are processed through the
            Novato Community Development Department at 922 Machin Avenue. The
            city&apos;s building division maintains consistent plan check
            timelines, and ConstruBay&apos;s PlanPass.ai technology further
            accelerates the process by identifying code and zoning issues before
            plans are submitted. For properties in unincorporated areas near
            Novato, permits go through the Marin County Community Development
            Agency &mdash; a distinction we manage seamlessly.
          </p>
          <p>
            Whether you are building a detached ADU on a Hamilton lot, adding a
            home addition in Ignacio, or renovating a Bel Marin Keys property,
            ConstruBay brings licensed expertise (CSLB #1106798), local
            knowledge, and the ability to communicate in both English and
            Portuguese. We are invested in this community and we build to the
            standard Novato families deserve.
          </p>
        </div>
      </section>

      {/* Services Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Our Novato Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/adu-builder-marin-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                ADU Construction
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Detached ADUs and garage conversions on Novato&apos;s spacious
                suburban lots &mdash; ideal for rental income.
              </p>
            </Link>
            <Link
              href="/services/general-contractor-marin-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                General Contractor
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Full-service general contracting for Novato&apos;s diverse
                residential project types.
              </p>
            </Link>
            <Link
              href="/services/home-addition-contractor-marin-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                Home Addition
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Room additions to expand your Novato home&apos;s living space
                and value for your growing family.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Novato Construction FAQs
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
            Start Your Novato Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From ADUs to home additions, ConstruBay delivers expert construction
            management across all Novato neighborhoods. Licensed general
            contractor CSLB #1106798. Atendimento em Portugu&ecirc;s.
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
