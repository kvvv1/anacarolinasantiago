import { Heart, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a <span className="text-primary">Lívia Garcia</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nutricionista especializada em nutrição clínica e esportiva, formada pela 
                Universidade Federal de Minas Gerais, com pós-graduação em Nutrição Esportiva 
                e Funcional.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha filosofia de trabalho é baseada no atendimento humanizado, respeitando 
                a individualidade de cada paciente e promovendo uma relação saudável com a alimentação.
              </p>
              
              <div className="bg-accent/50 p-6 rounded-2xl border-l-4 border-primary">
                <p className="text-xl font-medium text-foreground italic">
                  "Existe amor no que faço e satisfação em saber que ajudo a mudar vidas."
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
                <h3 className="text-xl font-semibold text-foreground">Formação</h3>
              </div>
              <p className="text-muted-foreground">
                Graduação em Nutrição (UFMG) e Pós-graduação em Nutrição Esportiva e Funcional
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card transition-smooth hover:shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Especialidade</h3>
              </div>
              <p className="text-muted-foreground">
                Emagrecimento saudável e nutrição esportiva com abordagem humanizada
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card transition-smooth hover:shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Experiência</h3>
              </div>
              <p className="text-muted-foreground">
                Mais de 8 anos transformando vidas através da nutrição personalizada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;