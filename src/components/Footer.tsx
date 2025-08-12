import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 gradient-section border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand and description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Lívia Garcia
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nutricionista especializada em emagrecimento saudável e nutrição esportiva. 
                Transformando vidas através da alimentação consciente.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-smooth cursor-pointer">
                <Instagram className="h-5 w-5 text-primary" />
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-smooth cursor-pointer">
                <Facebook className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">(31) 9999-9999</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">contato@liviagarcia.com.br</span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div className="text-muted-foreground">
                  <p>Consultório em Belo Horizonte</p>
                  <p className="text-sm">Endereço completo será informado no agendamento</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Serviços</h4>
            
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Nutrição Clínica</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Nutrição Esportiva</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Atendimento Online</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Atendimento Presencial</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Lívia Garcia - Nutricionista. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            CRN-9: 12345 • Belo Horizonte, MG
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;