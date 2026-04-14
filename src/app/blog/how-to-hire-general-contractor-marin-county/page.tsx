import type { Metadata } from 'next'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'How to Hire a General Contractor in Marin County: What Luxury Homeowners Need to Know | ConstruBay',
  description: 'Hiring the wrong general contractor in Marin County is expensive and hard to undo. Here is how to evaluate, interview, and select a licensed GC for a luxury remodel.',
  alternates: { canonical: 'https://www.construbay.com/blog/how-to-hire-general-contractor-marin-county' },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'How do I verify a general contractor\'s license in California?',
    answer: 'California contractor licenses are verified through the Contractors State License Board (CSLB) at cslb.ca.gov. Enter the contractor\'s license number or business name to confirm active license status, license classification, bond status, and any disciplinary history. A valid California general contractor license for residential remodeling is Class B. Always verify before signing any contract — an unlicensed contractor cannot legally pull permits in Marin County.',
  },
  {
    question: 'What insurance should a general contractor carry in Marin County?',
    answer: 'A licensed general contractor in California is required to carry a contractor\'s bond ($25,000 minimum). For remodel projects in Marin County, reputable contractors also carry general liability insurance (minimum $1 million per occurrence) and workers\' compensation insurance covering all employees and subcontractors. Request certificates of insurance directly from the contractor\'s insurance carrier — not just a copy of the certificate — and confirm your property address is listed as additionally insured.',
  },
  {
    question: 'What should a general contractor contract include for a Marin County remodel?',
    answer: 'A complete general contractor contract for a Marin County remodel should include: a detailed scope of work with specifications, a fixed or itemized price with a clear change-order process, a project schedule with milestone dates, payment terms tied to completion milestones (not calendar dates), permit responsibility, subcontractor list, warranty terms (at minimum one year on workmanship), and a lien release provision at final payment. Contracts without a detailed scope and fixed-price structure leave homeowners exposed to cost overruns and scope disputes.',
  },
]

