import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kitchen Remodeling Marin County CA | Luxury Kitchens | ConstruBay CSLB #1106798',
  description: 'Luxury kitchen remodeling across Marin County CA. Mill Valley, Tiburon, San Rafael, Ross, Belvedere. $185k-$595k. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/marin-county-kitchen-remodeling' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'ConstruBay',
      description: 'Luxury kitchen remodeling across Marin County CA. Mill Valley, Tiburon, San Rafael, Ross, Belvedere. CSLB #1106798.',
      url: 'https://www.construbay.com/marin-county-kitchen-remodeling',
      telephone: '+14159689494',
      areaServed: ['Mill Valley', 'Tiburon', 'San Rafael', 'Sausalito', 'Ross', 'Belvedere', 'Kentfield', 'Larkspur', 'Corte Madera', 'Novato', 'Marin County'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a kitchen remodel cost in Marin County?', acceptedAnswer: { '@type': 'Answer', text: 'Luxury kitchen remodels in Marin County range from $185,000 for a compact kitchen to $595,000+ for a large gourmet kitchen. All quotes include permits, custom cabinetry, appliances and our 10-year warranty.' } },
        { '@type': 'Question', name: 'How long does a kitchen remodel take in Marin County?', acceptedAnswer: { '@type': 'Answer', text: 'Kitchen remodels typically take 10–20 weeks. Custom cabinetry requires 12 weeks fabrication lead time which we plan in from day one.' } },
        { '@type': 'Question', name: 'What cities in Marin County does ConstruBay serve for kitchen remodels?', acceptedAnswer: { '@type': 'Answer', text: 'We serve all of Marin County for kitchen remodeling including Mill Valley, Tiburon, San Rafael, Sausalito, Ross, Belvedere, Kentfield, Larkspur, Corte Madera and Novato.' } },
        { '@type': 'Question', name: 'Does ConstruBay handle kitchen permits in Marin County?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manage all kitchen permits with the relevant city or county building department. Kitchen remodels typically require electrical and plumbing permits in addition to the main building permit.' } },
      ],
    },
  ],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const table = [
  ['Compact Kitchen  150–200 sq ft', '$185,000 – $245,000', '10–12 weeks'],
  ['Standard Kitchen  200–300 sq ft', '$275,000 – $385,000', '12–16 weeks'],
  ['Gourmet Kitchen  300–400 sq ft', '$425,000 – $595,000', '16–20 weeks'],
]

const included = [
  'Custom cabinetry design and fabrication',
  'Stone or quartz countertop installation',
  'Professional appliance selection and installation',
  'Electrical upgrades for modern kitchen',
  'Plumbing rough-in and finish',
  'Lighting design and installation',
  'Marin County permit acquisition',
  '10-year craftsmanship warranty',
]

const cities = [
  'Mill Valley', 'Tiburon', 'San Rafael', 'Sausalito',
  'Ross', 'Belvedere', 'Kentfield', 'Larkspur',
  'Corte Madera', 'Novato',
]

const faqs = [
  { q: 'How much does a kitchen remodel cost in Marin County?', a: 'Luxury kitchen remodels in Marin County range from $185,000 for a compact kitchen to $595,000+ for a large gourmet kitchen. All quotes include permits, custom cabinetry, appliances and our 10-year warranty.' },
  { q: 'How long does a kitchen remodel take in Marin County?', a: 'Kitchen remodels typically take 10–20 weeks. Custom cabinetry requires 12 weeks fabrication lead time which we plan in from day one.' },
  { q: 'What cities in Marin County does ConstruBay serve for kitchen remodels?', a: 'We serve all of Marin County for kitchen remodeling including Mill Valley, Tiburon, San Rafael, Sausalito, Ross, Belvedere, Kentfield, Larkspur, Corte Madera and Novato.' },
  { q: 'Does ConstruBay handle kitchen permits in Marin County?', a: 'Yes. We manage all kitchen permits with the relevant city or county building department. Kitchen remodels typically require electrical and plumbing permits in addition to the main building permit.' },
]

export default function MarinCountyKitchenRemodelingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Kitchen Remodeling · Marin County</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Kitchen Remodeling<br />Across Marin County
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Custom Luxury Kitchens in Mill Valley, Tiburon, Ross and Beyond
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            The kitchen is the heart of every Marin County home. We design and build luxury kitchens that balance professional-grade performance with the warmth and character that defines Marin living — from intimate Mill Valley bungalows to Tiburon waterfront estates. Custom cabinetry, premium appliances and precision craftsmanship throughout.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Kitchen Project
          </Link>
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

        {/* WHAT IS INCLUDED */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '2rem' }}>What Is Included in Every Quote</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0' }}>
            {included.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.85rem 0', borderBottom: '1px solid #111' }}>
                <span style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.85rem', flexShrink: 0 }}>✓</span>
                <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CITIES SERVED */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Cities Served</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {cities.map((city) => (
              <span key={city} style={{ border: '1px solid #222', padding: '0.5rem 1.25rem', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)' }}>{city}</span>
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
            Start Your Kitchen Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Fixed-price proposal within 5 business days. Every kitchen project starts with a free site visit.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Kitchen Project
          </Link>
        </section>

      </main>
    </>
  )
}
