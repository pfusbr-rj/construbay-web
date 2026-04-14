"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "What types of projects does ConstruBay build in Tiburon?",
    answer:
      "We specialize in luxury kitchen remodels, whole house renovations, custom pools, and estate-level new construction. Tiburon's waterfront properties and large lots demand high-end craftsmanship and we deliver exactly that.",
  },
  {
    question: "How does the Tiburon Design Review process work?",
    answer:
      "The Tiburon Design Review Board evaluates exterior modifications for compatibility with neighborhood character, view preservation, and environmental impact. Our team prepares comprehensive design packages and has extensive experience presenting to this board.",
  },
  {
    question: "Does ConstruBay handle waterfront construction in Tiburon?",
    answer:
      "Yes. Waterfront projects on Belvedere Island and Paradise Cay involve additional considerations including BCDC permits, seismic requirements for bay-adjacent foundations, and salt-air-resistant materials. We manage all of these requirements as part of our scope.",
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
  description: "Licensed General Contractor in Tiburon, CA",
  url: "https://www.construbay.com/tiburon",
  telephone: "(415) 968-9494",
  areaServed: {
    "@type": "City",
    name: "Tiburon",
    addressRegion: "CA",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tiburon",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function TiburonPage() {
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
            Licensed General Contractor in Tiburon, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Waterfront estates, bay view remodels, and estate-level
            construction on Marin&apos;s most prestigious peninsula. Luxury
            craftsmanship meets meticulous permit management.
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
          Estate-Level Construction on Tiburon&apos;s Waterfront
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Tiburon occupies one of the most spectacular settings in the San
            Francisco Bay Area &mdash; a sun-drenched peninsula with panoramic
            views of the Golden Gate Bridge, Angel Island, and the San Francisco
            skyline. The homes here reflect that setting: waterfront estates on
            Belvedere Island, expansive properties along Paradise Cay, historic
            residences in Old Tiburon, and hillside homes in Reed Heights with
            unobstructed bay views. Tiburon has the largest average lot sizes in
            Marin County, and the construction projects here match that scale.
          </p>
          <p>
            ConstruBay (CSLB #1106798) provides full-service general contracting
            throughout Tiburon and Belvedere. Our work here focuses on the
            estate-level finishes and meticulous detail that Tiburon homeowners
            expect: imported stone and tile, custom cabinetry, designer
            fixtures, and architectural elements that frame and preserve the
            extraordinary views that define this community. We understand that
            in Tiburon, every design decision must account for the visual
            relationship between interior spaces and the surrounding landscape.
          </p>
          <p>
            The Tiburon Design Review Board plays a significant role in the
            building process. The board evaluates proposed exterior changes for
            architectural compatibility, view preservation, and environmental
            sensitivity. Projects on the waterfront may also require
            coordination with the Bay Conservation and Development Commission
            (BCDC) for work near the shoreline. Our team has presented numerous
            projects to Tiburon&apos;s review boards and understands how to prepare
            applications that gain approval efficiently.
          </p>
          <p>
            Permits for Tiburon projects are processed through the Town of
            Tiburon Community Development Department at 1505 Tiburon Boulevard.
            We manage the entire permit lifecycle using our PlanPass.ai
            technology, which pre-screens plans against local zoning, Title 24
            energy codes, and design review criteria before submission. For
            Belvedere Island properties, permits go through the City of
            Belvedere separately &mdash; a distinction many contractors
            overlook.
          </p>
          <p>
            From a full kitchen renovation showcasing bay views in Paradise Cay,
            to a whole house remodel preserving the character of an Old Tiburon
            craftsman, to a custom pool and outdoor living space on a Belvedere
            estate, ConstruBay delivers the quality and project management that
            Tiburon&apos;s luxury market demands. Licensed general contractor CSLB
            #1106798, based in neighboring Mill Valley and deeply familiar with
            every Tiburon neighborhood.
          </p>
        </div>
      </section>

      {/* Services Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Our Tiburon Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/kitchen-remodel-marin-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                Kitchen Remodel
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Luxury kitchen renovations designed to showcase Tiburon&apos;s
                extraordinary bay views with premium finishes.
              </p>
            </Link>
            <Link
              href="/services/whole-house-remodel-marin-county"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                Whole House Remodel
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Complete estate renovations with the meticulous attention to
                detail that Tiburon properties demand.
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
                Infinity pools, vanishing edges, and outdoor living spaces
                designed around Tiburon&apos;s panoramic bay views.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Tiburon Construction FAQs
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
            Start Your Tiburon Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From waterfront estates to hillside renovations, ConstruBay delivers
            the luxury craftsmanship Tiburon demands. Licensed general
            contractor CSLB #1106798.
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
          <p className="mt-4 text-sm">
            <Link href="/services/general-contractor-marin-county" className="text-brand-tan hover:underline">
              Hire a Licensed Marin County General Contractor &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
