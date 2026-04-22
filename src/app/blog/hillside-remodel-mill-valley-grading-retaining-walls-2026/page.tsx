import type { Metadata } from 'next'
import Link from 'next/link'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title:
    "Hillside Remodels in Mill Valley: What Most Homeowners Don't Know About Grading Permits, Soil Reports & Retaining Walls | ConstruBay",
  description:
    'Mill Valley hillside homes have rules no flatland project touches: grading permits, geotechnical reports, retaining wall surcharge design, rainy-season construction bans (Oct 15–Apr 15), and WUI fire safety. Licensed GC, CSLB #1106798.',
  alternates: {
    canonical:
      'https://www.construbay.com/blog/hillside-remodel-mill-valley-grading-retaining-walls-2026',
  },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'When do I need a grading permit in Mill Valley?',
    answer:
      'A grading permit is required for excavation, fill, or grading over 50 cubic yards, or for any grading on natural or finished slopes greater than 10%. Excavations for basements, footings, or piers tied to a valid building permit are exempt.',
  },
  {
    question: 'What is the rainy-season grading ban?',
    answer:
      'Mill Valley prohibits grading activity between October 15 and April 15 each year unless a special rainy-season grading permit is obtained from the Director of Public Works. All temporary and permanent erosion control measures must be in place before October 15 regardless.',
  },
  {
    question: 'Do I always need a geotechnical report?',
    answer:
      'For most hillside projects involving foundations, retaining walls over 4 feet, or any significant grading, yes. The geotechnical report drives the structural engineering for the entire project and is often the single most important pre-construction document on a hillside site.',
  },
  {
    question: 'When does a retaining wall require a building permit?',
    answer:
      'Walls over 4 feet (measured from bottom of footing to top of wall) always require a permit. Shorter walls require a permit when they support a surcharge — an additional load above the retained soil, such as a structure, driveway, or pool.',
  },
  {
    question: 'What is the Wildland-Urban Interface and how does it affect my remodel?',
    answer:
      "WUI is a fire-hardening designation that applies to homes in and near Marin's wildland areas. It triggers specific material requirements: Class A roofing, ember-resistant vents, non-combustible siding within 5 feet of the structure, and tempered-glass windows, among others. Most of the Mill Valley hillside is in the WUI zone.",
  },
]

