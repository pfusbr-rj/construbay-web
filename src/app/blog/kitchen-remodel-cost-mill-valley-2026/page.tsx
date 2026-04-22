import type { Metadata } from 'next'
import Link from 'next/link'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title:
    'Kitchen Remodel Costs in Mill Valley 2026: Why Marin Prices Run 40–60% Above National Averages | ConstruBay',
  description:
    'Real 2026 kitchen remodel pricing in Mill Valley: $50K–$200K+ ranges, cost-per-square-foot breakdowns, fog-belt material selection, and the Southern Marin sewer lateral rule that surprises homeowners. Licensed GC, CSLB #1106798.',
  alternates: {
    canonical: 'https://www.construbay.com/blog/kitchen-remodel-cost-mill-valley-2026',
  },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'Why are kitchen remodels in Mill Valley so much more expensive than the national average?',
    answer:
      'Three reasons: skilled labor rates in Marin are 40–60% higher than national averages, coastal and hillside building codes add engineering and material requirements, and the permit process typically adds $3,000–$8,000 to most projects.',
  },
  {
    question: 'How long does a kitchen remodel take in Mill Valley?',
    answer:
      'Cosmetic refreshes take 6–8 weeks. Mid-range remodels run 8–12 weeks. Full remodels with layout changes typically take 12–16 weeks. Permit review can add 2–4 weeks depending on scope.',
  },
  {
    question: 'Do I need a permit for a kitchen remodel?',
    answer:
      'Yes, for any project involving electrical changes, plumbing changes, structural modifications, or gas line work. Cosmetic-only refreshes (paint, hardware, cabinet refacing) often do not require a permit. We confirm permit requirements in the Discovery phase.',
  },
  {
    question: "What's the sewer lateral rule and does it apply to me?",
    answer:
      'The Sewerage Agency of Southern Marin (SASM) enforces rules requiring private sewer lateral testing (and often replacement) when a major remodel is pulled on a property. If your home is in the SASM service area, this can add $10K–$25K to the project. We verify this during Discovery.',
  },
  {
    question: 'Can I get a fixed-price bid for a Mill Valley kitchen remodel?',
    answer:
      'Yes. ConstruBay contracts are fixed-scope — the price locked at contract signing is the price you pay for the agreed scope. That is different from cost-plus contracts, which pass cost overruns to you.',
  },
]

