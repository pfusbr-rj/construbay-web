import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'General Contractor Novato CA | Luxury Home Remodeling | ConstruBay CSLB #1106798',
  description: 'Licensed luxury general contractor in Novato CA. Full home remodels, ADUs, kitchen and bathroom renovations. Largest city in Marin County. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/novato-general-contractor' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ConstruBay',
  telephone: '+14159689494',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Novato',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: ['Novato', 'Mill Valley', 'San Rafael', 'Marin County'],
}

const faqs = [
  { q: 'Is ConstruBay licensed to work in Novato?', a: 'Yes. ConstruBay holds California Contractors State License #1106798, active since 2009. Fully licensed, bonded and insured for all residential work throughout Novato and Marin County.' },
  { q: 'What services does ConstruBay offer in Novato?', a: 'We offer full home remodels, ADU construction, kitchen remodeling, bathroom remodeling and outdoor living projects throughout Novato.' },
  { q: 'How long does a kitchen remodel take in Novato?', a: 'Kitchen remodels in Novato typically take 10-16 weeks depending on scope. We manage the entire permit process with the City of Novato building department.' },
  { q: 'Do you handle permits in Novato CA?', a: 'Yes. We manage all permits with the City of Novato building department from application to final approval.' },
]

export default function NovatoGeneralContractor() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Marin County · Novato</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            Licensed General Contractor<br />Novato, California
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Luxury Home Remodeling in Marin County&apos;s Largest City
          </p>
          <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            ConstruBay brings luxury residential construction to Novato — Marin County&apos;s largest city. From Hamilton neighborhood estates to newer Ignacio developments, we deliver fixed-price renovations with the precision and accountability that Marin homeowners expect. CSLB #1106798.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Request a Consultation
          </Link>
        </section>

        {/* DIFFERENTIATORS */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Why ConstruBay</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { n: '01', t: 'Local Expertise', b: 'Established relationships with the City of Novato building department — permits processed efficiently from day one.' },
              { n: '02', t: 'Fixed-Price Contracts', b: 'Your total investment is locked before we break ground. No surprise change orders. Ever.' },
              { n: '03', t: 'Luxury Finishes', b: 'We work exclusively on high-end residential projects. Every finish reviewed by Paulo Fernandes personally.' },
              { n: '04', t: 'CSLB Licensed', b: 'California Contractors State License #1106798. Active since 2009. Fully bonded and insured.' },
            ].map((item) => (
              <div key={item.n} style={{ borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
                <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.65rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{item.n}</p>
                <p style={{ fontFamily: 'Montserrat', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.t}</p>
                <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.8rem', lineHeight: 1.7 }}>{item.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>FAQ</p>
          {faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #1a1a1a' }}>
              <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.2rem', marginBottom: '0.75rem' }}>{faq.q}</p>
              <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.8rem', lineHeight: 1.8 }}>{faq.a}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Ready to Start Your Novato Project?
          </h2>
          <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Schedule a free site visit. Fixed-price proposal within 5 business days.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Request a Consultation
          </Link>
        </section>

      </main>
    </>
  )
}
