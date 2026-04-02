import Image from "next/image";
import Link from "next/link";
import SiteSchema from "@/components/schema/SiteSchema";

const CG = 'Cormorant Garamond, serif';
const MS = 'Montserrat, sans-serif';
const GOLD = '#cbb26a';
const GOLD_GRADIENT = 'linear-gradient(135deg, #bb8b4a, #f7eb9e)';

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '$85M+', label: 'Constructed' },
  { value: '4.9\u2605', label: 'Google Rating' },
  { value: '47', label: 'Five-Star Reviews' },
  { value: '7 Years', label: 'in Marin' },
];

const featuredProjects = [
  {
    image: '/images/gallery/bagatellos/bagatellos-01.jpg',
    name: 'Marion Avenue Residence',
    location: 'Mill Valley, CA',
    type: 'Full Home Remodel',
    href: '/projects/marion-avenue-mill-valley',
  },
  {
    image: '/images/gallery/colaizzo/colaizzo-01.jpg',
    name: 'Colaizzo Estate',
    location: 'Tiburon, CA',
    type: 'Custom Home Addition',
    href: '/projects',
  },
  {
    image: '/images/gallery/eugene-anya/eugene-anya-01.jpg',
    name: 'Eugene & Anya Residence',
    location: 'San Rafael, CA',
    type: 'Kitchen & Bath Remodel',
    href: '/projects',
  },
];

const testimonials = [
  {
    text: "Paulo was very professional, personable, and communicative — difficult to find with a general contractor. His team arrived promptly every morning, completed all the work quickly, on budget, and with very high quality. I highly recommend Paulo and his team.",
    author: 'Brian M.',
    project: 'Home Services · Mill Valley',
  },
  {
    text: "Paulo and his team did a great job. The end result looks better than I was expecting — very clean, efficient, and professional. They came right on time and finished in the amount of time they promised. High quality work at a very reasonable price.",
    author: 'Kathryn R.',
    project: 'Drywall & Finishing · Marin County',
  },
  {
    text: "We interviewed several companies and went with our gut and chose ConstruBay. They were professional, on-time, and did a great job. So glad we chose them.",
    author: 'Gwen M.',
    project: 'Home Renovation · Marin County',
  },
];

const processSteps = [
  {
    num: '01',
    label: 'Discovery & Vision',
    desc: 'We listen first. Understanding your goals, lifestyle, and budget before a single line is drawn.',
  },
  {
    num: '02',
    label: 'Design & Planning',
    desc: 'Detailed drawings and material selections aligned to your vision and Marin County standards.',
  },
  {
    num: '03',
    label: 'Permitting & Prep',
    desc: 'We navigate the permit process with precision, leveraging local relationships to move fast.',
  },
  {
    num: '04',
    label: 'Expert Construction',
    desc: 'Owner-led builds with vetted trade partners. Quality inspected at every stage.',
  },
  {
    num: '05',
    label: 'Final Walkthrough & Warranty',
    desc: "A rigorous punch-list and 10-year workmanship warranty. We don't leave until it's right.",
  },
];

const differentiators = [
  {
    title: 'PlanPass.ai Integration',
    body: 'We use AI-powered permit intelligence to accelerate approvals and eliminate surprises.',
  },
  {
    title: '10-Year Workmanship Warranty',
    body: 'Industry-leading coverage because we stand behind every nail, beam, and finish.',
  },
  {
    title: 'Transparent Pricing',
    body: 'Detailed line-item bids. No change order surprises. No hidden fees.',
  },
  {
    title: 'Owner-Led Projects',
    body: 'Paulo is on every jobsite. Your project is never handed off to a subcontractor.',
  },
];

const credentials = [
  'CSLB Licensed #1106798',
  'Fully Bonded & Insured',
  'Marin County Permitted',
  'BBB Accredited',
];

const featuredIn = ['Houzz', 'Nextdoor', 'Marin IJ', 'Yelp', 'Google'];

