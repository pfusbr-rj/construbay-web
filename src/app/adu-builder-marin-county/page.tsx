import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
  title: 'ADU Builder Marin County | Accessory Dwelling Unit Construction | ConstruBay',
  description: 'Licensed ADU builder in Marin County CA. Fully permitted accessory dwelling units in Mill Valley, Tiburon, San Rafael. $280k-$600k. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/adu-builder-marin-county' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      name: 'ConstruBay',
      description: 'Licensed ADU builder in Marin County CA. Detached ADUs, garage conversions, Junior ADUs. CSLB #1106798.',
      url: 'https://www.construbay.com/adu-builder-marin-county',
      telephone: '+14159689494',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mill Valley',
        addressRegion: 'CA',
        postalCode: '94941',
        addressCountry: 'US',
      },
      areaServed: 'Marin County',
      priceRange: '$$$',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does an ADU cost in Marin County?',
          acceptedAnswer: { '@type': 'Answer', text: 'ADUs in Marin County range from $80,000 for a Junior ADU to $600,000+ for a large detached unit. All ConstruBay ADU quotes include design, permits, construction and our 10-year warranty.' },
        },
        {
          '@type': 'Question',
          name: 'How long does ADU permitting take in Mill Valley?',
          acceptedAnswer: { '@type': 'Answer', text: 'ADU permits in Mill Valley average 4–6 months. We have established relationships with the Mill Valley building department that help expedite the process.' },
        },
        {
          '@type': 'Question',
          name: 'Can I rent out my ADU in Marin County?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most Marin County jurisdictions allow ADU rentals. Average rental rates in Mill Valley and Tiburon range from $3,000–$5,000 per month depending on size and location.' },
        },
      ],
    },
  ],
};

const types = [
  { num: '01', title: 'Detached ADU', body: 'A separate structure on your property. Maximum privacy and rental value. Up to 1,200 sqft in most Marin jurisdictions. Requires its own foundation, utilities and address.' },
  { num: '02', title: 'Attached ADU', body: 'An addition to your existing home. Cost-effective and ideal for multigenerational living. Shares a wall with the main home while maintaining a separate entrance.' },
  { num: '03', title: 'Garage Conversion', body: 'Convert an existing garage into a fully permitted living space. Often the fastest permit path in Marin County — the structure already exists, reducing both cost and timeline.' },
  { num: '04', title: 'Junior ADU', body: 'Up to 500 sqft within your existing home footprint. Minimal permit requirements under California law. Ideal for creating rental income with lower upfront investment.' },
];

const table = [
  ['Standard ADU  up to 800 sq ft', '$280,000 – $420,000', '4–6 months'],
  ['Large ADU  800–1,200 sq ft', '$420,000 – $600,000', '6–8 months'],
  ['Garage Conversion', '$150,000 – $280,000', '3–5 months'],
  ['Junior ADU', '$80,000 – $150,000', '2–4 months'],
];

const facts = [
  'California law now allows ADUs on most residential properties',
  'Marin County permits ADUs up to 1,200 sqft detached',
  'ADUs increase property value by 15–20% on average',
  'Rental income from an ADU averages $3,000–$5,000/month in Marin',
  'Permit process averages 4–6 months in Mill Valley',
  'No owner-occupancy requirement for most Marin ADUs through 2026',
];

const steps = [
  { num: '01', title: 'Site Evaluation', body: 'We visit your property, assess ADU feasibility, and review setbacks, lot coverage, and utility connections.' },
  { num: '02', title: 'Design & Fixed-Price Proposal', body: 'Architectural drawings and a complete fixed-price proposal within 5 business days. No surprises.' },
  { num: '03', title: 'Permit Submission', body: 'We prepare and submit all permit applications. We manage the review process and respond to any plan check comments.' },
  { num: '04', title: 'Construction', body: 'Construction begins on the agreed date. Daily photo updates. Paulo personally on-site for every key milestone.' },
  { num: '05', title: 'Final Inspection & Handover', body: 'We coordinate final building inspection, obtain your certificate of occupancy, and walk through every detail at completion.' },
];

const faqs = [
  { q: 'How much does an ADU cost in Marin County?', a: 'ADUs in Marin County range from $80,000 for a Junior ADU to $600,000+ for a large detached unit. All ConstruBay ADU quotes include design, permits, construction and our 10-year warranty.' },
  { q: 'How long does ADU permitting take in Mill Valley?', a: 'ADU permits in Mill Valley average 4–6 months. We have established relationships with the Mill Valley building department that help expedite the process.' },
  { q: 'Can I rent out my ADU in Marin County?', a: 'Yes. Most Marin County jurisdictions allow ADU rentals. Average rental rates in Mill Valley and Tiburon range from $3,000–$5,000 per month depending on size and location.' },
];

