import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luxury Home Remodel Sausalito CA | High-End Renovation | ConstruBay CSLB #1106798',
  description: 'Luxury home remodeling in Sausalito CA. Waterfront properties, hillside homes, houseboat renovations. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/sausalito-luxury-home-remodel' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'ConstruBay',
      description: 'Luxury home remodeling in Sausalito CA. Waterfront properties, hillside homes. CSLB #1106798.',
      url: 'https://www.construbay.com/sausalito-luxury-home-remodel',
      telephone: '+14159689494',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sausalito',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      areaServed: ['Sausalito', 'Marin County'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a luxury home remodel cost in Sausalito?', acceptedAnswer: { '@type': 'Answer', text: 'Luxury home remodels in Sausalito range from $500,000 for a full kitchen and primary suite renovation to $2,000,000+ for a complete whole-home transformation. All quotes include permits, engineering, materials and our 10-year warranty.' } },
        { '@type': 'Question', name: 'Does ConstruBay work on Sausalito waterfront properties?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have experience with Sausalito waterfront homes including BCDC coastal development permit requirements and the specific engineering challenges of properties near the bay.' } },
        { '@type': 'Question', name: 'How long do permits take in Sausalito?', acceptedAnswer: { '@type': 'Answer', text: 'Sausalito building permits average 8–12 weeks. Waterfront properties may require additional BCDC review which adds time. ConstruBay manages the entire permit process.' } },
        { '@type': 'Question', name: 'Do you remodel hillside homes in Sausalito?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sausalito hillside homes are a specialty. We manage the geotechnical engineering, retaining wall construction and access logistics that hillside projects require.' } },
      ],
    },
  ],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const specialties = [
  { n: '01', t: 'Waterfront Properties', b: 'Bayfront and near-water properties require BCDC coastal permits and corrosion-resistant materials. We manage the entire regulatory process.' },
  { n: '02', t: 'Hillside Engineering', b: 'Sausalito\'s steep terrain requires geotechnical surveys, engineered foundations and specialized access solutions.' },
  { n: '03', t: 'Historic Preservation', b: 'Many Sausalito homes have historic character worth preserving. We balance modern systems upgrades with period-appropriate finishes.' },
  { n: '04', t: 'Houseboat Expertise', b: 'Sausalito\'s houseboat community presents unique construction challenges. We have the expertise to deliver quality renovations in this specialized environment.' },
]

const table = [
  ['Full Home Remodel', '$500,000 – $2,000,000+', '6–14 months'],
  ['Kitchen Remodel', '$185,000 – $595,000', '10–20 weeks'],
  ['Primary Suite', '$285,000 – $495,000', '14–22 weeks'],
  ['ADU Construction', '$280,000 – $600,000', '4–8 months'],
]

const faqs = [
  { q: 'How much does a luxury home remodel cost in Sausalito?', a: 'Luxury home remodels in Sausalito range from $500,000 for a full kitchen and primary suite renovation to $2,000,000+ for a complete whole-home transformation. All quotes include permits, engineering, materials and our 10-year warranty.' },
  { q: 'Does ConstruBay work on Sausalito waterfront properties?', a: 'Yes. We have experience with Sausalito waterfront homes including BCDC coastal development permit requirements and the specific engineering challenges of properties near the bay.' },
  { q: 'How long do permits take in Sausalito?', a: 'Sausalito building permits average 8–12 weeks. Waterfront properties may require additional BCDC review which adds time. ConstruBay manages the entire permit process.' },
  { q: 'Do you remodel hillside homes in Sausalito?', a: 'Yes. Sausalito hillside homes are a specialty. We manage the geotechnical engineering, retaining wall construction and access logistics that hillside projects require.' },
]

export default function SausalitoLuxuryHomeRemodelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Luxury Renovation · Sausalito, CA</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Luxury Home Remodeling<br />in Sausalito
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Waterfront Estates and Hillside Homes — Built With Intention
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            Sausalito&apos;s dramatic waterfront setting and steep hillside terrain demand construction expertise that goes beyond standard residential remodeling. From bayfront estates to hillside homes perched above the water, ConstruBay delivers luxury renovations engineered for Sausalito&apos;s unique conditions. CSLB #1106798.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Sausalito Project
          </Link>
        </section>

        {/* SAUSALITO SPECIALTIES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Sausalito Specialties</p>
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
            Start Your Sausalito Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Fixed-price proposal within 5 business days. We understand the unique requirements of Sausalito construction.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Sausalito Project
          </Link>
        </section>

      </main>
    </>
  )
}
