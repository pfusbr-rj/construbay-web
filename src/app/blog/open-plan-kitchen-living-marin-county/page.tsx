import type { Metadata } from 'next'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Open-Plan Kitchen and Living Design in Marin County: What Works and What Doesn\'t | ConstruBay',
  description: 'Open-plan kitchen and living design is the defining feature of luxury Marin County remodels. Here is what actually works — layout, acoustics, lighting, and structural realities.',
  alternates: { canonical: 'https://www.construbay.com/blog/open-plan-kitchen-living-marin-county' },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'Does removing walls for an open-plan kitchen require permits in Marin County?',
    answer: 'Yes. Any wall removal that involves load-bearing structure requires a building permit and structural engineering drawings. Even non-load-bearing walls typically require a permit in Marin County if the work involves relocating electrical, plumbing, or HVAC. ConstruBay manages the full permitting process, including structural calculations and plan check submission through Marin County\'s digital permitting system.',
  },
  {
    question: 'How much does an open-plan kitchen conversion cost in Marin County?',
    answer: 'A wall removal with beam installation in a Marin County home typically runs $18,000–$45,000 for the structural work alone, depending on span length, beam type (glulam, steel, or LVL), and column or post requirements. Combined with a full kitchen remodel, open-plan conversions in Marin County commonly run $120,000–$250,000 total depending on scope, finishes, and whether the project extends to a new layout for the adjacent living area.',
  },
  {
    question: 'Can all walls in a Marin County home be removed for an open-plan layout?',
    answer: 'No. Load-bearing walls — those carrying roof or floor loads to the foundation — cannot simply be removed without replacement structure. A structural engineer must assess which walls are load-bearing and specify the appropriate beam and post system to transfer the load. In older Marin County homes, particularly craftsman and ranch-style properties from the 1950s–1970s, interior load-bearing walls are common and must be evaluated individually before any open-plan conversion begins.',
  },
]

