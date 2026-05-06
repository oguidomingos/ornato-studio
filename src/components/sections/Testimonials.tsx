import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/content'

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-card py-20 sm:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            O que dizem os <span className="text-accent">clientes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A satisfação de quem já passou pelo estúdio é meu maior orgulho!
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl border border-border bg-background p-6"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-accent/10" />

              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-accent">{testimonial.style}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
