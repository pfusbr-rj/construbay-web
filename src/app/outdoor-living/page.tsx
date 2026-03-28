import type { Metadata } from 'next'
import Link from 'next/link'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata: Metadata = {
  title: 'Outdoor Living Construction Marin County | Decks Pools Pergolas | ConstruBay',
  description: 'Custom outdoor living spaces in Marin County CA. Decks, pool houses, outdoor kitchens, pergolas. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/outdoor-living' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Outdoor Living Construction',
  provider: { '@type': 'GeneralContractor', name: 'ConstruBay', telephone: '+14159689494' },
  areaServed: 'Marin County',
  description: 'Custom outdoor living spaces in Marin County — decks, outdoor kitchens, pool houses, pergolas. CSLB #1106798.',
}

const table = [
  ['Custom Deck  500 sq ft', '$85,000 – $145,000', '6–10 weeks'],
  ['Outdoor Kitchen', '$65,000 – $125,000', '8–12 weeks'],
  ['Pool House', '$280,000 – $480,000', '4–6 months'],
  ['Pergola / Covered Patio', '$45,000 – $95,000', '4–8 weeks'],
]

export default function OutdoorLivingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Outdoor Living · Marin County</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            Outdoor Living<br />in Marin County
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Custom Decks, Pool Houses and Outdoor Kitchens
          </p>
          <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            Marin County&apos;s climate and natural beauty demand exceptional outdoor spaces. We design and build custom outdoor living areas that seamlessly extend your home into the landscape — decks with bay views, outdoor kitchens for year-round entertaining and pool houses that complement your property.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Outdoor Project
          </Link>
        </section>

        {/* SERVICES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>What We Build</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { n: '01', t: 'Decks & Terraces', b: "Custom decks designed for Marin's hillside terrain. Hardwood, composite and concrete options engineered for hillside loads." },
              { n: '02', t: 'Outdoor Kitchens', b: 'Year-round outdoor cooking and entertaining. Built-in grills, refrigeration, bar seating and shade structures.' },
              { n: '03', t: 'Pool Houses', b: 'Fully appointed pool houses with bathroom, changing area and entertaining space. Permitted and built to match your home.' },
              { n: '04', t: 'Pergolas & Shade', b: "Custom pergolas, shade sails and covered patios extending your living space through Marin's foggy seasons." },
            ].map((item) => (
              <div key={item.n} style={{ borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
                <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.65rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{item.n}</p>
                <p style={{ fontFamily: 'Montserrat', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.t}</p>
                <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.8rem', lineHeight: 1.7 }}>{item.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INVESTMENT TABLE */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>2026 Pricing</p>
          <div style={{ border: '1px solid #1a1a1a' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#0a0a0a', padding: '0.75rem 1.5rem', gap: '1rem' }}>
              {['Scope', 'Investment Range', 'Timeline'].map((h) => (
                <span key={h} style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)' }}>{h}</span>
              ))}
            </div>
            {table.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '1.25rem 1.5rem', gap: '1rem', background: i % 2 === 0 ? '#000' : '#050505', borderTop: '1px solid #111' }}>
                <span style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.1rem', fontWeight: 300 }}>{row[0]}</span>
                <span style={{ fontFamily: 'Montserrat', fontSize: '0.8rem', color: '#cbb26a' }}>{row[1]}</span>
                <span style={{ fontFamily: 'Montserrat', fontSize: '0.7rem', color: '#666' }}>{row[2]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <TestimonialCard
            quote="Our new deck and outdoor kitchen have completely transformed how we use our home. ConstruBay engineered it perfectly for our hillside lot and the bay views are framed exactly as Paulo promised they would be."
            author="Andrew & Patricia L."
            city="Sausalito"
            projectType="Deck & Outdoor Kitchen"
          />
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Start Your Outdoor Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Schedule a free site visit. Fixed-price proposal within 5 business days.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Outdoor Project
          </Link>
        </section>

      </main>
    </>
  )
}
