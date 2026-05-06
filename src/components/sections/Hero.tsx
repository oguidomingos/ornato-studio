import { ArrowDown } from 'lucide-react'
import { SITE_CONFIG, WHATSAPP_URL } from '@/data/content'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Início"
    >
      <img
        src={`${import.meta.env.BASE_URL}images/hanna-tattooing.jpg`}
        alt="Hanna Almeida tatuando no estúdio"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-4 inline-block rounded-full border border-accent/30 px-4 py-1.5">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Tatuadora em Brasília-DF
          </span>
        </div>

        <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="text-accent">{SITE_CONFIG.name}</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl font-heading text-xl text-muted-foreground sm:text-2xl md:text-3xl">
          {SITE_CONFIG.tagline}
        </p>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          Cada traço conta uma história única. Vai ser um prazer desenhar a sua.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-background transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
          >
            Agendar Sessão
          </a>
        </div>
      </div>

      <a
        href="#portfolio"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-accent"
        aria-label="Rolar para portfólio"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
