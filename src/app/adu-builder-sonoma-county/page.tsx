import type { Metadata } from 'next'
import Link from 'next/link'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata: Metadata = {
  title: 'ADU Builder in Sonoma County | ConstruBay CSLB #1106798',
  description: 'Licensed ADU builder in Sonoma County. Petaluma, Sebastopol, Santa Rosa. Design, permits, and construction. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://construbay.com/adu-builder-sonoma-county' },
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      name: 'ConstruBay',
      description: 'Licensed ADU builder in Sonoma County. Petaluma, Sebastopol, Santa Rosa. CSLB #1106798.',
      url: 'https://construbay.com/adu-builder-sonoma-county',
      telephone: '+14159689494',
      address: { '@type': 'PostalAddress', addressLocality: 'Mill Valley', addressRegion: 'CA', postalCode: '94941', addressCountry: 'US' },
      areaServed: ['Sonoma County', 'Petaluma', 'Sebastopol', 'Santa Rosa'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does an ADU cost in Sonoma County?', acceptedAnswer: { '@type': 'Answer', text: 'ADUs in Sonoma County range from $150,000 for a garage conversion to $450,000+ for a large detached unit. ConstruBay provides fixed-scope contracts including design, permits, and construction.' } },
        { '@type': 'Question', name: 'How long does ADU permitting take in Sonoma County?', acceptedAnswer: { '@type': 'Answer', text: 'ADU permits in Sonoma County average 3 to 5 months depending on the jurisdiction. ConstruBay\'s PlanPass.ai tool pre-identifies permit risks to minimize delays across Petaluma, Sebastopol, and Santa Rosa.' } },
        { '@type': 'Question', name: 'What ADU sizes are allowed in Sonoma County?', acceptedAnswer: { '@type': 'Answer', text: 'California law allows detached ADUs up to 1,200 square feet in most Sonoma County jurisdictions. Junior ADUs up to 500 square feet can be built within existing home footprints. ConstruBay handles all eligibility analysis.' } },
      ],
    },
  ],
}

const aduTypes = [
  { n: '01', t: 'Detached ADU', b: 'A freestanding structure on your Sonoma County property. Up to 1,200 sqft. Maximum rental value and the best separation for multigenerational living.' },
  { n: '02', t: 'Garage Conversion', b: 'Convert an existing garage into a fully permitted living unit. Often the fastest permit path in Sonoma County cities.' },
  { n: '03', t: 'Attached ADU', b: 'An addition to your existing home footprint. Cost-effective and ideal for properties with limited lot coverage.' },
  { n: '04', t: 'Junior ADU', b: 'Up to 500 sqft within your existing home structure. Minimal permitting under California state law.' },
]

const cities = ['Petaluma', 'Sebastopol', 'Santa Rosa', 'Sonoma', 'Rohnert Park', 'Windsor', 'Healdsburg']

const table = [
  ['Standard ADU  up to 800 sq ft', '$220,000 – $380,000', '4–6 months'],
  ['Large ADU  800–1,200 sq ft', '$380,000 – $450,000', '5–8 months'],
  ['Garage Conversion', '$150,000 – $250,000', '3–5 months'],
  ['Junior ADU', '$80,000 – $140,000', '2–4 months'],
]

const faqs = [
  { q: 'How much does an ADU cost in Sonoma County?', a: 'ADUs in Sonoma County range from $150,000 for a garage conversion to $450,000+ for a large detached unit. ConstruBay provides fixed-scope contracts including design, permits, and construction.' },
  { q: 'How long does ADU permitting take in Sonoma County?', a: 'ADU permits in Sonoma County average 3 to 5 months depending on the jurisdiction. ConstruBay\'s PlanPass.ai tool pre-identifies permit risks to minimize delays across Petaluma, Sebastopol, and Santa Rosa.' },
  { q: 'What ADU sizes are allowed in Sonoma County?', a: 'California law allows detached ADUs up to 1,200 square feet in most Sonoma County jurisdictions. Junior ADUs up to 500 square feet can be built within existing home footprints. ConstruBay handles all eligibility analysis.' },
]

export default function AduBuilderSonomaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>ADU Construction · Sonoma County</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            ADU Builder in Sonoma County<br />— ConstruBay
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Fully Permitted ADUs — Petaluma, Sebastopol, Santa Rosa &amp; Beyond
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            California&apos;s ADU laws have unlocked serious earning potential for Sonoma County homeowners. A well-built ADU generates $2,500–$4,000/month in rental income while adding 10–18% to your property value. ConstruBay manages everything — design, permits, construction — across every Sonoma County city. PlanPass.ai pre-screens every site for permit risk before we commit to a scope. CSLB #1106798.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Sonoma ADU Project
          </Link>
        </section>

        {/* ADU TYPES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>ADU Options</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {aduTypes.map(item => (
              <div key={item.n} style={{ borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
                <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{item.n}</p>
                <p style={{ fontFamily: MS, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.t}</p>
                <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.7 }}>{item.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PLANPASS.AI */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Technology</p>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1.25rem' }}>
            PlanPass.ai — The Permit Advantage
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.9, maxWidth: '680px' }}>
            Sonoma County ADU permitting varies dramatically by city — Petaluma&apos;s urban ADU streamlining differs sharply from Sebastopol&apos;s rural overlay zones. PlanPass.ai analyzes each parcel for zoning compliance, setback requirements, utility capacity, and fire zone classification before we ever draw a plan. Most ADU projects that go over budget hit a permit surprise. We eliminate that risk at the start.
          </p>
        </section>

        {/* PRICING TABLE */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>2026 Pricing</p>
          <div style={{ border: '1px solid #1a1a1a' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#0a0a0a', padding: '0.75rem 1.25rem', gap: '1rem' }}>
              {['Scope', 'Investment Range', 'Timeline'].map(h => (
                <span key={h} style={{ fontFamily: MS, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)' }}>{h}</span>
              ))}
            </div>
            {table.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '1.1rem 1.25rem', gap: '1rem', background: i % 2 === 0 ? '#000' : '#040404', borderTop: '1px solid #111' }}>
                <span style={{ fontFamily: CG, fontSize: '1.1rem', fontWeight: 300 }}>{row[0]}</span>
                <span style={{ fontFamily: MS, fontSize: '0.8rem', color: '#cbb26a' }}>{row[1]}</span>
                <span style={{ fontFamily: MS, fontSize: '0.7rem', color: '#555' }}>{row[2]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CITIES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Cities Served</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {cities.map(city => (
              <span key={city} style={{ border: '1px solid #222', padding: '0.5rem 1.25rem', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)' }}>{city}</span>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <TestimonialCard
            quote="We had been told by two other contractors that our Sebastopol lot was too complicated for an ADU. Paulo ran it through PlanPass.ai, identified the setback issue immediately, and proposed a design that worked. We broke ground six weeks later."
            author="Mark & Lisa F."
            city="Sebastopol"
            projectType="Detached ADU"
          />
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>FAQ</p>
          {faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #1a1a1a' }}>
              <p style={{ fontFamily: CG, fontSize: '1.2rem', marginBottom: '0.75rem' }}>{faq.q}</p>
              <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.8 }}>{faq.a}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Start Your Sonoma County ADU
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Free site assessment. Fixed-price proposal within 5 business days. No obligation.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Sonoma ADU Project
          </Link>
        </section>

      </main>
    </>
  )
}
