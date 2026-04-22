import Link from 'next/link';

const GOLD = '#C9A84C';

const PAIN_POINTS = [
  {
    title: 'No Surprise Change Orders',
    body: 'Fixed-scope contracts are locked before we break ground — the number you sign is the number you pay for the scope we agreed on.',
  },
  {
    title: 'No Permit Runaround',
    body: 'We handle every city interaction across 19 jurisdictions in Marin & Sonoma, from initial submittal to final sign-off.',
  },
  {
    title: 'No Ghosting Mid-Project',
    body: 'Weekly owner updates, a single point of contact, and documented milestones. You always know exactly where your project stands.',
  },
];

const STEPS = [
  {
    num: '01',
    name: 'Discovery & Site Visit',
    duration: 'Week 1',
    happens: [
      '30-min intro call to understand your vision, budget range, and timeline',
      'On-site walkthrough: we measure, photograph, and assess existing conditions',
      'Review of HOA rules, zoning, setbacks, and any prior permit history',
    ],
    receive: [
      'Written feasibility summary',
      'Preliminary budget range (not a guess — a calibrated estimate based on RSMeans + local Marin/Sonoma labor data)',
      'Go / no-go recommendation with honest tradeoffs',
    ],
  },
  {
    num: '02',
    name: 'Design & Scope Lock',
    duration: 'Weeks 2–6',
    happens: [
      'Collaborative design sessions with architect or our in-house design partner',
      'Material selections: cabinetry, counters, fixtures, flooring, finishes',
      'Line-item scope document reviewed with you until every detail is signed off',
    ],
    receive: [
      'Fully dimensioned construction drawings',
      'Detailed scope-of-work document',
      'Fixed-price contract — this is the number you pay, no escalators on our scope',
    ],
  },
  {
    num: '03',
    name: 'Permit & Approvals',
    duration: 'Weeks 4–10, parallel to Design',
    happens: [
      "We submit to your city's building department and act as your representative",
      'Corrections, resubmittals, and plan-checker negotiations handled by us',
      'HOA/ARB submissions where required',
    ],
    receive: [
      'Issued building permit(s)',
      'Approved stamped plans',
      'Clear start date locked in the calendar',
    ],
  },
  {
    num: '04',
    name: 'Build & Project Management',
    duration: 'Weeks 10–24+, scope dependent',
    happens: [
      'Dedicated project manager on-site and reachable',
      'Weekly written progress updates with photos',
      'Scheduled inspections coordinated with the city',
      'Change orders (if any — rare with our scope lock) documented in writing before any work proceeds',
    ],
    receive: [
      'Weekly status report every Friday',
      'Real-time budget and schedule tracking',
      'A clean, respected jobsite — we treat your home like ours',
    ],
  },
  {
    num: '05',
    name: 'Handover & Warranty',
    duration: 'Final 2 weeks + 10 years',
    happens: [
      'Final walkthrough with detailed punch list',
      'All punch items resolved before final payment',
      'Full document package: permits, warranties, appliance manuals, paint codes, material sources',
      '10-year workmanship warranty',
    ],
    receive: [
      'Signed certificate of completion',
      'Digital project binder (all docs, drawings, photos)',
      'Direct line to us for warranty calls — we pick up the phone',
    ],
  },
];

