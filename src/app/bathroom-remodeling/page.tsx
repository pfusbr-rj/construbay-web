import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
  title: 'Bathroom Remodeling Marin County | Luxury Bathroom Renovation | ConstruBay',
  description: 'Luxury bathroom remodeling in Marin County CA. Custom tile, premium fixtures, spa-quality finishes. $45k-$175k. Fixed-price contracts. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/bathroom-remodeling' },
  openGraph: {
    title: 'Bathroom Remodeling Marin County | ConstruBay CSLB #1106798',
    url: 'https://www.construbay.com/bathroom-remodeling',
    siteName: 'ConstruBay',
  },
};

const faqs = [
  {
    q: 'How much does a bathroom remodel cost in Marin County?',
    a: 'Luxury bathroom remodels in Marin County range from $25,000 for a powder room to $175,000+ for a primary suite bathroom. All quotes include permits, materials, fixtures and our 10-year warranty.',
  },
  {
    q: 'How long does a bathroom remodel take in Mill Valley?',
    a: 'Bathroom remodels take 4-10 weeks depending on scope. Primary suite bathrooms with custom tile and heated floors typically require 8-10 weeks.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      name: 'ConstruBay',
      description: 'Luxury bathroom remodeling in Marin County. Custom tile, premium fixtures, spa-quality finishes. Fixed-price contracts.',
      url: 'https://www.construbay.com/bathroom-remodeling',
      telephone: '+14159689494',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mill Valley',
        addressRegion: 'CA',
        postalCode: '94941',
        addressCountry: 'US',
      },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'License',
        licenseNumber: '1106798',
        recognizedBy: { '@type': 'Organization', name: 'California State License Board' },
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

const ranges = [
  { label: 'Primary Suite Bath', low: '$85,000', high: '$175,000', weeks: '8–10 weeks' },
  { label: 'Guest Bathroom', low: '$45,000', high: '$95,000', weeks: '6–8 weeks' },
  { label: 'Powder Room', low: '$25,000', high: '$55,000', weeks: '4–6 weeks' },
];

const included = [
  'Custom tile design and installation',
  'Premium fixture selection and installation',
  'Heated floor systems',
  'Custom vanity and cabinetry',
  'Shower enclosure and glass',
  'Lighting design',
  'Marin County permits',
  '10-year warranty',
];

const process = [
  { num: '01', title: 'Design Consultation', body: 'We review your space, lifestyle and goals. Paulo personally oversees every bathroom project.' },
  { num: '02', title: 'Fixed-Price Proposal', body: 'Complete scope, tile selections, fixtures and timeline locked in writing before we break ground.' },
  { num: '03', title: 'Permit & Procurement', body: 'We handle all permits and source custom tile and fixtures — lead times planned from day one.' },
  { num: '04', title: 'Construction', body: 'Sequenced construction minimizing disruption. Daily updates throughout the project.' },
  { num: '05', title: 'Final Review', body: 'Paulo personally inspects every tile, fixture and finish before your final walkthrough.' },
];

export default function BathroomRemodelingPage() {
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
            src="/images/gallery/bathroom02.jpg"
            alt="Luxury bathroom remodeling Marin County by ConstruBay CSLB #1106798"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.88) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '64px 48px', maxWidth: '900px' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Bathroom Remodeling · Marin County
            </p>
            <h1 className={cormorant.className} style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.1, marginBottom: '16px' }}>
              Bathroom Remodeling<br />in Marin County
            </h1>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.65)' }}>
              Spa-Quality Bathrooms in Mill Valley, Tiburon and San Rafael
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6">

          {/* Opening */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={cormorant.className} style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: '300', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, maxWidth: '760px' }}>
              A luxury bathroom remodel transforms one of the most personal spaces in your home. We build spa-quality bathrooms with custom tile work, premium fixtures, heated floors and precision craftsmanship that stands the test of time.
            </p>
          </section>

          {/* Investment Ranges */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              Pricing Guide
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              Bathroom Remodeling Investment
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', backgroundColor: 'rgba(203,178,106,0.1)' }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: '#0a0a0a', padding: '16px 28px' }}>
                {['Scope', 'Investment Range', 'Timeline'].map(h => (
                  <span key={h} className={montserrat.className} style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.5)' }}>{h}</span>
                ))}
              </div>
              {ranges.map((row) => (
                <div key={row.label} className="grid grid-cols-3" style={{ backgroundColor: '#000000', padding: '24px 28px', alignItems: 'center' }}>
                  <span className={cormorant.className} style={{ fontSize: '22px', fontWeight: '300', color: '#ffffff' }}>{row.label}</span>
                  <span className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: '#cbb26a', letterSpacing: '0.03em' }}>{row.low} – {row.high}</span>
                  <span className={montserrat.className} style={{ fontSize: '11px', fontWeight: '300', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>{row.weeks}</span>
                </div>
              ))}
            </div>
            <p className={montserrat.className} style={{ fontSize: '10px', fontWeight: '300', color: 'rgba(255,255,255,0.3)', marginTop: '16px', letterSpacing: '0.05em' }}>
              All ranges include permits, materials, labor and 10-year warranty. Final quote depends on scope and finishes.
            </p>
          </section>

          {/* What's Included */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              What Is Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '0px' }}>
              {included.map((item) => (
                <div key={item} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px 0', borderBottom: '1px solid rgba(203,178,106,0.08)' }}>
                  <span style={{ color: '#cbb26a', flexShrink: 0, fontFamily: 'serif', fontSize: '16px', lineHeight: 1.6 }}>—</span>
                  <p className={montserrat.className} style={{ fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, letterSpacing: '0.04em' }}>{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              Our Process
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {process.map((step, i) => (
                <div key={step.num} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: '32px', padding: '36px 0', borderTop: i === 0 ? '1px solid rgba(203,178,106,0.15)' : '1px solid rgba(203,178,106,0.08)', borderBottom: i === process.length - 1 ? '1px solid rgba(203,178,106,0.15)' : 'none' }}>
                  <p className={cormorant.className} style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(203,178,106,0.5)', paddingTop: '4px' }}>{step.num}</p>
                  <div>
                    <h3 className={montserrat.className} style={{ fontSize: '11px', fontWeight: '400', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '10px' }}>{step.title}</h3>
                    <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, letterSpacing: '0.04em' }}>{step.body}</p>
                  </div>
                </div>
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
              Ready to Build?
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', color: '#ffffff', marginBottom: '20px' }}>
              Start Your Bathroom Project
            </h2>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 40px' }}>
              Schedule a free site visit with Paulo. We review your space, understand your goals and provide a fixed-price proposal within 5 business days.
            </p>
            <a
              href="/request-a-bid"
              className={montserrat.className}
              style={{ display: 'inline-block', backgroundColor: '#cbb26a', color: '#000000', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 56px', textDecoration: 'none', fontWeight: '400' }}
            >
              Start Your Bathroom Project
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
