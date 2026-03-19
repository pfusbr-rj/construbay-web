"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does a luxury kitchen remodel cost in Tiburon?",
    answer:
      "Tiburon kitchen remodels range from $120,000 to $350,000 or more. Estate-level projects with imported stone, custom metalwork, and professional-grade appliance suites can exceed $400,000. ConstruBay (CSLB #1106798) provides detailed estimates tailored to your vision and property.",
  },
  {
    question: "Can you remodel a kitchen to maximize bay views in Tiburon?",
    answer:
      "This is one of our specialties. We design kitchen layouts that orient prep and dining areas toward the water, install floor-to-ceiling windows and bay window bump-outs, and select finishes that complement rather than compete with the view. Structural modifications to open view corridors are handled by our engineering partners.",
  },
  {
    question: "Do Tiburon and Belvedere have special permit requirements for kitchen remodels?",
    answer:
      "Both Tiburon and Belvedere Island have design review processes that evaluate exterior changes and sometimes significant interior remodels that affect the building envelope. Our team navigates both jurisdictions regularly and prepares applications that meet their specific standards.",
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

export default function KitchenRemodelTiburonPage() {
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
            Kitchen Remodel in Tiburon, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Estate-level kitchen design for Tiburon and Belvedere Island.
            Waterfront view optimization, premium materials, and craftsmanship
            that matches the setting.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Schedule a Kitchen Consultation
          </Link>
        </div>
      </section>

      {/* Waterfront Kitchen Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Waterfront View Kitchen Design
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Tiburon sits on a peninsula extending into the San Francisco Bay,
            and many homes enjoy extraordinary views of the city skyline, Angel
            Island, and the Golden Gate Bridge. A kitchen remodel in Tiburon is
            as much about framing these views as it is about functional design.
            ConstruBay (CSLB #1106798) approaches every Tiburon kitchen with the
            view as a primary design element.
          </p>
          <p>
            We orient cooking and gathering zones toward the water, install
            expansive window systems that maximize sightlines while managing
            glare and heat gain, and select countertop and backsplash materials
            that complement the bay&apos;s changing colors throughout the day.
            Bay window bump-outs are a signature Tiburon feature, creating
            breakfast nooks and herb garden shelves that project into the view
            while adding usable square footage without triggering major
            structural modifications.
          </p>
        </div>
      </section>

      {/* Estate-Level Finishes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Estate-Level Finishes &amp; Appliances
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Tiburon and Belvedere Island homeowners expect finishes that match
              the caliber of their properties. ConstruBay sources and installs
              premium materials including quartzite and marble slabs from Italian
              and Brazilian quarries, custom-milled cabinetry in hardwoods and
              lacquered finishes, hand-forged hardware and fixtures, and
              professional-grade appliance suites from brands like Wolf,
              Sub-Zero, Miele, and Gaggenau.
            </p>
            <p>
              Our installation teams are trained to handle these materials with
              the precision they demand. Book-matched marble slabs require
              careful template work and experienced fabricators. Custom cabinetry
              needs precise scribing to walls that may have shifted over decades.
              Integrated appliance panels must align perfectly with surrounding
              cabinetry for a seamless look. This level of detail separates a
              good kitchen from an exceptional one, and it is where
              ConstruBay&apos;s craftsmanship truly shows.
            </p>
          </div>
        </div>
      </section>

      {/* Belvedere Island */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Belvedere Island Projects
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Belvedere Island is one of the most exclusive residential
            communities in Northern California, with homes valued from $3
            million to over $20 million. Kitchen remodels on Belvedere demand
            not only exceptional design and materials but also careful
            navigation of the city&apos;s design review process and the
            logistical challenges of island construction including limited
            staging areas and narrow access roads.
          </p>
          <p>
            ConstruBay has completed projects on Belvedere and understands the
            community&apos;s expectations and regulatory requirements. We
            coordinate material deliveries to minimize neighborhood disruption,
            maintain clean and organized job sites appropriate to the setting,
            and communicate proactively with neighboring homeowners. Our project
            management approach is calibrated for the discretion and precision
            that Belvedere residents require.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Tiburon Kitchen Remodel FAQs
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
            Elevate Your Tiburon Kitchen
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From waterfront view optimization to estate-level finishes,
            ConstruBay creates kitchens worthy of Tiburon and Belvedere Island.
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
            <Link href="/services/kitchen-remodel-marin-county" className="hover:text-brand-tan transition-colors">
              Kitchen Remodel Marin County
            </Link>
            <Link href="/tiburon" className="hover:text-brand-tan transition-colors">
              Tiburon
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
