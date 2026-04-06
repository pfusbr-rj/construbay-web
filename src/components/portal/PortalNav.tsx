'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { createPortalClient } from '@/lib/supabase-client'

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'
const GOLD = '#cbb26a'
const GOLD_GRAD = 'linear-gradient(135deg, #bb8b4a, #f7eb9e)'

const NAV_ITEMS = [
  { label: 'Overview', href: '/portal/dashboard' },
  { label: 'Photos', href: '/portal/dashboard/photos' },
  { label: 'Schedule', href: '/portal/dashboard/schedule' },
  { label: 'Documents', href: '/portal/dashboard/documents' },
  { label: 'Invoices', href: '/portal/dashboard/invoices' },
]

export default function PortalNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [supabase] = useState(() => createPortalClient())

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/portal/login')
  }

  function isActive(href: string) {
    return pathname === href
  }

  return (
    <>
      {/* ── Desktop Sidebar (md and up) ── */}
      <aside className="hidden md:flex flex-col" style={{
        width: '240px',
        flexShrink: 0,
        backgroundColor: '#000000',
        borderRight: '1px solid rgba(203,178,106,0.12)',
        height: '100vh',
        overflow: 'hidden',
      }}>
        {/* Logo */}
        <div style={{ padding: '36px 28px 40px' }}>
          <Link href="/portal/dashboard" style={{ textDecoration: 'none' }}>
            <div style={{
              fontFamily: CG,
              fontSize: '22px',
              fontWeight: 300,
              background: GOLD_GRAD,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.04em',
            }}>
              ConstruBay
            </div>
            <div style={{
              fontFamily: MS,
              fontSize: '9px',
              fontWeight: 300,
              letterSpacing: '0.25em',
              color: 'rgba(203,178,106,0.45)',
              textTransform: 'uppercase',
              marginTop: '5px',
            }}>
              Client Portal
            </div>
          </Link>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(203,178,106,0.1)', margin: '0 20px 24px' }} />

        {/* Nav */}
        <nav style={{ flex: 1, padding: '0 12px' }}>
          {NAV_ITEMS.map(item => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '11px 16px',
                  marginBottom: '2px',
                  textDecoration: 'none',
                  borderLeft: active ? `2px solid ${GOLD}` : '2px solid transparent',
                  backgroundColor: active ? 'rgba(203,178,106,0.07)' : 'transparent',
                }}
              >
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: active ? GOLD : 'transparent',
                  border: active ? 'none' : '1px solid rgba(203,178,106,0.25)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: MS,
                  fontSize: '10px',
                  fontWeight: 300,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: active ? GOLD : 'rgba(255,255,255,0.45)',
                }}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div style={{ padding: '16px 12px 32px' }}>
          <div style={{ height: '1px', backgroundColor: 'rgba(203,178,106,0.1)', marginBottom: '16px' }} />
          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '11px 16px',
              width: '100%',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              borderLeft: '2px solid transparent',
              textAlign: 'left',
            }}
          >
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: MS,
              fontSize: '10px',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
            }}>
              Sign Out
            </span>
          </button>
        </div>
      </aside>

      {/* ── Mobile Top Bar (below md) ── */}
      <div className="flex md:hidden flex-col" style={{
        backgroundColor: '#000000',
        borderBottom: '1px solid rgba(203,178,106,0.15)',
        flexShrink: 0,
      }}>
        {/* Top row: logo + logout */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px 12px',
        }}>
          <Link href="/portal/dashboard" style={{ textDecoration: 'none' }}>
            <span style={{
              fontFamily: CG,
              fontSize: '20px',
              fontWeight: 300,
              background: GOLD_GRAD,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              ConstruBay
            </span>
          </Link>
          <button
            onClick={handleLogout}
            style={{
              background: 'none',
              border: '1px solid rgba(203,178,106,0.25)',
              padding: '6px 12px',
              cursor: 'pointer',
            }}
          >
            <span style={{
              fontFamily: MS,
              fontSize: '9px',
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(203,178,106,0.6)',
            }}>
              Sign Out
            </span>
          </button>
        </div>

        {/* Nav tabs - horizontally scrollable */}
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          padding: '0 16px 0',
          gap: '4px',
          scrollbarWidth: 'none',
        }}>
          {NAV_ITEMS.map(item => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  flexShrink: 0,
                  padding: '10px 16px',
                  textDecoration: 'none',
                  borderBottom: active ? `2px solid ${GOLD}` : '2px solid transparent',
                }}
              >
                <span style={{
                  fontFamily: MS,
                  fontSize: '10px',
                  fontWeight: 300,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: active ? GOLD : 'rgba(255,255,255,0.4)',
                  whiteSpace: 'nowrap',
                }}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
