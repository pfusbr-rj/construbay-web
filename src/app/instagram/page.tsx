'use client';

import React, { useState, useRef } from 'react';

const CG = "'Cormorant Garamond', serif";
const MS = "'Montserrat', sans-serif";
const GOLD = '#cbb26a';

const PROJECT_TYPES = [
  'Kitchen Remodel',
  'Bathroom Remodel',
  'ADU / Guest House',
  'Full Home Remodel',
  'Not sure yet',
];

const LOCATIONS = [
  'Mill Valley',
  'Tiburon',
  'Sausalito',
  'San Rafael',
  'Corte Madera',
  'Other Marin City',
];

const sendWhatsAppNotification = async (
  name: string,
  phone: string,
  project: string,
  location: string
) => {
  const msg =
    `%F0%9F%8F%A1 New Instagram Lead%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Project: ${encodeURIComponent(project)}%0A` +
    `Location: ${encodeURIComponent(location)}%0A%0A` +
    `%E2%9A%A1 Respond within 2 hours!`;
  try {
    await fetch(
      `https://api.callmebot.com/whatsapp.php?phone=14159689494&text=${msg}&apikey=7905514`,
      { method: 'GET' }
    );
  } catch (error) {
    console.error('WhatsApp notification failed:', error);
  }
};

