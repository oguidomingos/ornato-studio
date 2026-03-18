const testimonials = [
  {
    name: 'Carolina Souza',
    text: 'A Hanna e incrivel! Fez exatamente o que eu imaginava e ate superou minhas expectativas. O studio e lindo e super higienizado. Recomendo de olhos fechados!',
    rating: 5,
    style: 'Realismo',
  },
  {
    name: 'Lucas Ferreira',
    text: 'Minha terceira tatuagem com a Hanna e cada vez fico mais impressionado com o nivel de detalhe. Ela realmente se importa com cada traco. Artista de verdade.',
    rating: 5,
    style: 'Fine Line',
  },
  {
    name: 'Mariana Costa',
    text: 'Fiz minha primeira tatuagem com a Hanna e me senti super acolhida. Ela explicou todo o processo, foi paciente e o resultado ficou perfeito. Ja quero a proxima!',
    rating: 5,
    style: 'Ornamental',
  },
  {
    name: 'Rafael Oliveira',
    text: 'O realismo que a Hanna faz e de outro nivel. O retrato que ela fez no meu braco parece uma fotografia. Profissional excepcional e atenciosa.',
    rating: 5,
    style: 'Realismo P&B',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3 h-3 text-gold/50" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-28 sm:py-36 px-5 sm:px-8 lg:px-10 bg-dark-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
          <div className="flex items-center justify-center gap-5 mb-5">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-gold/30" />
            <p className="text-gold/60 tracking-[0.4em] uppercase text-[10px]">
              Experiencias
            </p>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-gold/30" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] mb-5 font-light">Depoimentos</h2>
          <p className="text-white/35 text-[15px] max-w-md mx-auto leading-relaxed font-light">
            O que nossos clientes dizem sobre a experiencia no Ornato Estudio
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`group border border-white/[0.04] p-7 sm:p-8 animate-on-scroll stagger-${index + 1} hover:border-gold/12 transition-all duration-600 relative overflow-hidden`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 bg-gradient-to-b from-gold/[0.02] to-transparent" />

              <div className="relative z-10">
                {/* Quote mark */}
                <span className="font-heading text-5xl text-gold/[0.06] leading-none block mb-3">&ldquo;</span>

                <Stars count={t.rating} />

                <p className="text-white/40 text-sm leading-[1.9] mb-7 font-light">
                  {t.text}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold/[0.06] flex items-center justify-center border border-gold/15">
                      <span className="text-gold/70 font-heading text-sm">{t.name[0]}</span>
                    </div>
                    <p className="text-white/60 text-sm font-light">{t.name}</p>
                  </div>
                  <span className="text-[9px] tracking-[0.2em] text-gold/25 uppercase">{t.style}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
