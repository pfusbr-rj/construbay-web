import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
  title: 'Design-Build Contractor Marin County | Integrated Design & Construction | ConstruBay',
  description: 'Design-build general contractor in Marin County CA. Integrated design and construction for luxury residential projects. Single point of accountability. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/design-build' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Design-Build Construction Services',
  provider: {
    '@type': 'GeneralContractor',
    name: 'ConstruBay',
    telephone: '+14159689494',
    url: 'https://www.construbay.com',
  },
  areaServed: { '@type': 'County', name: 'Marin County' },
  description: 'Design-build general contractor in Marin County CA. Single point of accountability for design and construction. CSLB #1106798.',
};

const benefits = [
  { num: '01', title: 'Single Contract', body: 'One agreement covers design and construction. No finger-pointing between architect and contractor when problems arise. One team, one point of responsibility.' },
  { num: '02', title: 'Faster Delivery', body: 'Design and construction overlap. We begin procurement and permit preparation while design is still being refined — saving weeks or months on your timeline.' },
  { num: '03', title: 'Budget Certainty', body: 'We price the project during design — not after. Our team identifies cost implications as decisions are made, keeping your budget intact before construction starts.' },
  { num: '04', title: 'Design Intent Protected', body: 'The team that designs it builds it. Your vision arrives at completion intact — not modified by a contractor who was not part of the original conversations.' },
];

const comparison = [
  { label: 'Design responsibility', traditional: 'Architect only', designBuild: 'Integrated team' },
  { label: 'Construction responsibility', traditional: 'Contractor only', designBuild: 'Integrated team' },
  { label: 'Budget control', traditional: 'After design is complete', designBuild: 'Throughout design' },
  { label: 'Change order risk', traditional: 'High', designBuild: 'Significantly reduced' },
  { label: 'Points of contact', traditional: 'Multiple', designBuild: 'One' },
  { label: 'Timeline', traditional: 'Sequential', designBuild: 'Overlapping' },
];

export default function DesignBuildPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>
        <div className="max-w-5xl mx-auto px-6">

          {/* Hero */}
          <section style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '24px' }}>
              Design-Build · Marin County
            </p>
            <h1 className={cormorant.className} style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.05, marginBottom: '16px' }}>
              Design-Build<br />in Marin County
            </h1>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: '#cbb26a', letterSpacing: '0.15em', marginBottom: '36px' }}>
              Integrated Design and Construction — Single Point of Accountability
            </p>
            <p className={cormorant.className} style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: '300', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, maxWidth: '700px' }}>
              Traditional construction separates design from building — creating gaps where budgets blow out and timelines collapse. Our design-build approach integrates both under one roof. One contract, one team, one point of accountability from first sketch to final walkthrough.
            </p>
          </section>

          {/* Benefits */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              The Advantages
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '64px' }}>
              Why Design-Build Works
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {benefits.map((b, i) => (
                <div key={b.num} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: '40px', padding: '48px 0', borderTop: i === 0 ? '1px solid rgba(203,178,106,0.15)' : '1px solid rgba(203,178,106,0.08)', borderBottom: i === benefits.length - 1 ? '1px solid rgba(203,178,106,0.15)' : 'none' }}>
                  <p className={cormorant.className} style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(203,178,106,0.5)' }}>{b.num}</p>
                  <div>
                    <h3 className={montserrat.className} style={{ fontSize: '11px', fontWeight: '400', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>{b.title}</h3>
                    <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, letterSpacing: '0.04em' }}>{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '40px' }}>
              Design-Build vs. Traditional
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(203,178,106,0.12)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', backgroundColor: '#0a0a0a', padding: '14px 24px' }}>
                {['', 'Traditional', 'Design-Build'].map((h, i) => (
                  <span key={i} className={montserrat.className} style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: i === 2 ? '#cbb26a' : 'rgba(203,178,106,0.55)' }}>{h}</span>
                ))}
              </div>
              {comparison.map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', backgroundColor: i % 2 === 0 ? '#000000' : '#050505', padding: '18px 24px', alignItems: 'center' }}>
                  <span className={montserrat.className} style={{ fontSize: '11px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}>{row.label}</span>
                  <span className={montserrat.className} style={{ fontSize: '11px', fontWeight: '300', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>{row.traditional}</span>
                  <span className={montserrat.className} style={{ fontSize: '11px', fontWeight: '300', color: '#cbb26a', letterSpacing: '0.04em' }}>{row.designBuild}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ padding: '80px 0', textAlign: 'center' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '20px' }}>Start the Conversation</p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', color: '#ffffff', marginBottom: '20px' }}>
              Discuss Your Project
            </h2>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 40px' }}>
              Design-build works best when the conversation starts early. Reach out to discuss your project goals — even if you&apos;re still in the early thinking phase.
            </p>
            <a href="/request-a-bid" className={montserrat.className} style={{ display: 'inline-block', backgroundColor: '#cbb26a', color: '#000000', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 56px', textDecoration: 'none', fontWeight: '400' }}>
              Discuss Your Project
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
