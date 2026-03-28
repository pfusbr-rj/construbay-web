import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata: Metadata = {
  title: 'About Paulo Fernandes | ConstruBay — Luxury Contractor & AI Construction Pioneer, Marin County',
  description: 'Meet Paulo Fernandes, founder of ConstruBay and creator of PlanPass.ai. 20+ years building luxury homes in Marin, Sonoma & Napa. Now revolutionizing construction with AI bot automation and permit intelligence. CSLB #1106798.',
  keywords: 'Paulo Fernandes, ConstruBay, luxury contractor Marin County, PlanPass.ai, AI construction, permit automation, luxury home remodel Marin, general contractor Mill Valley, construction technology',
  openGraph: {
    title: 'Paulo Fernandes | ConstruBay Founder & Construction Tech Innovator',
    description: 'Luxury contractor meets tech founder. 20+ years building Marin\'s finest homes. Creator of PlanPass.ai — the AI platform catching permit red flags before the city does.',
    url: 'https://construbay.com/about',
    siteName: 'ConstruBay',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ConstruBay',
  url: 'https://www.construbay.com',
  logo: 'https://www.construbay.com/images/svg/logo%20vector-02.svg',
  description: 'Licensed luxury general contractor in Mill Valley, Marin County California. CSLB #1106798.',
  foundingDate: '2009',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mill Valley',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+14159689494',
    contactType: 'customer service',
  },
  sameAs: [
    'https://www.houzz.com/professionals/general-contractors/construbay-pfvwus-pf~406743147',
    'https://www.yelp.com/biz/construbay-mill-valley',
    'https://nextdoor.com/pages/construbay-mill-valley-ca-1/',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'License',
    recognizedBy: {
      '@type': 'Organization',
      name: 'California State License Board',
    },
    licenseNumber: '1106798',
  },
};

