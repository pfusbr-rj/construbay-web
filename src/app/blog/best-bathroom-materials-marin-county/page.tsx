import type { Metadata } from 'next'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Tile, Stone, or Marble: Best Bathroom Materials for Marin County Homes | ConstruBay',
  description: 'Compare tile, natural stone, and marble for Marin County bathroom remodels. Costs, durability, and what luxury buyers actually want in 2026. Expert advice from ConstruBay.',
  alternates: { canonical: 'https://www.construbay.com/blog/best-bathroom-materials-marin-county' },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'What is the most popular bathroom material in Marin County luxury remodels?',
    answer: 'Large-format porcelain tile — particularly slabs in 24x48 inch or larger formats — is the most widely specified material in Marin County bathroom remodels in 2026. It offers the visual weight of natural stone with superior durability and lower maintenance. For primary bathrooms in estate-tier homes, natural stone and marble remain the prestige choice among buyers who prioritize material authenticity over ease of maintenance.',
  },
  {
    question: 'How much does marble add to a bathroom remodel cost in Marin County?',
    answer: 'Marble tile installation in Marin County costs $35–$75 per square foot installed, compared to $18–$40 per square foot for high-quality porcelain. A full primary bathroom remodel with Calacatta marble can add $15,000–$35,000 to the project cost relative to a porcelain build, depending on square footage and complexity. Book-matched marble slab vanity tops and shower walls push costs significantly higher.',
  },
  {
    question: 'Is natural stone a good investment for a Marin County bathroom remodel?',
    answer: 'Yes, when specified correctly for the home&apos;s price tier. In Tiburon, Belvedere, and Ross — where primary bathroom remodels routinely run $80,000–$150,000 — natural stone is an expected material at resale. Buyers at this tier specifically inspect material quality. In neighborhoods where comparable homes have porcelain bathrooms, marble adds cost without proportional resale return. ConstruBay recommends material selection relative to the home&apos;s actual market tier.',
  },
]