export default function InstagramPage() {
  const [projectType, setProjectType] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: 'smooth' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name,
          phone,
          email: '',
          projectType: projectType || 'Not specified',
          message: `Location: ${location || 'Not specified'} | Source: Instagram link-in-bio`,
          source: 'instagram',
        }),
      });
      await sendWhatsAppNotification(
        name,
        phone,
        projectType || 'Not specified',
        location || 'Not specified'
      );
    } catch {
      // show thank you regardless of network error
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    height: '48px',
    background: '#111',
    border: '1px solid rgba(203,178,106,0.3)',
    padding: '0 16px',
    fontFamily: MS,
    fontSize: '16px',
    color: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ backgroundColor: '#000', color: GOLD, fontFamily: MS, minHeight: '100vh' }}>

      {/* ── SECTION 1: SLIM TRUST BAR ── */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: '#000',
          borderBottom: '1px solid rgba(203,178,106,0.2)',
          padding: '5px 16px 6px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/svg/logo vector-02.svg"
          alt="ConstruBay"
          style={{ height: '20px', width: 'auto' }}
        />
        <p
          style={{
            fontFamily: MS,
            fontSize: '8px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: GOLD,
            margin: 0,
          }}
        >
          CSLB #1106798 &bull; 4.9&#9733; Google Rated &bull; Mill Valley, CA
        </p>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          maxWidth: '480px',
          margin: '0 auto',
          paddingTop: '58px',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '48px',
        }}
      >

        {/* ── SECTION 2: HERO ── */}
        <div style={{ paddingTop: '28px', paddingBottom: '20px', textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: CG,
              fontSize: '36px',
              fontWeight: 300,
              lineHeight: 1.15,
              color: '#fff',
              margin: '0 0 14px',
            }}
          >
            Mill Valley Remodels,
            <br />
            Beautifully Managed
          </h1>
          <p
            style={{
              fontFamily: MS,
              fontSize: '15px',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
              margin: 0,
              letterSpacing: '0.02em',
            }}
          >
            Kitchen, bathroom, and ADU remodeling for Marin County homeowners &mdash; permits
            handled, timelines kept, zero change orders.
          </p>
        </div>

        {/* ── SECTION 3: FORM ── */}
        <div ref={formRef}>
          <p
            style={{
              fontFamily: MS,
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: GOLD,
              margin: '0 0 12px',
            }}
          >
            Book a Site Visit
          </p>

          {submitted ? (
            <div
              style={{
                backgroundColor: '#111',
                border: '1px solid rgba(203,178,106,0.3)',
                padding: '28px 20px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: CG,
                  fontSize: '28px',
                  fontWeight: 300,
                  color: GOLD,
                  margin: '0 0 12px',
                }}
              >
                Thank you, {name}.
              </p>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.75,
                  margin: '0 0 20px',
                  letterSpacing: '0.02em',
                }}
              >
                Paulo or his team will call you within 24 hours to schedule your site visit.
              </p>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.45)',
                  margin: '0 0 8px',
                  letterSpacing: '0.04em',
                }}
              >
                If you prefer to reach us now:
              </p>
              <a
                href="tel:4159689494"
                style={{
                  fontFamily: MS,
                  fontSize: '20px',
                  fontWeight: 600,
                  color: GOLD,
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '14px',
                }}
              >
                (415) 968-9494
              </a>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                  color: 'rgba(255,255,255,0.3)',
                  margin: 0,
                  textTransform: 'uppercase',
                }}
              >
                CSLB #1106798
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                style={{
                  ...fieldStyle,
                  cursor: 'pointer',
                  color: projectType ? '#fff' : 'rgba(255,255,255,0.38)',
                }}
              >
                <option value="" disabled style={{ background: '#111', color: 'rgba(255,255,255,0.38)' }}>
                  What are you considering?
                </option>
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t} style={{ background: '#111', color: '#fff' }}>
                    {t}
                  </option>
                ))}
              </select>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  ...fieldStyle,
                  cursor: 'pointer',
                  color: location ? '#fff' : 'rgba(255,255,255,0.38)',
                }}
              >
                <option value="" disabled style={{ background: '#111', color: 'rgba(255,255,255,0.38)' }}>
                  Where is your property?
                </option>
                {LOCATIONS.map((l) => (
                  <option key={l} value={l} style={{ background: '#111', color: '#fff' }}>
                    {l}
                  </option>
                ))}
              </select>

              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                style={fieldStyle}
              />

              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                inputMode="tel"
                style={fieldStyle}
              />

              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: '100%',
                  height: '56px',
                  backgroundColor: submitting ? 'rgba(203,178,106,0.5)' : GOLD,
                  color: '#000',
                  fontFamily: MS,
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  marginTop: '4px',
                }}
              >
                {submitting ? 'Sending...' : 'Book a Site Visit'}
              </button>
            </form>
          )}
        </div>

        {/* ── SECTION 4: TRUST STATS ── */}
        <div
          style={{
            marginTop: '36px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '8px',
            textAlign: 'center',
          }}
        >
          {[
            { value: '150+', label: 'Projects\nCompleted' },
            { value: '4.9\u2605', label: 'Google\nRating' },
            { value: '10-Year', label: 'Warranty' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: '16px 8px',
                border: '1px solid rgba(203,178,106,0.15)',
                backgroundColor: '#0a0a0a',
              }}
            >
              <p
                style={{
                  fontFamily: CG,
                  fontSize: '22px',
                  fontWeight: 300,
                  color: GOLD,
                  margin: '0 0 4px',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: MS,
                  fontSize: '8px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  margin: 0,
                  lineHeight: 1.4,
                  whiteSpace: 'pre-line',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION 5: TESTIMONIAL ── */}
        <div
          style={{
            marginTop: '28px',
            padding: '22px 18px',
            backgroundColor: '#0a0a0a',
            border: '1px solid rgba(203,178,106,0.15)',
          }}
        >
          <p
            style={{
              fontFamily: MS,
              fontSize: '14px',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.8,
              margin: '0 0 14px',
              letterSpacing: '0.02em',
            }}
          >
            &ldquo;Paulo was very professional, personable, and communicative &mdash; difficult
            to find with a general contractor. Completed on budget and with very high
            quality.&rdquo;
          </p>
          <p
            style={{
              fontFamily: MS,
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              margin: 0,
            }}
          >
            &mdash; Brian M., Mill Valley
          </p>
        </div>

        {/* ── SECTION 6: PAULO FOUNDER BLOCK ── */}
        <div
          style={{
            marginTop: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '18px',
            backgroundColor: '#0a0a0a',
            border: '1px solid rgba(203,178,106,0.1)',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              minWidth: '80px',
              borderRadius: '50%',
              border: '1px solid rgba(203,178,106,0.3)',
              backgroundColor: '#1a1a1a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontFamily: CG, fontSize: '20px', fontWeight: 300, color: GOLD }}>
              PF
            </span>
          </div>
          <p
            style={{
              fontFamily: MS,
              fontSize: '14px',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.65,
              margin: 0,
              letterSpacing: '0.02em',
            }}
          >
            Paulo Fernandes personally oversees every project from permit to final walkthrough.
          </p>
        </div>

        {/* ── SECTION 7: FINAL CTA ── */}
        <div style={{ marginTop: '36px', textAlign: 'center' }}>
          <button
            onClick={scrollToForm}
            style={{
              width: '100%',
              height: '56px',
              backgroundColor: GOLD,
              color: '#000',
              fontFamily: MS,
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              marginBottom: '20px',
            }}
          >
            Book a Site Visit
          </button>
          <a
            href="tel:4159689494"
            style={{
              fontFamily: MS,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              letterSpacing: '0.03em',
            }}
          >
            Or call Paulo directly:{' '}
            <span style={{ color: GOLD, fontWeight: 600 }}>(415) 968-9494</span>
          </a>
        </div>

        {/* ── SECTION 8: MINIMAL FOOTER ── */}
        <div
          style={{
            marginTop: '48px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(203,178,106,0.1)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: MS,
              fontSize: '10px',
              color: 'rgba(255,255,255,0.22)',
              margin: 0,
              letterSpacing: '0.06em',
            }}
          >
            &copy; 2026 ConstruBay. CSLB #1106798. Mill Valley, CA
          </p>
        </div>

      </div>

      {/* ── CSS: suppress global nav/footer/social ── */}
      <style>{`
        body > div > header, body > div > nav, body > div > footer,
        header, nav, footer,
        [class*="social"],[class*="Social"],[id*="social"],
        a[href*="houzz.com"], a[href*="yelp.com"],
        a[href*="facebook.com"]:not(form a), a[href*="instagram.com"]:not(form a),
        a[href*="twitter.com"]:not(form a), a[href*="linkedin.com"]:not(form a) { display: none !important; }
        html, body { overflow-x: hidden; margin: 0; padding: 0; }
        input::placeholder { color: rgba(255,255,255,0.35); }
        input:focus, select:focus { border-color: rgba(203,178,106,0.6) !important; outline: none !important; }
        select option { background: #111; color: #fff; }
        @media (max-width: 480px) { input, select, button { -webkit-tap-highlight-color: transparent; } }
      `}</style>
    </div>
  );
}
