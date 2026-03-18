const services = [
  {
    title: 'Realismo',
    subtitle: 'Preto & Cinza',
    description:
      'Retratos e imagens hiper-realistas que capturam cada detalhe com perfeicao. Dominio absoluto de luz, sombra e textura para resultados extraordinarios.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Fine Line',
    subtitle: 'Tracos Delicados',
    description:
      'Tracos finos e delicados que criam tatuagens elegantes e sutis. Perfeito para quem busca algo discreto, mas cheio de significado e personalidade.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Ornamental',
    subtitle: 'Mandalas & Geometricos',
    description:
      'Mandalas, geometricos e padroes simetricos que transformam o corpo em uma obra de arte. Tracos precisos e composicoes hipnotizantes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Blackwork',
    subtitle: 'Impacto Visual',
    description:
      'Preenchimentos solidos e composicoes em preto puro que criam presenca visual poderosa. Ideal para quem busca ousadia e personalidade na pele.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-28 sm:py-36 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
        <div className="flex items-center justify-center gap-5 mb-5">
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-gold/30" />
          <p className="text-gold/60 tracking-[0.4em] uppercase text-[10px]">
            Especialidades
          </p>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-gold/30" />
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] mb-5 font-light">Servicos</h2>
        <p className="text-white/35 text-[15px] max-w-md mx-auto leading-relaxed font-light">
          Tecnicas refinadas para cada estilo de arte
        </p>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`group relative border border-white/[0.04] p-8 sm:p-9 hover:border-gold/15 transition-all duration-600 animate-on-scroll stagger-${index + 1} bg-dark-secondary overflow-hidden`}
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 bg-gradient-to-b from-gold/[0.03] to-transparent" />

            <div className="relative z-10">
              <div className="text-gold/40 mb-7 transition-all duration-600 group-hover:text-gold/80 group-hover:scale-110 origin-left">
                {service.icon}
              </div>

              <h3 className="font-heading text-xl sm:text-2xl mb-1.5 group-hover:text-gold/90 transition-colors duration-600 font-light">
                {service.title}
              </h3>
              <p className="text-gold/30 text-[10px] tracking-[0.25em] uppercase mb-6">
                {service.subtitle}
              </p>

              <p className="text-white/30 text-sm leading-[1.8] mb-7 font-light">
                {service.description}
              </p>

              <div className="border-t border-white/[0.04] pt-5 group-hover:border-gold/10 transition-colors duration-600">
                <p className="text-white/20 text-xs tracking-[0.1em]">
                  A partir de: <span className="text-gold/60 font-medium">Consulte</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-white/15 text-xs mt-12 tracking-wide font-light">
        Valores variam de acordo com tamanho, complexidade e local do corpo.
      </p>
    </section>
  )
}
