'use client'

import { useEffect } from 'react'

export default function CardPage() {
  useEffect(() => {
    // On iOS, navigating to a .vcf triggers "Add to Contacts" without leaving the page
    window.location.href = '/dominick.vcf'

    const t = setTimeout(() => {
      window.location.replace('https://foreturniq.com')
    }, 2500)

    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: '1.25rem',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#1b3068',
      color: '#fff',
      padding: '2rem',
    }}>
      <p style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>Dominick Del Bosque</p>
      <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.7 }}>Founder, Foreturn IQ</p>
      <a
        href="/dominick.vcf"
        style={{
          marginTop: '0.5rem',
          padding: '0.7rem 1.5rem',
          backgroundColor: '#3aaa35',
          color: '#fff',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontSize: '0.95rem',
          fontWeight: 600,
        }}
      >
        Add to Contacts
      </a>
      <a
        href="https://foreturniq.com"
        style={{ fontSize: '0.8rem', opacity: 0.5, color: '#fff', textDecoration: 'none' }}
      >
        foreturniq.com
      </a>
    </div>
  )
}
