import { useState, useEffect, useCallback } from 'react'
import { MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import { WHATSAPP_URL } from '@/data/content'

const studioImages = [
  { src: 'images/studio/studio-01.jpg', alt: 'Ornato Estúdio — fachada Plaza Mall' },
  { src: 'images/studio/studio-02.jpg', alt: 'Ornato Estúdio — ambiente interno' },
  { src: 'images/studio/studio-03.jpg', alt: 'Ornato Estúdio — sala de atendimento' },
  { src: 'images/studio/studio-04.jpg', alt: 'Ornato Estúdio — espaço de trabalho' },
  { src: 'images/studio/studio-05.jpg', alt: 'Ornato Estúdio — recepção' },
]

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/N6ibE5vkT1Rap7rB9'
const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d960.0!2d-48.0174885!3d-15.8315047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33bb5b49d823%3A0xe657382aa5514a36!2sOrnato%20Est%C3%BAdio!5e0!3m2!1spt-BR!2sbr'

export function Location() {
  const [current, setCurrent] = useState(0)
  const total = studioImages.length

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

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

        <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <MapPin className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Local</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Ornato Estúdio — Plaza Mall, Sala 306, Q. 301 Águas Claras, Brasília - DF, 71909-540
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
        </div>

        {/* Studio carousel */}
        <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {studioImages.map((img) => (
              <div key={img.src} className="w-full flex-shrink-0">
                <div className="aspect-[16/9]">
                  <img
                    src={`${import.meta.env.BASE_URL}${img.src}`}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background/90"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background/90"
            aria-label="Próxima foto"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {studioImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === current ? 'w-6 bg-accent' : 'bg-white/50'
                }`}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Maps embed */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-8 block max-w-3xl overflow-hidden rounded-2xl border border-border"
        >
          <iframe
            src={MAPS_EMBED_SRC}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Ornato Estúdio no Google Maps"
          />
        </a>

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
