import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
  title: 'Luxury Home Remodeling for Marin County Homeowners | ConstruBay',
  description: 'ConstruBay works directly with Marin County homeowners. Fixed-price contracts, daily updates, 10-year warranty. No surprises. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/for-homeowners' },
};

const principles = [
  {
    num: '01',
    title: 'Clarity',
    body: 'Before a single nail is driven, you have a complete picture of what will be built, when it will be done, and exactly what it will cost. Our fixed-price contracts eliminate the guesswork that makes most remodeling projects painful. You will never receive a change order you did not explicitly approve.',
  },
  {
    num: '02',
    title: 'Certainty',
    body: 'You receive a daily site report every evening — photos, progress notes, and what to expect tomorrow. Paulo Fernandes, the owner, is personally on-site for every key milestone. You can call or text him directly. No project managers, no middlemen, no voicemail.',
  },
  {
    num: '03',
    title: 'Craftsmanship',
    body: 'We are not building square footage — we are building the home you have been imagining. Every finish, every joint, every transition is executed to a standard that endures. Our 10-year structural warranty is not marketing language. It is a commitment we stand behind on every project.',
  },
];

const steps = [
  { num: '01', title: 'Site Visit', body: 'Paulo visits your home, walks every space, and listens. No sales pitch — just an honest conversation about your goals and what is possible.' },
  { num: '02', title: 'Fixed-Price Proposal', body: 'Within 5 business days you receive a complete fixed-price proposal with full scope, timeline, and investment — no line item vagueness.' },
  { num: '03', title: 'Design & Permits', body: 'We handle architectural plans, engineering, and Marin County permit acquisition. Most permits are in hand within 4–6 weeks.' },
  { num: '04', title: 'Build', body: 'Construction begins on the agreed date. You receive daily photo updates and have a direct line to Paulo throughout.' },
  { num: '05', title: 'Walkthrough & Warranty', body: 'A thorough completion walkthrough. We return at 11 months — inside your 1-year warranty window — for a complimentary inspection.' },
];

export default function ForHomeownersPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Luxury Home Remodeling for Homeowners',
    provider: {
      '@type': 'GeneralContractor',
      name: 'ConstruBay',
      telephone: '+14159689494',
      url: 'https://www.construbay.com',
    },
    areaServed: { '@type': 'County', name: 'Marin County' },
    description: 'Fixed-price luxury home remodeling for Marin County homeowners. Kitchen, bath, full home, ADU. CSLB #1106798.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>
        <div className="max-w-5xl mx-auto px-6">

          {/* Hero */}
          <section style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '24px' }}>
              For Marin County Homeowners
            </p>
            <h1 className={cormorant.className} style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.05, marginBottom: '20px' }}>
              Your Vision.<br />Our Execution.<br />No Surprises.
            </h1>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 2, maxWidth: '580px', letterSpacing: '0.04em' }}>
              You have lived with the outdated kitchen long enough. The bathroom that never quite matched the home you always imagined. The addition you have been putting off for three years because you did not want to deal with the chaos, the surprises, or the contractor who disappears after the deposit clears.
            </p>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 2, maxWidth: '580px', marginTop: '20px', letterSpacing: '0.04em' }}>
              ConstruBay is built differently. We work with a small number of homeowners at a time — because the level of attention each project deserves demands it.
            </p>
          </section>

          {/* Three Principles */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '64px' }}>
              What You Can Expect
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {principles.map((p, i) => (
                <div key={p.num} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: '40px', padding: '48px 0', borderTop: i === 0 ? '1px solid rgba(203,178,106,0.15)' : '1px solid rgba(203,178,106,0.08)', borderBottom: i === principles.length - 1 ? '1px solid rgba(203,178,106,0.15)' : 'none' }}>
                  <div>
                    <p className={cormorant.className} style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(203,178,106,0.5)' }}>{p.num}</p>
                  </div>
                  <div>
                    <h3 className={montserrat.className} style={{ fontSize: '11px', fontWeight: '400', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>{p.title}</h3>
                    <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, letterSpacing: '0.04em' }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '16px' }}>
              The Process
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '56px' }}>
              How It Works
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

          {/* Testimonial */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <div style={{ borderLeft: '2px solid #cbb26a', paddingLeft: '40px', maxWidth: '700px' }}>
              <p className={cormorant.className} style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.7, marginBottom: '28px' }}>
                &ldquo;Paulo managed our entire whole-home renovation in Mill Valley with complete transparency. We knew the budget, the timeline, and what was happening every single day. The finished home exceeded everything we imagined.&rdquo;
              </p>
              <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#cbb26a' }}>
                Nick Bagatello — Marion Avenue, Mill Valley
              </p>
            </div>
          </section>

          {/* CTA */}
          <section style={{ padding: '80px 0', textAlign: 'center' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '20px' }}>Begin Here</p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', color: '#ffffff', marginBottom: '20px' }}>
              Schedule a Free Site Visit
            </h2>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 40px' }}>
              Paulo visits your home, listens to your goals, and provides a complete fixed-price proposal within 5 business days.
            </p>
            <a href="/request-a-bid" className={montserrat.className} style={{ display: 'inline-block', backgroundColor: '#cbb26a', color: '#000000', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 56px', textDecoration: 'none', fontWeight: '400' }}>
              Start Your Project
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
