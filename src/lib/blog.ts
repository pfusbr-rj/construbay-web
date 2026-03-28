export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  coverImage: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-long-does-a-permit-take-marin-county',
    title: 'How Long Does a Building Permit Take in Marin County?',
    excerpt: 'Permit timelines in Marin County vary wildly by city and project type. Here\'s what to realistically expect in 2024 — and how to avoid the most common delays.',
    author: 'Paulo Fernandes',
    publishedAt: '2024-11-15',
    category: 'Permits & Planning',
    tags: ['permits', 'Marin County', 'building permit', 'timeline', 'contractor tips'],
    coverImage: '/images/blog/blog-01.png',
    readTime: 7,
    content: `Getting a building permit in Marin County is one of the most common frustrations homeowners face when planning a remodel. Unlike some Bay Area counties where permits move on a predictable schedule, Marin's 11 cities and unincorporated areas each run their own building departments — meaning the experience in Mill Valley can be completely different from San Rafael.

## The Short Answer

Plan for 4–12 weeks for most residential permits. Complex projects — ADUs, additions with structural changes, hillside work — can run 3–6 months. Fire rebuild permits are a separate category entirely and depend heavily on CAL FIRE clearance.

## City-by-City Breakdown

**Mill Valley** has improved significantly since hiring additional plan checkers in 2023. Simple kitchen remodels with no structural work can be over-the-counter (OTC) in some cases. ADUs are taking 8–12 weeks for initial review.

**Tiburon** is known for being thorough. Expect 10–14 weeks for any project in a hillside zone. Their planning department is small and moves deliberately.

**San Rafael** has the highest volume of permits in the county and has invested in digital submission. Standard residential permits are running 6–8 weeks. Their online portal (etrakit) makes status checks easy.

**Sausalito** is perhaps the most complex — hillside, coastal, and historic overlay zones can all apply simultaneously. Budget 12–16 weeks and hire a permit expediter if you're on a deadline.

**Ross and Belvedere** run small, meticulous departments. Projects typically take 8–12 weeks but revisions are common and detailed.

## What Slows Permits Down

**Incomplete applications** are the number-one cause of delays. Missing a soils report, incomplete energy compliance forms (Title 24), or unclear structural notes will trigger a correction notice that adds 3–4 weeks per round.

**Discretionary review** is triggered when your project requires a variance, design review, or conditional use permit. This can add months and requires public notice.

**Fire hazard zone requirements** add layers of review for properties in the Wildland-Urban Interface (WUI). Many Marin hillside homes fall into this category.

## How We Handle Permits for Our Clients

At ConstruBay, permit management is part of every project we take on. We maintain relationships with each city's building department, know which plan checkers prefer what format, and pre-check every submittal before it goes in. For most of our projects, we're ahead of the average timeline.

If you're planning a project and want a realistic permit forecast before you commit to a budget and timeline, call us. That conversation is always free.`,
  },
  {
    slug: 'adu-cost-marin-county-2024',
    title: 'How Much Does an ADU Cost in Marin County? (2024 Guide)',
    excerpt: 'ADU costs in Marin County range from $180K to $600K+ depending on type, size, and city. Here\'s a complete breakdown of what you\'ll actually pay.',
    author: 'Paulo Fernandes',
    publishedAt: '2024-10-28',
    category: 'ADUs',
    tags: ['ADU', 'cost', 'Marin County', 'accessory dwelling unit', 'budget'],
    coverImage: '/images/blog/blog-02.png',
    readTime: 9,
    content: `The ADU market in Marin County has matured significantly since California's 2020 ADU reform laws. What was once a complex, expensive, unpredictable process has become more standardized — but costs remain significantly higher here than in most of California.

## ADU Types and Cost Ranges

**Attached ADU (Addition)**
An addition to your existing home that functions as a separate unit. This is typically the most cost-efficient option if your home's footprint allows for it.
- Range: $180,000 – $320,000
- Timeline: 14–20 months (including permits)

**Detached ADU (New Structure)**
A standalone structure built in your backyard or on a separate portion of your lot.
- Range: $280,000 – $480,000
- Timeline: 16–24 months

**Garage Conversion ADU**
Converting an existing attached or detached garage. California law now requires cities to ministerially approve these with minimal restrictions.
- Range: $120,000 – $220,000
- Timeline: 10–16 months

**Junior ADU (JADU)**
A unit carved from existing space within the primary home, typically 500 sq ft or less.
- Range: $80,000 – $160,000
- Timeline: 8–12 months

## What Drives the Cost

**Labor** is the biggest variable in Marin. Skilled trades — framing, electrical, plumbing, tile — command a premium here. Plan for labor to represent 35–45% of your total budget.

**Site conditions** matter enormously. Hillside lots require grading, retaining walls, and sometimes engineered foundations. A flat lot in Corte Madera is a very different project than a sloped site in Mill Valley.

**Finishes** are a personal choice, but understand that in Marin the resale and rental expectations are high. A budget finish package that works in Sacramento will feel incongruous here.

**Fees and permits** in Marin cities run $15,000–$45,000 for a typical detached ADU. School fees, traffic impact fees, and sewer connection fees all add up.

## The Rental Math

A well-built ADU in Mill Valley or Tiburon can command $3,500–$5,500/month. At $4,500/month, a $350,000 ADU project pays itself off in 6.5 years — with the added benefit of permanent equity increase and flexibility for aging parents or future sale value.

## Our Process

We specialize in ADU projects throughout Marin. Every project starts with a free feasibility assessment — we'll look at your parcel, setbacks, lot coverage limits, and septic/sewer capacity before you spend a dollar on design. Call (415) 968-9494 to set that up.`,
  },
  {
    slug: 'ai-permits-future-of-construction-marin',
    title: 'AI-Assisted Permitting: Is It the Future for Marin County Remodels?',
    excerpt: 'Some Bay Area cities are piloting AI permit review tools. Here\'s what that means for Marin homeowners planning remodels — and why the human contractor relationship still matters most.',
    author: 'Paulo Fernandes',
    publishedAt: '2024-09-20',
    category: 'Industry Trends',
    tags: ['AI', 'permits', 'technology', 'future of construction', 'Marin County'],
    coverImage: '/images/blog/blog-03.png',
    readTime: 6,
    content: `There's a quiet revolution happening in municipal building departments across California. Cities like San Jose and Sacramento have begun piloting AI-assisted plan review tools that can flag code compliance issues in minutes rather than weeks. The question for Marin homeowners: is this coming here, and should you care?

## What AI Permit Review Actually Does

Current AI permitting tools — companies like Symbium, Archistar, and a handful of municipal-built systems — work by ingesting building plans and cross-referencing them against the applicable code: IBC, local amendments, energy standards (Title 24), fire codes. They flag non-compliant elements and generate correction notices automatically.

The technology is genuinely impressive. A plan check that might take a human reviewer 3–4 weeks of calendar time (accounting for queue depth) can be analyzed in hours. Some simple project types — like standard garage conversions or deck permits — are already being processed this way in pilot cities.

## Where Marin Stands

As of late 2024, no Marin County city has adopted a full AI permit review system. San Rafael has expanded its eTrakit digital portal significantly, and there's industry conversation about AI integration, but the county's 11 independent building departments make system-wide adoption slow.

The more immediate application in Marin is pre-submission tools — software that contractors and architects use *before* submitting to check their plans against the local code. We've been exploring these tools at ConstruBay as part of our permit preparation process.

## What This Means for Your Project (Today)

In practical terms: nothing has changed yet for your remodel. You still need a licensed contractor who knows Marin's local amendments, has relationships with plan checkers, and understands the informal expectations of each department.

What *will* change in the next few years is how quickly straightforward permits move. If AI tools reduce simple residential permit timelines from 8 weeks to 2 weeks, that's transformative for project scheduling and financing.

## The Human Layer That Won't Go Away

Where AI tools fall short is in discretionary judgment — the hillside neighbor who objects to your second story, the design review board that wants different window proportions, the fire marshal who has site-specific concerns about your WUI lot. These conversations require a contractor who knows the people and the politics.

That's been the ConstruBay approach from day one: combine the best available tools with deep local relationships. We'll adopt AI permit tools as they become available. But the phone call to the plan checker the day before submittal? That's still how projects move in Marin.`,
  },
  {
    slug: 'tiburon-kitchen-remodel-what-to-expect',
    title: 'What to Expect From a High-End Kitchen Remodel in Tiburon',
    excerpt: 'A complete kitchen remodel in Tiburon runs $120K–$350K. Here\'s what drives the cost, what the timeline looks like, and what separates average from exceptional.',
    author: 'Paulo Fernandes',
    publishedAt: '2024-08-12',
    category: 'Kitchen & Bath',
    tags: ['kitchen remodel', 'Tiburon', 'Marin County', 'luxury remodel', 'cost guide'],
    coverImage: '/images/blog/blog-04.png',
    readTime: 8,
    content: `Tiburon kitchens are a different category of project. The views, the clientele, the expectation of finish quality — everything pushes toward the high end. After completing several kitchen renovations in Tiburon and neighboring Belvedere, here's what we've learned about what makes these projects succeed.

## The Cost Range

A complete kitchen remodel in Tiburon — gutted to studs, new cabinets, appliances, countertops, flooring, and lighting — runs:

- **Mid-range finish package:** $120,000 – $180,000
- **High-end custom:** $180,000 – $280,000
- **Bespoke / architectural:** $280,000 – $400,000+

The variance is almost entirely driven by cabinetry and appliances. A Thermador/Sub-Zero appliance package alone can run $45,000–$80,000. Custom cabinetry from a local maker adds another $60,000–$120,000 for a large kitchen.

## What the Timeline Looks Like

**Design phase (6–10 weeks):** Even before permits, the design process — space planning, cabinet layout, material selection — takes longer than most clients expect. Rushing this phase is the most common cause of regret.

**Permitting (8–14 weeks):** Kitchen permits in Tiburon involve electrical, plumbing, and sometimes structural. Plan for 10 weeks.

**Construction (10–16 weeks):** Demolition is 3–5 days. Rough trades (electrical, plumbing) take 2–3 weeks. Cabinet installation is 1–2 weeks. Countertop templating and fabrication adds 3–4 weeks. Finish work, appliance installation, and punch list rounds out the schedule.

**Total: 6–9 months from design start to completion** is realistic for a high-end kitchen in Tiburon.

## What Separates Good From Great

**Integrated appliances** — panels on the dishwasher and refrigerator — are the single biggest visual upgrade for the cost. Done well, the kitchen reads as furniture rather than an appliance showroom.

**Lighting layers matter.** Recessed ambient, under-cabinet task, and pendant or chandelier accent lighting require careful planning and a skilled electrician. Get the rough-in right; changing it after drywall is expensive.

**Stone selection is a commitment.** We take every Tiburon client to the stone yard to hand-select slabs. Photos don't capture the movement and color variation that will define the room.

**The window seat that wasn't in the plan.** On almost every kitchen project, we find an opportunity — a bump-out, a built-in, a view window — that wasn't in the original scope but dramatically elevates the result. Great contractors see these.

If you're planning a kitchen remodel in Tiburon or southern Marin, we'd love to walk through your space. Call us at (415) 968-9494 or use the inquiry form on our site.`,
  },
  {
    slug: 'how-to-choose-a-contractor-marin-county',
    title: 'How to Choose a General Contractor in Marin County (Without Getting Burned)',
    excerpt: 'Marin has hundreds of contractors and a history of homeowners getting burned. Here\'s a practical guide to vetting, hiring, and working with a GC in this market.',
    author: 'Paulo Fernandes',
    publishedAt: '2024-07-08',
    category: 'Homeowner Guides',
    tags: ['choosing a contractor', 'Marin County', 'general contractor', 'vetting', 'homeowner tips'],
    coverImage: '/images/blog/blog-05.png',
    readTime: 10,
    content: `Marin County has a contractor problem. Not a shortage — there are plenty of people willing to take your money. The problem is finding one who will do what they said, when they said it, for what they quoted.

After years of building in Marin, I've heard enough contractor horror stories from clients who came to us after bad experiences. Here's an honest guide to vetting contractors in this market.

## Start With License Verification

Every contractor working in California must hold a valid CSLB license. Verify it at cslb.ca.gov before any conversation goes further. Check that the license:

- Is active (not suspended or expired)
- Covers the type of work you need (Class B for general contracting)
- Has no formal complaints or disciplinary actions
- Has workers' compensation insurance on file

A contractor who resists giving you their license number is a red flag. Ours is #1106798 — check it anytime.

## Get Three Bids, But Don't Just Compare Numbers

Three bids is the right number. Fewer and you don't have enough data. More and you're wasting everyone's time.

When the bids come in, don't compare them as single numbers. Ask each bidder to break out:

- Labor by trade (framing, electrical, plumbing, tile, etc.)
- Materials (allowances vs. specified items)
- Permits and fees
- Their markup/overhead/profit percentage
- Exclusions (what's NOT included)

The gap between the highest and lowest bid on a complex Marin remodel can be $200,000. That gap almost always represents either scope differences or someone who is going to run short and come back for more.

## Check References — But Ask the Right Questions

"Were you happy with the work?" is a useless reference question. Everyone says yes. Ask instead:

- Did the project come in at the original budget, or were there change orders? How were they handled?
- Was the job site clean and professional? Were subcontractors supervised?
- Were there any problems, and if so, how did the contractor handle them?
- Would you hire them again for a larger project?

The last question tells you everything.

## The Contract Must Cover These Things

Any reputable contractor will present a detailed contract. If they hand you a one-page agreement, walk away. The contract should specify:

- Detailed scope of work (attached plans and specifications, not vague descriptions)
- Payment schedule tied to milestones, not calendar dates
- Change order process and markup rate
- Lien release requirements for all subcontractors
- Warranty terms (at minimum 1 year on workmanship)
- Dispute resolution process

## Red Flags to Watch For

**Large upfront payment requests.** California law limits deposits to 10% or $1,000, whichever is less, for contractors licensed under $500K. Requiring 30–50% upfront is either illegal or a sign they're using your money to finance another job.

**No physical office or address.** Transient contractors have nothing to lose if a project goes sideways.

**Too eager, too fast.** A contractor who can start your project next week and hasn't asked many questions hasn't thought about your project yet.

**Vague answers about subcontractors.** Who is doing your electrical? Your tile? If the GC can't name them, they may be using whoever's available rather than a trusted team.

We're happy to answer any of these questions about our own company. That's the standard every contractor should be held to.`,
  },
  {
    slug: 'sonoma-county-remodel-trends-2024',
    title: 'Sonoma County Remodel Trends: What Homeowners Are Prioritizing in 2024',
    excerpt: 'From post-fire rebuilds to wine country estate renovations, Sonoma County\'s remodel market has unique characteristics. Here\'s what we\'re seeing on the ground.',
    author: 'Paulo Fernandes',
    publishedAt: '2024-06-01',
    category: 'Industry Trends',
    tags: ['Sonoma County', 'remodel trends', '2024', 'home renovation', 'wine country'],
    coverImage: '/images/blog/blog-06.png',
    readTime: 7,
    content: `Sonoma County's remodeling market tells a story in two parts: the continued recovery from the 2017 and 2019 fires, and a broader renovation wave driven by homeowners who bought or stayed through the pandemic years and are now ready to invest in their spaces.

## Post-Fire Rebuilds: The Long Tail

Seven years after the Tubbs Fire, the rebuild effort in Fountaingrove and Coffey Park is still ongoing. Many homeowners who initially received insurance settlements found that construction costs had risen faster than their coverage — and are now supplementing with personal funds to complete or upgrade their rebuilt homes.

We've worked on several of these projects, and there's a distinct psychology to them. Clients rebuilding want it done right, want fire-resistant materials and construction practices, and generally want to upgrade beyond what they had before. These are often $800K–$2M+ projects.

## What Sonoma Homeowners Are Investing In

**Outdoor-indoor connection.** Sonoma's climate and landscape invite this like nowhere else. Retractable walls, expansive decking, outdoor kitchens with proper infrastructure (not just a grill on a patio) — this category represents a large share of our Sonoma project scope.

**Energy upgrades tied to remodels.** The combination of high PG&E rates and California incentives has made solar, battery backup, and heat pump HVAC almost standard additions to any major remodel in the county.

**Multigenerational living.** ADUs in Sonoma aren't just investment properties — many are being built for parents or adult children. The lot sizes here, particularly in Santa Rosa's older neighborhoods and the unincorporated areas, allow for generous standalone structures.

**Kitchen-centric remodels.** Wine country living centers on the kitchen and the table. We're seeing $200,000–$400,000 kitchen remodels that incorporate professional-grade appliances, butler's pantries, and direct garden access.

## The Contractor Shortage Is Real

Sonoma County doesn't have as deep a bench of luxury contractors as Marin. Post-fire rebuilds absorbed a lot of capacity, and the ongoing demand for skilled trades — especially electricians, plumbers, and custom cabinet makers — means lead times are longer and the best contractors are booked out 6–12 months.

If you're planning a Sonoma project for 2025, the conversation with your contractor should be happening now. We're currently scheduling projects for Q1–Q2 2025 and would love to discuss your vision.`,
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(p => p.category === category);
}
