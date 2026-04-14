import type { Metadata } from 'next'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Bathroom Remodel Cost in Sonoma County: What to Expect in 2026 | ConstruBay',
  description: 'Complete bathroom remodel cost guide for Sonoma County: mid-range ($35k–$75k) and luxury ($75k–$175k) pricing. Materials, labor, fixtures, and permits.',
  alternates: { canonical: 'https://www.construbay.com/blog/bathroom-remodel-cost-sonoma-county' },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'What is the average bathroom remodel cost in Sonoma County in 2026?',
    answer: 'A mid-range bathroom remodel in Sonoma County costs $35,000 to $75,000, covering new tile, fixtures, vanity, and plumbing updates. Luxury bathroom renovations run $75,000 to $175,000, incorporating premium materials, heated floors, spa-quality fixtures, and custom millwork. The cost depends heavily on bathroom size, whether you are replacing tile and plumbing infrastructure, and fixture selections. A primary bathroom renovation runs 30% to 50% higher than a secondary bathroom of equivalent scope.',
  },
  {
    question: 'How much does tile work cost in a Sonoma County bathroom?',
    answer: 'Tile represents 15% to 25% of a bathroom remodel budget. Ceramic or porcelain tile — the standard for walls and floors — costs $3,000 to $8,000 installed for a mid-range bathroom (approximately 80 to 120 square feet of wall tile plus 40 to 60 square feet of floor tile). Natural stone tile (marble, granite, travertine) costs $6,000 to $14,000 for equivalent square footage. Large-format porcelain tiles and specialty layouts add cost. Labor for tile work accounts for 60% to 70% of the tile budget.',
  },
  {
    question: 'What fixtures should I budget for a luxury Sonoma County bathroom?',
    answer: 'Premium vanity and sink combinations run $3,500 to $7,500. High-end faucets cost $800 to $2,500. Luxury toilet fixtures (integrated bidets, soft-close seats) run $1,200 to $3,000. Shower systems with rainfall heads, body jets, and thermostatic controls cost $4,000 to $8,000. Heated towel racks add $1,000 to $2,500. In aggregate, a fully specified luxury bathroom with premium fixtures budgets $12,000 to $25,000 for plumbing fixtures alone. Standard fixtures cost 40% to 50% of that range.',
  },
]

