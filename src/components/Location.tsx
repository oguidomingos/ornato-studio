export default function Location() {
  return (
    <section id="local" className="py-28 sm:py-36 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
        <div className="flex items-center justify-center gap-5 mb-5">
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-gold/30" />
          <p className="text-gold/60 tracking-[0.4em] uppercase text-[10px]">
            Visite-nos
          </p>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-gold/30" />
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] mb-5 font-light">Localizacao</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Info */}
        <div className="animate-on-scroll-left space-y-10">
          {/* Address */}
          <div className="group flex gap-5">
            <div className="flex-shrink-0 w-11 h-11 border border-white/[0.06] flex items-center justify-center group-hover:border-gold/25 transition-colors duration-500">
              <svg className="w-4 h-4 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-2 text-white/70 font-light">Endereco</h3>
              <p className="text-white/30 text-sm leading-[1.9] font-light">
                Rua das Carnaubas, 04<br />
                Plaza Mall<br />
                Aguas Claras, Brasilia-DF
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="group flex gap-5">
            <div className="flex-shrink-0 w-11 h-11 border border-white/[0.06] flex items-center justify-center group-hover:border-gold/25 transition-colors duration-500">
              <svg className="w-4 h-4 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-2 text-white/70 font-light">Horarios</h3>
              <div className="text-white/30 text-sm space-y-2">
                <p className="flex justify-between gap-8">
                  <span className="font-light">Segunda a Sexta</span>
                  <span className="text-white/50">10h — 19h</span>
                </p>
                <p className="flex justify-between gap-8">
                  <span className="font-light">Sabado</span>
                  <span className="text-white/50">10h — 16h</span>
                </p>
                <p className="flex justify-between gap-8">
                  <span className="font-light">Domingo</span>
                  <span className="text-white/15">Fechado</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="group flex gap-5">
            <div className="flex-shrink-0 w-11 h-11 border border-white/[0.06] flex items-center justify-center group-hover:border-gold/25 transition-colors duration-500">
              <svg className="w-4 h-4 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-2 text-white/70 font-light">Contato</h3>
              <p className="text-white/30 text-sm font-light">
                WhatsApp:{' '}
                <a
                  href="https://wa.me/5561999999999"
                  className="text-gold/50 hover:text-gold/80 transition-colors duration-500"
                >
                  (61) 99999-9999
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="animate-on-scroll-right">
          <div className="aspect-square sm:aspect-[4/3] bg-dark-card border border-white/[0.04] overflow-hidden relative group">
            <iframe
              title="Localizacao Ornato Estudio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.7!2d-48.028!3d-15.835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUwJzA2LjAiUyA0OMKwMDEnNDEuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              className="w-full h-full border-0 opacity-50 group-hover:opacity-70 transition-opacity duration-700 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-gold/15 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-gold/15 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
