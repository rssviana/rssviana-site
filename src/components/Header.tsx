import { Link } from '@tanstack/react-router'
import { useTheme } from './ThemeProvider'

export default function Header() {
  const { isDark, toggle } = useTheme()

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg)',
      padding: '1.25rem 2.5rem 1rem',
      borderBottom: '0.0625rem solid var(--border)',
      transition: 'background 0.4s',
    }}>
      <div style={{
        maxWidth: '53.75rem',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        <span style={{
          fontSize: '0.6875rem',
          letterSpacing: '0.18em',
          color: 'var(--muted)',
          textTransform: 'lowercase',
        }}>
          @rssviana
        </span>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/artigos">Meus 2 centavos</NavLink>
          <a href="/#bytecode" style={navLinkStyle} className="nav-link-anchor">ByteCode</a>
          <a href="/#bytefotos" style={navLinkStyle} className="nav-link-anchor">ByteFotos</a>

          <button
            onClick={toggle}
            style={{
              fontSize: '1rem',
              color: 'var(--muted)',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              fontFamily: "'Libre Caslon Display', Georgia, serif",
              fontStyle: 'italic',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}

const navLinkStyle: React.CSSProperties = {
  fontFamily: "'Libre Caslon Display', Georgia, serif",
  fontSize: '1rem',
  color: 'var(--fg)',
  textDecoration: 'none',
  transition: 'color 0.2s',
  position: 'relative',
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      style={navLinkStyle}
      className="nav-link"
    >
      {children}
    </Link>
  )
}
