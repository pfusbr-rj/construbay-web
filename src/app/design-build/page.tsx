import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Design-Build Contractor Marin County | ConstruBay CSLB #1106798',
  description: 'Design-build general contractor in Marin County CA. Integrated design and construction. Single point of accountability. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/design-build' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Design-Build Construction Services',
  provider: { '@type': 'GeneralContractor', name: 'ConstruBay', telephone: '+14159689494' },
  areaServed: 'Marin County',
  description: 'Design-build general contractor in Marin County CA. Single point of accountability. CSLB #1106798.',
}

export default function DesignBuildPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Design-Build · Marin County</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            Design-Build<br />in Marin County
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Integrated Design and Construction — Single Point of Accountability
          </p>
          <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            Traditional construction separates design from building — creating gaps where budgets blow out and timelines collapse. Our design-build approach integrates both under one roof. One contract, one team, one point of accountability from first sketch to final walkthrough.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Discuss Your Project
          </Link>
        </section>

        {/* BENEFITS */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>The Advantages</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { n: '01', t: 'Single Contract', b: 'One agreement covers design and construction. No finger-pointing between architect and contractor.' },
              { n: '02', t: 'Faster Delivery', b: 'Design and construction overlap. We begin procurement and permit prep while design is still being refined.' },
              { n: '03', t: 'Budget Certainty', b: 'We price the project during design — not after. No surprises when construction begins.' },
              { n: '04', t: 'Design Intent Protected', b: 'The team that designs it builds it. Your vision arrives at completion intact.' },
            ].map((item) => (
              <div key={item.n} style={{ borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
                <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.65rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{item.n}</p>
                <p style={{ fontFamily: 'Montserrat', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.t}</p>
                <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.8rem', lineHeight: 1.7 }}>{item.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARISON */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Design-Build vs. Traditional</p>
          <div style={{ border: '1px solid #1a1a1a' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#0a0a0a', padding: '0.75rem 1.5rem', gap: '1rem' }}>
              {['', 'Traditional', 'Design-Build'].map((h, i) => (
                <span key={i} style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: i === 2 ? '#cbb26a' : 'rgba(203,178,106,0.5)' }}>{h}</span>
              ))}
            </div>
            {[
              ['Design responsibility', 'Architect only', 'Integrated team'],
              ['Construction responsibility', 'Contractor only', 'Integrated team'],
              ['Budget control', 'After design is complete', 'Throughout design'],
              ['Change order risk', 'High', 'Significantly reduced'],
              ['Points of contact', 'Multiple', 'One'],
              ['Timeline', 'Sequential', 'Overlapping'],
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '1rem 1.5rem', gap: '1rem', background: i % 2 === 0 ? '#000' : '#050505', borderTop: '1px solid #111' }}>
                <span style={{ fontFamily: 'Montserrat', fontSize: '0.75rem', color: '#888' }}>{row[0]}</span>
                <span style={{ fontFamily: 'Montserrat', fontSize: '0.75rem', color: '#555' }}>{row[1]}</span>
                <span style={{ fontFamily: 'Montserrat', fontSize: '0.75rem', color: '#cbb26a' }}>{row[2]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Discuss Your Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Design-build works best when the conversation starts early — even if you&apos;re still in the thinking phase.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Discuss Your Project
          </Link>
        </section>

      </main>
    </>
  )
}
