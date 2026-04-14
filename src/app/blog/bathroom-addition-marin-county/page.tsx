import type { Metadata } from 'next'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Adding a Bathroom to a Marin County Home: Cost, Permits, and What to Expect | ConstruBay',
  description: 'Adding a bathroom to a Marin County home is one of the highest-return remodel investments. Here is what it actually costs, how permits work, and where the complexity lives.',
  alternates: { canonical: 'https://www.construbay.com/blog/bathroom-addition-marin-county' },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'How much does it cost to add a bathroom in Marin County?',
    answer: 'Adding a full bathroom in Marin County typically runs $45,000–$90,000 for a new-construction bathroom in existing space, depending on location relative to existing plumbing, scope of finish work, and whether structural modifications are required. A primary bathroom addition with luxury finishes — natural stone, custom vanity, freestanding tub, frameless glass shower — commonly runs $90,000–$150,000. Half-bath additions (toilet and sink only) run $18,000–$35,000.',
  },
  {
    question: 'Does adding a bathroom in Marin County require permits?',
    answer: 'Yes. Any new bathroom addition requires building permits covering plumbing, electrical, and structural work. In most Marin County jurisdictions, bathroom additions also trigger a Title 24 energy compliance review. Marin County now requires electronic plan submittals through the eTRAKiT portal. Plan check review for a bathroom addition typically runs two to four weeks. ConstruBay manages the complete permitting process.',
  },
  {
    question: 'Where is the best location to add a bathroom in a Marin County home?',
    answer: 'The best location minimizes new plumbing runs by placing the new bathroom adjacent to or directly above existing wet walls — locations where supply and drain lines already exist behind the wall or floor assembly. In two-story Marin homes, stacking a new bathroom above an existing kitchen or bathroom is the most cost-efficient configuration. In single-story homes, the closest wall to the main plumbing stack drives the cost calculation significantly.',
  },
]

