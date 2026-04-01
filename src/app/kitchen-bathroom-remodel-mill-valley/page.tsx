'use client';

import React, { useState, useRef } from 'react';

const CG = 'Cormorant Garamond, serif';
const MS = 'Montserrat, sans-serif';
const GOLD = '#cbb26a';
const GOLD_GRADIENT = 'linear-gradient(135deg, #bb8b4a, #f7eb9e)';
const PHONE = 'tel:4159689494';
const CALENDLY = 'https://calendly.com/construbay/initial-consultation-construbay';

const REMODEL_TYPES = [
  'Kitchen',
  'Bathroom',
  'Kitchen + Bathroom',
  'Not sure yet',
];

const PRIORITIES = [
  'Better layout and flow',
  'Higher-end finishes and fixtures',
  'More storage and function',
  'Better resale value',
];

const BUDGETS = [
  '$40K \u2013 $75K',
  '$75K \u2013 $150K',
  '$150K \u2013 $250K',
  '$250K+',
];

const STATS = [
  { value: '150+', label: 'Residential Projects Completed' },
  { value: '4.9\u2605', label: 'Client Satisfaction' },
  { value: '10-Year', label: 'Workmanship Warranty' },
];

const DIFFERENTIATORS = [
  {
    title: 'Fixed-Price Contracts',
    body: 'No change orders unless you change the scope. Ever.',
  },
  {
    title: 'Permit-First Planning',
    body: 'We map Marin County permit timelines before demolition begins, not after.',
  },
  {
    title: 'Owner-Led Project Management',
    body: 'Paulo on every jobsite. Not handed off to a subcontractor after signing.',
  },
  {
    title: '10-Year Workmanship Warranty',
    body: 'Industry-leading coverage on every kitchen and bathroom we build.',
  },
];

