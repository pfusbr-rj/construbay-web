import type { Metadata } from 'next';
import Link from 'next/link';

const CG = "'Cormorant Garamond', Georgia, serif";
const MS = "'Montserrat', Arial, sans-serif";
const GOLD = '#cbb26a';
const GRAD = 'linear-gradient(135deg, #bb8b4a, #f7eb9e)';

export const metadata: Metadata = {
  title: 'Licensed General Contractor Marin County CA | ConstruBay | CSLB #1106798',
  description: 'ConstruBay is Marin County\'s premier licensed general contractor. Luxury remodels, ADUs, home additions, and custom builds in Mill Valley, Tiburon, Sausalito & all of Marin. CSLB #1106798.',
  alternates: {
    canonical: 'https://construbay.com/services/general-contractor-marin-county',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'ConstruBay',
  url: 'https://construbay.com',
  telephone: '+14159689494',
  email: 'paulo@construbay.com',
  description: 'Licensed luxury general contractor serving Marin County, CA. Specializing in high-end residential remodels, ADUs, home additions, and custom construction. CSLB #1106798.',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Contractor License',
    name: 'CSLB License #1106798',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 El Paseo Ln',
    addressLocality: 'Mill Valley',
    addressRegion: 'CA',
    postalCode: '94941',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.9060,
    longitude: -122.5450,
  },
  areaServed: [
    'Mill Valley', 'Tiburon', 'Sausalito', 'San Rafael', 'Novato',
    'Belvedere', 'Corte Madera', 'Larkspur', 'San Anselmo', 'Fairfax',
    'Ross', 'Kentfield', 'Greenbrae', 'Marin County',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
  },
  priceRange: '$$$$',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a general contractor charge in Marin County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'General contractors in Marin County typically charge 15% to 25% of total project cost as their management fee. For luxury remodels, ConstruBay uses fixed-price contracts with detailed line-item estimates so you know exactly where every dollar goes. A luxury kitchen remodel runs $95,000 to $195,000. A whole-home remodel runs $400 to $700 per square foot. ADUs run $90,000 to $500,000+ depending on type and scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I verify a contractor\'s license in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visit cslb.ca.gov and search by license number or company name. ConstruBay\'s CSLB license number is 1106798. You can verify our active status, bonding, insurance, workers\' compensation coverage, and any complaint history directly on the CSLB website. Always verify before signing any contract.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are red flags when hiring a general contractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Red flags include: no CSLB license or an expired license, requests for more than 10% down payment before work begins, no written contract, vague or verbal estimates instead of detailed line-item bids, pressure to start immediately, no verifiable references from local projects, and no physical business address. In Marin County, also verify the contractor has specific experience with hillside construction, Design Review Board processes, and local permit requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a home remodel take in Marin County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Permit timelines in Marin County vary by jurisdiction and project scope. A kitchen remodel typically takes 6 to 9 months from design to completion. A whole-home remodel runs 9 to 18 months. ADUs take 8 to 14 months. Permitting alone accounts for 8 to 16 weeks in most Marin cities. ConstruBay uses PlanPass.ai to pre-screen plans for code issues before submission, which reduces correction cycles and accelerates approvals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit for a remodel in Marin County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most remodeling work in Marin County requires permits. Structural changes, electrical panel upgrades, plumbing modifications, HVAC work, and any addition or ADU always require permits. Cosmetic work like painting, flooring, and cabinet replacement typically does not. Unpermitted work creates significant problems at resale and can result in fines and forced removal. ConstruBay handles all permitting as part of every project.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a general contractor and a handyman?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A licensed general contractor (Class B license) can manage projects of any size, pull building permits, perform structural work, and coordinate specialty trades including electricians and plumbers. In California, a handyman is legally limited to projects under $500 and cannot pull permits or perform work requiring a specialty license. For any project involving permits, structural changes, or significant scope, a licensed GC is legally required and financially protects you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which general contractor is best in Marin County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ConstruBay is Marin County\'s top-rated luxury general contractor with a 4.9-star rating across 47 verified Google and Nextdoor reviews. Owner Paulo Fernandes personally manages every project with a fixed-price contract, transparent cost breakdown, and AI-powered permit planning through PlanPass.ai. CSLB license #1106798. Serving Mill Valley, Tiburon, Sausalito, San Rafael, Novato, and all of Marin County.',
      },
    },
  ],
};

