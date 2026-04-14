import type { Metadata } from 'next'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'How Much Does a Kitchen Remodel Cost in Sonoma County? (2026 Guide) | ConstruBay',
  description: 'Detailed kitchen remodel cost breakdown for Sonoma County, including Petaluma, Santa Rosa, and Sebastopol. Mid-range and luxury pricing, labor costs, materials, and permits for 2026.',
  alternates: { canonical: 'https://www.construbay.com/blog/kitchen-remodel-cost-sonoma-county' },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'What is the average cost of a kitchen remodel in Sonoma County in 2026?',
    answer: 'A mid-range kitchen remodel in Sonoma County costs between $75,000 and $150,000. Luxury renovations typically run $150,000 to $350,000 or higher, depending on finishes and appliance selections. Petaluma and Sebastopol tend to fall on the lower end; Santa Rosa and higher-value wine country homes trend toward the luxury range. The total depends on whether you are replacing appliances, cabinetry, countertops, flooring, electrical systems, and plumbing.',
  },
  {
    question: 'Are Sonoma County kitchen remodels significantly cheaper than Marin County?',
    answer: 'Sonoma County kitchen remodels are approximately 15% to 25% less expensive than equivalent projects in Marin County, primarily due to lower land values and somewhat lower labor costs in secondary markets. Labor rates in Santa Rosa still command a premium over rural Sonoma, but not at Marin levels. Material costs are equivalent across the region. For a $150,000 luxury kitchen in Marin, expect the equivalent scope to cost $112,000 to $128,000 in Sonoma County.',
  },
  {
    question: 'How long do Sonoma County building permits take for a kitchen remodel?',
    answer: 'Sonoma County requires electronic plan submittals and typically processes kitchen remodel permits within three to five weeks for standard projects. Complex remodels involving structural changes, new electrical loads, or plumbing modifications may extend to six to eight weeks. Planning approval is rarely required for kitchen-only remodels unless the project involves expanding the home&apos;s footprint or altering parking.',
  },
]

