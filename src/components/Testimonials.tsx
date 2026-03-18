const testimonials = [
  {
    name: 'Carolina Souza',
    text: 'A Hanna e incrivel! Fez exatamente o que eu imaginava e ate superou minhas expectativas. O studio e lindo e super higienizado. Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    name: 'Lucas Ferreira',
    text: 'Minha terceira tatuagem com a Hanna e cada vez fico mais impressionado com o nivel de detalhe. Ela realmente se importa com cada traco. Artista de verdade.',
    rating: 5,
  },
  {
    name: 'Mariana Costa',
    text: 'Fiz minha primeira tatuagem com a Hanna e me senti super acolhida. Ela explicou todo o processo, foi paciente e o resultado ficou perfeito. Ja quero a proxima!',
    rating: 5,
  },
  {
    name: 'Rafael Oliveira',
    text: 'O realismo que a Hanna faz e de outro nivel. O retrato que ela fez no meu braco parece uma fotografia. Profissional excepcional e atenciosa.',
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <p className="text-gold/80 tracking-[0.3em] uppercase text-xs sm:text-sm mb-3">
            O que dizem
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">Depoimentos</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-gray-800 p-6 sm:p-8 animate-on-scroll hover:border-gold/30 transition-colors duration-300"
            >
              <Stars count={t.rating} />
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-heading text-sm">{t.name[0]}</span>
                </div>
                <p className="text-white text-sm font-medium">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
