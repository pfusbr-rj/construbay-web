import type { Metadata } from 'next'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import HowToSchema from '@/components/schema/HowToSchema'

export const metadata: Metadata = {
  title: 'Kitchen Island Ideas for Marin County Homes: Design + Cost Guide | ConstruBay',
  description: 'Explore the best kitchen island styles, materials, and costs for Marin County luxury homes in 2026. Expert design and remodel guidance from ConstruBay, CSLB #1106798.',
  alternates: { canonical: 'https://www.construbay.com/blog/kitchen-island-ideas-marin-county' },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'How much does a kitchen island cost in Marin County in 2026?',
    answer: 'A basic kitchen island in Marin County starts around $8,000–$15,000 installed, including cabinetry, countertop, and electrical rough-in. Mid-range islands with quartz countertops, integrated appliances, and seating run $18,000–$35,000. Luxury waterfall-edge marble or high-end stone islands with custom cabinetry and integrated lighting can reach $45,000–$80,000 or more, depending on size and material selection.',
  },
  {
    question: 'Do kitchen islands require permits in Marin County?',
    answer: 'A freestanding or furniture-style island does not require a permit. Islands that involve new electrical circuits (for outlets, lighting, or appliances), new plumbing (for a prep sink), or structural modifications to the floor system require building permits. Most full kitchen remodels in Marin that include a built-in island will require permits for the electrical and plumbing work regardless of the island itself.',
  },
  {
    question: 'What kitchen island countertop material is best for Marin County homes?',
    answer: 'Quartz is the most popular choice in Marin County remodels for its combination of durability, low maintenance, and design range. Waterfall-edge quartz is the signature look in contemporary Marin kitchens right now. Marble is the luxury standard for estate-scale kitchens — visually exceptional but requires sealing and careful use. Butcher block works well as an accent surface but is not ideal as the primary countertop in a high-use kitchen.',
  },
]

const keyTakeaways = [
  'Waterfall-edge quartz islands are the dominant luxury kitchen trend in Marin County in 2026',
  'Kitchen island costs in Marin range from $8,000 for basic builds to $80,000+ for custom marble installations',
  'Islands with plumbing or new electrical circuits require permits — plan this into your project timeline',
  'Seating configuration depends on ceiling height, traffic flow, and whether the island faces a view or a work zone',
  'A well-designed kitchen island is among the highest-return investments in a Marin County kitchen remodel',
]

