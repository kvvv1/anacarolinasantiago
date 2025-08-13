import { Video, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type SectionProps = { id?: string };

const ModalitiesSection = ({ id }: SectionProps) => {
  const modalities = [
    {
      icon: MapPin,
      title: "Consulta presencial",
      description: "Atendimento acolhedor em consultório, com avaliação completa e plano personalizado.",
      features: ["Duração: 1 hora", "Avaliação detalhada", "Plano inicial e ajustes"],
    },
    {
      icon: Video,
      title: "Consulta online",
      description: "A mesma qualidade do presencial, com praticidade e flexibilidade para a sua rotina.",
      features: ["Duração: 1 hora", "Videochamada", "Materiais e suporte"],
    },
  ];

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Atendimento</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Consultas presenciais e online, ambas com duração de 1 hora
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {modalities.map((item, index) => (
            <Card 
              key={index}
              className="group hover:shadow-soft transition-smooth hover:-translate-y-2 animate-slide-up border-0 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
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

export default ModalitiesSection;