export default function AboutPage() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
    <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '120px' }}>

      {/* HERO */}
      <section style={{ padding: '80px 0 120px', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
        <div className="max-w-6xl mx-auto px-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <p className={montserrat.className} style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '24px' }}>
              Founder &amp; CEO
            </p>
            <h1 className={cormorant.className} style={{
              fontSize: 'clamp(48px, 6vw, 80px)',
              fontWeight: 300,
              lineHeight: 1.0,
              marginBottom: '32px',
              background: 'linear-gradient(135deg, #bb8b4a, #f7eb9e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Paulo<br />Fernandes
            </h1>
            <div style={{ width: '60px', height: '1px', backgroundColor: '#cbb26a', marginBottom: '32px' }} />
            <p className={montserrat.className} style={{ fontSize: '13px', fontWeight: 300, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, marginBottom: '24px' }}>
              Twenty years of building Marin County&apos;s most distinguished homes. Now deploying AI to revolutionize how construction gets done — from permit intelligence to fully automated office operations.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://planpass.ai" target="_blank" rel="noopener noreferrer" className={montserrat.className} style={{
                display: 'inline-block',
                border: '1px solid #cbb26a',
                color: '#cbb26a',
                padding: '12px 32px',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.4s ease',
              }}>
                Visit PlanPass.ai
              </a>
              <a href="https://calendly.com/construbay/adu-planning-session-design-permits-budget" target="_blank" rel="noopener noreferrer" className={montserrat.className} style={{
                display: 'inline-block',
                backgroundColor: '#cbb26a',
                color: '#0a1628',
                padding: '12px 32px',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.4s ease',
              }}>
                Start a Project
              </a>
            </div>
          </div>
          <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/paulo/paulo-fernandes-01.png"
              alt="Paulo Fernandes — Founder of ConstruBay and PlanPass.ai, Luxury General Contractor Marin County"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                filter: 'grayscale(15%) contrast(1.05)',
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 60%, rgba(10,22,40,0.7) 100%)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
            }}>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#cbb26a',
              }}>
                CSLB #1106798
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px', textAlign: 'center' }}>
            {[
              { number: '20+', label: 'Years in Construction' },
              { number: '3', label: 'Counties Served' },
              { number: '100+', label: 'Luxury Projects Completed' },
              { number: '2026', label: 'PlanPass.ai Launched' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className={cormorant.className} style={{ fontSize: '64px', fontWeight: 300, lineHeight: 1, marginBottom: '12px', background: 'linear-gradient(135deg, #bb8b4a, #f7eb9e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {stat.number}
                </p>
                <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STORY */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className={montserrat.className} style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '24px' }}>
            The Story
          </p>
          <h2 className={cormorant.className} style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: '#ffffff', lineHeight: 1.1, marginBottom: '48px' }}>
            From Contractor to Construction Tech Founder
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              'Paulo Fernandes began his construction career over two decades ago with a simple but uncompromising vision — to build homes that exceeded every expectation. Working across Marin, Sonoma, and Napa Counties, he built a reputation for meticulous craftsmanship, flawless project management, and an unwavering commitment to luxury.',
              'As founder and CEO of ConstruBay (CSLB #1106798), Paulo has led hundreds of high-end residential projects — from complete home transformations and 2,200 sq ft additions to custom kitchens, bathrooms, ADUs, and outdoor living spaces. Every project carries his personal standard: built without compromise.',
              'But Paulo never stopped at construction. Driven by a passion for technology and efficiency, he began integrating AI into every corner of ConstruBay\'s operations — deploying a full bot army built on Claude, ChatGPT, and Claude Code to handle everything from takeoffs and estimating to scheduling, client communication, and full marketing automation.',
              'In 2026, Paulo launched PlanPass.ai — a revolutionary platform that is transforming how construction permits get processed across California. By catching permit red flags before they reach the city, PlanPass.ai dramatically accelerates approvals, saves contractors weeks of delays, and gives homeowners a transparent window into the permitting process.',
            ].map((para, i) => (
              <p key={i} className={cormorant.className} style={{ fontSize: '20px', fontWeight: 300, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* PLANPASS.AI */}
      <section style={{ padding: '120px 0', backgroundColor: 'rgba(203,178,106,0.06)', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
        <div className="max-w-6xl mx-auto px-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <p className={montserrat.className} style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '24px' }}>
              2026 Startup Launch
            </p>
            <h2 className={cormorant.className} style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 300, color: '#ffffff', lineHeight: 1.1, marginBottom: '32px' }}>
              Revolutionizing Construction Permits with AI
            </h2>
            <p className={cormorant.className} style={{ fontSize: '20px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '32px' }}>
              PlanPass.ai is Paulo&apos;s latest venture — an AI-powered permit intelligence platform that catches red flags in permit applications before the city ever sees them. The result: faster approvals, fewer rejections, and a dramatically smoother path from design to build.
            </p>
            <p className={montserrat.className} style={{ fontSize: '12px', fontWeight: 300, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '40px' }}>
              Built for contractors, architects, and developers who refuse to let bureaucratic delays derail their projects. PlanPass.ai is the unfair advantage that forward-thinking construction professionals are deploying right now.
            </p>
            <a href="https://planpass.ai" target="_blank" rel="noopener noreferrer" className={montserrat.className} style={{
              display: 'inline-block',
              border: '1px solid #cbb26a',
              color: '#cbb26a',
              padding: '14px 40px',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}>
              Explore PlanPass.ai →
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { icon: '⚡', title: 'Speed to Permit', desc: 'AI scans your application and catches every red flag before submission — eliminating back-and-forth with the city.' },
              { icon: '🔍', title: 'Red Flag Detection', desc: 'Machine learning trained on thousands of permit rejections identifies issues humans miss every time.' },
              { icon: '📊', title: 'Transparent Tracking', desc: 'Real-time permit status dashboards so clients always know exactly where their project stands.' },
              { icon: '🤖', title: 'AI-First Workflow', desc: 'Built by a contractor who uses AI every day — PlanPass.ai solves real problems, not hypothetical ones.' },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '24px', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 className={cormorant.className} style={{ fontSize: '22px', fontWeight: 300, color: '#ffffff', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p className={montserrat.className} style={{ fontSize: '12px', fontWeight: 300, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI BOT ARMY */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className={montserrat.className} style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '24px', textAlign: 'center' }}>
            The Tech Advantage
          </p>
          <h2 className={cormorant.className} style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: '#ffffff', lineHeight: 1.1, marginBottom: '24px', textAlign: 'center' }}>
            Running ConstruBay with an AI Bot Army
          </h2>
          <p className={cormorant.className} style={{ fontSize: '20px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '80px', textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px' }}>
            While most contractors still run on spreadsheets and phone calls, ConstruBay operates with a fully automated AI-powered back office — built on Claude, ChatGPT, and Claude Code.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', backgroundColor: 'rgba(203,178,106,0.15)' }}>
            {[
              { bot: 'Takeoff Bot', desc: 'Automatically reads plans and generates precise material takeoffs in minutes, not hours.' },
              { bot: 'Estimating Bot', desc: 'Produces detailed cost estimates with real-time pricing data — faster and more accurate than any manual process.' },
              { bot: 'Scheduling Bot', desc: 'Manages project timelines, subcontractor coordination, and Trello boards automatically.' },
              { bot: 'Secretary Bot', desc: 'Handles client communications, appointment booking, and follow-ups 24/7 without missing a beat.' },
              { bot: 'Marketing Bot', desc: 'Creates content, manages social media, and runs ad campaigns across all platforms automatically.' },
              { bot: 'Permit Bot', desc: 'Powered by PlanPass.ai — reviews permit applications and flags issues before submission.' },
            ].map((item) => (
              <div key={item.bot} style={{ backgroundColor: '#000000', padding: '48px 40px' }}>
                <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
                  {item.bot}
                </p>
                <p className={cormorant.className} style={{ fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className={montserrat.className} style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: '40px' }}>
            Powered by Claude · ChatGPT · Claude Code · Trello · PlanPass.ai
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className={montserrat.className} style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '40px' }}>
            The Philosophy
          </p>
          <blockquote className={cormorant.className} style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, fontStyle: 'italic', color: '#ffffff', lineHeight: 1.4, marginBottom: '40px' }}>
            &ldquo;Every home we build is a legacy. Every permit we file is a promise. Every bot we deploy is a commitment to delivering more — faster, smarter, and without compromise.&rdquo;
          </blockquote>
          <div style={{ width: '60px', height: '1px', backgroundColor: '#cbb26a', margin: '0 auto 24px' }} />
          <p className={montserrat.className} style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#cbb26a' }}>
            Paulo Fernandes — Founder, ConstruBay &amp; PlanPass.ai
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '120px 0' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={cormorant.className} style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: '#ffffff', marginBottom: '24px' }}>
            Ready to Build Something Extraordinary?
          </h2>
          <p className={montserrat.className} style={{ fontSize: '12px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)', marginBottom: '48px', lineHeight: 1.8 }}>
            Marin · Sonoma · Napa &nbsp;|&nbsp; CSLB #1106798 &nbsp;|&nbsp; (415) 968-9494
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/construbay/adu-planning-session-design-permits-budget" target="_blank" rel="noopener noreferrer" className={montserrat.className} style={{
              display: 'inline-block',
              backgroundColor: '#cbb26a',
              color: '#0a1628',
              padding: '18px 56px',
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}>
              Start Your Project
            </a>
            <a href="https://planpass.ai" target="_blank" rel="noopener noreferrer" className={montserrat.className} style={{
              display: 'inline-block',
              border: '1px solid #cbb26a',
              color: '#cbb26a',
              padding: '18px 56px',
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}>
              Visit PlanPass.ai
            </a>
          </div>
        </div>
      </section>

      {/* EEAT Credentials */}
      <section style={{ padding: '120px 0', borderTop: '1px solid rgba(203,178,106,0.15)', backgroundColor: '#000000' }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px', textAlign: 'center' }}>
            Verified &amp; Credentialed
          </p>
          <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, color: '#ffffff', textAlign: 'center', marginBottom: '64px', letterSpacing: '0.02em' }}>
            Licensed. Verified. Trusted.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '2px', backgroundColor: 'rgba(203,178,106,0.1)' }}>
            {[
              {
                title: 'Licensing & Insurance',
                items: [
                  'California State License Board #1106798',
                  'Active License Since 2009',
                  '$2M General Liability Insurance',
                  'Workers Compensation Coverage',
                  'Fully Bonded',
                ],
              },
              {
                title: 'Professional Affiliations',
                items: [
                  'National Association of Home Builders',
                  'Marin Builders Association',
                  'California Building Industry Association',
                  'Mill Valley Chamber of Commerce',
                  'Nextdoor #1 Contractor Marin County — 2 Years',
                ],
              },
              {
                title: 'Recognition',
                items: [
                  '5.0 Stars — Google Reviews',
                  '4.8 Stars — HomeAdvisor',
                  'Houzz Best of Service',
                  'Featured: Marin County Publications',
                  'Top Rated: Yelp Mill Valley',
                ],
              },
            ].map((col) => (
              <div key={col.title} style={{ backgroundColor: '#000000', padding: '48px 40px' }}>
                <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '28px' }}>
                  {col.title}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {col.items.map((item) => (
                    <li key={item} className={montserrat.className} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#cbb26a', flexShrink: 0 }}>—</span>
                      <span style={{ fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, letterSpacing: '0.04em' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
    </>
  );
}
