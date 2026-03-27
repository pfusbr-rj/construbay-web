"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does a kitchen remodel cost in Mill Valley?",
    answer:
      "Kitchen remodels in Mill Valley range from $80,000 to $250,000 or more depending on scope. A mid-range renovation with custom cabinetry and quality appliances runs $100,000 to $150,000. High-end projects with structural changes, premium materials, and indoor-outdoor integration can exceed $200,000. ConstruBay (CSLB #1106798) provides detailed estimates after an in-home consultation.",
  },
  {
    question: "Can you open up my kitchen to create an indoor-outdoor flow?",
    answer:
      "Absolutely. Indoor-outdoor kitchen design is one of our specialties in Mill Valley. We install multi-slide or bi-fold door systems that connect your kitchen to decks and patios. For hillside homes, this often involves structural engineering for the new opening and deck reinforcement.",
  },
  {
    question: "How long does a Mill Valley kitchen remodel take?",
    answer:
      "A typical Mill Valley kitchen remodel takes 8 to 14 weeks for construction, plus 4 to 6 weeks for design and permitting. Hillside access constraints and Design Review requirements can extend the timeline. We provide a detailed schedule before work begins.",
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

export default function KitchenRemodelMillValleyPage() {
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
            Kitchen Remodel in Mill Valley, CA
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Custom kitchen design for hillside homes and indoor-outdoor living.
            Open concept layouts, premium cabinetry, and expert craftsmanship by
            a local licensed contractor.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Schedule a Kitchen Consultation
          </Link>
        </div>
      </section>

      {/* Indoor-Outdoor Living */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Indoor-Outdoor Kitchen Design
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Mill Valley&apos;s temperate climate and natural surroundings make
            indoor-outdoor living a defining feature of the community&apos;s best
            homes. A kitchen remodel is the perfect opportunity to dissolve the
            boundary between interior cooking space and exterior living areas.
            Multi-slide door systems, pass-through windows, and covered outdoor
            prep areas transform how you use your home year-round.
          </p>
          <p>
            For hillside properties, indoor-outdoor kitchen design requires
            careful structural planning. Opening exterior walls on a cantilevered
            or post-and-beam hillside home demands engineering analysis to
            maintain structural integrity. ConstruBay (CSLB #1106798) works with
            licensed structural engineers experienced in Mill Valley&apos;s
            hillside construction to ensure every opening is safe, permitted, and
            beautifully executed. The result is a kitchen that frames the
            redwoods, the mountain, or the valley below as a living backdrop.
          </p>
        </div>
      </section>

      {/* Custom Cabinetry & Open Concept */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-10">
            Custom Cabinetry &amp; Open Concept Layouts
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Mill Valley homes range from 1920s craftsman bungalows to modern
              hillside contemporaries, and each demands a kitchen approach that
              respects the home&apos;s architectural DNA. ConstruBay designs
              custom cabinetry that integrates seamlessly with your home&apos;s
              character. We work with local cabinet shops to build pieces that
              fit non-standard dimensions common in older hillside homes where
              no wall is truly plumb and no floor perfectly level.
            </p>
            <p>
              Open concept conversions are among our most requested projects.
              Removing walls between kitchen, dining, and living areas creates
              the expansive feel that modern families want while honoring the
              proportions of the original home. We handle the structural
              engineering for load-bearing wall removal, install concealed steel
              beams, and ensure the transition feels intentional rather than
              forced. Every open concept kitchen includes thoughtful details
              like integrated storage islands, concealed pantry systems, and
              lighting plans that define zones without walls.
            </p>
          </div>
        </div>
      </section>

      {/* Hillside Home Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Hillside Home Kitchen Expertise
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Kitchen remodels in hillside homes present unique challenges that
            generic remodeling contractors often underestimate. Material
            delivery on narrow mountain roads requires advance coordination and
            sometimes crane placement. Plumbing modifications in homes built on
            piers or over crawl spaces on slopes demand experienced tradespeople
            who understand gravity-fed drainage on grade.
          </p>
          <p>
            ConstruBay has remodeled kitchens throughout Mill Valley&apos;s
            hillside neighborhoods including Alto, Homestead Valley, and
            Cascade Canyon. We understand the logistics, the structural
            conditions, and the permitting requirements specific to these
            locations. Our project management ensures your kitchen remodel
            proceeds smoothly despite the access challenges that come with
            building in one of California&apos;s most beautiful settings.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Mill Valley Kitchen Remodel FAQs
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
            Transform Your Mill Valley Kitchen
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From custom cabinetry to indoor-outdoor integration, ConstruBay
            creates kitchens that match Mill Valley&apos;s standard of living.
            Based at 18 El Paseo Lane. Licensed general contractor CSLB
            #1106798.
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
            <Link href="/mill-valley" className="hover:text-brand-tan transition-colors">
              Mill Valley
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
