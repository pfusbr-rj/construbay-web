'use client'
import { useState, useEffect } from 'react'
import { createPortalClient } from '@/lib/supabase-client'

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'
const GOLD = '#cbb26a'

interface Milestone {
  id: string
  phase_name: string
  status: string
  target_date: string
  completed_date: string | null
  sort_order: number
}

function formatDate(d: string | null) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function StatusBadge({ status }: { status: string }) {
  let bg = 'rgba(255,255,255,0.08)'
  let color = 'rgba(255,255,255,0.45)'

  if (status === 'Completed') {
    bg = 'rgba(34,197,94,0.12)'
    color = '#4ade80'
  } else if (status === 'In Progress') {
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

export default function SchedulePage() {
  const supabase = createPortalClient()
  const [milestones, setMilestones] = useState<Milestone[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()

      console.log('Session:', session?.user?.id)
      console.log('Session error:', sessionError)

      if (sessionError || !session) {
        console.log('No session found, redirecting to login')
        window.location.href = '/portal/login'
        return
      }

      const { data: projects, error: projError } = await supabase
        .from('projects')
        .select('id')
        .eq('client_id', session.user.id)
        .limit(1)

      if (projError || !projects || projects.length === 0) {
        setLoading(false)
        return
      }

      const projectId = projects[0].id
      const { data } = await supabase
        .from('project_milestones')
        .select('*')
        .eq('project_id', projectId)
        .order('sort_order', { ascending: true })

      if (data) setMilestones(data as Milestone[])
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div style={{ padding: '40px 32px 60px', maxWidth: '680px' }}>
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontFamily: MS, fontSize: '10px', fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.55)', marginBottom: '8px' }}>
          Project Timeline
        </p>
        <h1 style={{ fontFamily: CG, fontSize: '38px', fontWeight: 300, color: '#ffffff', margin: 0 }}>
          Construction Schedule
        </h1>
      </div>

      {loading && (
        <p style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(203,178,106,0.4)', textTransform: 'uppercase' }}>Loading...</p>
      )}

      {!loading && milestones.length === 0 && (
        <p style={{ fontFamily: MS, fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>
          No schedule data available yet.
        </p>
      )}

      {/* Vertical Timeline */}
      <div style={{ position: 'relative' }}>
        {/* Vertical line */}
        {milestones.length > 0 && (
          <div style={{
            position: 'absolute',
            left: '11px',
            top: '12px',
            bottom: '12px',
            width: '1px',
            backgroundColor: 'rgba(255,255,255,0.08)',
          }} />
        )}

        {milestones.map((milestone, idx) => {
          const isActive = milestone.status === 'In Progress'
          const isCompleted = milestone.status === 'Completed'
          let dotBg = 'rgba(255,255,255,0.15)'
          let dotBorder = 'rgba(255,255,255,0.15)'
          if (isCompleted) { dotBg = '#4ade80'; dotBorder = '#4ade80' }
          if (isActive) { dotBg = GOLD; dotBorder = GOLD }

          return (
            <div
              key={milestone.id}
              style={{
                display: 'flex',
                gap: '24px',
                marginBottom: '4px',
                paddingBottom: idx < milestones.length - 1 ? '0' : '0',
              }}
            >
              {/* Dot */}
              <div style={{ flexShrink: 0, marginTop: '10px', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  backgroundColor: dotBg,
                  border: `2px solid ${dotBorder}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {isCompleted && (
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Content */}
              <div style={{
                flex: 1,
                padding: '10px 20px 24px',
                borderLeft: isActive ? `3px solid ${GOLD}` : '3px solid transparent',
                backgroundColor: isActive ? 'rgba(203,178,106,0.04)' : 'transparent',
                marginLeft: isActive ? '-3px' : '0',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <h3 style={{
                    fontFamily: CG,
                    fontSize: '20px',
                    fontWeight: 300,
                    color: isActive ? '#ffffff' : isCompleted ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.75)',
                    margin: 0,
                  }}>
                    {milestone.phase_name}
                  </h3>
                  <StatusBadge status={milestone.status} />
                </div>

                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  <div>
                    <span style={{ fontFamily: MS, fontSize: '9px', fontWeight: 300, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '2px' }}>Target</span>
                    <span style={{ fontFamily: MS, fontSize: '11px', fontWeight: 300, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.55)' }}>{formatDate(milestone.target_date)}</span>
                  </div>
                  {milestone.completed_date && (
                    <div>
                      <span style={{ fontFamily: MS, fontSize: '9px', fontWeight: 300, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '2px' }}>Completed</span>
                      <span style={{ fontFamily: MS, fontSize: '11px', fontWeight: 300, letterSpacing: '0.05em', color: '#4ade80' }}>{formatDate(milestone.completed_date)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

