import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Design-Build Partner for Architects in Marin County | ConstruBay',
  description: 'ConstruBay executes architectural designs with precision in Marin County. Pre-construction review, design fidelity, established relationships with Marin building departments. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/for-architects' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'General Contractor Services for Architects',
  provider: { '@type': 'GeneralContractor', name: 'ConstruBay', telephone: '+14159689494' },
  areaServed: 'Marin County',
  description: 'Luxury general contractor serving architects in Marin County. Design fidelity, constructability review, precise execution. CSLB #1106798.',
}

export default function ForArchitectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>For Architects</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            For Architects
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Your Design Intent. Protected.
          </p>
          <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            You design with specificity. We build with the same attention to detail. Our pre-construction review process identifies constructability issues before they become change orders.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Discuss Your Project
          </Link>
        </section>

        {/* THREE PILLARS */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>How We Work With Architects</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                n: '01',
                t: 'Design Fidelity',
                sub: 'We Treat Your Specifications as Non-Negotiable.',
                b: 'Substitutions require your written approval. Your design arrives at completion the way you drew it.',
              },
              {
                n: '02',
                t: 'Constructability Review',
                sub: 'We Catch Issues in Design. Not in the Field.',
                b: 'Every set of drawings gets a pre-construction review before permit submission.',
              },
              {
                n: '03',
                t: 'Collaboration',
                sub: 'We Speak the Language of Blueprints.',
                b: 'We understand submittal management, RFI processes and the expectations of luxury residential construction in Marin County.',
              },
            ].map((item, i) => (
              <div key={item.n} style={{ display: 'grid', gridTemplateColumns: '3rem 1fr', gap: '2rem', padding: '2.5rem 0', borderTop: i === 0 ? '1px solid #222' : '1px solid #111' }}>
                <p style={{ color: 'rgba(203,178,106,0.4)', fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: '0.85rem', paddingTop: '0.25rem' }}>{item.n}</p>
                <div>
                  <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.t}</p>
                  <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.2rem', marginBottom: '0.75rem', color: '#fff' }}>{item.sub}</p>
                  <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.8rem', lineHeight: 1.7 }}>{item.b}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', background: '#1a1a1a' }}>
            {[
              { num: '10+', label: 'Years in Marin County' },
              { num: '150+', label: 'Projects Completed' },
              { num: '5.0', label: 'Google & Yelp Rating' },
              { num: '#1106798', label: 'CSLB License' },
            ].map((stat) => (
              <div key={stat.label} style={{ background: '#000', padding: '2rem', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '2rem', fontWeight: 300, color: '#cbb26a', marginBottom: '0.5rem' }}>{stat.num}</p>
                <p style={{ fontFamily: 'Montserrat', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Let&apos;s Talk About Your Next Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            We welcome preconstruction partnerships and are available for early-stage project reviews.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Discuss Your Project
          </Link>
        </section>

      </main>
    </>
  )
}