export default function AduBuilderMarinCountyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>
        <div className="max-w-5xl mx-auto px-6">

          {/* Hero */}
          <section style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '24px' }}>
              ADU Construction · Marin County
            </p>
            <h1 className={cormorant.className} style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.05, marginBottom: '16px' }}>
              ADU Builder —<br />Marin County
            </h1>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: '#cbb26a', letterSpacing: '0.15em', marginBottom: '36px' }}>
              Fully Permitted Accessory Dwelling Units Across Marin County
            </p>
            <p className={cormorant.className} style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: '300', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, maxWidth: '700px' }}>
              California&apos;s ADU laws have changed dramatically. Marin County homeowners can now build larger, more valuable accessory dwelling units than ever before. ConstruBay manages the entire process — design, permits, construction — delivering a fully permitted ADU on budget and on schedule.
            </p>
          </section>

          {/* ADU Types */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              Options
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '64px' }}>
              ADU Types We Build
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {types.map((t, i) => (
                <div key={t.num} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: '40px', padding: '48px 0', borderTop: i === 0 ? '1px solid rgba(203,178,106,0.15)' : '1px solid rgba(203,178,106,0.08)', borderBottom: i === types.length - 1 ? '1px solid rgba(203,178,106,0.15)' : 'none' }}>
                  <p className={cormorant.className} style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(203,178,106,0.5)' }}>{t.num}</p>
                  <div>
                    <h3 className={montserrat.className} style={{ fontSize: '11px', fontWeight: '400', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>{t.title}</h3>
                    <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, letterSpacing: '0.04em' }}>{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Investment Table */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              2026 Pricing
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '40px' }}>
              ADU Investment in Marin County
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(203,178,106,0.12)' }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: '#0a0a0a', padding: '14px 24px' }}>
                {['Scope', 'Investment Range', 'Timeline'].map(h => (
                  <span key={h} className={montserrat.className} style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.55)' }}>{h}</span>
                ))}
              </div>
              {table.map((row, i) => (
                <div key={i} className="grid grid-cols-3" style={{ backgroundColor: i % 2 === 0 ? '#000000' : '#050505', padding: '22px 24px', alignItems: 'center' }}>
                  <span className={cormorant.className} style={{ fontSize: '20px', fontWeight: '300', color: '#ffffff' }}>{row[0]}</span>
                  <span className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: '#cbb26a' }}>{row[1]}</span>
                  <span className={montserrat.className} style={{ fontSize: '11px', fontWeight: '300', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>{row[2]}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Marin ADU Facts */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              Marin County ADU Facts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '0' }}>
              {facts.map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '16px 0', borderBottom: '1px solid rgba(203,178,106,0.08)' }}>
                  <span style={{ color: '#cbb26a', flexShrink: 0, fontSize: '14px', lineHeight: 1.5 }}>—</span>
                  <p className={montserrat.className} style={{ fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, letterSpacing: '0.04em' }}>{fact}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              How It Works
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              The ADU Build Process
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(203,178,106,0.12)' }}>
              {steps.map((step) => (
                <div key={step.num} style={{ backgroundColor: '#000000', padding: '32px 36px', display: 'grid', gridTemplateColumns: '56px 1fr', gap: '28px', alignItems: 'start' }}>
                  <p className={cormorant.className} style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(203,178,106,0.5)', paddingTop: '2px' }}>{step.num}</p>
                  <div>
                    <h3 className={montserrat.className} style={{ fontSize: '11px', fontWeight: '400', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '8px' }}>{step.title}</h3>
                    <p className={montserrat.className} style={{ fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, letterSpacing: '0.04em' }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
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
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '20px' }}>Ready to Build</p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', color: '#ffffff', marginBottom: '20px' }}>
              Start Your ADU Project
            </h2>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 40px' }}>
              Schedule a free site visit with Paulo. We assess your property&apos;s ADU potential and provide a complete fixed-price proposal within 5 business days.
            </p>
            <a href="/request-a-bid" className={montserrat.className} style={{ display: 'inline-block', backgroundColor: '#cbb26a', color: '#000000', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 56px', textDecoration: 'none', fontWeight: '400' }}>
              Start Your ADU Project
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
