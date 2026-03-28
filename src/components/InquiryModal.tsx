'use client';
import { useState } from 'react';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { LeadFormData } from '@/types/lead';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400'] });

const inputStyle = {
  width: '100%',
  backgroundColor: 'transparent',
  borderBottom: '1px solid rgba(255,255,255,0.2)',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  padding: '12px 0',
  color: '#ffffff',
  fontSize: '14px',
  outline: 'none',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 300,
};

const labelStyle = {
  display: 'block',
  fontSize: '10px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase' as const,
  color: 'rgba(255,255,255,0.5)',
  marginBottom: '8px',
  fontFamily: 'Montserrat, sans-serif',
};

const selectStyle = {
  ...inputStyle,
  cursor: 'pointer',
  appearance: 'none' as const,
  WebkitAppearance: 'none' as const,
};

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<Partial<LeadFormData>>({});

  if (!isOpen) return null;

  const update = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: '#000000',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Gold progress bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '2px', backgroundColor: 'rgba(203,178,106,0.2)', zIndex: 101 }}>
        <div style={{
          width: `${(step / 3) * 100}%`,
          height: '100%',
          backgroundColor: '#cbb26a',
          transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }} />
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'fixed',
          top: '32px',
          right: '32px',
          width: '48px',
          height: '48px',
          border: '1px solid rgba(255,255,255,0.2)',
          backgroundColor: 'transparent',
          color: 'rgba(255,255,255,0.6)',
          fontSize: '28px',
          fontWeight: 300,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 101,
          transition: 'all 0.3s ease',
        }}
      >
        ×
      </button>

      {/* Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        minHeight: '100vh',
      }}>
        {isSuccess ? (
          /* SUCCESS STATE */
          <div style={{ textAlign: 'center', maxWidth: '480px' }}>
            <div style={{
              width: '64px', height: '64px',
              border: '1px solid #cbb26a',
              borderRadius: '50%',
              margin: '0 auto 32px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cbb26a" strokeWidth="1.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className={cormorant.className} style={{ fontSize: '40px', fontWeight: 300, color: '#ffffff', marginBottom: '16px' }}>
              Thank You, {formData.full_name?.split(' ')[0]}
            </h2>
            <p className={montserrat.className} style={{ fontSize: '12px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '40px' }}>
              Your project brief has been received. We review every inquiry personally and will be in touch within 24 hours to discuss your vision.
            </p>
            <div style={{ borderTop: '1px solid rgba(203,178,106,0.2)', paddingTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px' }}>
                What would you like to do next?
              </p>
              <a
                href="https://calendly.com/construbay/adu-planning-session-design-permits-budget"
                target="_blank"
                rel="noopener noreferrer"
                className={montserrat.className}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#cbb26a',
                  color: '#000000',
                  padding: '16px 48px',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  width: '100%',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                }}
              >
                Reserve Your Consultation →
              </a>
              <button
                onClick={onClose}
                className={montserrat.className}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.5)',
                  padding: '14px 48px',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'all 0.3s ease',
                }}
              >
                ← Return Home
              </button>
            </div>
          </div>
        ) : (
          <div style={{ width: '100%', maxWidth: '520px' }}>
            {/* Step label */}
            <p className={montserrat.className} style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px', textAlign: 'center' }}>
              {step === 1 ? 'Step 1 of 3 — Contact' : step === 2 ? 'Step 2 of 3 — Your Project' : 'Step 3 of 3 — Final Details'}
            </p>

            <h2 className={cormorant.className} style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 300, color: '#ffffff', textAlign: 'center', marginBottom: '12px', lineHeight: 1.1 }}>
              {step === 1 ? "Let's Begin Your Vision" : step === 2 ? 'About Your Project' : 'Final Details'}
            </h2>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#cbb26a', margin: '0 auto 48px', opacity: 0.6 }} />

            {/* STEP 1 — Contact */}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input type="text" required style={inputStyle} value={formData.full_name || ''} onChange={e => update('full_name', e.target.value)} placeholder="John & Jane Smith" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" required style={inputStyle} value={formData.email || ''} onChange={e => update('email', e.target.value)} placeholder="you@email.com" />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone *</label>
                    <input type="tel" required style={inputStyle} value={formData.phone || ''} onChange={e => update('phone', e.target.value)} placeholder="(415) 000-0000" />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Project Address *</label>
                  <input type="text" required style={inputStyle} value={formData.project_address || ''} onChange={e => update('project_address', e.target.value)} placeholder="123 Main St, Mill Valley, CA" />
                </div>
              </div>
            )}

            {/* STEP 2 — Project */}
            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <label style={labelStyle}>Project Type *</label>
                    <select style={selectStyle} value={formData.project_type || ''} onChange={e => update('project_type', e.target.value)}>
                      <option value="" style={{ backgroundColor: '#000' }}>Select type</option>
                      <option value="Full Remodel" style={{ backgroundColor: '#000' }}>Full Remodel</option>
                      <option value="Kitchen & Bath" style={{ backgroundColor: '#000' }}>Kitchen &amp; Bath</option>
                      <option value="ADU" style={{ backgroundColor: '#000' }}>ADU</option>
                      <option value="Addition" style={{ backgroundColor: '#000' }}>Addition</option>
                      <option value="Outdoor Living" style={{ backgroundColor: '#000' }}>Outdoor Living</option>
                      <option value="Other" style={{ backgroundColor: '#000' }}>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Investment Range *</label>
                    <select style={selectStyle} value={formData.budget || ''} onChange={e => update('budget', e.target.value)}>
                      <option value="" style={{ backgroundColor: '#000' }}>Select range</option>
                      <option value="$100k-$250k" style={{ backgroundColor: '#000' }}>$100k – $250k</option>
                      <option value="$250k-$500k" style={{ backgroundColor: '#000' }}>$250k – $500k</option>
                      <option value="$500k-$1M" style={{ backgroundColor: '#000' }}>$500k – $1M</option>
                      <option value="Over $1M" style={{ backgroundColor: '#000' }}>Over $1M</option>
                      <option value="Prefer to discuss" style={{ backgroundColor: '#000' }}>Prefer to discuss</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <label style={labelStyle}>Start Timeline</label>
                    <select style={selectStyle} value={formData.timeline || ''} onChange={e => update('timeline', e.target.value)}>
                      <option value="" style={{ backgroundColor: '#000' }}>When to start</option>
                      <option value="Within 3 months" style={{ backgroundColor: '#000' }}>Within 3 months</option>
                      <option value="3-6 months" style={{ backgroundColor: '#000' }}>3-6 months</option>
                      <option value="6-12 months" style={{ backgroundColor: '#000' }}>6-12 months</option>
                      <option value="Just exploring" style={{ backgroundColor: '#000' }}>Just exploring</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Property Status</label>
                    <select style={selectStyle} value={formData.property_status || ''} onChange={e => update('property_status', e.target.value)}>
                      <option value="" style={{ backgroundColor: '#000' }}>Select status</option>
                      <option value="I own the property" style={{ backgroundColor: '#000' }}>I own the property</option>
                      <option value="Currently in escrow" style={{ backgroundColor: '#000' }}>Currently in escrow</option>
                      <option value="Looking to purchase" style={{ backgroundColor: '#000' }}>Looking to purchase</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <label style={labelStyle}>Design Status</label>
                    <select style={selectStyle} value={formData.design_status || ''} onChange={e => update('design_status', e.target.value)}>
                      <option value="" style={{ backgroundColor: '#000' }}>Current status</option>
                      <option value="Plans ready" style={{ backgroundColor: '#000' }}>Plans ready</option>
                      <option value="Have sketches" style={{ backgroundColor: '#000' }}>Have sketches</option>
                      <option value="Need design help" style={{ backgroundColor: '#000' }}>Need design help</option>
                      <option value="Starting from scratch" style={{ backgroundColor: '#000' }}>Starting from scratch</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Architect Involved?</label>
                    <select style={selectStyle} value={formData.architect_involved || ''} onChange={e => update('architect_involved', e.target.value)}>
                      <option value="" style={{ backgroundColor: '#000' }}>Select</option>
                      <option value="Yes" style={{ backgroundColor: '#000' }}>Yes</option>
                      <option value="No" style={{ backgroundColor: '#000' }}>No</option>
                      <option value="Planning to" style={{ backgroundColor: '#000' }}>Planning to</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 — Final Details */}
            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                  <label style={labelStyle}>How did you hear about us?</label>
                  <select style={selectStyle} value={formData.referral_source || ''} onChange={e => update('referral_source', e.target.value)}>
                    <option value="" style={{ backgroundColor: '#000' }}>Select source</option>
                    <option value="Referral" style={{ backgroundColor: '#000' }}>Referral from friend/neighbor</option>
                    <option value="Google" style={{ backgroundColor: '#000' }}>Google Search</option>
                    <option value="Instagram" style={{ backgroundColor: '#000' }}>Instagram</option>
                    <option value="Nextdoor" style={{ backgroundColor: '#000' }}>Nextdoor</option>
                    <option value="Yelp" style={{ backgroundColor: '#000' }}>Yelp</option>
                    <option value="Saw your work" style={{ backgroundColor: '#000' }}>Saw your work in my neighborhood</option>
                    <option value="Other" style={{ backgroundColor: '#000' }}>Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Tell us about your vision</label>
                  <textarea
                    rows={5}
                    style={{ ...inputStyle, resize: 'none', lineHeight: 1.7 }}
                    value={formData.notes || ''}
                    onChange={e => update('notes', e.target.value)}
                    placeholder="Share any details, inspirations, or special requirements about your project..."
                  />
                </div>
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: step > 1 ? 'space-between' : 'flex-end', marginTop: '48px', gap: '16px' }}>
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className={montserrat.className}
                  style={{
                    padding: '16px 32px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  ← Back
                </button>
              )}
              <button
                onClick={() => step < 3 ? setStep(step + 1) : handleSubmit()}
                disabled={isSubmitting || (step === 1 && (!formData.full_name || !formData.email || !formData.phone || !formData.project_address))}
                className={montserrat.className}
                style={{
                  flex: step === 1 ? 1 : 'unset',
                  padding: '20px 64px',
                  backgroundColor: '#cbb26a',
                  color: '#000000',
                  fontSize: '12px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? 'Sending...' : step === 3 ? 'Request Consultation' : 'Continue →'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
