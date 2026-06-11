export default function CardPage() {
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
        href="/dominick-foreturniq.pkpass"
        style={{
          display: 'block',
          marginTop: '0.5rem',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://developer.apple.com/wallet/add-to-apple-wallet-guidelines/downloads/US-UK_Add_to_Apple_Wallet_RGB_101421.svg"
          alt="Add to Apple Wallet"
          style={{ height: '56px', width: 'auto' }}
        />
      </a>

      <a
        href="/dominick.vcf"
        style={{
          padding: '0.6rem 1.25rem',
          border: '1px solid rgba(255,255,255,0.35)',
          borderRadius: '0.5rem',
          color: '#fff',
          textDecoration: 'none',
          fontSize: '0.875rem',
        }}
      >
        Add to Contacts
      </a>

      <a
        href="https://foreturniq.com"
        style={{
          fontSize: '0.8rem',
          opacity: 0.5,
          color: '#fff',
          textDecoration: 'none',
          marginTop: '0.25rem',
        }}
      >
        foreturniq.com
      </a>
    </div>
  )
}
