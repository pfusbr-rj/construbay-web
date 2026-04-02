"use client";

import Link from "next/link";

const CG = "'Cormorant Garamond', Georgia, serif";
const MS = "'Montserrat', Arial, sans-serif";
const GOLD = "#cbb26a";
const GRAD = "linear-gradient(135deg, #bb8b4a, #f7eb9e)";

const leadServices = [
  {
    slug: "new-construction",
    alt: "Custom Home Construction Marin County",
    h2: "Custom Home Construction in Marin County",
    href: "/services/new-construction-marin-county",
    description:
      "We build architect-designed residences from foundation to finish, managing structural engineering, MEP systems, and interior millwork as a single point of accountability. Each estate is a permanent expression of your vision — built to define your property for generations.",
    bullets: [
      "Ground-up custom estate builds",
      "Full structural & MEP coordination",
      "Above-code materials & energy systems",
    ],
  },
  {
    slug: "full-remodel",
    alt: "Whole Home Remodel Marin County",
    h2: "Whole Home Remodels in Marin County",
    href: "/services/whole-house-remodel-marin-county",
    description:
      "Reimagining a home entirely requires a contractor who sees the finished masterpiece inside an aging shell. We preserve the soul of your Marin estate while rebuilding structural, mechanical, and aesthetic systems to modern luxury standards.",
    bullets: [
      "Full structural & mechanical upgrades",
      "Bespoke millwork throughout",
      "Cohesive design-build management",
    ],
  },
  {
    slug: "kitchen",
    alt: "Luxury Kitchen Remodel Marin County",
    h2: "Luxury Kitchen Remodels in Marin County",
    href: "/services/kitchen-remodel-marin-county",
    description:
      "The kitchen is the operational heart of your estate and the centerpiece of your property&apos;s value. We engineer bespoke culinary spaces using imported stone, precision cabinetry, and seamless appliance integration that disappears into the architecture.",
    bullets: [
      "Custom millwork & cabinetry",
      "Natural stone fabrication",
      "Professional-grade appliance integration",
    ],
  },
  {
    slug: "bathroom",
    alt: "Luxury Bathroom Remodel Marin County",
    h2: "Luxury Bathroom Remodels in Marin County",
    href: "/services/bathroom-remodel-marin-county",
    description:
      "We transform utilitarian bathrooms into private spa-grade sanctuaries using radiant heated flooring, seamless curbless glass, and meticulously sourced fixtures. This is not a remodel — it is a daily retreat built exactly to your physiology and preferences.",
    bullets: [
      "Heated natural stone floors",
      "Custom steam showers",
      "Architectural lighting design",
    ],
  },
  {
    slug: "adu",
    alt: "ADU & Garage Conversion Marin County",
    h2: "ADU & Garage Conversion in Marin County",
    href: "/services/adu-builder-marin-county",
    description:
      "An Accessory Dwelling Unit should never look like an afterthought. We design and build detached luxury suites and garage conversions that mirror the architectural language of your main home — perfect for multi-generational living, guest quarters, or high-yield estate rentals.",
    bullets: [
      "Architectural language matching",
      "Full permit navigation via PlanPass.ai",
      "Garage conversion specialists",
    ],
  },
  {
    slug: "addition",
    alt: "Home Addition Marin County",
    h2: "Home Additions in Marin County",
    href: "/services/home-addition-marin-county",
    description:
      "The best additions are indistinguishable from the original architecture. We engineer structural expansions that preserve your home&apos;s integrity — adding primary suite wings, expanded living spaces, and second stories that frame Marin&apos;s hillside views.",
    bullets: [
      "Seamless structural integration",
      "Material & roofline matching",
      "Hillside engineering expertise",
    ],
  },
  {
    slug: "basement",
    alt: "Basement Finishing Marin County",
    h2: "Basement Finishing in Marin County",
    href: "/services/basement-finishing-marin-county",
    description:
      "Below-grade spaces offer unparalleled acoustic isolation — the ideal canvas for wine cellars, private screening rooms, and subterranean wellness retreats. We engineer lower levels with uncompromising waterproofing and climate control that protects your luxury investments.",
    bullets: [
      "Wine cellars & home theaters",
      "Moisture mitigation engineering",
      "Egress & natural light optimization",
    ],
  },
  {
    slug: "deck",
    alt: "Deck & Outdoor Living Marin County",
    h2: "Deck & Outdoor Living in Marin County",
    href: "/services/deck-outdoor-living-marin-county",
    description:
      "Marin&apos;s microclimate demands outdoor spaces as meticulously engineered as they are beautiful. We build premium Ipe and hardwood decks with integrated outdoor kitchens, fire features, and automated louvered pergolas designed for year-round California living.",
    bullets: [
      "Premium Ipe & hardwood decking",
      "Integrated outdoor kitchens & fire features",
      "Structural glass railings",
    ],
  },
];

