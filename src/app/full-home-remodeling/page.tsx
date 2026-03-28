import type { Metadata } from 'next'
import Link from 'next/link'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata: Metadata = {
  title: 'Full Home Remodeling Marin County 2026 | Whole House Renovation | ConstruBay',
  description: 'Whole house renovation in Marin County from $850K. Fixed-price contracts, permits included, 10-year warranty. Mill Valley, Tiburon, San Rafael. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/full-home-remodeling' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      name: 'ConstruBay',
      description: 'Full home remodeling contractor in Marin County CA. Whole house renovations from $850K. CSLB #1106798.',
      url: 'https://www.construbay.com/full-home-remodeling',
      telephone: '+14159689494',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mill Valley',
        addressRegion: 'CA',
        postalCode: '94941',
        addressCountry: 'US',
      },
      areaServed: 'Marin County',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a full home remodel cost in Marin County?',
          acceptedAnswer: { '@type': 'Answer', text: 'A whole house renovation in Marin County ranges from $850,000 for a 2,000–2,500 sq ft home to $2,200,000+ for homes 3,500–5,000 sq ft. All ranges include permits, materials, labor, and our 10-year structural warranty.' },
        },
        {
          '@type': 'Question',
          name: 'How long does a whole house renovation take?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most whole home renovations in Marin County take 6–14 months depending on scope and size. Permit acquisition adds 4–6 weeks before construction begins. We provide a detailed schedule before the project starts.' },
        },
      ],
    },
  ],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const table = [
  ['2,000–2,500 sq ft', '$850,000 – $1,200,000', '6–8 months'],
  ['2,500–3,500 sq ft', '$1,100,000 – $1,600,000', '8–10 months'],
  ['3,500–5,000 sq ft', '$1,400,000 – $2,200,000', '10–14 months'],
]

const included = [
  'Complete architectural plans and engineering',
  'Marin County permit acquisition and all fees',
  'Structural and MEP engineering coordination',
  'All fixtures, finishes and materials',
  'Full-time project superintendent',
  '10-year structural warranty',
  'Daily site photography and progress reports',
  'Post-completion walkthrough at 11 months',
]

const steps = [
  { n: '01', t: 'Site Visit & Discovery', b: 'Paulo walks your home and listens. We discuss your vision, budget range, and timeline. No sales pressure — just an honest assessment of what is possible.' },
  { n: '02', t: 'Fixed-Price Proposal', b: 'A complete scope, timeline, and fixed price within 5 business days. Every line item is accounted for — there will be no change order surprises.' },
  { n: '03', t: 'Design & Permitting', b: 'We coordinate architectural and engineering plans, handle permit submissions, and manage all county review processes. Permits typically in hand within 4–6 weeks.' },
  { n: '04', t: 'Construction', b: 'Daily site updates. Paulo is personally on-site for every critical phase. Tradespeople are vetted long-term partners, not whoever is available.' },
  { n: '05', t: 'Completion & Warranty', b: 'Thorough walkthrough at completion. We return at 11 months for a complimentary inspection — well within your 1-year warranty coverage.' },
]

const faqs = [
  { q: 'How much does a full home remodel cost in Marin County?', a: 'A whole house renovation in Marin County ranges from $850,000 for a 2,000–2,500 sq ft home to $2,200,000+ for homes 3,500–5,000 sq ft. All ranges include permits, materials, labor, and our 10-year structural warranty.' },
  { q: 'How long does a whole house renovation take?', a: 'Most whole home renovations in Marin County take 6–14 months depending on scope and size. Permit acquisition adds 4–6 weeks before construction begins. We provide a detailed schedule before the project starts.' },
]

export default function FullHomeRemodelingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Full Home Remodeling · Marin County</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Full Home Remodeling<br />in Marin County
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Complete Whole-House Transformations in Mill Valley and Tiburon
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            A whole home renovation is the most complex project a homeowner undertakes. We make it manageable — with fixed pricing, a clear timeline, and a single point of accountability from first site visit to final walkthrough.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Remodel
          </Link>
        </section>

        {/* INVESTMENT TABLE */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>2026 Pricing</p>
          <div style={{ border: '1px solid #1a1a1a' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#0a0a0a', padding: '0.75rem 1.25rem', gap: '1rem' }}>
              {['Home Size', 'Investment Range', 'Timeline'].map((h) => (
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

        {/* Testimonial */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <TestimonialCard
            quote="We had lived through a disastrous whole-home renovation with a previous contractor — missed deadlines, endless change orders, zero communication. ConstruBay was the opposite experience in every possible way. Fixed price, weekly updates, and a final result that exceeded what we hoped for."
            author="Jennifer & Robert P."
            city="Mill Valley"
            projectType="Full Home Remodel"
          />
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Schedule a Free Site Visit
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            We review your space, understand your goals, and provide a fixed-price proposal within 5 business days.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Remodel
          </Link>
        </section>

      </main>
    </>
  )
}