const keyTakeaways = [
  'Mid-range bathroom remodels in Sonoma County cost $35,000–$75,000; luxury bathrooms run $75,000–$175,000+',
  'Tile work is the largest labor cost; natural stone tiles command premiums over ceramic',
  'Premium fixture selection (faucets, showerheads, heated floors) adds 15–25% to total budget',
  'Primary bathroom renovations cost 30–50% more than secondary bathrooms of equivalent scope',
  'Permit timelines are four to six weeks for standard bathroom work in Sonoma County',
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bathroom Remodel Cost in Sonoma County: What to Expect in 2026',
  description: 'Detailed bathroom remodel cost guide for Sonoma County covering materials, labor, fixtures, and pricing across mid-range and luxury renovations.',
  datePublished: '2026-04-15',
  dateModified: '2026-04-15',
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
  image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80',
  url: 'https://www.construbay.com/blog/bathroom-remodel-cost-sonoma-county',
  keywords: 'bathroom remodel cost Sonoma County, bathroom renovation Sonoma, luxury bathroom Petaluma, bathroom remodel Santa Rosa 2026',
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.construbay.com' },
        { name: 'Blog', url: 'https://www.construbay.com/blog' },
        { name: 'Bathroom Remodel Cost Sonoma County', url: 'https://www.construbay.com/blog/bathroom-remodel-cost-sonoma-county' },
      ]} />
      <FaqSchema items={faqs} />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury spa-style bathroom with marble tile and high-end fixtures — bathroom remodel Sonoma County 2026"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', maxWidth: '800px' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Cost Guide
            </p>
            <h1 style={{ fontFamily: CG, fontSize: 'clamp(26px, 4vw, 50px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.2 }}>
              Bathroom Remodel Cost in Sonoma County: What to Expect in 2026
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
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>April 15, 2026</span>
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
            <p style={{ color: '#aaaaaa', fontFamily: MS, fontSize: '0.75rem', lineHeight: '1.6' }}>Founder of ConstruBay and PlanPass.ai. 15+ years of luxury residential construction experience in Northern California.</p>
          </div>

          <KeyTakeaways takeaways={keyTakeaways} />

          <article>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Understanding Bathroom Remodel Cost Tiers in Sonoma County
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Sonoma County bathroom remodels operate within a well-defined cost spectrum. A mid-range bathroom renovation — new tile, standard fixture upgrades, fresh vanity, plumbing and electrical modernization — costs $35,000 to $75,000. A primary bathroom with higher-end specifications runs $75,000 to $175,000. The distinction is material selection, fixture quality, and whether the project involves structural modifications like moving plumbing walls or adding heated floors.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Secondary bathrooms — guest baths, half-baths, powder rooms — cost 30% to 50% less than primary bathrooms of equivalent finish level. A guest bathroom refresh runs $18,000 to $35,000 for tile, fixtures, and painting. A guest bathroom luxury renovation costs $35,000 to $65,000. The lower cost reflects smaller square footage and simpler plumbing demands.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The largest cost variable in a Sonoma County bathroom remodel is tile work — both material and labor. Tile accounts for 15% to 25% of total project cost. The second-largest variable is plumbing work; moving a toilet, relocating a shower, or adding fixtures like heated towel racks or spa jets increases labor intensity and material cost substantially.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Tile, Materials, and Finishes
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Ceramic and porcelain tile are the market standard for bathroom walls and floors in Sonoma County. Ceramic tile costs $4 to $8 per square foot material; porcelain runs $6 to $12 per square foot. For a typical mid-range primary bathroom, allocate approximately 120 to 160 square feet of wall tile and 50 to 70 square feet of floor tile. That footprint translates to $3,000 to $6,000 in material. Labor for tile installation — including substrate preparation, layout, grouting, and sealing — runs $3,500 to $7,500, depending on complexity.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Natural stone tile — marble, granite, travertine, slate — commands premium pricing. Marble runs $12 to $25 per square foot; granite costs $8 to $18 per square foot. Travertine is typically $7 to $15 per square foot. Material costs for equivalent square footage of natural stone are two to three times ceramic. Additionally, natural stone requires professional sealing and more careful installation techniques, increasing labor cost by 20% to 35%. For clients seeking the aesthetic of luxury natural stone, budget accordingly; it is a premium choice that reads visually exceptional but requires maintenance discipline.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Large-format porcelain tiles — 12x24 inches or larger — create a contemporary aesthetic with fewer grout lines and visual continuity. They cost 15% to 25% more than standard-size tiles and require precise installation. Specialty layouts — herringbone, basketweave, diagonal — add 20% to 30% labor premium over simple grid installation. For a luxury bathroom, these design details are often worth the investment.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Fixtures, Vanities, and Hardware
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Vanity and sink combinations represent 8% to 12% of a bathroom remodel budget. A mid-range vanity — pre-made or semi-custom, with cultured marble top — costs $1,500 to $3,000 installed. A luxury vanity with custom millwork, natural stone top, and integrated lighting runs $4,000 to $8,000. Floating vanities cost 10% to 15% more than floor-mounted vanities and require wall reinforcement engineering.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Faucet selection dramatically impacts perceived quality. Standard chrome or brushed nickel faucets cost $200 to $600. Mid-range designer faucets (Kohler, Moen premium lines) run $800 to $1,500. High-end designer faucets from European manufacturers cost $1,500 to $3,500. Hardware quality signals craftsmanship throughout the bathroom; a $2,000 faucet in an otherwise $50,000 bathroom elevates the perception of the entire space.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Luxury bathrooms often include spa-quality features. Heated towel racks cost $1,000 to $2,500. Heated floors add $3,000 to $6,000 for typical bathroom square footage. Rainfall showerheads with integrated body jets and thermostatic controls run $4,000 to $9,000 installed. Integrated bidet toilets cost $1,200 to $3,000. These features add 15% to 25% to project cost but transform the daily experience of the bathroom.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Plumbing and Electrical Work
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Plumbing modernization accounts for 15% to 20% of bathroom remodel cost. If existing plumbing is in good condition and you are simply replacing fixtures, plumbing work runs $2,500 to $4,500. If the bathroom requires new supply lines, new drain lines, or fixtures relocated beyond the existing footprint, plumbing cost escalates to $5,000 to $8,000 or higher. Moving a toilet location or adding a second water closet requires new framing, venting, and supply work that compounds cost substantially.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Electrical work modernizes lighting, ventilation, and convenience circuits. A standard bathroom remodel electrical upgrade costs $1,500 to $3,000. Luxury bathrooms with integrated lighting systems, heated mirrors, and spa features run $3,500 to $6,000 for electrical. Proper bathroom ventilation — crucial in Sonoma County&apos;s wet winters — requires exhaust fans rated for the bathroom square footage and ducted to exterior, not into attic. Modern bathroom code requires GFCI protection on all outlets; this adds cost but is non-negotiable for safety.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              In aggregate, plumbing and electrical represent 30% to 35% of total bathroom remodel budget when everything is modernized. In straightforward projects with minimal fixture relocation, these trades occupy 20% to 25% of budget.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Permits and Timelines
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Sonoma County bathroom remodel permits cost $1,500 to $2,500, depending on jurisdiction and scope. The permit timeline averages four to six weeks for standard bathroom work. If the project involves structural changes — removing walls, relocating plumbing across multiple floor systems, adding mechanical systems — permit timelines extend to eight to ten weeks.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The full construction timeline from design through completion typically requires eight to twelve weeks for a standard mid-range bathroom remodel. Permitting occupies four to six weeks; material ordering occupies two to three weeks; construction occupies four to six weeks. For homeowners planning a bathroom renovation, sequencing is crucial. Begin design immediately; submit permits by week three; order long-lead fixtures by week four. That timeline delivers completion in approximately three months.
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
            {['bathroom remodel cost Sonoma County', 'bathroom renovation Sonoma', 'luxury bathroom Petaluma', 'Santa Rosa bathroom 2026', 'bathroom tile cost', 'spa bathroom remodel', 'Sonoma County contractor'].map(tag => (
              <span key={tag} style={{ fontFamily: MS, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)', border: '1px solid rgba(203,178,106,0.2)', padding: '4px 12px' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '64px', padding: '48px', border: '1px solid rgba(203,178,106,0.2)', textAlign: 'center' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Ready to Remodel Your Bathroom?
            </p>
            <h3 style={{ fontFamily: CG, fontSize: '32px', fontWeight: '300', color: '#ffffff', marginBottom: '16px' }}>
              Let&apos;s Discuss Your Project
            </h3>
            <p style={{ fontFamily: MS, fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.8 }}>
              Complimentary consultation for bathroom remodels in Marin and Sonoma County.
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
