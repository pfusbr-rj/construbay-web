import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
  title: 'General Contractor for Architects in Marin County | ConstruBay',
  description: 'ConstruBay works with architects on luxury projects in Marin County. Constructability reviews, design-intent execution, daily documentation. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/for-architects' },
};

const pillars = [
  {
    num: '01',
    title: 'Design Fidelity',
    body: 'Your drawings are the standard. We do not value-engineer away the details that define the project. When a material is specified, we source it. When a dimension is critical, we hold it. Your design intent is what gets built — not a contractor\'s interpretation of it.',
  },
  {
    num: '02',
    title: 'Constructability Review',
    body: 'We review your construction documents before permit submission and flag anything that could create conflict in the field — structural clearances, MEP coordination, sequencing issues. This is not a critique of your work. It is our way of ensuring the build goes smoothly for both of us.',
  },
  {
    num: '03',
    title: 'Collaboration',
    body: 'Paulo Fernandes is your point of contact from preconstruction through completion. You will never be handed off to a project manager who was not in the original conversations. RFIs are answered within 24 hours. Submittals are tracked. Site meetings are documented and distributed same day.',
  },
];

const standards = [
  'RFI responses within 24 hours',
  'Submittal log maintained throughout',
  'Same-day meeting minutes distributed',
  'Daily site photography',
  'Redline as-builts at project close',
  'Structural inspections coordinated and documented',
];

export default function ForArchitectsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'General Contractor Services for Architects',
    provider: {
      '@type': 'GeneralContractor',
      name: 'ConstruBay',
      telephone: '+14159689494',
      url: 'https://www.construbay.com',
    },
    areaServed: { '@type': 'County', name: 'Marin County' },
    description: 'Luxury general contractor serving architects in Marin County. Design fidelity, constructability review, precise execution. CSLB #1106798.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>
        <div className="max-w-5xl mx-auto px-6">

          {/* Hero */}
          <section style={{ paddingBottom: '80px', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '24px' }}>
              For Architects
            </p>
            <h1 className={cormorant.className} style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.05, marginBottom: '20px' }}>
              A Builder Who Builds<br />What You Designed
            </h1>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 2, maxWidth: '620px', letterSpacing: '0.04em' }}>
              Architects need a contractor they can trust to execute their design with precision and communicate without friction. ConstruBay is built for that relationship. We have worked alongside architects on projects ranging from $250,000 kitchen renovations to $2.5M whole-home transformations across Marin County.
            </p>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 2, maxWidth: '620px', marginTop: '20px', letterSpacing: '0.04em' }}>
              We are not the contractor who substitutes materials and asks forgiveness later. We are the contractor who calls before there is a problem.
            </p>
          </section>

          {/* Three Pillars */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '64px' }}>
              How We Work With Architects
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {pillars.map((p, i) => (
                <div key={p.num} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: '40px', padding: '48px 0', borderTop: i === 0 ? '1px solid rgba(203,178,106,0.15)' : '1px solid rgba(203,178,106,0.08)', borderBottom: i === pillars.length - 1 ? '1px solid rgba(203,178,106,0.15)' : 'none' }}>
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

          {/* Our Standards */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', color: '#ffffff', marginBottom: '48px' }}>
              Our Commitment to Your Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '0' }}>
              {standards.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '16px 0', borderBottom: '1px solid rgba(203,178,106,0.08)' }}>
                  <span style={{ color: '#cbb26a', flexShrink: 0, fontSize: '14px', lineHeight: 1.5 }}>—</span>
                  <p className={montserrat.className} style={{ fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, letterSpacing: '0.04em' }}>{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2px', backgroundColor: 'rgba(203,178,106,0.12)' }}>
              {[
                { num: '10+', label: 'Years Building in Marin' },
                { num: '150+', label: 'Projects Completed' },
                { num: '5.0', label: 'Google & Yelp Rating' },
                { num: '#1106798', label: 'CSLB License' },
              ].map((stat) => (
                <div key={stat.label} style={{ backgroundColor: '#000000', padding: '36px 28px', textAlign: 'center' }}>
                  <p className={cormorant.className} style={{ fontSize: '36px', fontWeight: '300', color: '#cbb26a', marginBottom: '8px' }}>{stat.num}</p>
                  <p className={montserrat.className} style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ padding: '80px 0', textAlign: 'center' }}>
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '20px' }}>Work With Us</p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', color: '#ffffff', marginBottom: '20px' }}>
              Let&apos;s Talk About Your Next Project
            </h2>
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 40px' }}>
              Reach out to start the conversation. We welcome preconstruction partnerships and are available for early-stage project reviews.
            </p>
            <a href="/request-a-bid" className={montserrat.className} style={{ display: 'inline-block', backgroundColor: '#cbb26a', color: '#000000', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 56px', textDecoration: 'none', fontWeight: '400' }}>
              Start a Conversation
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
