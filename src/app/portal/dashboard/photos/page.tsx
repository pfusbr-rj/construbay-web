'use client'
import { useState, useEffect } from 'react'
import { createPortalClient } from '@/lib/supabase-client'

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'
const GOLD = '#cbb26a'

interface Photo {
  id: string
  url: string
  phase: string
  caption: string
  taken_at: string
}

function formatDate(d: string | null) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function PhotosPage() {
  const supabase = createPortalClient()
  const [photos, setPhotos] = useState<Photo[]>([])
  const [activePhase, setActivePhase] = useState('All')
  const [phases, setPhases] = useState<string[]>([])
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
        .from('project_photos')
        .select('*')
        .eq('project_id', projectId)
        .order('taken_at', { ascending: false })
      if (data) {
        setPhotos(data as Photo[])
        const uniquePhases = Array.from(new Set((data as Photo[]).map(p => p.phase).filter(Boolean)))
        setPhases(uniquePhases)
      }
      setLoading(false)
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filtered = activePhase === 'All' ? photos : photos.filter(p => p.phase === activePhase)

  const grouped = filtered.reduce<Record<string, Photo[]>>((acc, photo) => {
    const key = photo.phase || 'General'
    if (!acc[key]) acc[key] = []
    acc[key].push(photo)
    return acc
  }, {})

  return (
    <div style={{ padding: '40px 32px 60px' }}>
      <div style={{ marginBottom: '36px' }}>
        <p style={{ fontFamily: MS, fontSize: '10px', fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.55)', marginBottom: '8px' }}>
          Project Documentation
        </p>
        <h1 style={{ fontFamily: CG, fontSize: '38px', fontWeight: 300, color: '#ffffff', margin: 0 }}>
          Construction Photos
        </h1>
      </div>

      {/* Phase Filter Tabs */}
      {phases.length > 0 && (
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0' }}>
          {['All', ...phases].map(phase => {
            const active = activePhase === phase
            return (
              <button
                key={phase}
                onClick={() => setActivePhase(phase)}
                style={{
                  padding: '10px 18px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  borderBottom: active ? `2px solid ${GOLD}` : '2px solid transparent',
                  marginBottom: '-1px',
                }}
              >
                <span style={{
                  fontFamily: MS,
                  fontSize: '10px',
                  fontWeight: 300,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: active ? GOLD : 'rgba(255,255,255,0.4)',
                }}>
                  {phase}
                </span>
              </button>
            )
          })}
        </div>
      )}

      {loading && (
        <p style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(203,178,106,0.4)', textTransform: 'uppercase' }}>Loading...</p>
      )}

      {!loading && filtered.length === 0 && (
        <p style={{ fontFamily: MS, fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>
          No photos available yet.
        </p>
      )}

      {/* Photos grouped by phase */}
      {activePhase === 'All'
        ? Object.entries(grouped).map(([phase, phasePhotos]) => (
          <div key={phase} style={{ marginBottom: '52px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{
                fontFamily: MS,
                fontSize: '9px',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#000',
                backgroundColor: GOLD,
                padding: '4px 10px',
              }}>
                {phase}
              </span>
              <span style={{ fontFamily: MS, fontSize: '10px', fontWeight: 300, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>
                {phasePhotos.length} photo{phasePhotos.length !== 1 ? 's' : ''}
              </span>
            </div>
            <PhotoGrid photos={phasePhotos} />
          </div>
        ))
        : <PhotoGrid photos={filtered} />
      }
    </div>
  )
}

function PhotoGrid({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: '12px' }}>
      {photos.map(photo => (
        <div key={photo.id} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.url}
            alt={photo.caption || photo.phase}
            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ padding: '10px 12px' }}>
            {photo.caption && (
              <p style={{
                fontFamily: MS,
                fontSize: '11px',
                fontWeight: 300,
                letterSpacing: '0.04em',
                color: 'rgba(255,255,255,0.7)',
                margin: '0 0 4px',
                lineHeight: 1.4,
              }}>
                {photo.caption}
              </p>
            )}
            {photo.taken_at && (
              <span style={{
                fontFamily: MS,
                fontSize: '9px',
                fontWeight: 300,
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.3)',
              }}>
                {formatDate(photo.taken_at)}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
