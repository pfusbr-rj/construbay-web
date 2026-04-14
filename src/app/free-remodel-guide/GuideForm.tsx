'use client'

import { useState } from 'react'

const MS = 'Montserrat, sans-serif'
const CG = 'Cormorant Garamond, serif'

export default function GuideForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!email) { setError('Please enter your email address.'); return }
    setLoading(true)
    try {
      const res = await fetch('/api/guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Something went wrong. Please try again.'); return }
      setSubmitted(true)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '48px 32px', border: '1px solid rgba(203,178,106,0.3)', background: 'rgba(203,178,106,0.04)' }}>
        <div style={{ width: '56px', height: '56px', border: '1px solid #cbb26a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cbb26a" strokeWidth="1.5">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p style={{ fontFamily: MS, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cbb26a', marginBottom: '16px' }}>
          You&apos;re all set
        </p>
        <h3 style={{ fontFamily: CG, fontSize: '28px', fontWeight: '300', color: '#ffffff', marginBottom: '16px', lineHeight: 1.3 }}>
          Your Guide Is On Its Way
        </h3>
        <p style={{ fontFamily: MS, fontSize: '12px', fontWeight: '300', color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, maxWidth: '400px', margin: '0 auto 32px' }}>
          We&apos;ve sent the Marin County Home Remodel Planning Guide to <strong style={{ color: 'rgba(255,255,255,0.7)' }}>{email}</strong>. Check your inbox — and reach out if you&apos;d like to discuss your project.
        </p>
        <a
          href="/request-a-bid"
          style={{ display: 'inline-block', border: '1px solid #cbb26a', color: '#cbb26a', fontFamily: MS, fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '14px 40px', textDecoration: 'none' }}
        >
          Schedule a Consultation
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <label style={{ display: 'block', fontFamily: MS, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
          First Name (optional)
        </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your first name"
          style={{
            width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(203,178,106,0.2)',
            color: '#ffffff', fontFamily: MS, fontSize: '13px', padding: '14px 16px',
            outline: 'none', boxSizing: 'border-box',
          }}
        />
      </div>
      <div>
        <label style={{ display: 'block', fontFamily: MS, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
          Email Address *
        </label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          style={{
            width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(203,178,106,0.2)',
            color: '#ffffff', fontFamily: MS, fontSize: '13px', padding: '14px 16px',
            outline: 'none', boxSizing: 'border-box',
          }}
        />
      </div>
      {error && (
        <p style={{ fontFamily: MS, fontSize: '11px', color: '#e57373', margin: 0 }}>{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: '8px', border: 'none', background: '#cbb26a', color: '#000000',
          fontFamily: MS, fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
          padding: '18px 48px', cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1, width: '100%',
        }}
      >
        {loading ? 'Sending...' : 'Get the Free Guide'}
      </button>
      <p style={{ fontFamily: MS, fontSize: '10px', color: 'rgba(255,255,255,0.25)', textAlign: 'center', margin: 0, lineHeight: 1.7 }}>
        No spam. Unsubscribe any time. Your information is never shared.
      </p>
    </form>
  )
}
