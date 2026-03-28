import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luxury Home Remodeling for Marin County Homeowners | ConstruBay',
  description: 'ConstruBay manages every phase of your Marin County home renovation. Fixed-price contracts, one point of contact, 10-year warranty. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/for-homeowners' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Luxury Home Remodeling for Homeowners',
  provider: { '@type': 'GeneralContractor', name: 'ConstruBay', telephone: '+14159689494' },
  areaServed: 'Marin County',
  description: 'Fixed-price luxury home remodeling for Marin County homeowners. CSLB #1106798.',
}

export default function ForHomeownersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>For Marin County Homeowners</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            For Mill Valley<br />Homeowners
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Your Vision. Our Execution. No Surprises.
          </p>
          <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            You have lived with the outdated kitchen long enough. You have imagined the primary suite. You have worried about the contractor who disappears mid-project. We built ConstruBay for homeowners who expect the same precision from their contractor that they demand from their architect.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Project
          </Link>
        </section>

        {/* THREE PRINCIPLES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>What You Can Expect</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                n: '01',
                t: 'Clarity',
                sub: 'One Point of Contact. Every Phase.',
                b: 'From permit application to final walkthrough — one number, one person, one accountable team. Daily updates. No surprises.',
              },
              {
                n: '02',
                t: 'Certainty',
                sub: 'Fixed-Price Contracts. Your Budget Is Your Budget.',
                b: 'We have never issued an involuntary change order. Your total investment is locked from day one.',
              },
              {
                n: '03',
                t: 'Craftsmanship',
                sub: 'Every Detail Reviewed Before We Call It Complete.',
                b: 'Paulo personally reviews every finish before the final walkthrough. If it is not right we make it right.',
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

        {/* TESTIMONIAL */}
        <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <div style={{ borderLeft: '2px solid #cbb26a', paddingLeft: '2rem' }}>
            <p style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 300, lineHeight: 1.7, marginBottom: '1.5rem' }}>
              &ldquo;ConstruBay handled every detail with precision. The process was seamless from permit to final walkthrough.&rdquo;
            </p>
            <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Nick Bagatello — Mill Valley
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Schedule a Free Site Visit
          </h2>
          <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Paulo visits your home, listens to your goals, and delivers a fixed-price proposal within 5 business days.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Project
          </Link>
        </section>

      </main>
    </>
  )
}
