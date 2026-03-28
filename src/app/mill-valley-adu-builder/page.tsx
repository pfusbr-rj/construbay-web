import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ADU Builder Mill Valley CA | Accessory Dwelling Unit | ConstruBay CSLB #1106798',
  description: 'Licensed ADU builder in Mill Valley CA. Fully permitted accessory dwelling units. $280k-$600k. Established relationships with Mill Valley building department. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/mill-valley-adu-builder' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'ConstruBay',
      description: 'Licensed ADU builder in Mill Valley CA. Fully permitted accessory dwelling units. CSLB #1106798.',
      url: 'https://www.construbay.com/mill-valley-adu-builder',
      telephone: '+14159689494',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mill Valley',
        addressRegion: 'CA',
        postalCode: '94941',
        addressCountry: 'US',
      },
      areaServed: 'Mill Valley',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does an ADU cost in Mill Valley?', acceptedAnswer: { '@type': 'Answer', text: 'ADUs in Mill Valley range from $80,000 for a Junior ADU to $600,000+ for a large detached unit. All ConstruBay ADU quotes include design, permits, construction and our 10-year warranty.' } },
        { '@type': 'Question', name: 'How long does ADU permitting take in Mill Valley?', acceptedAnswer: { '@type': 'Answer', text: 'Mill Valley ADU permits typically take 4–6 months. ConstruBay has established relationships with the Mill Valley building department that help keep applications moving.' } },
        { '@type': 'Question', name: 'What size ADU can I build in Mill Valley?', acceptedAnswer: { '@type': 'Answer', text: 'California law allows detached ADUs up to 1,200 sqft in most Mill Valley neighborhoods. Junior ADUs up to 500 sqft can be created within existing home footprints with streamlined permits.' } },
        { '@type': 'Question', name: 'Can I rent out my Mill Valley ADU?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Mill Valley allows ADU rentals. Average rental rates range from $3,000–$5,000 per month depending on size and location. An ADU typically increases property value by 15–20%.' } },
      ],
    },
  ],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const aduTypes = [
  { n: '01', t: 'Detached ADU', b: 'A separate structure on your property. Maximum privacy and rental value. Up to 1,200 sqft in most Mill Valley neighborhoods.' },
  { n: '02', t: 'Attached ADU', b: 'An addition to your existing home. Cost-effective and ideal for multigenerational living.' },
  { n: '03', t: 'Garage Conversion', b: 'Convert an existing garage into a fully permitted living space. Often the fastest permit path in Mill Valley.' },
  { n: '04', t: 'Junior ADU', b: 'Up to 500 sqft within your existing home footprint. Minimal permit requirements under California law.' },
]

const facts = [
  'Mill Valley permits ADUs up to 1,200 sqft detached',
  'Junior ADUs up to 500 sqft within existing footprint',
  'Average Mill Valley ADU rental: $3,500–$5,000/month',
  'ADU adds 15–20% to Mill Valley property value',
  'Permit process averages 4–6 months with ConstruBay',
]

const table = [
  ['Standard ADU  up to 800 sq ft', '$280,000 – $420,000', '4–6 months'],
  ['Large ADU  800–1,200 sq ft', '$420,000 – $600,000', '6–8 months'],
  ['Garage Conversion', '$150,000 – $280,000', '3–5 months'],
  ['Junior ADU', '$80,000 – $150,000', '2–4 months'],
]

const faqs = [
  { q: 'How much does an ADU cost in Mill Valley?', a: 'ADUs in Mill Valley range from $80,000 for a Junior ADU to $600,000+ for a large detached unit. All ConstruBay ADU quotes include design, permits, construction and our 10-year warranty.' },
  { q: 'How long does ADU permitting take in Mill Valley?', a: 'Mill Valley ADU permits typically take 4–6 months. ConstruBay has established relationships with the Mill Valley building department that help keep applications moving.' },
  { q: 'What size ADU can I build in Mill Valley?', a: 'California law allows detached ADUs up to 1,200 sqft in most Mill Valley neighborhoods. Junior ADUs up to 500 sqft can be created within existing home footprints with streamlined permits.' },
  { q: 'Can I rent out my Mill Valley ADU?', a: 'Yes. Mill Valley allows ADU rentals. Average rental rates range from $3,000–$5,000 per month depending on size and location. An ADU typically increases property value by 15–20%.' },
]

export default function MillValleyAduBuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>ADU Construction · Mill Valley, CA</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            ADU Builder —<br />Mill Valley, California
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Fully Permitted Accessory Dwelling Units in Mill Valley
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            Mill Valley is one of the most desirable places to live in California — and an ADU on your property can generate $3,000–$5,000 per month in rental income while adding 15–20% to your property value. ConstruBay manages the entire Mill Valley ADU process from design through final permit sign-off. CSLB #1106798.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Mill Valley ADU
          </Link>
        </section>

        {/* ADU TYPES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Options</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {aduTypes.map((item) => (
              <div key={item.n} style={{ borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
                <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{item.n}</p>
                <p style={{ fontFamily: MS, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.t}</p>
                <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.7 }}>{item.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MILL VALLEY ADU FACTS */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1.5rem' }}>Mill Valley ADU Facts</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {facts.map((fact, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', padding: '0.9rem 0', borderBottom: '1px solid #111' }}>
                <span style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.8rem', flexShrink: 0 }}>—</span>
                <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.6 }}>{fact}</p>
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
            Start Your Mill Valley ADU
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            We assess your property&apos;s ADU potential and provide a complete fixed-price proposal within 5 business days.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Mill Valley ADU
          </Link>
        </section>

      </main>
    </>
  )
}
