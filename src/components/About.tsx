export default function About() {
  return (
    <section id="sobre" className="py-28 sm:py-36 px-5 sm:px-8 lg:px-10 bg-surface-alt">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Photo */}
          <div className="animate-on-scroll-left">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="/images/hanna-portrait.jpg"
                  alt="Hanna Almeida - Tatuadora"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-1000"
                  loading="lazy"
                />
              </div>
              {/* Decorative border offset */}
              <div className="absolute -bottom-5 -right-5 w-full h-full border border-gold/15 -z-10 rounded-sm" />
              {/* Gold accent line */}
              <div className="absolute -left-5 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
            </div>
          </div>

          {/* Text content */}
          <div className="animate-on-scroll-right">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-px bg-gradient-to-r from-gold/50 to-transparent" />
              <p className="text-gold tracking-[0.4em] uppercase text-[10px]">
                A Artista
              </p>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] mb-7 font-light text-text-primary">
              Hanna Almeida
            </h2>

            <div className="w-12 h-px bg-gold/40 mb-8" />

            <p className="text-text-secondary leading-[1.9] mb-6 text-[15px] sm:text-base font-light">
              Tatuadora há mais de 8 anos, especializada em realismo preto e cinza,
              fine line e blackwork. Premiada no Ink Summit na categoria Realismo,
              cada trabalho é único, pensado especialmente para você.
            </p>

            <p className="text-text-muted leading-[1.9] mb-6 text-sm sm:text-[15px] font-light">
              Minha paixão pela arte começou ainda na adolescência, quando descobri que
              o corpo humano é a tela mais extraordinária que existe. Desde então, dedico
              minha vida a criar peças que contam histórias e expressam a essência de cada
              pessoa.
            </p>

            <p className="text-text-muted leading-[1.9] mb-12 text-sm sm:text-[15px] font-light">
              Cada sessão é uma experiência única. Trabalho com materiais de alta
              qualidade, em um ambiente acolhedor e higienizado, garantindo sua
              segurança e conforto do início ao fim.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 sm:gap-14 pt-10 border-t border-border-light">
              <div>
                <p className="font-heading text-4xl sm:text-5xl text-gold font-light">8+</p>
                <p className="text-text-muted text-[11px] tracking-[0.15em] uppercase mt-2">Anos de experiência</p>
              </div>
              <div>
                <p className="font-heading text-4xl sm:text-5xl text-gold font-light">2000+</p>
                <p className="text-text-muted text-[11px] tracking-[0.15em] uppercase mt-2">Tatuagens realizadas</p>
              </div>
              <div>
                <p className="font-heading text-4xl sm:text-5xl text-gold font-light">100%</p>
                <p className="text-text-muted text-[11px] tracking-[0.15em] uppercase mt-2">Dedicação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
