import type { Metadata } from 'next'
import Link from 'next/link'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title:
    'The Mill Valley Fog Factor: Why Your Bathroom Remodel Needs More Than a Nice Vanity | ConstruBay',
  description:
    "Mill Valley's fog belt creates moisture challenges national bathroom remodel blogs ignore. Licensed Marin contractor on fog-rated ventilation, thermal-break windows, heated floors, SASM sewer lateral rules, and preventing dry rot. CSLB #1106798.",
  alternates: {
    canonical:
      'https://www.construbay.com/blog/bathroom-remodel-mill-valley-fog-moisture-2026',
  },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'What CFM ventilation fan do I need for a Mill Valley bathroom?',
    answer:
      'Code minimum is 50 CFM continuous or 80 CFM intermittent, but in a fog-belt climate we typically specify 110–150 CFM with a humidity-sensing switch. Under-sizing ventilation is the single most common cause of premature bathroom deterioration in Marin.',
  },
  {
    question: 'Are heated floors worth it in Mill Valley?',
    answer:
      'Yes, especially on foggy mornings when the air temperature is in the 50s well into summer. Electric radiant mats add about $8–$15 per square foot installed and dramatically improve daily comfort.',
  },
  {
    question: 'How do I know if I have dry rot behind my existing bathroom walls?',
    answer:
      "You often can't tell until demolition. During Discovery, we inspect visible indicators: soft baseboards, window trim staining, musty odor, floor flex near the tub or toilet. On most Mill Valley bathroom projects over 20 years old, some level of dry rot repair is budgeted into contingency.",
  },
  {
    question: 'Do I need a permit for a bathroom remodel in Mill Valley?',
    answer:
      'Yes, for any project involving plumbing changes, electrical changes, or structural modifications. Cosmetic updates (paint, fixtures in existing locations) often do not require a permit.',
  },
  {
    question: "What's the typical cost for a bathroom remodel in Mill Valley?",
    answer:
      'Cosmetic refreshes start around $20K–$35K. Mid-range full remodels run $45K–$85K. Spa-level master bathroom builds with premium fixtures, heated floors, and layout changes typically land $85K–$150K+.',
  },
]

