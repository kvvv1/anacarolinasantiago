import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronta para transformar sua vida?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
            Dê o primeiro passo rumo a uma relação mais saudável com a comida. 
            Agende sua consulta e descubra como posso te ajudar a alcançar seus objetivos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/95 px-8 py-4 text-lg font-semibold shadow-soft transition-smooth hover:shadow-lg hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-smooth hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-smooth hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Online
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">8+</div>
              <div className="text-sm">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-sm">Vidas transformadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-sm">Atendimento personalizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;