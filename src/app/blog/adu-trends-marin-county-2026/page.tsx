import type { Metadata } from 'next'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'ADU Trends and What Luxury Homeowners in Marin County Need to Know in 2026 | ConstruBay',
  description: 'From fee waivers and digital permitting to pre-approved detached ADUs — here is what Marin County luxury homeowners need to know about ADU trends and opportunities in 2026.',
  alternates: { canonical: 'https://www.construbay.com/blog/adu-trends-marin-county-2026' },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'What changed for ADUs in California in 2026?',
    answer: 'California HCD updated its ADU Handbook in January 2026 with a December 2025 addendum incorporating state law changes effective January 1, 2026. Key updates include SB 543\'s 15-day completeness requirement, AB 1154\'s owner-occupancy revision for JADUs with independent sanitation, and AB 462\'s 60-day timeline for Coastal Development Permits in Marin\'s coastal zones.',
  },
  {
    question: 'Are there still ADU fee incentives in Marin County in 2026?',
    answer: 'Yes. Marin County extended its ADU fee waiver program through December 31, 2026. Eligible ADUs can receive up to $2,500 in fee waivers, and eligible JADUs up to $1,500. The program is designed to encourage ADU construction that adds housing supply. Contact the Marin County Community Development Agency for current eligibility requirements.',
  },
  {
    question: 'Can Mill Valley homeowners build more than one accessory unit?',
    answer: 'Yes. Under current California law and Mill Valley\'s implementing regulations, single-family property owners can build one ADU plus one Junior ADU (JADU) under certain conditions. The ADU can be detached, attached, or converted from existing space. The JADU must be within the existing primary structure. Site-specific constraints — lot size, setbacks, coverage limits — determine what is actually achievable on a given parcel.',
  },
  {
    question: 'Are pre-approved ADU options available in Mill Valley?',
    answer: 'Yes. Mill Valley offers a pre-approval program for detached ADU structures. Using a pre-approved plan reduces design costs, accelerates plan check review, and eliminates uncertainty around structural compliance for that portion of the project. Site-specific issues — utilities, grading, setbacks, tree impacts — must still be resolved independently, but the structural review phase moves significantly faster.',
  },
]

