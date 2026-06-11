'use client'

import { useEffect } from 'react'

export default function CardPage() {
  useEffect(() => {
    // Trigger vCard — on iOS this shows "Add to Contacts" without navigating away
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
      gap: '1.5rem',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#1b3068',
      color: '#fff',
    }}>
      <p style={{ margin: 0, fontSize: '1rem', opacity: 0.8 }}>Redirecting to foreturniq.com...</p>
      <a
        href="/dominick.vcf"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#3aaa35',
          color: '#fff',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: 600,
        }}
      >
        Add to Contacts
      </a>
    </div>
  )
}
