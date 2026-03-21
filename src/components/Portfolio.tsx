import { useState } from 'react'

const filters = ['Todos', 'Realismo', 'Fine Line', 'Ornamental'] as const
type Filter = typeof filters[number]

interface PortfolioItem {
  id: number
  category: Exclude<Filter, 'Todos'>
  label: string
  image: string
}

const items: PortfolioItem[] = [
  {
    id: 1,
    category: 'Realismo',
    label: 'Retrato Preto & Cinza',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'Fine Line',
    label: 'Floral Delicado',
    image: 'https://images.unsplash.com/photo-1590246815117-0b5fc71f7094?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'Ornamental',
    label: 'Mandala Costas',
    image: 'https://images.unsplash.com/photo-1542727313-4227c1217ee3?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'Realismo',
    label: 'Olho Realista',
    image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 5,
    category: 'Fine Line',
    label: 'Botanico Minimalista',
    image: 'https://images.unsplash.com/photo-1604941891519-e142f3843eb0?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 6,
    category: 'Ornamental',
    label: 'Geometrico Braco',
    image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 7,
    category: 'Realismo',
    label: 'Leao Realista',
    image: 'https://images.unsplash.com/photo-1475686913550-3e3391978b17?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 8,
    category: 'Fine Line',
    label: 'Traco Fino Arte',
    image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 9,
    category: 'Ornamental',
    label: 'Pontilhismo',
    image: 'https://images.unsplash.com/photo-1586162002134-c8db42584e2f?w=600&q=80&auto=format&fit=crop',
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Todos')

  const filtered =
    activeFilter === 'Todos'
      ? items
      : items.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-28 sm:py-36 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
        <div className="flex items-center justify-center gap-5 mb-5">
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-gold/40" />
          <p className="text-gold tracking-[0.4em] uppercase text-[10px]">
            Trabalhos Selecionados
          </p>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-gold/40" />
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] mb-5 font-light text-text-primary">Portfolio</h2>
        <p className="text-text-muted text-[15px] max-w-md mx-auto leading-relaxed font-light">
          Cada peca e unica, desenhada sob medida para contar a sua historia
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14 sm:mb-16 animate-on-scroll">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 sm:px-8 py-2.5 text-[11px] tracking-[0.18em] uppercase transition-all duration-500 ${
              activeFilter === filter
                ? 'bg-gold text-white font-medium shadow-[0_0_20px_rgba(176,141,87,0.12)]'
                : 'text-text-muted hover:text-gold border border-border-light hover:border-gold/40'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filtered.map((item, index) => (
          <div
            key={item.id}
            className={`group relative aspect-[4/5] overflow-hidden cursor-pointer animate-on-scroll-scale stagger-${Math.min(index + 1, 9)} rounded-sm`}
          >
            <img
              src={item.image}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-600" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-600">
                <p className="text-gold-light text-[10px] tracking-[0.25em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.category}
                </p>
                <p className="text-white font-heading text-lg sm:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 font-light">
                  {item.label}
                </p>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-gold/0 group-hover:border-gold-light/40 transition-all duration-600 group-hover:w-6 group-hover:h-6" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-gold/0 group-hover:border-gold-light/40 transition-all duration-600 group-hover:w-6 group-hover:h-6" />
          </div>
        ))}
      </div>
    </section>
  )
}
