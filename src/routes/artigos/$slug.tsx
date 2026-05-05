import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { getPostBySlug, getPosts } from '@/lib/posts'
import Seo from '@/components/Seo'

export const Route = createFileRoute('/artigos/$slug')({
  component: ArtigoPage,
})

function ArtigoPage() {
  const { slug } = Route.useParams()
  const post = getPostBySlug(slug)
  const posts = getPosts()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrolled = doc.scrollTop / (doc.scrollHeight - doc.clientHeight)
      setProgress(Math.min(100, scrolled * 100))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!post) {
    return (
      <div className="container article-pad" style={{ maxWidth: '41.25rem' }}>
        <Seo
          title="Artigo não encontrado — rssviana"
          description="O artigo que você procura não existe ou foi removido."
          noindex
        />
        <p style={{ color: 'var(--muted)' }}>Artigo não encontrado.</p>
      </div>
    )
  }

  const nextPost = posts[(post.id + 1) % posts.length]

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        canonical={`/artigos/${post.slug}`}
        ogType="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: {
            '@type': 'Person',
            name: 'Ronan Viana',
            url: 'https://rssviana.dev',
          },
          publisher: {
            '@type': 'Person',
            name: 'Ronan Viana',
            url: 'https://rssviana.dev',
          },
          url: `https://rssviana.dev/artigos/${post.slug}`,
          inLanguage: 'pt-BR',
        }}
      />

      {/* Barra de progresso */}
      <div style={{
        position: 'fixed', top: 0, left: 0,
        height: '0.125rem', backgroundColor: 'var(--muted)',
        width: `${progress}%`, zIndex: 200,
        transition: 'width 0.1s linear',
      }} />

      <article className="container article-pad" style={{ maxWidth: '41.25rem' }}>
        <Link
          to="/artigos"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.8125rem', color: 'var(--muted)', textDecoration: 'none',
            fontStyle: 'italic', marginBottom: '4rem', transition: 'color 0.2s',
          }}
          className="back-link"
        >
          ← Meus 2 centavos
        </Link>

        <span style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem', display: 'block' }}>
          {post.tag}
        </span>

        <h1 className="article-h1" style={{ marginBottom: '1.5rem' }}>
          {post.title}
        </h1>

        <div style={{
          display: 'flex', alignItems: 'center', gap: '1.25rem',
          padding: '1.25rem 0',
          borderTop: '0.0625rem solid var(--border)',
          borderBottom: '0.0625rem solid var(--border)',
          marginBottom: '3.5rem',
          fontSize: '0.875rem', color: 'var(--muted)', fontStyle: 'italic',
        }}>
          <span>rssviana</span>
          <span style={{ width: '0.25rem', height: '0.25rem', borderRadius: '50%', backgroundColor: 'var(--border)', display: 'inline-block', flexShrink: 0 }} />
          <span>{post.dateLabel}</span>
          <span style={{ width: '0.25rem', height: '0.25rem', borderRadius: '50%', backgroundColor: 'var(--border)', display: 'inline-block', flexShrink: 0 }} />
          <span>{post.readTime} de leitura</span>
        </div>

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <div style={{
          marginTop: '5rem', paddingTop: '2.5rem',
          borderTop: '0.0625rem solid var(--border)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1.25rem',
        }}>
          <Link
            to="/artigos"
            style={{ fontSize: '0.8125rem', color: 'var(--muted)', textDecoration: 'none', fontStyle: 'italic', transition: 'color 0.2s' }}
            className="back-link"
          >
            ← Ver todos os artigos
          </Link>
          <Link
            to="/artigos/$slug"
            params={{ slug: nextPost.slug }}
            style={{ fontSize: '1rem', color: 'var(--fg)', textDecoration: 'none', fontStyle: 'italic', transition: 'opacity 0.2s' }}
            className="next-link"
          >
            {nextPost.title} →
          </Link>
        </div>
      </article>
    </>
  )
}
