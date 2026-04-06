'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createPortalClient } from '@/lib/supabase-client'

export default function AuthConfirmPage() {
  const router = useRouter()

  useEffect(() => {
    const supabase = createPortalClient()
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        router.push('/portal/dashboard')
      }
    })
  }, [router])

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Montserrat, sans-serif',
      color: '#cbb26a',
      fontSize: '13px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    }}>
      Signing you in...
    </div>
  )
}
