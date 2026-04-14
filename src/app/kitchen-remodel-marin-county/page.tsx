'use client';

import React, { useState, useRef } from 'react';

const CG = 'Cormorant Garamond, serif';
const MS = 'Montserrat, sans-serif';
const GOLD = '#cbb26a';
const GOLD_GRADIENT = 'linear-gradient(135deg, #bb8b4a, #f7eb9e)';
const PHONE = 'tel:4159689494';
const CALENDLY = 'https://calendly.com/construbay/initial-consultation-construbay';

const KITCHEN_TYPES = [
  'Full Kitchen Remodel',
  'Kitchen Refresh',
  'Custom Cabinetry',
  'Open Concept Conversion',
  'Not sure yet',
];

const TIMELINES = [
  'ASAP — Ready to move',
  '1–3 months',
  '3–6 months',
  'Just exploring',
];

const CITIES = [
  'Mill Valley',
  'San Rafael',
  'Tiburon',
  'Novato',
  'Sausalito',
  'San Anselmo',
  'Fairfax',
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
  { stat: '40% Faster', desc: 'permit approvals vs. Marin County average' },
  { stat: 'Pre-Submission', desc: 'issue detection before rejection' },
  { stat: 'Real-Time', desc: 'permit status visibility for clients' },
  { stat: 'Marin-Specific', desc: 'code intelligence across all jurisdictions' },
];

const FAQS = [
  {
    q: 'How much does a kitchen remodel cost in Marin County?',
    a: 'A luxury kitchen remodel in Marin County ranges from $85,000 for a high-end refresh to $350,000+ for a full custom renovation. ConstruBay provides fixed-scope contracts — what we quote is what you pay.',
  },
  {
    q: 'How long does a kitchen remodel take in Marin County?',
    a: 'A typical kitchen remodel takes 8–16 weeks depending on scope. Custom cabinetry and specialty materials can extend timelines. We provide a detailed project schedule before breaking ground.',
  },
  {
    q: 'Do I need permits for a kitchen remodel in Marin County?',
    a: 'Structural changes, electrical upgrades, and plumbing relocations all require permits in Marin County. ConstruBay handles the entire permit process using our AI-powered PlanPass.ai platform.',
  },
  {
    q: 'What kitchen styles does ConstruBay specialize in?',
    a: 'We build contemporary, transitional, and classic luxury kitchens across Marin County. Custom cabinetry, quartzite and marble countertops, professional appliance integration, and open concept layouts are our specialty.',
  },
  {
    q: 'Why choose ConstruBay for my Marin County kitchen remodel?',
    a: 'We are the only contractor in Marin County using AI-powered permit intelligence (PlanPass.ai), we offer fixed-scope contracts with no surprise change orders, and Paulo leads every project personally from design to final walkthrough.',
  },
  {
    q: 'Can ConstruBay do an open concept kitchen conversion in Marin?',
    a: 'Yes. Open concept conversions require structural engineering for load-bearing wall removal, permits, and precise coordination. ConstruBay specializes in this work across Mill Valley, San Rafael, Tiburon, and surrounding Marin communities.',
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
  kitchenType: string;
  city: string;
}) => {
  const message = `🍳 NEW KITCHEN LEAD%0A%0A👤 Name: ${formData.firstName}%0A📞 Phone: ${formData.phone}%0A📧 Email: ${formData.email}%0A🍽️ Kitchen Type: ${formData.kitchenType}%0A📍 City: ${formData.city}%0A🏡 Address: ${formData.address || 'Not provided'}%0A%0A⚡ Respond within 2 hours!`;
  try {
    await fetch(
      `https://api.callmebot.com/whatsapp.php?phone=14159689494&text=${message}&apikey=7905514`,
      { method: 'GET' }
    );
  } catch (error) {
    console.error('WhatsApp notification failed:', error);
  }
};

export const metadata = {
  title: 'Kitchen Remodel Marin County | Luxury Kitchen Contractor | ConstruBay',
  description: 'Luxury kitchen remodels in Marin County. Fixed-scope contracts, custom cabinetry, AI-accelerated permits. CSLB #1106798. Book your complimentary assessment.',
};