const keyTakeaways = [
  'Mill Valley fog demands 110–150 CFM ventilation with a humidity sensor — code minimum is under-specified for this climate',
  'Thermal-break windows prevent condensation damage to sill, frame, and surrounding wall cavity',
  'Electric radiant floor heat is a 10x daily-comfort upgrade at $8–$15 per square foot installed',
  'Dry rot is common behind Mill Valley bathroom walls over 20 years old — always budget contingency',
  'The SASM sewer lateral rule can add $10K–$25K to a major bathroom remodel pulled in the service area',
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline:
    'The Mill Valley Fog Factor: Why Your Bathroom Remodel Needs More Than a Nice Vanity',
  description:
    "Mill Valley's fog belt creates moisture challenges national bathroom remodel blogs ignore. Fog-rated ventilation, thermal-break windows, heated floors, SASM rules, and dry rot prevention.",
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
  image: 'https://www.construbay.com/images/blog/hero-bathroom-fog-mill-valley.png',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://www.construbay.com/blog/bathroom-remodel-mill-valley-fog-moisture-2026',
  },
  url: 'https://www.construbay.com/blog/bathroom-remodel-mill-valley-fog-moisture-2026',
  keywords:
    'bathroom remodel Mill Valley, fog belt bathroom Marin, dry rot bathroom, Mill Valley ventilation CFM, heated floors Marin',
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
            name: 'The Mill Valley Fog Factor',
            url: 'https://www.construbay.com/blog/bathroom-remodel-mill-valley-fog-moisture-2026',
          },
        ]}
      />
      <FaqSchema items={faqs} />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>
        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/hero-bathroom-fog-mill-valley.png"
            alt="Spa-style Mill Valley master bathroom with freestanding tub overlooking misty redwood forest"
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
              Bathrooms &middot; Mill Valley
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
              The Mill Valley Fog Factor: Why Your Bathroom Remodel Needs More Than a Nice Vanity
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
                  9 min read
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
              Pick up any national bathroom remodel guide and you&apos;ll read about vanity styles, tile trends, shower door options, and the rising popularity of freestanding tubs. What you won&apos;t read: how to design a bathroom that survives twenty years of summer fog rolling over Mt. Tamalpais and into the walls of every home from Tam Junction up through Throckmorton Ridge. The standard national playbook doesn&apos;t apply here. Mill Valley&apos;s microclimate is one of the most moisture-aggressive residential environments in the Bay Area, and the bathroom is the room where that stress compounds fastest.
            </p>
            <p style={para}>
              We&apos;ve opened walls on enough Mill Valley bathrooms to know what the fog does when the spec is wrong. Rotted sill plates under tub surrounds that looked perfect from the tile side. Mold behind vanity backs where the original contractor used particleboard. Window frames blackened on the inside face from condensation no one ever wiped down. Floor joists compromised by a decade of a marginally functional shower pan. These aren&apos;t rare finds; they&apos;re common finds in homes built from the 1960s through early 2000s, and sometimes in homes as recent as the 2010s if the spec didn&apos;t account for the climate.
            </p>
            <p style={para}>
              A Mill Valley bathroom remodel that lasts isn&apos;t about picking the right vanity. It&apos;s about getting six specific moisture-management decisions right. This guide walks through each of them, the real cost of doing them correctly, and the hidden compliance costs &mdash; like the SASM sewer lateral rule &mdash; that most homeowners don&apos;t learn about until the permit is in plan-check.
            </p>

            <h2 style={sectionH2}>What the Mill Valley Fog Actually Does to a Bathroom Over 10 Years</h2>
            <p style={para}>
              Fog carries suspended water droplets that settle on every exterior surface and, through imperfect envelope seals, penetrate into wall cavities. Inside a bathroom, that ambient moisture loading compounds with the cooking-equivalent of daily shower and bath humidity. If ventilation is under-sized, humidity lingers long enough for mold and mildew to colonize the drywall paper inside the shower wall. If the window spec is cheap, condensation accumulates on interior sills and runs down into the wall cavity every fog morning. If the cabinet spec is particleboard, the first small plumbing leak saturates the cabinet box, which then absorbs enough ambient moisture from the room that the cabinet never dries out.
            </p>
            <p style={para}>
              The failure mode is slow. A Mill Valley bathroom built to the wrong spec often looks fine at year five, acceptable at year seven, and visibly compromised by year ten &mdash; warped baseboards, discolored grout, musty smell no cleaning reaches. By year fifteen, there is usually dry rot somewhere. By year twenty, the repair is typically a full gut. The math on getting the spec right up front versus repairing it later is overwhelmingly in favor of the up-front spend.
            </p>

            <h2 style={sectionH2}>Ventilation Done Right &mdash; CFM Specifications for Fog-Belt Bathrooms</h2>
            <p style={para}>
              California code requires a minimum of 50 CFM continuous or 80 CFM intermittent bath exhaust. In a fog-belt bathroom, those minimums are under-specified. We typically spec 110 to 150 CFM with a humidity-sensing switch, and on larger master bathrooms with a separate shower compartment and a water closet we frequently use two fans on independent controls. The humidity sensor matters: a timer-based fan runs too short and leaves residual moisture; a manual switch gets forgotten. Humidity sensors run the fan until the relative humidity drops back below a setpoint, which in practice is the difference between a 20-minute cycle that clears the room and a 7-minute cycle that doesn&apos;t.
            </p>
            <p style={para}>
              Ducting matters as much as fan size. A 150-CFM fan on a corrugated flex duct run through three elbows and forty feet of attic space moves about 60 CFM in reality. Rigid smooth-wall duct, insulated through unconditioned space, short runs, and a properly specified roof or gable cap are what the spec sheet assumes and most existing installations don&apos;t have. On every Mill Valley bathroom we remodel, we replace the duct along with the fan.
            </p>

            <h2 style={sectionH2}>Thermal-Break Windows &mdash; The Upgrade That Pays Back Forever</h2>
            <p style={para}>
              Every Mill Valley bathroom with a window has, at minimum, daily condensation potential on the glass during fog season. Standard dual-pane aluminum windows conduct temperature directly through the frame, keeping the interior surface cold, which is exactly what condensation wants. Thermal-break windows &mdash; aluminum with a non-conductive thermal break in the frame, fiberglass, or wood-clad composites &mdash; keep the interior frame surface closer to room temperature, which dramatically reduces condensation. Insulated glazing with argon or krypton fill keeps the glass interior surface warmer too. Together, these upgrades essentially eliminate condensation under typical fog conditions.
            </p>
            <p style={para}>
              The premium over a commodity window runs 30 to 50 percent at the unit level, which on a typical bathroom window is $400 to $900 extra per opening installed. On a bathroom that should last twenty years, the payback on avoided sill and frame repair is immediate.
            </p>

            <h2 style={sectionH2}>Heated Floors in a Climate Where You Actually Need Them</h2>
            <p style={para}>
              Summer mornings in Mill Valley regularly sit in the low 50s into July. Winter mornings drop into the 40s. The tile floor you just paid for is not a floor you want to step on barefoot. Electric radiant mats installed under tile or engineered flooring add roughly $8 to $15 per square foot to the finished floor cost and run on a programmable thermostat that pre-warms the floor before you get out of bed. The operating cost on a standard 40-square-foot bathroom is a few dollars a month. The daily quality-of-life impact is meaningful in a way that most finish upgrades aren&apos;t.
            </p>
            <p style={para}>
              Hydronic radiant (hot-water loops) is the premium path and makes sense if you&apos;re already running hydronic heat elsewhere in the house or building a larger bathroom where the floor area justifies the upcharge. For most Mill Valley bathroom remodels, electric is the right answer.
            </p>

            <h2 style={sectionH2}>Dry Rot Prevention &mdash; What Most Contractors Don&apos;t Check</h2>
            <p style={para}>
              Dry rot in a Mill Valley bathroom is almost always a symptom, not the disease. The disease is usually one of three things: a failed shower pan or tile grout line that&apos;s leaked for years at a rate too slow to notice; a window that condensed every fog morning for a decade; or a sink cabinet that absorbed moisture under a slow-drip supply line fitting. When we open a bathroom during Discovery, we check the visible symptoms: soft baseboards (especially at corners behind the toilet and under the window), staining on window trim, flex in the floor near the tub or toilet, and a musty smell that persists after cleaning.
            </p>
            <p style={para}>
              On Mill Valley homes over twenty years old, we budget dry-rot contingency as a line item rather than hoping the framing opens clean. Honest estimating on this line separates fixed-scope contracts that hold from ones that don&apos;t. If the framing is clean, the contingency is returned or redirected. If it isn&apos;t, the work is already budgeted and nobody is scrambling to fund an emergency change order.
            </p>

            <h2 style={sectionH2}>Moisture-Rated Fixtures, Finishes &amp; Grout &mdash; The 10-Year Test</h2>
            <p style={para}>
              Three material decisions carry the bathroom for its full service life. Cabinet substrate: marine-grade plywood or at minimum moisture-rated MDF for the vanity and any linen or medicine cabinet. Particleboard looks identical on day one and fails within five years in a fog-belt bathroom. Shower substrate: a cement-board or waterproof foam system (Schluter Kerdi, Wedi, or equivalent) instead of green-board drywall. The upgrade cost is minor; the protection against pan and wall failure is substantial. Grout: epoxy grout in the wet areas, or at minimum a premium cementitious grout with a quality sealer maintained on a known schedule. Standard unsealed cement grout is the failure point on most ten-year-old Mill Valley showers.
            </p>
            <p style={para}>
              None of these are aesthetic decisions. They all live behind the tile where no one will ever see them, which is why most homeowners never ask about them and most contractors never volunteer them. We make them an explicit line item on every Mill Valley bathroom project.
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
                Planning a Mill Valley Bathroom Remodel?
              </p>
              <h3 style={{ fontFamily: CG, fontSize: '28px', fontWeight: 300, color: '#ffffff', marginBottom: '16px' }}>
                We&apos;ll Walk Your Bathroom and Flag the Hidden Risks
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
                Thirty minutes on-site. We&apos;ll flag visible dry-rot risk, assess ventilation, check for SASM exposure, and give you a clear next step &mdash; no pressure.
              </p>
              <Link href="/request-a-bid" style={ctaButton}>
                Discuss Your Project
              </Link>
            </div>

            <h2 style={sectionH2}>SASM and the Sewer Lateral Surprise</h2>
            <p style={para}>
              The Sewerage Agency of Southern Marin covers Mill Valley and several neighboring communities, and enforces a private sewer lateral compliance program. When a major bathroom remodel is pulled on a property inside the SASM service area, the lateral serving the property is subject to testing and, if it fails, repair or replacement. On Mill Valley homes with clay-tile laterals, mature trees near the lateral path, or original installations from before 1980, failure rates are high enough that we plan for them rather than hope against them.
            </p>
            <p style={para}>
              Replacement cost runs $10,000 to $25,000, and can exceed that range when the lateral crosses a driveway, a hillside section, or a landscape feature. We cover this cost driver in much more detail in our{' '}
              <Link href="/blog/kitchen-remodel-cost-mill-valley-2026" style={linkStyle}>
                Mill Valley kitchen remodel cost guide
              </Link>
              {' '}&mdash; the mechanics are identical for bathroom projects. Critical takeaway: get the test done during the Discovery phase, before scope is locked, so a potential replacement lands as a planned line item rather than a mid-project emergency.
            </p>

            <h2 style={sectionH2}>Typical Mill Valley Bathroom Remodel Cost Ranges (2026)</h2>
            <p style={para}>
              Three tiers capture the vast majority of Mill Valley bathroom work. Cosmetic refresh: $20,000 to $35,000. New vanity, new mirror and lighting, new faucet and fixtures in existing locations, new toilet, fresh paint, maybe new flooring. No plumbing or electrical relocation; often no permit. Good fit for a bathroom where the layout works and the substrate is sound. Mid-range full remodel: $45,000 to $85,000. New tile surround, new tub or shower pan, new vanity with moisture-rated substrate, new ventilation to fog-belt spec, new moisture-rated window, one or two plumbing relocations. Permit required. This tier covers most primary-bathroom remodels on Mill Valley homes built 1970 through 2005. Spa-level master bath: $85,000 to $150,000+. Layout reconfiguration, large walk-in shower with multiple heads, soaking tub, heated floors, thermal-break windows, custom vanity, premium tile and stone, smart fixtures, and often integration with an adjacent closet or bedroom.
            </p>
            <p style={para}>
              Dry-rot contingency adds $5,000 to $20,000 to any tier depending on what opens up. SASM compliance adds $500 (test-only) to $25,000 (full replacement).{' '}
              <Link href="/services" style={linkStyle}>
                Our full services page
              </Link>{' '}
              covers all of this in scope detail if you&apos;re comparing apples to apples across contractors.
            </p>

            <h2 style={sectionH2}>Permit Requirements</h2>
            <p style={para}>
              You need a permit for any bathroom project involving plumbing changes, electrical changes, or structural modifications. Mill Valley is consistent on this. Cosmetic-only updates in existing locations &mdash; paint, a new mirror, a new light fixture in the existing box, a new vanity that reuses the existing plumbing stub-outs &mdash; often don&apos;t require a permit, though we confirm the specific scope in Discovery and pull a permit when there&apos;s any ambiguity.
            </p>
            <p style={para}>
              Our full five-phase process &mdash; Discovery, Design, Permit, Build, Handover &mdash; is detailed on the{' '}
              <Link href="/process" style={linkStyle}>
                process page
              </Link>
              . Permits are typically the rate-limiting step on a Mill Valley bathroom; well-prepared submittals clear review in two to four weeks.
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
              'bathroom remodel Mill Valley',
              'Marin fog belt',
              'bathroom ventilation CFM',
              'thermal break windows',
              'dry rot prevention',
              'SASM sewer lateral',
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
              Start with a Fog-Belt Feasibility Review
            </p>
            <h3 style={{ fontFamily: CG, fontSize: '32px', fontWeight: 300, color: '#ffffff', marginBottom: '16px' }}>
              Build a Bathroom That Lasts 20 Years
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
              Complimentary 30-minute consultation. We&apos;ll inspect visible moisture risk, verify ventilation, flag SASM exposure, and scope a bathroom built for Mill Valley&apos;s climate.
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
