import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'General Contractor Larkspur CA | Luxury Home Remodeling | ConstruBay CSLB #1106798',
  description: 'Licensed luxury general contractor in Larkspur CA. Full home remodels, ADUs, kitchen and bathroom renovations. Historic downtown, waterfront properties. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/larkspur-general-contractor' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ConstruBay',
  telephone: '+14159689494',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Larkspur',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: ['Larkspur', 'Corte Madera', 'Kentfield', 'Greenbrae', 'Marin County'],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const differentiators = [
  { n: '01', t: 'Larkspur Expertise', b: 'From historic downtown properties to modern Greenbrae homes, we understand the unique construction requirements across all Larkspur neighborhoods.' },
  { n: '02', t: 'City Permit Relationships', b: 'We have established relationships with the City of Larkspur building department that streamline permit approvals.' },
  { n: '03', t: 'Fixed-Price Contracts', b: 'No surprise change orders. Your investment is locked from day one.' },
  { n: '04', t: 'CSLB Licensed', b: 'California Contractors State License #1106798. Active since 2009. Fully bonded and insured.' },
]

const faqs = [
  { q: 'Is ConstruBay licensed to work in Larkspur?', a: 'Yes. ConstruBay holds California Contractors State License #1106798. Fully licensed, bonded and insured for all residential work throughout Larkspur and Marin County.' },
  { q: 'What types of projects does ConstruBay do in Larkspur?', a: 'We handle full home remodels, ADU construction, kitchen remodeling, bathroom remodeling and outdoor living projects throughout Larkspur including the historic downtown area and Greenbrae.' },
  { q: 'How do permits work in Larkspur?', a: 'Larkspur has its own building department. We manage the entire permit process from application to final approval, leveraging our established relationship with the City of Larkspur.' },
  { q: 'Do you work in Greenbrae and Larkspur Landing?', a: 'Yes. We serve all Larkspur neighborhoods including Greenbrae, Larkspur Landing, Baltimore Canyon and the historic downtown area.' },
]

export default function LarkspurGeneralContractorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>General Contractor · Larkspur, CA</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Licensed General Contractor —<br />Larkspur, California
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Luxury Home Remodeling in Larkspur, Greenbrae and Baltimore Canyon
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            Larkspur combines historic charm with waterfront living and canyon neighborhoods that demand specialized construction expertise. From downtown Victorian restorations to modern Greenbrae renovations, ConstruBay delivers precision craftsmanship with fixed-price accountability. CSLB #1106798.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Request a Consultation
          </Link>
        </section>

        {/* DIFFERENTIATORS */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Why ConstruBay</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {differentiators.map((item) => (
              <div key={item.n} style={{ borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
                <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{item.n}</p>
                <p style={{ fontFamily: MS, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.t}</p>
                <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.7 }}>{item.b}</p>
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
            Start Your Larkspur Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            We review your space, understand your goals and provide a fixed-price proposal within 5 business days.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Request a Consultation
          </Link>
        </section>

      </main>
    </>
  )
}
