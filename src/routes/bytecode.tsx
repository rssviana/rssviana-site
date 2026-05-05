import { createFileRoute, Link } from '@tanstack/react-router'
import Seo from '@/components/Seo'

export const Route = createFileRoute('/bytecode')({
  component: ByteCodePage,
})

function ByteCodePage() {
  return (
    <section className="max-w-2xl mx-auto mt-32 text-center px-6 pb-20">
      <Seo
        title="ByteCode — Tecnologia feita com cuidado"
        description="Empresa de desenvolvimento de software de Ronan Viana. Projetos digitais com foco em clareza, entrega e resultado real."
        canonical="/bytecode"
      />
      <h1 style={{ fontSize: '2rem' }} className="mb-4">ByteCode</h1>
      <p className="opacity-70 mb-12" style={{ fontSize: '1rem' }}>
        Um espaço sobre desenvolvimento, código e ideias em construção.
        <br />
        Em breve.
      </p>
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" style={{ fontSize: '0.875rem', color: 'var(--muted)', textDecoration: 'none', fontStyle: 'italic' }} className="back-link">
          ← Início
        </Link>
        <Link to="/artigos" style={{ fontSize: '0.875rem', color: 'var(--muted)', textDecoration: 'none', fontStyle: 'italic' }} className="back-link">
          Ver artigos →
        </Link>
      </div>
    </section>
  )
}
