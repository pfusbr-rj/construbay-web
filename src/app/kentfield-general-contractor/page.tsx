import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'General Contractor Kentfield CA | Luxury Home Remodeling | ConstruBay CSLB #1106798',
  description: 'Licensed luxury general contractor in Kentfield CA. Full home remodels, ADUs, kitchen and bathroom renovations in Kent Woodlands and surrounding estates. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/kentfield-general-contractor' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ConstruBay',
  telephone: '+14159689494',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kentfield',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: ['Kentfield', 'Ross', 'Larkspur', 'Marin County'],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const differentiators = [
  { n: '01', t: 'Kent Woodlands Expertise', b: 'We understand the unique permit process for unincorporated Marin County and the heritage tree preservation requirements that define Kentfield projects.' },
  { n: '02', t: 'Estate-Level Execution', b: 'Kentfield properties demand exceptional craftsmanship. Every finish reviewed by Paulo personally before final walkthrough.' },
  { n: '03', t: 'Fixed-Price Contracts', b: 'No surprise change orders. Your investment is locked from day one.' },
  { n: '04', t: 'CSLB Licensed', b: 'California Contractors State License #1106798. Active since 2009. Fully bonded and insured.' },
]

const faqs = [
  { q: 'Is ConstruBay licensed to work in Kentfield?', a: 'Yes. ConstruBay holds California Contractors State License #1106798, active since 2009. Fully licensed, bonded and insured for all residential work throughout Kentfield and Marin County.' },
  { q: 'What makes Kentfield construction different?', a: 'Kentfield is an unincorporated area of Marin County with large estate properties in Kent Woodlands. Projects often involve hillside engineering, heritage trees and the Marin County building department review process.' },
  { q: 'How long does a home remodel take in Kentfield?', a: 'Kitchen remodels average 10–16 weeks. Full home renovations average 6–10 months. Marin County permits add 4–12 weeks depending on project scope.' },
  { q: 'Do you handle permits for Kentfield projects?', a: 'Yes. Kentfield is unincorporated Marin County — we work directly with the Marin County building department for all permit applications and approvals.' },
]

export default function KentfieldGeneralContractorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>General Contractor · Kentfield, CA</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Licensed General Contractor —<br />Kentfield, California
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Luxury Home Remodeling in Kent Woodlands and Kentfield Estates
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            Kentfield is one of Marin County&apos;s most prestigious unincorporated communities. Kent Woodlands estates, large hillside properties and mature landscaping define a neighborhood where construction demands exceptional care and precision. ConstruBay delivers fixed-price luxury renovations built to the standard Kentfield homeowners expect. CSLB #1106798.
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
            Start Your Kentfield Project
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