const supportingServices = [
  {
    name: "Roofing",
    href: "/services/roofing-marin-county",
    desc: "Premium slate, metal & clay tile systems for Marin estates",
  },
  {
    name: "Windows & Doors",
    href: "/services/windows-doors-marin-county",
    desc: "Architectural glazing & custom entry systems",
  },
  {
    name: "Flooring",
    href: "/services/flooring-marin-county",
    desc: "Wide-plank hardwood, stone & custom inlay installation",
  },
  {
    name: "Interior & Exterior Paint",
    href: "/services/painting-marin-county",
    desc: "Museum-grade finishes & master painter execution",
  },
  {
    name: "Driveways & Hardscape",
    href: "/services/driveways-hardscape-marin-county",
    desc: "Grand entrances & permeable stone hardscaping",
  },
  {
    name: "Fencing & Gates",
    href: "/services/fencing-gates-marin-county",
    desc: "Custom estate perimeters & automated gate systems",
  },
  {
    name: "Landscaping & Grading",
    href: "/services/landscaping-grading-marin-county",
    desc: "Hillside grading, drainage & estate landscape construction",
  },
  {
    name: "Electrical",
    href: "/services/electrical-marin-county",
    desc: "Smart home wiring, lighting design & panel upgrades",
  },
  {
    name: "Plumbing",
    href: "/services/plumbing-marin-county",
    desc: "Luxury fixture installation & whole-home plumbing systems",
  },
  {
    name: "HVAC",
    href: "/services/hvac-marin-county",
    desc: "Whisper-quiet climate systems & radiant heating",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Vision",
    desc: "We listen deeply and translate your vision into a precise, fixed-scope brief.",
  },
  {
    number: "02",
    title: "Design & Permits",
    desc: "Our PlanPass.ai integration accelerates permit approvals across all Marin jurisdictions.",
  },
  {
    number: "03",
    title: "Artful Execution",
    desc: "Licensed craftsmen execute under direct supervision — every detail approved before installation.",
  },
  {
    number: "04",
    title: "The Final Reveal",
    desc: "A thorough walkthrough ensures every element meets our standard before you take possession.",
  },
];

