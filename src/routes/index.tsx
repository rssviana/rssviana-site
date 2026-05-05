import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import PhotoModal from '@/components/PhotoModal'
import Seo from '@/components/Seo'
import { photos } from '@/lib/photos'

const articlePreviews = [
  {
    id: 8,
    slug: 'nove-anos-de-carreira',
    meta: 'Abr 2026 · 7 min',
    title: 'Nove anos de carreira: o que mudou e o que não mudou',
    excerpt: 'Tempo suficiente para perder algumas certezas e construir outras. Um registro pessoal, não um conselho.',
  },
  {
    id: 4,
    slug: 'golang-na-pratica',
    meta: 'Fev 2026 · 5 min',
    title: 'Golang na prática: o que mudou na forma como penso backend',
    excerpt: 'Depois de anos com Node.js, comecei a trabalhar com Go. A mudança não foi sobre velocidade — foi sobre clareza.',
  },
  {
    id: 0,
    slug: 'simplicidade-escala',
    meta: 'Jan 2026 · 4 min',
    title: 'Por que simplicidade escala melhor',
    excerpt: 'O código mais elegante é aquele que não existe. Uma reflexão sobre remover em vez de adicionar.',
  },
]


export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [modalIdx, setModalIdx] = useState<number | null>(null)

  return (
    <>
      <Seo
        title="rssviana — Engenheiro de Software"
        description="Site pessoal de Ronan Viana, engenheiro de software com 9 anos de experiência em React, Golang, Node.js e sistemas distribuídos."
        canonical="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Ronan Viana',
          url: 'https://rssviana.dev',
          jobTitle: 'Senior Software Engineer',
          sameAs: ['https://github.com/rssviana'],
          knowsAbout: ['React', 'Next.js', 'Golang', 'Node.js', 'AWS', 'Microservices'],
        }}
      />

      {/* ── HERO ── */}
      <section id="inicio" className="hero-pad">
        <div className="container">
          <div className="hero-grid">

            {/* Card stack — oculto no mobile */}
            <div className="card-stack">
              <div style={{
                position: 'absolute', width: '13.75rem', height: '13.75rem',
                backgroundColor: 'var(--card)', borderRadius: '0.75rem',
                border: '0.0625rem solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transform: 'rotate(-5deg) translate(-0.5rem, 0.5rem)',
                opacity: 0.45, transition: 'background 0.4s',
              }} />
              <div style={{
                position: 'absolute', width: '13.75rem', height: '13.75rem',
                backgroundColor: 'var(--card)', borderRadius: '0.75rem',
                border: '0.0625rem solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transform: 'rotate(-2deg) translate(-0.125rem, 0.1875rem)',
                opacity: 0.70, transition: 'background 0.4s',
              }} />
              <div style={{
                position: 'absolute', width: '13.75rem', height: '13.75rem',
                backgroundColor: 'var(--card)', borderRadius: '0.75rem',
                border: '0.0625rem solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8125rem', color: 'var(--muted)', letterSpacing: '0.04em',
                opacity: 1, transition: 'background 0.4s',
              }}>
                Hello World
              </div>
            </div>

            {/* Hero text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <span style={{ fontSize: '0.6875rem', letterSpacing: '0.22em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                Engenheiro de Software · React · Golang · AWS
              </span>
              <h1 className="hero-h1">
                Construindo produtos simples que realmente importam.
              </h1>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, color: 'var(--muted)', fontStyle: 'italic' }}>
                9 anos transformando ideias em sistemas reais — do frontend ao backend distribuído, com clareza e intenção.
              </p>
              <Link
                to="/artigos/$slug"
                params={{ slug: 'nove-anos-de-carreira' }}
                className="link-underline"
              >
                Ver: Nove anos de carreira →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="section-pad" style={{ borderTop: '0.0625rem solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.1875rem', fontWeight: 500, marginBottom: '1.5rem' }}>Sobre mim</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--muted)', fontStyle: 'italic', maxWidth: '32.5rem', margin: '0 auto 2.25rem' }}>
            Engenheiro de software há quase uma década. Trabalho com sistemas escaláveis, produtos digitais e times globais — sempre com atenção ao que realmente importa.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', justifyContent: 'center' }}>
            {['Fotografia', 'Cinema', 'Guitarra & Violão', 'Kart', 'Fórmula 1'].map((tag) => (
              <span key={tag} style={{
                fontSize: '0.8125rem', padding: '0.4375rem 1.125rem',
                border: '0.0625rem solid var(--border)', borderRadius: '6.25rem',
                color: 'var(--muted)', letterSpacing: '0.03em', fontStyle: 'italic',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEUS 2 CENTAVOS preview ── */}
      <section id="centavos" className="section-pad" style={{ borderTop: '0.0625rem solid var(--border)' }}>
        <div className="container">
          <p style={{ fontSize: '0.656rem', letterSpacing: '0.22em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '2.25rem' }}>
            Meus 2 centavos
          </p>
          <h2 style={{ fontSize: '2.1875rem', fontWeight: 500 }}>Ideias em construção.</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--muted)', fontStyle: 'italic', marginTop: '-0.5rem' }}>
            Artigos curtos sobre tecnologia, processo criativo e o que aprendo no caminho.
          </p>

          <div className="articles-preview-grid">
            {articlePreviews.map((art) => (
              <Link
                key={art.id}
                to="/artigos/$slug"
                params={{ slug: art.slug }}
                className="article-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                  {art.meta}
                </span>
                <h3 style={{ fontSize: '1.4375rem', fontWeight: 500, lineHeight: 1.3 }}>{art.title}</h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--muted)', fontStyle: 'italic' }}>{art.excerpt}</p>
              </Link>
            ))}

            <Link
              to="/artigos"
              className="article-card"
              style={{
                textDecoration: 'none', color: 'inherit',
                justifyContent: 'center', alignItems: 'center',
                textAlign: 'center', minHeight: '11.25rem',
              }}
            >
              <span style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase', fontStyle: 'italic' }}>
                ver todos →
              </span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--muted)', fontStyle: 'italic' }}>9 artigos publicados</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BYTEFOTOS ── */}
      <section id="bytefotos" className="section-pad" style={{ borderTop: '0.0625rem solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2.5rem' }}>
            <div>
              <p style={{ fontSize: '0.656rem', letterSpacing: '0.22em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                ByteFotos
              </p>
              <h2 style={{ fontSize: '2rem', fontWeight: 500 }}>Frames do mundo real.</h2>
            </div>
            <Link to="/bytefotos" className="link-underline">Ver todas →</Link>
          </div>

          <div className="photos-grid">
            {photos.slice(0, 6).map((photo, i) => (
              <PhotoSlot key={i} src={photo.src} label={photo.label} onClick={() => setModalIdx(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BYTECODE ── */}
      <section id="bytecode" className="section-pad" style={{ borderTop: '0.0625rem solid var(--border)', backgroundColor: 'var(--bg2)', transition: 'background 0.4s' }}>
        <div className="container">
          <div className="bytecode-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontSize: '0.656rem', letterSpacing: '0.22em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                ByteCode
              </p>
              <h2 style={{ fontSize: '2.4375rem', fontWeight: 500 }}>Tecnologia feita com cuidado.</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--muted)', fontStyle: 'italic' }}>
                Minha empresa de TI — projetos digitais com foco em clareza, entrega e resultado real para quem precisa.
              </p>
              <a href="#bytecode" className="link-underline">Falar sobre um projeto →</a>
            </div>

            <div>
              {['Desenvolvimento web', 'Produtos digitais', 'Sistemas sob medida', 'Consultoria técnica'].map((service, i) => (
                <div key={service} style={{
                  padding: '1.25rem 0',
                  borderBottom: '0.0625rem solid var(--border)',
                  borderTop: i === 0 ? '0.0625rem solid var(--border)' : undefined,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  fontSize: '1rem', fontStyle: 'italic', color: 'var(--muted)',
                }}>
                  <span>{service}</span>
                  <span style={{ width: '0.3125rem', height: '0.3125rem', borderRadius: '50%', backgroundColor: 'var(--muted)', opacity: 0.5, display: 'inline-block' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {modalIdx !== null && (
        <PhotoModal photo={photos[modalIdx]} onClose={() => setModalIdx(null)} />
      )}
    </>
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
