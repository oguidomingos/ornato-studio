import { MapPin, Clock, Car } from 'lucide-react'
import { SITE_CONFIG, WHATSAPP_URL } from '@/data/content'

export function Location() {
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5!2d-48.0444!3d-15.8361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPlaza+Mall+Aguas+Claras!5e0!3m2!1spt-BR!2sbr'

  return (
    <section id="localizacao" className="py-20 sm:py-28" aria-labelledby="location-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="location-heading"
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            <span className="text-accent">Localização</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Visite o estúdio e conheça o espaço pessoalmente.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Ornato Estudio no mapa"
              className="w-full"
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Endereço</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{SITE_CONFIG.address}</p>
                  <a
                    href="https://maps.google.com/?q=Plaza+Mall+Aguas+Claras+Brasilia+DF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-accent hover:text-accent-light"
                  >
                    Abrir no Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Horário</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Segunda a sexta: 10h às 19h
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sábado: 10h às 16h
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Domingo: Fechado
                  </p>
                  <p className="mt-2 text-xs text-accent">
                    * Atendimento com hora marcada
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Car className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Como chegar</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    O Plaza Mall fica em Águas Claras, com fácil acesso pelo metrô (Estação Águas Claras) e estacionamento disponível.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-base font-semibold text-background transition-all hover:bg-accent-dark"
            >
              Agendar Visita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
