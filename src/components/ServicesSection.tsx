import { Stethoscope, Dumbbell, Video, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type SectionProps = { id?: string };

const ServicesSection = ({ id }: SectionProps) => {
  const services = [
    {
      icon: Stethoscope,
      title: "Nutrição Clínica",
      description: "Planos alimentares personalizados focados em saúde, qualidade de vida e emagrecimento sustentável.",
      features: ["Avaliação nutricional completa", "Planos alimentares flexíveis", "Acompanhamento contínuo"]
    },
    {
      icon: Dumbbell,
      title: "Nutrição Esportiva",
      description: "Estratégias nutricionais para otimizar performance, recuperação e composição corporal de atletas.",
      features: ["Periodização nutricional", "Suplementação orientada", "Melhora da performance"]
    },
    {
      icon: Video,
      title: "Atendimento Online",
      description: "Consultas virtuais com a mesma qualidade do presencial, para sua comodidade e flexibilidade.",
      features: ["Consultas por videochamada", "Materiais digitais", "Suporte via WhatsApp"]
    },
    {
      icon: MapPin,
      title: "Atendimento Presencial",
      description: "Consultório moderno e acolhedor em Belo Horizonte, com toda estrutura para seu atendimento.",
      features: ["Consultório em BH", "Bioimpedância", "Ambiente acolhedor"]
    }
  ];

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Serviços <span className="text-primary">Especializados</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Atendimento personalizado que respeita sua individualidade e estilo de vida
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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