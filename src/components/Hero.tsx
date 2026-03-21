const WHATSAPP_URL = 'https://wa.me/5561999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20tatuagem%20com%20a%20Hanna%20Almeida.'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — tattoo close-up */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-105"
          loading="eager"
        />
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_bottom_left,_#b08d57_0%,_transparent_50%)]" />
      </div>

      {/* Decorative frame */}
      <div className="absolute inset-8 sm:inset-12 md:inset-16 border border-text-primary/[0.04] pointer-events-none" />
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 md:top-16 md:left-16 w-10 h-10 border-t border-l border-gold/25 pointer-events-none" />
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-16 md:right-16 w-10 h-10 border-b border-r border-gold/25 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto">
        {/* Tagline */}
        <div className="flex items-center justify-center gap-5 mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <span className="w-10 sm:w-14 h-px bg-gradient-to-r from-transparent to-gold/50" />
          <p className="text-gold tracking-[0.5em] uppercase text-[10px] sm:text-[11px]">
            Tatuadora Autoral em Brasilia
          </p>
          <span className="w-10 sm:w-14 h-px bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Main headline */}
        <h1 className="font-heading text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.08] mb-4 sm:mb-5 font-light text-text-primary animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
          Hanna Almeida
        </h1>
        <p className="font-heading text-gold italic font-normal text-[1.5rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
          Arte na Pele, Feita com Alma
        </p>

        {/* Subheadline */}
        <p className="text-text-secondary text-[15px] sm:text-base md:text-lg max-w-xl mx-auto mb-12 sm:mb-14 leading-[1.8] font-light animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0 }}>
          Especialista em realismo preto e cinza, fine line e ornamental.
          Mais de 8 anos transformando ideias em arte permanente com tecnica e sensibilidade.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 animate-fade-in" style={{ animationDelay: '0.8s', opacity: 0 }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gold text-white px-9 sm:px-10 py-4 text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-gold-dark transition-all duration-500 hover:shadow-[0_0_40px_rgba(176,141,87,0.2)]"
          >
            <svg className="w-[18px] h-[18px] transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Agende sua Sessao
          </a>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 text-[13px] tracking-[0.15em] text-text-muted hover:text-gold transition-colors duration-500 uppercase"
          >
            Ver Portfolio
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce-slow">
        <span className="text-[9px] tracking-[0.4em] text-text-muted/50 uppercase">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-gold/30 to-transparent" />
      </div>
    </section>
  )
}