const keyTakeaways = [
  'Load-bearing wall removal requires structural engineering, permits, and a correctly sized beam — skipping any step creates safety and code compliance risk',
  'Open-plan kitchens in Marin County work best when cooking smells, noise, and visual clutter are designed against from the start',
  'Lighting zoning is the most frequently overlooked element of open-plan design — a single overhead circuit cannot serve kitchen, dining, and living zones correctly',
  'The connection between kitchen and outdoor living is the strongest design argument for open-plan layouts in Marin County\'s climate',
  'Structural work, permits, and kitchen renovation combined typically run $120,000–$250,000 for a full open-plan conversion in Marin County',
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Open-Plan Kitchen and Living Design in Marin County: What Works and What Doesn\'t',
  description: 'Open-plan kitchen and living design is the defining feature of luxury Marin County remodels. Layout, acoustics, lighting, and structural realities.',
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
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  url: 'https://www.construbay.com/blog/open-plan-kitchen-living-marin-county',
  keywords: 'open plan kitchen Marin County, kitchen remodel Marin County, open concept kitchen Bay Area, wall removal Marin County, luxury kitchen design Marin',
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.construbay.com' },
        { name: 'Blog', url: 'https://www.construbay.com/blog' },
        { name: 'Open-Plan Kitchen Living Marin County', url: 'https://www.construbay.com/blog/open-plan-kitchen-living-marin-county' },
      ]} />
      <FaqSchema items={faqs} />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Open-plan kitchen and living room in luxury Marin County home with large windows and natural light"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', maxWidth: '800px' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Kitchen Remodel
            </p>
            <h1 style={{ fontFamily: CG, fontSize: 'clamp(26px, 4vw, 50px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.2 }}>
              Open-Plan Kitchen and Living Design in Marin County: What Works and What Doesn&apos;t
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
            <p style={{ color: '#aaaaaa', fontFamily: MS, fontSize: '0.75rem', lineHeight: '1.6' }}>Founder of ConstruBay and PlanPass.ai. 15+ years of luxury residential construction experience in Marin County, California.</p>
          </div>

          <KeyTakeaways takeaways={keyTakeaways} />

          <article>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Why Open-Plan Dominates Marin County Remodels
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The request comes up in nearly every kitchen remodel consultation ConstruBay has in Marin County: can we open this up? The desire to connect the kitchen to the dining area, the living room, and — in homes with the right orientation — the outdoor terrace or garden, is the single most common driver of major kitchen renovations in the county. It is not a trend. It is a reflection of how people actually live in these homes, and it has been the defining characteristic of luxury residential design in Marin County for more than a decade.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Marin County&apos;s climate makes the argument stronger than it would be elsewhere. In Mill Valley, Tiburon, and Ross, indoor-outdoor living is not a design aspiration — it is a practical reality for eight or nine months of the year. A kitchen that opens to a terrace or garden through a wall of sliding or folding glass becomes the natural center of the home in a way that a closed kitchen simply cannot. The open-plan layout is the prerequisite for that connection.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The homes being remodeled, however, were largely not designed with open-plan layouts in mind. Ranch houses, craftsman bungalows, and mid-century colonials built in Marin County between the 1940s and 1980s have compartmentalized floor plans with walls that served structural purposes. Getting from the original plan to an open-plan result is a structural and permitting exercise before it is a design one. Understanding what that involves before starting is the difference between a well-managed project and an expensive surprise.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              The Structural Reality: Load-Bearing Walls
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The first question in any open-plan conversion is which walls are load-bearing. In a typical Marin County ranch house or two-story colonial, the walls running perpendicular to the floor and roof joists are almost always carrying structural load. Removing them without replacing that load path with a properly engineered beam and post system is a code violation and a safety risk. The beam size, material, and support column or post configuration must be specified by a licensed structural engineer — not estimated from online guides or past experience on other homes.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              In Marin County homes, common beam solutions for open-plan conversions include glulam beams (engineered wood laminate), LVL beams (laminated veneer lumber), and steel wide-flange beams for longer spans or where ceiling depth is constrained. The choice among them depends on span length, load, ceiling height, and aesthetic preference — some clients want the beam exposed as a design element; others want it flush with the ceiling and concealed in drywall. Each choice has structural and cost implications that must be resolved in the engineering drawings before permits are pulled.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The structural work alone — engineering, permits, temporary shoring during construction, beam fabrication and installation, post or column to foundation — typically runs $18,000–$45,000 depending on span and complexity. This is before any kitchen renovation work begins. Homeowners who discover load-bearing walls mid-project without a budget provision for structural work face difficult choices. ConstruBay completes a structural assessment in the pre-construction phase of every open-plan project so the full scope and cost are understood before a contract is signed.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              What Open-Plan Design Gets Wrong: Smells, Sound, and Clutter
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The appeal of open-plan design is real, but so are its failure modes. The three most common complaints from homeowners who completed open-plan kitchen conversions without addressing these issues are cooking smells that permeate the living area, noise from kitchen appliances and preparation that competes with conversation in the adjacent room, and visual clutter from dishes, small appliances, and the natural state of an active kitchen visible from the living space.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Ventilation is the non-negotiable priority. A properly sized range hood — ducted to the exterior, not recirculating — with sufficient CFM capacity for the cooktop below it is the only solution to cooking odor migration. In open-plan kitchens with high ceilings, hood sizing must account for the larger air volume above the cooking surface. ConstruBay specifies a minimum 600 CFM for standard residential cooktops in open-plan Marin kitchens; Wolf or Gaggenau commercial-style ranges with multiple high-output burners require 900–1,200 CFM. Recirculating hoods are not appropriate for open-plan layouts.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Visual clutter is solved in the cabinetry design phase, not after. A scullery — a secondary prep and storage room adjacent to the main kitchen, with its own sink and counter space — is the luxury solution in larger Marin homes. Where space does not permit a full scullery, deep pantry storage, appliance garages, and dedicated zones for small appliances keep the main kitchen surfaces clear when the space is viewed from the living area. The kitchen that looks beautiful in a magazine is almost always the kitchen with nowhere visible to put anything. The design has to account for real daily use.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Lighting Zones: The Most Overlooked Design Element
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Lighting is where open-plan design most frequently underdelivers. A kitchen requires task lighting at work surfaces — bright, shadow-free, color-accurate. A living area requires ambient and accent lighting — dimmable, warm, focused on art or architectural features. A dining area requires a pendant or chandelier that defines the table as a social destination. These three requirements are fundamentally different, and they cannot be served by a single lighting circuit or a uniform grid of recessed cans across the whole open plan.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              In Marin County kitchen remodels with open-plan conversions, ConstruBay designs a minimum of four independent lighting circuits: kitchen task (under-cabinet and overhead work lights), kitchen ambient (pendants or a central fixture over the island), dining zone (pendant or chandelier, independently dimmable), and living zone (recessed accent lights, floor lamp circuits, fireplace surround if applicable). Each circuit is connected to its own dimmer or scene controller. The ability to shift the entire open-plan space from daytime work mode to evening entertainment mode with a single scene change is what separates a well-designed open-plan home from one that feels perpetually lit for cooking.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Indoor-Outdoor Connection: Marin County&apos;s Defining Advantage
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              When the open-plan kitchen and living space connects directly to an outdoor terrace, the design achieves something genuinely specific to Marin County&apos;s climate and landscape. The kitchen island becomes the hub between the interior and exterior. The cooktop and the grill are on the same sightline. Guests move between the kitchen conversation and the terrace without navigating a closed floor plan. The home functions at a different level.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Achieving this connection typically requires replacing a wall of windows or a standard door with a multi-panel sliding or folding glass door system — NanaWall, LaCantina, or similar — that opens the full wall dimension to the exterior. The structural implications of these openings are significant: a 16 or 20-foot opening requires a header of equivalent span, which triggers engineering and permitting. The glazing itself, in Marin County&apos;s fog and salt-air zones, should be thermally broken aluminum or fiberglass — wood frames in coastal exposure require intensive maintenance and tend to deteriorate prematurely.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The outdoor space adjacent to the opening matters as much as the opening itself. A finished terrace with consistent flooring, weather-appropriate furniture, and outdoor lighting that complements the interior design converts the transition from inside to outside into a seamless experience. For an overview of how ConstruBay approaches outdoor living as part of a whole-home remodel, see our <a href="/outdoor-living" style={{ color: '#cbb26a', textDecoration: 'none' }}>outdoor living services page</a>.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Why ConstruBay for Your Open-Plan Conversion
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Open-plan kitchen and living conversions are among the most complex remodel projects ConstruBay undertakes — combining structural engineering, permitting, kitchen design, cabinetry, appliances, lighting design, and often an indoor-outdoor connection into a single coordinated project. The range of trades involved is larger than any other kitchen scope, and the sequencing of structural work, rough-in, and finish trades must be managed precisely to avoid delays.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              ConstruBay has completed open-plan conversions in Mill Valley, Tiburon, Ross, Belvedere, and San Rafael — across a range of home types from 1950s ranch houses to contemporary custom builds. We are a licensed general contractor (CSLB #1106798) with direct experience managing the structural, permit, and design coordination that these projects require. Every project is owner-led by Paulo Fernandes from the initial structural assessment through final punch list.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              ConstruBay&apos;s rating: 4.9/5 from 47 reviews on Google. Fixed-scope contracts with transparent pricing. The number you approve is the number you pay.
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
            {['open plan kitchen Marin County', 'kitchen remodel Marin County', 'open concept kitchen Bay Area', 'wall removal Marin County', 'luxury kitchen design Marin', 'indoor outdoor living Marin', 'kitchen living room design'].map(tag => (
              <span key={tag} style={{ fontFamily: MS, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)', border: '1px solid rgba(203,178,106,0.2)', padding: '4px 12px' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '64px', padding: '48px', border: '1px solid rgba(203,178,106,0.2)', textAlign: 'center' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Ready to Open Up Your Home?
            </p>
            <h3 style={{ fontFamily: CG, fontSize: '32px', fontWeight: '300', color: '#ffffff', marginBottom: '16px' }}>
              Let&apos;s Discuss Your Project
            </h3>
            <p style={{ fontFamily: MS, fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.8 }}>
              Complimentary consultation for kitchen and open-plan remodels in Marin and Sonoma County.
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
