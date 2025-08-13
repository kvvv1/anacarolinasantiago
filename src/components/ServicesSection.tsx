import { Heart, Activity, Leaf, Dumbbell, ClipboardList } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type SectionProps = { id?: string };

const ServicesSection = ({ id }: SectionProps) => {
  const services = [
    {
      icon: Heart,
      title: "Emagrecimento saudável",
      description: "Estratégias personalizadas para perder gordura com saúde e sem extremismos.",
      features: ["Plano flexível", "Educação alimentar", "Resultados sustentáveis"]
    },
    {
      icon: Activity,
      title: "Longevidade e qualidade de vida",
      description: "Nutrição como pilar da saúde a longo prazo, energia e disposição no dia a dia.",
      features: ["Prevenção ativa", "Rotina realista", "Bem-estar contínuo"]
    },
    {
      icon: Leaf,
      title: "Estilo de vida equilibrado",
      description: "Construção de hábitos e relação saudável com a comida, sem dietas restritivas.",
      features: ["Flexibilidade", "Prazer em comer", "Autonomia"]
    },
    {
      icon: Dumbbell,
      title: "Hipertrofia e ganho muscular",
      description: "Planejamento para aumento de massa magra e melhora da performance e recuperação.",
      features: ["Periodização", "Ajustes por fase", "Composição corporal"]
    },
    {
      icon: ClipboardList,
      title: "Avaliação nutricional personalizada",
      description: "Análise completa do seu histórico, hábitos e exames para traçar metas claras.",
      features: ["Duração de 1 hora", "Anamnese aprofundada", "Plano inicial"]
    }
  ];

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Especialidades</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Abordagens para saúde integral, equilíbrio e performance
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
        </div>
        
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-soft transition-smooth hover:-translate-y-2 animate-slide-up border-0 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;