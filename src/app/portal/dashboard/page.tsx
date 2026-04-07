'use client'
import { useState, useEffect } from 'react'
import { createPortalClient } from '@/lib/supabase-client'

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'
const GOLD = '#cbb26a'
const GOLD_GRAD = 'linear-gradient(135deg, #bb8b4a, #f7eb9e)'

interface Project {
  id: string
  name: string
  address: string
  scope: string
  current_phase: string
  start_date: string
  estimated_completion: string
  warranty_expiry: string
  pm_name: string
  pm_phone: string
}

interface Milestone {
  phase_name: string
  status: string
  target_date: string
}

function formatDate(d: string | null) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <span style={{ fontFamily: MS, fontSize: '9px', fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)' }}>{label}</span>
      <span style={{ fontFamily: MS, fontSize: '13px', fontWeight: 300, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.85)' }}>{value}</span>
    </div>
  )
}

export default function DashboardOverview() {
  const supabase = createPortalClient()
  const [project, setProject] = useState<Project | null>(null)
  const [nextMilestone, setNextMilestone] = useState<Milestone | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()

      if (sessionError || !session) {
        window.location.href = '/portal/login'
        return
      }

      const { data: projects } = await supabase
        .from('projects')
        .select('*')
        .eq('client_id', session.user.id)
        .limit(1)

      if (projects && projects.length > 0) {
        const proj = projects[0] as Project
        setProject(proj)
        const { data: milestones } = await supabase
          .from('project_milestones')
          .select('*')
          .eq('project_id', proj.id)
          .neq('status', 'Completed')
          .order('sort_order', { ascending: true })
          .limit(1)
        if (milestones && milestones.length > 0) {
          setNextMilestone(milestones[0] as Milestone)
        }
      }
      setLoading(false)
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <div style={{ padding: '48px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <span style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(203,178,106,0.4)', textTransform: 'uppercase' }}>Loading...</span>
      </div>
    )
  }

  if (!project) {
    return (
      <div style={{ padding: '48px 40px' }}>
        <p style={{ fontFamily: MS, fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
          No project found. Please contact your project manager.
        </p>
      </div>
    )
  }

  return (
    <div style={{ padding: '40px 32px 60px', maxWidth: '760px' }}>
      {/* Page heading */}
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontFamily: MS, fontSize: '10px', fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.55)', marginBottom: '8px' }}>
          Project Overview
        </p>
        <h1 style={{ fontFamily: CG, fontSize: '38px', fontWeight: 300, color: '#ffffff', margin: 0, lineHeight: 1.15 }}>
          {project.name || project.address}
        </h1>
      </div>

      {/* Current Phase Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        border: `1px solid ${GOLD}`,
        marginBottom: '40px',
      }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: GOLD, flexShrink: 0 }} />
        <span style={{ fontFamily: MS, fontSize: '10px', fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD }}>
          Current Phase: {project.current_phase}
        </span>
      </div>

      {/* Project Summary Card */}
      <div style={{
        border: '1px solid rgba(203,178,106,0.15)',
        padding: '0 28px',
        marginBottom: '32px',
        backgroundColor: 'rgba(255,255,255,0.02)',
      }}>
        <InfoRow label="Project Address" value={project.address} />
        <InfoRow label="Scope of Work" value={project.scope} />
        <InfoRow
          label="Start Date"
          value={formatDate(project.start_date)}
        />
        <InfoRow
          label="Estimated Completion"
          value={<span style={{ color: GOLD }}>{formatDate(project.estimated_completion)}</span>}
        />
        {nextMilestone && (
          <InfoRow
            label="Next Milestone"
            value={
              <span>
                {nextMilestone.phase_name}
                <span style={{ color: 'rgba(255,255,255,0.35)', marginLeft: '8px', fontSize: '12px' }}>
                  — {formatDate(nextMilestone.target_date)}
                </span>
              </span>
            }
          />
        )}
        <InfoRow
          label="Warranty Expiry"
          value={formatDate(project.warranty_expiry)}
        />
      </div>

      {/* PM Contact Card */}
      <div style={{
        border: '1px solid rgba(203,178,106,0.15)',
        padding: '24px 28px',
        backgroundColor: 'rgba(255,255,255,0.02)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div>
          <p style={{ fontFamily: MS, fontSize: '9px', fontWeight: 300, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.6)', margin: '0 0 6px' }}>
            Your Project Manager
          </p>
          <p style={{ fontFamily: CG, fontSize: '22px', fontWeight: 300, color: '#ffffff', margin: 0 }}>
            {project.pm_name}
          </p>
        </div>
        <a
          href={`tel:${project.pm_phone?.replace(/\D/g, '')}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 24px',
            background: GOLD_GRAD,
            textDecoration: 'none',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: MS, fontSize: '10px', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#000' }}>
            {project.pm_phone}
          </span>
        </a>
      </div>
    </div>
  )
}
