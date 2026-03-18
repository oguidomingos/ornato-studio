export default function Location() {
  return (
    <section id="local" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
        <p className="text-gold/80 tracking-[0.3em] uppercase text-xs sm:text-sm mb-3">
          Onde estamos
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">Localizacao</h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Info */}
        <div className="animate-on-scroll space-y-8">
          {/* Address */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 border border-gold/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-lg sm:text-xl mb-2">Endereco</h3>
              <p className="text-gray-400 leading-relaxed">
                Rua das Carnaubas, 04<br />
                Plaza Mall<br />
                Aguas Claras, Brasilia-DF
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 border border-gold/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-lg sm:text-xl mb-2">Horarios</h3>
              <div className="text-gray-400 space-y-1">
                <p>Segunda a Sexta: <span className="text-white">10h - 19h</span></p>
                <p>Sabado: <span className="text-white">10h - 16h</span></p>
                <p>Domingo: <span className="text-gray-500">Fechado</span></p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 border border-gold/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-lg sm:text-xl mb-2">Contato</h3>
              <p className="text-gray-400">
                WhatsApp: <a href="https://wa.me/5561999999999" className="text-gold hover:text-gold/80 transition-colors">(61) 99999-9999</a>
              </p>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="animate-on-scroll">
          <div className="aspect-square sm:aspect-[4/3] bg-[#1a1a1a] border border-gray-800 flex items-center justify-center rounded-sm overflow-hidden">
            <div className="text-center p-8">
              <svg className="w-16 h-16 text-gold/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              <p className="text-gray-500 text-sm mb-2">Google Maps</p>
              <p className="text-gray-600 text-xs">Aguas Claras, Brasilia-DF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
