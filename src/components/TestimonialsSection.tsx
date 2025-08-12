import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  // Preparado para receber depoimentos futuros
  const placeholderTestimonials = [
    {
      name: "Ana Silva",
      text: "Aqui será inserido um depoimento real de paciente satisfeito com os resultados alcançados.",
      rating: 5,
      result: "Perdeu 15kg em 6 meses"
    },
    {
      name: "Carlos Santos",
      text: "Espaço reservado para depoimento sobre melhora na performance esportiva e qualidade de vida.",
      rating: 5,
      result: "Melhorou performance em 30%"
    },
    {
      name: "Maria Oliveira",
      text: "Local destinado ao relato sobre mudança na relação com a comida e autoestima.",
      rating: 5,
      result: "Conquistou autoestima"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Depoimentos de <span className="text-primary">Pacientes</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Em breve, você verá aqui os relatos de transformação dos meus pacientes
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {placeholderTestimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-soft transition-smooth hover:-translate-y-1 animate-slide-up border-0 bg-card opacity-60"
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
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            📝 Esta seção será atualizada com depoimentos reais em breve
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;