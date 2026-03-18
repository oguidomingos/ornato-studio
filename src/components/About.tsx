export default function About() {
  return (
    <section id="sobre" className="py-28 sm:py-36 px-5 sm:px-8 lg:px-10 bg-dark-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Photo */}
          <div className="animate-on-scroll-left">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598371839696-594d4fce8579?w=800&q=80&auto=format&fit=crop"
                  alt="Hanna Almeida - Tatuadora"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  loading="lazy"
                />
              </div>
              {/* Decorative border offset */}
              <div className="absolute -bottom-5 -right-5 w-full h-full border border-gold/10 -z-10" />
              {/* Gold accent line */}
              <div className="absolute -left-5 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
            </div>
          </div>

          {/* Text content */}
          <div className="animate-on-scroll-right">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-px bg-gradient-to-r from-gold/40 to-transparent" />
              <p className="text-gold/60 tracking-[0.4em] uppercase text-[10px]">
                A Artista
              </p>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] mb-7 font-light">
              Hanna Almeida
            </h2>

            <div className="w-12 h-px bg-gold/30 mb-8" />

            <p className="text-white/60 leading-[1.9] mb-6 text-[15px] sm:text-base font-light">
              Tatuadora ha mais de 8 anos, especializada em realismo preto e cinza,
              fine line e ornamental. Cada trabalho e unico, pensado especialmente para voce.
            </p>

            <p className="text-white/35 leading-[1.9] mb-6 text-sm sm:text-[15px] font-light">
              Minha paixao pela arte comecou ainda na adolescencia, quando descobri que
              o corpo humano e a tela mais extraordinaria que existe. Desde entao, dedico
              minha vida a criar pecas que contam historias e expressam a essencia de cada
              pessoa.
            </p>

            <p className="text-white/35 leading-[1.9] mb-12 text-sm sm:text-[15px] font-light">
              No Ornato Estudio, cada sessao e uma experiencia unica. Trabalho com
              materiais de alta qualidade, em um ambiente acolhedor e higienizado,
              garantindo sua seguranca e conforto do inicio ao fim.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 sm:gap-14 pt-10 border-t border-white/[0.04]">
              <div>
                <p className="font-heading text-4xl sm:text-5xl text-gold/90 font-light">8+</p>
                <p className="text-white/25 text-[11px] tracking-[0.15em] uppercase mt-2">Anos de experiencia</p>
              </div>
              <div>
                <p className="font-heading text-4xl sm:text-5xl text-gold/90 font-light">2000+</p>
                <p className="text-white/25 text-[11px] tracking-[0.15em] uppercase mt-2">Tatuagens realizadas</p>
              </div>
              <div>
                <p className="font-heading text-4xl sm:text-5xl text-gold/90 font-light">100%</p>
                <p className="text-white/25 text-[11px] tracking-[0.15em] uppercase mt-2">Dedicacao</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
