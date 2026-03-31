'use client';

import React, { useState, useRef } from 'react';

const CG = 'Cormorant Garamond, serif';
const MS = 'Montserrat, sans-serif';
const GOLD = '#cbb26a';
const GOLD_GRADIENT = 'linear-gradient(135deg, #bb8b4a, #f7eb9e)';
const PHONE = 'tel:4159689494';
const CALENDLY = 'https://calendly.com/construbay/initial-consultation-construbay';

const ADU_TYPES = [
  'Detached ADU',
  'Garage Conversion',
  'Attached ADU',
  'Junior ADU (JADU)',
  'Not sure yet',
];

const TIMELINES = [
  'ASAP — Ready to move',
  '1–3 months',
  '3–6 months',
  'Just exploring',
];

const CITIES = [
  'Santa Rosa',
  'Petaluma',
  'Healdsburg',
  'Sonoma',
  'Sebastopol',
  'Windsor',
  'Rohnert Park',
  'Other',
];

const STATS = [
  { value: '4.9\u2605', label: 'Google Rating' },
  { value: '47', label: 'Five-Star Reviews' },
  { value: '150+', label: 'Projects' },
  { value: '$85M+', label: 'Constructed' },
  { value: 'CSLB #1106798', label: 'Licensed' },
];

const PLANPASS_STATS = [
  { stat: '40% Faster', desc: 'permit approvals vs. Sonoma County average' },
  { stat: 'Pre-Submission', desc: 'issue detection before rejection' },
  { stat: 'Real-Time', desc: 'permit status visibility for clients' },
  { stat: 'Sonoma-Specific', desc: 'code intelligence across all jurisdictions' },
];

const FAQS = [
  {
    q: 'How much does an ADU cost in Sonoma County?',
    a: 'ADU construction in Sonoma County ranges from $175,000 for a garage conversion to $600,000+ for a custom detached unit. ConstruBay provides fixed-scope contracts — what we quote is what you pay.',
  },
  {
    q: 'How long does ADU construction take in Sonoma County?',
    a: 'A typical ADU project takes 10–16 months from design to final inspection. We use PlanPass.ai to accelerate the permit process and flag issues before submission.',
  },
  {
    q: 'Do I need a permit to build an ADU in Sonoma County?',
    a: 'Yes. All ADUs in Sonoma County require building permits. ConstruBay handles the entire permit process using our AI-powered PlanPass.ai platform.',
  },
  {
    q: 'What ADU types does ConstruBay build in Sonoma County?',
    a: 'We build detached ADUs, attached ADUs, garage conversions, and Junior ADUs (JADUs) across Santa Rosa, Petaluma, Healdsburg, Sonoma, and surrounding areas.',
  },
  {
    q: 'Why choose ConstruBay over other Sonoma County ADU contractors?',
    a: 'We are the only contractor in Sonoma County using AI-powered permit intelligence (PlanPass.ai), we offer fixed-scope contracts with no surprise change orders, and Paulo leads every project personally from site visit to final walkthrough.',
  },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(203,178,106,0.3)',
  padding: '14px 16px',
  fontFamily: MS,
  fontSize: 15,
  color: '#fff',
  outline: 'none',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: MS,
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(203,178,106,0.55)',
  marginBottom: '6px',
};

