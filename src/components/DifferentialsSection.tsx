import { Heart, Target, Zap, Shield } from "lucide-react";

type SectionProps = { id?: string };

const DifferentialsSection = ({ id }: SectionProps) => {
  const differentials = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cada pessoa é única. Por isso, desenvolvo um plano alimentar que respeita suas preferências, rotina e objetivos pessoais."
    },
    {
      icon: Target,
      title: "Resultados Sustentáveis",
      description: "Foco em mudanças graduais e realistas que se tornam hábitos duradouros, garantindo resultados que permanecem ao longo do tempo."
    },
    {
      icon: Zap,
      title: "Flexibilidade no Plano",
      description: "Planos alimentares que se adaptam ao seu estilo de vida, sem restrições extremas ou 'dietas milagrosas'."
    },
    {
      icon: Shield,
      title: "Acompanhamento Contínuo",
      description: "Suporte constante através de consultas regulares e comunicação direta para ajustes e esclarecimento de dúvidas."
    }
  ];

  return (
    <section id={id} className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher a <span className="text-primary">Lívia Garcia?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Diferenciais que fazem toda a diferença na sua jornada de transformação
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