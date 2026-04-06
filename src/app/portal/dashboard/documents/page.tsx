'use client'
import { useState, useEffect } from 'react'
import { createPortalClient } from '@/lib/supabase-client'

const CG = 'Cormorant Garamond, serif'
const MS = 'Montserrat, sans-serif'
const GOLD = '#cbb26a'

const DOC_TYPE_ORDER = ['Contract', 'Permit', 'Change Order', 'Other']

interface Document {
  id: string
  label: string
  doc_type: string
  file_url: string
  uploaded_at: string
}

function formatDate(d: string | null) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" />
    </svg>
  )
}

export default function DocumentsPage() {
  const supabase = createPortalClient()
  const [docs, setDocs] = useState<Document[]>([])
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
        .from('project_documents')
        .select('*')
        .eq('project_id', projectId)
        .order('uploaded_at', { ascending: false })
      if (data) setDocs(data as Document[])
      setLoading(false)
    }
    fetchData()
  }, [])

  const grouped = DOC_TYPE_ORDER.reduce<Record<string, Document[]>>((acc, type) => {
    const typeDocs = docs.filter(d => d.doc_type === type)
    if (typeDocs.length > 0) acc[type] = typeDocs
    return acc
  }, {})

  const otherTypes = Array.from(new Set(docs.map(d => d.doc_type).filter(t => !DOC_TYPE_ORDER.includes(t))))
  otherTypes.forEach(type => {
    const typeDocs = docs.filter(d => d.doc_type === type)
    if (typeDocs.length > 0) grouped[type] = typeDocs
  })

  return (
    <div style={{ padding: '40px 32px 60px', maxWidth: '800px' }}>
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontFamily: MS, fontSize: '10px', fontWeight: 300, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(203,178,106,0.55)', marginBottom: '8px' }}>
          Project Files
        </p>
        <h1 style={{ fontFamily: CG, fontSize: '38px', fontWeight: 300, color: '#ffffff', margin: 0 }}>
          Documents
        </h1>
      </div>

      {loading && (
        <p style={{ fontFamily: MS, fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(203,178,106,0.4)', textTransform: 'uppercase' }}>Loading...</p>
      )}

      {!loading && docs.length === 0 && (
        <p style={{ fontFamily: MS, fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>
          No documents available yet.
        </p>
      )}

      {Object.entries(grouped).map(([type, typeDocs]) => (
        <div key={type} style={{ marginBottom: '40px' }}>
          {/* Section header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px',
            paddingBottom: '10px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            <span style={{
              fontFamily: MS,
              fontSize: '9px',
              fontWeight: 300,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: GOLD,
            }}>
              {type}
            </span>
            <span style={{ fontFamily: MS, fontSize: '9px', fontWeight: 300, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}>
              {typeDocs.length} file{typeDocs.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Document rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {typeDocs.map(doc => (
              <div
                key={doc.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontFamily: MS,
                    fontSize: '12px',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    color: 'rgba(255,255,255,0.8)',
                    margin: '0 0 3px',
                  }}>
                    {doc.label}
                  </p>
                  <span style={{
                    fontFamily: MS,
                    fontSize: '10px',
                    fontWeight: 300,
                    letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.3)',
                  }}>
                    {formatDate(doc.uploaded_at)}
                  </span>
                </div>
                <a
                  href={doc.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    border: '1px solid rgba(203,178,106,0.3)',
                    textDecoration: 'none',
                  }}
                >
                  <DownloadIcon />
                  <span style={{
                    fontFamily: MS,
                    fontSize: '9px',
                    fontWeight: 300,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: GOLD,
                  }}>
                    Download
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
