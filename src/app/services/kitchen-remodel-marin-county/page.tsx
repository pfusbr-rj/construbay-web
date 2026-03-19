"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How much does a kitchen remodel cost in Marin County?",
    answer:
      "Kitchen remodels in Marin County typically range from $80,000 to $250,000 or more depending on the scope of work, materials selected, and structural changes involved. A mid-range remodel with quality finishes averages $120,000 to $180,000, while high-end custom kitchens with premium appliances and structural modifications can exceed $250,000.",
  },
  {
    question: "How long does a kitchen remodel take?",
    answer:
      "A typical kitchen remodel in Marin County takes 8 to 16 weeks for construction, depending on scope. The full timeline including design, permitting, and material lead times is usually 4 to 7 months. Structural changes like wall removal or plumbing relocation add time. Our PlanPass.ai system helps reduce the permitting portion significantly.",
  },
  {
    question: "Do I need permits for a kitchen remodel?",
    answer:
      "Yes, permits are required for most kitchen remodels in Marin County if the work involves structural changes, plumbing modifications, electrical work, or gas line alterations. Cosmetic-only updates like painting, new hardware, or replacing countertops on existing cabinets generally do not require permits. ConstruBay handles all permitting as part of our design-build service.",
  },
  {
    question: "Can you remove a wall to create an open concept kitchen?",
    answer:
      "Yes, we regularly remove walls to create open concept kitchens in Marin County homes. If the wall is load-bearing, a structural engineer designs a beam and post system to carry the load. This requires a building permit with structural calculations. Non-load-bearing walls can be removed more simply. We evaluate wall types during the initial consultation.",
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

const designStyles = [
  {
    title: "Modern Minimalist",
    description:
      "Clean lines, handleless cabinetry, integrated appliances, and neutral palettes. Popular in contemporary Marin homes and new construction. Features flat-panel cabinets, waterfall edge islands, and concealed storage solutions.",
  },
  {
    title: "Transitional",
    description:
      "Blends traditional warmth with modern simplicity. Shaker-style cabinets, mixed metals, and natural stone countertops. The most popular style in Marin County, bridging classic architecture with updated functionality.",
  },
  {
    title: "Farmhouse Modern",
    description:
      "Open shelving, apron-front sinks, reclaimed wood accents, and warm lighting. Well-suited to Marin's rural character in towns like Fairfax, San Anselmo, and West Marin. Combines rustic charm with high-end finishes.",
  },
  {
    title: "Mediterranean",
    description:
      "Arched details, terra cotta or patterned tile, ornate hardware, and rich wood tones. Complements many of Marin County's Spanish and Italian-influenced homes, particularly in San Rafael, Tiburon, and Belvedere.",
  },
];

const processSteps = [
  {
    step: "Consultation",
    detail:
      "In-home visit to assess your existing kitchen, discuss goals, review structural possibilities, and establish budget parameters. We evaluate plumbing, electrical, gas, and structural conditions.",
  },
  {
    step: "Design",
    detail:
      "Custom kitchen design with 3D renderings, material selections, appliance specifications, and detailed scope of work. We coordinate with cabinetry vendors for custom or semi-custom orders.",
  },
  {
    step: "Permits",
    detail:
      "Our team handles all permit applications with Marin County or your local jurisdiction. PlanPass.ai pre-analyzes plans to catch code issues before submission, reducing approval timelines.",
  },
  {
    step: "Demo & Rough-In",
    detail:
      "Controlled demolition of existing kitchen, followed by structural modifications, plumbing rough-in, electrical wiring, and any HVAC adjustments. We protect the rest of your home throughout.",
  },
  {
    step: "Build & Install",
    detail:
      "Cabinet installation, countertop templating and installation, flooring, tile work, lighting fixtures, plumbing fixtures, and appliance installation. Meticulous attention to detail and finish quality.",
  },
  {
    step: "Final Walkthrough",
    detail:
      "Comprehensive inspection, punch list completion, final cleaning, and handover. We walk through every detail with you and ensure complete satisfaction before closing the project.",
  },
];

export default function KitchenRemodelMarinCountyPage() {
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
            Kitchen Remodel in Marin County
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Custom kitchen remodeling from design through final walkthrough.
            Custom cabinetry, premium countertops, structural modifications,
            and full permit management via PlanPass.ai.
          </p>
          <Link
            href="/request-a-bid"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          The Kitchen Is the Heart of Every Marin County Home
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            In Marin County, the kitchen is more than a cooking space &mdash;
            it&apos;s where indoor and outdoor living converge. With a climate that
            invites year-round entertaining, Marin homeowners increasingly
            demand kitchens that open to patios, gardens, and views. A
            well-designed kitchen remodel captures this lifestyle while
            delivering one of the highest returns on investment of any home
            improvement project.
          </p>
          <p>
            According to industry data, mid-range kitchen remodels in the Bay
            Area recoup 70% to 80% of their cost at resale, and high-end
            remodels in premium markets like Tiburon, Mill Valley, and
            Sausalito often return even more. Beyond resale value, a modern
            kitchen transforms daily living &mdash; better workflow, more
            storage, improved lighting, and finishes that reflect your personal
            style.
          </p>
          <p>
            ConstruBay (CSLB #1106798) is a licensed general contractor based
            in Mill Valley, delivering full design-build kitchen remodels
            throughout Marin County. We manage every detail from initial
            concept through final inspection, including all permits handled
            through our PlanPass.ai technology.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-8">
            What We Do: Full-Scope Kitchen Remodeling
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Our kitchen remodels cover every element of the space, from
              structural modifications to the final backsplash tile. We work
              with top-tier vendors and craftsmen to deliver results that meet
              Marin County&apos;s high standards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="border border-white/20 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-2">Custom Cabinetry</h3>
                <p className="text-white/70 text-sm">Custom and semi-custom cabinets designed to maximize storage and complement your home&apos;s architecture.</p>
              </div>
              <div className="border border-white/20 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-2">Countertops</h3>
                <p className="text-white/70 text-sm">Quartz, marble, granite, quartzite, and porcelain slab options. Templated and installed with precision.</p>
              </div>
              <div className="border border-white/20 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-2">Flooring &amp; Tile</h3>
                <p className="text-white/70 text-sm">Hardwood, engineered wood, large-format tile, and custom backsplash installations.</p>
              </div>
              <div className="border border-white/20 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-2">Lighting &amp; Electrical</h3>
                <p className="text-white/70 text-sm">Recessed lighting, under-cabinet LED, pendant fixtures, and electrical panel upgrades as needed.</p>
              </div>
              <div className="border border-white/20 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-2">Plumbing &amp; Fixtures</h3>
                <p className="text-white/70 text-sm">Sink relocations, pot fillers, garbage disposals, dishwasher hookups, and premium faucet installations.</p>
              </div>
              <div className="border border-white/20 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-2">Structural Wall Removal</h3>
                <p className="text-white/70 text-sm">Load-bearing wall removal with engineered beam systems to create open concept layouts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Styles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10">
          Kitchen Design Styles Popular in Marin County
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designStyles.map((style) => (
            <div
              key={style.title}
              className="border border-white/20 p-6"
            >
              <h3 className="text-xl font-semibold text-[#C9A84C] mb-3">
                {style.title}
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {style.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Waterfront Kitchens */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-y border-brand-tan/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
            Tiburon &amp; Sausalito Waterfront Kitchens
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Waterfront homes in Tiburon and Sausalito demand kitchens that
              capitalize on extraordinary bay views. Open concept layouts,
              expansive windows, and seamless indoor-outdoor transitions are
              essential design elements. We specialize in removing walls and
              reconfiguring spaces to frame views of the San Francisco skyline,
              Angel Island, and the Marin Headlands.
            </p>
            <p>
              Coastal proximity introduces material considerations that inland
              kitchens don&apos;t face. Salt air accelerates corrosion on certain
              metals and finishes, making material selection critical for
              longevity. We specify marine-grade hardware, corrosion-resistant
              fixtures, and moisture-resistant cabinetry materials that perform
              in waterfront environments without sacrificing aesthetics.
            </p>
            <p>
              Many waterfront properties in these communities also fall under
              Design Review Board oversight, requiring architectural
              compatibility with the neighborhood. ConstruBay has presented
              numerous kitchen and home remodel projects to Tiburon and
              Sausalito review boards and understands the design standards
              these communities expect.
            </p>
          </div>
        </div>
      </section>

      {/* Permits & Codes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          Permits &amp; Building Codes for Kitchen Remodels
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            Most kitchen remodels in Marin County require building permits.
            Permits are mandatory when the work involves structural changes
            (wall removal, header installation), plumbing modifications (sink
            relocation, gas line changes), electrical work (new circuits,
            panel upgrades), or mechanical changes (range hood ducting, HVAC
            modifications).
          </p>
          <p>
            Marin County plan check can take 4 to 8 weeks for kitchen remodel
            permits, and incomplete submissions trigger correction cycles that
            add weeks to the timeline. This is where PlanPass.ai makes a
            measurable difference &mdash; our AI-powered pre-analysis reviews
            your plans against Title 24 energy code, California Building Code,
            and local amendments before submission, catching the issues that
            cause delays.
          </p>
          <p>
            ConstruBay handles all permit applications, plan check responses,
            and inspection scheduling as part of our design-build service. You
            don&apos;t need to visit the county office or manage the process
            yourself.
          </p>
        </div>
      </section>

      {/* Cost Range */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-8">
            Kitchen Remodel Cost Ranges in Marin County
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Kitchen remodel costs in Marin County range from $80,000 to
              $250,000 or more, depending on scope, materials, and structural
              complexity. Here is a general breakdown:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Cosmetic Refresh
                </h3>
                <p className="text-2xl text-white font-bold">$80K &ndash; $120K</p>
                <p className="text-white/60 text-sm mt-1">
                  New cabinets, countertops, flooring, lighting. Existing layout.
                </p>
              </div>
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Mid-Range Remodel
                </h3>
                <p className="text-2xl text-white font-bold">$120K &ndash; $180K</p>
                <p className="text-white/60 text-sm mt-1">
                  Layout changes, plumbing relocation, custom cabinetry.
                </p>
              </div>
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  High-End Custom
                </h3>
                <p className="text-2xl text-white font-bold">$180K &ndash; $250K</p>
                <p className="text-white/60 text-sm mt-1">
                  Wall removal, premium materials, pro-grade appliances.
                </p>
              </div>
              <div className="border border-brand-tan/30 p-5">
                <h3 className="text-[#C9A84C] font-semibold mb-1">
                  Ultra-Premium
                </h3>
                <p className="text-2xl text-white font-bold">$250K+</p>
                <p className="text-white/60 text-sm mt-1">
                  Full reconfiguration, imported materials, chef-grade buildout.
                </p>
              </div>
            </div>
            <p>
              These ranges include design, permitting, construction, and
              finish materials. ConstruBay (CSLB #1106798) provides detailed
              project estimates after an in-home consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Our Kitchen Remodel Process
          </h2>
          <div className="space-y-8">
            {processSteps.map((item, i) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
                  <span className="text-[#C9A84C] font-bold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.step}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PlanPass.ai */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-8">
            Faster Permits with PlanPass.ai
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              PlanPass.ai is our proprietary AI-powered permit analysis tool.
              Before we submit your kitchen remodel plans to Marin County, our
              system reviews every page against Title 24 energy requirements,
              California Building Code, California Plumbing Code, and local
              amendments specific to your jurisdiction.
            </p>
            <p>
              This pre-submission analysis catches the errors and omissions
              that cause plan check corrections &mdash; the single biggest
              source of permit delays in Marin County. By submitting clean,
              code-compliant plans on the first attempt, we reduce your permit
              timeline by weeks or months compared to the typical experience.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Kitchen Remodel FAQs &mdash; Marin County
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
            Start Your Marin County Kitchen Remodel
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            From design consultation to final walkthrough, ConstruBay manages
            every detail of your kitchen transformation. Licensed general
            contractor CSLB #1106798, based in Mill Valley, serving all of
            Marin County.
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
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <Link href="/services/whole-house-remodel-marin-county" className="hover:text-brand-tan transition-colors">
              Whole House Remodel
            </Link>
            <Link href="/services/adu-builder-marin-county" className="hover:text-brand-tan transition-colors">
              ADU Builder Marin County
            </Link>
            <Link href="/services" className="hover:text-brand-tan transition-colors">
              All Services
            </Link>
            <Link href="/" className="hover:text-brand-tan transition-colors">
              Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
