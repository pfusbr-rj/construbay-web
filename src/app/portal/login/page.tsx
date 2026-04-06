'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createPortalClient } from '@/lib/supabase-client'

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'
const GOLD = '#cbb26a'
const GOLD_GRAD = 'linear-gradient(135deg, #bb8b4a, #f7eb9e)'

export default function PortalLoginPage() {
  const router = useRouter()
  const [supabase] = useState(() => createPortalClient())
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.push('/portal/dashboard')
    })
  }, [supabase, router])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
    if (authError) {
      setError(authError.message)
      setLoading(false)
    } else {
      router.push('/portal/dashboard')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(203,178,106,0.3)',
    color: '#ffffff',
    fontFamily: MS,
    fontSize: '13px',
    fontWeight: 300,
    letterSpacing: '0.05em',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: MS,
    fontSize: '10px',
    fontWeight: 300,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: GOLD,
    marginBottom: '8px',
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            fontFamily: MS,
            fontSize: '10px',
            fontWeight: 300,
            letterSpacing: '0.35em',
            color: 'rgba(203,178,106,0.6)',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            ConstruBay
          </div>
          <h1 style={{
            fontFamily: CG,
            fontSize: '52px',
            fontWeight: 300,
            background: GOLD_GRAD,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: 0,
            lineHeight: 1.1,
          }}>
            Client Portal
          </h1>
          <div style={{
            fontFamily: MS,
            fontSize: '11px',
            fontWeight: 300,
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
            marginTop: '12px',
          }}>
            Secure Project Access
          </div>
        </div>

        {/* Card */}
        <div style={{
          border: '1px solid rgba(203,178,106,0.2)',
          padding: '40px',
          backgroundColor: 'rgba(255,255,255,0.02)',
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                style={inputStyle}
              />
            </div>

            {error && (
              <div style={{
                marginBottom: '24px',
                fontFamily: MS,
                fontSize: '12px',
                fontWeight: 300,
                letterSpacing: '0.05em',
                color: GOLD,
                padding: '12px',
                border: '1px solid rgba(203,178,106,0.2)',
                backgroundColor: 'rgba(203,178,106,0.05)',
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                background: loading ? 'rgba(187,139,74,0.3)' : GOLD_GRAD,
                border: 'none',
                color: '#000000',
                fontFamily: MS,
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>

        {/* Footer link */}
        <div style={{ textAlign: 'center', marginTop: '28px' }}>
          <a
            href="tel:4159689494"
            style={{
              fontFamily: MS,
              fontSize: '11px',
              fontWeight: 300,
              letterSpacing: '0.15em',
              color: 'rgba(203,178,106,0.5)',
              textDecoration: 'none',
            }}
          >
            Need access? Contact us
          </a>
        </div>
      </div>
    </div>
  )
}
