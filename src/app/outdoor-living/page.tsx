import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
  title: 'Outdoor Living Construction Marin County | Decks Pools Pergolas | ConstruBay',
  description: 'Custom outdoor living spaces in Marin County CA. Decks, pool houses, outdoor kitchens, pergolas. Extend your living space into Marin\'s natural beauty. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/outdoor-living' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Outdoor Living Construction',
  provider: {
    '@type': 'GeneralContractor',
    name: 'ConstruBay',
    telephone: '+14159689494',
    url: 'https://www.construbay.com',
  },
  areaServed: { '@type': 'County', name: 'Marin County' },
  description: 'Custom outdoor living spaces in Marin County — decks, outdoor kitchens, pool houses, pergolas. CSLB #1106798.',
};

const services = [
  { num: '01', title: 'Decks & Terraces', body: 'Custom decks designed for Marin\'s hillside terrain. Hardwood, composite and concrete options. Engineered for hillside loads and designed to maximize your views.' },
  { num: '02', title: 'Outdoor Kitchens', body: 'Year-round outdoor cooking and entertaining. Built-in grills, refrigeration, bar seating and shade structures designed for Marin\'s climate.' },
  { num: '03', title: 'Pool Houses', body: 'Fully appointed pool houses with bathroom, changing area and entertaining space. Permitted and built to complement your home\'s architecture.' },
  { num: '04', title: 'Pergolas & Shade', body: 'Custom pergolas, shade sails and covered patios extending your living space through Marin\'s foggy seasons and into the evening hours.' },
];

const table = [
  ['Custom Deck  500 sq ft', '$85,000 – $145,000', '6–10 weeks'],
  ['Outdoor Kitchen', '$65,000 – $125,000', '8–12 weeks'],
  ['Pool House', '$280,000 – $480,000', '4–6 months'],
  ['Pergola / Covered Patio', '$45,000 – $95,000', '4–8 weeks'],
];

export default function OutdoorLivingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>
        <div className="max-w-5xl mx-auto px-6">

          {/* Hero */}
          <section style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '24px' }}>
              Outdoor Living · Marin County
            </p>
            <h1 className={cormorant.className} style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.05, marginBottom: '16px' }}>
              Outdoor Living<br />in Marin County
            </h1>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: '#cbb26a', letterSpacing: '0.15em', marginBottom: '36px' }}>
              Custom Decks, Pool Houses and Outdoor Kitchens
            </p>
            <p className={cormorant.className} style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: '300', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, maxWidth: '700px' }}>
              Marin County&apos;s climate and natural beauty demand exceptional outdoor spaces. We design and build custom outdoor living areas that seamlessly extend your home into the landscape — decks with bay views, outdoor kitchens for year-round entertaining, and pool houses that complement your property.
            </p>
          </section>

          {/* Services */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              What We Build
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '64px' }}>
              Outdoor Living Services
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {services.map((s, i) => (
                <div key={s.num} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: '40px', padding: '48px 0', borderTop: i === 0 ? '1px solid rgba(203,178,106,0.15)' : '1px solid rgba(203,178,106,0.08)', borderBottom: i === services.length - 1 ? '1px solid rgba(203,178,106,0.15)' : 'none' }}>
                  <p className={cormorant.className} style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(203,178,106,0.5)' }}>{s.num}</p>
                  <div>
                    <h3 className={montserrat.className} style={{ fontSize: '11px', fontWeight: '400', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>{s.title}</h3>
                    <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, letterSpacing: '0.04em' }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Investment */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              2026 Pricing
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '40px' }}>
              Investment Ranges
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

          {/* CTA */}
          <section style={{ padding: '80px 0', textAlign: 'center' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '20px' }}>Begin Here</p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', color: '#ffffff', marginBottom: '20px' }}>
              Start Your Outdoor Project
            </h2>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 40px' }}>
              Schedule a free site visit with Paulo. We assess your outdoor space, understand your vision and provide a fixed-price proposal within 5 business days.
            </p>
            <a href="/request-a-bid" className={montserrat.className} style={{ display: 'inline-block', backgroundColor: '#cbb26a', color: '#000000', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 56px', textDecoration: 'none', fontWeight: '400' }}>
              Start Your Outdoor Project
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