const howToSteps = [
  { name: 'Define the Island&apos;s Primary Function', text: 'Decide whether the island will serve primarily as prep space, seating, storage, or a combination. Function determines size, height, and appliance integration before design begins.' },
  { name: 'Measure Your Kitchen&apos;s Traffic Zones', text: 'Allow at least 42 inches of clearance between the island and surrounding cabinetry — 48 inches if two cooks work simultaneously. Insufficient clearance is the most common design mistake in Marin kitchen remodels.' },
  { name: 'Select Your Countertop Material', text: 'Choose quartz for durability and low maintenance, marble for luxury presence, or butcher block as an accent. The primary countertop material should match or complement the perimeter countertops.' },
  { name: 'Plan Electrical and Plumbing Rough-In', text: 'If adding outlets, lighting, or a prep sink, coordinate with your contractor for permit-required rough-in before the floor is closed. Retrofitting utilities after the fact costs significantly more.' },
  { name: 'Specify Seating Height and Configuration', text: 'Standard counter height (36 inches) accommodates counter stools at 24–26 inches seat height. Bar height (42 inches) uses 28–30 inch stools. Confirm ceiling clearance and sightlines before finalizing.' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Kitchen Island Ideas for Marin County Homes: Design + Cost Guide',
  description: 'Explore the best kitchen island styles, materials, and costs for Marin County luxury homes in 2026.',
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
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
  image: 'https://images.unsplash.com/photo-1556909048-8855b7c24044?auto=format&fit=crop&w=1200&q=80',
  url: 'https://www.construbay.com/blog/kitchen-island-ideas-marin-county',
  keywords: 'kitchen island Marin County, kitchen remodel Marin County, luxury kitchen remodel Bay Area, waterfall edge island, kitchen island cost 2026',
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.construbay.com' },
        { name: 'Blog', url: 'https://www.construbay.com/blog' },
        { name: 'Kitchen Island Ideas Marin County', url: 'https://www.construbay.com/blog/kitchen-island-ideas-marin-county' },
      ]} />
      <FaqSchema items={faqs} />
      <HowToSchema
        name="How to Design a Kitchen Island for a Marin County Luxury Home"
        description="Step-by-step guide to planning and designing a kitchen island in Marin County"
        steps={howToSteps}
      />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1556909048-8855b7c24044?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury kitchen island with waterfall quartz countertop — kitchen remodel Marin County 2026"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', maxWidth: '800px' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Kitchen Remodel
            </p>
            <h1 style={{ fontFamily: CG, fontSize: 'clamp(26px, 4vw, 50px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.2 }}>
              Kitchen Island Ideas for Marin County Homes: Design + Cost Guide
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
                <span style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>April 22, 2026</span>
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
              Most Popular Kitchen Island Styles in Marin County
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The kitchen island has become the architectural centerpiece of the luxury Marin County kitchen. In the neighborhoods where ConstruBay works — Mill Valley, Tiburon, Belvedere, Ross, and San Rafael — the island is no longer a secondary feature; it is the room&apos;s organizing element. What style of island a client chooses reveals a great deal about how they use the kitchen and what they value in the space.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The waterfall-edge island — where the countertop material wraps vertically down the side panels to the floor — is the signature look in contemporary Marin kitchens in 2026. It works best with quartz or marble, both of which have enough slab consistency to make the mitered joint at the corner nearly invisible when matched carefully. Waterfall edges in book-matched marble remain the most expensive and visually dramatic option; quartz waterfall edges offer a cleaner, more durable alternative at a lower price point.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Transitional and traditional Marin kitchens tend toward panel-front islands with furniture-style legs, painted or stained cabinetry in a contrasting color to the perimeter, and a stone or quartz top without the waterfall detail. These read warmer and more classic — appropriate for the shingle-style and craftsman homes that define much of Mill Valley and Tiburon&apos;s residential fabric. For kitchens with a view-oriented layout, a low-profile peninsula-style island that does not interrupt the sightline to the garden or bay is often the most functional choice.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Kitchen Island Costs in Marin County
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Island cost in Marin County in 2026 breaks into four categories: cabinetry, countertop, rough-in (electrical and plumbing), and finish work. A basic island — stock or semi-custom cabinetry, quartz countertop, standard electrical outlet — runs $8,000–$15,000 installed. A mid-range island with semi-custom cabinetry, a prep sink, integrated appliances (warming drawer, microwave drawer, wine fridge), and a quartz or entry-level stone top runs $18,000–$35,000.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The high end — fully custom cabinetry, book-matched marble or quartzite slab top with waterfall edge, integrated Gaggenau or Wolf appliances, custom hardware, integrated lighting above and below — runs $45,000–$80,000 or more for a large-format island. The countertop material alone accounts for a significant portion of that cost: a 10-foot marble waterfall-edge slab, fabricated and installed, can run $12,000–$22,000 depending on stone selection and market pricing.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              These costs are for the island alone. If the island is part of a full kitchen remodel, the total project budget in Marin County typically runs $90,000–$175,000 for a comprehensive renovation. For more on the full kitchen remodel investment, see our post on <a href="/services/kitchen-remodel-marin-county" style={{ color: '#cbb26a', textDecoration: 'none' }}>kitchen remodeling services in Marin County</a>.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Waterfall Edge vs. Butcher Block vs. Quartz
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The countertop material is the island&apos;s most visible decision and one of the highest-impact design choices in any Marin kitchen remodel. Quartz — engineered stone with a consistent pattern and non-porous surface — is the practical luxury standard in 2026. It does not need sealing, resists staining from wine and oils, and comes in a wide range of colors and veining patterns that approximate natural stone. For primary kitchen surfaces, quartz is almost always the right call.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Butcher block — end-grain or face-grain hardwood — is the warm, organic counterpoint to stone. It works beautifully as an accent surface on a prep section of the island while the main countertop remains quartz or marble. As a full primary surface, butcher block requires regular oiling and is susceptible to moisture damage near sinks. In high-use Marin kitchens, it is best treated as a design accent rather than the primary work surface.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Marble is the luxury standard for estate kitchens where visual drama and material authenticity are the priority. Calacatta, Statuario, and Carrara each offer different vein patterns and color bases. All require sealing and careful maintenance — acidic foods, red wine, and cutting directly on the surface all cause damage over time. For clients who understand the maintenance commitment and want the irreplaceable beauty of book-matched natural marble, it remains the definitive choice. For clients who want the look without the care requirements, premium quartz in marble-look finishes have improved substantially and are a legitimate alternative.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Islands with Seating: What Works in Marin Homes
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Seating at the kitchen island is one of the most requested features in Marin County kitchen remodels, and one of the most frequently designed incorrectly. The most common mistake is insufficient clearance between the seating overhang and the surrounding cabinetry or walk zones. California building code and practical kitchen design both require 42 inches of clear passage between any work surface and a fixed obstacle; 48 inches where two people work simultaneously.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Standard counter height (36 inches) works best with counter stools in the 24–26 inch seat height range. Bar height (42 inches) requires 28–30 inch stools. The choice between them depends on ceiling height — bar height reads well in kitchens with 10-foot or higher ceilings; standard height is more proportional in kitchens under 9 feet. In open-plan Marin homes where the island faces the living area, standard height maintains sightlines better and feels less like a dividing barrier.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Waterfall-edge islands accommodate seating on the non-waterfall side, where the clean vertical panel creates a finished backdrop for stool seating. Two to four seats is the practical range for most Marin kitchen islands in the 6–10 foot length range. For larger islands — 10–14 feet — seating on one or two sides is possible, but traffic flow modeling is essential before committing to the configuration.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Permit Requirements for Kitchen Islands in Marin County
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              A freestanding kitchen island — furniture-style, not attached to the floor or connected to utilities — does not require a permit in Marin County. As soon as the island connects to the home&apos;s electrical system (for outlets, under-cabinet lighting, or appliance circuits) or plumbing system (for a prep sink or dishwasher), permit work is required. Any structural modification to the subfloor or floor framing to accommodate an island also triggers building review.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Most full kitchen remodels in Marin County that include a built-in island will require permits for the trade work regardless of the island itself. Marin County now requires electronic plan submittals, and kitchen remodel permit review typically runs two to four weeks for initial plan check. Homeowners who begin construction without the required permits risk stop-work orders, code compliance costs, and complications at resale. ConstruBay manages the full permit process — our <a href="/blog/mill-valley-marin-county-ai-home-construction-permitting" style={{ color: '#cbb26a', textDecoration: 'none' }}>AI-assisted permit review platform</a> ensures clean submittals that move through plan check efficiently.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Why ConstruBay for Your Kitchen Remodel
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              ConstruBay has completed kitchen remodels throughout Marin County — from focused island replacements in Mill Valley bungalows to full luxury kitchen renovations in Tiburon and Belvedere estate homes. We are a licensed general contractor (CSLB #1106798) with direct experience across the full range of island types, countertop materials, and appliance configurations that define the Marin market.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Every kitchen remodel begins with a design consultation to establish layout, material direction, and budget before any drawings or permits. We work with your architect or interior designer, or can recommend design collaborators who understand Marin County&apos;s aesthetic and material standards. Construction is owner-led by Paulo Fernandes — no hand-off to a project manager mid-project.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              ConstruBay&apos;s rating: 4.9/5 from 47 reviews on Google. We deliver kitchen remodels under fixed-scope contracts with transparent pricing. The number you approve is the number you pay.
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
            {['kitchen island Marin County', 'kitchen remodel Marin County', 'luxury kitchen Bay Area', 'waterfall island 2026', 'quartz countertop Marin', 'kitchen island cost', 'kitchen design Marin'].map(tag => (
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