const painPoints = [
  {
    headline: 'Permit Delays & Compliance Surprises',
    body: "Marin County's 11 independent building departments each operate on different timelines and review standards. One incomplete submission can add months — and most contractors don't warn you.",
  },
  {
    headline: 'Budget Uncertainty & Hidden Costs',
    body: "Most contractors quote low to win the job, then escalate with change orders once demolition begins. A fixed-scope contract with line-item pricing eliminates that dynamic entirely.",
  },
  {
    headline: 'Contractor Reliability & Project Timelines',
    body: "Finding a contractor who shows up daily, communicates proactively, and delivers what was promised is harder than it should be in this market. Owner-led oversight changes that equation.",
  },
];

const quickServices = [
  { label: 'ADU Construction', desc: 'Detached, attached, garage conversions & JADUs. Full permit management.' },
  { label: 'Kitchen Remodeling', desc: 'Custom cabinetry, stone countertops, professional appliances, gut-to-stud scopes.' },
  { label: 'Bathroom Renovation', desc: 'Spa-level finishes, heated floors, custom tile, walk-in showers, soaking tubs.' },
  { label: 'HVAC Systems', desc: 'Full system replacements, heat pump upgrades, zoned installs for new construction.' },
  { label: 'Skylights & Natural Light', desc: 'Custom and Velux skylight installation with flashing, waterproofing, and permits.' },
  { label: 'Structural Framing', desc: 'Load-bearing modifications, room additions, second-story builds, seismic upgrades.' },
];

const comparisonRows = [
  { feature: 'Transparent Line-Item Pricing', construbay: true },
  { feature: 'Permit Management & Expediting', construbay: true },
  { feature: 'Real-Time Project Tracking', construbay: true },
  { feature: 'Licensed, Bonded & Insured', construbay: true },
  { feature: 'Written Timeline Guarantees', construbay: true },
];

