import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kitchen Remodel San Rafael CA | Luxury Kitchen Renovation | ConstruBay CSLB #1106798',
  description: 'Luxury kitchen remodeling in San Rafael CA. Custom cabinetry, premium appliances, stone countertops. $185k-$595k. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/san-rafael-kitchen-remodel' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'ConstruBay',
      description: 'Luxury kitchen remodeling in San Rafael CA. Custom cabinetry, premium appliances, stone countertops. CSLB #1106798.',
      url: 'https://www.construbay.com/san-rafael-kitchen-remodel',
      telephone: '+14159689494',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Rafael',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      areaServed: 'San Rafael',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a kitchen remodel cost in San Rafael?', acceptedAnswer: { '@type': 'Answer', text: 'Luxury kitchen remodels in San Rafael range from $185,000 for a compact kitchen to $595,000+ for a large gourmet kitchen. All quotes include permits, materials, appliances and our 10-year warranty.' } },
        { '@type': 'Question', name: 'How long does a kitchen remodel take in San Rafael?', acceptedAnswer: { '@type': 'Answer', text: 'Kitchen remodels in San Rafael typically take 10–20 weeks. Custom cabinetry requires 12 weeks fabrication lead time planned from day one.' } },
        { '@type': 'Question', name: 'Does ConstruBay handle San Rafael kitchen permits?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manage all permits with the City of San Rafael building department from application to final approval.' } },
        { '@type': 'Question', name: 'What neighborhoods in San Rafael does ConstruBay serve?', acceptedAnswer: { '@type': 'Answer', text: 'We serve all San Rafael neighborhoods including Dominican, Gerstle Park, Terra Linda, Sun Valley, Lucas Valley and the Canal area.' } },
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
  'San Rafael permit acquisition',
  '10-year craftsmanship warranty',
]

const steps = [
  { n: '01', t: 'Site Visit', b: 'Paulo reviews your kitchen and understands your vision, cooking style and lifestyle.' },
  { n: '02', t: 'Fixed-Price Proposal', b: 'Complete scope locked in writing within 5 business days. No change order surprises.' },
  { n: '03', t: 'Design & Procurement', b: 'We coordinate cabinetry design, countertop selection and appliance procurement. Custom cabinets ordered on day one.' },
  { n: '04', t: 'Construction', b: 'Precise installation with daily updates. Paulo on-site for every critical phase.' },
  { n: '05', t: 'Final Review', b: 'Paulo personally inspects every cabinet, countertop and fixture before your walkthrough.' },
]

const faqs = [
  { q: 'How much does a kitchen remodel cost in San Rafael?', a: 'Luxury kitchen remodels in San Rafael range from $185,000 for a compact kitchen to $595,000+ for a large gourmet kitchen. All quotes include permits, materials, appliances and our 10-year warranty.' },
  { q: 'How long does a kitchen remodel take in San Rafael?', a: 'Kitchen remodels in San Rafael typically take 10–20 weeks. Custom cabinetry requires 12 weeks fabrication lead time planned from day one.' },
  { q: 'Does ConstruBay handle San Rafael kitchen permits?', a: 'Yes. We manage all permits with the City of San Rafael building department from application to final approval.' },
  { q: 'What neighborhoods in San Rafael does ConstruBay serve?', a: 'We serve all San Rafael neighborhoods including Dominican, Gerstle Park, Terra Linda, Sun Valley, Lucas Valley and the Canal area.' },
]

export default function SanRafaelKitchenRemodelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Kitchen Remodeling · San Rafael, CA</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Luxury Kitchen Remodel —<br />San Rafael, California
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Custom Luxury Kitchens in Marin County&apos;s Largest City
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            San Rafael is the heart of Marin County — and its homes deserve kitchens that reflect the quality of Marin living. ConstruBay builds luxury kitchens throughout San Rafael with custom cabinetry, premium appliances and precision craftsmanship. Fixed-price contracts. 10-year warranty. CSLB #1106798.
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