export default function ServicesPage() {
  const imageMap: Record<string, string> = {
    'new-construction': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    'full-remodel': 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    'kitchen': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    'bathroom': 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80',
    'adu': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    'addition': 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80',
    'basement': 'https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1200&q=80',
    'deck': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  };

  return (
    <main style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      {/* SECTION 1 — HERO */}
      <section
        style={{
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.85)",
            position: "absolute",
            inset: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            maxWidth: 900,
            padding: "0 24px",
          }}
        >
          <p
            style={{
              fontFamily: MS,
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: 20,
            }}
          >
            ConstruBay · CSLB #1106798
          </p>
          <h1
            style={{
              fontFamily: CG,
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 300,
              color: "#ffffff",
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            Services Designed for Elevated Living
          </h1>
          <p
            style={{
              fontFamily: MS,
              fontSize: 13,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: 48,
            }}
          >
            Built With Intention — Artistry in Execution
          </p>
          <Link
            href="/request-a-bid"
            style={{
              background: GRAD,
              color: "#000000",
              fontFamily: MS,
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "18px 52px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Schedule a Private Consultation
          </Link>
          <p style={{ fontFamily: MS, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 24 }}>
            <Link href="/services/general-contractor-marin-county" style={{ color: GOLD, textDecoration: 'none' }}>
              Licensed General Contractor in Marin County &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 2 — LEAD SERVICES */}
      <section>
        {leadServices.map((service, index) => {
          const isOdd = index % 2 === 0; // index 0 = row 1 = ODD (image left, text right)
          const imageDiv = (
            <div
              key="image"
              style={{ position: "relative", overflow: "hidden", minHeight: 400 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageMap[service.slug] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'}
                alt={service.alt}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          );
          const textDiv = (
            <div
              key="text"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "80px 64px",
                backgroundColor: "#000000",
              }}
            >
              <p
                style={{
                  fontFamily: MS,
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: GOLD,
                  opacity: 0.7,
                  marginBottom: 16,
                }}
              >
                ConstruBay Marin
              </p>
              <h2
                style={{
                  fontFamily: CG,
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  fontWeight: 300,
                  color: GOLD,
                  lineHeight: 1.15,
                  marginBottom: 20,
                }}
              >
                {service.h2}
              </h2>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: 13,
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: 32,
                }}
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
              <div>
                {service.bullets.map((bullet, bi) => (
                  <div
                    key={bi}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      marginBottom: 12,
                    }}
                  >
                    <span style={{ color: GOLD }}>◆</span>
                    <span
                      style={{
                        fontFamily: MS,
                        fontSize: 12,
                        letterSpacing: "0.05em",
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href={service.href}
                style={{
                  display: "inline-block",
                  marginTop: 32,
                  fontFamily: MS,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: GOLD,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(203,178,106,0.4)",
                  paddingBottom: 4,
                  alignSelf: "flex-start",
                }}
              >
                Explore This Service →
              </Link>
            </div>
          );

          return (
            <div key={service.slug}>
              <div style={{ backgroundColor: "#000000" }}>
                <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 0,
                      minHeight: 520,
                    }}
                  >
                    {isOdd ? [imageDiv, textDiv] : [textDiv, imageDiv]}
                  </div>
                </div>
              </div>
              {index < leadServices.length - 1 && (
                <div
                  style={{
                    height: 1,
                    background: GRAD,
                    opacity: 0.3,
                  }}
                />
              )}
            </div>
          );
        })}
      </section>

      {/* SECTION 3 — SUPPORTING SERVICES */}
      <section style={{ backgroundColor: "#000000", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: CG,
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: 300,
              color: GOLD,
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Full-Spectrum Capabilities
          </h2>
          <p
            style={{
              fontFamily: MS,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              textAlign: "center",
              marginBottom: 64,
            }}
          >
            Every trade. One standard of excellence.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 2,
            }}
          >
            {supportingServices.map((svc) => (
              <a
                key={svc.href}
                href={svc.href}
                style={{
                  display: "block",
                  padding: "32px 28px",
                  backgroundColor: "#0a0a0a",
                  border: "1px solid rgba(203,178,106,0.1)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(203,178,106,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(203,178,106,0.1)";
                }}
              >
                <p
                  style={{
                    fontFamily: CG,
                    fontSize: "1.3rem",
                    fontWeight: 300,
                    color: "#ffffff",
                    marginBottom: 10,
                  }}
                >
                  {svc.name}
                </p>
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: 11,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: 20,
                  }}
                >
                  {svc.desc}
                </p>
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: GOLD,
                  }}
                >
                  Explore →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCESS STRIP */}
      <section
        style={{
          backgroundColor: "rgba(203,178,106,0.04)",
          padding: "96px 24px",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: CG,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: GOLD,
              textAlign: "center",
              marginBottom: 64,
            }}
          >
            How We Build
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 48,
              textAlign: "center",
            }}
          >
            {processSteps.map((step) => (
              <div key={step.number}>
                <p
                  style={{
                    fontFamily: CG,
                    fontSize: "3.5rem",
                    fontWeight: 300,
                    color: GOLD,
                    opacity: 0.3,
                  }}
                >
                  {step.number}
                </p>
                <p
                  style={{
                    fontFamily: CG,
                    fontSize: "1.4rem",
                    color: "#ffffff",
                    margin: "12px 0 10px",
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.8,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — TRUST BAR */}
      <section
        style={{
          backgroundColor: "#000000",
          borderTop: "1px solid rgba(203,178,106,0.2)",
          borderBottom: "1px solid rgba(203,178,106,0.2)",
          padding: "40px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "32px 64px",
          }}
        >
          {[
            "Nextdoor #1 Contractor",
            "47 Five-Star Google Reviews",
            "CSLB #1106798",
            "PlanPass.ai Permit Intelligence",
          ].map((label) => (
            <div key={label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: 10,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: GOLD,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section
        style={{
          backgroundColor: "#000000",
          padding: "120px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: MS,
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: GOLD,
            opacity: 0.7,
            marginBottom: 24,
          }}
        >
          Begin Your Project
        </p>
        <h2
          style={{
            fontFamily: CG,
            fontSize: "clamp(3rem, 5vw, 4.5rem)",
            fontWeight: 300,
            background: GRAD,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1.05,
            marginBottom: 24,
          }}
        >
          Ready to Begin?
        </h2>
        <p
          style={{
            fontFamily: MS,
            fontSize: 13,
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.6)",
            maxWidth: 500,
            margin: "0 auto 48px",
            lineHeight: 1.9,
          }}
        >
          Schedule a private consultation with Paulo. No pressure, no obligation.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://calendly.com/construbay/initial-consultation-construbay"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: GRAD,
              color: "#000000",
              fontFamily: MS,
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "18px 52px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Book a Private Consultation
          </a>
          <a
            href="tel:4159689494"
            style={{
              border: "1px solid rgba(203,178,106,0.4)",
              color: GOLD,
              fontFamily: MS,
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "18px 52px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Or Call (415) 968-9494
          </a>
        </div>
      </section>
    </main>
  );
}
