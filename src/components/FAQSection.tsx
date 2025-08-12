import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

type SectionProps = { id?: string };

const faqs = [
  { q: "Como funciona a primeira consulta?", a: "Realizamos uma avaliação completa do seu histórico, rotina e objetivos. A partir disso, definimos um plano personalizado." },
  { q: "Atende online?", a: "Sim. O atendimento online oferece a mesma qualidade e acompanhamento do presencial." },
  { q: "Preciso usar suplementos?", a: "Só quando necessário. O foco é na alimentação; suplementação é indicada de forma individualizada." },
  { q: "Com que frequência acontecem os retornos?", a: "Em geral a cada 30 dias, mas ajustamos conforme sua necessidade e evolução." },
  { q: "Trabalha com alergias e intolerâncias?", a: "Sim. Adequamos o plano alimentar considerando restrições e preferências." },
  { q: "Como é feito o acompanhamento entre consultas?", a: "Disponibilizo suporte por WhatsApp para ajustes e dúvidas pontuais." },
]

export default function FAQSection({ id }: SectionProps) {
  const middle = Math.ceil(faqs.length / 2)
  const left = faqs.slice(0, middle)
  const right = faqs.slice(middle)

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Dúvidas Frequentes</h2>
            <p className="mt-3 text-muted-foreground">Algumas respostas rápidas para o que mais me perguntam no consultório.</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {left.map((faq, idx) => (
                <AccordionItem key={idx} value={`left-${idx}`} className="border rounded-xl bg-card">
                  <AccordionTrigger className="px-5 py-4 text-left rounded-xl hover:no-underline data-[state=open]:text-foreground">
                    <span className="font-medium">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="single" collapsible className="w-full space-y-3">
              {right.map((faq, idx) => (
                <AccordionItem key={idx} value={`right-${idx}`} className="border rounded-xl bg-card">
                  <AccordionTrigger className="px-5 py-4 text-left rounded-xl hover:no-underline data-[state=open]:text-foreground">
                    <span className="font-medium">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}


