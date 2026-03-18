export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#1a1520] to-[#0f0f0f] rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-gold/30 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-heading text-gold text-3xl sm:text-4xl">H</span>
                    </div>
                    <p className="text-gray-500 text-sm">Foto da Artista</p>
                  </div>
                </div>
              </div>
              {/* Decorative border offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 rounded-sm -z-10" />
            </div>
          </div>

          {/* Text content */}
          <div className="animate-on-scroll">
            <p className="text-gold/80 tracking-[0.3em] uppercase text-xs sm:text-sm mb-3">
              Sobre
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6">
              Hanna Almeida
            </h2>
            <div className="w-16 h-px bg-gold mb-8" />

            <p className="text-gray-300 leading-relaxed mb-6 text-base sm:text-lg">
              Tatuadora ha mais de 8 anos, especializada em ornamental, fine line e realismo.
              Cada trabalho e unico, pensado especialmente para voce.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Minha paixao pela arte comecou ainda na adolescencia, quando descobri que
              o corpo humano e a tela mais extraordinaria que existe. Desde entao, dedico
              minha vida a criar pecas que contam historias e expressam a essencia de cada
              pessoa.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              No Ornato Estudio, cada sessao e uma experiencia unica. Trabalho com
              materiais de alta qualidade, em um ambiente acolhedor e higienizado,
              garantindo sua seguranca e conforto do inicio ao fim.
            </p>

            <div className="flex flex-wrap gap-6 sm:gap-10">
              <div>
                <p className="font-heading text-3xl sm:text-4xl text-gold">8+</p>
                <p className="text-gray-500 text-sm mt-1">Anos de experiencia</p>
              </div>
              <div>
                <p className="font-heading text-3xl sm:text-4xl text-gold">2000+</p>
                <p className="text-gray-500 text-sm mt-1">Tatuagens realizadas</p>
              </div>
              <div>
                <p className="font-heading text-3xl sm:text-4xl text-gold">100%</p>
                <p className="text-gray-500 text-sm mt-1">Dedicacao</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
