import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luxury Home Remodel Tiburon CA | High-End Renovation | ConstruBay CSLB #1106798',
  description: 'Luxury home remodeling in Tiburon CA. Waterfront estates, hillside homes, bay view properties. Fixed-price contracts. 10-year warranty. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/tiburon-luxury-home-remodel' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'ConstruBay',
      description: 'Luxury home remodeling in Tiburon CA. Waterfront estates, hillside homes, bay view properties. CSLB #1106798.',
      url: 'https://www.construbay.com/tiburon-luxury-home-remodel',
      telephone: '+14159689494',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tiburon',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      areaServed: ['Tiburon', 'Marin County'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does a luxury home remodel cost in Tiburon?', acceptedAnswer: { '@type': 'Answer', text: 'Luxury home remodels in Tiburon range from $350,000 to over $900,000 for full transformations, depending on scope, structural changes, and finish selections.' } },
        { '@type': 'Question', name: 'Are there special permit requirements in Tiburon?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Tiburon has specific HOA and waterfront regulations. ConstruBay\'s PlanPass.ai pre-screens every project for local code compliance.' } },
        { '@type': 'Question', name: 'Who is the best luxury contractor in Tiburon?', acceptedAnswer: { '@type': 'Answer', text: 'ConstruBay is rated #1 on Nextdoor in the area and holds CSLB license #1106798. Paulo Fernandes personally oversees every project.' } },
      ],
    },
  ],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const specialties = [
  { n: '01', t: 'Bay View Properties', b: 'Tiburon\'s bay view homes demand construction that preserves and enhances sight lines. We design every project around the views that make these properties exceptional.' },
  { n: '02', t: 'Estate Finishes', b: 'Tiburon homeowners expect the highest level of craftsmanship. Custom millwork, premium stone and precision tile work executed to estate standards.' },
  { n: '03', t: 'Town Permit Expertise', b: 'We have established relationships with the Town of Tiburon building department and design review board that streamline approvals.' },
  { n: '04', t: 'Hillside Engineering', b: 'Tiburon\'s terrain requires geotechnical expertise. We manage all soils reports, retaining wall engineering and hillside construction logistics.' },
]

const table = [
  ['Full Home Remodel', '$500,000 – $2,000,000+', '6–14 months'],
  ['Kitchen Remodel', '$185,000 – $595,000', '10–20 weeks'],
  ['Primary Suite', '$285,000 – $495,000', '14–22 weeks'],
  ['ADU Construction', '$280,000 – $600,000', '4–8 months'],
]

const faqs = [
  { q: 'How much does a luxury home remodel cost in Tiburon?', a: 'Luxury home remodels in Tiburon range from $500,000 for a full kitchen and primary suite renovation to $2,000,000+ for a complete whole-home transformation. All quotes include permits, engineering, materials and our 10-year warranty.' },
  { q: 'How long do permits take in Tiburon?', a: 'Tiburon building permits average 8–10 weeks. ConstruBay has established relationships with the Town of Tiburon building department that reduce this to 4–5 weeks on most projects.' },
  { q: 'Does ConstruBay work on Tiburon waterfront properties?', a: 'Yes. We have extensive experience with Tiburon waterfront and bay view properties including the specific engineering and regulatory requirements these homes demand.' },
  { q: 'What makes Tiburon construction different?', a: 'Tiburon properties often feature dramatic bay views, steep hillside terrain and estate-level finishes. Our team has completed multiple projects throughout Tiburon and understands the Town\'s design review process.' },
]

export default function TiburonLuxuryHomeRemodelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Luxury Renovation · Tiburon, CA</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Luxury Home Remodeling<br />in Tiburon
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Waterfront Estates and Bay View Homes — Built With Intention
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            Tiburon sits on a peninsula with some of the most spectacular bay views in California. The homes here are exceptional — and the construction that serves them must be too. ConstruBay delivers luxury renovations engineered for Tiburon&apos;s waterfront conditions and hillside terrain, with the fixed-price accountability that estate-level projects demand. CSLB #1106798.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Tiburon Project
          </Link>
        </section>

        {/* TIBURON SPECIALTIES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Tiburon Specialties</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {specialties.map((item) => (
              <div key={item.n} style={{ borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
                <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{item.n}</p>
                <p style={{ fontFamily: MS, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.t}</p>
                <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.7 }}>{item.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INVESTMENT TABLE */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>2026 Pricing</p>
          <div style={{ border: '1px solid #1a1a1a' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#0a0a0a', padding: '0.75rem 1.25rem', gap: '1rem' }}>
              {['Scope', 'Investment Range', 'Timeline'].map((h) => (
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
            Start Your Tiburon Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Fixed-price proposal within 5 business days. Every Tiburon project starts with a free site visit.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Tiburon Project
          </Link>
        </section>

      </main>
    </>
  )
}