const keyTakeaways = [
  'Mid-range kitchen remodels in Sonoma County cost $75,000–$150,000; luxury kitchens run $150,000–$350,000+',
  'Sonoma County labor rates are approximately 15–25% lower than Marin County for equivalent work quality',
  'Petaluma and Sebastopol are the most cost-conscious markets; Santa Rosa commands Marin-adjacent pricing for high-end projects',
  'Permit timelines in Sonoma County are three to five weeks for standard work, six to eight weeks for complex remodels',
  'Labor is the largest cost driver; material costs are equivalent across Marin and Sonoma County markets',
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Does a Kitchen Remodel Cost in Sonoma County? (2026 Guide)',
  description: 'Detailed kitchen remodel cost breakdown for Sonoma County, including materials, labor, permits, and market variation across Petaluma, Santa Rosa, and Sebastopol.',
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
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
  image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
  url: 'https://www.construbay.com/blog/kitchen-remodel-cost-sonoma-county',
  keywords: 'kitchen remodel cost Sonoma County, kitchen renovation Sonoma, luxury kitchen Petaluma, kitchen remodel Santa Rosa 2026',
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.construbay.com' },
        { name: 'Blog', url: 'https://www.construbay.com/blog' },
        { name: 'Kitchen Remodel Cost Sonoma County', url: 'https://www.construbay.com/blog/kitchen-remodel-cost-sonoma-county' },
      ]} />
      <FaqSchema items={faqs} />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80"
            alt="Modern kitchen with marble countertops and custom cabinetry — kitchen remodel Sonoma County 2026"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', maxWidth: '800px' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Cost Guide
            </p>
            <h1 style={{ fontFamily: CG, fontSize: 'clamp(26px, 4vw, 50px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.2 }}>
              How Much Does a Kitchen Remodel Cost in Sonoma County? (2026 Guide)
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
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>April 14, 2026</span>
                <span style={{ color: 'rgba(203,178,106,0.3)', fontSize: '10px' }}>·</span>
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>8 min read</span>
              </div>
            </div>
          </div>

          {/* Author box */}
          <div style={{ borderLeft: '3px solid #cbb26a', background: '#0a0a0a', padding: '1.5rem', marginBottom: '2rem' }}>
            <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Written by</p>
            <p style={{ color: '#ffffff', fontFamily: CG, fontSize: '1.3rem', marginBottom: '0.25rem' }}>Paulo Fernandes</p>
            <p style={{ color: '#cbb26a', fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Licensed General Contractor — CSLB #1106798</p>
            <p style={{ color: '#aaaaaa', fontFamily: MS, fontSize: '0.75rem', lineHeight: '1.6' }}>Founder of ConstruBay and PlanPass.ai. 15+ years of luxury residential construction experience in Northern California.</p>
          </div>

          <KeyTakeaways takeaways={keyTakeaways} />

          <article>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Kitchen Remodel Cost Breakdown in Sonoma County
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Sonoma County kitchen remodels operate within three clear cost brackets. A mid-range renovation — cabinetry replacement, new countertops, appliance upgrade, electrical and plumbing modernization — runs between $75,000 and $150,000 in 2026. A luxury kitchen with semi-custom or fully custom cabinetry, premium finishes, integrated appliances, and designer-level material selections costs $150,000 to $350,000. The highest-tier projects, featuring bespoke millwork, book-matched natural stone, top-tier appliance packages, and structural modifications, exceed $350,000.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The cost differential between Petaluma, Sebastopol, and Santa Rosa reflects land value and market positioning more than construction methodology. A $100,000 kitchen remodel is materially identical whether it is built in Petaluma or Santa Rosa; the variance in total project cost reflects the surrounding property value context and client expectations. Santa Rosa wine country homes and downtown estates command luxury-tier budgets; Sebastopol and Petaluma tend toward mid-range value propositions.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The cost of labor is the single largest variable in a Sonoma County kitchen remodel. Material costs are consistent across the region and across Marin County. What shifts is the labor rate per hour and the labor-hour count required for cabinetry installation, finish carpentry, tile work, and trade coordination. On a $100,000 Sonoma County kitchen, labor typically accounts for 35% to 45% of the total — roughly $35,000 to $45,000.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Material and Labor Costs in Sonoma County vs. Marin County
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Sonoma County labor rates for kitchen trades average 15% to 25% lower than Marin County equivalents. A lead carpenter in Petaluma charging $120 per hour is typical; the equivalent role in Marin runs $145 to $165. This difference compounds across the span of a full kitchen remodel. On a project requiring 400 labor hours, the Sonoma differential saves approximately $10,000 to $18,000 before overhead and project management markup.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Material costs are equivalent across both regions. Quartz countertops, semi-custom cabinetry, ceramic tile, and stainless steel appliances are priced through regional distributors without meaningful variance between Marin and Sonoma. Premium natural stone — marble, granite, quartzite — carries slight sourcing premiums in Sonoma due to smaller finished-slab inventory, but the difference rarely exceeds 5%.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The permitting cost in Sonoma County averages $2,500 to $4,000 for a standard kitchen remodel, depending on jurisdiction. Santa Rosa city permits run slightly higher than unincorporated Sonoma County. These costs are non-recoverable and should be factored into preliminary budgeting before material selections and contractor estimation.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Petaluma, Santa Rosa, and Sebastopol: Market-Specific Pricing
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Petaluma kitchen remodels most commonly fall in the $70,000 to $130,000 range, reflecting the city&apos;s lower median home values and pragmatic homeowner expectations. Petaluma projects tend toward semi-custom cabinetry, solid-surface countertops or quartz, and functional design over decorative complexity. A well-executed mid-range kitchen in Petaluma costs approximately $90,000 installed.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Santa Rosa kitchens are more market-segmented. Downtown and Fountaingrove luxury homes regularly support $180,000 to $300,000 kitchen budgets with wine-country design sensibilities, custom millwork, and high-end appliance integration. Mid-range Santa Rosa projects run $110,000 to $160,000. The wine country influence creates a strong aesthetic preference for warm tones, natural materials, and integrated wine storage — features that add cost relative to standard kitchen remodels.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Sebastopol kitchen remodels range from $65,000 to $140,000, as the community skews toward progressive residential design, sustainability-conscious selections, and locally-sourced materials. Sebastopol homeowners frequently request reclaimed wood accents, permeable cabinetry finishes, and integrated composting areas — design elements that command modest premiums but reflect the community&apos;s values. Permit timelines in Sebastopol average five to six weeks due to careful environmental review.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Cabinetry, Countertops, and Appliances: The Cost Drivers
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Cabinetry represents 25% to 35% of a typical Sonoma County kitchen remodel cost. Stock cabinetry costs $18,000 to $35,000 installed; semi-custom options run $35,000 to $55,000. Fully custom cabinetry begins at $60,000 and escalates rapidly with bespoke detailing, specialty hardware, and finish options. In a $100,000 kitchen, allocating $30,000 to $40,000 for cabinetry is the realistic range.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Countertops account for 15% to 20% of project cost. Quartz countertops, the market standard, run $3,500 to $6,500 installed for a typical kitchen (120 to 160 square feet of work surface plus island). Premium natural stone — marble or quartzite — costs $5,500 to $12,000 for the same footprint. Butcher block or engineered wood accents add warmth at a lower price point but require regular maintenance.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Appliances represent 10% to 15% of remodel cost in mid-range projects. A mid-tier package — refrigerator, range, microwave, dishwasher, all stainless steel, standard brands — costs $6,000 to $9,000. Luxury appliance packages with integrated refrigeration, dual-fuel ranges, or specialty equipment (wine fridges, warming drawers) cost $12,000 to $22,000. The appliance selection must be finalized early, as lead times exceed twelve weeks for certain European brands.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Permits, Timelines, and Budget Planning
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Sonoma County requires electronic plan submittals for all kitchen remodels and processes permit applications within a published timeline of three to five weeks for standard projects. A standard kitchen remodel involves new cabinetry, countertops, appliance replacement, and electrical or plumbing updates that require permits but do not trigger structural review or planning approval.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Complex remodels — those involving structural changes, significant electrical load increases, or plumbing system modifications — may extend to six to eight weeks in permitting. Kitchen remodels that expand the home&apos;s footprint or modify the exterior rarely require planning approval unless the addition is visible from a public right-of-way or subject to hillside overlay constraints. For 95% of Sonoma County kitchen remodels, the permitting phase is straightforward and relatively fast.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The full construction timeline for a Sonoma County kitchen remodel — from design through final inspection — typically requires four to five months. Permitting occupies one month; material procurement occupies four to six weeks; construction and finishing occupies six to eight weeks. Homeowners beginning a kitchen remodel in May can expect completion by September if the design is finalized and the permit package is submitted by early June.
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
            {['kitchen remodel cost Sonoma County', 'kitchen renovation Sonoma', 'Petaluma kitchen remodel', 'Santa Rosa kitchen 2026', 'luxury kitchen Sebastopol', 'kitchen remodel permits', 'Sonoma County contractor'].map(tag => (
              <span key={tag} style={{ fontFamily: MS, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)', border: '1px solid rgba(203,178,106,0.2)', padding: '4px 12px' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '64px', padding: '48px', border: '1px solid rgba(203,178,106,0.2)', textAlign: 'center' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Ready to Remodel Your Kitchen?
            </p>
            <h3 style={{ fontFamily: CG, fontSize: '32px', fontWeight: '300', color: '#ffffff', marginBottom: '16px' }}>
              Let&apos;s Discuss Your Project
            </h3>
            <p style={{ fontFamily: MS, fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.8 }}>
              Complimentary consultation for kitchen remodels in Marin and Sonoma County.
            </p>
            <a
              href="/contact"
              style={{ display: 'inline-block', border: '1px solid #cbb26a', color: '#cbb26a', fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '16px 48px', textDecoration: 'none' }}
            >
              Schedule Complimentary Assessment
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
