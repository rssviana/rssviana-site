import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { photos } from '@/lib/photos'
import PhotoModal from '@/components/PhotoModal'
import Seo from '@/components/Seo'

export const Route = createFileRoute('/bytefotos')({
  component: ByteFotosPage,
})

function ByteFotosPage() {
  const [modalIdx, setModalIdx] = useState<number | null>(null)

  return (
    <div className="container page-pad">
      <Seo
        title="ByteFotos — Fotografia e olhar sobre o mundo"
        description="Galeria de fotos de Ronan Viana. Registros de paisagens, vida urbana, fauna brasileira e momentos que merecem atenção."
        canonical="/bytefotos"
      />

      <Link
        to="/"
        style={{
          fontSize: '0.8125rem', color: 'var(--muted)', textDecoration: 'none',
          fontStyle: 'italic', display: 'inline-block', marginBottom: '2rem',
          transition: 'color 0.2s',
        }}
        className="back-link"
      >
        ← Início
      </Link>

      <p style={{ fontSize: '0.656rem', letterSpacing: '0.22em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
        ByteFotos
      </p>
      <h1 className="page-h1" style={{ marginBottom: '1rem' }}>
        Frames do mundo real.
      </h1>
      <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: 'var(--muted)', fontStyle: 'italic', maxWidth: '33.75rem', marginBottom: '3rem' }}>
        Registros de paisagens, fauna, vida urbana e momentos que merecem mais de um segundo de atenção.
      </p>

      <div className="photos-grid">
        {photos.map((photo, i) => (
          <PhotoSlot
            key={i}
            src={photo.src}
            label={photo.label}
            onClick={() => setModalIdx(i)}
          />
        ))}
      </div>

      {modalIdx !== null && (
        <PhotoModal photo={photos[modalIdx]} onClose={() => setModalIdx(null)} />
      )}
    </div>
  )
}

function PhotoSlot({ src, label, onClick }: { src: string; label: string; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="photo-slot"
      style={{
        aspectRatio: '1',
        backgroundColor: 'var(--card)',
        border: '0.0625rem solid var(--border)',
        position: 'relative', overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  )
}
