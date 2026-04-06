import type { Metadata } from 'next'
import Link from 'next/link'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata: Metadata = {
  title: 'Luxury Home Remodeling in Napa County | ConstruBay CSLB #1106798',
  description: 'Luxury home remodeling and general contractor in Napa County. Napa, St. Helena, Yountville, Calistoga. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/luxury-home-remodel-napa-county' },
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      name: 'ConstruBay',
      description: 'Luxury home remodeling and general contractor in Napa County. Napa, St. Helena, Yountville, Calistoga. CSLB #1106798.',
      url: 'https://construbay.com/luxury-home-remodel-napa-county',
      telephone: '+14159689494',
      address: { '@type': 'PostalAddress', addressLocality: 'Mill Valley', addressRegion: 'CA', postalCode: '94941', addressCountry: 'US' },
      areaServed: ['Napa County', 'Napa', 'St. Helena', 'Yountville', 'Calistoga'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a luxury home remodel cost in Napa County?', acceptedAnswer: { '@type': 'Answer', text: 'Luxury home remodels in Napa County range from $400,000 for major kitchen and bath renovations to over $1,000,000 for complete estate transformations. ConstruBay provides fixed-scope contracts with no change order surprises.' } },
        { '@type': 'Question', name: 'Does ConstruBay serve St. Helena and Yountville?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. ConstruBay serves all of Napa County including Napa, St. Helena, Yountville, Calistoga, and the surrounding wine country communities. CSLB license #1106798.' } },
        { '@type': 'Question', name: 'What is unique about building in Napa wine country?', acceptedAnswer: { '@type': 'Answer', text: 'Napa County properties often fall under agricultural preservation rules, fire hardening requirements, and wine country design standards. PlanPass.ai analyzes each property\'s specific constraints before we propose a scope.' } },
      ],
    },
  ],
}

const services = [
  { n: '01', t: 'Estate Remodeling', b: 'Napa Valley estate homes require contractors who understand the scale, finish expectations, and agricultural land use constraints of wine country properties.' },
  { n: '02', t: 'Kitchen Remodeling', b: 'World-class wine country homes deserve kitchens that match. Custom cabinetry, La Cornue ranges, quartzite countertops and sommelier-grade storage.' },
  { n: '03', t: 'Outdoor Living', b: 'Pool houses, outdoor kitchens, vineyard terraces and covered entertaining areas built for Napa\'s Mediterranean climate.' },
  { n: '04', t: 'ADU & Guest Houses', b: 'Fully permitted guest houses and ADUs for wine country estates. We navigate Napa County\'s agricultural overlay requirements.' },
  { n: '05', t: 'Fire-Hardening', b: 'Napa County fire hardening upgrades — defensible space, ignition-resistant materials, vent screening. IBHS-compliant builds.' },
  { n: '06', t: 'Permit Expediting', b: 'PlanPass.ai pre-analyzes every Napa County parcel for permit complexity, agricultural constraints, and fire district requirements.' },
]

const cities = ['Napa', 'St. Helena', 'Yountville', 'Calistoga', 'American Canyon', 'Angwin', 'Pope Valley']

const faqs = [
  { q: 'How much does a luxury home remodel cost in Napa County?', a: 'Luxury home remodels in Napa County range from $400,000 for major kitchen and bath renovations to over $1,000,000 for complete estate transformations. ConstruBay provides fixed-scope contracts with no change order surprises.' },
  { q: 'Does ConstruBay serve St. Helena and Yountville?', a: 'Yes. ConstruBay serves all of Napa County including Napa, St. Helena, Yountville, Calistoga, and the surrounding wine country communities. CSLB license #1106798.' },
  { q: 'What is unique about building in Napa wine country?', a: 'Napa County properties often fall under agricultural preservation rules, fire hardening requirements, and wine country design standards. PlanPass.ai analyzes each property\'s specific constraints before we propose a scope.' },
]

export default function LuxuryHomeNapaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Luxury Renovation · Napa County</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Luxury Home Remodeling<br />in Napa County
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Wine Country Estates — Built With Intention
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            Napa Valley&apos;s estate properties sit at the intersection of architectural ambition, agricultural land use law, and fire country building code. ConstruBay brings the same fixed-price accountability and permit intelligence that serves Marin County&apos;s most demanding homes to the wine country estates of Napa, St. Helena, Yountville, and Calistoga. CSLB #1106798.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Napa Project
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
            Napa County combines California&apos;s most protective agricultural land use rules with strict fire zone building codes and historic district requirements in areas like downtown Napa and St. Helena. PlanPass.ai screens every parcel for these constraints before we ever propose a scope — so your budget isn&apos;t held hostage by permit surprises no one saw coming.
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
            quote="Building in Napa County without knowing the agricultural overlay rules is a recipe for disaster. Paulo knew every constraint before we signed. The project moved without a single permit delay and finished exactly as scoped."
            author="William & Diana C."
            city="St. Helena"
            projectType="Estate Kitchen & Outdoor Living"
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
            Start Your Napa County Project
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Fixed-price proposal within 5 business days. Site visit is free and no-obligation.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Start Your Napa Project
          </Link>
        </section>

      </main>
    </>
  )
}
