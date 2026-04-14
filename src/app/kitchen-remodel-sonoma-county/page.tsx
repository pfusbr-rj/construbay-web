import type { Metadata } from 'next'
import Link from 'next/link'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata: Metadata = {
  title: 'Kitchen Remodeling in Sonoma County | ConstruBay CSLB #1106798',
  description: 'Luxury kitchen remodeling in Sonoma County. Petaluma, Sebastopol, Santa Rosa. Custom cabinetry, premium appliances, stone countertops. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/kitchen-remodel-sonoma-county' },
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      name: 'ConstruBay',
      description: 'Luxury kitchen remodeling in Sonoma County. Petaluma, Sebastopol, Santa Rosa. CSLB #1106798.',
      url: 'https://construbay.com/kitchen-remodel-sonoma-county',
      telephone: '+14159689494',
      address: { '@type': 'PostalAddress', addressLocality: 'Mill Valley', addressRegion: 'CA', postalCode: '94941', addressCountry: 'US' },
      areaServed: ['Sonoma County', 'Petaluma', 'Sebastopol', 'Santa Rosa'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a kitchen remodel cost in Sonoma County?', acceptedAnswer: { '@type': 'Answer', text: 'Kitchen remodels in Sonoma County range from $85,000 for a focused renovation to $175,000+ for a full custom kitchen. ConstruBay fixed-scope contracts guarantee the quoted price does not change.' } },
        { '@type': 'Question', name: 'How long does a kitchen remodel take in Petaluma or Sebastopol?', acceptedAnswer: { '@type': 'Answer', text: 'Most kitchen remodels in Sonoma County take 8 to 14 weeks from permit approval to final walkthrough. Custom cabinetry lead times are planned from day one.' } },
        { '@type': 'Question', name: 'Does ConstruBay remodel kitchens in Petaluma and Sebastopol?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. ConstruBay serves all of Sonoma County for kitchen remodeling including Petaluma, Sebastopol, Santa Rosa, Healdsburg, and Sonoma. CSLB license #1106798.' } },
      ],
    },
  ],
}

const included = [
  'Custom cabinetry design and fabrication',
  'Stone or quartz countertop installation',
  'Professional appliance selection and installation',
  'Electrical upgrades for modern kitchen',
  'Plumbing rough-in and finish',
  'Lighting design and installation',
  'Sonoma County permit acquisition',
  '10-year craftsmanship warranty',
]

const table = [
  ['Compact Kitchen  150–200 sq ft', '$85,000 – $130,000', '8–10 weeks'],
  ['Standard Kitchen  200–300 sq ft', '$130,000 – $175,000', '10–14 weeks'],
  ['Gourmet Kitchen  300–400 sq ft', '$175,000 – $250,000', '14–18 weeks'],
]

const steps = [
  { n: '01', t: 'Site Visit', b: 'Paulo reviews your kitchen, understands your cooking style and lifestyle. Every Sonoma County project starts with an in-person visit.' },
  { n: '02', t: 'Fixed-Price Proposal', b: 'Complete scope locked in writing within 5 business days. PlanPass.ai pre-screens the permit path. No surprises after signing.' },
  { n: '03', t: 'Design & Procurement', b: 'Cabinetry design, countertop selection, appliance sourcing. Custom cabinets ordered on day one to protect your timeline.' },
  { n: '04', t: 'Construction', b: 'Phased construction. Daily updates. Paulo on-site for every critical phase across your Sonoma County home.' },
  { n: '05', t: 'Final Review', b: 'Paulo personally inspects every cabinet, countertop and fixture before your walkthrough.' },
]

const faqs = [
  { q: 'How much does a kitchen remodel cost in Sonoma County?', a: 'Kitchen remodels in Sonoma County range from $85,000 for a focused renovation to $175,000+ for a full custom kitchen. ConstruBay fixed-scope contracts guarantee the quoted price does not change.' },
  { q: 'How long does a kitchen remodel take in Petaluma or Sebastopol?', a: 'Most kitchen remodels in Sonoma County take 8 to 14 weeks from permit approval to final walkthrough. Custom cabinetry lead times are planned from day one.' },
  { q: 'Does ConstruBay remodel kitchens in Petaluma and Sebastopol?', a: 'Yes. ConstruBay serves all of Sonoma County for kitchen remodeling including Petaluma, Sebastopol, Santa Rosa, Healdsburg, and Sonoma. CSLB license #1106798.' },
]

export default function KitchenSonomaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Kitchen Remodeling · Sonoma County</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Luxury Kitchen Remodeling in Sonoma County<br />— ConstruBay
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Custom Luxury Kitchens — Petaluma, Sebastopol, Santa Rosa
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            Sonoma County kitchens set the stage for wine country living. Whether you&apos;re renovating a Victorian in Petaluma, a farmhouse in Sebastopol, or a modern home in Santa Rosa, ConstruBay delivers custom kitchen remodels with fixed-price contracts, PlanPass.ai permit intelligence, and 10-year warranty. CSLB #1106798.
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
              {['Scope', 'Investment Range', 'Timeline'].map(h => (
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

        {/* INCLUDED */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '2rem' }}>What Is Included</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 0 }}>
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

        {/* PLANPASS.AI */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Technology</p>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1.25rem' }}>
            PlanPass.ai — Permit Intelligence
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.9, maxWidth: '680px' }}>
            Kitchen remodels that involve structural changes, electrical panel upgrades, or gas line modifications require permits. Sonoma County&apos;s permit timelines vary by city. PlanPass.ai identifies the exact permit requirements and risk level for your Petaluma, Sebastopol, or Santa Rosa property before we sign a contract — so your kitchen timeline has no permit surprises built into it.
          </p>
        </section>

        {/* TESTIMONIAL */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <TestimonialCard
            quote="The kitchen renovation ConstruBay delivered in our Petaluma home was everything we had hoped for and nothing we feared. Fixed price, delivered on schedule, and the custom cabinetry is extraordinary. Paulo and his team are the real deal."
            author="Rebecca & James T."
            city="Petaluma"
            projectType="Kitchen Renovation"
          />
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
            Free site visit. Fixed-price proposal within 5 business days.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Kitchen Project
          </Link>
        </section>

      </main>
    </>
  )
}
