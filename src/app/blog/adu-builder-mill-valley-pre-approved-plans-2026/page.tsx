import type { Metadata } from 'next'
import Link from 'next/link'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Building an ADU in Mill Valley in 2026: The Pre-Approved Plan Advantage | ConstruBay',
  description:
    "Mill Valley's pre-approved ADU Master Plan program expedites permits before the January 2026 code update. Licensed ADU builder breaks down costs, setbacks, height limits, and the $50K Marin Housing grant. CSLB #1106798.",
  alternates: {
    canonical:
      'https://www.construbay.com/blog/adu-builder-mill-valley-pre-approved-plans-2026',
  },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'Can I build an ADU on any Mill Valley lot?',
    answer:
      'Most single-family and multi-family zoned lots qualify. Exceptions exist for lots within 30 feet of a watercourse (requires additional agency permits) and lots with slope or setback constraints. A feasibility review is the first step.',
  },
  {
    question: 'How long does a pre-approved ADU plan take to permit vs. a custom ADU?',
    answer:
      'Pre-approved Master Plans typically reduce plan-check time significantly because the structural design is already approved. Site-specific review for setbacks, foundation, fire safety, and tree removals still applies, but the overall process is measurably faster than a custom ADU submittal.',
  },
  {
    question: "What's the maximum ADU size I can build?",
    answer:
      'Studio and 1-bedroom ADUs can be up to 850 sf. Two-bedroom ADUs can be up to 1,000 sf. Regardless of local site conditions, state law guarantees at least 800 sf.',
  },
  {
    question: 'Do I have to live on the property to rent out my ADU?',
    answer:
      'For ADUs permitted between January 1, 2020 and December 31, 2024, owner-occupancy was not required by state law. Current rules may vary — we confirm owner-occupancy requirements on every project during the Discovery phase.',
  },
  {
    question: 'How close to the property line can I build?',
    answer:
      'Detached new-construction ADUs require a minimum 4-ft side and rear setback, and 15-ft front setback. Conversions of existing legal structures are exempt from setback requirements.',
  },
  {
    question: 'Do I need fire sprinklers in my Mill Valley ADU?',
    answer:
      "Fire sprinklers are not required in an ADU if they aren't required for the primary residence on the property.",
  },
]

const keyTakeaways = [
  "Mill Valley's pre-approved ADU Master Plan program shortens plan-check time dramatically by pre-clearing the structural design",
  'State law guarantees at least 800 sf; two-bedroom ADUs can go up to 1,000 sf in 2026',
  'Detached ADUs require 4-ft side/rear setbacks, 15-ft front setback, and 16-ft height (up to 25 ft if attached)',
  'A recorded deed restriction is required before the building permit issues',
  'The Marin Housing Authority ADU Grant offers up to $50,000 when the unit is rented to a qualifying low-income tenant',
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline:
    'Building an ADU in Mill Valley in 2026: The Pre-Approved Plan Advantage',
  description:
    "Mill Valley's pre-approved ADU Master Plan program expedites permits before the January 2026 code update. Licensed ADU builder breaks down costs, setbacks, height limits, and the $50K Marin Housing grant.",
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
  author: {
    '@type': 'Organization',
    name: 'ConstruBay',
    url: 'https://www.construbay.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ConstruBay',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.construbay.com/images/svg/logo%20vector-02.svg',
    },
  },
  image: 'https://www.construbay.com/images/blog/hero-adu-mill-valley.png',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://www.construbay.com/blog/adu-builder-mill-valley-pre-approved-plans-2026',
  },
  url: 'https://www.construbay.com/blog/adu-builder-mill-valley-pre-approved-plans-2026',
  keywords:
    'ADU builder Mill Valley, Mill Valley ADU Master Plan, pre-approved ADU Marin, Marin Housing Authority ADU Grant, Mill Valley ADU setbacks 2026',
}

const sectionH2: React.CSSProperties = {
  fontFamily: CG,
  fontSize: 'clamp(24px, 3vw, 34px)',
  fontWeight: 300,
  color: '#ffffff',
  marginTop: '56px',
  marginBottom: '20px',
  lineHeight: 1.3,
}

const sectionH3: React.CSSProperties = {
  fontFamily: CG,
  fontSize: 'clamp(19px, 2.2vw, 24px)',
  fontWeight: 300,
  color: '#ffffff',
  marginTop: '32px',
  marginBottom: '12px',
  lineHeight: 1.3,
}

