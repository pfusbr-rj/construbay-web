import type { Metadata } from 'next'
import FaqSchema from '@/components/schema/FaqSchema'
import KeyTakeaways from '@/components/blog/KeyTakeaways'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'How AI Agents Are Changing Construction in Marin County — Kitchen, Bathroom & ADU Remodels | ConstruBay',
  description: 'AI agents are transforming how Marin County contractors manage kitchen remodels, bathroom remodels, ADU builds, and permit submissions in 2026. Here&apos;s what it means for your project.',
  alternates: { canonical: 'https://www.construbay.com/blog/ai-agents-construction-marin-county' },
}

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'

const faqs = [
  {
    question: 'What is an AI agent and how is it used in Marin County construction?',
    answer: 'An AI agent is software that can autonomously execute multi-step tasks — not just answer a question, but take action: review a permit package, draft a subcontractor schedule, flag a code conflict, or generate a project update. In Marin County construction, AI agents are being deployed to automate permit pre-checks before submission, coordinate subcontractor scheduling, and manage the documentation flow for kitchen remodels, bathroom remodels, ADU builds, and whole-home remodels. The result is fewer delays, fewer correction cycles, and faster project delivery.',
  },
  {
    question: 'Do AI agents make kitchen and bathroom remodels in Marin County faster?',
    answer: 'Yes — in specific phases. AI agents have the most measurable impact on the pre-construction phase: permit preparation, plan check pre-review, subcontractor coordination, and procurement scheduling. A kitchen remodel or bathroom remodel that historically lost 4–8 weeks to plan check corrections can recover significant schedule time when AI pre-checks the permit package for compliance before submission to the Marin County building department. AI does not accelerate the physical construction — framing, tile, cabinetry, and plumbing take the time they take — but reducing administrative delay compresses the total project timeline meaningfully.',
  },
  {
    question: 'How do AI agents help with ADU permits in Marin County?',
    answer: 'ADU permits in Marin County involve multiple layers: zoning compliance, setback requirements, utility connection documentation, Title 24 energy calculations, and accessibility standards. AI agents can cross-reference a proposed ADU design against the current Marin County ADU ordinance, flag non-compliant elements before drawings are finalized, and pre-check the permit package for completeness before submission. This reduces the correction cycles that are the primary source of ADU permit delay in Marin County. ConstruBay uses PlanPass.ai, its proprietary AI permit review platform, as a standard part of ADU project preparation.',
  },
  {
    question: 'Can I use AI to get a home remodel permit in Marin County on my own?',
    answer: 'AI tools can help you understand permit requirements and prepare documentation, but they do not replace the licensed general contractor who is the permit applicant of record. In Marin County, most structural remodels, kitchen remodels over a threshold scope, bathroom remodels involving plumbing relocation, and all ADU builds require a licensed contractor to pull the permit and carry legal responsibility for the work. AI is a preparation and review tool — the licensed contractor and the building department remain the decision-makers.',
  },
]

