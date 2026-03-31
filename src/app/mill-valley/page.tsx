"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "What makes hillside construction in Mill Valley so challenging?",
    answer:
      "Mill Valley sits at the base of Mt. Tamalpais, with many homes on steep grades requiring geotechnical reports, engineered retaining walls, and specialized grading. WUI fire codes add defensible space and fire-resistant material requirements. ConstruBay specializes in these complex hillside builds.",
  },
  {
    question: "How long does the Mill Valley Design Review Board process take?",
    answer:
      "Typically 4-8 weeks for residential projects, depending on complexity. Our team prepares thorough design packages and has presented dozens of projects to the Mill Valley DRB, which helps avoid continuances and delays.",
  },
  {
    question: "Does ConstruBay handle permits in Mill Valley?",
    answer:
      "Yes. We manage the entire permit process through the Mill Valley Planning Department and Building Division at 26 Corte Madera Avenue. Our PlanPass.ai technology pre-analyzes plans to catch code issues before submission, reducing review cycles.",
  },
  {
    question: "What types of projects does ConstruBay build in Mill Valley?",
    answer:
      "We handle ADUs, kitchen remodels, whole house renovations, home additions, and custom new construction. As a licensed general contractor (CSLB #1106798) headquartered in Mill Valley, we understand the local codes, terrain, and architectural character intimately.",
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
  description: "Licensed General Contractor in Mill Valley, CA",
  url: "https://www.construbay.com/mill-valley",
  telephone: "(415) 968-9494",
  areaServed: {
    "@type": "City",
    name: "Mill Valley",
    addressRegion: "CA",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mill Valley",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function MillValleyPage() {
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
            Licensed General Contractor in Mill Valley, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Hillside construction experts at the base of Mt. Tamalpais. ADUs,
            kitchen remodels, whole house renovations, and custom builds
            &mdash; navigating Mill Valley&apos;s strictest-in-Marin permit process.
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
          Building in Mill Valley: Where Mt. Tam Meets Marin Luxury
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Mill Valley is one of the most desirable &mdash; and most challenging
            &mdash; places to build in Marin County. Nestled in the shadow of
            Mt. Tamalpais, the town combines redwood-shaded canyon homes,
            hillside properties with sweeping bay views, and flat-lot
            neighborhoods near the Richardson Bay waterfront. From the winding
            roads of Blithedale Canyon to the family-friendly streets of
            Strawberry Point, every Mill Valley project requires a contractor who
            understands the unique demands of this community.
          </p>
          <p>
            ConstruBay (CSLB #1106798) is headquartered in Mill Valley and has
            built extensively across every neighborhood &mdash; Tam Valley,
            Almonte, Alto, Homestead Valley, and beyond. We know the terrain, the
            soil conditions, and the regulatory landscape that shapes
            construction here. Mill Valley has some of the most stringent permit
            requirements in all of Marin County, including a Design Review Board
            that evaluates exterior changes for architectural compatibility with
            the surrounding neighborhood.
          </p>
          <p>
            Hillside construction is our specialty. Many Mill Valley lots sit on
            steep grades that require geotechnical investigation, engineered
            retaining walls, and careful grading plans. The town falls within a
            Wildland-Urban Interface (WUI) fire zone, which means projects must
            comply with strict fire codes including defensible space
            requirements, fire-resistant roofing and siding materials, and
            emergency vehicle access provisions. These requirements add
            complexity to every project, but they also protect the community
            &mdash; and our team has the experience to navigate them efficiently.
          </p>
          <p>
            All residential construction permits in Mill Valley are processed
            through the Mill Valley Planning Department and Building Division,
            located at 26 Corte Madera Avenue. We handle the entire permit
            process on behalf of our clients, using our PlanPass.ai technology to
            pre-analyze plans against Title 24 energy codes, local zoning
            ordinances, and WUI fire requirements before submission. This catches
            issues early and reduces the back-and-forth that can delay projects
            by weeks or months.
          </p>
          <p>
            Whether you are planning an ADU on a hillside lot in Homestead
            Valley, a full kitchen renovation in a Blithedale Canyon home, or a
            whole house remodel in Tam Valley, ConstruBay brings licensed
            expertise (CSLB #1106798), local knowledge, and AI-powered permit
            planning to every project. We are your neighbors, and we build to
            the standard this community demands.
          </p>
        </div>
      </section>

      {/* Services Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Our Mill Valley Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/adu-builder-mill-valley"
              className="border border-white/20 p-6 hover:border-[#C9A84C] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                ADU Construction
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Detached ADUs, garage conversions, and hillside units designed
                for Mill Valley&apos;s unique terrain and permitting requirements.
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
                Custom kitchen renovations with high-end finishes suited to Mill
                Valley&apos;s luxury home market.
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
                Complete home transformations that respect Mill Valley&apos;s
                architectural character while modernizing every system.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Mill Valley Construction FAQs
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
            Start Your Mill Valley Project
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From hillside ADUs to whole house remodels, ConstruBay manages every
            detail of your Mill Valley construction project. Licensed general
            contractor CSLB #1106798, headquartered in Mill Valley.
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
