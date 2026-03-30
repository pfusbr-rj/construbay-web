'use client'

import { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'

const CG = 'Cormorant Garamond'
const MS = 'Montserrat'

export default function ExitIntentPopup() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ firstName: '', email: '' })
  const [submitting, setSubmitting] = useState(false)

  const blocked = pathname.startsWith('/blog') || pathname.startsWith('/projects')

  const fire = useCallback(() => {
    if (blocked) return
    if (sessionStorage.getItem('exitPopupShown')) return
    sessionStorage.setItem('exitPopupShown', '1')
    setVisible(true)
  }, [blocked])

  useEffect(() => {
    if (blocked) return
    let ready = false
    const timer = setTimeout(() => { ready = true }, 8000)

    const onMouseOut = (e: MouseEvent) => {
      if (!ready) return
      if (e.clientY > 20) return
      if (e.relatedTarget) return
      fire()
    }

    let lastScroll = window.scrollY
    const onScroll = () => {
      if (!ready) return
      const current = window.scrollY
      const docH = document.documentElement.scrollHeight - window.innerHeight
      if (docH > 0 && current / docH < 0.2 && current < lastScroll) {
        fire()
      }
      lastScroll = current
    }

    document.addEventListener('mouseout', onMouseOut)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseout', onMouseOut)
      window.removeEventListener('scroll', onScroll)
    }
  }, [blocked, fire])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.firstName,
          email: form.email,
          phone: '',
          projectType: 'Guide Request',
          timeline: '',
          source: 'exit-popup',
        }),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) setVisible(false) }}
    >
      <div style={{
        backgroundColor: '#000000',
        border: '1px solid #cbb26a',
        maxWidth: '520px', width: '100%',
        padding: '3rem 2.5rem',
        position: 'relative',
      }}>
        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'rgba(203,178,106,0.6)', fontSize: '1.25rem', lineHeight: 1,
          }}
          aria-label="Close"
        >
          ×
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: CG, fontSize: '1.6rem', color: '#cbb26a', fontWeight: 300 }}>
              Check your inbox.
            </p>
            <p style={{ fontFamily: MS, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.75rem', letterSpacing: '0.08em' }}>
              Your guide is on its way.
            </p>
          </div>
        ) : (
          <>
            <p style={{ fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', marginBottom: '0.75rem' }}>
              Free Resource
            </p>
            <h2 style={{ fontFamily: CG, fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 300, color: '#cbb26a', lineHeight: 1.15, marginBottom: '0.75rem' }}>
              Don&apos;t Start Your Remodel Without This
            </h2>
            <p style={{ fontFamily: MS, fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>
              The Marin County Permit &amp; Cost Survival Guide
            </p>
            <p style={{ fontFamily: MS, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '1.75rem' }}>
              Avoid the 3 permit mistakes that cost Marin homeowners $50,000+ in delays. Free 2-page guide powered by PlanPass.ai.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                required
                value={form.firstName}
                onChange={(e) => setForm(p => ({ ...p, firstName: e.target.value }))}
                style={{
                  width: '100%', background: 'transparent',
                  border: '1px solid rgba(203,178,106,0.35)',
                  color: '#fff', fontFamily: MS, fontSize: '0.8rem',
                  padding: '0.85rem 1rem', marginBottom: '0.75rem',
                  outline: 'none', boxSizing: 'border-box',
                }}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                style={{
                  width: '100%', background: 'transparent',
                  border: '1px solid rgba(203,178,106,0.35)',
                  color: '#fff', fontFamily: MS, fontSize: '0.8rem',
                  padding: '0.85rem 1rem', marginBottom: '1.25rem',
                  outline: 'none', boxSizing: 'border-box',
                }}
              />
              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: '100%', backgroundColor: '#cbb26a', color: '#000000',
                  fontFamily: MS, fontSize: '0.7rem', letterSpacing: '0.2em',
                  textTransform: 'uppercase', padding: '1rem',
                  border: 'none', cursor: 'pointer', fontWeight: 400,
                }}
              >
                {submitting ? 'Sending...' : 'Send Me The Guide'}
              </button>
            </form>

            <p style={{ fontFamily: MS, fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: '1rem', letterSpacing: '0.05em' }}>
              No spam. Building intelligence from ConstruBay.
            </p>
            <p style={{ textAlign: 'center', marginTop: '0.75rem' }}>
              <a
                href="https://calendly.com/construbay/initial-consultation-construbay"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: MS, fontSize: '0.65rem', color: '#cbb26a', textDecoration: 'none', letterSpacing: '0.1em' }}
              >
                Or book a call now →
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