const keyTakeaways = [
  'AI agents automate multi-step construction tasks — permit pre-checks, subcontractor scheduling, documentation — not just single questions',
  'Kitchen remodels and bathroom remodels in Marin County benefit most from AI in the pre-construction phase, where permit delays are the biggest schedule risk',
  'ADU permit packages are particularly well-suited to AI pre-review given the complexity of Marin County ADU ordinance requirements',
  'ConstruBay uses PlanPass.ai to pre-check permit packages before submission, reducing plan check correction cycles',
  'AI agents make experienced Marin County general contractors more effective — they do not replace the licensed contractor&apos;s legal responsibility or field judgment',
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How AI Agents Are Changing Construction in Marin County — Kitchen, Bathroom & ADU Remodels',
  description: 'AI agents are transforming how Marin County contractors manage kitchen remodels, bathroom remodels, ADU builds, and permit submissions in 2026.',
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
  image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
  url: 'https://www.construbay.com/blog/ai-agents-construction-marin-county',
  keywords: 'AI agents construction Marin County, kitchen remodel Marin County, bathroom remodel Marin County, general contractor Marin County, ADU Marin County, home remodel permits Marin',
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.construbay.com' },
        { name: 'Blog', url: 'https://www.construbay.com/blog' },
        { name: 'AI Agents Construction Marin County', url: 'https://www.construbay.com/blog/ai-agents-construction-marin-county' },
      ]} />
      <FaqSchema items={faqs} />

      <main style={{ backgroundColor: '#000000', minHeight: '100vh', paddingTop: '140px' }}>

        {/* Hero */}
        <div style={{ position: 'relative', height: '420px', marginBottom: '80px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
            alt="AI agent managing construction workflow for kitchen remodel and ADU permit in Marin County 2026"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px', maxWidth: '800px' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Marin Remodeling
            </p>
            <h1 style={{ fontFamily: CG, fontSize: 'clamp(26px, 4vw, 50px)', fontWeight: '300', color: '#ffffff', lineHeight: 1.2 }}>
              How AI Agents Are Changing Construction in Marin County — Kitchen, Bathroom &amp; ADU Remodels
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
              The Difference Between AI Tools and AI Agents
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Most homeowners are familiar with AI tools that answer questions — describe a kitchen layout, explain a permit requirement, generate a material option. AI agents are different. An AI agent does not just respond; it acts. Given a goal, an AI agent will plan the steps required to achieve it, execute those steps sequentially or in parallel, monitor the results, and adjust when something goes wrong. In construction, this distinction is significant.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              A traditional AI tool might answer: &quot;What does a Marin County kitchen remodel permit require?&quot; An AI agent, given the actual permit package for your specific kitchen remodel, will review every page, cross-reference each element against the current Marin County building code, identify the sections that are incomplete or non-compliant, draft correction notes for the architect, and flag the items that require a licensed engineer&apos;s stamp — autonomously, in minutes, without waiting for a human to work through the checklist manually. That difference in capability is what makes AI agents a genuine operational shift for general contractors in 2026.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              For Marin County homeowners planning a kitchen remodel, bathroom remodel, ADU, or whole-home renovation, the practical question is not &quot;what is an AI agent?&quot; — it is &quot;which phases of my project benefit most, and how does my contractor use them?&quot; The answer varies by project type, but the pattern is consistent: AI agents deliver the most value in the phases that are currently most prone to administrative delay.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              AI Agents and Kitchen Remodel Permits in Marin County
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              A <a href="/marin-county-kitchen-remodeling" style={{ color: '#cbb26a', textDecoration: 'none' }}>kitchen remodel in Marin County</a> that involves structural changes, electrical panel upgrades, or plumbing relocation requires a building permit. The permit package typically includes architectural drawings, structural calculations, electrical load schedules, Title 24 energy compliance documentation, and a completed application. Each component has specific requirements that vary by jurisdiction — Sausalito, Mill Valley, San Rafael, Tiburon, and unincorporated Marin County each have distinct plan check protocols.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The most common source of kitchen remodel permit delay is the plan check correction — the building department identifies a deficiency in the submitted package, issues a correction notice, and the project waits while the design team responds and resubmits. A single correction cycle in Marin County currently adds four to eight weeks to a project timeline. Multiple correction cycles — which are common when packages are assembled without a systematic pre-check — can delay a kitchen remodel start by three to four months.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              AI agents address this directly. By reviewing the permit package against current Marin County plan check requirements before submission — flagging missing details, incomplete calculations, and code conflicts — an AI agent performs the pre-check that previously depended on the contractor&apos;s memory and experience. The package that reaches the building department counter is cleaner and more complete. First-submission approval rates improve. Project timelines compress. ConstruBay deploys PlanPass.ai, our proprietary AI permit review agent, as a standard part of every kitchen remodel permit preparation.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              Bathroom Remodels: AI Agents in Subcontractor Coordination
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              A <a href="/marin-county-bathroom-remodeling" style={{ color: '#cbb26a', textDecoration: 'none' }}>bathroom remodel in Marin County</a> involves a tightly sequenced chain of trades: demolition, rough plumbing, rough electrical, backer board and waterproofing, tile, fixture installation, finish plumbing, finish electrical, and final inspection. Each trade depends on the previous one completing before they can begin. A delay in any link — a plumber who cannot schedule the rough-in until two weeks after demo, a tile installer whose materials are backordered — cascades through the entire sequence and extends the project.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              AI agents can manage this coordination layer continuously. Given the project schedule and the contact information for each subcontractor, an AI agent can send confirmation messages, track responses, flag non-responses for the project manager, update the schedule when a trade reports a conflict, and automatically identify the downstream impact of each change — without the project manager spending half their day on scheduling calls. This is not a theoretical application; it is how construction management software is evolving in 2026.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              For Marin County homeowners, this means a better-communicated project. When subcontractor schedules change — and they always do — the AI agent updates the master schedule, notifies the affected trades, and alerts the homeowner, all in the time it previously took the project manager to make three phone calls. The client experience improves without adding to the general contractor&apos;s administrative load.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              ADU Construction: Where AI Agents Have the Highest Impact
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Of all project types in Marin County, <a href="/marin-county-adu-builder" style={{ color: '#cbb26a', textDecoration: 'none' }}>ADU construction</a> has the highest concentration of administrative complexity relative to project scale. A 500-square-foot detached ADU requires zoning compliance verification, setback calculations, utility capacity confirmation, Title 24 energy documentation, fire separation analysis, and in many jurisdictions an owner-occupancy declaration. The permit package for a small ADU can run to dozens of pages across multiple disciplines — and every page is a potential plan check correction.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              AI agents are particularly well-suited to ADU permit review because the requirements, while complex, are codified and deterministic. The Marin County ADU ordinance, the applicable building code sections, and the relevant Title 24 requirements can all be loaded into an AI agent&apos;s context. Given a proposed ADU design and permit package, the agent can systematically check every compliance point and produce a pre-submission correction report — the same function that previously required an experienced permit expediters to perform manually. See our detailed post on <a href="/blog/adu-trends-marin-county-2026" style={{ color: '#cbb26a', textDecoration: 'none' }}>ADU trends and regulatory changes in Marin County for 2026</a> for the current ordinance landscape.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              Beyond permits, AI agents are helping ADU owners manage the longer-term documentation that new units require: rental compliance records, utility billing separation documentation, and in some jurisdictions ongoing owner-occupancy certification. These are administrative tasks that homeowners often neglect — and that create legal exposure over time. AI agents that manage document generation and filing deadlines reduce that risk without requiring the homeowner to maintain a complex administrative system manually.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              What AI Agents Cannot Do in Marin County Construction
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The efficiency gains from AI agents in construction are real and measurable. The limitations are equally important to understand, because Marin County homeowners who overestimate AI capability make the same class of mistake as those who ignore it entirely — they misallocate trust.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              AI agents cannot exercise construction judgment. When the plumber opens a wall during a Tiburon kitchen remodel and finds galvanized pipe that was not on the drawings, the decision about how to respond — what to replace, how to document it, how to update the permit, how to sequence the repair against the cabinet installation schedule — requires a licensed contractor who understands the field conditions, the permit implications, and the client&apos;s priorities simultaneously. No AI agent navigates that intersection.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              AI agents also cannot build the subcontractor relationships that determine project quality in Marin County. The best tile setters, the most reliable plumbers, and the finish carpenters whose work holds up to luxury-level scrutiny are allocated on the basis of relationship and track record — not on the basis of which general contractor has the best scheduling software. AI optimizes around the contractor&apos;s network; it does not substitute for it. The general contractor&apos;s human capital — relationships, reputation, and local knowledge — remains the primary variable in Marin County project quality.
            </p>

            <h2 style={{ fontFamily: CG, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '300', color: '#ffffff', marginTop: '56px', marginBottom: '20px', lineHeight: 1.3 }}>
              How ConstruBay Deploys AI Agents Today
            </h2>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              ConstruBay is a <a href="/marin-county-general-contractor" style={{ color: '#cbb26a', textDecoration: 'none' }}>licensed Marin County general contractor</a> (CSLB #1106798) and the founder of PlanPass.ai — an AI-powered permit review platform built specifically for California residential construction. Every ConstruBay project that requires a building permit — kitchen remodels, bathroom remodels, ADUs, home additions, and whole-home renovations — goes through PlanPass.ai before the permit package is submitted to the building department.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              The PlanPass.ai agent reviews the permit package against the applicable jurisdiction&apos;s requirements, produces a pre-submission correction report, and flags the items that require resolution before the package is submitted. This happens before the contractor drives to the building department counter — which means correction cycles that previously consumed weeks are resolved in hours, during the preparation phase, before they affect the project schedule.
            </p>
            <p style={{ fontFamily: MS, fontSize: '14px', fontWeight: '300', color: 'rgba(255,255,255,0.65)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '16px' }}>
              We also use AI agents for subcontractor scheduling coordination, procurement tracking, and client communication on active projects. The goal is not to replace the human judgment and relationships that define ConstruBay&apos;s work in Marin County — it is to free the project team from administrative tasks so that human attention is concentrated where it creates the most value: field decisions, client relationships, and quality control. ConstruBay holds a 4.9/5 rating from 47 Google reviews. Every project is owner-led by Paulo Fernandes from initial assessment through final inspection.
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
            {['AI agents construction', 'kitchen remodel Marin County', 'bathroom remodel Marin County', 'general contractor Marin County', 'ADU Marin County', 'home remodel permits', 'PlanPass AI'].map(tag => (
              <span key={tag} style={{ fontFamily: MS, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.7)', border: '1px solid rgba(203,178,106,0.2)', padding: '4px 12px' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '64px', padding: '48px', border: '1px solid rgba(203,178,106,0.2)', textAlign: 'center' }}>
            <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
              Ready to Start Your Remodel?
            </p>
            <h3 style={{ fontFamily: CG, fontSize: '32px', fontWeight: '300', color: '#ffffff', marginBottom: '16px' }}>
              Let&apos;s Discuss Your Project
            </h3>
            <p style={{ fontFamily: MS, fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.8 }}>
              Complimentary consultation for remodeling projects in Marin and Sonoma County.
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
