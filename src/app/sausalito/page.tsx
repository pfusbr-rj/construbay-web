"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "Can ConstruBay work on Sausalito's tight hillside lots?",
    answer:
      "Absolutely. Many Sausalito properties have limited street access, narrow lots, and steep grades. We use specialized equipment and logistics planning for material delivery and construction in tight spaces, including crane work for hillside sites accessible only by stairs.",
  },
  {
    question: "Does ConstruBay renovate historic homes in Sausalito?",
    answer:
      "Yes. Sausalito has many homes dating to the early 1900s. We balance preserving historic character with modern building codes, seismic upgrades, and energy efficiency. We work with the Sausalito Historical Society guidelines when applicable.",
  },
  {
    question: "How are permits handled for Sausalito projects?",
    answer:
      "Permits are processed through the Sausalito Community Development Department at 420 Litho Street. We manage the entire permit process and use PlanPass.ai to pre-analyze plans, catching zoning and code issues before submission to reduce review times.",
  },
  {
    question: "Does ConstruBay work on floating homes in Sausalito?",
    answer:
      "We work on structures connected to permanent foundations. Floating home renovations involve unique marine and structural considerations. Contact us to discuss your specific floating home project and we will advise on scope and feasibility.",
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
  description: "Licensed General Contractor in Sausalito, CA",
  url: "https://www.construbay.com/sausalito",
  telephone: "(415) 968-9494",
  areaServed: {
    "@type": "City",
    name: "Sausalito",
    addressRegion: "CA",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sausalito",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function SausalitoPage() {
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
            Licensed General Contractor in Sausalito, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Waterfront renovations, historic home restorations, and precision
            builds on Sausalito&apos;s challenging hillside and tight-lot
            properties. Expert permit navigation included.
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
          Construction Expertise for Sausalito&apos;s Unique Properties
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Sausalito is unlike any other city in Marin County. Perched on steep
            hillsides overlooking Richardson Bay, this waterfront community
            combines historic charm, artistic character, and some of the most
            logistically challenging construction sites in Northern California.
            From the boutique-lined Caledonia Street corridor to the residential
            hillsides of North Sausalito, from the converted industrial spaces
            of Marinship to the iconic floating homes at Shelter Point, every
            Sausalito project demands a contractor who can adapt to tight spaces,
            difficult access, and complex permitting.
          </p>
          <p>
            ConstruBay (CSLB #1106798) brings specialized experience to
            Sausalito&apos;s construction challenges. Many homes here sit on lots
            with no vehicle access &mdash; reached only by staircases or narrow
            pathways. Materials must be craned in or hand-carried. Foundations
            are often non-standard, built into rock or on piers. Historic homes
            from the early 1900s need seismic upgrades and code compliance work
            that must be balanced against preserving architectural character.
            These are not standard renovation conditions, and they require a
            contractor with the right experience and equipment.
          </p>
          <p>
            Sausalito&apos;s waterfront location adds another layer of complexity.
            Properties near the bay may require coordination with the Bay
            Conservation and Development Commission (BCDC). Salt air exposure
            demands careful material selection &mdash; marine-grade hardware,
            corrosion-resistant fasteners, and exterior finishes rated for
            coastal environments. Our team specifies and installs materials
            appropriate for Sausalito&apos;s microclimate, ensuring longevity and
            reduced maintenance for our clients.
          </p>
          <p>
            Building permits for Sausalito projects are processed through the
            Sausalito Community Development Department at 420 Litho Street. The
            city has specific design guidelines that emphasize preserving
            Sausalito&apos;s village character, and projects visible from the
            waterfront receive additional scrutiny. We handle the entire permit
            process, using our PlanPass.ai system to pre-screen plans and
            anticipate review comments before submission.
          </p>
          <p>
            Whether your project is a bathroom remodel in a hillside cottage, a
            kitchen renovation in a Marinship loft, or navigating permit
            complexity for a significant home improvement, ConstruBay delivers
            the expertise Sausalito demands. Licensed general contractor CSLB
            #1106798, based in neighboring Mill Valley and intimately familiar
            with every Sausalito neighborhood.
          </p>
        </div>
      </section>

      {/* Services Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Our Sausalito Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/bathroom-remodel-marin-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                Bathroom Remodel
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Spa-quality bathroom renovations designed for Sausalito&apos;s
                compact spaces with premium waterproof finishes.
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
                Custom kitchen renovations that maximize space and views in
                Sausalito&apos;s unique home layouts.
              </p>
            </Link>
            <Link
              href="/services/permit-expediting-marin-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                Permit Expediting
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Expert navigation of Sausalito&apos;s design guidelines and permit
                process with AI-powered plan pre-analysis.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Sausalito Construction FAQs
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
            Start Your Sausalito Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From waterfront renovations to historic home restorations, ConstruBay
            brings the expertise Sausalito&apos;s unique properties demand. Licensed
            general contractor CSLB #1106798.
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
