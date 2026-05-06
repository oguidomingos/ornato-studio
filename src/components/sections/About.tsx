import { Award, Heart, Shield } from 'lucide-react'
import { SITE_CONFIG } from '@/data/content'

const highlights = [
  {
    icon: Award,
    title: '8 Anos',
    description: 'Dedicados à arte da tatuagem, com aperfeiçoamento constante em técnicas e estilos.',
  },
  {
    icon: Heart,
    title: 'Arte Autoral',
    description: 'Cada projeto é único e criado especialmente para você, respeitando sua história e personalidade.',
  },
  {
    icon: Shield,
    title: 'Biossegurança',
    description: 'Materiais descartáveis, esterilização rigorosa e ambiente limpo seguindo todas as normas de saúde.',
  },
]

export function About() {
  return (
    <section id="sobre" className="bg-card py-20 sm:py-28" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
              <img
                src={`${import.meta.env.BASE_URL}images/hanna-portrait.jpg`}
                alt={`${SITE_CONFIG.artist} — tatuadora em Brasília`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2
              id="about-heading"
              className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Sobre <span className="text-accent">{SITE_CONFIG.artist}</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p className="font-heading text-lg font-semibold italic text-foreground sm:text-xl">
                &ldquo;Para mim, tatuar nunca foi só reproduzir um desenho. É sobre a confiança que você deposita no meu trabalho.&rdquo;
              </p>
              <p>
                Sou a Hanna, tatuadora em Brasília há 8 anos, e o que mais me fascina na tatuagem é a oportunidade de
                transformar a sua ideia em uma arte que vai te acompanhar para sempre. Ao longo dessa jornada, me aprofundei
                no <em>Ornamental, Fine Line</em> e <em>Realismo</em>, estilos que exigem precisão, técnica e muita sensibilidade.
              </p>
              <p>
                Quando você senta na minha maca, meu objetivo é garantir que a arte flua perfeitamente com o seu corpo e
                faça sentido com a sua história. Quero que o seu processo seja tranquilo, no seu tempo, sem pressa. Meu
                espaço foi pensado para que você se sinta em casa, com segurança, limpeza impecável e todo o suporte
                necessário antes, durante e depois da sessão. Vamos criar algo único juntos?
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="text-center sm:text-left">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 sm:mx-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