const keyTakeaways = [
  'Real Mill Valley kitchen remodel ranges span $25K for cosmetic refresh to $200K+ for luxury gut-renovation — 40–60% above national averages',
  'Cabinet and countertop selections typically account for 30–40% of total project cost',
  'The Southern Marin sewer lateral rule (SASM) can add $10K–$25K to any major remodel pulled in the service area',
  'Fog-belt material selection is not aesthetic — it protects your investment over a 10-year horizon',
  'Fixed-scope contracts eliminate the biggest cost surprise: mid-project change orders on a cost-plus structure',
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline:
    'Kitchen Remodel Costs in Mill Valley 2026: Why Marin Prices Run 40-60% Above National Averages',
  description:
    'Real 2026 kitchen remodel pricing in Mill Valley: $50K-$200K+ ranges, cost-per-square-foot breakdowns, fog-belt material selection, and the Southern Marin sewer lateral rule.',
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
  image: 'https://www.construbay.com/images/blog/hero-kitchen-mill-valley-cost.png',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.construbay.com/blog/kitchen-remodel-cost-mill-valley-2026',
  },
  url: 'https://www.construbay.com/blog/kitchen-remodel-cost-mill-valley-2026',
  keywords:
    'kitchen remodel Mill Valley, kitchen remodel cost Marin, Mill Valley kitchen renovation 2026, Marin kitchen contractor, SASM sewer lateral',
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
            name: 'Kitchen Remodel Costs in Mill Valley 2026',
            url: 'https://www.construbay.com/blog/kitchen-remodel-cost-mill-valley-2026',
          },
        ]}
      />
      <FaqSchema items={faqs} />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>
        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/hero-kitchen-mill-valley-cost.png"
            alt="Luxury Marin County kitchen with quartz island and brass hardware at golden hour"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)',
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
              Kitchens &middot; Mill Valley
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
              Kitchen Remodel Costs in Mill Valley 2026: Why Marin Prices Run 40&ndash;60% Above National Averages
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
              The national-average kitchen remodel costs $27,000 to $35,000. That number appears in roughly every kitchen-remodel blog post published in the last ten years. In Mill Valley, it is also almost entirely useless. Real kitchen remodel costs in Marin County in 2026 start at $50,000 for a modest refresh and climb past $200,000 for a full luxury gut-renovation &mdash; running 40 to 60 percent above the national average, and sometimes more.
            </p>
            <p style={para}>
              The gap isn&apos;t arbitrary, and it isn&apos;t the result of contractors charging more because they can. Skilled labor rates in Marin run significantly higher than the national median; coastal and hillside building codes add structural and material requirements that flatland projects don&apos;t face; and the Bay Area material-logistics chain adds meaningful cost at every stage. Understanding where your money actually goes &mdash; and where the hidden costs hide &mdash; is the difference between a budget that holds and one that bleeds.
            </p>
            <p style={para}>
              This guide breaks down real 2026 kitchen remodel ranges for Mill Valley, explains the cost-per-square-foot reality, and surfaces the Southern Marin sewer lateral rule that catches most homeowners off guard. We are a{' '}
              <Link href="/services" style={linkStyle}>
                licensed Marin general contractor
              </Link>{' '}
              with 150+ completed projects. The numbers below reflect what we actually see in the field, not a national averaging exercise.
            </p>

            <h2 style={sectionH2}>What a Kitchen Remodel Actually Costs in Mill Valley in 2026</h2>
            <p style={para}>
              We group Mill Valley kitchen remodels into four tiers. The tier determines the cost range, the timeline, the permit path, and most importantly the scope definition. &ldquo;Mid-range&rdquo; and &ldquo;luxury&rdquo; sound subjective; the underlying scope work is not.
            </p>

            <h3 style={sectionH3}>Cosmetic refresh &mdash; $25,000 to $45,000</h3>
            <p style={para}>
              New paint, new hardware, cabinet refacing or respraying, new countertops on existing cabinet boxes, new backsplash, new faucet, new light fixtures in existing locations. No layout changes, no appliance upgrades that require a new gas line or electrical circuit, no permit in most cases. This tier is the right move for a kitchen that is structurally sound and well-laid-out but visually tired. The 6-to-8-week timeline fits most family schedules, and the budget rarely needs a contingency beyond 10 percent.
            </p>

            <h3 style={sectionH3}>Mid-range remodel &mdash; $45,000 to $80,000</h3>
            <p style={para}>
              New semi-custom cabinetry on the existing footprint, quartz or butcher-block counters, a full backsplash, new appliances (including dishwasher and range), undercabinet lighting, new recessed lighting, one plumbing relocation (typically the sink), and new finished flooring. A permit is required for the electrical and plumbing work. This is the most common tier we see in Mill Valley homes built in the 1970s through early 2000s: the bones are good, the kitchen needs to be pulled forward thirty years.
            </p>

            <h3 style={sectionH3}>Full remodel with layout changes &mdash; $80,000 to $120,000</h3>
            <p style={para}>
              Wall removal (including any structural analysis and new headers), new island, relocated plumbing and gas lines, new electrical panel sub-feed if required, fully custom cabinetry, premium counters (quartzite, full-slab backsplash, waterfall edges), professional-grade appliance package, new ventilation that actually moves 600+ CFM, hardwood or large-format tile flooring, and meaningful integration with adjacent dining and living spaces. Permit scope expands to structural, electrical, plumbing, and mechanical. Timeline runs 12 to 16 weeks on a clean execution. This is where most homeowners who are &ldquo;doing it right this time&rdquo; land.
            </p>

            <h3 style={sectionH3}>Luxury and gut-renovation &mdash; $120,000 to $200,000+</h3>
            <p style={para}>
              Full demolition down to studs, layout reconfiguration, new windows (often thermal-break fog-belt spec), new structural openings, architect-designed cabinetry with specialty interiors, top-tier appliance package (Sub-Zero, Wolf, Miele, La Cornue territory), large-format natural stone counters and backsplashes, integrated task and accent lighting, premium flooring integrated with adjacent spaces, and often HVAC rebalancing for the whole level. Every trade is on the project for 14 to 20 weeks. For estate-scale homes in the{' '}
              <Link href="/services" style={linkStyle}>
                Mill Valley hillside, Tiburon, or Belvedere
              </Link>
              , this tier is the floor, not the ceiling.
            </p>

            <h2 style={sectionH2}>Why Marin Runs 40&ndash;60% Above National Averages</h2>
            <p style={para}>
              The national-average number is national for a reason: it averages across markets where skilled labor is plentiful, permits are quick, and site conditions are forgiving. None of those assumptions hold in Marin. Four specific drivers explain most of the premium.
            </p>
            <p style={para}>
              First, skilled labor rates. Bay Area journeyman electrician, plumber, HVAC, cabinetmaker, and finish carpenter rates run 40 to 60 percent above the national median. These are real wages paid to skilled tradespeople who could work in San Francisco for more and choose to work in Marin because they live here. A contractor who tells you they can beat those rates is either using unlicensed subs, hiring green apprentices, or not actually completing the work at the level you think you&apos;re paying for.
            </p>
            <p style={para}>
              Second, coastal and hillside building codes. Mill Valley sits in a high-wildfire-hazard zone with portions of the hillside in the Wildland-Urban Interface. Material specifications &mdash; non-combustible siding, Class A roofing, tempered glass, ember-resistant vents &mdash; all cost more. Thermal-break windows for fog-belt performance run 30 to 50 percent above commodity windows. These aren&apos;t optional; they&apos;re the spec Mill Valley building departments enforce on anything touching a structural wall.
            </p>
            <p style={para}>
              Third, permit cost and process overhead. A full Mill Valley kitchen remodel permit typically runs $3,000 to $8,000 in hard fees when plumbing, electrical, and mechanical are all pulled, with plan-check and inspection loads that require dedicated project-manager time. Building that overhead into a project-cost conversation up front is what prevents a &ldquo;surprise&rdquo; line item three weeks in.
            </p>
            <p style={para}>
              Fourth, logistics and storage. Cabinetry staged in a driveway for two weeks gets damaged. Counter slabs staged indoors require room no 1970s floor plan includes. Appliance deliveries scheduled to the trade-off day almost never hold on the first try. Every one of these logistical realities costs money, and in a market where the delivered cost of a Wolf range is $12,000 and the cost of replacing a damaged slab is $4,000, the logistics budget is not optional.
            </p>

            <h2 style={sectionH2}>Where Your Money Actually Goes</h2>
            <p style={para}>
              On a well-executed $100,000 Mill Valley kitchen remodel, the budget allocates roughly as follows &mdash; and this distribution is remarkably stable across the tiers above, with the absolute numbers scaling.
            </p>
            <p style={para}>
              Cabinetry and counters: 30 to 40 percent. This is the largest single budget line on almost every project, and it&apos;s where finish-level choice has the biggest cost multiplier. Semi-custom cabinets at $400 per linear foot versus fully custom at $1,000+ per linear foot is a $20,000 decision on an average-sized kitchen.
            </p>
            <p style={para}>
              Appliances: 15 to 25 percent. The prosumer step (GE Profile, KitchenAid) vs. professional tier (Wolf, Sub-Zero, Miele) vs. imported tier (La Cornue, Lacanche) is a 3x-to-5x multiplier. Homeowners who plan to stay in the home for a decade-plus typically find the professional tier worth it; homeowners prepping for sale typically don&apos;t.
            </p>
            <p style={para}>
              Labor: 20 to 30 percent. Electrical, plumbing, HVAC, framing, drywall, flooring, tile, cabinet install, countertop template-and-install, finish carpentry, paint. Every trade on a kitchen project is skilled labor, and every trade is billed at Marin rates.
            </p>
            <p style={para}>
              Permits, design, project management, contingency: 10 to 15 percent. Permits are the hard fees. Design can range from a free cabinetry layout through the cabinet vendor to a full architect engagement at 8 to 12 percent of project cost. Project management is the single highest-leverage line item on this list &mdash; the difference between a clean 14-week execution and a messy 22-week one is entirely a project-management function.
            </p>

            <h2 style={sectionH2}>The Southern Marin Sewer Lateral Rule (SASM) &mdash; The Hidden Cost Most Homeowners Miss</h2>
            <p style={para}>
              The Sewerage Agency of Southern Marin (SASM) serves Mill Valley, Sausalito, Almonte, Alto, and several unincorporated communities. SASM enforces a private sewer lateral (PSL) compliance program that requires homeowners to test &mdash; and often repair or replace &mdash; the sewer lateral serving their property when certain triggering events occur. A major kitchen remodel with plumbing modifications is, for purposes of the SASM rule, a triggering event.
            </p>
            <p style={para}>
              The cost range is wide. If your lateral tests clean, compliance is a $500 to $1,500 inspection-and-certification cost. If the lateral tests fail &mdash; which is common on homes built before 1980, common on any home with mature trees near the lateral path, and common on homes with clay-tile laterals &mdash; a full replacement from house to main can run $10,000 to $25,000, sometimes more if the lateral crosses a driveway, landscape feature, or a hillside stretch requiring shoring.
            </p>
            <p style={para}>
              We have two recommendations. One: get the lateral tested during the Discovery phase of any major Mill Valley remodel, before the scope is locked. Two: if the lateral is borderline (aging but functional), budget $15,000 to $20,000 in contingency for replacement rather than hoping the test clears. The cost of replacing a lateral as a planned scope item is substantially lower than the cost of doing it as a mid-project change order after the kitchen is already torn apart.
            </p>

            <h2 style={sectionH2}>Fog-Belt Material Selection</h2>
            <p style={para}>
              Mill Valley&apos;s fog belt produces persistent summer and shoulder-season humidity that accelerates wear on any moisture-sensitive finish. The kitchens that still look good ten years later share a specific material spec. Thermal-break windows with argon-filled insulated glazing prevent condensation on inside frames. Moisture-rated MDF or plywood cabinet boxes outperform particleboard by years. Marine-grade plywood in any exposed under-sink or sink-base area buys decades. Epoxy-sealed or quartz countertops shrug off what natural stone sometimes struggles with. 600+ CFM range-hood ventilation with a humidity-sensing cross-link to the whole-house ventilation system handles cooking moisture plus ambient fog load. Commercial-grade grout (epoxy or premium cementitious) on any tiled backsplash outlasts the standard spec by a factor of two or three.
            </p>
            <p style={para}>
              None of this is aesthetic cost. It&apos;s protection of a large capital investment in a climate that punishes the wrong spec. We include the fog-belt spec as a default on every Mill Valley project and make it an explicit line item so homeowners know what they&apos;re paying for.
            </p>

            <h2 style={sectionH2}>Realistic Timeline &mdash; 6 to 16 Weeks</h2>
            <p style={para}>
              Timeline maps to tier, with roughly these ranges: cosmetic refresh, 6 to 8 weeks; mid-range remodel, 8 to 12 weeks; full layout change, 12 to 16 weeks; luxury gut-renovation, 14 to 20 weeks. Permit review can add two to four weeks ahead of construction depending on scope. Our{' '}
              <Link href="/process" style={linkStyle}>
                end-to-end process
              </Link>{' '}
              shows exactly how those weeks are allocated, phase by phase.
            </p>
            <p style={para}>
              The biggest single timeline risk on a Mill Valley kitchen is the SASM sewer lateral testing window, because it gates plumbing sign-off. The second-biggest is long-lead appliance and cabinetry delivery &mdash; a Miele steam oven on backorder can stretch a project by six weeks if it wasn&apos;t ordered at permit submittal. Both risks are manageable with disciplined procurement; neither is manageable if noticed at the 10-week mark.
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
                Want a Real Number for Your Kitchen?
              </p>
              <h3 style={{ fontFamily: CG, fontSize: '28px', fontWeight: 300, color: '#ffffff', marginBottom: '16px' }}>
                Every Quote Starts with a Site Walk
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
                Thirty minutes on-site plus a Discovery review. You&apos;ll leave with a calibrated budget range tied to your kitchen, not a national average.
              </p>
              <Link href="/request-a-bid" style={ctaButton}>
                Book a Consultation
              </Link>
            </div>

            <h2 style={sectionH2}>Fixed-Scope vs. Cost-Plus &mdash; Why Pricing Structure Matters More Than the Number</h2>
            <p style={para}>
              Every kitchen remodel bid you receive in Mill Valley will be structured one of two ways. Fixed-scope means the contractor defines every line item in writing, prices them with committed vendors, and signs a contract at a single number. Cost-plus means the contractor tracks their actual costs as they go and adds a fixed percentage or fee &mdash; you pay what it costs, plus the markup, whatever that turns out to be.
            </p>
            <p style={para}>
              Cost-plus is attractive at first glance because the initial &ldquo;number&rdquo; always looks lower. It is also the structure that produces the horror stories you&apos;ve heard from friends whose $90,000 kitchen became $140,000 halfway through. The mechanism is straightforward: cost-plus passes every overrun and every mid-project change directly to you, and the contractor&apos;s margin (the percentage) goes up with the bigger number. The incentives line up against you.
            </p>
            <p style={para}>
              Fixed-scope inverts that. The price we lock at contract signing is the price you pay for the scope we agreed on. If we missed something in our scope that&apos;s on us, not you. We absorb the risk because we did the estimating work up front &mdash; the Discovery walk, the SASM test, the site-specific allowances for tree protection, panel capacity, and flooring demo. The resulting contract number is typically higher than the opening cost-plus &ldquo;estimate,&rdquo; and it is typically the same as or lower than the final cost-plus project total. Homeowners who&apos;ve lived through a cost-plus overrun almost never go back.
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

          <p style={{ ...para, marginTop: '48px' }}>
            For related reading, our{' '}
            <Link href="/blog" style={linkStyle}>
              blog archive
            </Link>{' '}
            includes deep-dives on Sonoma remodel pricing, kitchen-island design, and what most homeowners miss on their first contractor bid.
          </p>

          {/* Tags */}
          <div style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              'kitchen remodel Mill Valley',
              'kitchen cost Marin 2026',
              'Mill Valley kitchen renovation',
              'SASM sewer lateral',
              'fixed-scope remodel',
              'Marin labor rates',
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
              Start with a Free Site Walk
            </p>
            <h3 style={{ fontFamily: CG, fontSize: '32px', fontWeight: 300, color: '#ffffff', marginBottom: '16px' }}>
              Get a Real Mill Valley Kitchen Number
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
              Complimentary 30-minute consultation. We&apos;ll walk your kitchen, review permit scope, flag the SASM rule if it applies, and give you a calibrated budget range &mdash; no pressure.
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
