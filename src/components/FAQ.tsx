import { useState } from 'react'

const faqs = [
  {
    question: 'Como funciona o agendamento?',
    answer:
      'O agendamento e feito pelo WhatsApp. Voce envia sua ideia, conversamos sobre o projeto, e agendamos a sessao. E necessario o pagamento de um sinal para reservar a data.',
  },
  {
    question: 'Qual o valor de uma tatuagem?',
    answer:
      'O valor varia de acordo com o tamanho, complexidade, estilo e local do corpo. Cada projeto e orcado individualmente. Entre em contato pelo WhatsApp para receber um orcamento personalizado.',
  },
  {
    question: 'Doi muito para tatuar?',
    answer:
      'A dor varia de pessoa para pessoa e depende da regiao do corpo. Em geral, e uma sensacao suportavel. Algumas areas como costelas e pes podem ser mais sensiveis. Conversamos sobre isso durante o planejamento.',
  },
  {
    question: 'Quais sao os cuidados apos a tatuagem?',
    answer:
      'Apos a sessao, voce recebera um guia completo de cuidados. Em resumo: manter a regiao limpa, aplicar pomada cicatrizante, evitar sol direto, piscina e mar por pelo menos 15 dias, e nao cocar.',
  },
  {
    question: 'Posso levar minha propria ideia ou referencia?',
    answer:
      'Claro! Adoro trabalhar a partir das ideias dos clientes. Voce pode trazer referencias, fotos ou descricoes do que imagina. A partir disso, crio um desenho exclusivo e personalizado para voce.',
  },
  {
    question: 'O estudio e seguro e higienizado?',
    answer:
      'Sim! Seguimos todos os protocolos de biosseguranca. Utilizamos materiais descartaveis e esterilizados, tintas de alta qualidade e o ambiente e higienizado antes e apos cada sessao.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-28 sm:py-36 px-5 sm:px-8 lg:px-10 bg-dark-secondary">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
          <div className="flex items-center justify-center gap-5 mb-5">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-gold/30" />
            <p className="text-gold/60 tracking-[0.4em] uppercase text-[10px]">
              Duvidas
            </p>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-gold/30" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] mb-5 font-light">Perguntas Frequentes</h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border transition-all duration-600 animate-on-scroll stagger-${Math.min(index + 1, 6)} ${
                openIndex === index
                  ? 'border-gold/15 bg-gold/[0.015]'
                  : 'border-white/[0.04] hover:border-white/[0.08]'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 sm:p-7 text-left group"
              >
                <span className={`text-sm sm:text-[15px] pr-6 transition-colors duration-500 font-light ${
                  openIndex === index ? 'text-gold/90' : 'text-white/60 group-hover:text-white/80'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-500 ${
                  openIndex === index
                    ? 'border-gold/25 rotate-45'
                    : 'border-white/[0.06] group-hover:border-gold/15'
                }`}>
                  <svg
                    className={`w-3 h-3 transition-colors duration-500 ${
                      openIndex === index ? 'text-gold/80' : 'text-white/25'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-600 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 sm:px-7 pb-7 text-white/30 text-sm leading-[1.9] font-light">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
