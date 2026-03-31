"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "Why is San Rafael a good place to build an ADU?",
    answer:
      "San Rafael offers the most diverse housing stock in Marin County with relatively more affordable entry points. The city actively encourages ADU construction to meet housing goals, and the permitting process through the San Rafael Community Development Department is more streamlined than many smaller Marin jurisdictions.",
  },
  {
    question: "How does permitting work in San Rafael?",
    answer:
      "San Rafael is the Marin County seat, and building permits are processed through the San Rafael Community Development Department at 1400 Fifth Avenue. As Marin's largest city, San Rafael has a dedicated building division with regular plan check turnaround times. ConstruBay uses PlanPass.ai to pre-screen all plans before submission.",
  },
  {
    question: "What neighborhoods does ConstruBay serve in San Rafael?",
    answer:
      "We serve all San Rafael neighborhoods including Dominican, Gerstle Park, Sun Valley, Terra Linda, and Lucas Valley. Each area has its own character and zoning considerations that we navigate as part of our full-service approach.",
  },
  {
    question: "Does ConstruBay build home additions in San Rafael?",
    answer:
      "Yes. Home additions are one of our core services in San Rafael, where diverse lot sizes and housing styles create excellent opportunities to expand living space. We handle design, permits, and construction for room additions, second-story additions, and bump-outs.",
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
  description: "Licensed General Contractor in San Rafael, CA",
  url: "https://www.construbay.com/san-rafael",
  telephone: "(415) 968-9494",
  areaServed: {
    "@type": "City",
    name: "San Rafael",
    addressRegion: "CA",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Rafael",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function SanRafaelPage() {
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
            Licensed General Contractor in San Rafael, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Marin&apos;s largest city and county seat. ADUs, home additions,
            remodels, and new construction across San Rafael&apos;s diverse
            neighborhoods &mdash; from Dominican to Lucas Valley.
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
          San Rafael: Marin&apos;s Most Diverse Construction Market
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            San Rafael is the largest city in Marin County and serves as the
            county seat &mdash; making it the administrative hub for regional
            permitting and planning. With a population of approximately 60,000,
            San Rafael offers the most diverse housing stock in Marin, from
            grand Victorians in Gerstle Park to mid-century ranches in Terra
            Linda, hillside estates in Dominican, and spacious family homes in
            Lucas Valley and Sun Valley. This diversity creates opportunities
            for every type of residential construction project.
          </p>
          <p>
            ConstruBay (CSLB #1106798) serves all San Rafael neighborhoods with
            full-service general contracting. San Rafael represents Marin
            County&apos;s most accessible entry point for homeowners looking to
            build, remodel, or add living space. Median home prices, while still
            substantial, are lower than waterfront communities like Tiburon or
            Sausalito, which means more homeowners here are investing in ADUs,
            home additions, and renovations to maximize the value of their
            properties.
          </p>
          <p>
            As the county seat, San Rafael houses the Marin County Community
            Development Agency and the San Rafael Community Development
            Department at 1400 Fifth Avenue. Building permits for properties
            within city limits go through San Rafael&apos;s own building division,
            while unincorporated areas nearby (such as parts of Lucas Valley)
            are permitted through the county. Our team knows both systems and
            manages the entire permit process regardless of jurisdiction, using
            PlanPass.ai to pre-analyze plans and reduce review cycles.
          </p>
          <p>
            ADU construction is particularly strong in San Rafael. The city&apos;s
            diverse lot sizes &mdash; from compact Gerstle Park properties to
            the larger parcels in Terra Linda and Sun Valley &mdash; accommodate
            a wide range of ADU types. Detached ADUs, garage conversions, and
            JADUs are all viable depending on the specific property. The city
            has been proactive in supporting ADU development to meet regional
            housing needs, and the permit process is more predictable here than
            in many smaller Marin jurisdictions.
          </p>
          <p>
            Whether you are adding a second story to a Terra Linda ranch home,
            building a detached ADU in Sun Valley, or renovating a historic
            Gerstle Park Victorian, ConstruBay provides the licensed expertise
            (CSLB #1106798), local permit knowledge, and AI-powered planning
            technology that San Rafael homeowners need. We handle the full scope
            from design through final inspection, managing every detail so you
            do not have to.
          </p>
        </div>
      </section>

      {/* Services Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Our San Rafael Services
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
                Detached ADUs, garage conversions, and JADUs tailored to San
                Rafael&apos;s diverse lot sizes and zoning.
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
                Full-service general contracting for San Rafael&apos;s wide range
                of residential project types.
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
                Room additions and second stories to expand your San Rafael
                home&apos;s living space and value.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            San Rafael Construction FAQs
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
            Start Your San Rafael Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From ADUs to whole house remodels, ConstruBay delivers expert
            construction management across all San Rafael neighborhoods.
            Licensed general contractor CSLB #1106798.
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
