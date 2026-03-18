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
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <p className="text-gold/80 tracking-[0.3em] uppercase text-xs sm:text-sm mb-3">
            Duvidas
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">Perguntas Frequentes</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 hover:border-gold/30 transition-colors duration-300 animate-on-scroll"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="text-sm sm:text-base text-white pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-400 text-sm leading-relaxed">
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
