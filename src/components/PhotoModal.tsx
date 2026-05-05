import { useEffect } from 'react'
import type { Photo } from '@/lib/photos'

export default function PhotoModal({ photo, onClose }: { photo: Photo; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(20,17,13,0.72)',
        zIndex: 500,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(0.375rem)',
        WebkitBackdropFilter: 'blur(0.375rem)',
        padding: '1.5rem',
      }}
    >
      <div className="modal-inner" style={{
        background: 'var(--bg)',
        border: '0.0625rem solid var(--border)',
        borderRadius: '0.75rem',
        maxWidth: '42.5rem', width: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1rem', right: '1.25rem',
            background: 'none', border: 'none',
            fontSize: '1.5rem', color: 'var(--muted)',
            cursor: 'pointer', lineHeight: 1, zIndex: 10,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          ×
        </button>

        {/* Photo area */}
        <div className="modal-photo-area" style={{
          width: '100%', aspectRatio: '4/3',
          backgroundColor: 'var(--card)',
          position: 'relative', overflow: 'hidden',
        }}>
          <img
            src={photo.src}
            alt={photo.title}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Modal body */}
        <div style={{ padding: '1.75rem 2.25rem 2.25rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          <span style={{ fontSize: '0.656rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            {photo.meta}
          </span>
          <h3 style={{ fontSize: '1.375rem', fontWeight: 500, lineHeight: 1.25 }}>{photo.title}</h3>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--muted)', fontStyle: 'italic' }}>{photo.desc}</p>
        </div>
      </div>
    </div>
  )
}