const keyTakeaways = [
  'Grading permits trigger at 50 cubic yards of earthwork OR any grading on slopes greater than 10%',
  'Mill Valley enforces a rainy-season grading ban from October 15 to April 15 each year',
  'A geotechnical report is typically the single most important pre-construction document on any hillside site',
  'Retaining walls over 4 feet always require a permit; shorter walls require one when they carry a surcharge',
  'WUI fire-hardening requirements add material and engineering costs on almost every Mill Valley hillside remodel',
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline:
    "Hillside Remodels in Mill Valley: What Most Homeowners Don't Know About Grading Permits, Soil Reports & Retaining Walls",
  description:
    'Mill Valley hillside homes have rules no flatland project touches: grading permits, geotechnical reports, retaining wall surcharge design, rainy-season construction bans, and WUI fire safety.',
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
  image: 'https://www.construbay.com/images/blog/hero-hillside-remodel-mill-valley.png',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://www.construbay.com/blog/hillside-remodel-mill-valley-grading-retaining-walls-2026',
  },
  url: 'https://www.construbay.com/blog/hillside-remodel-mill-valley-grading-retaining-walls-2026',
  keywords:
    'hillside remodel Mill Valley, grading permit Marin, geotechnical report, retaining wall surcharge, WUI Marin, rainy season grading ban',
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
            name: 'Hillside Remodels in Mill Valley',
            url: 'https://www.construbay.com/blog/hillside-remodel-mill-valley-grading-retaining-walls-2026',
          },
        ]}
      />
      <FaqSchema items={faqs} />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>
        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/hero-hillside-remodel-mill-valley.png"
            alt="Modern hillside home under construction on a Mill Valley slope with Mt Tamalpais and fog in the background"
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
              Hillside &middot; Mill Valley
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
              Hillside Remodels in Mill Valley: What Most Homeowners Don&apos;t Know About Grading Permits, Soil Reports &amp; Retaining Walls
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
                  11 min read
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
              A Mill Valley hillside remodel is structurally, legally, and operationally a different project from a flat-lot remodel in Larkspur or Novato. The house looks similar on Zillow. The kitchen renovation sounds similar when you describe it to a friend. And then a geotechnical engineer walks the site, a grading plan gets submitted, a rainy-season erosion-control plan gets filed, and the project has a set of costs, timeline constraints, and compliance exposures that flatland remodels simply never face.
            </p>
            <p style={para}>
              We&apos;ve executed hillside remodels across the Mill Valley hillsides &mdash; from the lower slopes off Miller and Camino Alto up to the steeper parcels on Throckmorton Ridge and the Homestead Valley spur &mdash; and we&apos;ve seen what happens when a homeowner signs a bid from a contractor who doesn&apos;t understand these rules. Projects stall for months waiting for a geotech report that should have been started before design. October arrives and grading shuts down for six months mid-foundation. Retaining walls fail plan check because the structural calcs didn&apos;t account for surcharge. The costs in each of those scenarios are dramatic.
            </p>
            <p style={para}>
              This guide walks through the eight pieces of a Mill Valley hillside remodel that flatland projects don&apos;t touch, the cost adders each one represents, and the critical calendar constraint &mdash; the October 15 rainy-season cutoff &mdash; that drives the whole project schedule. If you&apos;re planning a hillside project in 2026 or thinking about one for 2027, this is the early reading to do before picking up the phone with an architect or a contractor.
            </p>

            <h2 style={sectionH2}>The Grading Permit Threshold</h2>
            <p style={para}>
              A grading permit is required in Mill Valley for excavation, fill, or grading totaling more than 50 cubic yards, or for any grading operation on a natural or finished slope greater than 10 percent. Excavations performed within the scope of a valid building permit &mdash; for basements, footings, or piers &mdash; are generally exempt from the grading permit requirement, but only if the earthwork is contained within the permitted footprint.
            </p>
            <p style={para}>
              Fifty cubic yards sounds like a lot until you&apos;re looking at a Mill Valley hillside lot. A modest pad cut for an ADU foundation, a driveway widening with some cut-and-fill, or a landscape terrace with significant earth movement can all reach the threshold quickly. And the 10-percent-slope trigger means that any earthwork on the sloped portion of a typical hillside parcel requires a grading permit regardless of quantity.
            </p>
            <p style={para}>
              The grading permit process includes a grading plan prepared by a licensed engineer, an erosion and sediment control plan, a soils report in most cases, and review by Public Works and Planning. The permit adds weeks to a schedule and thousands of dollars to a budget. Missing this trigger is one of the most expensive mistakes on a hillside project: the first time it surfaces is often when a neighbor calls the city during active earthwork.
            </p>

            <h2 style={sectionH2}>The Rainy-Season Grading Ban &mdash; October 15 to April 15</h2>
            <p style={para}>
              Mill Valley prohibits grading activity between October 15 and April 15 each year unless the Director of Public Works has issued a special rainy-season grading permit. The purpose is straightforward: erosion during the wet season is Mill Valley&apos;s single largest water-quality risk, and any disturbed earth on a hillside during a storm event is a loaded gun pointed at the creek system.
            </p>
            <p style={para}>
              In practice, the rainy-season ban is the most important constraint on hillside project scheduling. Temporary and permanent erosion-control measures must be in place before October 15 regardless of whether grading is complete. If your foundation pour is mid-September, you have a workable schedule. If your foundation pour slips to mid-October, you face a hard choice: a special rainy-season permit (not always granted, expensive when it is), or a six-month pause with an exposed site.
            </p>
            <p style={para}>
              Every hillside project schedule we build backs out from October 15. Demolition, excavation, and foundation work all need to be complete with site stabilization in place by that date. This typically drives an April-through-September active-earthwork window, and it means that projects starting Discovery in the summer are sometimes scheduled to break ground the following April &mdash; which sounds frustrating until you see what a sloppily scheduled fall-start project looks like in January.
            </p>

            <h2 style={sectionH2}>Geotechnical Reports</h2>
            <p style={para}>
              A geotechnical report (often just called a &ldquo;soils report&rdquo;) is prepared by a licensed geotechnical engineer and answers one question in rigorous detail: what does the soil and slope on this specific site allow you to build, and how? The report includes soil type and bearing capacity, slope stability analysis, groundwater assessment, expansion potential, recommended foundation design (spread footings, drilled piers, caissons), retaining-wall design parameters, and site-drainage recommendations.
            </p>
            <p style={para}>
              For any hillside project involving foundations, retaining walls over 4 feet, or significant grading, a geotech report is almost always required. It drives the structural engineering for the entire project, not just the hillside components. The structural engineer cannot complete foundation calcs without it; the grading plan cannot be finalized without it; the retaining wall design is not submittable without it.
            </p>
            <p style={para}>
              Cost on a typical Mill Valley hillside residential project: $4,500 to $9,000 for the soils report itself, higher on larger sites or sites requiring deep borings. Timeline: two to five weeks from site visit to final report, sometimes longer if the field investigation reveals findings that warrant additional boring. The single most common hillside-project scheduling mistake we see is treating the geotech report as a late-stage item. It should be one of the first three items on the Discovery-phase checklist.
            </p>

            <h2 style={sectionH2}>Retaining Walls &mdash; The 4-Foot Rule and What Surcharge Means</h2>
            <p style={para}>
              Retaining walls over 4 feet (measured from the bottom of footing to the top of the wall, not just the exposed face) always require a building permit in Mill Valley. Walls shorter than 4 feet require a permit when they carry a surcharge &mdash; meaning they retain soil that also supports an additional load above, such as a structure, a driveway, a pool deck, or a vehicle circulation area.
            </p>
            <p style={para}>
              Surcharge is the concept that catches homeowners off guard most often. A 3-foot-tall garden wall at the back of a flat yard is typically exempt. The same 3-foot wall supporting the edge of a driveway has a vehicle surcharge and requires a permit with full structural design. The wall supporting the soil beneath a pool has a substantial dead- and live-load surcharge and is structurally a very different design.
            </p>
            <p style={para}>
              On a typical Mill Valley hillside, most retaining work eventually carries some surcharge &mdash; either direct (a structure, deck, or driveway above) or lateral (soil bearing at an angle). The engineering on a permitted retaining wall accounts for dead load, live load, soil type, groundwater, seismic, and drainage. Cutting corners here is not a savings opportunity; it&apos;s a future failure. On a 40-foot, 6-foot-tall permitted retaining wall with structural reinforcement and drainage, typical installed cost in 2026 runs $18,000 to $40,000+, depending on access, soil conditions, and aesthetic finish.
            </p>

            <h2 style={sectionH2}>Erosion Control Plans &amp; Bonding</h2>
            <p style={para}>
              Every grading project in Mill Valley requires an erosion and sediment control plan prepared by the project engineer and implemented before October 15 each year. Temporary measures include silt fence, fiber rolls (wattles), erosion-control blankets, hydro-seeding, and stabilized construction entrances. Permanent measures include vegetation, drainage features, and long-term slope stabilization.
            </p>
            <p style={para}>
              On larger hillside projects, the city may require a grading bond to guarantee that erosion control, site cleanup, and any required off-site work are completed. Bond amounts are tied to project scope and are returned upon satisfactory completion. Build this into the cash-flow conversation &mdash; the bond money is recoverable, but it&apos;s not available during the project.
            </p>

            <h2 style={sectionH2}>Wildland-Urban Interface (WUI) Fire Safety</h2>
            <p style={para}>
              Most of the Mill Valley hillside sits in the Wildland-Urban Interface (WUI) fire-hardening zone. WUI triggers specific material and detailing requirements on every structure in the zone: Class A roofing (no wood shake), ember-resistant attic and foundation vents, non-combustible siding (stucco, fiber cement, metal) within 5 feet of the structure, tempered-glass windows in exposed orientations, no-overhang eaves or enclosed soffits, ignition-resistant deck materials, and defensible-space landscaping within 30 feet of the structure.
            </p>
            <p style={para}>
              For a remodel, the trigger is typically whether the project is expanding or substantially modifying the structure. A cosmetic interior kitchen redo doesn&apos;t trigger WUI upgrades on the roof. A whole-house remodel with an addition almost always does. The cost impact depends heavily on what&apos;s being modified. A reroof in WUI with a Class A assembly costs roughly 10 to 20 percent more than a comparable non-WUI assembly. New siding in the 5-foot buffer at a non-combustible spec is noticeably more expensive than wood. Tempered glass premium on affected openings is 25 to 50 percent above standard glazing.
            </p>
            <p style={para}>
              WUI is also the one category where we see the fewest corners cut. The Mill Valley fire department actively inspects and enforces, insurance underwriters pay attention, and the risk posture in this region has shifted permanently. Homeowners increasingly ask for a WUI-compliant spec even on scopes that don&apos;t strictly require it.
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
                Thinking About a Hillside Project?
              </p>
              <h3 style={{ fontFamily: CG, fontSize: '28px', fontWeight: 300, color: '#ffffff', marginBottom: '16px' }}>
                Start with a Feasibility Site Walk
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
                We&apos;ll walk your slope, flag grading and WUI exposure, identify whether a geotech report is needed, and draft a realistic calendar around the October 15 cutoff.
              </p>
              <Link href="/request-a-bid" style={ctaButton}>
                Book a Consultation
              </Link>
            </div>

            <h2 style={sectionH2}>Timeline Reality &mdash; Planning Around the October 15 Cutoff</h2>
            <p style={para}>
              The practical calendar on a Mill Valley hillside remodel is: Discovery and geotech report in fall or winter (December through February works well, since this is also the wet-weather observation window that strengthens the geotech findings); design, architecture, and structural engineering in winter and early spring; permit submittal in March or early April; construction start in April or May; earthwork and foundation complete by September; site stabilization in place before October 15; above-grade construction, mechanical rough-in, and finishes from October through the following spring or summer.
            </p>
            <p style={para}>
              A project that starts Discovery in the spring with hopes of breaking ground the same year is usually misaligned with this calendar. A project that starts Discovery in summer is almost always building the following April. Our five-phase{' '}
              <Link href="/process" style={linkStyle}>
                process
              </Link>{' '}
              is designed around this reality &mdash; we frontload the geotech, design, and permit stages so that when the favorable earthwork window opens, we&apos;re ready to execute.
            </p>

            <h2 style={sectionH2}>Typical Hillside Project Cost Adders</h2>
            <p style={para}>
              On a Mill Valley hillside remodel versus a comparable flat-lot project, these are the cost adders to build into the early budget conversation. Geotechnical report: $4,500 to $9,000. Grading permit and associated engineering: $8,000 to $25,000+ depending on scope. Retaining walls beyond standard: $18,000 to $100,000+ depending on wall count, height, surcharge, and access. Deeper or engineered foundation (piers, caissons) vs. standard spread footings: $20,000 to $150,000+. WUI material upgrades: 8 to 20 percent premium on affected exterior scope. Erosion control and possible bonding: $5,000 to $25,000. Site access, equipment logistics, and staging on a steep parcel: $10,000 to $40,000.
            </p>
            <p style={para}>
              On a typical full hillside remodel, these adders combined often represent 15 to 30 percent of total project cost &mdash; a real number, but a knowable one when the Discovery is done correctly. We serve homeowners across{' '}
              <Link href="/services" style={linkStyle}>
                all of Marin
              </Link>{' '}
              and most of our hillside experience is concentrated in the Mill Valley, Tiburon, Sausalito, and Belvedere corridors. Each sub-area has its own quirks &mdash; see the{' '}
              <Link href="/locations" style={linkStyle}>
                full service area map
              </Link>{' '}
              for coverage detail.
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
              'hillside remodel Mill Valley',
              'grading permit Marin',
              'geotechnical report',
              'retaining wall permit',
              'rainy season grading ban',
              'WUI fire hardening',
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
              Plan Your Hillside Project Right
            </p>
            <h3 style={{ fontFamily: CG, fontSize: '32px', fontWeight: 300, color: '#ffffff', marginBottom: '16px' }}>
              Ground Your Mill Valley Hillside Remodel in Reality
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
              Complimentary 30-minute consultation. We&apos;ll walk the slope, flag grading and WUI exposure, and map a schedule that doesn&apos;t collide with the October 15 cutoff.
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
