import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { getPosts } from '@/lib/posts'
import Seo from '@/components/Seo'

export const Route = createFileRoute('/artigos/')({
  component: ArtigosPage,
})

const FILTERS = ['Todos', 'Tecnologia', 'Design', 'Processo']

function ArtigosPage() {
  const posts = getPosts()
  const [active, setActive] = useState('Todos')

  const visible = posts.filter((p) => active === 'Todos' || p.tag === active)

  return (
    <div className="container page-pad">
      <Seo
        title="Meus 2 centavos — Artigos sobre tecnologia e processo"
        description="Artigos curtos sobre tecnologia, processo criativo e o que aprendo no caminho. Por Ronan Viana, engenheiro de software."
        canonical="/artigos"
      />
      <Link
        to="/"
        style={{ fontSize: '0.8125rem', color: 'var(--muted)', textDecoration: 'none', fontStyle: 'italic', display: 'inline-block', marginBottom: '2rem', transition: 'color 0.2s' }}
        className="back-link"
      >
        ← Início
      </Link>
      <p style={{ fontSize: '0.656rem', letterSpacing: '0.22em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
        Meus 2 centavos
      </p>
      <h1 className="page-h1" style={{ marginBottom: '1rem' }}>
        Ideias em construção.
      </h1>
      <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: 'var(--muted)', fontStyle: 'italic', maxWidth: '33.75rem', marginBottom: '3rem' }}>
        Artigos curtos sobre tecnologia, processo criativo e o que aprendo no caminho.
      </p>

      {/* Filtros */}
      <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              fontFamily: "'Libre Caslon Display', Georgia, serif",
              fontSize: '0.8125rem',
              padding: '0.4375rem 1.25rem',
              borderRadius: '6.25rem',
              cursor: 'pointer',
              border: `0.0625rem solid ${active === f ? 'var(--fg)' : 'var(--border)'}`,
              background: active === f ? 'var(--fg)' : 'none',
              color: active === f ? 'var(--bg)' : 'var(--muted)',
              fontStyle: 'italic',
              transition: 'all 0.2s',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Lista */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {visible.map((post, i) => (
          <Link
            key={post.slug}
            to="/artigos/$slug"
            params={{ slug: post.slug }}
            className="article-row article-row-grid"
            style={{
              borderBottom: '0.0625rem solid var(--border)',
              borderTop: i === 0 ? '0.0625rem solid var(--border)' : undefined,
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'var(--fg)',
              transition: 'opacity 0.2s',
            }}
          >
            <span className="article-number" style={{ fontSize: '0.6875rem', color: 'var(--muted)', letterSpacing: '0.08em', fontStyle: 'italic' }}>
              {String(i + 1).padStart(2, '0')}
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.625rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                {post.tag}
              </span>
              <h2 style={{ fontSize: '1.5rem', lineHeight: 1.25, fontWeight: 400 }}>{post.title}</h2>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--muted)', fontStyle: 'italic' }}>
                {post.excerpt}
              </p>
            </div>

            <div className="article-meta">
              <span>{post.dateLabel.replace(' de ', ' ').split(' ')[0]} {post.dateLabel.split(' ').pop()}</span>
              <span style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}>{post.readTime}</span>
              <span className="article-meta-arrow" style={{ fontSize: '1.125rem' }}>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
