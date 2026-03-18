const services = [
  {
    title: 'Ornamental',
    description:
      'Mandalas, geometricos e padroes simetricos que transformam o corpo em uma obra de arte. Tracos precisos e detalhados que criam composicoes hipnotizantes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Fine Line',
    description:
      'Tracos finos e delicados que criam tatuagens elegantes e sutis. Perfeito para quem busca algo discreto, mas cheio de significado e personalidade.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Realismo',
    description:
      'Retratos e imagens hiper-realistas que capturam cada detalhe com perfeicao. Uma tecnica que exige dominio absoluto de luz, sombra e textura.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Blackwork',
    description:
      'Preenchimentos solidos e composicoes em preto puro que criam impacto visual poderoso. Ideal para quem busca presenca e ousadia na pele.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
        <p className="text-gold/80 tracking-[0.3em] uppercase text-xs sm:text-sm mb-3">
          Especialidades
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">Servicos</h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group border border-gray-800 p-6 sm:p-8 hover:border-gold/50 transition-all duration-500 animate-on-scroll bg-[#0f0f0f] hover:bg-[#121212]"
          >
            <div className="text-gold mb-6 transition-transform duration-300 group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="font-heading text-xl sm:text-2xl mb-4 group-hover:text-gold transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="border-t border-gray-800 pt-4">
              <p className="text-gold/80 text-sm tracking-wider">
                A partir de: <span className="text-gold font-semibold">Consulte</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="text-center text-gray-500 text-sm mt-10">
        * Valores variam de acordo com tamanho, complexidade e local do corpo. Entre em contato para um orcamento personalizado.
      </p>
    </section>
  )
}
