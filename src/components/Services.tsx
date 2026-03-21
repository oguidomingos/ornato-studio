interface ServiceItem {
  title: string
  subtitle: string
  description: string
  image: string
}

const services: ServiceItem[] = [
  {
    title: 'Realismo',
    subtitle: 'Preto & Cinza',
    description:
      'Retratos e imagens hiper-realistas que capturam cada detalhe com perfeicao. Dominio absoluto de luz, sombra e textura para resultados extraordinarios.',
    image: '/images/tattoo-realismo-ironman.jpg',
  },
  {
    title: 'Fine Line',
    subtitle: 'Tracos Delicados',
    description:
      'Tracos finos e delicados que criam tatuagens elegantes e sutis. Perfeito para quem busca algo discreto, mas cheio de significado e personalidade.',
    image: '/images/tattoo-fineline-botanical.jpg',
  },
  {
    title: 'Ornamental',
    subtitle: 'Mandalas & Geometricos',
    description:
      'Mandalas, geometricos e padroes simetricos que transformam o corpo em uma obra de arte. Tracos precisos e composicoes hipnotizantes.',
    image: '/images/tattoo-ornamental-mandala.jpg',
  },
  {
    title: 'Blackwork',
    subtitle: 'Impacto Visual',
    description:
      'Preenchimentos solidos e composicoes em preto puro que criam presenca visual poderosa. Ideal para quem busca ousadia e personalidade na pele.',
    image: '/images/tattoo-blackwork-fullback.jpg',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-28 sm:py-36 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
        <div className="flex items-center justify-center gap-5 mb-5">
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-gold/40" />
          <p className="text-gold tracking-[0.4em] uppercase text-[10px]">
            Especialidades
          </p>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-gold/40" />
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] mb-5 font-light text-text-primary">Servicos</h2>
        <p className="text-text-muted text-[15px] max-w-md mx-auto leading-relaxed font-light">
          Tecnicas refinadas para cada estilo de arte
        </p>
      </div>

      {/* Service cards with photo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`group relative border border-border-light hover:border-gold/30 transition-all duration-600 animate-on-scroll stagger-${index + 1} bg-surface overflow-hidden rounded-sm`}
          >
            {/* Service photo */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Card content */}
            <div className="p-7 sm:p-8">
              <h3 className="font-heading text-xl sm:text-2xl mb-1.5 text-text-primary group-hover:text-gold transition-colors duration-600 font-light">
                {service.title}
              </h3>
              <p className="text-gold/70 text-[10px] tracking-[0.25em] uppercase mb-5">
                {service.subtitle}
              </p>

              <p className="text-text-muted text-sm leading-[1.8] mb-6 font-light">
                {service.description}
              </p>

              <div className="border-t border-border-light pt-5 group-hover:border-gold/20 transition-colors duration-600">
                <p className="text-text-muted text-xs tracking-[0.1em]">
                  A partir de: <span className="text-gold font-medium">Consulte</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-text-muted/60 text-xs mt-12 tracking-wide font-light">
        Valores variam de acordo com tamanho, complexidade e local do corpo.
      </p>
    </section>
  )
}
