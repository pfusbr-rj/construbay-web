import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
  title: 'Luxury Home Remodel Marin County | High-End Renovation | ConstruBay CSLB #1106798',
  description: 'Luxury home remodeling in Marin County CA. $500k-$2M+ projects. Custom finishes, fixed-price contracts, 10-year warranty. Mill Valley, Tiburon, Ross, Belvedere. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/luxury-home-remodel-marin-county' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      name: 'ConstruBay',
      description: 'Luxury home remodeling contractor in Marin County CA. $500k–$2M+ projects in Mill Valley, Tiburon, Ross, Belvedere. CSLB #1106798.',
      url: 'https://www.construbay.com/luxury-home-remodel-marin-county',
      telephone: '+14159689494',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mill Valley',
        addressRegion: 'CA',
        postalCode: '94941',
        addressCountry: 'US',
      },
      areaServed: ['Mill Valley', 'Tiburon', 'Ross', 'Belvedere', 'Sausalito', 'Kentfield', 'Marin County'],
      priceRange: '$$$$',
    },
  ],
};

const pillars = [
  { num: '01', title: 'Custom Everything', body: 'No off-the-shelf solutions. Custom cabinetry, bespoke millwork, stone sourced specifically for your project. Every material decision is intentional.' },
  { num: '02', title: 'Precision Execution', body: 'Tolerances that matter. Tile work, trim and finish carpentry held to standards that separate luxury from ordinary. The difference is in the details most contractors miss.' },
  { num: '03', title: 'Material Sourcing', body: 'We source materials from the same suppliers used by Marin County\'s top architects. Lead times are planned from day one — no mid-project delays waiting on stone from Italy or custom hardware from Germany.' },
  { num: '04', title: 'White Glove Management', body: 'Daily updates, weekly site meetings, professional photography at completion. Paulo personally signs off on every project. You will never be handed to a project manager you haven\'t met.' },
];

const table = [
  { scope: 'Kitchen Remodel', range: '$275,000 – $595,000', timeline: '12–20 weeks' },
  { scope: 'Primary Suite', range: '$285,000 – $495,000', timeline: '14–22 weeks' },
  { scope: 'Full Home Remodel', range: '$850,000 – $2,200,000', timeline: '6–14 months' },
  { scope: 'ADU Construction', range: '$280,000 – $600,000', timeline: '4–8 months' },
];

const clients = [
  { type: 'Homeowners', body: 'Marin County families investing in the home they plan to stay in. Projects designed for daily living and long-term value — not a quick flip.' },
  { type: 'Architects', body: 'Design professionals who need a builder that protects their design intent from permit submission to final walkthrough. We are the contractor architects recommend to their clients.' },
  { type: 'Estate Owners', body: 'Waterfront and hillside estate owners in Ross, Belvedere and Tiburon who require the highest level of execution, discretion and accountability.' },
];

export default function LuxuryHomeRemodelMarinCountyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>
        <div className="max-w-5xl mx-auto px-6">

          {/* Hero */}
          <section style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '24px' }}>
              Marin County · Luxury Renovation
            </p>
            <h1 className={cormorant.className} style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.05, marginBottom: '16px' }}>
              Luxury Home Remodeling<br />in Marin County
            </h1>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: '#cbb26a', letterSpacing: '0.15em', marginBottom: '36px' }}>
              High-End Residential Renovation — Mill Valley, Tiburon, Ross, Belvedere
            </p>
            <p className={cormorant.className} style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: '300', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, maxWidth: '700px' }}>
              Marin County demands a different standard of construction. The homes are exceptional. The clients expect precision. The terrain is challenging. ConstruBay was built for exactly this — luxury residential remodeling executed with the care and accountability that $500k–$2M+ projects require.
            </p>
          </section>

          {/* What Defines a Luxury Remodel */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              The Standard
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '64px' }}>
              What Defines a Luxury Remodel
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {pillars.map((p, i) => (
                <div key={p.num} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: '40px', padding: '48px 0', borderTop: i === 0 ? '1px solid rgba(203,178,106,0.15)' : '1px solid rgba(203,178,106,0.08)', borderBottom: i === pillars.length - 1 ? '1px solid rgba(203,178,106,0.15)' : 'none' }}>
                  <p className={cormorant.className} style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(203,178,106,0.5)' }}>{p.num}</p>
                  <div>
                    <h3 className={montserrat.className} style={{ fontSize: '11px', fontWeight: '400', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>{p.title}</h3>
                    <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, letterSpacing: '0.04em' }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Investment Ranges */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              2026 Pricing
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '40px' }}>
              Luxury Remodel Investment Ranges
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(203,178,106,0.12)' }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: '#0a0a0a', padding: '14px 24px' }}>
                {['Scope', 'Investment Range', 'Timeline'].map(h => (
                  <span key={h} className={montserrat.className} style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.55)' }}>{h}</span>
                ))}
              </div>
              {table.map((row, i) => (
                <div key={i} className="grid grid-cols-3" style={{ backgroundColor: i % 2 === 0 ? '#000000' : '#050505', padding: '22px 24px', alignItems: 'center' }}>
                  <span className={cormorant.className} style={{ fontSize: '20px', fontWeight: '300', color: '#ffffff' }}>{row.scope}</span>
                  <span className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: '#cbb26a' }}>{row.range}</span>
                  <span className={montserrat.className} style={{ fontSize: '11px', fontWeight: '300', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>{row.timeline}</span>
                </div>
              ))}
            </div>
            <p className={montserrat.className} style={{ fontSize: '11px', fontWeight: '300', color: 'rgba(255,255,255,0.35)', marginTop: '20px', lineHeight: 1.7, letterSpacing: '0.04em' }}>
              All ranges include permits, materials, labor, and 10-year structural warranty. See our full pricing guide at <a href="/investments" style={{ color: 'rgba(203,178,106,0.6)', textDecoration: 'none' }}>/investments</a>.
            </p>
          </section>

          {/* Who We Build For */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              Our Clients
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              Who We Build For
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px' }}>
              {clients.map((c) => (
                <div key={c.type} style={{ border: '1px solid rgba(203,178,106,0.15)', padding: '40px 32px' }}>
                  <h3 className={montserrat.className} style={{ fontSize: '11px', fontWeight: '400', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>{c.type}</h3>
                  <p className={montserrat.className} style={{ fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, letterSpacing: '0.04em' }}>{c.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ padding: '80px 0', textAlign: 'center' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '20px' }}>Begin Here</p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', color: '#ffffff', marginBottom: '20px' }}>
              Start Your Luxury Project
            </h2>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 40px' }}>
              Schedule a free site visit with Paulo. We review your space, understand your vision and provide a complete fixed-price proposal within 5 business days.
            </p>
            <a href="/request-a-bid" className={montserrat.className} style={{ display: 'inline-block', backgroundColor: '#cbb26a', color: '#000000', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 56px', textDecoration: 'none', fontWeight: '400' }}>
              Start Your Luxury Project
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