const services = [
  { title: 'Luxury Kitchen Remodels', href: '/services/kitchen-remodel-marin-county', desc: 'Custom cabinetry, imported stone, professional appliances. $95K–$195K.' },
  { title: 'Luxury Bathroom Remodels', href: '/services/bathroom-remodel-marin-county', desc: 'Spa-grade primary suites, heated floors, custom steam showers.' },
  { title: 'Whole Home Remodels', href: '/services/whole-house-remodel-marin-county', desc: 'Full-scope estate renovations. $400–$700/sqft.' },
  { title: 'Home Additions', href: '/services/home-addition-marin-county', desc: 'Second stories, primary suite wings, seamless structural integration.' },
  { title: 'ADU Construction', href: '/services/adu-builder-marin-county', desc: 'Detached ADUs, garage conversions, JADUs. AI permit planning.' },
  { title: 'New Custom Construction', href: '/services/new-construction-marin-county', desc: 'Architect-designed estates from foundation to finish.' },
  { title: 'Deck & Outdoor Living', href: '/services/deck-outdoor-living-marin-county', desc: 'Ipe decking, outdoor kitchens, louvered pergolas.' },
  { title: 'Basement Finishing', href: '/services/basement-finishing-marin-county', desc: 'Wine cellars, home theaters, wellness retreats.' },
];

const cities = [
  'Mill Valley', 'Tiburon', 'Sausalito', 'Belvedere', 'Corte Madera',
  'Larkspur', 'San Anselmo', 'Fairfax', 'Ross', 'Kentfield',
  'Greenbrae', 'San Rafael', 'Novato', 'Stinson Beach', 'Bolinas',
];

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '$85M+', label: 'Constructed' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '10 Yr', label: 'Workmanship Warranty' },
];

export default function GeneralContractorMarinCountyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main style={{ backgroundColor: '#000000', color: '#ffffff' }}>

        {/* HERO */}
        <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
            alt="Luxury home construction Marin County"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, padding: '0 24px' }}>
            <p style={{ fontFamily: MS, fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, marginBottom: 20 }}>
              CSLB #1106798 · Licensed · Bonded · Insured
            </p>
            <h1 style={{ fontFamily: CG, fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.05, marginBottom: 24 }}>
              Licensed General Contractor<br />in Marin County, CA
            </h1>
            <p style={{ fontFamily: MS, fontSize: 14, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.65)', maxWidth: 600, margin: '0 auto 48px', lineHeight: 1.9 }}>
              Luxury remodels, ADUs, home additions, and custom construction across all of Marin County. Owner-led. Fixed-price contracts. AI-powered permit planning via PlanPass.ai.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/request-a-bid" style={{ background: GRAD, color: '#000000', fontFamily: MS, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 48px', textDecoration: 'none', display: 'inline-block' }}>
                Request a Bid
              </Link>
              <a href="tel:4159689494" style={{ border: '1px solid rgba(203,178,106,0.5)', color: GOLD, fontFamily: MS, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 48px', textDecoration: 'none', display: 'inline-block' }}>
                (415) 968-9494
              </a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={{ borderTop: '1px solid rgba(203,178,106,0.2)', borderBottom: '1px solid rgba(203,178,106,0.2)', padding: '40px 24px', backgroundColor: '#000000' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px 64px' }}>
            {stats.map(s => (
              <div key={s.value} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: CG, fontSize: '2.2rem', fontWeight: 300, background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 4 }}>{s.value}</p>
                <p style={{ fontFamily: MS, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CONSTRUBAY */}
        <section style={{ padding: '96px 24px', maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: MS, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, marginBottom: 16 }}>Why ConstruBay</p>
          <h2 style={{ fontFamily: CG, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#ffffff', marginBottom: 32, lineHeight: 1.2 }}>
            Marin County&apos;s Premier General Contractor
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48 }}>
            {[
              { title: 'Owner-Led Every Project', body: 'Paulo Fernandes personally manages every ConstruBay project. You always know who is responsible. No subcontracted project management, no handoffs to a crew you never met.' },
              { title: 'Fixed-Price Contracts', body: 'We provide detailed line-item estimates with no hidden allowances. Your price is locked before demolition begins. Budget surprises are a contractor problem, not yours.' },
              { title: 'AI-Powered Permitting', body: 'PlanPass.ai pre-screens plans against Marin County code before submission, catching issues that cause correction cycles. Faster approvals, fewer delays, lower total project cost.' },
              { title: '10-Year Workmanship Warranty', body: 'Every ConstruBay project carries a 10-year workmanship warranty. We build to a standard we are prepared to stand behind for a decade.' },
              { title: 'Marin-Specific Expertise', body: 'We understand hillside construction, WUI fire codes, Design Review Boards, and the permit timelines of all 11 Marin jurisdictions. This knowledge saves months on complex projects.' },
              { title: 'CSLB Licensed & Verified', body: 'CSLB #1106798. Fully licensed, bonded, and insured. Verify our active status at cslb.ca.gov. We carry general liability and workers\' compensation on every project.' },
            ].map(item => (
              <div key={item.title}>
                <div style={{ width: 32, height: 1, background: GRAD, marginBottom: 16 }} />
                <h3 style={{ fontFamily: CG, fontSize: '1.4rem', fontWeight: 300, color: GOLD, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontFamily: MS, fontSize: 12, lineHeight: 1.9, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.03em' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES GRID */}
        <section style={{ backgroundColor: '#080808', padding: '96px 24px', borderTop: '1px solid rgba(203,178,106,0.1)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p style={{ fontFamily: MS, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, marginBottom: 16, textAlign: 'center' }}>What We Build</p>
            <h2 style={{ fontFamily: CG, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#ffffff', marginBottom: 48, textAlign: 'center', lineHeight: 1.2 }}>
              General Contractor Services in Marin County
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 2 }}>
              {services.map(s => (
                <Link key={s.href} href={s.href} style={{ display: 'block', padding: '32px 28px', backgroundColor: '#0a0a0a', border: '1px solid rgba(203,178,106,0.1)', textDecoration: 'none' }}>
                  <h3 style={{ fontFamily: CG, fontSize: '1.3rem', fontWeight: 300, color: '#ffffff', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontFamily: MS, fontSize: 11, lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>{s.desc}</p>
                  <p style={{ fontFamily: MS, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD }}>Learn More →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ padding: '96px 24px', backgroundColor: '#000000' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p style={{ fontFamily: MS, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, marginBottom: 16, textAlign: 'center' }}>4.9★ Google Rating · 47 Reviews</p>
            <h2 style={{ fontFamily: CG, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#ffffff', marginBottom: 56, textAlign: 'center' }}>What Marin Homeowners Say</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
              {[
                { quote: 'Quick to respond! They scheduled a complimentary assessment in a timely manner. Hired them for several projects on our home. They do great work, clean, friendly, fun to work with on a daily basis.', name: 'Brian M.', location: 'Mill Valley' },
                { quote: 'Great place to work at with great people. Energetic with a great foundation for growth. Organized and focused to perform at a high level of expectation for their customers.', name: 'Kathryn R.', location: 'Marin County' },
                { quote: 'The job was very fast paced and fun. I dealt with different aspects of their business and the team was incredibly professional throughout.', name: 'Gwen M.', location: 'Marin County' },
              ].map(t => (
                <div key={t.name} style={{ borderLeft: '2px solid rgba(203,178,106,0.3)', paddingLeft: 24 }}>
                  <p style={{ fontFamily: MS, fontSize: 12, lineHeight: 1.9, color: 'rgba(255,255,255,0.65)', marginBottom: 20, fontStyle: 'italic' }}>&ldquo;{t.quote}&rdquo;</p>
                  <p style={{ fontFamily: MS, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD }}>{t.name} · {t.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AREAS SERVED */}
        <section style={{ backgroundColor: '#080808', padding: '96px 24px', borderTop: '1px solid rgba(203,178,106,0.1)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <p style={{ fontFamily: MS, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, marginBottom: 16 }}>Service Area</p>
            <h2 style={{ fontFamily: CG, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#ffffff', marginBottom: 24, lineHeight: 1.2 }}>
              General Contractor Services Across All of Marin County
            </h2>
            <p style={{ fontFamily: MS, fontSize: 13, lineHeight: 1.9, color: 'rgba(255,255,255,0.6)', marginBottom: 40, maxWidth: 680 }}>
              ConstruBay serves every community in Marin County. We understand the unique building requirements, Design Review Board processes, WUI fire codes, and permitting timelines for each of Marin&apos;s eleven jurisdictions — knowledge that directly protects your timeline and budget.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {cities.map(city => (
                <span key={city} style={{ border: '1px solid rgba(203,178,106,0.2)', padding: '8px 20px', fontFamily: MS, fontSize: 11, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)' }}>
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '96px 24px', backgroundColor: '#000000' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <p style={{ fontFamily: MS, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, marginBottom: 16, textAlign: 'center' }}>Common Questions</p>
            <h2 style={{ fontFamily: CG, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#ffffff', marginBottom: 56, textAlign: 'center', lineHeight: 1.2 }}>
              General Contractor FAQs — Marin County
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(203,178,106,0.15)', paddingTop: 28, paddingBottom: 28 }}>
                  <p style={{ fontFamily: MS, fontSize: 13, fontWeight: 400, color: '#ffffff', marginBottom: 12, lineHeight: 1.6 }}>{item.name}</p>
                  <p style={{ fontFamily: MS, fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9 }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(203,178,106,0.15)' }} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#000000', borderTop: '1px solid rgba(203,178,106,0.2)', padding: '120px 24px', textAlign: 'center' }}>
          <p style={{ fontFamily: MS, fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: GOLD, opacity: 0.7, marginBottom: 24 }}>Begin Your Project</p>
          <h2 style={{ fontFamily: CG, fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.1, marginBottom: 24 }}>
            Ready to Build in Marin County?
          </h2>
          <p style={{ fontFamily: MS, fontSize: 13, color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.9 }}>
            Schedule a complimentary site assessment with Paulo. No pressure. No obligation. CSLB #1106798.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/request-a-bid" style={{ background: GRAD, color: '#000000', fontFamily: MS, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none', display: 'inline-block' }}>
              Request a Bid
            </Link>
            <a href="tel:4159689494" style={{ border: '1px solid rgba(203,178,106,0.4)', color: GOLD, fontFamily: MS, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 52px', textDecoration: 'none', display: 'inline-block' }}>
              (415) 968-9494
            </a>
          </div>
          <div style={{ marginTop: 48, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px 40px' }}>
            {[
              { label: 'Kitchen Remodel', href: '/services/kitchen-remodel-marin-county' },
              { label: 'ADU Builder', href: '/services/adu-builder-marin-county' },
              { label: 'Home Addition', href: '/services/home-addition-marin-county' },
              { label: 'All Services', href: '/services' },
              { label: 'Mill Valley GC', href: '/mill-valley' },
              { label: 'Tiburon GC', href: '/tiburon' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ fontFamily: MS, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.5)', textDecoration: 'none' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
