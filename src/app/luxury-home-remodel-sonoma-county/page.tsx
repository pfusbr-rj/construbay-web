import type { Metadata } from 'next'
import Link from 'next/link'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata: Metadata = {
  title: 'Luxury Home Remodeling in Sonoma County | ConstruBay CSLB #1106798',
  description: 'Luxury home remodeling and general contractor services in Sonoma County. Petaluma, Sebastopol, Santa Rosa, Healdsburg. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/luxury-home-remodel-sonoma-county' },
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      name: 'ConstruBay',
      description: 'Luxury home remodeling and general contractor in Sonoma County. Petaluma, Sebastopol, Santa Rosa, Healdsburg. CSLB #1106798.',
      url: 'https://construbay.com/luxury-home-remodel-sonoma-county',
      telephone: '+14159689494',
      address: { '@type': 'PostalAddress', addressLocality: 'Mill Valley', addressRegion: 'CA', postalCode: '94941', addressCountry: 'US' },
      areaServed: ['Sonoma County', 'Petaluma', 'Sebastopol', 'Santa Rosa', 'Healdsburg', 'Sonoma'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a luxury home remodel cost in Sonoma County?', acceptedAnswer: { '@type': 'Answer', text: 'Luxury home remodels in Sonoma County range from $350,000 for a major kitchen and suite renovation to $900,000+ for a full whole-home transformation. ConstruBay provides fixed-scope contracts so the price you agree on is the price you pay.' } },
        { '@type': 'Question', name: 'Does ConstruBay serve Petaluma and Sebastopol?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. ConstruBay serves all of Sonoma County including Petaluma, Sebastopol, Santa Rosa, Healdsburg, and Sonoma. CSLB license #1106798.' } },
        { '@type': 'Question', name: 'How does PlanPass.ai help Sonoma County projects?', acceptedAnswer: { '@type': 'Answer', text: 'PlanPass.ai pre-analyzes permit risk for each Sonoma County jurisdiction before construction begins. This prevents permit-related cost overruns that are common in Sonoma County\'s varied planning departments.' } },
      ],
    },
  ],
}

const services = [
  { n: '01', t: 'Full Home Remodels', b: 'Complete design-build transformations for Sonoma County estates — from Healdsburg wine country compounds to Petaluma Victorian restorations.' },
  { n: '02', t: 'Kitchen Remodeling', b: 'Custom cabinetry, premium appliances, and precision stonework. Sonoma wine country living deserves a kitchen that performs at that level.' },
  { n: '03', t: 'Primary Suite & Bath', b: 'Spa-quality bathrooms and private suite additions designed for the pace of Sonoma County living.' },
  { n: '04', t: 'ADU Construction', b: 'Fully permitted accessory dwelling units across all Sonoma County jurisdictions. We handle design, permits, and build.' },
  { n: '05', t: 'Outdoor Living', b: "Custom decks, pergolas, outdoor kitchens and pool houses that take advantage of Sonoma's year-round climate." },
  { n: '06', t: 'Permit Expediting', b: 'Sonoma County permit offices vary by city. PlanPass.ai pre-analyzes each jurisdiction for maximum approval speed.' },
]

const cities = ['Petaluma', 'Sebastopol', 'Santa Rosa', 'Sonoma', 'Healdsburg', 'Rohnert Park', 'Windsor', 'Cloverdale']

const faqs = [
  { q: 'How much does a luxury home remodel cost in Sonoma County?', a: 'Luxury home remodels in Sonoma County range from $350,000 for a major kitchen and suite renovation to $900,000+ for a full whole-home transformation. ConstruBay provides fixed-scope contracts so the price you agree on is the price you pay.' },
  { q: 'Does ConstruBay serve Petaluma and Sebastopol?', a: 'Yes. ConstruBay serves all of Sonoma County including Petaluma, Sebastopol, Santa Rosa, Healdsburg, and Sonoma. CSLB license #1106798.' },
  { q: 'How does PlanPass.ai help Sonoma County projects?', a: 'PlanPass.ai pre-analyzes permit risk for each Sonoma County jurisdiction before construction begins. This prevents permit-related cost overruns that are common in Sonoma County\'s varied planning departments.' },
]

export default function LuxuryHomeSonomaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Luxury Renovation · Sonoma County</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Luxury Home Remodeling<br />in Sonoma County
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Built With Intention — Across All of Sonoma County
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            Sonoma County homes from Petaluma&apos;s Victorian corridors to Healdsburg&apos;s wine country estates demand contractors who match the character of the region. ConstruBay brings Marin County&apos;s standard of fixed-price luxury construction to all of Sonoma — with PlanPass.ai permit intelligence and personal oversight from Paulo Fernandes on every project. CSLB #1106798.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Sonoma Project
          </Link>
        </section>

        {/* SERVICES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>What We Build</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {services.map(item => (
              <div key={item.n} style={{ borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
                <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{item.n}</p>
                <p style={{ fontFamily: MS, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.t}</p>
                <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.7 }}>{item.b}</p>
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
            Sonoma County has some of California&apos;s most varied local planning departments — from Petaluma&apos;s active urban corridor to Sebastopol&apos;s agricultural overlay zones. PlanPass.ai analyzes your specific property&apos;s permit exposure before a single dollar is committed to construction. It&apos;s how we deliver budget certainty that other Sonoma contractors can&apos;t promise.
          </p>
        </section>

        {/* CITIES */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Cities Served</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {cities.map(city => (
              <span key={city} style={{ border: '1px solid #222', padding: '0.5rem 1.25rem', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)' }}>{city}</span>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <TestimonialCard
            quote="We had been through two contractors before ConstruBay. Paulo was the only one who gave us a real number from day one and stood behind it. Our Petaluma kitchen came in on time, on budget, and the craftsmanship is extraordinary."
            author="Sandra & Tom R."
            city="Petaluma"
            projectType="Kitchen Remodel"
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
            Start Your Sonoma County Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Fixed-price proposal within 5 business days. Site visit is free and no-obligation.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Sonoma Project
          </Link>
        </section>

      </main>
    </>
  )
}
