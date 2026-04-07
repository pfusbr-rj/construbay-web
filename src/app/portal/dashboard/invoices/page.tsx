'use client'
import { useState, useEffect } from 'react'
import { createPortalClient } from '@/lib/supabase-client'

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'
const GOLD = '#cbb26a'
const GOLD_GRAD = 'linear-gradient(135deg, #bb8b4a, #f7eb9e)'

interface Invoice {
  id: string
  invoice_number: string
  amount: number
  status: string
  due_date: string
  paid_date: string | null
  file_url: string | null
}

function formatDate(d: string | null) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(n)
}

function StatusBadge({ status }: { status: string }) {
  let bg: string
  let color: string

  if (status === 'Paid') {
    bg = 'rgba(34,197,94,0.12)'
    color = '#4ade80'
  } else if (status === 'Past Due') {
    bg = 'rgba(239,68,68,0.12)'
    color = '#f87171'
  } else {
    bg = 'rgba(203,178,106,0.12)'
    color = GOLD
  }

  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 10px',
      backgroundColor: bg,
      fontFamily: MS,
      fontSize: '9px',
      fontWeight: 300,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color,
    }}>
      {status}
    </span>
  )
}

function MetricCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{
      flex: 1,
      minWidth: '160px',
      padding: '24px',
      border: '1px solid rgba(203,178,106,0.15)',
      backgroundColor: 'rgba(255,255,255,0.02)',
    }}>
      <p style={{
        fontFamily: MS,
        fontSize: '9px',
        fontWeight: 300,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'rgba(203,178,106,0.55)',
        margin: '0 0 10px',
      }}>
        {label}
      </p>
      <p style={{
        fontFamily: CG,
        fontSize: '30px',
        fontWeight: 300,
        margin: 0,
        background: highlight ? GOLD_GRAD : 'none',
        WebkitBackgroundClip: highlight ? 'text' : 'unset',
        WebkitTextFillColor: highlight ? 'transparent' : 'unset',
        backgroundClip: highlight ? 'text' : 'unset',
        color: highlight ? 'transparent' : GOLD,
      }}>
        {value}
      </p>
    </div>
  )
}

export default function InvoicesPage() {
  const supabase = createPortalClient()
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()

      if (sessionError || !session) {
        window.location.href = '/portal/login'
        return
      }

      const { data: projects } = await supabase.from('projects').select('id').eq('client_id', session.user.id).limit(1)
      if (!projects || projects.length === 0) { setLoading(false); return }
      const projectId = projects[0].id
      const { data } = await supabase
        .from('project_invoices')
        .select('*')
        .eq('project_id', projectId)
        .order('due_date', { ascending: false })
      if (data) setInvoices(data as Invoice[])
      setLoading(false)
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const totalBilled = invoices.reduce((sum, inv) => sum + (inv.amount || 0), 0)
  const totalPaid = invoices.filter(inv => inv.status === 'Paid').reduce((sum, inv) => sum + (inv.amount || 0), 0)
  const balanceDue = totalBilled - totalPaid

  return (
    <div style={{ padding: '40px 32px 60px', maxWidth: '900px' }}>
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontFamily: MS, fontSize: '10px', fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.55)', marginBottom: '8px' }}>
          Billing & Payments
        </p>
        <h1 style={{ fontFamily: CG, fontSize: '38px', fontWeight: 300, color: '#ffffff', margin: 0 }}>
          Invoices
        </h1>
      </div>

      {/* Summary Bar */}
      {invoices.length > 0 && (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <MetricCard label="Total Billed" value={formatCurrency(totalBilled)} />
          <MetricCard label="Total Paid" value={formatCurrency(totalPaid)} />
          <MetricCard label="Balance Due" value={formatCurrency(balanceDue)} highlight />
        </div>
      )}

      {loading && (
        <p style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(203,178,106,0.4)', textTransform: 'uppercase' }}>Loading...</p>
      )}

      {!loading && invoices.length === 0 && (
        <p style={{ fontFamily: MS, fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>
          No invoices available yet.
        </p>
      )}

      {invoices.length > 0 && (
        <div style={{ border: '1px solid rgba(255,255,255,0.06)', overflow: 'auto' }}>
          {/* Table header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 80px',
            gap: '0',
            padding: '12px 20px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            {['Invoice', 'Due Date', 'Amount', 'Status', ''].map(h => (
              <span key={h} style={{
                fontFamily: MS,
                fontSize: '9px',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(203,178,106,0.5)',
              }}>
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          {invoices.map((inv, idx) => (
            <div
              key={inv.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 80px',
                gap: '0',
                padding: '16px 20px',
                borderBottom: idx < invoices.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                alignItems: 'center',
              }}
            >
              <span style={{ fontFamily: MS, fontSize: '12px', fontWeight: 300, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.75)' }}>
                {inv.invoice_number}
              </span>
              <span style={{ fontFamily: MS, fontSize: '11px', fontWeight: 300, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.5)' }}>
                {formatDate(inv.due_date)}
              </span>
              <span style={{ fontFamily: CG, fontSize: '18px', fontWeight: 300, color: '#ffffff' }}>
                {formatCurrency(inv.amount)}
              </span>
              <StatusBadge status={inv.status} />
              <div>
                {inv.file_url && (
                  <a
                    href={inv.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                    title="Download PDF"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="12" y1="18" x2="12" y2="12" strokeLinecap="round" />
                      <polyline points="9 15 12 18 15 15" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
