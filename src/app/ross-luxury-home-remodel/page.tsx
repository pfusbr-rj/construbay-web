import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luxury Home Remodel Ross CA | High-End Renovation | ConstruBay CSLB #1106798',
  description: 'Luxury home remodeling in Ross CA. One of the wealthiest zip codes in America. Estate renovations, historic preservation. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/ross-luxury-home-remodel' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'ConstruBay',
      description: 'Luxury home remodeling in Ross CA. Estate renovations, historic preservation. CSLB #1106798.',
      url: 'https://www.construbay.com/ross-luxury-home-remodel',
      telephone: '+14159689494',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ross',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      areaServed: ['Ross', 'Kentfield', 'Marin County'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a luxury home remodel cost in Ross CA?', acceptedAnswer: { '@type': 'Answer', text: 'Luxury home remodels in Ross range from $600,000 for a significant renovation to $3,000,000+ for a complete estate transformation. Ross properties command premium pricing due to estate scale and historic character.' } },
        { '@type': 'Question', name: 'Does ConstruBay handle the Ross design review process?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ross has a rigorous design review process through the Town of Ross. We manage all planning applications, design review submissions and building permits from start to approval.' } },
        { '@type': 'Question', name: 'How long do permits take in Ross CA?', acceptedAnswer: { '@type': 'Answer', text: 'Ross permits require both building department and design review board approval which can add 2–4 weeks over standard permit timelines. ConstruBay manages the entire process proactively.' } },
        { '@type': 'Question', name: 'Does ConstruBay have experience with Ross historic homes?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many Ross properties have historic character that requires careful preservation alongside modern systems upgrades. We balance both with meticulous attention to period-appropriate materials and details.' } },
      ],
    },
  ],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const specialties = [
  { n: '01', t: 'Estate Scale Expertise', b: 'Ross properties are among the largest residential projects in Marin County. We have the team and systems to manage estate-scale renovations with precision.' },
  { n: '02', t: 'Historic Preservation', b: 'Ross homes carry architectural heritage worth protecting. We source period-appropriate materials and preserve original character while delivering modern performance.' },
  { n: '03', t: 'Design Review Management', b: 'Ross has a rigorous design review process. We manage all planning submissions and board appearances to keep your project on schedule.' },
  { n: '04', t: 'Luxury Finishes', b: 'Ross homeowners expect perfection. Custom millwork, bespoke stone work and precision craftsmanship executed to the highest standard.' },
]

const table = [
  ['Full Estate Remodel', '$800,000 – $3,000,000+', '8–18 months'],
  ['Kitchen Remodel', '$275,000 – $595,000', '12–20 weeks'],
  ['Primary Suite', '$285,000 – $495,000', '14–22 weeks'],
  ['ADU Construction', '$280,000 – $600,000', '4–8 months'],
]

const faqs = [
  { q: 'How much does a luxury home remodel cost in Ross CA?', a: 'Luxury home remodels in Ross range from $600,000 for a significant renovation to $3,000,000+ for a complete estate transformation. Ross properties command premium pricing due to estate scale and historic character.' },
  { q: 'Does ConstruBay handle the Ross design review process?', a: 'Yes. Ross has a rigorous design review process through the Town of Ross. We manage all planning applications, design review submissions and building permits from start to approval.' },
  { q: 'How long do permits take in Ross CA?', a: 'Ross permits require both building department and design review board approval which can add 2–4 weeks over standard permit timelines. ConstruBay manages the entire process proactively.' },
  { q: 'Does ConstruBay have experience with Ross historic homes?', a: 'Yes. Many Ross properties have historic character that requires careful preservation alongside modern systems upgrades. We balance both with meticulous attention to period-appropriate materials and details.' },
]

export default function RossLuxuryHomeRemodelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Luxury Renovation · Ross, CA</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Luxury Home Remodeling<br />in Ross, California
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Estate Renovations in One of America&apos;s Most Prestigious Communities
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            Ross is one of the wealthiest communities in America — a town of estate properties, tree-lined streets and architectural heritage that demands the highest standard of construction. ConstruBay brings the precision, accountability and luxury craftsmanship that Ross homeowners expect. Every project fixed-price. Every detail reviewed personally by Paulo. CSLB #1106798.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Ross Project
          </Link>
        </section>

        {/* ROSS SPECIALTIES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Ross Specialties</p>
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
            Start Your Ross Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Fixed-price proposal within 5 business days. Every Ross estate project starts with a personal site visit from Paulo.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Ross Project
          </Link>
        </section>

      </main>
    </>
  )
}