export default function AduSonomaPage() {
  const [step, setStep] = useState(1);
  const [aduType, setAduType] = useState('');
  const [timeline, setTimeline] = useState('');
  const [city, setCity] = useState('');
  const [form, setForm] = useState({ firstName: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: 'smooth' });

  const handleAduType = (type: string) => {
    setAduType(type);
    setTimeout(() => setStep(2), 350);
  };

  const handleTimeline = (t: string) => {
    setTimeline(t);
    setTimeout(() => setStep(3), 350);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.firstName,
          phone: form.phone,
          email: form.email,
          propertyCity: city,
          projectType: 'ADU Construction — Sonoma County',
          message: `ADU Type: ${aduType} | Timeline: ${timeline} | City: ${city}`,
          source: 'adu-sonoma-county',
        }),
      });
    } catch {
      // show thank you regardless of network error
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div style={{ backgroundColor: '#000', color: GOLD, fontFamily: MS, minHeight: '100vh' }}>

      {/* ── SECTION 1: STICKY HEADER ─────────────────────────── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: '#000',
          borderBottom: '1px solid rgba(203,178,106,0.2)',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: CG,
            fontSize: 30,
            fontWeight: 300,
            letterSpacing: '0.04em',
            background: GOLD_GRADIENT,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ConstruBay
        </span>
        <a
          href={PHONE}
          style={{
            fontFamily: MS,
            fontSize: 14,
            fontWeight: 400,
            color: GOLD,
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          (415) 968-9494
        </a>
      </div>

      {/* ── SECTION 2: HERO ──────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Background placeholder */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#111',
            border: '2px dashed rgba(203,178,106,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: MS,
              fontSize: 11,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(203,178,106,0.3)',
            }}
          >
            [ ADU Project Photo ]
          </span>
        </div>
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.88) 100%)',
          }}
        />
        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '120px 24px 80px',
            maxWidth: '820px',
            width: '100%',
          }}
        >
          <h1
            style={{
              fontFamily: CG,
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: '24px',
              background: GOLD_GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Luxury ADUs Built for Your Property. And Your Lifestyle.
          </h1>
          <p
            style={{
              fontFamily: MS,
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.85,
              marginBottom: '40px',
              letterSpacing: '0.03em',
            }}
          >
            Design-build ADU construction in Sonoma County. AI-accelerated permitting.
            One team from site visit to move-in. Book your complimentary site assessment.
          </p>
          <button
            onClick={scrollToForm}
            style={{
              fontFamily: MS,
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              background: GOLD_GRADIENT,
              color: '#000',
              border: 'none',
              padding: '18px 48px',
              cursor: 'pointer',
              borderRadius: 3,
              marginBottom: '36px',
              display: 'inline-block',
            }}
          >
            Start My ADU Project &rarr;
          </button>
          <div
            style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {['4.9\u2605 Google', '47 Reviews', '150+ Projects', 'CSLB #1106798'].map((badge) => (
              <span
                key={badge}
                style={{
                  fontFamily: MS,
                  fontSize: 10,
                  fontWeight: 300,
                  letterSpacing: '0.15em',
                  color: 'rgba(203,178,106,0.6)',
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TRUST STRIP ───────────────────────────── */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '64px 24px' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: CG,
                    fontSize: 'clamp(22px, 3vw, 36px)',
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
                    fontSize: 10,
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

      {/* ── SECTION 4: TESTIMONIAL ───────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#000' }}>
        <div
          style={{
            maxWidth: '672px',
            margin: '0 auto',
            backgroundColor: '#111',
            border: '1px solid rgba(203,178,106,0.2)',
            padding: '56px 48px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: CG,
              fontSize: 80,
              fontWeight: 300,
              color: GOLD,
              lineHeight: 0.6,
              marginBottom: '32px',
            }}
          >
            &ldquo;
          </p>
          <p
            style={{
              fontFamily: MS,
              fontSize: 15,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.9,
              marginBottom: '32px',
              letterSpacing: '0.03em',
              fontStyle: 'italic',
            }}
          >
            ConstruBay handled our entire ADU from permit submission to move-in day.
            They identified a setback issue on our lot before we ever signed &mdash; and redesigned
            around it without drama. The unit rented for $3,800 the first week it was listed.
          </p>
          <div
            style={{ display: 'flex', gap: 4, justifyContent: 'center', marginBottom: '16px' }}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <svg key={n} width="16" height="16" viewBox="0 0 24 24" fill={GOLD}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p
            style={{
              fontFamily: MS,
              fontSize: 11,
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            &mdash; Greg &amp; Susan A. &middot; Mill Valley &middot; Detached ADU
          </p>
        </div>
      </section>

      {/* ── SECTION 5: PROJECT PHOTOS PLACEHOLDER ────────────── */}
      {/* TODO: Replace placeholders with real ADU project photos */}
      <section style={{ padding: '100px 24px', backgroundColor: '#050505' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            style={{
              fontFamily: CG,
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 300,
              color: GOLD,
              textAlign: 'center',
              marginBottom: '56px',
            }}
          >
            Our ADU Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                style={{
                  aspectRatio: '16/9',
                  backgroundColor: '#111',
                  border: '2px dashed rgba(203,178,106,0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: MS,
                    fontSize: 11,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'rgba(203,178,106,0.3)',
                  }}
                >
                  [ ADU Project Photo ]
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: MULTI-STEP FORM ───────────────────────── */}
      <div ref={formRef}>
        <section style={{ padding: '100px 24px', backgroundColor: '#000' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: CG,
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 300,
                color: GOLD,
                textAlign: 'center',
                marginBottom: '12px',
              }}
            >
              Book Your Complimentary Site Assessment
            </h2>
            <p
              style={{
                fontFamily: MS,
                fontSize: 12,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.4)',
                textAlign: 'center',
                letterSpacing: '0.08em',
                marginBottom: '40px',
              }}
            >
              Serving Santa Rosa, Petaluma, Healdsburg, Sonoma &amp; surrounding areas
            </p>

            <div
              style={{
                backgroundColor: '#111',
                border: '1px solid rgba(203,178,106,0.2)',
                padding: '40px',
              }}
            >
              {/* Progress bar */}
              {!submitted && (
                <div style={{ marginBottom: '32px' }}>
                  <div
                    style={{
                      height: '2px',
                      backgroundColor: 'rgba(203,178,106,0.15)',
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${(step / 4) * 100}%`,
                        background: GOLD_GRADIENT,
                        transition: 'width 0.4s ease',
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: MS,
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(203,178,106,0.45)',
                      marginTop: '8px',
                      textAlign: 'right',
                    }}
                  >
                    Step {step} of 4
                  </p>
                </div>
              )}

              {/* ── THANK YOU ── */}
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: 'rgba(203,178,106,0.08)',
                      border: '1px solid rgba(203,178,106,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={GOLD}
                      strokeWidth="1.5"
                    >
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: CG,
                      fontSize: 32,
                      fontWeight: 300,
                      color: GOLD,
                      marginBottom: '16px',
                    }}
                  >
                    Thank you{form.firstName ? `, ${form.firstName}` : ''}!
                  </h3>
                  <p
                    style={{
                      fontFamily: MS,
                      fontSize: 14,
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.6)',
                      lineHeight: 1.85,
                      marginBottom: '28px',
                      letterSpacing: '0.03em',
                    }}
                  >
                    We&apos;ll contact you within 2 hours to confirm
                    your complimentary site assessment.
                  </p>
                  <p
                    style={{
                      fontFamily: MS,
                      fontSize: 11,
                      color: 'rgba(255,255,255,0.3)',
                      marginBottom: '8px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Or book instantly:
                  </p>
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: MS,
                      fontSize: 11,
                      color: GOLD,
                      textDecoration: 'underline',
                      letterSpacing: '0.04em',
                      wordBreak: 'break-all',
                    }}
                  >
                    calendly.com/construbay/initial-consultation-construbay
                  </a>
                </div>

              ) : step === 1 ? (
                /* ── STEP 1: ADU Type ── */
                <div>
                  <h3
                    style={{
                      fontFamily: CG,
                      fontSize: 26,
                      fontWeight: 300,
                      color: '#fff',
                      marginBottom: '24px',
                    }}
                  >
                    What type of ADU are you building?
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {ADU_TYPES.map((type) => (
                      <button
                        key={type}
                        onClick={() => handleAduType(type)}
                        style={{
                          padding: '18px 20px',
                          background: aduType === type ? 'rgba(203,178,106,0.1)' : 'transparent',
                          border: `1px solid ${aduType === type ? GOLD : 'rgba(203,178,106,0.25)'}`,
                          color: aduType === type ? GOLD : 'rgba(255,255,255,0.65)',
                          fontFamily: MS,
                          fontSize: 14,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

              ) : step === 2 ? (
                /* ── STEP 2: Timeline ── */
                <div>
                  <h3
                    style={{
                      fontFamily: CG,
                      fontSize: 26,
                      fontWeight: 300,
                      color: '#fff',
                      marginBottom: '24px',
                    }}
                  >
                    What&apos;s your timeline?
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {TIMELINES.map((t) => (
                      <button
                        key={t}
                        onClick={() => handleTimeline(t)}
                        style={{
                          padding: '18px 20px',
                          background: timeline === t ? 'rgba(203,178,106,0.1)' : 'transparent',
                          border: `1px solid ${timeline === t ? GOLD : 'rgba(203,178,106,0.25)'}`,
                          color: timeline === t ? GOLD : 'rgba(255,255,255,0.65)',
                          fontFamily: MS,
                          fontSize: 14,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

              ) : step === 3 ? (
                /* ── STEP 3: City ── */
                <div>
                  <h3
                    style={{
                      fontFamily: CG,
                      fontSize: 26,
                      fontWeight: 300,
                      color: '#fff',
                      marginBottom: '24px',
                    }}
                  >
                    Which city is the property in?
                  </h3>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{
                      ...inputStyle,
                      background: '#0a0a0a',
                      cursor: 'pointer',
                      marginBottom: '20px',
                      WebkitAppearance: 'none',
                    }}
                  >
                    <option value="">Select a city...</option>
                    {CITIES.map((c) => (
                      <option key={c} value={c} style={{ background: '#0a0a0a' }}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => { if (city) setStep(4); }}
                    disabled={!city}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: city ? GOLD_GRADIENT : 'rgba(203,178,106,0.15)',
                      color: city ? '#000' : 'rgba(255,255,255,0.25)',
                      fontFamily: MS,
                      fontSize: 12,
                      fontWeight: 400,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: city ? 'pointer' : 'not-allowed',
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Next &rarr;
                  </button>
                </div>

              ) : (
                /* ── STEP 4: Contact ── */
                <form onSubmit={handleSubmit}>
                  <h3
                    style={{
                      fontFamily: CG,
                      fontSize: 26,
                      fontWeight: 300,
                      color: '#fff',
                      marginBottom: '24px',
                    }}
                  >
                    How do we reach you?
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: '20px' }}>
                    <div>
                      <label style={labelStyle}>First Name *</label>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
                        placeholder="Your first name"
                        autoComplete="given-name"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                        placeholder="(415) 000-0000"
                        autoComplete="tel"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        placeholder="you@email.com"
                        autoComplete="email"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      width: '100%',
                      padding: '18px',
                      background: submitting ? 'rgba(203,178,106,0.4)' : GOLD_GRADIENT,
                      color: '#000',
                      fontFamily: MS,
                      fontSize: 12,
                      fontWeight: 400,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      borderRadius: 2,
                      transition: 'opacity 0.2s ease',
                    }}
                  >
                    {submitting ? 'Sending...' : 'Book My Site Assessment \u2192'}
                  </button>
                </form>
              )}
            </div>

            {/* Trust line */}
            <p
              style={{
                fontFamily: MS,
                fontSize: 10,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.28)',
                textAlign: 'center',
                marginTop: '20px',
                letterSpacing: '0.08em',
              }}
            >
              We respond within 2 hours &middot; No pressure &middot; No spam &middot; CSLB #1106798
            </p>
          </div>
        </section>
      </div>

      {/* ── SECTION 7: PLANPASS ──────────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#050505' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: CG,
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 300,
              color: GOLD,
              textAlign: 'center',
              marginBottom: '12px',
            }}
          >
            AI-Powered Permit Planning
          </h2>
          <p
            style={{
              fontFamily: MS,
              fontSize: 13,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.45)',
              textAlign: 'center',
              letterSpacing: '0.06em',
              marginBottom: '20px',
            }}
          >
            No other contractor in Sonoma County offers this.
          </p>
          <p
            style={{
              fontFamily: MS,
              fontSize: 13,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.9,
              textAlign: 'center',
              marginBottom: '48px',
              letterSpacing: '0.03em',
            }}
          >
            ConstruBay uses <strong style={{ color: GOLD }}>PlanPass.ai</strong> &mdash; an
            AI-powered construction permit intelligence platform &mdash; to accelerate Sonoma County
            permit approvals, flag issues before submission, and give clients real-time visibility
            into their permit status.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PLANPASS_STATS.map((item) => (
              <div
                key={item.stat}
                style={{
                  padding: '28px 32px',
                  backgroundColor: '#000',
                  border: '1px solid rgba(203,178,106,0.15)',
                }}
              >
                <p
                  style={{
                    fontFamily: CG,
                    fontSize: 30,
                    fontWeight: 300,
                    color: GOLD,
                    marginBottom: '8px',
                  }}
                >
                  {item.stat}
                </p>
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: 12,
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1.6,
                    letterSpacing: '0.04em',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FAQ ACCORDION ─────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#000' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: CG,
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 300,
              color: GOLD,
              textAlign: 'center',
              marginBottom: '56px',
            }}
          >
            Common Questions
          </h2>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: '1px solid rgba(203,178,106,0.15)' }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '22px 0',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: MS,
                    fontSize: 14,
                    fontWeight: 400,
                    color: '#fff',
                    lineHeight: 1.5,
                  }}
                >
                  {faq.q}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={GOLD}
                  strokeWidth="1.5"
                  style={{
                    flexShrink: 0,
                    transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                  }}
                >
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openFaq === i && (
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: 13,
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.85,
                    paddingBottom: '22px',
                    margin: 0,
                    letterSpacing: '0.03em',
                  }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 9: URGENCY STRIP ─────────────────────────── */}
      <section
        style={{
          background: GOLD_GRADIENT,
          padding: '24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: MS,
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: '0.1em',
            color: '#000',
            margin: 0,
            lineHeight: 1.7,
          }}
        >
          Sonoma County ADU permits take 4&ndash;8 months. We accept a limited number of
          projects per quarter. Start now to be move-in ready by late 2026.
        </p>
      </section>

      {/* ── SECTION 10: FINAL CTA ────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          padding: '120px 24px',
          backgroundColor: '#000',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
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
          style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}
        >
          <h2
            style={{
              fontFamily: CG,
              fontSize: 'clamp(32px, 5vw, 64px)',
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: '20px',
              background: GOLD_GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Ready to Build in Sonoma County?
          </h2>
          <p
            style={{
              fontFamily: MS,
              fontSize: 14,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8,
              marginBottom: '40px',
              letterSpacing: '0.04em',
            }}
          >
            Book your complimentary site assessment today. No obligation. No pressure.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}
          >
            <button
              onClick={scrollToForm}
              style={{
                fontFamily: MS,
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                background: GOLD_GRADIENT,
                color: '#000',
                border: 'none',
                padding: '16px 40px',
                cursor: 'pointer',
                borderRadius: 3,
              }}
            >
              Start My ADU Project &rarr;
            </button>
            <a
              href={PHONE}
              style={{
                fontFamily: MS,
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: GOLD,
                border: '1px solid rgba(203,178,106,0.45)',
                padding: '16px 40px',
                textDecoration: 'none',
                display: 'inline-block',
                borderRadius: 3,
              }}
            >
              Call (415) 968-9494
            </a>
          </div>
          <p
            style={{
              fontFamily: MS,
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(203,178,106,0.4)',
            }}
          >
            CSLB #1106798 &middot; Licensed &middot; Bonded &middot; Insured
          </p>
        </div>
      </section>

      {/* ── MINIMAL FOOTER ───────────────────────────────────── */}
      <div
        style={{
          backgroundColor: '#000',
          borderTop: '1px solid rgba(203,178,106,0.1)',
          padding: '28px 24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: MS,
            fontSize: 10,
            fontWeight: 300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(203,178,106,0.4)',
            margin: 0,
          }}
        >
          &copy; 2026 ConstruBay &middot; CSLB #1106798 &middot; Licensed &middot; Bonded &middot; Insured
        </p>
      </div>

      {/* ── CSS: Suppress global layout elements ─────────────── */}
      <style>{`
        /* Nuke everything from root layout */
        body > div > header, body > div > nav, body > div > footer,
        header:not(#adu-header), nav, footer,
        [class*="social"],[class*="Social"],[id*="social"],
        a[href*="houzz.com"], a[href*="yelp.com"],
        a[href*="facebook.com"]:not(form a), a[href*="instagram.com"]:not(form a),
        a[href*="twitter.com"]:not(form a), a[href*="linkedin.com"]:not(form a) { display: none !important; }
        html, body { overflow-x: hidden; margin: 0; padding: 0; }
        input::placeholder { color: rgba(255,255,255,0.2); }
        input:focus, select:focus { border-color: rgba(203,178,106,0.55) !important; background: rgba(255,255,255,0.07) !important; }
        @media (max-width: 768px) { input, select { font-size: 16px !important; } }
      `}</style>
    </div>
  );
}
