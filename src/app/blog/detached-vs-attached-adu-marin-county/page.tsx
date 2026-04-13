import type { Metadata } from 'next'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import HowToSchema from '@/components/schema/HowToSchema'

export const metadata: Metadata = {
  title: 'Detached vs. Attached ADU in Marin County: Which Is Right for You? | ConstruBay',
  description: 'Detached or attached ADU in Marin County? Compare costs, permits, and design trade-offs to find the right fit for your property. Expert guidance from ConstruBay.',
  alternates: { canonical: 'https://www.construbay.com/blog/detached-vs-attached-adu-marin-county' },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'What is the main difference between a detached and attached ADU in Marin County?',
    answer: 'A detached ADU is a fully separate structure from the main home — a standalone guest house, studio, or cottage on the same parcel. An attached ADU shares at least one wall with the primary residence, such as a converted garage addition or a room built onto the side of the house. Both are legal in most Marin jurisdictions under California state ADU law.',
  },
  {
    question: 'Which type of ADU costs more to build in Marin County?',
    answer: 'Detached ADUs generally cost 15–30% more than attached ADUs in Marin County because they require independent foundations, separate utility connections, and full exterior construction on all four sides. Attached ADUs share existing structure, which reduces foundation and framing costs. In 2026, expect detached ADU construction in Marin to run $375–$550 per square foot; attached ADUs typically run $290–$420 per square foot depending on the scope of work.',
  },
  {
    question: 'Do detached and attached ADUs require the same permits in Marin County?',
    answer: 'Both types require building permits. However, detached ADUs on single-family lots are processed ministerially in most Marin jurisdictions under California law — meaning no discretionary planning review for standard configurations. Attached ADUs that involve structural modifications to the main home may trigger additional review depending on scope. Both qualify for Marin County&apos;s ADU fee waiver program through December 31, 2026.',
  },
]

const keyTakeaways = [
  'Detached ADUs offer maximum privacy and design independence but cost 15–30% more than attached options in Marin County',
  'Attached ADUs permit faster and cost less when existing structure can be leveraged',
  'Lot size, setbacks, and existing coverage determine which type is actually feasible on your parcel',
  'Both detached and attached ADUs qualify for Marin County&apos;s fee waiver program through December 31, 2026',
  'A complimentary site feasibility assessment reveals which option works before any design fees are committed',
]

