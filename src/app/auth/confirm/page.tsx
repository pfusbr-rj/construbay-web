'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createPortalClient } from '@/lib/supabase-client'

export default function AuthConfirmPage() {
  const router = useRouter()

  useEffect(() => {
    const supabase = createPortalClient()

    async function handleHash() {
      const hash = window.location.hash
      if (!hash) {
        router.push('/portal/login')
        return
      }

      const params = new URLSearchParams(hash.substring(1))
      const accessToken = params.get('access_token')
      const refreshToken = params.get('refresh_token')

      if (accessToken && refreshToken) {
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        })
        if (error) {
          router.push('/portal/login')
        } else {
          router.push('/portal/dashboard')
        }
      } else {
        router.push('/portal/login')
      }
    }

    handleHash()
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