const FAQS = [
  {
    q: <>How long does the Discovery phase take before I know if we&apos;re a fit?</>,
    a: <>Typically one week from first call to written feasibility summary.</>,
  },
  {
    q: <>Do you charge for Discovery?</>,
    a: <>No. The initial consultation and feasibility summary are complimentary.</>,
  },
  {
    q: <>What happens if the city asks for plan corrections during Permit?</>,
    a: <>We handle all corrections and resubmittals at no additional cost &mdash; it&apos;s part of our fixed-scope contract.</>,
  },
  {
    q: <>Can I make changes during the Build phase?</>,
    a: <>Yes, but all changes are documented as written change orders and agreed to in writing before any work proceeds. No surprises.</>,
  },
  {
    q: <>What counties do you serve?</>,
    a: (
      <>
        Marin, Sonoma, and Napa County. We hold a current CSLB license (#1106798) and carry full commercial liability and workers&apos; comp insurance. See the full{' '}
        <Link href="/locations" className="underline hover:text-white" style={{ color: GOLD }}>
          service area map
        </Link>
        .
      </>
    ),
  },
  {
    q: <>What&apos;s your warranty?</>,
    a: <>10-year workmanship warranty on all labor, plus manufacturer warranties on every material installed.</>,
  },
];

function GoldCTA({ href, children, size = 'md' }: { href: string; children: React.ReactNode; size?: 'md' | 'lg' }) {
  const paddingX = size === 'lg' ? '2.5rem' : '1.75rem';
  const paddingY = size === 'lg' ? '1rem' : '0.85rem';
  const fontSize = size === 'lg' ? '13px' : '11px';
  return (
    <Link
      href={href}
      className="inline-block transition-all duration-300 hover:opacity-90"
      style={{
        backgroundColor: GOLD,
        color: '#000000',
        border: `1px solid ${GOLD}`,
        fontSize,
        fontWeight: 500,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        padding: `${paddingY} ${paddingX}`,
        textDecoration: 'none',
        fontFamily: 'Montserrat, sans-serif',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </Link>
  );
}

export default function ProcessPage() {
  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      {/* SECTION 1 — Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: '10rem',
          paddingBottom: '6rem',
          background:
            'radial-gradient(ellipse at top, rgba(201,168,76,0.08) 0%, transparent 55%), linear-gradient(180deg, #050505 0%, #000000 100%)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            right: '0',
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
            opacity: 0.25,
          }}
        />
        <div className="mx-auto max-w-5xl px-6 text-center relative">
          <p
            style={{
              color: GOLD,
              fontSize: '11px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              fontFamily: 'Montserrat, sans-serif',
              marginBottom: '1.5rem',
            }}
          >
            Our Process
          </p>
          <h1
            className="font-repo"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}
          >
            How We Build, Step by Step
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '46rem',
              margin: '0 auto 2.5rem',
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
            }}
          >
            A transparent, fixed-scope process designed to remove the two things homeowners hate most about remodels &mdash; surprise costs and missed deadlines.
          </p>
          <div style={{ marginBottom: '2.5rem' }}>
            <GoldCTA href="/contact" size="lg">
              Schedule Complimentary Assessment
            </GoldCTA>
          </div>
          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Licensed GC &middot; CSLB #1106798 &middot; 4.9/47 Reviews &middot; Serving{' '}
            <Link href="/locations" className="underline-offset-4 hover:underline" style={{ color: GOLD }}>
              Marin, Sonoma &amp; Napa
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 2 — Why Our Process Is Different */}
      <section style={{ padding: '6rem 1.5rem', backgroundColor: '#0a0a0a' }}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <p
              style={{
                color: GOLD,
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontFamily: 'Montserrat, sans-serif',
                marginBottom: '1rem',
              }}
            >
              Why It&apos;s Different
            </p>
            <h2
              className="font-repo"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              Built to Eliminate the Three Most Common Remodel Failures
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PAIN_POINTS.map((p) => (
              <div
                key={p.title}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(201,168,76,0.18)',
                  padding: '2.25rem 1.75rem',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: '36px',
                    height: '2px',
                    backgroundColor: GOLD,
                    marginBottom: '1.25rem',
                  }}
                />
                <h3
                  className="font-repo"
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    marginBottom: '0.75rem',
                    color: '#ffffff',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — The 5 Steps */}
      <section style={{ padding: '6rem 1.5rem', backgroundColor: '#000000' }}>
        <div className="mx-auto max-w-5xl">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <p
              style={{
                color: GOLD,
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontFamily: 'Montserrat, sans-serif',
                marginBottom: '1rem',
              }}
            >
              The Journey
            </p>
            <h2
              className="font-repo"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                marginBottom: '1rem',
              }}
            >
              The 5 Steps From First Call to Final Walkthrough
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                maxWidth: '40rem',
                margin: '0 auto',
                fontSize: '1rem',
                lineHeight: 1.6,
              }}
            >
              Whether you&apos;re planning a kitchen remodel, a full-home renovation, or a new{' '}
              <Link href="/adu-marin-county" className="underline-offset-4 hover:underline" style={{ color: GOLD }}>
                ADU in Marin County
              </Link>
              , every project runs through the same five checkpoints.
            </p>
          </div>

          <div className="flex flex-col" style={{ gap: '1.5rem' }}>
            {STEPS.map((step) => (
              <article
                key={step.num}
                style={{
                  backgroundColor: '#0a0a0a',
                  border: '1px solid rgba(201,168,76,0.18)',
                  padding: '2.5rem',
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                  <div
                    style={{ flex: '0 0 auto', marginBottom: '1.25rem' }}
                    className="md:mb-0 md:pt-1"
                  >
                    <div
                      className="font-repo"
                      style={{
                        color: GOLD,
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: 800,
                        lineHeight: 0.9,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {step.num}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'baseline',
                        gap: '1rem',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <h3
                        className="font-repo"
                        style={{
                          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                          fontWeight: 800,
                          lineHeight: 1.15,
                          color: '#ffffff',
                          margin: 0,
                        }}
                      >
                        {step.name}
                      </h3>
                      <span
                        style={{
                          color: GOLD,
                          fontSize: '11px',
                          letterSpacing: '0.25em',
                          textTransform: 'uppercase',
                          fontFamily: 'Montserrat, sans-serif',
                          border: `1px solid ${GOLD}`,
                          padding: '4px 10px',
                        }}
                      >
                        {step.duration}
                      </span>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h4
                          style={{
                            color: 'rgba(255,255,255,0.55)',
                            fontSize: '11px',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            fontFamily: 'Montserrat, sans-serif',
                            marginBottom: '1rem',
                          }}
                        >
                          What Happens
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {step.happens.map((item, i) => (
                            <li
                              key={i}
                              style={{
                                color: 'rgba(255,255,255,0.8)',
                                lineHeight: 1.6,
                                fontSize: '0.95rem',
                                paddingLeft: '1.25rem',
                                position: 'relative',
                                marginBottom: '0.75rem',
                              }}
                            >
                              <span
                                aria-hidden="true"
                                style={{
                                  position: 'absolute',
                                  left: 0,
                                  top: '0.6rem',
                                  width: '6px',
                                  height: '1px',
                                  backgroundColor: GOLD,
                                }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4
                          style={{
                            color: GOLD,
                            fontSize: '11px',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            fontFamily: 'Montserrat, sans-serif',
                            marginBottom: '1rem',
                          }}
                        >
                          What You Receive
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {step.receive.map((item, i) => (
                            <li
                              key={i}
                              style={{
                                color: 'rgba(255,255,255,0.85)',
                                lineHeight: 1.6,
                                fontSize: '0.95rem',
                                paddingLeft: '1.25rem',
                                position: 'relative',
                                marginBottom: '0.75rem',
                              }}
                            >
                              <span
                                aria-hidden="true"
                                style={{
                                  position: 'absolute',
                                  left: 0,
                                  top: '0.6rem',
                                  width: '6px',
                                  height: '1px',
                                  backgroundColor: GOLD,
                                }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Testimonials */}
      <section style={{ padding: '6rem 1.5rem', backgroundColor: '#0a0a0a' }}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <p
              style={{
                color: GOLD,
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontFamily: 'Montserrat, sans-serif',
                marginBottom: '1rem',
              }}
            >
              Client Voices
            </p>
            <h2
              className="font-repo"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              What Homeowners Say About the Process
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {/* TODO: Replace with real testimonial from Google review — Process-focused */}
            <figure
              style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(201,168,76,0.18)',
                padding: '2.25rem 1.75rem',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  color: GOLD,
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '3rem',
                  lineHeight: 0.8,
                  marginBottom: '0.75rem',
                }}
              >
                &ldquo;
              </div>
              <blockquote
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.65,
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  margin: 0,
                  marginBottom: '1.5rem',
                }}
              >
                The Discovery call set the tone. They showed up on time, measured everything, and a week later we had a real budget range in writing &mdash; not a ballpark, a calibrated number. That&apos;s when we knew this was going to be different.
              </blockquote>
              <figcaption
                style={{
                  color: GOLD,
                  fontSize: '11px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                &mdash; M. &amp; D. R., Mill Valley Kitchen Remodel
              </figcaption>
            </figure>

            {/* TODO: Replace with real testimonial from Google review — Process-focused */}
            <figure
              style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(201,168,76,0.18)',
                padding: '2.25rem 1.75rem',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  color: GOLD,
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '3rem',
                  lineHeight: 0.8,
                  marginBottom: '0.75rem',
                }}
              >
                &ldquo;
              </div>
              <blockquote
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.65,
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  margin: 0,
                  marginBottom: '1.5rem',
                }}
              >
                We dreaded the permit phase after what friends told us. ConstruBay took every call from the city, handled two rounds of corrections, and we never had to open a single email thread. The start date they promised held.
              </blockquote>
              <figcaption
                style={{
                  color: GOLD,
                  fontSize: '11px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                &mdash; J. L., Tiburon ADU
              </figcaption>
            </figure>

            {/* TODO: Replace with real testimonial from Google review — Process-focused */}
            <figure
              style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(201,168,76,0.18)',
                padding: '2.25rem 1.75rem',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  color: GOLD,
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '3rem',
                  lineHeight: 0.8,
                  marginBottom: '0.75rem',
                }}
              >
                &ldquo;
              </div>
              <blockquote
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.65,
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  margin: 0,
                  marginBottom: '1.5rem',
                }}
              >
                Every Friday the status report landed in our inbox &mdash; photos, budget, what&apos;s next. Zero ghosting, zero surprises. When we did ask for one change, it was documented and priced in writing before anyone swung a hammer.
              </blockquote>
              <figcaption
                style={{
                  color: GOLD,
                  fontSize: '11px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                &mdash; A. &amp; P. S., Sonoma Whole-Home Remodel
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Fixed-Scope Guarantee Callout */}
      <section style={{ padding: '6rem 1.5rem', backgroundColor: '#000000' }}>
        <div className="mx-auto max-w-4xl">
          <div
            style={{
              backgroundColor: '#0a0a0a',
              border: `2px solid ${GOLD}`,
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <p
              style={{
                color: GOLD,
                fontSize: '11px',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                fontFamily: 'Montserrat, sans-serif',
                marginBottom: '1rem',
              }}
            >
              The Promise
            </p>
            <h2
              className="font-repo"
              style={{
                fontSize: 'clamp(1.85rem, 4vw, 2.75rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                marginBottom: '1.5rem',
              }}
            >
              Our Fixed-Scope Guarantee
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.7,
                fontSize: '1.1rem',
                maxWidth: '42rem',
                margin: '0 auto 2.25rem',
              }}
            >
              The price we lock at contract signing is the price you pay for the scope we agreed on. If we missed something in our scope &mdash; that&apos;s on us, not you. This is the opposite of cost-plus, and it&apos;s the reason homeowners who&apos;ve been burned before choose ConstruBay.
            </p>
            <GoldCTA href="/contact" size="lg">
              Discuss Your Project
            </GoldCTA>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section style={{ padding: '6rem 1.5rem', backgroundColor: '#0a0a0a' }}>
        <div className="mx-auto max-w-3xl">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <p
              style={{
                color: GOLD,
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontFamily: 'Montserrat, sans-serif',
                marginBottom: '1rem',
              }}
            >
              FAQ
            </p>
            <h2
              className="font-repo"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              Common Questions About the Process
            </h2>
          </div>
          <div className="flex flex-col" style={{ gap: '1rem' }}>
            {FAQS.map((faq, i) => (
              <details
                key={i}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(201,168,76,0.18)',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <summary
                  className="font-repo cursor-pointer"
                  style={{
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    color: '#ffffff',
                    listStyle: 'none',
                    outline: 'none',
                  }}
                >
                  {faq.q}
                </summary>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.65,
                    fontSize: '0.95rem',
                    marginTop: '0.85rem',
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
          <p
            className="text-center"
            style={{
              marginTop: '3rem',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.95rem',
            }}
          >
            Want more depth? Browse our{' '}
            <Link href="/blog" className="underline-offset-4 hover:underline" style={{ color: GOLD }}>
              remodel planning blog
            </Link>{' '}
            for cost breakdowns, timelines, and permit explainers.
          </p>
        </div>
      </section>

      {/* SECTION 7 — Final CTA Band */}
      <section
        style={{
          padding: '6rem 1.5rem',
          background:
            'radial-gradient(ellipse at bottom, rgba(201,168,76,0.1) 0%, transparent 55%), #000000',
          textAlign: 'center',
        }}
      >
        <div className="mx-auto max-w-3xl">
          <h2
            className="font-repo"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginBottom: '2.25rem',
            }}
          >
            Ready to See What Your Project Would Look Like on This Timeline?
          </h2>
          <div style={{ marginBottom: '2rem' }}>
            <GoldCTA href="/contact" size="lg">
              Schedule Complimentary Assessment
            </GoldCTA>
          </div>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            CSLB #1106798 &middot; 4.9/47 &middot; No-pressure 30-min consultation
          </p>
        </div>
      </section>
    </div>
  );
}