export default function HomePage() {
  return (
    <>
      <SiteSchema />

      {/* ── SECTION 1: HERO ─────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/images/hero/hero-bg-1.jpg"
          alt="Luxury whole-home remodel with open-plan living area and custom millwork in Marin County"
          fill
          className="object-cover"
          priority
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.82) 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '0 24px',
            maxWidth: '900px',
            width: '100%',
          }}
        >
          <h1
            style={{
              fontFamily: CG,
              fontSize: 'clamp(52px, 7vw, 96px)',
              fontWeight: 300,
              lineHeight: 1.05,
              marginBottom: '28px',
              background: GOLD_GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Built With Intention.
          </h1>
          <p
            style={{
              fontFamily: MS,
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.75)',
              letterSpacing: '0.06em',
              lineHeight: 1.8,
              marginBottom: '48px',
            }}
          >
            Marin&apos;s premier luxury general contractor &mdash; crafting exceptional homes since 2018.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            <Link
              href="/request-a-bid"
              style={{
                fontFamily: MS,
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                backgroundColor: GOLD,
                color: '#000',
                padding: '16px 40px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Request a Bid
            </Link>
            <Link
              href="/projects"
              style={{
                fontFamily: MS,
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                backgroundColor: 'transparent',
                color: GOLD,
                border: `1px solid ${GOLD}`,
                padding: '16px 40px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              View Our Work
            </Link>
          </div>

          <p
            style={{
              fontFamily: MS,
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(203,178,106,0.5)',
            }}
          >
            CSLB #1106798 &middot; Licensed &middot; Bonded &middot; Insured
          </p>
        </div>
      </section>

      {/* ── SECTION 1B: PAIN POINTS ─────────────────────────── */}
      <section style={{ padding: '120px 24px', backgroundColor: '#050505' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p
              style={{
                fontFamily: MS,
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(203,178,106,0.6)',
                marginBottom: '16px',
              }}
            >
              What Marin Homeowners Face
            </p>
            <h2
              style={{
                fontFamily: CG,
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                fontWeight: 300,
                color: '#ffffff',
                lineHeight: 1.15,
              }}
            >
              The Problems We Solve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point) => (
              <div
                key={point.headline}
                style={{
                  borderLeft: `3px solid ${GOLD}`,
                  backgroundColor: '#0a0a0a',
                  padding: '40px 36px',
                }}
              >
                <h3
                  style={{
                    fontFamily: MS,
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: GOLD,
                    marginBottom: '20px',
                    lineHeight: 1.5,
                  }}
                >
                  {point.headline}
                </h3>
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.9,
                    letterSpacing: '0.03em',
                  }}
                >
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1C: QUICK-SCAN SERVICES ─────────────────── */}
      <section style={{ padding: '120px 24px', backgroundColor: '#000' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p
              style={{
                fontFamily: MS,
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(203,178,106,0.6)',
                marginBottom: '16px',
              }}
            >
              What We Build
            </p>
            <h2
              style={{
                fontFamily: CG,
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                fontWeight: 300,
                color: GOLD,
              }}
            >
              Core Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ backgroundColor: 'rgba(203,178,106,0.1)' }}
          >
            {quickServices.map((svc) => (
              <div
                key={svc.label}
                style={{ backgroundColor: '#000', padding: '36px 40px' }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '2px',
                    backgroundColor: GOLD,
                    marginBottom: '20px',
                  }}
                />
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    marginBottom: '10px',
                  }}
                >
                  {svc.label}
                </p>
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: '12px',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.7,
                    letterSpacing: '0.02em',
                  }}
                >
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <Link
              href="/services"
              style={{
                fontFamily: MS,
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: GOLD,
                textDecoration: 'none',
              }}
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 1D: WHY CONSTRUBAY MATRIX ───────────────── */}
      <section style={{ padding: '120px 24px', backgroundColor: '#050505' }}>
        <div className="max-w-4xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p
              style={{
                fontFamily: MS,
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(203,178,106,0.6)',
                marginBottom: '16px',
              }}
            >
              The Difference
            </p>
            <h2
              style={{
                fontFamily: CG,
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                fontWeight: 300,
                color: '#ffffff',
              }}
            >
              ConstruBay vs. Typical Contractors
            </h2>
          </div>

          {/* Table header */}
          <div
            className="grid grid-cols-3"
            style={{
              borderBottom: '1px solid rgba(203,178,106,0.25)',
              paddingBottom: '16px',
              marginBottom: '0',
            }}
          >
            <p style={{ fontFamily: MS, fontSize: '9px', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
              Feature
            </p>
            <p style={{ fontFamily: MS, fontSize: '9px', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, textAlign: 'center' }}>
              ConstruBay
            </p>
            <p style={{ fontFamily: MS, fontSize: '9px', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>
              Typical Contractor
            </p>
          </div>

          {/* Table rows */}
          {comparisonRows.map((row, i) => (
            <div
              key={row.feature}
              className="grid grid-cols-3"
              style={{
                padding: '20px 0',
                borderBottom: i < comparisonRows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                alignItems: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: MS,
                  fontSize: '12px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '0.03em',
                }}
              >
                {row.feature}
              </p>
              <div style={{ textAlign: 'center' }}>
                <span
                  style={{
                    fontFamily: MS,
                    fontSize: '18px',
                    fontWeight: 700,
                    color: GOLD,
                  }}
                >
                  ✓
                </span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span
                  style={{
                    fontFamily: MS,
                    fontSize: '18px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.2)',
                  }}
                >
                  ✗
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 2: PROOF BAR ────────────────────────────── */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '64px 24px' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: CG,
                    fontSize: 'clamp(28px, 3vw, 42px)',
                    fontWeight: 300,
                    color: GOLD,
                    marginBottom: '8px',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: '10px',
                    fontWeight: 300,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SELECTED WORK ────────────────────────── */}
      <section style={{ padding: '120px 24px', backgroundColor: '#000' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <h2
              style={{
                fontFamily: CG,
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 300,
                color: GOLD,
                marginBottom: '16px',
              }}
            >
              Selected Work
            </h2>
            <p
              style={{
                fontFamily: MS,
                fontSize: '13px',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.06em',
              }}
            >
              A portfolio of homes built to last generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className="group block"
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4/5',
                    border: '1px solid rgba(203,178,106,0.2)',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                  >
                    <span
                      style={{
                        fontFamily: MS,
                        fontSize: '11px',
                        fontWeight: 400,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: GOLD,
                        border: `1px solid ${GOLD}`,
                        padding: '12px 32px',
                      }}
                    >
                      View Project
                    </span>
                  </div>
                </div>
                <div style={{ padding: '20px 0 8px' }}>
                  <p
                    style={{
                      fontFamily: CG,
                      fontSize: '22px',
                      fontWeight: 300,
                      color: '#fff',
                      marginBottom: '4px',
                    }}
                  >
                    {project.name}
                  </p>
                  <p
                    style={{
                      fontFamily: MS,
                      fontSize: '10px',
                      fontWeight: 300,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {project.type} &middot; {project.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <Link
              href="/projects"
              style={{
                fontFamily: MS,
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: GOLD,
                textDecoration: 'none',
              }}
            >
              See All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CLIENT STORIES ───────────────────────── */}
      <section style={{ padding: '120px 24px 196px', backgroundColor: '#050505' }}>
        <div className="max-w-6xl mx-auto px-4 md:px-16">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <h2
              style={{
                fontFamily: CG,
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 300,
                color: GOLD,
              }}
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                style={{
                  backgroundColor: '#111',
                  border: '1px solid rgba(203,178,106,0.15)',
                  padding: '48px 36px',
                }}
              >
                <p
                  style={{
                    fontFamily: CG,
                    fontSize: '64px',
                    fontWeight: 300,
                    color: GOLD,
                    lineHeight: 0.6,
                    marginBottom: '28px',
                  }}
                >
                  &ldquo;
                </p>
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.9,
                    marginBottom: '32px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {t.text}
                </p>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <svg key={n} width="14" height="14" viewBox="0 0 24 24" fill={GOLD}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: CG,
                    fontSize: '18px',
                    fontWeight: 300,
                    color: GOLD,
                  }}
                >
                  &mdash; {t.author}
                </p>
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: '10px',
                    fontWeight: 300,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                    marginTop: '4px',
                  }}
                >
                  {t.project}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: MEET PAULO ───────────────────────────── */}
      <section style={{ padding: '120px 24px', backgroundColor: '#000' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '1/1',
                border: '1px solid rgba(203,178,106,0.3)',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/paulo/paulo-fernandes-01.png"
                alt="Paulo Fernandes, Founder of ConstruBay — Licensed General Contractor Marin County"
                fill
                className="object-cover"
              />
            </div>

            {/* Copy */}
            <div>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: '10px',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'rgba(203,178,106,0.6)',
                  marginBottom: '16px',
                }}
              >
                Founder &amp; Owner
              </p>
              <h2
                style={{
                  fontFamily: CG,
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 300,
                  color: GOLD,
                  marginBottom: '28px',
                  lineHeight: 1.1,
                }}
              >
                Meet Paulo
              </h2>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 2,
                  marginBottom: '20px',
                  letterSpacing: '0.03em',
                }}
              >
                Paulo Ferreira founded ConstruBay with a single principle: every home deserves to
                be built with intention. With over 15 years of construction experience across
                Marin, Sonoma, and Napa Counties, Paulo leads every project personally &mdash; from
                initial design through final walkthrough.
              </p>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 2,
                  marginBottom: '40px',
                  letterSpacing: '0.03em',
                }}
              >
                Licensed, bonded, and insured. CSLB #1106798.
              </p>
              <Link
                href="https://calendly.com/construbay/initial-consultation-construbay"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: MS,
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: GOLD,
                  textDecoration: 'none',
                }}
              >
                Schedule a Consultation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: OUR PROCESS ──────────────────────────── */}
      <section style={{ padding: '120px 24px', backgroundColor: '#050505' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2
              style={{
                fontFamily: CG,
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 300,
                color: GOLD,
              }}
            >
              How We Build
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Desktop connector line */}
            <div
              className="hidden md:block"
              style={{
                position: 'absolute',
                top: '28px',
                left: '8%',
                right: '8%',
                height: '1px',
                backgroundColor: 'rgba(203,178,106,0.22)',
              }}
            />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.num}
                  style={{ position: 'relative', textAlign: 'center' }}
                >
                  <p
                    style={{
                      fontFamily: CG,
                      fontSize: '32px',
                      fontWeight: 300,
                      color: GOLD,
                      marginBottom: '16px',
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </p>
                  <p
                    style={{
                      fontFamily: MS,
                      fontSize: '10px',
                      fontWeight: 400,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#fff',
                      marginBottom: '12px',
                    }}
                  >
                    {step.label}
                  </p>
                  <p
                    style={{
                      fontFamily: MS,
                      fontSize: '11px',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.4)',
                      lineHeight: 1.8,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: WHY CONSTRUBAY ───────────────────────── */}
      <section style={{ padding: '120px 24px', backgroundColor: '#000' }}>
        <div className="max-w-5xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <h2
              style={{
                fontFamily: CG,
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 300,
                color: GOLD,
              }}
            >
              Why ConstruBay
            </h2>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px"
            style={{ backgroundColor: 'rgba(203,178,106,0.12)' }}
          >
            {differentiators.map((card) => (
              <div
                key={card.title}
                style={{ backgroundColor: '#000', padding: '56px 48px' }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '1px',
                    backgroundColor: GOLD,
                    marginBottom: '24px',
                  }}
                />
                <h3
                  style={{
                    fontFamily: MS,
                    fontSize: '11px',
                    fontWeight: 400,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: GOLD,
                    marginBottom: '16px',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.9,
                    letterSpacing: '0.03em',
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CREDENTIALS ──────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#050505' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2
            style={{
              fontFamily: CG,
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 300,
              color: GOLD,
              marginBottom: '56px',
            }}
          >
            Licensed &amp; Trusted
          </h2>

          <div
            className="flex flex-wrap justify-center gap-4"
            style={{ marginBottom: '64px' }}
          >
            {credentials.map((badge) => (
              <span
                key={badge}
                style={{
                  fontFamily: MS,
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: GOLD,
                  border: '1px solid rgba(203,178,106,0.4)',
                  padding: '12px 24px',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          <p
            style={{
              fontFamily: MS,
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
              marginBottom: '24px',
            }}
          >
            As Featured In:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {featuredIn.map((name) => (
              <div
                key={name}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '12px 28px',
                }}
              >
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: '11px',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: AWARDS STRIP ─────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #bb8b4a, #f7eb9e)',
          padding: '20px 24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: MS,
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#000',
            margin: 0,
          }}
        >
          Best of Houzz 2024 &middot; Marin IJ Top Contractor &middot; 4.9&#9733; Google &middot; 47 Five-Star Reviews
        </p>
      </section>

      {/* ── SECTION 10: FINAL CTA ───────────────────────────── */}
      <section
        style={{
          position: 'relative',
          padding: '140px 24px',
          backgroundColor: '#000',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Subtle gold radial glow (CSS only) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(ellipse at 50% 0%, rgba(203,178,106,0.07) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '720px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontFamily: CG,
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: '24px',
              background: GOLD_GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Ready to Build Something Extraordinary?
          </h2>
          <p
            style={{
              fontFamily: MS,
              fontSize: '13px',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.55)',
              letterSpacing: '0.06em',
              lineHeight: 1.8,
              marginBottom: '48px',
            }}
          >
            Serving Marin, Sonoma &amp; Napa Counties. Schedule your consultation today.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px',
            }}
          >
            <Link
              href="/request-a-bid"
              style={{
                fontFamily: MS,
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                backgroundColor: GOLD,
                color: '#000',
                padding: '18px 48px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Request a Bid
            </Link>
            <a
              href="tel:4159689494"
              style={{
                fontFamily: MS,
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                backgroundColor: 'transparent',
                color: GOLD,
                border: `1px solid ${GOLD}`,
                padding: '18px 48px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Call (415) 968-9494
            </a>
          </div>
          <p
            style={{
              fontFamily: MS,
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(203,178,106,0.4)',
              marginBottom: '12px',
            }}
          >
            <Link href="/services/general-contractor-marin-county" style={{ color: 'rgba(203,178,106,0.6)', textDecoration: 'none' }}>
              Licensed General Contractor in Marin County &rarr;
            </Link>
          </p>
          <p
            style={{
              fontFamily: MS,
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(203,178,106,0.4)',
            }}
          >
            CSLB #1106798 &middot; Licensed &middot; Bonded &middot; Insured
          </p>
        </div>
      </section>
    </>
  );
}
