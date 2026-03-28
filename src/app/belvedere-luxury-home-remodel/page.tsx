import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luxury Home Remodel Belvedere CA | Waterfront Estate Renovation | ConstruBay',
  description: 'Luxury home remodeling in Belvedere CA. One of the wealthiest zip codes in America. Waterfront estates, bay view homes. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/belvedere-luxury-home-remodel' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'ConstruBay',
      description: 'Luxury home remodeling in Belvedere CA. Waterfront estates, bay view homes. CSLB #1106798.',
      url: 'https://www.construbay.com/belvedere-luxury-home-remodel',
      telephone: '+14159689494',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Belvedere',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      areaServed: ['Belvedere', 'Tiburon', 'Marin County'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a luxury home remodel cost in Belvedere?', acceptedAnswer: { '@type': 'Answer', text: 'Luxury home remodels in Belvedere range from $800,000 for a significant renovation to $4,000,000+ for a complete waterfront estate transformation. Belvedere commands premium pricing due to waterfront access and estate scale.' } },
        { '@type': 'Question', name: 'Does ConstruBay handle BCDC permits for Belvedere waterfront homes?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Belvedere waterfront properties require Bay Conservation and Development Commission (BCDC) permits in addition to standard building permits. We manage the entire regulatory process.' } },
        { '@type': 'Question', name: 'How long do permits take in Belvedere?', acceptedAnswer: { '@type': 'Answer', text: 'Belvedere permits typically take 8–12 weeks. Waterfront properties with BCDC requirements may take longer. ConstruBay manages proactively to minimize delays.' } },
        { '@type': 'Question', name: 'What makes Belvedere construction unique?', acceptedAnswer: { '@type': 'Answer', text: 'Belvedere is a small island community with waterfront access, strict design review and some of the highest property values in America. Construction here demands estate-level precision and regulatory expertise.' } },
      ],
    },
  ],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const specialties = [
  { n: '01', t: 'Waterfront Estates', b: 'Belvedere\'s waterfront properties require BCDC coastal permits, corrosion-resistant materials and construction expertise calibrated to bay conditions.' },
  { n: '02', t: 'Island Logistics', b: 'Belvedere\'s geography limits access and staging options. We plan every project around these constraints from day one.' },
  { n: '03', t: 'Design Review Expertise', b: 'Belvedere has rigorous design review. We manage all planning submissions and board appearances to keep your project on schedule.' },
  { n: '04', t: 'Estate Craftsmanship', b: 'Belvedere homeowners expect perfection. Custom millwork, premium stone and precision finishes executed to the highest standard.' },
]

const table = [
  ['Full Estate Remodel', '$800,000 – $4,000,000+', '8–18 months'],
  ['Kitchen Remodel', '$275,000 – $595,000', '12–20 weeks'],
  ['Primary Suite', '$285,000 – $495,000', '14–22 weeks'],
  ['ADU Construction', '$280,000 – $600,000', '4–8 months'],
]

const faqs = [
  { q: 'How much does a luxury home remodel cost in Belvedere?', a: 'Luxury home remodels in Belvedere range from $800,000 for a significant renovation to $4,000,000+ for a complete waterfront estate transformation. Belvedere commands premium pricing due to waterfront access and estate scale.' },
  { q: 'Does ConstruBay handle BCDC permits for Belvedere waterfront homes?', a: 'Yes. Belvedere waterfront properties require Bay Conservation and Development Commission (BCDC) permits in addition to standard building permits. We manage the entire regulatory process.' },
  { q: 'How long do permits take in Belvedere?', a: 'Belvedere permits typically take 8–12 weeks. Waterfront properties with BCDC requirements may take longer. ConstruBay manages proactively to minimize delays.' },
  { q: 'What makes Belvedere construction unique?', a: 'Belvedere is a small island community with waterfront access, strict design review and some of the highest property values in America. Construction here demands estate-level precision and regulatory expertise.' },
]

export default function BelvedereLuxuryHomeRemodelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Luxury Renovation · Belvedere, CA</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Luxury Home Remodeling<br />in Belvedere
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Waterfront Estate Renovations — One of America&apos;s Wealthiest Communities
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            Belvedere is among the most exclusive addresses in America — a small island community where waterfront estates command prices that reflect the extraordinary setting. Construction here demands a level of precision, regulatory expertise and luxury craftsmanship that matches the properties themselves. ConstruBay delivers. CSLB #1106798.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Belvedere Project
          </Link>
        </section>

        {/* BELVEDERE SPECIALTIES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Belvedere Specialties</p>
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
            Start Your Belvedere Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Fixed-price proposal within 5 business days. Every Belvedere estate project starts with a personal site visit from Paulo.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Belvedere Project
          </Link>
        </section>

      </main>
    </>
  )
}
