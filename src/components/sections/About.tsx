import { Award, Heart, Shield } from 'lucide-react'
import { SITE_CONFIG } from '@/data/content'

const highlights = [
  {
    icon: Award,
    title: '8 Anos',
    description: '8 anos de dedicação à arte da tatuagem com aperfeiçoamento constante em técnicas e estilos.',
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
              <p>
                Hanna Almeida é tatuadora em Brasília-DF com 8 anos de experiência.
                Apaixonada pela arte desde nova, encontrou na tatuagem a forma perfeita de unir criatividade e conexão humana.
              </p>
              <p>
                Especialista em estilos ornamental, fine line e realismo, Hanna se dedica a transformar as ideias de cada
                cliente em arte exclusiva na pele. Cada traço é pensado com cuidado, respeitando a anatomia, o estilo
                pessoal e a história de quem tatua.
              </p>
              <p>
                O atendimento é personalizado do início ao fim — desde o primeiro contato pelo WhatsApp
                até os cuidados pós-sessão. O ambiente é acolhedor, limpo e segue rigorosos padrões de biossegurança.
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
