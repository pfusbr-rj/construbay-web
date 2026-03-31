import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '2026 Marin County Luxury Remodeling Cost Guide | ConstruBay',
  description: 'Transparent pricing ranges for luxury remodeling in Marin County. Kitchen, bathroom, full home, ADU, outdoor living. Fixed-scope contracts. CSLB #1106798.',
  alternates: { canonical: 'https://construbay.com/pricing' },
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const faqItems = [
  {
    q: 'How much does a kitchen remodel cost in Mill Valley?',
    a: 'Kitchen remodels in Mill Valley typically range from $85,000 to $175,000 depending on size, layout changes, and finish level. Our fixed-scope contracts guarantee this number does not change after signing.',
  },
  {
    q: 'Do you show prices upfront?',
    a: 'We show honest ranges based on real projects. Every client receives a fixed-scope proposal before any work begins — no surprises, no change orders.',
  },
  {
    q: 'How does PlanPass.ai affect my project cost?',
    a: 'PlanPass.ai analyzes your property\'s permit risk before we start. This prevents costly surprises from the building department, which is where most Marin projects blow their budgets.',
  },
  {
    q: 'What is included in the price?',
    a: 'Design, permit handling, material procurement, construction, project management, and our 5-year workmanship warranty.',
  },
  {
    q: 'Do you serve Sonoma and Napa Counties?',
    a: 'Yes. We serve Marin, Sonoma, and Napa Counties including Petaluma, Sebastopol, Santa Rosa, and Napa.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const localBizSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'ConstruBay',
  telephone: '+14159689494',
  email: 'paulo@construbay.com',
  url: 'https://construbay.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 El Paseo Ln',
    addressLocality: 'Mill Valley',
    addressRegion: 'CA',
    postalCode: '94941',
  },
  priceRange: '$$$$',
  areaServed: ['Marin County', 'Sonoma County', 'Napa County'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
  },
}

const services = [
  { name: 'Kitchen Remodel', range: '$85,000 – $175,000+', timeline: '8–14 weeks' },
  { name: 'Bathroom Remodel', range: '$45,000 – $120,000+', timeline: '6–10 weeks' },
  { name: 'Full Home Remodel', range: '$350,000 – $900,000+', timeline: '4–9 months' },
  { name: 'ADU Construction', range: '$175,000 – $450,000+', timeline: '10–18 weeks' },
  { name: 'Outdoor Living', range: '$75,000 – $200,000+', timeline: '6–12 weeks' },
]

const drivers = [
  {
    title: 'Permit Complexity',
    body: 'Marin County permitting is among the most demanding in California. Each project requires jurisdiction-specific filings, fire district coordination, and setback analysis. ConstruBay\'s PlanPass.ai pre-analyzes permit risk before the first dollar is spent — eliminating the building department surprises that derail most projects.',
  },
  {
    title: 'Material Level',
    body: 'The difference between a $95,000 kitchen and a $175,000 kitchen is largely materials — custom cabinetry versus stock, quartzite versus quartz, Sub-Zero versus standard appliances. We source to your finish level and lock it in writing before construction begins.',
  },
  {
    title: 'Structural Scope',
    body: 'Opening walls, relocating load-bearing elements, or adding square footage adds engineering, structural reports, and additional permit requirements. We identify structural scope in the proposal phase — not during demolition.',
  },
]

const comparisons = [
  ['Pricing Model', 'Fixed-Scope Contract', 'Open-Ended Estimate'],
  ['Permit Risk', 'PlanPass.ai Pre-Analysis', 'Reactive / Hope for the Best'],
  ['Project Oversight', 'Owner-Led by Paulo', 'Handed to Subcontractor'],
  ['Budget Guarantee', 'Guaranteed Max Cap', 'Subject to Change Orders'],
  ['Communication', 'Weekly Structured Updates', 'Call When Something Happens'],
  ['Design Integration', 'Seamless Design-Build', 'Fragmented Handoffs'],
]