const keyTakeaways = [
  'Verify every contractor\'s California CSLB license number before any conversation about price — unlicensed contractors cannot pull permits legally',
  'The lowest bid is rarely the best bid in Marin County — scope gaps and allowance games account for most of the difference between low and high estimates',
  'Owner-led projects — where the principal contractor is on-site personally — deliver measurably different results than projects handed to a project manager mid-job',
  'References should be from projects of similar scope and value in Marin County specifically, not from other regions or different project types',
  'Fixed-scope contracts with milestone-based payments protect homeowners far better than time-and-materials arrangements',
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Hire a General Contractor in Marin County: What Luxury Homeowners Need to Know',
  description: 'Hiring the wrong general contractor in Marin County is expensive and hard to undo. How to evaluate, interview, and select a licensed GC for a luxury remodel.',
  datePublished: '2026-04-17',
  dateModified: '2026-04-17',
  author: {
    '@type': 'Person',
    name: 'Paulo Fernandes',
    jobTitle: 'Licensed General Contractor',
    url: 'https://www.construbay.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ConstruBay',
    logo: { '@type': 'ImageObject', url: 'https://www.construbay.com/images/svg/logo%20vector-02.svg' },
  },
  image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  url: 'https://www.construbay.com/blog/how-to-hire-general-contractor-marin-county',
  keywords: 'hire general contractor Marin County, general contractor Marin County, licensed contractor Marin County, luxury remodel contractor Bay Area, CSLB license Marin',
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.construbay.com' },
        { name: 'Blog', url: 'https://www.construbay.com/blog' },
        { name: 'How to Hire a General Contractor Marin County', url: 'https://www.construbay.com/blog/how-to-hire-general-contractor-marin-county' },
      ]} />
      <FaqSchema items={faqs} />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
            alt="Licensed general contractor reviewing plans with Marin County homeowner during luxury remodel consultation"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', maxWidth: '800px' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              General Contractor
            </p>
            <h1 style={{ fontFamily: CG, fontSize: 'clamp(26px, 4vw, 50px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.2 }}>
              How to Hire a General Contractor in Marin County: What Luxury Homeowners Need to Know
            </h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-24">

          {/* Meta row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/paulo/paulo-fernandes-01.png" alt="Paulo Fernandes" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(203,178,106,0.3)' }} />
            <div>
              <p style={{ fontFamily: MS, fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '2px' }}>Paulo Fernandes</p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>April 17, 2026</span>
                <span style={{ color: 'rgba(203,178,106,0.3)', fontSize: '10px' }}>·</span>
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>8 min read</span>
              </div>
            </div>
          </div>

          {/* Author box */}
          <div style={{ borderLeft: '3px solid #cbb26a', background: '#0a0a0a', padding: '1.5rem', marginBottom: '2rem' }}>
            <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Written by</p>
            <p style={{ color: '#ffffff', fontFamily: CG, fontSize: '1.3rem', marginBottom: '0.25rem' }}>Paulo Fernandes</p>
            <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Licensed General Contractor — CSLB #1106798</p>
            <p style={{ color: '#aaaaaa', fontFamily: MS, fontSize: '0.75rem', lineHeight: '1.6' }}>Founder of ConstruBay and PlanPass.ai. 15+ years of luxury residential construction experience in Marin County, California.</p>
          </div>

          <KeyTakeaways takeaways={keyTakeaways} />

          <article>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Start with License Verification — Before Anything Else
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              In California, a general contractor must hold an active Class B license from the Contractors State License Board to legally perform residential remodel work above $500. In Marin County, a licensed contractor is also the only party who can pull building permits on your behalf. An unlicensed contractor who claims they can handle permitting is either misinformed or operating illegally — either way, the risk lands on you as the property owner.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              License verification takes two minutes at cslb.ca.gov. Enter the contractor&apos;s license number, confirm the license is active and in good standing, check the license classification (B for general building), verify the bond is current, and review any disciplinary history. A contractor who has had license suspensions, citations, or consumer complaints on the CSLB record has a pattern that is unlikely to change on your project. This step should be completed before you invest time in an estimate conversation — not after.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Beyond the CSLB check, request certificates of insurance directly from the contractor&apos;s carrier — general liability (minimum $1 million per occurrence) and workers&apos; compensation covering all employees and subcontractors. Workers&apos; compensation is the item most often skipped by smaller operations; if a subcontractor is injured on your property without coverage, the liability can fall to you as the property owner. This is not a theoretical risk.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Why the Lowest Bid Is Rarely the Best Bid
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              In Marin County&apos;s remodel market, the gap between the lowest and highest bids on a well-scoped project can easily be 30–50 percent. Most of that gap is not margin — it is scope. Lower bids frequently achieve their price by omitting items the higher bids include: permit fees, engineering costs, allowances for unforeseen conditions in older homes, quality-tier specifications for fixtures and finishes, and the overhead of a legitimate business with properly insured employees.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The allowance game is the most common mechanism for low bids. An allowance is a placeholder amount in the contract for a material or fixture that has not yet been selected — for example, &quot;tile allowance: $8/sq ft&quot; when the tile the homeowner actually wants costs $28/sq ft. The bid looks competitive, but the real cost materializes in change orders once construction has started and the homeowner is locked in. Reviewing the allowances in competing bids and applying consistent material assumptions across all bids is the only way to compare them accurately.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              A contractor who bids a complete, well-specified scope at a higher number than competitors is often the lower true cost — because the allowances are honest, the permit costs are included, and the unforeseen conditions budget is real. ConstruBay presents fixed-scope contracts with itemized pricing and realistic allowances that reflect what clients actually select in Marin County&apos;s luxury tier. The number you approve is the number you pay.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Owner-Led vs. Project Manager Model: It Matters
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              A significant portion of Marin County&apos;s larger remodeling contractors operate on a project manager model: the principal contractor — the person you meet in the sales and contract phase — hands off to a project manager once construction starts. The PM is often a less experienced employee managing multiple jobs simultaneously. The principal may visit the project once a week, or less. The day-to-day decisions about quality, subcontractor work, and problem resolution are made by someone you did not evaluate when you chose the contractor.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The owner-led model — where the principal is personally present on the project — delivers a measurably different result. Quality decisions happen faster, problems are caught earlier, and the person accountable for the outcome is the person making the daily calls. Ask directly: who will be on-site daily during construction? Will you personally be present for tile setting, rough-in inspections, and finish work? If the answer is &quot;my PM handles day-to-day&quot; without a clear commitment from the principal, you are evaluating a different product than what you may be expecting.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              ConstruBay operates on an owner-led model. Paulo Fernandes is personally present throughout the construction phase of every project — not delegated to a project manager. This is a deliberate choice, not a size limitation, and it is the primary reason for ConstruBay&apos;s 4.9/5 Google rating across 47 reviews.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              References: What to Ask and What to Look For
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              References are the most underused evaluation tool in contractor selection. Most homeowners ask for references and then conduct a perfunctory call that yields little useful information. The right questions extract the information that actually predicts performance: Did the project finish within the original contract price? What were the change orders and why did they occur? Was the contractor present on-site personally, or was it a project manager? What was the biggest problem during construction and how did the contractor handle it? Would you hire them again?
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The reference projects should be of comparable scope and value. A contractor who has done excellent work on $30,000 bathroom remodels may not have the systems, subcontractor relationships, or management capacity for a $200,000 kitchen and primary suite project. Ask specifically for references on projects of similar scale to yours, ideally in Marin County, completed in the last two years.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Online reviews on Google provide a useful signal, but read the negative reviews as carefully as the positive ones. A pattern of communication complaints, schedule overruns, or change-order disputes in the negative reviews is more diagnostic than the aggregate star rating. A contractor with 47 reviews at 4.9 stars and no pattern of complaints has a different track record than one with 200 reviews at 4.5 stars where one in five mentions cost overruns.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              What a Complete Contract Should Include
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              A complete general contractor contract for a Marin County remodel protects the homeowner by eliminating ambiguity about scope, price, schedule, and responsibility. The contract should specify: a detailed scope of work with material specifications (not vague descriptions), a fixed price or clear itemization with honest allowances, a project schedule with milestone dates and a completion date, payment terms tied to construction milestones rather than calendar dates, permit responsibility (contractor should pull all permits), a subcontractor list, warranty terms of at minimum one year on workmanship, and a lien release provision at final payment.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Change orders — modifications to the original scope that carry a price adjustment — should require written approval before work proceeds. A contractor who performs work outside the original scope without a signed change order, then presents a supplemental invoice at the end of the project, is operating in a way that is difficult to dispute after the fact. The contract should be explicit that no additional work will be performed without a written change order signed by both parties.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Under California law, residential construction contracts above $500 must be in writing. Contracts above $5,000 must include specific disclosures. These minimums are floors, not standards — a well-drafted contract for a Marin County luxury remodel will be substantially more detailed. If a contractor proposes a contract that is vague about scope, uses time-and-materials pricing, or lacks milestone-based payment terms, those are negotiating points, not given conditions. For more on ConstruBay&apos;s approach to transparent project delivery, see our <a href="/for-homeowners" style={{ color: '#cbb26a', textDecoration: 'none' }}>homeowner information page</a>.
            </p>

          </article>

          {/* FAQ Section */}
          <div style={{ marginTop: '64px' }}>
            <h2 style={{ fontFamily: CG, fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '300', color: '#ffffff', marginBottom: '32px', lineHeight: 1.3 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(203,178,106,0.15)', paddingTop: '24px', paddingBottom: '24px' }}>
                  <p style={{ fontFamily: MS, fontSize: '13px', fontWeight: '400', color: '#ffffff', marginBottom: '10px', lineHeight: 1.5, letterSpacing: '0.02em' }}>
                    {faq.question}
                  </p>
                  <p style={{ fontFamily: MS, fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, letterSpacing: '0.03em' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(203,178,106,0.15)' }} />
            </div>
          </div>

          {/* Tags */}
          <div style={{ marginTop: '64px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['hire general contractor Marin County', 'general contractor Marin County', 'licensed contractor Marin County', 'luxury remodel contractor Bay Area', 'CSLB license Marin', 'contractor selection tips', 'remodel contract Marin County'].map(tag => (
              <span key={tag} style={{ fontFamily: MS, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)', border: '1px solid rgba(203,178,106,0.2)', padding: '4px 12px' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '64px', padding: '48px', border: '1px solid rgba(203,178,106,0.2)', textAlign: 'center' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Looking for a Licensed GC in Marin County?
            </p>
            <h3 style={{ fontFamily: CG, fontSize: '32px', fontWeight: '300', color: '#ffffff', marginBottom: '16px' }}>
              Let&apos;s Discuss Your Project
            </h3>
            <p style={{ fontFamily: MS, fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.8 }}>
              Complimentary consultation for luxury remodels in Marin and Sonoma County. CSLB #1106798.
            </p>
            <a
              href="https://calendly.com/construbay/initial-consultation-construbay"
              style={{ display: 'inline-block', border: '1px solid #cbb26a', color: '#cbb26a', fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '16px 48px', textDecoration: 'none' }}
            >
              Schedule Complimentary Assessment
            </a>
          </div>

          {/* Back link */}
          <div style={{ marginTop: '48px' }}>
            <a href="/blog" style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Articles
            </a>
          </div>

        </div>
      </main>
    </>
  )
}
