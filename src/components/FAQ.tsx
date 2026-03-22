import { useState } from 'react'

const faqs = [
  {
    question: 'Como funciona o agendamento?',
    answer:
      'O agendamento é feito pelo WhatsApp. Você envia sua ideia, conversamos sobre o projeto, e agendamos a sessão. É necessário o pagamento de um sinal para reservar a data.',
  },
  {
    question: 'Qual o valor de uma tatuagem?',
    answer:
      'O valor varia de acordo com o tamanho, complexidade, estilo e local do corpo. Cada projeto é orçado individualmente. Entre em contato pelo WhatsApp para receber um orçamento personalizado.',
  },
  {
    question: 'Dói muito para tatuar?',
    answer:
      'A dor varia de pessoa para pessoa e depende da região do corpo. Em geral, é uma sensação suportável. Algumas áreas como costelas e pés podem ser mais sensíveis. Conversamos sobre isso durante o planejamento.',
  },
  {
    question: 'Quais são os cuidados após a tatuagem?',
    answer:
      'Após a sessão, você receberá um guia completo de cuidados. Em resumo: manter a região limpa, aplicar pomada cicatrizante, evitar sol direto, piscina e mar por pelo menos 15 dias, e não coçar.',
  },
  {
    question: 'Posso levar minha própria ideia ou referência?',
    answer:
      'Claro! Adoro trabalhar a partir das ideias dos clientes. Você pode trazer referências, fotos ou descrições do que imagina. A partir disso, crio um desenho exclusivo e personalizado para você.',
  },
  {
    question: 'O estúdio é seguro e higienizado?',
    answer:
      'Sim! Seguimos todos os protocolos de biossegurança. Utilizamos materiais descartáveis e esterilizados, tintas de alta qualidade e o ambiente é higienizado antes e após cada sessão.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-28 sm:py-36 px-5 sm:px-8 lg:px-10 bg-surface-alt">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20 animate-on-scroll">
          <div className="flex items-center justify-center gap-5 mb-5">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <p className="text-gold tracking-[0.4em] uppercase text-[10px]">
              Dúvidas
            </p>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] mb-5 font-light text-text-primary">Perguntas Frequentes</h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border transition-[border-color,background-color] duration-600 animate-faq-item rounded-sm ${
                openIndex === index
                  ? 'border-gold/20 bg-white'
                  : 'border-border-light hover:border-gold/15 bg-surface'
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 sm:p-7 text-left group"
              >
                <span className={`text-sm sm:text-[15px] pr-6 transition-colors duration-500 font-light ${
                  openIndex === index ? 'text-gold' : 'text-text-secondary group-hover:text-text-primary'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-500 rounded-sm ${
                  openIndex === index
                    ? 'border-gold/30 rotate-45'
                    : 'border-border-light group-hover:border-gold/20'
                }`}>
                  <svg
                    className={`w-3 h-3 transition-colors duration-500 ${
                      openIndex === index ? 'text-gold' : 'text-text-muted'
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
                <p className="px-6 sm:px-7 pb-7 text-text-muted text-sm leading-[1.9] font-light">
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
