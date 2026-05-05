import { createRootRoute, Outlet } from '@tanstack/react-router'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@/components/ThemeProvider'
import { PageWrapper } from '@/components/PageWrapper'
import Header from '@/components/Header'
import Footer from '@/components/common/Footer'
import CookieConsent from '@/components/CookieConsent'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <PageWrapper>
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <CookieConsent />
        </PageWrapper>
      </ThemeProvider>
    </HelmetProvider>
  )
}