const keyTakeaways = [
  'California HCD updated its ADU Handbook in January 2026 with a December 2025 addendum for state law changes effective January 1, 2026',
  'Marin County extended its ADU fee waiver program through December 31, 2026',
  'Mill Valley allows one ADU plus one JADU on single-family properties under certain conditions',
  'Mill Valley offers pre-approved detached ADU structures that save time and money on the permitting process',
  'ADUs under 750 sq ft generally avoid impact fees in Marin County except school fees',
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ADU Trends and What Luxury Homeowners in Marin County Need to Know in 2026',
  description: 'From fee waivers and digital permitting to pre-approved detached ADUs — what Marin County luxury homeowners need to know about ADU trends and opportunities in 2026.',
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  author: {
    '@type': 'Person',
    name: 'Paulo Fernandes',
    jobTitle: 'Licensed General Contractor',
    url: 'https://www.construbay.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ConstruBay',
    logo: { '@type': 'ImageObject', url: 'https://www.construbay.com/images/svg/logo%20vector-02.svg' },
  },
  image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  url: 'https://www.construbay.com/blog/adu-trends-marin-county-2026',
  keywords: 'ADU trends Marin County 2026, ADU laws California 2026, Mill Valley ADU, detached guest house Marin, ADU fee waiver Marin',
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.construbay.com' },
        { name: 'Blog', url: 'https://www.construbay.com/blog' },
        { name: 'ADU Trends Marin County 2026', url: 'https://www.construbay.com/blog/adu-trends-marin-county-2026' },
      ]} />
      <FaqSchema items={faqs} />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
            alt="Beautiful detached guest house with landscaping — ADU trends in Marin County 2026"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', maxWidth: '800px' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              ADUs
            </p>
            <h1 style={{ fontFamily: CG, fontSize: 'clamp(26px, 4vw, 50px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.2 }}>
              ADU Trends and What Luxury Homeowners in Marin County Need to Know in 2026
            </h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-24">

          {/* Meta row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/paulo/paulo-fernandes-01.png" alt="Paulo Fernandes" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(203,178,106,0.3)' }} />
            <div>
              <p style={{ fontFamily: MS, fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '2px' }}>Paulo Fernandes</p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>April 5, 2026</span>
                <span style={{ color: 'rgba(203,178,106,0.3)', fontSize: '10px' }}>·</span>
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>7 min read</span>
              </div>
            </div>
          </div>

          {/* Author box */}
          <div style={{ borderLeft: '3px solid #cbb26a', background: '#0a0a0a', padding: '1.5rem', marginBottom: '2rem' }}>
            <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Written by</p>
            <p style={{ color: '#ffffff', fontFamily: CG, fontSize: '1.3rem', marginBottom: '0.25rem' }}>Paulo Fernandes</p>
            <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Licensed General Contractor — CSLB #1106798</p>
            <p style={{ color: '#aaaaaa', fontFamily: MS, fontSize: '0.75rem', lineHeight: '1.6' }}>Founder of ConstruBay and PlanPass.ai. 15+ years of luxury residential construction experience in Marin County, California.</p>
          </div>

          <KeyTakeaways takeaways={keyTakeaways} />

          <article>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Why ADUs Remain a Strategic Luxury Investment in Marin County
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Marin County property owners have built more ADUs per capita than almost anywhere in California since the 2020 reform laws eliminated the most significant permitting barriers. In 2026, the investment case is more compelling than ever — not primarily because of rental income potential, though that remains strong at $3,500 to $5,500 per month for well-located units, but because of how ADUs interact with the specific financial conditions of Marin&apos;s high-value market.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              For homeowners with locked low-rate mortgages who cannot afford to move, an ADU adds functional square footage, multigenerational flexibility, and income potential without requiring them to surrender their financing position. For estate-scale properties in Tiburon, Belvedere, and Ross, a well-designed guest house or caretaker unit adds amenity value that a vacant lot does not. And for homeowners who purchased at the top of the market and need to offset carrying costs, a detached ADU with long-term tenants is among the most reliable capital deployments available in 2026.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              The 2026 California ADU Legal Updates Homeowners Should Understand
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              California HCD updated its ADU Handbook in January 2026, incorporating a December 2025 addendum that reflects state law changes effective January 1, 2026. Three bills define the current landscape: SB 543, AB 1154, and AB 462 — each of which we have covered in detail in our California ADU laws post. The practical summary for Marin County homeowners starting a project in 2026:
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              SB 543 requires local agencies to determine ADU application completeness within 15 business days and provide final written determinations within 60 business days. This eliminates the iterative correction cycles that previously stalled projects for months. AB 1154 removes the owner-occupancy requirement for JADUs with independent sanitation systems, expanding flexibility for homeowners who want a second rental unit rather than an owner-occupied setup. AB 462 accelerates Coastal Development Permit review in Sausalito and Marin&apos;s coastal zones to 60 days.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The fee structure is equally important. ADUs with 750 square feet or less of interior livable space cannot be charged impact fees under 2026 law, with only school fees remaining as a standard exception. For larger ADUs, fees must be proportional to the primary dwelling&apos;s square footage. In Marin municipalities where impact fees previously ran $18,000 to $32,000, this cap represents a material project cost reduction.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Mill Valley and Marin County Rules, Permitting Paths, and Incentives
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Mill Valley allows one ADU plus one Junior ADU (JADU) on single-family properties under certain conditions. Site-specific constraints — lot size, setbacks, lot coverage limits, and existing structure configuration — determine what is actually buildable on a given parcel. The city processes all applications through eTRAKiT and its digital submittal system. Projects requiring only building review move on the Marin County digital timeline; projects triggering planning review require three to six months of additional processing.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Mill Valley&apos;s pre-approved detached ADU program is one of the most underutilized resources in Marin County ADU permitting. Pre-approved structural plans allow applicants to bypass the structural plan check portion of the review, reducing both fees and calendar time significantly. The program works best for homeowners whose priority is speed and budget certainty over fully custom design. For estate properties where the ADU is an architectural statement, a custom design path remains the right approach — but homeowners should understand clearly what the premium in time and fees represents.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Marin County&apos;s ADU fee waiver program — extended through December 31, 2026 — offers up to $2,500 for eligible ADUs and up to $1,500 for eligible JADUs. This is a meaningful incentive for smaller units targeting the fee-waiver criteria. Applications should be submitted well before year-end to ensure processing is complete within the program window.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Detached Guest Houses, Pool Houses, and Multigenerational ADUs for High-End Properties
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              For the estate-scale properties that define the luxury segment in Tiburon, Belvedere, Ross, and southern Marin, the ADU conversation is often less about rental income and more about property program — what the property can do. A well-designed detached guest house that functions as a self-contained living unit, accommodates parents or adult children comfortably, and can generate income when not in family use is a genuinely different asset than a detached structure that only serves one purpose.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              In 2026, the most sophisticated ADU projects in ConstruBay&apos;s portfolio are designed with this dual-use mandate. Pool house structures that include a legal sleeping area, kitchen, and full bath. Caretaker cottages on larger lots that provide on-site support while generating rental income. Detached studios with exceptional natural light that serve as creative workspaces on weekdays and guest accommodation on weekends. The legal framework now supports all of these configurations in most Marin jurisdictions.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              How to Design an ADU That Adds Value Without Compromising the Main Home
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The most common mistake in luxury ADU projects is treating the guest structure as a separate design problem from the main house. The ADU that adds the most value — in resale, in daily experience, and in rental premium — is the one that feels like it belongs to the same property. This requires shared material language, coordinated landscape integration, and a siting decision that preserves the primary residence&apos;s privacy and views while giving the ADU its own sense of arrival.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Practical design principles for high-value ADU projects in Marin County: position the ADU so its windows do not look directly into the main house&apos;s primary living areas; use the same exterior material palette or a complementary one rather than a contrasting approach; design the ADU entry sequence so it feels complete and private, not like a second door on a garage; include a full kitchen, laundry, and dedicated outdoor space to maximize flexibility and rental eligibility; and maintain adequate parking for both structures on-site to avoid the parking analysis that can trigger discretionary planning review.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The permitting path always starts with a site analysis. Before any design fees are committed, a thorough review of setbacks, lot coverage, height limits, tree protections, slope constraints, and existing utility capacity determines what is actually achievable. At ConstruBay, that feasibility review is the foundation of every ADU engagement — because the cost of discovering a fatal constraint after design work is underway is always higher than the cost of discovering it before.
            </p>

          </article>

          {/* FAQ Section */}
          <div style={{ marginTop: '64px' }}>
            <h2 style={{ fontFamily: CG, fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '300', color: '#ffffff', marginBottom: '32px', lineHeight: 1.3 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(203,178,106,0.15)', paddingTop: '24px', paddingBottom: '24px' }}>
                  <p style={{ fontFamily: MS, fontSize: '13px', fontWeight: '400', color: '#ffffff', marginBottom: '10px', lineHeight: 1.5, letterSpacing: '0.02em' }}>
                    {faq.question}
                  </p>
                  <p style={{ fontFamily: MS, fontSize: '13px', fontWeight: '300', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, letterSpacing: '0.03em' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(203,178,106,0.15)' }} />
            </div>
          </div>

          {/* Tags */}
          <div style={{ marginTop: '64px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['ADU trends Marin County 2026', 'California ADU laws 2026', 'Mill Valley ADU', 'detached guest house Marin', 'ADU fee waiver Marin', 'multigenerational ADU', 'luxury ADU design'].map(tag => (
              <span key={tag} style={{ fontFamily: MS, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)', border: '1px solid rgba(203,178,106,0.2)', padding: '4px 12px' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '64px', padding: '48px', border: '1px solid rgba(203,178,106,0.2)', textAlign: 'center' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Ready to Build?
            </p>
            <h3 style={{ fontFamily: CG, fontSize: '32px', fontWeight: '300', color: '#ffffff', marginBottom: '16px' }}>
              Let&apos;s Talk About Your ADU
            </h3>
            <p style={{ fontFamily: MS, fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.8 }}>
              Free feasibility assessment for qualified ADU projects in Marin County.
            </p>
            <a href="tel:4159689494" style={{ display: 'inline-block', border: '1px solid #cbb26a', color: '#cbb26a', fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '16px 48px', textDecoration: 'none' }}>
              (415) 968-9494
            </a>
          </div>

          {/* Back link */}
          <div style={{ marginTop: '48px' }}>
            <a href="/blog" style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Articles
            </a>
          </div>

        </div>
      </main>
    </>
  )
}