const para: React.CSSProperties = {
  fontFamily: MS,
  fontSize: '14px',
  fontWeight: 300,
  color: 'rgba(255,255,255,0.65)',
  lineHeight: 2,
  letterSpacing: '0.03em',
  marginBottom: '16px',
}

const linkStyle: React.CSSProperties = {
  color: '#cbb26a',
  textDecoration: 'underline',
  textDecorationColor: 'rgba(203,178,106,0.4)',
  textUnderlineOffset: '3px',
}

const ctaWrap: React.CSSProperties = {
  marginTop: '48px',
  marginBottom: '48px',
  padding: '40px',
  border: '1px solid rgba(203,178,106,0.3)',
  backgroundColor: '#0a0a0a',
  textAlign: 'center',
}

const ctaButton: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: '#cbb26a',
  color: '#000000',
  fontFamily: MS,
  fontSize: '11px',
  fontWeight: 500,
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  padding: '16px 40px',
  textDecoration: 'none',
}

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.construbay.com' },
          { name: 'Blog', url: 'https://www.construbay.com/blog' },
          {
            name: 'Building an ADU in Mill Valley in 2026',
            url: 'https://www.construbay.com/blog/adu-builder-mill-valley-pre-approved-plans-2026',
          },
        ]}
      />
      <FaqSchema items={faqs} />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>
        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/hero-adu-mill-valley.png"
            alt="Modern detached ADU in a Mill Valley backyard surrounded by redwoods at golden hour"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)',
            }}
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', maxWidth: '900px' }}>
            <p
              style={{
                fontFamily: MS,
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#cbb26a',
                marginBottom: '16px',
              }}
            >
              ADUs &middot; Mill Valley
            </p>
            <h1
              style={{
                fontFamily: CG,
                fontSize: 'clamp(26px, 4vw, 50px)',
                fontWeight: 300,
                color: '#ffffff',
                lineHeight: 1.2,
              }}
            >
              Building an ADU in Mill Valley in 2026: The Pre-Approved Plan Advantage
            </h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-24">
          {/* Meta row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '40px',
              paddingBottom: '32px',
              borderBottom: '1px solid rgba(203,178,106,0.15)',
            }}
          >
            <div>
              <p style={{ fontFamily: MS, fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '2px' }}>
                ConstruBay
              </p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>
                  April 22, 2026
                </span>
                <span style={{ color: 'rgba(203,178,106,0.3)', fontSize: '10px' }}>&middot;</span>
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>
                  10 min read
                </span>
              </div>
            </div>
          </div>

          {/* Author box */}
          <div
            style={{
              borderLeft: '3px solid #cbb26a',
              background: '#0a0a0a',
              padding: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            <p
              style={{
                color: '#cbb26a',
                fontFamily: MS,
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              Published by
            </p>
            <p style={{ color: '#ffffff', fontFamily: CG, fontSize: '1.3rem', marginBottom: '0.25rem' }}>
              The ConstruBay Team
            </p>
            <p
              style={{
                color: '#cbb26a',
                fontFamily: MS,
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Licensed General Contractor &mdash; CSLB #1106798
            </p>
            <p style={{ color: '#aaaaaa', fontFamily: MS, fontSize: '0.75rem', lineHeight: 1.6 }}>
              Luxury residential construction across Marin, Sonoma &amp; Napa. 4.9 rating from 47 Google reviews.
            </p>
          </div>

          <KeyTakeaways takeaways={keyTakeaways} />

          <article>
            <p style={para}>
              Mill Valley has quietly become one of the most ADU-friendly small cities in Northern California. Between the local{' '}
              <Link href="/adu-marin-county" style={linkStyle}>
                Marin County ADU
              </Link>{' '}
              fee-waiver program, the Marin Housing Authority&apos;s $50,000 grant, and a pre-approved Master Plan catalog that shaves months off plan-check, a homeowner starting the conversation in April 2026 can realistically have a detached unit framed by fall &mdash; provided the work begins before the code update window closes.
            </p>
            <p style={para}>
              That window matters. California&apos;s January 2026 ADU Handbook update and Mill Valley&apos;s 2026 planning-code refresh rewrote parts of the owner-occupancy, fire-sprinkler, and setback language. Projects in the pipeline by mid-year are generally reviewed under the applicable 2026 rules; projects that slip into late-2026 or 2027 may face a changing target. If you&apos;ve been thinking about an ADU &mdash; guest house, income unit, aging-parent cottage, or pool-house-with-a-bed &mdash; this is the year to start.
            </p>
            <p style={para}>
              ConstruBay is a Marin-based general contractor (CSLB #1106798) serving homeowners across{' '}
              <Link href="/locations" style={linkStyle}>
                Mill Valley, Tiburon, San Rafael, Sausalito and the rest of our service area
              </Link>
              . This guide distills what we&apos;ve learned from 150+ completed projects, focused on the practical decisions Mill Valley property owners face in 2026.
            </p>

            <h2 style={sectionH2}>Why Mill Valley&apos;s Pre-Approved ADU Program Is Different</h2>
            <p style={para}>
              Most California cities now publish a list of &ldquo;pre-approved&rdquo; ADU plans under state law. What makes Mill Valley&apos;s program different is depth. The city has curated a catalog of detached ADU Master Plans from a short list of local architects, each pre-cleared for structural, energy, and seismic compliance. When a homeowner chooses from the catalog, plan-check skips directly to site-specific review &mdash; setbacks, foundation type, fire safety, tree impacts, utility tie-ins &mdash; and bypasses the weeks (sometimes months) normally spent re-validating the same structural calculations on every submittal.
            </p>
            <p style={para}>
              The practical effect: on a typical Mill Valley site, we&apos;ve seen pre-approved Master Plans move from complete application to issued permit in a fraction of the time a custom submittal takes. The exact delta varies by complexity, but the structural plan-check portion &mdash; historically the longest single stage &mdash; essentially disappears. That compresses the calendar, reduces soft costs (no architect fee for structural drawings already covered), and makes the timeline genuinely predictable.
            </p>
            <p style={para}>
              It&apos;s also worth understanding what the program doesn&apos;t do. It doesn&apos;t pre-approve your site. Setbacks, slope, tree protection, watercourse buffers, lot coverage, and utility capacity all still get reviewed on every application. And it doesn&apos;t waive any planning review triggered by design review districts, hillside overlays, or the Historic Overlay zone. If your parcel has unusual constraints, a pre-approved plan may not fit, and a custom design path remains the right answer.
            </p>

            <h2 style={sectionH2}>Pre-Approved vs. Custom ADU &mdash; How to Choose</h2>
            <p style={para}>
              The honest answer for most homeowners: if speed, cost certainty, and a well-designed unit matter more than a fully bespoke exterior, the Master Plan path wins. The catalog architects designed for Mill Valley&apos;s climate, its lot geometry, and its material palette, and the plans have been field-built enough times to flush out the details that typically surface only during construction.
            </p>
            <p style={para}>
              Custom ADU design is the right call when one of three conditions applies: the ADU is part of a larger estate-scale architectural program where the main residence and the accessory unit must read as a coordinated composition; the site has unusual constraints (extreme slope, dense tree cover, an odd parcel shape) that a catalog plan cannot accommodate; or the homeowner is committed to a specific architect relationship and the cost premium &mdash; typically $40,000 to $100,000 in additional design and plan-check fees &mdash; is worth it for the outcome.
            </p>
            <p style={para}>
              For everything in between, the pre-approved path is almost always the smarter use of budget. That money is better deployed on finishes, landscape integration, and the built-in storage and lighting that distinguish a premium ADU from a serviceable one.
            </p>

            <h2 style={sectionH2}>Mill Valley ADU Rules You Need to Know in 2026</h2>
            <p style={para}>
              California state law sets minimum standards that every local jurisdiction must allow. Mill Valley&apos;s local ordinance fills in the blanks within those state minimums. Here&apos;s what actually governs a 2026 project.
            </p>

            <h3 style={sectionH3}>Size limits</h3>
            <p style={para}>
              Studio and one-bedroom ADUs can be up to 850 square feet. Two-bedroom ADUs can be up to 1,000 square feet. Regardless of local lot-coverage, floor-area-ratio, or open-space rules, state law guarantees at least 800 square feet on any eligible lot. That 800-sf floor is important: it&apos;s what keeps an ADU project alive on a tight lot where lot-coverage math would otherwise kill it.
            </p>

            <h3 style={sectionH3}>Height limits</h3>
            <p style={para}>
              Detached ADUs are capped at 16 feet. Attached ADUs (sharing a wall with the primary residence) can go up to 25 feet, matching the primary-residence height allowance. The 16-foot limit is the reason most new detached ADUs in Mill Valley are single-story; if you want a two-story accessory structure, the attached path is usually the route.
            </p>

            <h3 style={sectionH3}>Setbacks</h3>
            <p style={para}>
              A new detached ADU requires a minimum 4-foot side and rear setback and a 15-foot front setback. Conversions of an existing legal structure &mdash; a garage, a basement, an approved outbuilding &mdash; are exempt from setback requirements, which is why garage conversions remain the fastest path to an ADU on a tight urban lot.
            </p>

            <h3 style={sectionH3}>Deed restriction requirement</h3>
            <p style={para}>
              Before the building permit issues, the city requires a recorded deed restriction stating that the ADU cannot be sold separately from the primary residence, and in most cases that the ADU cannot be used as a short-term rental (under 30 days). The restriction is straightforward to record but often surprises first-time ADU builders when it lands on the pre-permit checklist. Plan for it so it doesn&apos;t stall the permit clock.
            </p>

            <h3 style={sectionH3}>Parking rules</h3>
            <p style={para}>
              State law exempts ADUs from new parking requirements when the property is within one-half mile of public transit or within an architecturally designated historic overlay (the H-O zone in Mill Valley&apos;s case). Most of the Mill Valley flats and a large portion of the hillside parcels fall under one of these exemptions. Outside the exempt zones, one additional on-site parking space is typically required, though it can be tandem, on a driveway apron, or in an uncovered configuration.
            </p>

            <div style={ctaWrap}>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#cbb26a',
                  marginBottom: '16px',
                }}
              >
                Ready to Talk Feasibility?
              </p>
              <h3
                style={{
                  fontFamily: CG,
                  fontSize: '28px',
                  fontWeight: 300,
                  color: '#ffffff',
                  marginBottom: '16px',
                }}
              >
                Every Mill Valley ADU Starts with a Site Review
              </h3>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: '12px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '28px',
                  lineHeight: 1.8,
                  maxWidth: '36rem',
                  margin: '0 auto 28px',
                }}
              >
                We&apos;ll walk your site, measure setbacks, review HOA and zoning constraints, and tell you honestly whether a pre-approved plan will fit &mdash; before you spend a dollar on design.
              </p>
              <Link href="/request-a-bid" style={ctaButton}>
                Discuss Your Project
              </Link>
            </div>

            <h2 style={sectionH2}>The $50,000 Marin Housing Authority Grant</h2>
            <p style={para}>
              The Marin Housing Authority&apos;s ADU Grant Program is one of the most generous homeowner-facing housing subsidies in the Bay Area, and it&apos;s underused. Qualifying homeowners can receive up to $50,000 toward the cost of building or converting an ADU, in exchange for an agreement to rent the completed unit to a low-income tenant at an affordable rate for a fixed term (typically five to seven years, depending on the award tier).
            </p>
            <p style={para}>
              The math works. On a typical detached Mill Valley ADU project in the $400,000 to $550,000 range, a $50,000 grant reduces effective construction cost by 9 to 12 percent. Paired with the county&apos;s fee-waiver program (up to $2,500 for qualifying ADUs), the total headline savings can exceed $52,000. Rental income during the affordability period offsets the reduced market-rate differential, and at the end of the affordability term, the owner retains an unencumbered unit.
            </p>
            <p style={para}>
              The catches to know about: applications are competitive and cycled, so timing the submittal to an open funding round is important; the grant program has specific pre-approval checkpoints that have to be cleared before construction starts (not after); and the affordability covenant is recorded against the property for the duration. None of these are deal-breakers for most homeowners, but all of them need to be built into the project schedule from day one.
            </p>

            <h2 style={sectionH2}>Realistic Timeline &mdash; From Conversation to Certificate of Occupancy</h2>
            <p style={para}>
              The total timeline on a Mill Valley pre-approved ADU, from first conversation to certificate of occupancy, typically runs seven to eleven months. A fully custom detached ADU on a constrained site runs eleven to sixteen months. Here&apos;s how the phases break down in practice &mdash; and this is the same five-phase flow we describe on our{' '}
              <Link href="/process" style={linkStyle}>
                process page
              </Link>
              .
            </p>
            <p style={para}>
              Discovery and feasibility: one to two weeks. Site walk, measurements, HOA and zoning review, and a written feasibility summary with a calibrated budget range. Design and scope lock: three to six weeks on a pre-approved plan (site-adaptation and material selection only), eight to fourteen weeks on a custom submittal. Permit and approvals: six to ten weeks on a pre-approved plan, twelve to twenty weeks on a custom submittal, depending on whether planning review is triggered. Build: twelve to twenty-four weeks for a detached ADU, faster for a garage conversion, longer for a site with significant grading or retaining work. Handover and warranty: the final two weeks plus the ten-year workmanship warranty.
            </p>
            <p style={para}>
              The biggest timeline risk on any Mill Valley ADU is the permit phase. Homes in the Historic Overlay, on designated hillside parcels, or within protected-tree zones can trigger planning review that adds three to six months. We flag that risk in the Discovery phase specifically so homeowners aren&apos;t surprised.
            </p>

            <h2 style={sectionH2}>Typical ADU Cost Ranges in Mill Valley 2026</h2>
            <p style={para}>
              Cost is the question every homeowner asks first and the question general answers serve worst. Here are the ranges we actually see in 2026 on well-planned Mill Valley projects, assuming standard site conditions (no significant slope, no retaining walls over four feet, no major utility upgrades).
            </p>
            <p style={para}>
              Garage conversion (existing legal structure, setback-exempt): $185,000 to $260,000 for a complete conversion with new kitchen, bath, HVAC, and code-compliant egress. This is the cheapest path to a legal ADU on most Mill Valley lots and the fastest to permit and build.
            </p>
            <p style={para}>
              Detached pre-approved Master Plan ADU (400 to 600 sf, single-story): $310,000 to $420,000 installed, including site work for a standard flat lot. Pre-approved plans typically specify a defined finish package; upgrading to higher-end cabinetry, counters, and fixtures can add $30,000 to $60,000.
            </p>
            <p style={para}>
              Detached pre-approved Master Plan ADU (800 to 1,000 sf, two-bedroom): $420,000 to $575,000 installed. This is the sweet spot for a long-term rental or a full-time guest suite, and the math on the Marin Housing Authority grant works best at this size.
            </p>
            <p style={para}>
              Custom detached ADU (architect-designed, 800 to 1,200 sf, premium finishes, complex site): $575,000 to $900,000+ installed. This tier is where{' '}
              <Link href="/adu-marin-county" style={linkStyle}>
                estate-scale ADU projects in Marin
              </Link>{' '}
              live &mdash; caretaker cottages, pool houses with legal sleeping quarters, detached studios on larger lots. The cost premium over a pre-approved plan is substantial; the design latitude is also substantial.
            </p>
            <p style={para}>
              Site conditions change all of this quickly. A site with a 10-plus-percent slope, mature trees that must be preserved, an inadequate sewer lateral, or a panel upgrade can add $40,000 to $150,000 to any of the above ranges. We always budget a site-conditions contingency in the Discovery phase because the alternative is a mid-project change order.
            </p>

            <h2 style={sectionH2}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: '1px solid rgba(203,178,106,0.15)',
                    paddingTop: '24px',
                    paddingBottom: '24px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: MS,
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#ffffff',
                      marginBottom: '10px',
                      lineHeight: 1.5,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {faq.question}
                  </p>
                  <p
                    style={{
                      fontFamily: MS,
                      fontSize: '13px',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.6)',
                      lineHeight: 1.9,
                      letterSpacing: '0.03em',
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(203,178,106,0.15)' }} />
            </div>
          </article>

          {/* Tags */}
          <div style={{ marginTop: '64px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              'ADU builder Mill Valley',
              'Mill Valley ADU Master Plan',
              'Marin ADU 2026',
              'pre-approved ADU',
              'Marin Housing Authority Grant',
              'Mill Valley setbacks',
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: MS,
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(203,178,106,0.7)',
                  border: '1px solid rgba(203,178,106,0.2)',
                  padding: '4px 12px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* End CTA */}
          <div style={{ ...ctaWrap, marginTop: '64px' }}>
            <p
              style={{
                fontFamily: MS,
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#cbb26a',
                marginBottom: '16px',
              }}
            >
              Start with a Free Feasibility Review
            </p>
            <h3
              style={{
                fontFamily: CG,
                fontSize: '32px',
                fontWeight: 300,
                color: '#ffffff',
                marginBottom: '16px',
              }}
            >
              Build Your Mill Valley ADU in 2026
            </h3>
            <p
              style={{
                fontFamily: MS,
                fontSize: '12px',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '32px',
                lineHeight: 1.8,
                maxWidth: '34rem',
                margin: '0 auto 32px',
              }}
            >
              Complimentary 30-minute consultation. Site review, feasibility summary, and a calibrated budget range &mdash; no pressure, no cost.
            </p>
            <Link href="/request-a-bid" style={ctaButton}>
              Schedule Complimentary Assessment
            </Link>
          </div>

          {/* Back link */}
          <div style={{ marginTop: '48px' }}>
            <Link
              href="/blog"
              style={{
                fontFamily: MS,
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(203,178,106,0.6)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Articles
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
