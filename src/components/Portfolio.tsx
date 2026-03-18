import { useState } from 'react'

const filters = ['Todos', 'Ornamental', 'Fine Line', 'Realismo'] as const
type Filter = typeof filters[number]

interface PortfolioItem {
  id: number
  category: Exclude<Filter, 'Todos'>
  label: string
  color: string
}

const items: PortfolioItem[] = [
  { id: 1, category: 'Ornamental', label: 'Mandala Costas', color: '#2a1f3d' },
  { id: 2, category: 'Fine Line', label: 'Floral Delicado', color: '#1f2a3d' },
  { id: 3, category: 'Realismo', label: 'Retrato P&B', color: '#2a2a2a' },
  { id: 4, category: 'Ornamental', label: 'Geometrico Braco', color: '#3d2a1f' },
  { id: 5, category: 'Fine Line', label: 'Botanico', color: '#1f3d2a' },
  { id: 6, category: 'Realismo', label: 'Olho Realista', color: '#3d1f2a' },
  { id: 7, category: 'Ornamental', label: 'Pontilhismo', color: '#2a3d1f' },
  { id: 8, category: 'Fine Line', label: 'Minimalista', color: '#1f2a2a' },
  { id: 9, category: 'Realismo', label: 'Animal Realista', color: '#2a1f2a' },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Todos')

  const filtered =
    activeFilter === 'Todos'
      ? items
      : items.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
        <p className="text-gold/80 tracking-[0.3em] uppercase text-xs sm:text-sm mb-3">
          Trabalhos
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">Portfolio</h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 animate-on-scroll">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border ${
              activeFilter === filter
                ? 'border-gold text-gold bg-gold/10'
                : 'border-gray-700 text-gray-400 hover:border-gold/50 hover:text-gold/80'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square overflow-hidden cursor-pointer animate-on-scroll"
          >
            {/* Placeholder colored div */}
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: item.color }}
            >
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_rgba(201,169,110,0.3)_0%,_transparent_60%)]" />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/60 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <p className="text-gold text-sm tracking-wider uppercase mb-1">{item.category}</p>
                <p className="text-white font-heading text-xl">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
