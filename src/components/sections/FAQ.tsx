import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { faqItems, WHATSAPP_URL } from '@/data/content'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggleItem(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-card py-20 sm:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="faq-heading"
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Perguntas <span className="text-accent">Frequentes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Tire suas dúvidas sobre agendamento, cuidados e processo.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-background transition-colors"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-sm font-medium text-foreground sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-accent transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'grid transition-all duration-200',
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Ainda tem dúvidas? Entre em contato pelo WhatsApp!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent px-6 py-2.5 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-background"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
