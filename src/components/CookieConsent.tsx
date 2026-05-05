import { useState, useEffect } from 'react'

const CONSENT_KEY = 'cookie_consent'

export default function CookieConsent() {
  const [rendered, setRendered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(CONSENT_KEY)) return

    const t = setTimeout(() => {
      setRendered(true)
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
    }, 700)

    return () => clearTimeout(t)
  }, [])

  const dismiss = (accepted: boolean) => {
    localStorage.setItem(CONSENT_KEY, accepted ? 'accepted' : 'declined')
    if (accepted) {
      document.cookie = `${CONSENT_KEY}=accepted; max-age=${60 * 60 * 24 * 365}; path=/; SameSite=Lax`
    }
    setVisible(false)
    setTimeout(() => setRendered(false), 500)
  }

  if (!rendered) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0, left: 0, right: 0,
      zIndex: 300,
      backgroundColor: 'var(--bg)',
      borderTop: '0.0625rem solid var(--border)',
      padding: '1.25rem 2.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem',
      flexWrap: 'wrap',
      transform: visible ? 'translateY(0)' : 'translateY(100%)',
      opacity: visible ? 1 : 0,
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
    }}>
      <div>
        <p style={{
          fontSize: '0.656rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: '0.375rem',
        }}>
          Cookies & privacidade
        </p>
        <p style={{
          fontSize: '0.875rem',
          lineHeight: 1.65,
          color: 'var(--muted)',
          fontStyle: 'italic',
        }}>
          Este site pode usar cookies para guardar preferências e, no futuro, analytics para entender o que as pessoas leem — sempre com respeito à sua privacidade.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.625rem', flexShrink: 0 }}>
        <button
          onClick={() => dismiss(false)}
          style={{
            fontFamily: "'Libre Caslon Display', Georgia, serif",
            fontSize: '0.875rem',
            padding: '0.5625rem 1.375rem',
            borderRadius: '6.25rem',
            border: '0.0625rem solid var(--border)',
            background: 'none',
            color: 'var(--muted)',
            fontStyle: 'italic',
            cursor: 'pointer',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--fg)'
            e.currentTarget.style.color = 'var(--fg)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--muted)'
          }}
        >
          Recusar
        </button>
        <button
          onClick={() => dismiss(true)}
          style={{
            fontFamily: "'Libre Caslon Display', Georgia, serif",
            fontSize: '0.875rem',
            padding: '0.5625rem 1.375rem',
            borderRadius: '6.25rem',
            border: '0.0625rem solid var(--fg)',
            background: 'var(--fg)',
            color: 'var(--bg)',
            fontStyle: 'italic',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Aceitar
        </button>
      </div>
    </div>
  )
}