export default function KitchenRemodelMarinPage() {
  const [step, setStep] = useState(1);
  const [kitchenType, setKitchenType] = useState('');
  const [timeline, setTimeline] = useState('');
  const [city, setCity] = useState('');
  const [form, setForm] = useState({ firstName: '', phone: '', email: '', address: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: 'smooth' });

  const handleKitchenType = (type: string) => {
    setKitchenType(type);
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
          projectType: 'Kitchen Remodel — Marin County',
          message: `Kitchen Type: ${kitchenType} | Timeline: ${timeline} | City: ${city}${form.address ? ` | Address: ${form.address}` : ''}`,
          source: 'kitchen-remodel-marin-county',
        }),
      });
      await sendWhatsAppNotification({
        firstName: form.firstName,
        phone: form.phone,
        email: form.email,
        address: form.address,
        kitchenType,
        city,
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
        {/* Hero background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/kitchen/hero-kitchen.jpg"
          alt="Luxury kitchen remodel by ConstruBay Marin County"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.88) 100%)',
            zIndex: 10,
          }}
        />
        {/* Content */}
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
            Luxury Kitchens Built for How You Live.
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
            Custom kitchen remodels in Marin County. Fixed-scope contracts, AI-accelerated permitting, owner-led builds. Book your complimentary kitchen assessment.
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
            Start My Kitchen Project &rarr;
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
            ConstruBay transformed our Mill Valley kitchen into something out of a magazine. Paulo was on site every single day. The custom cabinetry, the waterfall island &mdash; it came in exactly on budget and ahead of schedule.
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
            &mdash; Jennifer M. &middot; Mill Valley &middot; Full Kitchen Remodel
          </p>
        </div>
      </section>

      {/* ── SECTION 5: PROJECT PHOTOS ────────────────────────── */}
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
            Our Kitchen Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div style={{ aspectRatio: '16/9', border: '1px solid rgba(203,178,106,0.22)', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/kitchen/hero-kitchen.jpg"
                alt="Luxury kitchen remodel by ConstruBay"
                className="w-full h-full object-cover"
              />
            </div>
            <div style={{ aspectRatio: '16/9', border: '1px solid rgba(203,178,106,0.22)', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/kitchen/hero-kitchen.jpg"
                alt="Custom cabinetry kitchen Marin County"
                className="w-full h-full object-cover"
              />
            </div>
            <div style={{ aspectRatio: '16/9', border: '1px solid rgba(203,178,106,0.22)', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/kitchen/hero-kitchen.jpg"
                alt="Open concept kitchen conversion Marin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: MULTI-STEP FORM ───────────────────────── */}
      <div ref={formRef}>
        {/* Mini trust header above form */}
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
              Book Your Complimentary Kitchen Assessment
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
              Serving Mill Valley, San Rafael, Tiburon, Novato &amp; all of Marin County
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
                    We&apos;ll contact you within 2 hours to confirm your complimentary kitchen assessment.
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
                /* ── STEP 1: Kitchen Type ── */
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
                    What type of kitchen project are you planning?
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {KITCHEN_TYPES.map((type) => (
                      <button
                        key={type}
                        onClick={() => handleKitchenType(type)}
                        style={{
                          padding: '18px 20px',
                          background: kitchenType === type ? 'rgba(203,178,106,0.1)' : 'transparent',
                          border: `1px solid ${kitchenType === type ? GOLD : 'rgba(203,178,106,0.25)'}`,
                          color: kitchenType === type ? GOLD : 'rgba(255,255,255,0.65)',
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
                    <div>
                      <label style={labelStyle}>Property Address (optional)</label>
                      <input
                        type="text"
                        value={form.address}
                        onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))}
                        placeholder="123 Main St, Mill Valley"
                        autoComplete="street-address"
                        style={{
                          width: '100%',
                          background: '#1a1a1a',
                          border: '1px solid rgba(203,178,106,0.3)',
                          borderRadius: '6px',
                          padding: '10px 12px',
                          fontFamily: MS,
                          fontSize: 14,
                          color: '#ffffff',
                          outline: 'none',
                          boxSizing: 'border-box' as const,
                        }}
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
                    {submitting ? 'Sending...' : 'Book My Kitchen Assessment \u2192'}
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
            No other kitchen contractor in Marin County offers this.
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
            AI-powered construction permit intelligence platform &mdash; to accelerate Marin County
            permit approvals, flag issues before submission, and give clients real-time visibility
            into their permit status across all 11 Marin County jurisdictions.
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
          ConstruBay takes on a limited number of kitchen remodel projects per quarter &mdash;
          ensuring every client receives uncompromising personal attention from Paulo.
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
            Ready to Transform Your Kitchen?
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
            Book your complimentary kitchen assessment today. No obligation. No pressure.
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
              Start My Kitchen Project &rarr;
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
