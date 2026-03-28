import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home Additions Marin County CA | Room Addition Contractor | ConstruBay',
  description: 'Licensed home addition contractor in Marin County CA. Primary suites, great rooms, second story additions. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/home-additions-marin-county' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'ConstruBay',
      description: 'Licensed home addition contractor in Marin County CA. Primary suites, great rooms, second story additions. CSLB #1106798.',
      url: 'https://www.construbay.com/home-additions-marin-county',
      telephone: '+14159689494',
      areaServed: 'Marin County',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a home addition cost in Marin County?', acceptedAnswer: { '@type': 'Answer', text: 'Home additions in Marin County range from $285,000 for a primary suite addition to $600,000+ for a second story or great room addition. All quotes include engineering, permits, materials and our 10-year warranty.' } },
        { '@type': 'Question', name: 'How long does a home addition take in Mill Valley?', acceptedAnswer: { '@type': 'Answer', text: 'Home additions typically take 4–8 months depending on scope. Marin County permits add 4–12 weeks to the beginning of every project.' } },
        { '@type': 'Question', name: 'Does ConstruBay handle addition permits in Marin County?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manage all permits from application to final approval including structural engineering and planning department approvals required for additions in Marin County.' } },
        { '@type': 'Question', name: 'Do you build second story additions in Marin County?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build second story additions throughout Marin County. These projects require structural engineering and often design review — we manage the entire process.' } },
      ],
    },
  ],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const types = [
  { n: '01', t: 'Primary Suite Addition', b: 'Add the primary suite your home deserves. Bedroom, bathroom, walk-in closet, private deck. Engineered for Marin&apos;s hillside conditions.' },
  { n: '02', t: 'Great Room Addition', b: 'Expand your living and dining space with an open great room addition designed for Marin&apos;s indoor-outdoor lifestyle.' },
  { n: '03', t: 'Second Story Addition', b: 'Add a full second story or partial upper level. Structural engineering and planning department approvals managed entirely by ConstruBay.' },
  { n: '04', t: 'Garage Conversion', b: 'Convert an underutilized garage into living space — guest suite, home office or ADU. Often the most cost-effective addition in Marin County.' },
]

const table = [
  ['Primary Suite  400–500 sq ft', '$285,000 – $385,000', '14–18 weeks'],
  ['Great Room  300–500 sq ft', '$225,000 – $375,000', '12–16 weeks'],
  ['Second Story Addition', '$450,000 – $750,000', '6–10 months'],
  ['Garage Conversion', '$150,000 – $280,000', '3–5 months'],
]

const faqs = [
  { q: 'How much does a home addition cost in Marin County?', a: 'Home additions in Marin County range from $285,000 for a primary suite addition to $600,000+ for a second story or great room addition. All quotes include engineering, permits, materials and our 10-year warranty.' },
  { q: 'How long does a home addition take in Mill Valley?', a: 'Home additions typically take 4–8 months depending on scope. Marin County permits add 4–12 weeks to the beginning of every project.' },
  { q: 'Does ConstruBay handle addition permits in Marin County?', a: 'Yes. We manage all permits from application to final approval including structural engineering and planning department approvals required for additions in Marin County.' },
  { q: 'Do you build second story additions in Marin County?', a: 'Yes. We build second story additions throughout Marin County. These projects require structural engineering and often design review — we manage the entire process.' },
]

export default function HomeAdditionsMarinCountyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Home Additions · Marin County</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Home Additions<br />in Marin County
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Primary Suites, Great Rooms and Second Story Additions
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            Sometimes the best home is the one you are already in — expanded. A well-designed addition adds space, value and functionality without the disruption of moving. ConstruBay manages every phase of Marin County home additions — engineering, permits, construction — with fixed-price accountability.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Addition Project
          </Link>
        </section>

        {/* ADDITION TYPES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Addition Types</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {types.map((item) => (
              <div key={item.n} style={{ borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
                <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{item.n}</p>
                <p style={{ fontFamily: MS, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.t}</p>
                <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: item.b }}
                />
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
            Start Your Addition Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Fixed-price proposal within 5 business days. Every addition starts with a free site visit and property assessment.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Addition Project
          </Link>
        </section>

      </main>
    </>
  )
}
