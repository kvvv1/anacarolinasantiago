import { Heart, Award, Users } from "lucide-react";

type SectionProps = { id?: string };

const AboutSection = ({ id }: SectionProps) => {
  return (
    <section id={id} className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a <span className="text-primary">Ana Caroline Santiago</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nutricionista apaixonada por nutrição e bem-estar, com foco em promover saúde integral,
                equilíbrio e performance de forma sustentável.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acredito que a alimentação é a base para uma vida longa e de qualidade. Por isso, utilizo
                uma abordagem personalizada, respeitando sua rotina, preferências e objetivos para
                construir um estilo de vida equilibrado e possível no longo prazo.
              </p>
              
              <div className="bg-accent/50 p-6 rounded-2xl border-l-4 border-primary">
                <p className="text-xl font-medium text-foreground italic">
                  "A nutrição vai além do prato: é pilar de longevidade, bem-estar e autonomia."
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 animate-slide-up">
            <div className="bg-card p-8 rounded-2xl shadow-card transition-smooth hover:shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Propósito</h3>
              </div>
                <p className="text-muted-foreground">
                  Promover saúde integral por meio de escolhas alimentares realistas e prazerosas
                </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card transition-smooth hover:shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Abordagem</h3>
              </div>
                <p className="text-muted-foreground">
                  Atendimento humanizado e individualizado, com foco em sustentabilidade e equilíbrio
                </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card transition-smooth hover:shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Resultados</h3>
              </div>
                <p className="text-muted-foreground">
                  Resultados consistentes sem extremismos, com construção de hábitos duradouros
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;