const FAQS = [
  {
    q: 'How long does a kitchen remodel take in Marin County?',
    a: 'A full kitchen remodel typically takes 8\u201314 weeks from demolition to final walkthrough. Design and permit approvals add 6\u201312 weeks before construction begins. ConstruBay maps your complete timeline on day one so there are no surprises.',
  },
  {
    q: 'How long does a bathroom remodel take?',
    a: 'A primary bathroom remodel typically takes 4\u20138 weeks. A secondary bathroom or powder room can be completed in 2\u20134 weeks. Scope, finish complexity, and permit lead times are the primary variables.',
  },
  {
    q: 'What does a kitchen remodel cost in Mill Valley?',
    a: 'Kitchen remodels in Mill Valley range from $75,000 for a mid-range update to $250,000+ for a fully custom renovation. ConstruBay provides fixed-price contracts \u2014 what we quote is what you pay.',
  },
  {
    q: 'Do I need a permit for a kitchen or bathroom remodel in Marin County?',
    a: 'Yes \u2014 if you are moving walls, changing plumbing or electrical, or modifying structural elements. ConstruBay handles the complete permit process for every project, including plan preparation and submittal.',
  },
  {
    q: 'Can we live in our home during the remodel?',
    a: 'For most kitchen and bathroom projects, yes. We work with you to phase construction in a way that minimizes disruption. We\u2019ll be clear upfront about any periods where certain rooms will be inaccessible.',
  },
  {
    q: 'Why choose ConstruBay over other Marin remodeling contractors?',
    a: 'Fixed-price contracts with no surprise change orders. Paulo leads every project personally from design through final inspection. And a 10-year workmanship warranty that no other local contractor matches.',
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

const sendWhatsAppNotification = async (formData: {
  firstName: string;
  phone: string;
  email: string;
  address?: string;
  remodelType: string;
  priority: string;
  budget: string;
  desiredTimeline?: string;
}) => {
  const message = `%F0%9F%94%A8 NEW KITCHEN+BATH LEAD%0A%0A%F0%9F%91%A4 Name: ${formData.firstName}%0A%F0%9F%93%9E Phone: ${formData.phone}%0A%F0%9F%93%A7 Email: ${formData.email}%0A%F0%9F%8F%A0 Remodeling: ${formData.remodelType}%0A%E2%9C%A8 Priority: ${formData.priority}%0A%F0%9F%92%B0 Budget: ${formData.budget}%0A%F0%9F%93%8D Address: ${formData.address || 'Not provided'}%0A%F0%9F%93%85 Timeline: ${formData.desiredTimeline || 'Not provided'}%0A%0A%E2%9A%A1 Respond within 2 hours!`;
  try {
    await fetch(
      `https://api.callmebot.com/whatsapp.php?phone=14159689494&text=${message}&apikey=7905514`,
      { method: 'GET' }
    );
  } catch (error) {
    console.error('WhatsApp notification failed:', error);
  }
};

export default function KitchenBathroomMillValleyPage() {
  const [step, setStep] = useState(1);
  const [remodelType, setRemodelType] = useState('');
  const [priority, setPriority] = useState('');
  const [budget, setBudget] = useState('');
  const [form, setForm] = useState({
    firstName: '',
    phone: '',
    email: '',
    address: '',
    desiredTimeline: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: 'smooth' });

  const handleRemodelType = (type: string) => {
    setRemodelType(type);
    setTimeout(() => setStep(2), 350);
  };

  const handlePriority = (p: string) => {
    setPriority(p);
    setTimeout(() => setStep(3), 350);
  };

  const handleBudget = (b: string) => {
    setBudget(b);
    setTimeout(() => setStep(4), 350);
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
          projectType: 'Kitchen & Bathroom Remodeling \u2014 Mill Valley',
          message: `Remodeling: ${remodelType} | Priority: ${priority} | Budget: ${budget}${form.address ? ` | Address: ${form.address}` : ''}${form.desiredTimeline ? ` | Timeline: ${form.desiredTimeline}` : ''}`,
          source: 'kitchen-bathroom-remodel-mill-valley',
        }),
      });
      await sendWhatsAppNotification({
        firstName: form.firstName,
        phone: form.phone,
        email: form.email,
        address: form.address,
        remodelType,
        priority,
        budget,
        desiredTimeline: form.desiredTimeline,
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

      {/* ── STICKY HEADER ─────────────────────────── */}
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/svg/logo vector-02.svg"
          alt="ConstruBay"
          style={{ height: '72px', width: 'auto' }}
        />
        <a
          href={PHONE}
          style={{
            fontFamily: MS,
            fontSize: 20,
            fontWeight: 700,
            color: GOLD,
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          (415) 968-9494
        </a>
      </div>

      {/* ── HERO ──────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/kitchen/hero-kitchen-remodel.jpg"
          alt="Luxury kitchen remodel by ConstruBay in Mill Valley"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.88) 100%)',
            zIndex: 10,
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 20,
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
            Luxury Kitchen &amp; Bathroom Remodeling in Mill Valley
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
            ConstruBay helps Marin homeowners transform outdated kitchens and bathrooms into
            refined, highly functional spaces &mdash; with premium craftsmanship, fixed-price
            contracts, and a private, well-managed process.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
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
              textDecoration: 'none',
            }}
          >
            Schedule a Private Consultation
          </a>
          <div
            style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '12px',
            }}
          >
            {['150+ Projects', '4.9\u2605 Satisfaction', '10-Year Warranty', 'CSLB #1106798'].map(
              (badge) => (
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
              )
            )}
          </div>
        </div>
      </section>

      {/* ── TRUST STATS BAR ───────────────────────── */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '64px 24px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: CG,
                    fontSize: 'clamp(28px, 3vw, 48px)',
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

      {/* ── TESTIMONIAL 1 ─────────────────────────── */}
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
            We interviewed four contractors for our Mill Valley kitchen. ConstruBay was the only
            one who walked in with a permit timeline already mapped. They finished 10 days early.
            Our kitchen is now the heart of the house.
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
            &mdash; Sarah K. &middot; Mill Valley &middot; Kitchen Remodel
          </p>
        </div>
      </section>

      {/* ── DESIGNED FOR THE WAY YOU LIVE ─────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#050505' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: CG,
              fontSize: 'clamp(28px, 4vw, 56px)',
              fontWeight: 300,
              color: GOLD,
              textAlign: 'center',
              marginBottom: '56px',
            }}
          >
            Designed for the Way You Live
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3
                style={{
                  fontFamily: CG,
                  fontSize: 28,
                  fontWeight: 300,
                  color: '#fff',
                  marginBottom: '16px',
                }}
              >
                The Kitchen
              </h3>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: 14,
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.9,
                  letterSpacing: '0.03em',
                }}
              >
                In Marin homes, the kitchen is where the day begins and where evenings unfold.
                We design kitchens that draw people in &mdash; layouts that invite gathering,
                surfaces that hold up to daily life, and finishes that still look impeccable a
                decade from now. A well-designed kitchen doesn&apos;t just function beautifully.
                It changes how your home feels.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: CG,
                  fontSize: 28,
                  fontWeight: 300,
                  color: '#fff',
                  marginBottom: '16px',
                }}
              >
                The Bathroom
              </h3>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: 14,
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.9,
                  letterSpacing: '0.03em',
                }}
              >
                The bathroom is the first room you enter in the morning and the last room you
                leave at night. It deserves the same care as every other space in your home.
                We design bathrooms as private retreats &mdash; with heated floors, spa-quality
                showers, and custom tile work that elevates your daily ritual from routine to
                restorative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MULTI-STEP FORM ─────────────────────────── */}
      <div ref={formRef}>
        <div
          style={{
            backgroundColor: '#000000',
            borderBottom: '1px solid rgba(203,178,106,0.3)',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="ConstruBay" style={{ height: '40px' }} />
          <a
            href={PHONE}
            style={{
              fontFamily: MS,
              fontSize: 14,
              color: GOLD,
              textDecoration: 'none',
              letterSpacing: '0.04em',
            }}
          >
            (415) 968-9494
          </a>
        </div>

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
              Schedule a Private Consultation
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
              Serving Mill Valley, Tiburon, Kentfield, San Rafael &amp; all of Marin County
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
                    We&apos;ll contact you within 2 hours to confirm your private consultation.
                  </p>
                  {form.address && (
                    <p
                      style={{
                        fontFamily: MS,
                        fontSize: 12,
                        fontWeight: 300,
                        color: 'rgba(255,255,255,0.4)',
                        marginBottom: '16px',
                        letterSpacing: '0.03em',
                      }}
                    >
                      Property: {form.address}
                    </p>
                  )}
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
                /* ── STEP 1: What are you remodeling? ── */
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
                    What are you remodeling?
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {REMODEL_TYPES.map((type) => (
                      <button
                        key={type}
                        onClick={() => handleRemodelType(type)}
                        style={{
                          padding: '18px 20px',
                          background:
                            remodelType === type ? 'rgba(203,178,106,0.1)' : 'transparent',
                          border: `1px solid ${remodelType === type ? GOLD : 'rgba(203,178,106,0.25)'}`,
                          color:
                            remodelType === type ? GOLD : 'rgba(255,255,255,0.65)',
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
                /* ── STEP 2: What matters most? ── */
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
                    What matters most to you?
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {PRIORITIES.map((p) => (
                      <button
                        key={p}
                        onClick={() => handlePriority(p)}
                        style={{
                          padding: '18px 20px',
                          background:
                            priority === p ? 'rgba(203,178,106,0.1)' : 'transparent',
                          border: `1px solid ${priority === p ? GOLD : 'rgba(203,178,106,0.25)'}`,
                          color: priority === p ? GOLD : 'rgba(255,255,255,0.65)',
                          fontFamily: MS,
                          fontSize: 14,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

              ) : step === 3 ? (
                /* ── STEP 3: Expected investment range? ── */
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
                    Expected investment range?
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        onClick={() => handleBudget(b)}
                        style={{
                          padding: '18px 20px',
                          background:
                            budget === b ? 'rgba(203,178,106,0.1)' : 'transparent',
                          border: `1px solid ${budget === b ? GOLD : 'rgba(203,178,106,0.25)'}`,
                          color: budget === b ? GOLD : 'rgba(255,255,255,0.65)',
                          fontFamily: MS,
                          fontSize: 14,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

              ) : (
                /* ── STEP 4: Contact form ── */
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
                    Tell us about your project
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14,
                      marginBottom: '20px',
                    }}
                  >
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, firstName: e.target.value }))
                        }
                        placeholder="Your name"
                        autoComplete="name"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="you@email.com"
                        autoComplete="email"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        placeholder="(415) 000-0000"
                        autoComplete="tel"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Property Address (optional)</label>
                      <input
                        type="text"
                        value={form.address}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, address: e.target.value }))
                        }
                        placeholder="123 Main St, Mill Valley"
                        autoComplete="street-address"
                        style={{ ...inputStyle, background: 'rgba(255,255,255,0.03)' }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Desired Timeline (optional)</label>
                      <input
                        type="text"
                        value={form.desiredTimeline}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, desiredTimeline: e.target.value }))
                        }
                        placeholder="e.g. Spring 2026, ASAP, 6 months"
                        autoComplete="off"
                        style={{ ...inputStyle, background: 'rgba(255,255,255,0.03)' }}
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
                    {submitting ? 'Sending...' : 'Schedule a Private Consultation \u2192'}
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
              We respond within 2 hours &middot; No pressure &middot; No spam &middot; CSLB
              #1106798
            </p>
          </div>
        </section>
      </div>

      {/* ── PREMIUM CRAFTSMANSHIP ─────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#050505' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: CG,
              fontSize: 'clamp(28px, 4vw, 56px)',
              fontWeight: 300,
              color: GOLD,
              marginBottom: '40px',
            }}
          >
            Premium Craftsmanship
          </h2>
          <p
            style={{
              fontFamily: MS,
              fontSize: 15,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.9,
              letterSpacing: '0.03em',
              marginBottom: '20px',
            }}
          >
            We source materials at a standard that matches the expectations of Marin homeowners:
            natural stone countertops, semi-custom and full-custom cabinetry, professional-grade
            appliances, and artisan tile sourced from domestic and European suppliers. Every
            finish decision is made with longevity in mind, not just aesthetics.
          </p>
          <p
            style={{
              fontFamily: MS,
              fontSize: 15,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.9,
              letterSpacing: '0.03em',
              marginBottom: '20px',
            }}
          >
            Our installation teams are seasoned trades professionals &mdash; tile setters, cabinet
            installers, and finish carpenters who have worked on high-end residential projects
            throughout Marin and Sonoma counties. The quality of a remodel is determined by the
            quality of the people who build it.
          </p>
          <p
            style={{
              fontFamily: MS,
              fontSize: 15,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.9,
              letterSpacing: '0.03em',
            }}
          >
            Every ConstruBay kitchen and bathroom is backed by our 10-year workmanship warranty
            &mdash; the most comprehensive coverage in the area. We build to stand behind our
            work, not just stand behind our contract.
          </p>
        </div>
      </section>

      {/* ── WHY CONSTRUBAY ────────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#000' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: CG,
              fontSize: 'clamp(28px, 4vw, 56px)',
              fontWeight: 300,
              color: GOLD,
              textAlign: 'center',
              marginBottom: '56px',
            }}
          >
            Why ConstruBay
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: '36px 32px',
                  backgroundColor: '#0a0a0a',
                  border: '1px solid rgba(203,178,106,0.15)',
                }}
              >
                <p
                  style={{
                    fontFamily: CG,
                    fontSize: 22,
                    fontWeight: 300,
                    color: GOLD,
                    marginBottom: '12px',
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: MS,
                    fontSize: 13,
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.7,
                    letterSpacing: '0.03em',
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS 2 & 3 ────────────────────── */}
      <section style={{ padding: '100px 24px', backgroundColor: '#050505' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              style={{
                backgroundColor: '#111',
                border: '1px solid rgba(203,178,106,0.2)',
                padding: '40px 36px',
              }}
            >
              <p
                style={{
                  fontFamily: MS,
                  fontSize: 14,
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.9,
                  letterSpacing: '0.03em',
                  fontStyle: 'italic',
                  marginBottom: '24px',
                }}
              >
                &ldquo;Our 1970s primary bathroom felt like an embarrassment in our home.
                ConstruBay transformed it into a spa-quality retreat with heated floors and
                custom tile. The permitting process was seamless &mdash; they handled
                everything.&rdquo;
              </p>
              <div style={{ display: 'flex', gap: 4, marginBottom: '12px' }}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <svg key={n} width="12" height="12" viewBox="0 0 24 24" fill={GOLD}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: 10,
                  fontWeight: 300,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                &mdash; David &amp; Jennifer R. &middot; Tiburon &middot; Bathroom Remodel
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#111',
                border: '1px solid rgba(203,178,106,0.2)',
                padding: '40px 36px',
              }}
            >
              <p
                style={{
                  fontFamily: MS,
                  fontSize: 14,
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.9,
                  letterSpacing: '0.03em',
                  fontStyle: 'italic',
                  marginBottom: '24px',
                }}
              >
                &ldquo;We did the kitchen and two bathrooms. One contract, one timeline, zero
                change orders. In Marin, that&apos;s unheard of.&rdquo;
              </p>
              <div style={{ display: 'flex', gap: 4, marginBottom: '12px' }}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <svg key={n} width="12" height="12" viewBox="0 0 24 24" fill={GOLD}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: 10,
                  fontWeight: 300,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                &mdash; Michael T. &middot; Kentfield &middot; Kitchen &amp; Bathroom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ─────────────────────────── */}
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
            <div key={i} style={{ borderBottom: '1px solid rgba(203,178,106,0.15)' }}>
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

      {/* ── URGENCY STRIP ─────────────────────────── */}
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
          ConstruBay takes on a limited number of kitchen and bathroom projects per quarter
          &mdash; ensuring every client receives uncompromising personal attention from Paulo.
        </p>
      </section>

      {/* ── FINAL CTA ─────────────────────────────── */}
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
            Ready to Transform Your Home?
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
            Schedule a private consultation today. No pressure. No obligation.
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
              Schedule a Private Consultation &rarr;
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

      {/* ── MINIMAL FOOTER ────────────────────────── */}
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
          &copy; 2026 ConstruBay &middot; CSLB #1106798 &middot; Licensed &middot; Bonded
          &middot; Insured
        </p>
      </div>

      {/* ── CSS: Suppress global layout elements ─── */}
      <style>{`
        body > div > header, body > div > nav, body > div > footer,
        header, nav, footer,
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
