import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bathroom Remodel Marin County CA | Luxury Bathroom Renovation | ConstruBay',
  description: 'Luxury bathroom remodeling in Marin County CA. Custom tile, premium fixtures, spa finishes. $45k-$175k. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/bathroom-remodel-marin-county' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'ConstruBay',
      description: 'Luxury bathroom remodeling in Marin County CA. Custom tile, premium fixtures, spa finishes. CSLB #1106798.',
      url: 'https://www.construbay.com/bathroom-remodel-marin-county',
      telephone: '+14159689494',
      areaServed: 'Marin County',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a bathroom remodel cost in Marin County?', acceptedAnswer: { '@type': 'Answer', text: 'Luxury bathroom remodels in Marin County range from $25,000 for a powder room to $175,000+ for a primary suite bathroom. All quotes include permits, materials, fixtures and our 10-year warranty.' } },
        { '@type': 'Question', name: 'How long does a bathroom remodel take in Marin County?', acceptedAnswer: { '@type': 'Answer', text: 'Bathroom remodels take 4–10 weeks depending on scope. Primary suite bathrooms with custom tile and heated floors typically require 8–10 weeks.' } },
        { '@type': 'Question', name: 'Does ConstruBay handle bathroom permits in Marin County?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manage all permits with the relevant Marin County building department from application to final approval.' } },
        { '@type': 'Question', name: 'What is included in a ConstruBay bathroom remodel?', acceptedAnswer: { '@type': 'Answer', text: 'Every bathroom remodel includes custom tile, premium fixtures, vanity and cabinetry, lighting, plumbing, permits and our 10-year craftsmanship warranty.' } },
      ],
    },
  ],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const table = [
  ['Primary Suite Bath', '$85,000 – $175,000', '8–10 weeks'],
  ['Guest Bathroom', '$45,000 – $95,000', '6–8 weeks'],
  ['Powder Room', '$25,000 – $55,000', '4–6 weeks'],
]

const included = [
  'Custom tile design and installation',
  'Premium fixture selection and installation',
  'Heated floor systems',
  'Custom vanity and cabinetry',
  'Shower enclosure and frameless glass',
  'Lighting design and installation',
  'Marin County permit acquisition',
  '10-year craftsmanship warranty',
]

const steps = [
  { n: '01', t: 'Site Visit', b: 'Paulo reviews your bathroom and understands your vision.' },
  { n: '02', t: 'Fixed-Price Proposal', b: 'Complete scope locked in writing within 5 business days.' },
  { n: '03', t: 'Permit & Procurement', b: 'We handle all permits and order custom tile and fixtures.' },
  { n: '04', t: 'Construction', b: 'Precise tile work and finish installation with daily updates.' },
  { n: '05', t: 'Final Review', b: 'Paulo personally inspects every tile and fixture before your walkthrough.' },
]

const faqs = [
  { q: 'How much does a bathroom remodel cost in Marin County?', a: 'Luxury bathroom remodels in Marin County range from $25,000 for a powder room to $175,000+ for a primary suite bathroom. All quotes include permits, materials, fixtures and our 10-year warranty.' },
  { q: 'How long does a bathroom remodel take in Marin County?', a: 'Bathroom remodels take 4–10 weeks depending on scope. Primary suite bathrooms with custom tile and heated floors typically require 8–10 weeks.' },
  { q: 'Does ConstruBay handle bathroom permits in Marin County?', a: 'Yes. We manage all permits with the relevant Marin County building department from application to final approval.' },
  { q: 'What is included in a ConstruBay bathroom remodel?', a: 'Every bathroom remodel includes custom tile, premium fixtures, vanity and cabinetry, lighting, plumbing, permits and our 10-year craftsmanship warranty.' },
]

export default function BathroomRemodelMarinCountyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Bathroom Remodeling · Marin County</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Bathroom Remodeling<br />in Marin County
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Spa-Quality Bathrooms in Mill Valley, Tiburon and San Rafael
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            A luxury bathroom remodel transforms one of the most personal spaces in your home. We build spa-quality bathrooms with custom tile work, premium fixtures, heated floors and precision craftsmanship that stands the test of time in Marin County&apos;s most discerning homes.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Bathroom Project
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

        {/* PROCESS */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>How It Works</p>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '2rem' }}>The ConstruBay Process</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((step, i) => (
              <div key={step.n} style={{ display: 'grid', gridTemplateColumns: '3rem 1fr', gap: '1.5rem', padding: '2rem 0', borderTop: i === 0 ? '1px solid #222' : '1px solid #111' }}>
                <p style={{ color: 'rgba(203,178,106,0.4)', fontFamily: CG, fontStyle: 'italic', fontSize: '0.85rem', paddingTop: '0.2rem' }}>{step.n}</p>
                <div>
                  <p style={{ fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', marginBottom: '0.5rem' }}>{step.t}</p>
                  <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.7 }}>{step.b}</p>
                </div>
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
            Start Your Bathroom Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Fixed-price proposal within 5 business days. Every bathroom project starts with a free site visit.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Bathroom Project
          </Link>
        </section>

      </main>
    </>
  )
}
