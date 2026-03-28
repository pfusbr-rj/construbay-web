import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: 'General Contractor Marin County | ConstruBay CSLB #1106798',
  description: 'Licensed luxury general contractor serving all of Marin County. Mill Valley, Tiburon, San Rafael, Sausalito, Ross, Belvedere. CSLB #1106798. Call (415) 968-9494.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ConstruBay',
  description: 'Licensed luxury general contractor serving Marin County California.',
  url: 'https://www.construbay.com/marin-county-general-contractor',
  telephone: '+14159689494',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mill Valley',
    addressRegion: 'CA',
    postalCode: '94941',
    addressCountry: 'US',
  },
  areaServed: ['Mill Valley', 'Tiburon', 'Sausalito', 'San Rafael', 'Ross', 'Belvedere', 'Kentfield', 'Larkspur', 'Corte Madera', 'Novato'],
}

const cities = [
  { name: 'Mill Valley', slug: 'mill-valley-general-contractor' },
  { name: 'Tiburon', slug: 'tiburon-general-contractor' },
  { name: 'San Rafael', slug: 'san-rafael-general-contractor' },
  { name: 'Sausalito', slug: 'sausalito-general-contractor' },
  { name: 'Ross', slug: 'ross-general-contractor' },
  { name: 'Belvedere', slug: 'belvedere-general-contractor' },
  { name: 'Kentfield', slug: 'kentfield-general-contractor' },
  { name: 'Larkspur', slug: 'larkspur-general-contractor' },
  { name: 'Corte Madera', slug: 'corte-madera-general-contractor' },
  { name: 'Novato', slug: 'novato-general-contractor' },
]

const faqs = [
  {
    q: 'How much does a general contractor cost in Marin County?',
    a: 'General contractor fees in Marin County typically range from 15-25% of total project cost. ConstruBay uses fixed-price contracts — your total investment is locked from day one with no surprise change orders.',
  },
  {
    q: 'Is ConstruBay licensed to work in Marin County?',
    a: 'Yes. ConstruBay holds California Contractors State License #1106798, active since 2009. Fully licensed, bonded and insured for all residential work throughout Marin County.',
  },
  {
    q: 'What cities in Marin County does ConstruBay serve?',
    a: 'We serve all of Marin County including Mill Valley, Tiburon, San Rafael, Sausalito, Ross, Belvedere, Kentfield, Larkspur, Corte Madera and Novato.',
  },
  {
    q: 'How long does a home remodel take in Marin County?',
    a: 'Kitchen remodels average 10-16 weeks. Full home renovations average 6-10 months. Marin County permit processing adds 4-12 weeks depending on jurisdiction.',
  },
  {
    q: 'Does ConstruBay handle permits in Marin County?',
    a: 'Yes. We manage the entire permit process from application to final approval. We have established relationships with all Marin County building departments.',
  },
]

export default function MarinCountyGeneralContractor() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Marin County</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            Licensed General Contractor<br />Marin County, California
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Luxury Residential Construction Across Marin County
          </p>
          <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            ConstruBay is Marin County&apos;s premier luxury general contractor. Licensed since 2009, we deliver precision craftsmanship across Mill Valley, Tiburon, San Rafael, Sausalito, Ross and Belvedere. CSLB #1106798.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Request a Consultation
          </Link>
        </section>

        {/* WHY CONSTRUBAY */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Why ConstruBay</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { n: '01', t: 'Local Expertise', b: 'Established relationships with every Marin County building department cut permit timelines in half.' },
              { n: '02', t: 'Fixed-Price Contracts', b: 'No surprise change orders. Ever. Your budget is locked from day one.' },
              { n: '03', t: 'Luxury Finishes', b: 'We work exclusively on high-end residential projects. Every finish reviewed by Paulo personally.' },
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

        {/* CITIES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Service Area</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {cities.map((city) => (
              <Link key={city.slug} href={`/${city.slug}`} style={{ display: 'block', padding: '1rem', border: '1px solid #222', color: '#fff', textDecoration: 'none', fontFamily: 'Montserrat', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'border-color 0.2s' }}>
                {city.name}
              </Link>
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
            Ready to Start Your Marin County Project?
          </h2>
          <p style={{ color: '#aaa', fontFamily: 'Montserrat', fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Schedule a free site visit. Fixed-price proposal within 5 business days.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Schedule a Free Site Visit
          </Link>
        </section>

      </main>
    </>
  )
}
