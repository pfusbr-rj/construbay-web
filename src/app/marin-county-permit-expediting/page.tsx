import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Marin County Permit Expediting | Fast Permit Approvals | ConstruBay',
  description: 'ConstruBay expedites building permits across Marin County. Mill Valley, Tiburon, San Rafael, Sausalito. Established relationships with all Marin building departments. CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/marin-county-permit-expediting' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'ConstruBay',
      description: 'Building permit expediting across Marin County CA. Established relationships with all Marin building departments. CSLB #1106798.',
      url: 'https://www.construbay.com/marin-county-permit-expediting',
      telephone: '+14159689494',
      areaServed: 'Marin County',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How long do building permits take in Marin County?', acceptedAnswer: { '@type': 'Answer', text: 'Marin County building permits average 8–12 weeks. ConstruBay has reduced this to 4–6 weeks through established relationships with Mill Valley, Tiburon, San Rafael and Sausalito building departments.' } },
        { '@type': 'Question', name: 'What causes permit delays in Mill Valley?', acceptedAnswer: { '@type': 'Answer', text: 'Common causes include incomplete applications, missing engineering documents, heritage tree surveys and planning department design review. ConstruBay\'s pre-submission review catches these issues before they reach the counter.' } },
        { '@type': 'Question', name: 'Does ConstruBay handle permits in all Marin County cities?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manage permits with all Marin County building departments including Mill Valley, Tiburon, San Rafael, Sausalito, Larkspur, Corte Madera and the unincorporated county for Ross, Kentfield and Belvedere.' } },
        { '@type': 'Question', name: 'How does ConstruBay speed up permit approvals?', acceptedAnswer: { '@type': 'Answer', text: 'We use pre-application meetings with planning staff, complete submissions with all required documents, and leverage established relationships with building department staff to monitor application status.' } },
      ],
    },
  ],
}

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

const points = [
  { n: '01', t: 'Pre-Application Meetings', b: 'We meet with planning staff before submitting to identify issues that would cause rejection. This step alone saves 4–6 weeks on most projects.' },
  { n: '02', t: 'Complete Submissions', b: 'Every application is submitted with full engineering, soils reports, arborist surveys and all required documentation. Incomplete submissions are the number one cause of permit delays.' },
  { n: '03', t: 'Department Relationships', b: 'We have established working relationships with building department staff in Mill Valley, Tiburon, San Rafael, Sausalito, Larkspur and Corte Madera.' },
  { n: '04', t: 'Status Monitoring', b: 'We track every permit application actively and respond to corrections within 24 hours to keep approvals moving.' },
]

const timelines = [
  ['Mill Valley', 'Average 8–12 weeks', 'ConstruBay avg 4–6 weeks'],
  ['Tiburon', 'Average 8–10 weeks', 'ConstruBay avg 4–5 weeks'],
  ['San Rafael', 'Average 6–10 weeks', 'ConstruBay avg 3–5 weeks'],
  ['Sausalito', 'Average 8–12 weeks', 'ConstruBay avg 4–6 weeks'],
  ['Larkspur', 'Average 6–10 weeks', 'ConstruBay avg 3–5 weeks'],
  ['Corte Madera', 'Average 6–10 weeks', 'ConstruBay avg 3–5 weeks'],
]

const faqs = [
  { q: 'How long do building permits take in Marin County?', a: 'Marin County building permits average 8–12 weeks. ConstruBay has reduced this to 4–6 weeks through established relationships with Mill Valley, Tiburon, San Rafael and Sausalito building departments.' },
  { q: 'What causes permit delays in Mill Valley?', a: 'Common causes include incomplete applications, missing engineering documents, heritage tree surveys and planning department design review. ConstruBay\'s pre-submission review catches these issues before they reach the counter.' },
  { q: 'Does ConstruBay handle permits in all Marin County cities?', a: 'Yes. We manage permits with all Marin County building departments including Mill Valley, Tiburon, San Rafael, Sausalito, Larkspur, Corte Madera and the unincorporated county for Ross, Kentfield and Belvedere.' },
  { q: 'How does ConstruBay speed up permit approvals?', a: 'We use pre-application meetings with planning staff, complete submissions with all required documents, and leverage established relationships with building department staff to monitor application status.' },
]

export default function MarinCountyPermitExpeditingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

        {/* HERO */}
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Permit Expediting · Marin County</p>
          <h1 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Marin County<br />Permit Expediting
          </h1>
          <p style={{ color: '#cbb26a', fontFamily: CG, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '1.5rem' }}>
            Faster Permit Approvals Across All Marin County Jurisdictions
          </p>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.85rem', lineHeight: 1.8, maxWidth: '650px', marginBottom: '2rem' }}>
            Marin County&apos;s permit process is among the most rigorous in California. Incomplete applications, missing engineering documents and planning department design review can add months to any project. ConstruBay has spent years building relationships with every Marin County building department — cutting average permit timelines from 8–12 weeks to 4–6 weeks.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Discuss Your Permit Timeline
          </Link>
        </section>

        {/* HOW WE DO IT */}
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>Our Approach</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {points.map((item) => (
              <div key={item.n} style={{ borderTop: '1px solid #333', paddingTop: '1.5rem' }}>
                <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{item.n}</p>
                <p style={{ fontFamily: MS, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.t}</p>
                <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.7 }}>{item.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PERMIT TIMELINES TABLE */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '1.5rem' }}>Permit Timelines by City</h2>
          <div style={{ border: '1px solid #1a1a1a' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#0a0a0a', padding: '0.75rem 1.25rem', gap: '1rem' }}>
              {['City', 'Standard Timeline', 'With ConstruBay'].map((h) => (
                <span key={h} style={{ fontFamily: MS, fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)' }}>{h}</span>
              ))}
            </div>
            {timelines.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '1.1rem 1.25rem', gap: '1rem', background: i % 2 === 0 ? '#000' : '#040404', borderTop: '1px solid #111' }}>
                <span style={{ fontFamily: CG, fontSize: '1.1rem', fontWeight: 300 }}>{row[0]}</span>
                <span style={{ fontFamily: MS, fontSize: '0.8rem', color: '#555' }}>{row[1]}</span>
                <span style={{ fontFamily: MS, fontSize: '0.8rem', color: '#cbb26a' }}>{row[2]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', borderTop: '1px solid #1a1a1a' }}>
          <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>FAQ</p>
          {faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #1a1a1a' }}>
              <p style={{ fontFamily: CG, fontSize: '1.2rem', marginBottom: '0.75rem' }}>{faq.q}</p>
              <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', lineHeight: 1.8 }}>{faq.a}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: CG, fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Discuss Your Permit Timeline
          </h2>
          <p style={{ color: '#aaa', fontFamily: MS, fontSize: '0.8rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Tell us about your project and we will give you a realistic permit timeline before you commit to anything.
          </p>
          <Link href="/request-a-bid" style={{ display: 'inline-block', background: '#cbb26a', color: '#000', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', textDecoration: 'none' }}>
            Discuss Your Permit Timeline
          </Link>
        </section>

      </main>
    </>
  )
}
