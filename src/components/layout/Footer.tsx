import { Instagram, MapPin, MessageCircle } from 'lucide-react'
import { SITE_CONFIG, WHATSAPP_URL } from '@/data/content'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-2xl font-bold text-accent">{SITE_CONFIG.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{SITE_CONFIG.tagline}</p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Navegação</h4>
            <ul className="space-y-2">
              {['Portfólio', 'Sobre', 'Serviços', 'Depoimentos', 'Localização', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Instagram className="h-4 w-4" />
                  {SITE_CONFIG.instagram}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                {SITE_CONFIG.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
