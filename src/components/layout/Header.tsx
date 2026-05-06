import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SITE_CONFIG, WHATSAPP_URL } from '@/data/content'

const navLinks = [
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-heading text-2xl font-bold tracking-wide text-accent">
            {SITE_CONFIG.name}
          </span>
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Tattoo
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-dark"
          >
            Agendar
          </a>
        </div>

        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] z-40 bg-background/98 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col items-center gap-6 px-4 pt-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-2xl font-medium text-foreground transition-colors hover:text-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full bg-accent px-8 py-3 text-lg font-semibold text-background transition-colors hover:bg-accent-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