const keyTakeaways = [
  'A new bathroom addition in Marin County returns strong value — bedroom-to-bathroom ratio is among the first things buyers evaluate',
  'Proximity to existing plumbing is the single largest variable in bathroom addition cost — stacking above a wet wall saves $8,000–$20,000',
  'All bathroom additions require permits; plumbing, electrical, and structural work each require separate trade inspections',
  'Primary bathroom additions with luxury finishes commonly run $90,000–$150,000 in Marin County — plan accordingly',
  'The difference between a half-bath, three-quarter bath, and full bath is significant in cost and in what buyers value at resale',
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Adding a Bathroom to a Marin County Home: Cost, Permits, and What to Expect',
  description: 'Adding a bathroom to a Marin County home is one of the highest-return remodel investments. What it costs, how permits work, and where the complexity lives.',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
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
  url: 'https://www.construbay.com/blog/bathroom-addition-marin-county',
  keywords: 'add bathroom Marin County, bathroom addition cost Marin, bathroom remodel Marin County, new bathroom permit Marin, luxury bathroom addition Bay Area',
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.construbay.com' },
        { name: 'Blog', url: 'https://www.construbay.com/blog' },
        { name: 'Adding a Bathroom Marin County', url: 'https://www.construbay.com/blog/bathroom-addition-marin-county' },
      ]} />
      <FaqSchema items={faqs} />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
            alt="New luxury bathroom addition in Marin County home with freestanding tub and natural stone"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', maxWidth: '800px' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Bathroom Remodel
            </p>
            <h1 style={{ fontFamily: CG, fontSize: 'clamp(26px, 4vw, 50px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.2 }}>
              Adding a Bathroom to a Marin County Home: Cost, Permits, and What to Expect
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
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>April 16, 2026</span>
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
              Why a Bathroom Addition Is One of the Best Investments in Marin County
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              In Marin County&apos;s real estate market, the bedroom-to-bathroom ratio is one of the first things buyers evaluate. A four-bedroom home with one and a half bathrooms is not the same product as a four-bedroom home with three full bathrooms — the difference in marketability and appraised value is measurable and consistent. Adding a bathroom to a Marin County home that is currently under-bathed for its bedroom count is one of the most reliable paths to a return on remodel investment.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The case is strongest in specific situations: a three or four-bedroom home with a single full bathroom, a primary bedroom suite without a dedicated en suite bathroom, or a home with a finished basement or bonus room that would be significantly more useful with an adjacent bathroom. In each of these cases, the addition resolves a functional deficiency that buyers will either negotiate against or avoid entirely. Correcting it before the market evaluates the home changes the competitive position fundamentally.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The complexity of a bathroom addition — unlike a bathroom remodel, which works within existing plumbing locations — is that it requires new plumbing rough-in in a location that may not have any existing water supply or drain infrastructure. That complexity is manageable with the right planning, but it must be understood clearly before the project begins.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Half-Bath, Three-Quarter Bath, or Full Bath: What You&apos;re Actually Building
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The distinction between bathroom types matters both in cost and in what buyers value. A half-bath — toilet and sink, no shower or tub — is the minimum addition and the lowest cost, typically $18,000–$35,000 in Marin County. It resolves the problem of a single full bathroom serving all guest traffic, but it does not address the en suite need for a bedroom.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              A three-quarter bath — toilet, sink, and shower, but no tub — is the most common addition for secondary bedrooms and guest rooms in Marin County. It provides full bathing function in a smaller footprint than a full bath, which matters in homes where the available space for the addition is constrained. A well-designed three-quarter bath with a walk-in shower, floating vanity, and quality tile work reads as a complete, high-quality bathroom to buyers. Cost range: $45,000–$75,000 depending on finishes and plumbing run complexity.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              A full bath — toilet, sink, shower, and soaking tub — is the standard for primary bedroom suites in Marin County&apos;s luxury tier. The freestanding soaking tub has become the signature feature of the estate primary bathroom: a Kohler, Victoria + Albert, or Kaldewei freestanding tub positioned in a bay window or opposite the vanity wall creates the spa visual that buyers expect at this price point. Full bath additions with primary-suite finishes run $90,000–$150,000 for well-executed projects in Marin County.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Where to Add a Bathroom: Plumbing Location Is Everything
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The single largest variable in bathroom addition cost — after finish level — is proximity to existing plumbing. Every new bathroom requires connection to the home&apos;s supply lines (hot and cold water) and to the drain, waste, and vent system. The further the new bathroom is from existing wet walls, the more extensive the rough-in work, and the higher the plumbing cost.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The optimal location for a bathroom addition in a two-story home is directly above or adjacent to an existing bathroom or kitchen — locations where supply and drain lines already run in the wall or floor cavity. This configuration minimizes new pipe runs and avoids the need to open ceilings or floors in finished areas of the home to route new plumbing. In Marin County homes where the kitchen is on the first floor and a bedroom is above it, a new en suite bathroom on the second floor that stacks above the kitchen can save $8,000–$20,000 in plumbing rough-in cost versus a location on the opposite side of the house.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              In single-story homes, the plumbing configuration is more constrained. New drain lines must pitch toward the existing main drain stack, which means the new bathroom location must allow for sufficient fall over the run length. In homes with slab foundations, adding a bathroom may require saw-cutting the slab to install new drain lines — a significant cost item that can add $8,000–$15,000 to the project. Homes on raised foundations have more flexibility, as new drain lines can be run through the crawl space.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Permits and Timeline for a Bathroom Addition in Marin County
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              A bathroom addition in Marin County requires building permits covering plumbing, electrical, and structural work. Marin County now processes all permit applications digitally through the eTRAKiT portal — paper submittals are no longer accepted. Drawings must include floor plans showing the new bathroom layout, plumbing diagrams showing supply and drain connections, electrical plans showing lighting and outlet circuits, and a Title 24 energy compliance worksheet for the new construction area.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Plan check review for a bathroom addition typically runs two to four weeks after intake — three to fifteen days for intake processing, then the initial plan review period. Corrections are common on first submittal; a complete, well-prepared package that anticipates the plan checker&apos;s standard questions moves through faster. ConstruBay uses AI-assisted permit preparation through our PlanPass.ai platform to improve submittal quality and reduce correction cycles.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Construction timeline for a new bathroom addition in Marin County runs eight to fourteen weeks from permit issuance, depending on scope. Plumbing rough-in, framing, electrical rough-in, and waterproofing must each be inspected before the wall and floor finishes can be installed. The inspection sequencing adds time that cannot be compressed — it is a fixed constraint of the permit process. Homeowners who are planning around a sale date or a personal deadline should factor this into their project start date. See our post on <a href="/blog/mill-valley-marin-county-ai-home-construction-permitting" style={{ color: '#cbb26a', textDecoration: 'none' }}>AI-assisted permitting in Marin County</a> for more on how digital permitting has changed the timeline.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Why ConstruBay for Your Bathroom Addition
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Bathroom additions require coordination across more trades than a standard bathroom remodel — structural, plumbing, electrical, waterproofing, tile setting, fixture installation, and finish carpentry all come together in a constrained space on a fixed inspection sequence. Getting that sequence right and keeping the project moving through each inspection phase without delays requires a general contractor who manages the permit process, not just the construction.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              ConstruBay has completed bathroom additions across Marin County — from half-bath conversions in existing closet space to full primary suite additions in Mill Valley and Tiburon estate homes. We are a licensed general contractor (CSLB #1106798) with direct experience in Marin County&apos;s permitting system, local plumbing and electrical codes, and the material and finish standards that Marin County buyers expect. Every project is managed directly by Paulo Fernandes from pre-construction planning through final inspection.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              ConstruBay&apos;s rating: 4.9/5 from 47 reviews on Google. Fixed-scope contracts, transparent pricing, no change-order surprises.
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
            {['add bathroom Marin County', 'bathroom addition cost Marin', 'bathroom remodel Marin County', 'new bathroom permit Marin', 'luxury bathroom addition Bay Area', 'en suite addition Marin', 'primary bathroom Marin County'].map(tag => (
              <span key={tag} style={{ fontFamily: MS, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)', border: '1px solid rgba(203,178,106,0.2)', padding: '4px 12px' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '64px', padding: '48px', border: '1px solid rgba(203,178,106,0.2)', textAlign: 'center' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Ready to Add a Bathroom?
            </p>
            <h3 style={{ fontFamily: CG, fontSize: '32px', fontWeight: '300', color: '#ffffff', marginBottom: '16px' }}>
              Let&apos;s Discuss Your Project
            </h3>
            <p style={{ fontFamily: MS, fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.8 }}>
              Complimentary consultation for bathroom additions in Marin and Sonoma County.
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
