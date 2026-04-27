import { useState } from 'react'
import { cn } from '@/lib/utils'
import { portfolioItems, type PortfolioItem } from '@/data/content'

type Category = 'todos' | PortfolioItem['category']

const categories: { value: Category; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'realismo', label: 'Realismo' },
  { value: 'fineline', label: 'Fine Line' },
  { value: 'blackwork', label: 'Blackwork' },
  { value: 'cobertura', label: 'Cobertura' },
  { value: 'concept', label: 'Concept' },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('todos')

  const filteredItems =
    activeCategory === 'todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 sm:py-28" aria-labelledby="portfolio-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="portfolio-heading"
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            <span className="text-accent">Portfólio</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Cada tatuagem é uma obra de arte única. Conheça alguns dos trabalhos realizados no estúdio.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.value}
              role="tab"
              aria-selected={activeCategory === cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all',
                activeCategory === cat.value
                  ? 'bg-accent text-background'
                  : 'border border-border text-muted-foreground hover:border-accent hover:text-accent'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4" role="tabpanel">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
            >
              <img
                src={`${import.meta.env.BASE_URL}${item.src}`}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <div className="w-full p-3">
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                    {categories.find((c) => c.value === item.category)?.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
