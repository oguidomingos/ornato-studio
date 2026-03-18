import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Servicos', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Local', href: '#local' },
  { label: 'FAQ', href: '#faq' },
]

const WHATSAPP_URL = 'https://wa.me/5561999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20na%20Ornato%20Estudio.'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(201,169,110,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <span className="font-heading text-[22px] sm:text-2xl tracking-[0.3em] text-gold transition-all duration-500 group-hover:tracking-[0.35em]">
              ORNATO
            </span>
            <span className="hidden sm:block w-px h-5 bg-gold/20" />
            <span className="hidden sm:block font-heading text-[13px] tracking-[0.2em] text-white/40">
              ESTUDIO
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[12px] tracking-[0.18em] text-white/45 hover:text-gold/90 transition-colors duration-500 uppercase after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[0.5px] after:bg-gold/60 after:transition-all after:duration-500 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-[11px] tracking-[0.2em] uppercase px-7 py-2.5 border border-gold/30 text-gold/90 hover:bg-gold hover:text-[#0a0a0a] transition-all duration-500 hover:shadow-[0_0_24px_rgba(201,169,110,0.15)]"
            >
              Agendar
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-gold/80 transition-all duration-500 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-gold/80 transition-all duration-500 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-gold/80 transition-all duration-500 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#0a0a0a]/98 backdrop-blur-2xl ${
          menuOpen ? 'max-h-[500px] border-b border-gold/8' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-7 py-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-[13px] tracking-[0.2em] text-white/50 hover:text-gold transition-colors duration-500 uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-3 text-[12px] tracking-[0.2em] uppercase px-10 py-3.5 border border-gold/30 text-gold/90 hover:bg-gold hover:text-[#0a0a0a] transition-all duration-500"
          >
            Agendar Sessao
          </a>
        </nav>
      </div>
    </header>
  )
}
