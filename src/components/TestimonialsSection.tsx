import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type SectionProps = { id?: string };

const TestimonialsSection = ({ id }: SectionProps) => {
  const testimonials = [
    {
      name: "Fernanda M.",
      text: "Em 4 meses perdi 9 kg sem passar fome. O plano respeitou minha rotina corrida e aprendi a montar pratos equilibrados.",
      rating: 5,
      result: "−9 kg em 4 meses"
    },
    {
      name: "Rafael T.",
      text: "Voltei a correr 10 km com energia e sem desconforto. A estratégia de pré e pós‑treino fez toda a diferença na recuperação.",
      rating: 5,
      result: "Performance e recuperação otimizadas"
    },
    {
      name: "Camila A.",
      text: "Minha relação com a comida mudou. Acabei com o efeito sanfona e hoje tenho hábitos que consigo manter no dia a dia.",
      rating: 5,
      result: "Hábitos sustentáveis"
    }
  ];

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Depoimentos de <span className="text-primary">Pacientes</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-soft transition-smooth hover:-translate-y-1 animate-slide-up border-0 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="h-8 w-8 text-primary/40" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;