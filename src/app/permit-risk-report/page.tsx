"use client";

import { useState } from "react";
import Link from "next/link";

const faqItems = [
  {
    question: "How long does the permit risk report take?",
    answer:
      "Our AI analysis is typically completed within 48 hours of receiving your plans.",
  },
  {
    question: "How much does the permit risk report cost?",
    answer:
      "The initial permit risk report is free for ConstruBay clients. Standalone reports start at $500.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover all of Marin County and Sonoma County, including Mill Valley, Tiburon, Sausalito, San Rafael, Novato, Petaluma, Santa Rosa, and Sebastopol.",
  },
  {
    question: "Will this replace my architect?",
    answer:
      "No. PlanPass.ai supplements your architect\u2019s work by catching code compliance issues early, saving time and revision costs.",
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

const projectTypes = [
  "ADU / Garage Conversion",
  "Full Home Remodel",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Home Addition",
  "New Construction",
  "Custom Pool",
  "Other",
];

const reportItems = [
  "Zoning compliance verification",
  "Setback and lot coverage analysis",
  "Title 24 energy code compliance",
  "Fire code and WUI zone requirements",
  "Structural requirements review",
  "Marin County specific amendments",
  "Design Review Board compatibility",
  "Utility connection requirements",
  "Grading and drainage assessment",
  "Environmental and CEQA considerations",
];

export default function PermitRiskReportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-dark to-brand-dark" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
            PlanPass.ai + ConstruBay &middot; CSLB #1106798
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Catch Permit Problems Before You Submit to Marin County
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            AI-powered permit risk analysis for Marin and Sonoma County
            projects. Stop wasting months on avoidable plan check corrections.
          </p>
          <Link
            href="#lead-form"
            className="inline-block bg-[#C9A84C] text-white font-bold text-lg px-12 py-[18px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get Your Free Report
          </Link>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          The Problem: Marin County Permit Delays Are Costing You Thousands
        </h2>
        <div className="space-y-6 text-white/80 leading-relaxed">
          <p>
            If you are planning a construction project in Marin County, the
            permitting process is one of the biggest risks to your budget and
            timeline. The average plan check review in Marin County takes
            between 3 and 6 months &mdash; and that assumes your plans pass on
            the first review. Most do not.
          </p>
          <p>
            Homeowners and even experienced architects routinely submit plans
            with code conflicts, missing Title 24 calculations, zoning
            violations, or fire code gaps that only surface after the county
            reviewer flags them weeks later. Each correction cycle adds 4 to 8
            weeks to the timeline. On a typical Marin County remodel or ADU
            project, that translates to $15,000 to $40,000 in carrying costs,
            delayed rental income, and extended construction financing.
          </p>
          <p>
            The fundamental issue is that plan check reviewers in Marin County
            are overloaded. The county has seen a surge in ADU applications,
            remodel permits, and fire-rebuild projects. The Community
            Development Agency processes hundreds of applications each quarter,
            and staffing has not kept pace. Your plans sit in a queue, and when
            they finally get reviewed, a single missed detail sends you back to
            the end of the line.
          </p>
          <p>
            This is the problem ConstruBay set out to solve with PlanPass.ai
            &mdash; our proprietary AI-powered permit analysis platform built
            specifically for Marin and Sonoma County projects. Licensed general
            contractor CSLB #1106798.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1B2A3B]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold mb-8">
            The Solution: PlanPass.ai Pre-Submission Analysis
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              PlanPass.ai is an AI analysis engine that reads your construction
              blueprints and cross-references them against the full matrix of
              applicable codes: California Building Code, Title 24 energy
              requirements, local Marin County amendments, fire code and WUI
              zone regulations, zoning ordinances, and Design Review Board
              guidelines.
            </p>
            <p>
              The system flags every conflict, gap, and ambiguity before you
              spend a dollar on county filing fees. It identifies issues that
              even experienced plan checkers sometimes miss on the first pass
              &mdash; things like conflicting setback interpretations between
              the county zoning code and the community plan, or Title 24
              compliance gaps in window-to-wall ratios that only become apparent
              when the full energy model is calculated.
            </p>
            <p>
              ConstruBay developed PlanPass.ai because we were tired of seeing
              our clients lose months and thousands of dollars to preventable
              permit delays. As a licensed general contractor (CSLB #1106798)
              with over a decade of experience building in Marin and Sonoma
              Counties, we know exactly what the county plan checkers look for
              &mdash; and we trained our AI on that institutional knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* What the Report Includes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-8">
          What the Permit Risk Report Includes
        </h2>
        <p className="text-white/80 leading-relaxed mb-8">
          Every Permit Risk Report is a comprehensive pre-submission analysis
          tailored to your specific project and jurisdiction. Here is what we
          review:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {reportItems.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 border border-brand-tan/30 p-4"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="2"
                className="flex-shrink-0 mt-0.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-white/80">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-white/60 text-sm">
          Reports are customized to your project location and scope. Marin
          County and Sonoma County each have unique local amendments that our
          analysis engine accounts for.
        </p>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-y border-brand-tan/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
                <span className="text-[#C9A84C] text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Upload Your Plans
              </h3>
              <p className="text-white/70">
                Submit your architectural drawings, site plans, and project
                details through our secure form below. We accept PDF, DWG, and
                standard CAD formats.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
                <span className="text-[#C9A84C] text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                AI Analysis in 48 Hours
              </h3>
              <p className="text-white/70">
                PlanPass.ai scans your blueprints against every applicable code,
                local amendment, and zoning requirement for your specific
                jurisdiction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[#C9A84C] flex items-center justify-center">
                <span className="text-[#C9A84C] text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Detailed Report with Fixes
              </h3>
              <p className="text-white/70">
                Receive a comprehensive report listing every flagged issue,
                the specific code reference, and a recommended fix &mdash; so your
                architect can resolve everything before submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section
        id="lead-form"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-4 text-center">
          Request Your Free Permit Risk Report
        </h2>
        <p className="text-white/70 text-center mb-10">
          Upload your plans and our AI will flag every potential issue before
          you submit to the county. ConstruBay &mdash; CSLB #1106798.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5"
        >
          <div>
            <label className="block text-white/70 text-sm mb-1">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full bg-white/10 border border-brand-tan/30 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] placeholder:text-white/40"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-white/70 text-sm mb-1">
                Email *
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full bg-white/10 border border-brand-tan/30 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] placeholder:text-white/40"
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-1">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="(415) 555-0000"
                className="w-full bg-white/10 border border-brand-tan/30 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] placeholder:text-white/40"
              />
            </div>
          </div>
          <div>
            <label className="block text-white/70 text-sm mb-1">
              Project Type *
            </label>
            <select className="w-full bg-white/10 border border-brand-tan/30 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] appearance-none cursor-pointer">
              <option value="" className="text-brand-dark">
                Select project type
              </option>
              {projectTypes.map((t) => (
                <option key={t} value={t} className="text-brand-dark">
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-white/70 text-sm mb-1">
              Project Address *
            </label>
            <input
              type="text"
              placeholder="123 Main St, Mill Valley, CA 94941"
              className="w-full bg-white/10 border border-brand-tan/30 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] placeholder:text-white/40"
            />
          </div>
          <div>
            <label className="block text-white/70 text-sm mb-1">
              Upload Plans (PDF, DWG)
            </label>
            <div className="border-2 border-dashed border-brand-tan/30 p-8 text-center cursor-pointer hover:border-[#C9A84C] transition-colors">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B5A48B"
                strokeWidth="1.5"
                className="mx-auto mb-3"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p className="text-white/60 text-sm">
                Click to upload or drag and drop
              </p>
              <p className="text-white/40 text-xs mt-1">
                PDF, DWG, DXF up to 50MB
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#C9A84C] text-white font-bold text-lg py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Submit for Free Analysis
          </button>
          <p className="text-white/40 text-xs text-center">
            Your information is secure and will not be shared. ConstruBay CSLB
            #1106798.
          </p>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/80 border-t border-brand-tan/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-brand-tan font-semibold mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-brand-tan/30"
              >
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Eliminate Permit Delays?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Whether you are building an ADU in Mill Valley, remodeling a home in
            Tiburon, or starting new construction in San Rafael, our
            PlanPass.ai analysis gives you confidence that your plans will pass
            review. ConstruBay is a licensed general contractor &mdash; CSLB
            #1106798 &mdash; serving Marin and Sonoma Counties.
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
            <Link href="/services/adu-builder-marin-county" className="hover:text-brand-tan transition-colors">
              ADU Builder Marin County
            </Link>
            <Link href="/services/adu-builder-mill-valley" className="hover:text-brand-tan transition-colors">
              ADU Builder Mill Valley
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
