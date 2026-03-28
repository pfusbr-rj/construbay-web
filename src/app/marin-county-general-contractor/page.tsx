import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
  title: 'General Contractor Marin County | Licensed Luxury Contractor | ConstruBay CSLB #1106798',
  description: "ConstruBay is Marin County's premier licensed luxury general contractor. Mill Valley, Tiburon, San Rafael, Sausalito, Ross, Belvedere. CSLB #1106798. Call (415) 968-9494.",
  alternates: { canonical: 'https://www.construbay.com/marin-county-general-contractor' },
  openGraph: {
    title: 'General Contractor Marin County | ConstruBay CSLB #1106798',
    description: "ConstruBay is Marin County's premier licensed luxury general contractor. CSLB #1106798.",
    url: 'https://www.construbay.com/marin-county-general-contractor',
    siteName: 'ConstruBay',
  },
};

const faqs = [
  {
    q: 'How much does a general contractor cost in Marin County?',
    a: 'General contractor fees in Marin County typically range from 15-25% of total project cost. For luxury projects ConstruBay uses fixed-price contracts — your total investment is locked from day one with no surprise change orders.',
  },
  {
    q: 'Is ConstruBay licensed to work in Marin County?',
    a: 'Yes. ConstruBay holds California Contractors State License #1106798, active since 2009. We are fully licensed, bonded and insured for all residential and commercial work throughout Marin County.',
  },
  {
    q: 'What cities in Marin County does ConstruBay serve?',
    a: 'We serve all of Marin County including Mill Valley, Tiburon, San Rafael, Sausalito, Ross, Belvedere, Kentfield, Larkspur, Corte Madera and Novato.',
  },
  {
    q: 'How long does a home remodel take in Marin County?',
    a: 'Project timelines depend on scope. Kitchen remodels average 10-16 weeks. Full home renovations average 6-10 months. Marin County permit processing adds 4-12 weeks depending on the jurisdiction.',
  },
  {
    q: 'Does ConstruBay handle permits in Marin County?',
    a: 'Yes. We manage the entire permit process from application to final approval. We have established relationships with all Marin County building departments that help expedite approvals.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      name: 'ConstruBay',
      description: 'Licensed luxury general contractor serving Marin County California. Specializing in whole home remodels, ADUs, kitchen and bathroom renovations.',
      url: 'https://www.construbay.com/marin-county-general-contractor',
      telephone: '+14159689494',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mill Valley',
        addressRegion: 'CA',
        postalCode: '94941',
        addressCountry: 'US',
      },
      areaServed: [
        'Mill Valley', 'Tiburon', 'Sausalito', 'San Rafael',
        'Ross', 'Belvedere', 'Kentfield', 'Larkspur',
        'Corte Madera', 'Novato',
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'License',
        licenseNumber: '1106798',
        recognizedBy: {
          '@type': 'Organization',
          name: 'California State License Board',
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
};

const cities = [
  { name: 'Mill Valley', href: '/mill-valley-general-contractor' },
  { name: 'Tiburon', href: '/tiburon-general-contractor' },
  { name: 'San Rafael', href: '/san-rafael-general-contractor' },
  { name: 'Sausalito', href: '/sausalito-general-contractor' },
  { name: 'Ross', href: '/ross-general-contractor' },
  { name: 'Belvedere', href: '/belvedere-general-contractor' },
  { name: 'Kentfield', href: '/kentfield-general-contractor' },
  { name: 'Larkspur', href: '/larkspur-general-contractor' },
  { name: 'Corte Madera', href: '/corte-madera-general-contractor' },
  { name: 'Novato', href: '/novato-general-contractor' },
];

const services = [
  { title: 'Full Home Remodels', href: '/services/whole-house-remodel-marin-county' },
  { title: 'ADU Construction', href: '/adu' },
  { title: 'Kitchen Remodeling', href: '/kitchen-remodeling' },
  { title: 'Bathroom Remodeling', href: '/bathroom-remodeling' },
];

export default function MarinCountyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ position: 'relative', height: '60vh', minHeight: '480px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/hero-bg-1.jpg"
            alt="Licensed general contractor Marin County CA — ConstruBay CSLB #1106798"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '64px 48px', maxWidth: '900px' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Marin County · CSLB #1106798
            </p>
            <h1 className={cormorant.className} style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.1, marginBottom: '20px' }}>
              Licensed General Contractor<br />Marin County
            </h1>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', lineHeight: 1.8, marginBottom: '32px' }}>
              Luxury Residential Construction Across Marin County, California
            </p>
            <a
              href="/request-a-bid"
              className={montserrat.className}
              style={{ display: 'inline-block', backgroundColor: '#cbb26a', color: '#000000', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 40px', textDecoration: 'none', fontWeight: '400' }}
            >
              Request a Consultation
            </a>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6">

          {/* Intro */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={cormorant.className} style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: '300', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, maxWidth: '760px' }}>
              ConstruBay is Marin County&apos;s premier luxury general contractor. Licensed since 2009, we have completed projects across Mill Valley, Tiburon, San Rafael, Sausalito, Ross and Belvedere. Every project is managed personally by founder Paulo Fernandes from permit to final walkthrough. CSLB #1106798.
            </p>
          </section>

          {/* Why ConstruBay */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              Why Choose Us
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: '300', color: '#ffffff', marginBottom: '56px', lineHeight: 1.15 }}>
              Why Marin County Homeowners Choose ConstruBay
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { num: '01', title: 'Local Expertise', body: 'We know every building department in Marin County. Mill Valley, Tiburon, San Rafael, Sausalito — we have established relationships that cut permit timelines in half.' },
                { num: '02', title: 'Fixed-Price Contracts', body: 'No surprise change orders. Ever. Your budget is locked from day one.' },
                { num: '03', title: 'Luxury Finishes', body: 'We work exclusively on high-end residential projects. Every finish is reviewed by Paulo personally before final walkthrough.' },
                { num: '04', title: 'CSLB Licensed', body: 'California Contractors State License #1106798. Active since 2009. Fully bonded and insured.' },
              ].map((item, i) => (
                <div key={item.num} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: '32px', alignItems: 'flex-start', padding: '40px 0', borderTop: i === 0 ? '1px solid rgba(203,178,106,0.15)' : '1px solid rgba(203,178,106,0.08)', borderBottom: i === 3 ? '1px solid rgba(203,178,106,0.15)' : 'none' }}>
                  <p className={cormorant.className} style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(203,178,106,0.5)', paddingTop: '4px' }}>{item.num}</p>
                  <div>
                    <h3 className={montserrat.className} style={{ fontSize: '11px', fontWeight: '400', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '12px' }}>{item.title}</h3>
                    <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, letterSpacing: '0.04em' }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cities */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              Service Area
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              Serving All of Marin County
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5" style={{ gap: '2px', backgroundColor: 'rgba(203,178,106,0.1)' }}>
              {cities.map((city) => (
                <a
                  key={city.name}
                  href={city.href}
                  className={montserrat.className}
                  style={{ backgroundColor: '#000000', padding: '24px 20px', textDecoration: 'none', display: 'block', transition: 'background-color 0.3s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0a0a0a')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#000000')}
                >
                  <span style={{ fontSize: '12px', fontWeight: '300', color: '#cbb26a', letterSpacing: '0.08em' }}>{city.name}</span>
                  <span className="block" style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>Marin County</span>
                </a>
              ))}
            </div>
          </section>

          {/* Services */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              Our Services in Marin County
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px' }}>
              {services.map((s) => (
                <a key={s.title} href={s.href} style={{ border: '1px solid rgba(203,178,106,0.15)', padding: '36px 28px', textDecoration: 'none', display: 'block' }}>
                  <h3 className={cormorant.className} style={{ fontSize: '24px', fontWeight: '300', color: '#ffffff', marginBottom: '8px' }}>{s.title}</h3>
                  <span className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)' }}>View Service →</span>
                </a>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(203,178,106,0.15)', padding: '32px 0' }}>
                <h3 className={montserrat.className} style={{ fontSize: '13px', fontWeight: '400', color: '#ffffff', letterSpacing: '0.05em', marginBottom: '12px' }}>{faq.q}</h3>
                <p className={montserrat.className} style={{ fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9 }}>{faq.a}</p>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section style={{ padding: '80px 0', textAlign: 'center' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '20px' }}>
              Ready to Start Your Marin County Project?
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', color: '#ffffff', marginBottom: '20px' }}>
              Schedule a Free Site Visit
            </h2>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 40px' }}>
              Schedule a free site visit with Paulo. We review your space, understand your goals and provide a fixed-price proposal within 5 business days.
            </p>
            <a
              href="/request-a-bid"
              className={montserrat.className}
              style={{ display: 'inline-block', backgroundColor: '#cbb26a', color: '#000000', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 56px', textDecoration: 'none', fontWeight: '400' }}
            >
              Schedule a Free Site Visit
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
