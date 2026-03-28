import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ADU Builder Marin County CA | Accessory Dwelling Units | ConstruBay CSLB #1106798',
  description: 'Licensed ADU builder across Marin County CA. Mill Valley, Tiburon, San Rafael, Sausalito. $280k-$600k. Fully permitted. 10-year warranty. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/marin-county-adu-builder' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'ConstruBay',
      description: 'Licensed ADU builder across Marin County CA. Fully permitted accessory dwelling units. CSLB #1106798.',
      url: 'https://www.construbay.com/marin-county-adu-builder',
      telephone: '+14159689494',
      areaServed: ['Mill Valley', 'Tiburon', 'San Rafael', 'Sausalito', 'Ross', 'Belvedere', 'Kentfield', 'Larkspur', 'Corte Madera', 'Novato', 'Marin County'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does an ADU cost in Marin County?', acceptedAnswer: { '@type': 'Answer', text: 'ADUs in Marin County range from $80,000 for a Junior ADU to $600,000+ for a large detached unit. All ConstruBay ADU quotes include design, permits, construction and our 10-year warranty.' } },
        { '@type': 'Question', name: 'How long does ADU permitting take in Marin County?', acceptedAnswer: { '@type': 'Answer', text: 'ADU permits in Marin County average 4–6 months. ConstruBay has established relationships with all Marin County building departments that help keep applications moving.' } },
        { '@type': 'Question', name: 'What cities in Marin County does ConstruBay build ADUs?', acceptedAnswer: { '@type': 'Answer', text: 'We build ADUs throughout Marin County including Mill Valley, Tiburon, San Rafael, Sausalito, Ross, Belvedere, Kentfield, Larkspur, Corte Madera and Novato.' } },
        { '@type': 'Question', name: 'Can I rent out my Marin County ADU?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most Marin County jurisdictions allow ADU rentals. Average rental rates range from $3,000–$5,000 per month. An ADU typically increases property value by 15–20%.' } },
        { '@type': 'Question', name: 'What size ADU can I build in Marin County?', acceptedAnswer: { '@type': 'Answer', text: 'California law allows detached ADUs up to 1,200 sqft in most Marin County neighborhoods. Junior ADUs up to 500 sqft can be created within existing home footprints.' } },
      ],
    },
  ],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const aduTypes = [
  { n: '01', t: 'Detached ADU', b: 'A separate structure on your property. Maximum privacy and rental value. Up to 1,200 sqft in most Marin County neighborhoods.' },
  { n: '02', t: 'Attached ADU', b: 'An addition to your existing home. Cost-effective and ideal for multigenerational living.' },
  { n: '03', t: 'Garage Conversion', b: 'Convert an existing garage into a fully permitted living space. Often the fastest permit path across Marin County.' },
  { n: '04', t: 'Junior ADU', b: 'Up to 500 sqft within your existing home footprint. Minimal permit requirements under California law.' },
]

const cities = [
  'Mill Valley', 'Tiburon', 'San Rafael', 'Sausalito',
  'Ross', 'Belvedere', 'Kentfield', 'Larkspur',
  'Corte Madera', 'Novato',
]

const table = [
  ['Standard ADU  up to 800 sq ft', '$280,000 – $420,000', '4–6 months'],
  ['Large ADU  800–1,200 sq ft', '$420,000 – $600,000', '6–8 months'],
  ['Garage Conversion', '$150,000 – $280,000', '3–5 months'],
  ['Junior ADU', '$80,000 – $150,000', '2–4 months'],
]

const faqs = [
  { q: 'How much does an ADU cost in Marin County?', a: 'ADUs in Marin County range from $80,000 for a Junior ADU to $600,000+ for a large detached unit. All ConstruBay ADU quotes include design, permits, construction and our 10-year warranty.' },
  { q: 'How long does ADU permitting take in Marin County?', a: 'ADU permits in Marin County average 4–6 months. ConstruBay has established relationships with all Marin County building departments that help keep applications moving.' },
  { q: 'What cities in Marin County does ConstruBay build ADUs?', a: 'We build ADUs throughout Marin County including Mill Valley, Tiburon, San Rafael, Sausalito, Ross, Belvedere, Kentfield, Larkspur, Corte Madera and Novato.' },
  { q: 'Can I rent out my Marin County ADU?', a: 'Yes. Most Marin County jurisdictions allow ADU rentals. Average rental rates range from $3,000–$5,000 per month. An ADU typically increases property value by 15–20%.' },
  { q: 'What size ADU can I build in Marin County?', a: 'California law allows detached ADUs up to 1,200 sqft in most Marin County neighborhoods. Junior ADUs up to 500 sqft can be created within existing home footprints.' },
]

export default function MarinCountyAduBuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>ADU Construction · Marin County</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            ADU Builder<br />Across Marin County
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Fully Permitted Accessory Dwelling Units — Every Marin City
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            California&apos;s ADU laws have transformed what Marin County homeowners can build on their property. A well-designed ADU generates $3,000–$5,000 per month in rental income while adding 15–20% to your property value. ConstruBay manages the entire process — design, permits, construction — across every Marin County city and jurisdiction. CSLB #1106798.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Marin ADU Project
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

        {/* CITIES SERVED */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Cities Served</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {cities.map((city) => (
              <span key={city} style={{ border: '1px solid #222', padding: '0.5rem 1.25rem', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)' }}>{city}</span>
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
            Start Your Marin ADU Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            We assess your property&apos;s ADU potential and provide a complete fixed-price proposal within 5 business days.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Marin ADU Project
          </Link>
        </section>

      </main>
    </>
  )
}