const keyTakeaways = [
  'Large-format porcelain tile is the dominant choice in Marin County bathroom remodels — durable, low-maintenance, and visually competitive with natural stone',
  'Natural stone elevates estate-tier properties in Tiburon, Belvedere, and Ross where buyers expect material authenticity',
  'Marble is the luxury benchmark but requires sealing, careful use, and buyer education at resale',
  'Material selection should match the home&apos;s actual market tier — over-specifying materials above comparable sales yields cost without return',
  'Installed costs range from $18/sq ft for porcelain to $75/sq ft for premium marble — a material decision can shift total project cost by $20,000+',
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tile, Stone, or Marble: Best Bathroom Materials for Marin County Homes',
  description: 'Compare tile, natural stone, and marble for Marin County bathroom remodels. Costs, durability, and what luxury buyers actually want in 2026.',
  datePublished: '2026-04-23',
  dateModified: '2026-04-23',
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
  image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
  url: 'https://www.construbay.com/blog/best-bathroom-materials-marin-county',
  keywords: 'bathroom remodel materials Marin County, bathroom remodel Marin County, luxury bathroom remodel Bay Area, marble bathroom Marin, tile vs stone bathroom 2026',
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.construbay.com' },
        { name: 'Blog', url: 'https://www.construbay.com/blog' },
        { name: 'Best Bathroom Materials Marin County', url: 'https://www.construbay.com/blog/best-bathroom-materials-marin-county' },
      ]} />
      <FaqSchema items={faqs} />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury spa bathroom with natural stone tile and freestanding tub — bathroom remodel Marin County 2026"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', maxWidth: '800px' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Bathroom Remodel
            </p>
            <h1 style={{ fontFamily: CG, fontSize: 'clamp(26px, 4vw, 50px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.2 }}>
              Tile, Stone, or Marble: Best Bathroom Materials for Marin County Homes
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
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>April 23, 2026</span>
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
              Porcelain Tile: The Practical Choice
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Porcelain tile is the workhorse of the Marin County bathroom remodel market, and in 2026 it has earned that position through genuine performance advantages rather than cost alone. Modern large-format porcelain — 24x48 inch slabs, 48x48 inch panels, and full-height wall slabs up to 120 inches — achieves a visual weight and surface continuity that rivals natural stone at a fraction of the maintenance cost. Water absorption rates below 0.5 percent make porcelain ideal for shower floors, shower walls, steam showers, and heated floor systems where natural stone requires careful sealing and monitoring.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The design range has expanded dramatically. Italian porcelain manufacturers now produce tile collections that digitally replicate Calacatta marble, Travertine, Grigio Bardiglio, and a range of other natural stones with variation patterns that prevent the repetition artifacts of earlier digital printing. For clients who want the visual of stone without the sealing schedule, high-end porcelain in these patterns is a legitimate luxury choice.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Installation cost for premium large-format porcelain in Marin County runs $18–$40 per square foot installed, depending on tile size (larger formats require more precise substrate preparation), pattern complexity, and location. Rectified tiles — ground to precise dimensional tolerances — allow tighter grout joints (1/16 inch versus 3/16 inch for non-rectified) that create a more seamless visual effect. ConstruBay specifies rectified large-format porcelain as the standard for primary bathroom floors and shower surrounds in Marin remodels.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Natural Stone: The Luxury Standard
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Natural stone — travertine, limestone, slate, quartzite, and granite among them — occupies a different position in the Marin County bathroom market than marble. While marble carries the prestige connotation, natural stone delivers its own design language: organic variation, tactile warmth, and material authenticity that no digital reproduction captures. Honed travertine in a primary bathroom floor, for example, achieves a timeless quality that reads well in both traditional and contemporary Marin interiors.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Quartzite — a metamorphic natural stone, not to be confused with engineered quartz — has become particularly popular in Marin County estate bathrooms. Its hardness exceeds marble (typically 7–8 on the Mohs scale versus marble&apos;s 3–4), it resists etching from acidic products better than marble, and its vein patterns in white and gray tones are visually similar to Calacatta marble. Super White and Taj Mahal quartzite are the most specified options in the Marin luxury market. Installation runs $30–$60 per square foot depending on slab size and complexity.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              All natural stone requires sealing — typically annually for floors, every two to three years for walls in low-moisture areas, and more frequently in wet shower environments. Proper substrate preparation is critical; natural stone is unforgiving of deflection in the subfloor system. ConstruBay specifies the appropriate membrane system and substrate board for every natural stone installation to ensure the tile bed is stable and waterproofed to current code.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Marble: Beauty with Caveats
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Marble is the material that defines the standard against which all other bathroom surfaces are judged in Marin County&apos;s estate tier. A primary bathroom with book-matched Calacatta marble shower walls, a honed marble floor with Carrara mosaic liner, and a marble slab vanity top communicates a level of material investment that resonates with buyers at the top of the Tiburon and Belvedere market. For properties in that tier, marble is not optional — it is expected.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The caveats are real and should be understood before specifying marble in a primary bathroom. Marble is calcium carbonate, which means it reacts with acids — anything from lemon juice to common cleaning products can etch the surface, leaving dull spots that require professional honing to restore. Marble floors in wet areas will show wear patterns over time, particularly in high-traffic showers. The vanity top near the sink will develop a patina from water and product contact. These are not defects; they are characteristics of a living material. Clients who embrace them get a surface that grows more beautiful with age. Clients who want permanent perfection should choose quartzite or quartz.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Installed cost for marble tile in Marin County runs $35–$75 per square foot. Book-matched marble slab shower walls — where consecutive slabs are mirrored to create a continuous vein pattern — add a significant premium for the slab cost, bookmatching labor, and the precision required to execute the pattern correctly. A full primary bathroom in Calacatta marble, properly executed, is among the most beautiful rooms in Marin County residential construction. It is also one of the highest-cost paths to get there. See our post on <a href="/blog/ai-luxury-bathroom-remodels-marin-county" style={{ color: '#cbb26a', textDecoration: 'none' }}>AI-assisted luxury bathroom remodels in Marin County</a> for more on how we approach high-specification bathroom projects.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Cost Comparison in Marin County
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Material costs represent roughly 35–50 percent of total bathroom remodel cost in Marin County. The balance goes to labor, waterproofing systems, fixtures, cabinetry, and permit costs. Within the material budget, the tile and stone choice is the single largest variable. Here is the installed cost range for each category in 2026 Marin County pricing:
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Porcelain tile:</strong> $18–$40 per square foot installed. Large-format rectified porcelain in stone-look patterns runs $24–$40. Standard 12x24 or 18x18 porcelain runs $18–$26.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Natural stone (travertine, quartzite, slate):</strong> $28–$60 per square foot installed. Quartzite and premium limestone at the high end; honed travertine at the lower end of this range.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Marble tile:</strong> $35–$75 per square foot installed. Carrara at the lower end; Calacatta Gold and Statuario at the higher end. Book-matched slab marble for shower walls adds significant premium above these ranges.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              For a primary bathroom with approximately 120 square feet of tile surface, moving from porcelain to marble can add $15,000–$35,000 to material and installation costs alone. Whether that premium generates proportional resale return depends entirely on the home&apos;s market tier.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              What Marin County Buyers Actually Want
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The question is not which material is objectively superior — it is which material generates the return you need given your home&apos;s market position. In Marin County&apos;s estate tier — properties above $4 million in Tiburon, Belvedere, and Ross — buyers inspect bathroom materials closely. A primary bathroom with 12x12 porcelain floor tile in a $6 million home is a red flag in an otherwise well-presented property. Marble or high-quality quartzite is the standard of care.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              In the $1.5 million to $3.5 million range — the majority of Mill Valley, San Rafael, and Fairfax transactions — buyers want a bathroom that feels high-quality and current. Large-format porcelain in a stone-look pattern, a frameless glass shower enclosure, a floating vanity with undermount sink, and a soaking tub or large walk-in shower is the package that wins this market. Marble is a bonus, not a requirement.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              ConstruBay&apos;s recommendation: match material to market tier, not to personal preference alone. Over-specifying materials above comparable sales generates cost without return. Under-specifying them in estate-tier homes costs marketability. The right material is the one that matches your home&apos;s actual competitive set. We help clients make that determination before any tile is selected. For an overview of our full bathroom remodel approach, see our <a href="/services/bathroom-remodel-marin-county" style={{ color: '#cbb26a', textDecoration: 'none' }}>bathroom remodeling services page</a>.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Why ConstruBay for Your Bathroom Remodel
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              ConstruBay has completed primary and secondary bathroom remodels across Marin County&apos;s full market range — from focused secondary bathroom refreshes in Mill Valley to full estate primary bathroom renovations in Tiburon and Belvedere. We are a licensed general contractor (CSLB #1106798) with direct experience across every material category discussed in this post.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Every bathroom remodel begins with a material and scope consultation that establishes the right specification for the home&apos;s market position before any design drawings are commissioned. We manage permits, waterproofing, tile setting, fixture installation, and final finish — all under one contract, all under Paulo Fernandes&apos; direct supervision.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              ConstruBay&apos;s rating: 4.9/5 from 47 reviews on Google. Fixed-scope contracts, transparent line-item pricing, no change-order surprises.
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
            {['bathroom remodel Marin County', 'bathroom tile Marin', 'marble bathroom Bay Area', 'natural stone bathroom', 'luxury bathroom 2026', 'porcelain tile Marin', 'bathroom materials comparison'].map(tag => (
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
              href="https://calendly.com/construbay/initial-consultation-construbay"
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
