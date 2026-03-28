import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luxury Home Remodel Marin County | High-End Renovation | ConstruBay CSLB #1106798',
  description: 'Luxury home remodeling in Marin County CA. $500k-$2M+ projects. Custom finishes, fixed-price contracts, 10-year warranty. Mill Valley, Tiburon, Ross, Belvedere. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/luxury-home-remodel-marin-county' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ConstruBay',
  description: 'Luxury home remodeling contractor in Marin County CA. $500k–$2M+ projects. CSLB #1106798.',
  url: 'https://www.construbay.com/luxury-home-remodel-marin-county',
  telephone: '+14159689494',
  areaServed: ['Mill Valley', 'Tiburon', 'Ross', 'Belvedere', 'Marin County'],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const table = [
  ['Kitchen Remodel', '$275,000 – $595,000', '12–20 weeks'],
  ['Primary Suite', '$285,000 – $495,000', '14–22 weeks'],
  ['Full Home Remodel', '$850,000 – $2,200,000', '6–14 months'],
  ['ADU Construction', '$280,000 – $600,000', '4–8 months'],
]

export default function LuxuryHomeRemodelMarinCountyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Marin County · Luxury Renovation</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Luxury Home Remodeling<br />in Marin County
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            High-End Residential Renovation — Mill Valley, Tiburon, Ross, Belvedere
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            Marin County demands a different standard of construction. The homes are exceptional. The clients expect precision. The terrain is challenging. ConstruBay was built for exactly this — luxury residential remodeling executed with the care and accountability that $500k–$2M+ projects require.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Luxury Project
          </Link>
        </section>

        {/* WHAT DEFINES LUXURY */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>The Standard</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { n: '01', t: 'Custom Everything', b: 'No off-the-shelf solutions. Custom cabinetry, bespoke millwork, stone sourced specifically for your project.' },
              { n: '02', t: 'Precision Execution', b: 'Tolerances that matter. Tile work, trim and finish carpentry held to standards that separate luxury from ordinary.' },
              { n: '03', t: 'Material Sourcing', b: "We source materials from the same suppliers used by Marin County's top architects. Lead times planned from day one." },
              { n: '04', t: 'White Glove Management', b: 'Daily updates, weekly site meetings, professional photography at completion. Paulo personally signs off on every project.' },
            ].map((item) => (
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

        {/* WHO WE BUILD FOR */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Our Clients</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { t: 'Homeowners', b: 'Marin County families investing in the home they plan to stay in.' },
              { t: 'Architects', b: 'Design professionals who need a builder that protects their design intent.' },
              { t: 'Estate Owners', b: 'Waterfront and hillside estate owners in Ross, Belvedere and Tiburon.' },
            ].map((c) => (
              <div key={c.t} style={{ border: '1px solid #222', padding: '2rem' }}>
                <p style={{ fontFamily: MS, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '0.75rem' }}>{c.t}</p>
                <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.7 }}>{c.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Start Your Luxury Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Fixed-price proposal within 5 business days. Every luxury project starts with a free site visit.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Luxury Project
          </Link>
        </section>

      </main>
    </>
  )
}
