import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cost to Remodel a Home in Marin County 2026 | Real Pricing | ConstruBay',
  description: 'Real pricing for luxury home renovations in Marin County CA. Kitchen $185k-$595k. Whole home $850k-$2.2M. ADU $280k-$600k. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/investments' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cost to Remodel a Home in Marin County 2026',
  description: 'Real pricing data for luxury home renovations in Marin County California',
  author: { '@type': 'Organization', name: 'ConstruBay', url: 'https://www.construbay.com' },
  datePublished: '2026-01-01',
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const tables = [
  {
    title: 'Kitchen Renovation',
    rows: [
      ['Compact Kitchen  150–200 sq ft', '$185,000 – $245,000', '10–12 weeks'],
      ['Standard Kitchen  200–300 sq ft', '$275,000 – $385,000', '12–16 weeks'],
      ['Gourmet Kitchen  300–400 sq ft', '$425,000 – $595,000', '16–20 weeks'],
    ],
  },
  {
    title: 'Whole House Renovation',
    rows: [
      ['2,000–2,500 sq ft', '$850,000 – $1,200,000', '6–8 months'],
      ['2,500–3,500 sq ft', '$1,100,000 – $1,600,000', '8–10 months'],
      ['3,500–5,000 sq ft', '$1,400,000 – $2,200,000', '10–14 months'],
    ],
  },
  {
    title: 'ADU Construction',
    rows: [
      ['Standard ADU  up to 800 sq ft', '$280,000 – $420,000', '4–6 months'],
      ['Large ADU  800–1,200 sq ft', '$420,000 – $600,000', '6–8 months'],
    ],
  },
  {
    title: 'Bathroom Remodel',
    rows: [
      ['Primary Suite Bath', '$85,000 – $175,000', '8–10 weeks'],
      ['Guest Bathroom', '$45,000 – $95,000', '6–8 weeks'],
      ['Powder Room', '$25,000 – $55,000', '4–6 weeks'],
    ],
  },
]

const included = [
  'Complete architectural plans and engineering',
  'Marin County permit acquisition and all fees',
  'All materials, fixtures and finishes',
  'Full-time project superintendent',
  'Daily site cleanup and protection',
  'Professional photography at completion',
  '10-year structural warranty',
  'Post-completion walkthrough at 11 months',
]

const reasons = [
  { n: '01', t: 'Hillside Engineering', b: 'Slopes require geotechnical surveys and engineered foundations before any interior work begins.' },
  { n: '02', t: 'Permit Complexity', b: 'Mill Valley and Tiburon building departments average 8–12 weeks. We reduce this to 4–6 weeks.' },
  { n: '03', t: 'Material Logistics', b: 'Narrow roads and heritage tree restrictions often require crane-assisted delivery.' },
]

export default function InvestmentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>2026 Pricing Guide</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Investing in Marin County
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '2rem' }}>
            The 2026 Luxury Remodeling Cost Guide
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '680px', marginBottom: '1.5rem' }}>
            Real numbers for luxury projects in Marin County. Based on completed projects in Mill Valley, Tiburon and Kentfield. Every quote includes permits, materials, labor and our 10-year warranty. No surprise change orders.
          </p>
          <p style={{ color: '#888', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.8, maxWidth: '680px' }}>
            We have completed projects across Marin County since 2009. Building in Marin carries a 20–35% premium over national averages due to hillside engineering, permit complexity and material logistics. We factor all of this into every quote upfront.
          </p>
        </section>

        {/* COST TABLES */}
        {tables.map((table) => (
          <section key={table.title} style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
            <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Pricing</p>
            <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1.5rem' }}>{table.title}</h2>
            <div style={{ border: '1px solid #1a1a1a' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#0a0a0a', padding: '0.75rem 1.25rem', gap: '1rem' }}>
                {['Scope', 'Investment Range', 'Timeline'].map((h) => (
                  <span key={h} style={{ fontFamily: MS, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)' }}>{h}</span>
                ))}
              </div>
              {table.rows.map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '1.1rem 1.25rem', gap: '1rem', background: i % 2 === 0 ? '#000' : '#040404', borderTop: '1px solid #111' }}>
                  <span style={{ fontFamily: CG, fontSize: '1.1rem', fontWeight: 300 }}>{row[0]}</span>
                  <span style={{ fontFamily: MS, fontSize: '0.8rem', color: '#cbb26a' }}>{row[1]}</span>
                  <span style={{ fontFamily: MS, fontSize: '0.7rem', color: '#555' }}>{row[2]}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

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

        {/* WHY MARIN COSTS MORE */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '0.75rem' }}>Why Marin County Costs More</h2>
          <p style={{ color: '#888', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Building in Marin County carries a 20–35% premium over national averages.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {reasons.map((r) => (
              <div key={r.n} style={{ borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
                <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{r.n}</p>
                <p style={{ fontFamily: MS, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{r.t}</p>
                <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.7 }}>{r.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Get Your Specific Project Estimate
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            For an exact quote on your Marin County home we need to see the space and understand your goals.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Schedule a Site Visit
          </Link>
        </section>

      </main>
    </>
  )
}
