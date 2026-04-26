import { Clock, Sparkles } from 'lucide-react'
import { services, WHATSAPP_URL } from '@/data/content'

export function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="services-heading"
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            <span className="text-accent">Serviços</span> & Estilos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Conheça os estilos disponíveis e encontre o ideal para a sua próxima tatuagem.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>

              <h3 className="font-heading text-xl font-bold text-foreground">{service.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-6 space-y-2 border-t border-border pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-accent">{service.priceRange}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {service.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-muted-foreground">
            Valores de referência. O orçamento final depende do tamanho, detalhes e complexidade do projeto.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-base font-semibold text-background transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  )
}