const howToSteps = [
  { name: 'Assess Your Lot', text: 'Review your parcel&apos;s setbacks, lot coverage limits, slope, and existing structure footprint to determine which ADU type fits within regulatory constraints.' },
  { name: 'Set Your Budget Range', text: 'Establish a realistic construction budget. Detached ADUs in Marin start around $375/sq ft; attached ADUs start around $290/sq ft. Factor in design, permits, and utility connection costs.' },
  { name: 'Evaluate Your Goals', text: 'Decide whether privacy, rental income, multigenerational use, or resale value is the primary driver. Detached units command higher rental premiums; attached units integrate more seamlessly into the primary residence.' },
  { name: 'Schedule a Feasibility Assessment', text: 'Work with a licensed Marin County contractor to confirm what is buildable on your specific parcel before committing to design costs.' },
  { name: 'Submit for the Right Permit Pathway', text: 'File under the correct permit track — ministerial for standard ADUs, or planning review if your project triggers discretionary conditions.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Detached vs. Attached ADU in Marin County: Which Is Right for You?',
  description: 'Detached or attached ADU in Marin County? Compare costs, permits, and design trade-offs to find the right fit for your property.',
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
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
  image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
  url: 'https://www.construbay.com/blog/detached-vs-attached-adu-marin-county',
  keywords: 'detached ADU Marin County, attached ADU Marin County, ADU builder Marin County, ADU cost Marin 2026, guest house Marin County',
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.construbay.com' },
        { name: 'Blog', url: 'https://www.construbay.com/blog' },
        { name: 'Detached vs. Attached ADU Marin County', url: 'https://www.construbay.com/blog/detached-vs-attached-adu-marin-county' },
      ]} />
      <FaqSchema items={faqs} />
      <HowToSchema
        name="How to Choose Between a Detached and Attached ADU in Marin County"
        description="A step-by-step guide to selecting the right ADU type for your Marin County property"
        steps={howToSteps}
      />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
            alt="Modern luxury detached guest house with landscaping — detached ADU in Marin County 2026"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', maxWidth: '800px' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              ADUs
            </p>
            <h1 style={{ fontFamily: CG, fontSize: 'clamp(26px, 4vw, 50px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.2 }}>
              Detached vs. Attached ADU in Marin County: Which Is Right for You?
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
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>April 21, 2026</span>
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
              What Is a Detached ADU?
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              A detached accessory dwelling unit is a fully independent structure built on the same parcel as the primary residence but sharing no walls with it. In Marin County, detached ADUs take many forms: a freestanding guest cottage at the rear of the lot, a studio above a detached garage, a caretaker&apos;s apartment adjacent to the main driveway, or a purpose-built rental unit positioned to maximize lot privacy. The defining characteristic is structural independence — its own foundation, its own roof, and typically its own utility connections.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              For luxury properties in Tiburon, Belvedere, Ross, and Mill Valley, a detached ADU functions as an amenity that elevates the overall property program. A well-designed detached guest house — one that shares architectural language with the main home, integrates into the landscape, and provides a complete living experience — adds resale value beyond its square footage because it adds a use the primary structure alone cannot provide. The premium buyers in Marin pay for estate-scale properties increasingly expects this level of programming.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Under California&apos;s 2026 ADU laws, detached ADUs on single-family residential lots are processed ministerially in most Marin jurisdictions — meaning the planning department cannot impose design discretion, neighbor objections are not part of the review, and approval is purely a function of code compliance. For properties in Marin&apos;s coastal zones, AB 462 now requires Coastal Development Permits to be processed within 60 days. See our <a href="/blog/adu-trends-marin-county-2026" style={{ color: '#cbb26a', textDecoration: 'none' }}>ADU trends and 2026 law update post</a> for the full regulatory landscape.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              What Is an Attached ADU?
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              An attached ADU shares at least one wall with the primary dwelling. Common configurations in Marin County include a converted attached garage, a new addition built onto the side or rear of the home, or an internal conversion of existing living space — a basement apartment, a lower floor unit, or a wing of the home reconfigured with a separate entrance. The shared wall typically means shared structural elements, which reduces the cost of construction relative to a fully detached structure.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Attached ADUs work well when the lot has limited usable area for a detached structure — a common constraint on smaller Marin hillside parcels where setbacks, slope, and existing coverage leave little room for a freestanding building. They also work well when the goal is multigenerational living rather than a fully independent rental unit, because the shared entry sequence or shared mechanical systems are less of a compromise when family members are the occupants.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The attached ADU&apos;s structural connection to the main home means permit review often involves the primary structure&apos;s systems — electrical panel capacity, plumbing main sizes, and structural framing all become relevant. This adds coordination to the process but does not necessarily add calendar time, particularly when the project is well-prepared before submittal. For a detailed look at Marin&apos;s permitting timeline, see our post on <a href="/blog/mill-valley-marin-county-ai-home-construction-permitting" style={{ color: '#cbb26a', textDecoration: 'none' }}>AI and construction permitting in Mill Valley and Marin County</a>.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Cost Comparison in Marin County
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              In 2026, construction costs in Marin County reflect the full weight of Bay Area labor premiums, long-lead material timelines, and the complexity of hillside and coastal site conditions. For detached ADUs, expect a range of $375–$550 per square foot of finished living area. The lower end applies to straightforward flat lots with simple utility connections and a modest design. The upper end reflects estate-quality finishes, complex site work, custom structural design, or significant grading.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Attached ADUs run $290–$420 per square foot for new construction additions; internal conversions of existing space can come in at $180–$280 per square foot when the existing structure is sound and utilities are accessible. The cost advantage of the attached option comes from shared foundation, shared roof structure for certain configurations, and proximity to existing electrical, plumbing, and HVAC systems.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Both types benefit from Marin County&apos;s ADU fee waiver program — up to $2,500 for eligible ADUs — extended through December 31, 2026. For ADUs under 750 square feet, California law eliminates most impact fees. Design fees, permit fees, soils reports, and utility connection costs are additional and should be budgeted separately from construction costs. ConstruBay provides itemized pre-construction estimates that break out each cost category before any commitment is made.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Permit Differences in Marin County
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              California&apos;s 2026 ADU laws treat both detached and attached ADUs as ministerial approvals on single-family lots — no public hearings, no neighbor notification, no discretionary design review in most configurations. Marin County requires electronic plan submittals through its digital portal. For projects that stay within ministerial parameters, the published timeline is approximately 15 days for prescreen and two to four weeks for initial plan review. SB 543 now requires agencies to determine application completeness within 15 business days.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Where permit paths diverge: detached ADUs over certain size thresholds in some Marin municipalities may trigger planning review. Attached ADUs that require structural modifications to the main home&apos;s lateral system may need engineering documentation that adds to the submittal package. Attached ADUs that convert garages on properties where parking is already constrained may need a parking study. The right answer depends on your specific parcel, and a pre-application meeting with the relevant jurisdiction is worth the time investment before design begins.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              For coastal parcels in Sausalito and Marin&apos;s coastal zones, AB 462 now establishes a 60-day Coastal Development Permit review window. This is a significant improvement from prior timelines and makes coastal ADU projects considerably more predictable than they were before 2026.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Which Is Right for Your Property?
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The right ADU type depends on four variables: lot feasibility, budget, intended use, and design priority. Choose detached when your lot has adequate usable area outside setbacks, when privacy is paramount for guests or tenants, when the goal is maximum rental income (detached units command 10–20% higher rents than comparable attached units in Marin), or when the architectural ambition is a cohesive estate that reads as a complete property program.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Choose attached when lot constraints eliminate the detached option, when budget is the primary constraint, when multigenerational proximity is the goal, or when existing structure — an attached garage, a basement, an unused wing — provides a strong foundation for conversion. Attached ADUs that leverage existing structure cost less and build faster than starting from scratch, and in Marin&apos;s hillside neighborhoods where buildable area is genuinely limited, they are often the only viable path.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Some properties support both — a JADU within the main structure and a detached ADU on the same parcel, which California law now explicitly permits. This dual-unit approach maximizes rental income and property utility, though it adds permitting complexity. If your goal is the highest-return ADU strategy for your parcel, a comprehensive feasibility study before design begins is the only way to know what is actually achievable.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Why ConstruBay for Your Marin County ADU?
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              ConstruBay is a licensed Marin County general contractor (CSLB #1106798) that has built detached ADUs, attached ADU additions, and garage conversion ADUs throughout Marin and Sonoma County. Every project is owner-led by Paulo Fernandes from feasibility assessment through final inspection. We do not hand projects to project managers — the licensed contractor who evaluates your lot is the same person who oversees construction.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Our pre-submission platform, PlanPass.ai, reviews permit packages for completeness before they reach the plan checker, eliminating the correction cycles that add months to Marin County ADU timelines. We deliver every project under a fixed-scope contract with transparent line-item pricing. No change-order surprises. No scope creep. The number you approve is the number you pay.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              ConstruBay&apos;s rating: 4.9/5 from 47 reviews on Google. Our clients are luxury homeowners who expect the level of communication, precision, and finish quality appropriate to Marin County&apos;s highest-value residential market. We work on properties where the standards are high and the details matter.
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
            {['detached ADU Marin County', 'attached ADU Marin County', 'ADU builder Marin County', 'ADU cost 2026', 'guest house Marin', 'ADU permit Marin', 'luxury ADU Marin'].map(tag => (
              <span key={tag} style={{ fontFamily: MS, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)', border: '1px solid rgba(203,178,106,0.2)', padding: '4px 12px' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '64px', padding: '48px', border: '1px solid rgba(203,178,106,0.2)', textAlign: 'center' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Ready to Build Your ADU?
            </p>
            <h3 style={{ fontFamily: CG, fontSize: '32px', fontWeight: '300', color: '#ffffff', marginBottom: '16px' }}>
              Let&apos;s Talk About Your Property
            </h3>
            <p style={{ fontFamily: MS, fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.8 }}>
              Complimentary feasibility assessment for ADU projects in Marin and Sonoma County.
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
