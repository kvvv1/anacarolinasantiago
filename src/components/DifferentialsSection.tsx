import { Heart, Target, Zap, Shield } from "lucide-react";

type SectionProps = { id?: string };

const DifferentialsSection = ({ id }: SectionProps) => {
  const differentials = [
    {
      icon: Target,
      title: "Saúde de longo prazo",
      description: "Mudanças consistentes que priorizam sua saúde hoje e no futuro, evitando soluções imediatistas."
    },
    {
      icon: Heart,
      title: "Sustentabilidade e equilíbrio",
      description: "Sem extremismos: planos que cabem na sua rotina, preservam o prazer de comer e promovem bem‑estar."
    },
    {
      icon: Zap,
      title: "Planos individualizados",
      description: "Estratégias personalizadas a partir da sua história, objetivos, exames e preferências."
    },
    {
      icon: Shield,
      title: "Nutrição para longevidade",
      description: "A nutrição como pilar para viver mais e melhor, com energia, autonomia e qualidade de vida."
    }
  ];

  return (
    <section id={id} className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Filosofia e <span className="text-primary">diferenciais</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Foco em saúde de longo prazo, sustentabilidade e equilíbrio
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {differentials.map((differential, index) => (
            <div 
              key={index}
              className="flex gap-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <differential.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  {differential.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {differential.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-accent/30 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Transforme sua relação com a comida
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Descobra como é possível emagrecer de forma saudável, respeitando seu corpo 
              e mantendo o prazer de comer. Juntos, vamos construir hábitos que durarão para toda a vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;