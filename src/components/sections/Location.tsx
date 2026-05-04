import { MapPin, Clock, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/data/content'

export function Location() {
  return (
    <section id="localizacao" className="py-20 sm:py-28" aria-labelledby="location-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="location-heading"
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            <span className="text-accent">Atendimento</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Entre em contato para agendar sua sessão.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <MapPin className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Local</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Brasília-DF
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <Clock className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Horário</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Com hora marcada
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <MessageCircle className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Contato</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              WhatsApp
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-base font-semibold text-background transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
          >
            Agendar Sessão
          </a>
        </div>
      </div>
    </section>
  )
}
