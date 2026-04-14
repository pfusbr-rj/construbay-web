import type { Metadata } from 'next'
import GuideForm from './GuideForm'

const MS = 'Montserrat, sans-serif'
const CG = 'Cormorant Garamond, serif'

export const metadata: Metadata = {
  title: 'Free Marin County Home Remodel Planning Guide | ConstruBay',
  description: 'Download the free Marin County Home Remodel Planning Guide — covers permits, budgeting, timelines, contractor selection, and design. No spam, unsubscribe anytime.',
  alternates: { canonical: 'https://www.construbay.com/free-remodel-guide' },
  openGraph: {
    title: 'Free Marin County Home Remodel Planning Guide | ConstruBay',
    description: 'Everything you need to plan a successful home remodel in Marin County — permits, budgets, timelines, and how to choose the right contractor.',
    url: 'https://www.construbay.com/free-remodel-guide',
    siteName: 'ConstruBay',
    type: 'website',
  },
}

const bullets = [
  {
    icon: '01',
    title: 'Permits & Approvals',
    body: 'Understand exactly which permits your project requires, typical timelines by city, and how to avoid costly delays.',
  },
  {
    icon: '02',
    title: 'Budgeting & Cost Ranges',
    body: 'Real Marin County pricing benchmarks for kitchens, bathrooms, ADUs, and full-home remodels — no guesswork.',
  },
  {
    icon: '03',
    title: 'Project Timelines',
    body: 'Phase-by-phase schedules so you know what to expect from design through final inspection.',
  },
  {
    icon: '04',
    title: 'Choosing the Right Contractor',
    body: 'The 12 questions every Marin homeowner should ask before signing a contract — and the red flags to watch for.',
  },
  {
    icon: '05',
    title: 'Design & Material Selection',
    body: 'How to align your aesthetic vision with structural reality and budget from day one.',
  },
]

export default function FreeRemodelGuidePage() {
  return (
    <main style={{ background: '#000000', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: '120px 24px 80px', maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '24px' }}>
          Free Resource
        </p>
        <h1 style={{ fontFamily: CG, fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.15, marginBottom: '24px' }}>
          Marin County Home Remodel<br />Planning Guide
        </h1>
        <p style={{ fontFamily: MS, fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: '540px', margin: '0 auto 48px' }}>
          The essential resource for Marin County homeowners planning a remodel — written by the team behind hundreds of projects across Mill Valley, Tiburon, Sausalito, and beyond.
        </p>
        {/* Divider */}
        <div style={{ width: '40px', height: '1px', background: 'rgba(203,178,106,0.4)', margin: '0 auto' }} />
      </section>

      {/* Bullets + Form */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 120px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
        {/* What's inside */}
        <div>
          <p style={{ fontFamily: MS, fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '32px' }}>
            What&apos;s inside
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {bullets.map((b) => (
              <li key={b.icon} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: MS, fontSize: '10px', color: '#cbb26a', letterSpacing: '0.1em', minWidth: '24px', paddingTop: '3px' }}>
                  {b.icon}
                </span>
                <div>
                  <p style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '6px' }}>
                    {b.title}
                  </p>
                  <p style={{ fontFamily: MS, fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, margin: 0 }}>
                    {b.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form panel */}
        <div>
          <p style={{ fontFamily: MS, fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '32px' }}>
            Get instant access
          </p>
          <GuideForm />
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>
          ConstruBay &nbsp;·&nbsp; CSLB #1106798 &nbsp;·&nbsp; Marin &amp; Sonoma County &nbsp;·&nbsp; (415) 968-9494
        </p>
      </section>
    </main>
  )
}