const caseStudies = [
  { name: 'Marion Avenue, Mill Valley', type: 'Full Home Renovation', location: 'Mill Valley, CA', href: '/projects/marion-avenue-mill-valley' },
  { name: 'Sycamore Sound Studio', type: 'Custom Studio Build', location: 'Marin County, CA', href: '/projects/sycamore-sound-studio' },
  { name: 'Plymouth Whole Home', type: 'Whole Home Renovation', location: 'Marin County, CA', href: '/projects/plymouth-whole-home-renovation' },
]

const testimonials = [
  {
    quote: 'Paulo presented a fixed-scope contract on day one and held to every number. The final invoice matched the proposal exactly. After two previous contractors who never delivered that, it changed how we think about building.',
    author: 'Katherine & James M.',
    city: 'Mill Valley',
    type: 'Full Home Remodel',
  },
  {
    quote: 'We had gotten three bids before ConstruBay. Paulo was the only one who could tell us exactly what we were paying for and why. The transparency was unlike anything we had experienced in eighteen years of owning homes.',
    author: 'Richard A.',
    city: 'Tiburon',
    type: 'Kitchen & Primary Suite',
  },
]

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }} />

      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '1rem' }}>
            Pricing Guide · 2026
          </p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Luxury Remodeling Investment Guide<br />— Marin County
          </h1>
          <p style={{ fontFamily: MS, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, maxWidth: '600px', marginBottom: '2rem' }}>
            Transparent pricing ranges for every project. Fixed-scope contracts. No surprises.
          </p>
          {/* EEAT Trust Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            {['CSLB #1106798', 'Licensed & Insured', '10-Year Warranty', '⭐ Nextdoor #1 Contractor'].map(t => (
              <span key={t} style={{ fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.75)', border: '1px solid rgba(203,178,106,0.25)', padding: '0.4rem 0.85rem' }}>
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* INTRO COPY */}
        <section style={{ padding: '4rem 2rem', maxWidth: '860px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ fontFamily: MS, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 2, marginBottom: '1.5rem' }}>
            Pricing transparency is the number one complaint homeowners have about the construction industry. Custom work means no flat rate — every site, every scope, every finish level is different. What we can guarantee is this: the number in our fixed-scope contract is the number you pay. No change orders that weren&apos;t owner-directed. No last-minute surprises at closeout.
          </p>
          <p style={{ fontFamily: MS, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 2 }}>
            We also use <strong style={{ color: '#cbb26a' }}>PlanPass.ai</strong> — our proprietary AI tool that pre-analyzes permit risk before a shovel goes in the ground. Permit complications are where most Marin projects blow their budgets. PlanPass.ai eliminates that variable, so the number you approve is the number that arrives at the finish line.
          </p>
        </section>

        {/* PRICING MATRIX */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '2rem' }}>
            2026 Investment Ranges
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2px', backgroundColor: 'rgba(203,178,106,0.12)' }}>
            {services.map(s => (
              <div key={s.name} style={{ backgroundColor: '#000', padding: '2rem', border: '1px solid transparent' }}>
                <p style={{ fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.55)', marginBottom: '0.5rem' }}>
                  Service
                </p>
                <p style={{ fontFamily: CG, fontSize: '1.4rem', fontWeight: 300, color: '#fff', marginBottom: '0.5rem' }}>{s.name}</p>
                <p style={{ fontFamily: MS, fontSize: '0.85rem', color: '#cbb26a', marginBottom: '0.35rem' }}>{s.range}</p>
                <p style={{ fontFamily: MS, fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem', letterSpacing: '0.06em' }}>
                  Timeline: {s.timeline}
                </p>
                <Link
                  href="/request-a-bid"
                  style={{ display: 'inline-block', backgroundColor: 'transparent', border: '1px solid rgba(203,178,106,0.4)', color: '#cbb26a', fontFamily: MS, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.6rem 1.25rem', textDecoration: 'none' }}
                >
                  Get Exact Scope
                </Link>
                <Link
                  href="/request-a-bid"
                  style={{ display: 'block', backgroundColor: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.85rem 1.25rem', textDecoration: 'none', textAlign: 'center', marginTop: '0.75rem', fontWeight: 400 }}
                >
                  Discuss This Plan
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT DRIVES COST */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '0.75rem' }}>
            Cost Factors
          </p>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', marginBottom: '2.5rem' }}>
            What Drives Your Investment
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {drivers.map(d => (
              <div key={d.title} style={{ borderTop: '1px solid #2a2a2a', paddingTop: '1.5rem' }}>
                <p style={{ fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '0.75rem' }}>
                  {d.title}
                </p>
                <p style={{ fontFamily: MS, fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9 }}>
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section style={{ padding: '4rem 2rem', maxWidth: '960px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '0.75rem' }}>
            Why ConstruBay
          </p>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', marginBottom: '2.5rem' }}>
            ConstruBay vs. A Typical Marin Contractor
          </h2>
          <div style={{ border: '1px solid #1a1a1a' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#0a0a0a', padding: '0.75rem 1.5rem', gap: '1rem' }}>
              <span style={{ fontFamily: MS, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.4)' }}></span>
              <span style={{ fontFamily: MS, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#cbb26a' }}>ConstruBay</span>
              <span style={{ fontFamily: MS, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>Typical Contractor</span>
            </div>
            {comparisons.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '1rem 1.5rem', gap: '1rem', background: i % 2 === 0 ? '#000' : '#050505', borderTop: '1px solid #111' }}>
                <span style={{ fontFamily: MS, fontSize: '0.75rem', color: '#666', letterSpacing: '0.05em' }}>{row[0]}</span>
                <span style={{ fontFamily: MS, fontSize: '0.75rem', color: '#cbb26a' }}>✓ {row[1]}</span>
                <span style={{ fontFamily: MS, fontSize: '0.75rem', color: '#444' }}>— {row[2]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT EXAMPLES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '0.75rem' }}>
            Real Work
          </p>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', marginBottom: '2.5rem' }}>
            Recent Projects
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px', backgroundColor: 'rgba(203,178,106,0.1)' }}>
            {caseStudies.map(cs => (
              <div key={cs.name} style={{ backgroundColor: '#000', padding: '2rem' }}>
                <p style={{ fontFamily: MS, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.55)', marginBottom: '0.5rem' }}>
                  {cs.type}
                </p>
                <p style={{ fontFamily: CG, fontSize: '1.3rem', fontWeight: 300, color: '#fff', marginBottom: '0.35rem' }}>{cs.name}</p>
                <p style={{ fontFamily: MS, fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem', letterSpacing: '0.06em' }}>
                  {cs.location}
                </p>
                <Link href={cs.href} style={{ fontFamily: MS, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#cbb26a', textDecoration: 'none' }}>
                  View Project →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ padding: '4rem 2rem', maxWidth: '960px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '2.5rem' }}>
            Client Perspective
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ borderLeft: '3px solid #cbb26a', paddingLeft: '2rem' }}>
                <p style={{ fontFamily: CG, fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p style={{ fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#cbb26a' }}>
                  — {t.author}
                </p>
                <p style={{ fontFamily: MS, fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: '0.25rem' }}>
                  {t.city} · {t.type}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 2rem', maxWidth: '860px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '2rem' }}>
            FAQ
          </p>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(203,178,106,0.15)', padding: '1.75rem 0' }}>
              <p style={{ fontFamily: CG, fontSize: '1.25rem', color: '#fff', marginBottom: '0.75rem' }}>
                {faq.q}
              </p>
              <p style={{ fontFamily: MS, fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </section>

        {/* FINAL CTA */}
        <section style={{ padding: '5rem 2rem', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '1rem' }}>
            Next Step
          </p>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '1rem' }}>
            Ready for your fixed-scope estimate?
          </h2>
          <p style={{ fontFamily: MS, fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            Book a discovery call with Paulo. No pressure, no obligation.
          </p>
          <a
            href="https://calendly.com/construbay/initial-consultation-construbay"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '1.1rem 2.5rem', textDecoration: 'none', fontWeight: 400 }}
          >
            Book Discovery Call
          </a>
          <p style={{ marginTop: '1.25rem' }}>
            <a href="tel:4159689494" style={{ fontFamily: MS, fontSize: '0.75rem', color: 'rgba(203,178,106,0.6)', textDecoration: 'none', letterSpacing: '0.08em' }}>
              Or call (415) 968-9494
            </a>
          </p>
        </section>

      </main>
    </>
  )
}
