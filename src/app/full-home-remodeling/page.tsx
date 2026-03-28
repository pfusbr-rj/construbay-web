import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
  title: 'Full Home Remodeling Marin County 2026 | Whole House Renovation | ConstruBay',
  description: 'Whole house renovation in Marin County from $850K. Fixed-price contracts, permits included, 10-year warranty. Mill Valley, Tiburon, San Rafael. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/full-home-remodeling' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      name: 'ConstruBay',
      description: 'Full home remodeling contractor in Marin County CA. Whole house renovations from $850K. CSLB #1106798.',
      url: 'https://www.construbay.com/full-home-remodeling',
      telephone: '+14159689494',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mill Valley',
        addressRegion: 'CA',
        postalCode: '94941',
        addressCountry: 'US',
      },
      areaServed: 'Marin County',
      priceRange: '$$$$',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a full home remodel cost in Marin County?',
          acceptedAnswer: { '@type': 'Answer', text: 'A whole house renovation in Marin County typically ranges from $850,000 for a 2,000–2,500 sq ft home to $2,200,000 or more for homes 3,500–5,000 sq ft. These ranges include permits, materials, labor, and our 10-year structural warranty.' },
        },
        {
          '@type': 'Question',
          name: 'How long does a whole house renovation take?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most whole home renovations in Marin County take 6–14 months depending on scope and size. Permit acquisition adds 4–6 weeks before construction begins. We provide a detailed schedule before the project starts.' },
        },
      ],
    },
  ],
};

const table = {
  headers: ['Home Size', 'Investment Range', 'Timeline'],
  rows: [
    ['2,000–2,500 sq ft', '$850,000 – $1,200,000', '6–8 months'],
    ['2,500–3,500 sq ft', '$1,100,000 – $1,600,000', '8–10 months'],
    ['3,500–5,000 sq ft', '$1,400,000 – $2,200,000', '10–14 months'],
  ],
};

const included = [
  ['Complete architectural plans and engineering', 'All fixtures, finishes and materials'],
  ['Marin County permit acquisition and all fees', 'Full-time project superintendent'],
  ['Structural and MEP engineering coordination', '10-year structural warranty'],
  ['Daily site photography and progress reports', 'Post-completion walkthrough at 11 months'],
];

const steps = [
  { num: '01', title: 'Site Visit & Discovery', body: 'Paulo walks your home and listens. We discuss your vision, budget range, and timeline. No sales pressure — just an honest assessment of what is possible.' },
  { num: '02', title: 'Fixed-Price Proposal', body: 'A complete scope, timeline, and fixed price within 5 business days. Every line item is accounted for — there will be no change order surprises.' },
  { num: '03', title: 'Design & Permitting', body: 'We coordinate architectural and engineering plans, handle permit submissions, and manage all county review processes. Permits typically in hand within 4–6 weeks.' },
  { num: '04', title: 'Construction', body: 'Daily site updates. Paulo is personally on-site for every critical phase. Tradespeople are vetted long-term partners, not whoever is available.' },
  { num: '05', title: 'Completion & Warranty', body: 'Thorough walkthrough at completion. We return at 11 months for a complimentary inspection — well within your 1-year warranty coverage.' },
];

const faqs = [
  {
    q: 'How much does a full home remodel cost in Marin County?',
    a: 'A whole house renovation in Marin County typically ranges from $850,000 for a 2,000–2,500 sq ft home to $2,200,000 or more for homes 3,500–5,000 sq ft. These ranges include permits, materials, labor, and our 10-year structural warranty.',
  },
  {
    q: 'How long does a whole house renovation take?',
    a: 'Most whole home renovations in Marin County take 6–14 months depending on scope and size. Permit acquisition adds 4–6 weeks before construction begins. We provide a detailed schedule before the project starts.',
  },
];

export default function FullHomeRemodelingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>
        <div className="max-w-5xl mx-auto px-6">

          {/* Hero */}
          <section style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '24px' }}>
              Full Home Remodeling · Marin County
            </p>
            <h1 className={cormorant.className} style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.05, marginBottom: '20px' }}>
              Whole House Renovation<br />in Marin County
            </h1>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 2, maxWidth: '620px', letterSpacing: '0.04em' }}>
              A whole home renovation is the most complex project a homeowner undertakes. We make it manageable — with fixed pricing, a clear timeline, and a single point of accountability from first site visit to final walkthrough.
            </p>
          </section>

          {/* Investment Table */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              2026 Pricing
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '300', color: '#ffffff', marginBottom: '40px' }}>
              Investment Ranges
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(203,178,106,0.12)' }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: '#0a0a0a', padding: '14px 24px' }}>
                {table.headers.map(h => (
                  <span key={h} className={montserrat.className} style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.55)' }}>{h}</span>
                ))}
              </div>
              {table.rows.map((row, i) => (
                <div key={i} className="grid grid-cols-3" style={{ backgroundColor: i % 2 === 0 ? '#000000' : '#050505', padding: '22px 24px', alignItems: 'center' }}>
                  <span className={cormorant.className} style={{ fontSize: '20px', fontWeight: '300', color: '#ffffff' }}>{row[0]}</span>
                  <span className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: '#cbb26a' }}>{row[1]}</span>
                  <span className={montserrat.className} style={{ fontSize: '11px', fontWeight: '300', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>{row[2]}</span>
                </div>
              ))}
            </div>
            <p className={montserrat.className} style={{ fontSize: '11px', fontWeight: '300', color: 'rgba(255,255,255,0.35)', marginTop: '20px', lineHeight: 1.7, letterSpacing: '0.04em' }}>
              All ranges include permits, materials, labor, and 10-year structural warranty. Marin County projects carry a 20–35% premium over national averages due to hillside engineering and permit complexity.
            </p>
          </section>

          {/* What&apos;s Included */}
          <section style={{ padding: '72px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              What Is Included in Every Quote
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '0' }}>
              {included.map(([left, right], i) => (
                <div key={i} style={{ display: 'contents' }}>
                  {[left, right].map((item, j) => (
                    <div key={j} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '14px 0', borderBottom: '1px solid rgba(203,178,106,0.08)' }}>
                      <span style={{ color: '#cbb26a', flexShrink: 0, fontSize: '14px', lineHeight: 1.5 }}>✓</span>
                      <p className={montserrat.className} style={{ fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, letterSpacing: '0.04em' }}>{item}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              How It Works
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              The ConstruBay Process
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
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
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
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '20px' }}>Ready to Begin</p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', color: '#ffffff', marginBottom: '20px' }}>
              Schedule a Free Site Visit
            </h2>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 40px' }}>
              Schedule a free site visit with Paulo. We review your space, understand your goals and provide a fixed-price proposal within 5 business days.
            </p>
            <a href="/request-a-bid" className={montserrat.className} style={{ display: 'inline-block', backgroundColor: '#cbb26a', color: '#000000', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 56px', textDecoration: 'none', fontWeight: '400' }}>
              Schedule a Site Visit
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
