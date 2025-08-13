import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

type HeroSectionProps = {
  imageSrc?: string;
};

const HeroSection = ({ imageSrc = "/anacarolina.avif" }: HeroSectionProps) => {
  return (
    <section className="min-h-screen gradient-hero flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Saúde integral, equilíbrio e performance{" "}
              <span className="text-primary">de forma sustentável</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              A nutricionista Ana Caroline Santiago ajuda você a alcançar seus objetivos com
              uma abordagem acolhedora e personalizada.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#localizacao" className="inline-flex">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-soft transition-smooth hover:shadow-lg hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Agende sua consulta
              </Button>
            </a>
            <a href="#sobre" className="inline-flex">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-smooth hover:scale-105"
              >
                Saiba mais
              </Button>
            </a>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Emagrecimento saudável e sustentável</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Longevidade e qualidade de vida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Estilo de vida equilibrado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Hipertrofia e ganho muscular</span>
            </div>
          </div>
        </div>
        
        <div className="relative animate-slide-up">
          <div className="relative rounded-3xl overflow-hidden shadow-soft">
            <img 
              src={imageSrc} 
              alt="Nutricionista Ana Caroline Santiago" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full blur-xl opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-xl opacity-40 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;