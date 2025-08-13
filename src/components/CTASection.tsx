import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ADDRESS = "R. Silveira, 525 - Graça, Belo Horizonte - MG, 31140-000";
const PHONE_DISPLAY = "(31) 99699-6685";
const WHATSAPP_NUMBER = "5531996996685";
const WHATSAPP_MESSAGE = "Olá, gostaria de agendar uma consulta com a Ana Caroline Santiago.";

type SectionProps = { id?: string };

const CTASection = ({ id }: SectionProps) => {
  const mapsQuery = encodeURIComponent(ADDRESS);
  const mapSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Agende sua consulta
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atendimentos presenciais e online. Agende pelo WhatsApp e dê o primeiro passo rumo à sua saúde integral.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Atendimento</p>
                  <p className="text-muted-foreground">Presencial e online • {ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telefone/WhatsApp</p>
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Button size="lg" className="px-8 py-6 text-base">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chamar no WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border bg-card">
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="Localização no Google Maps"
                src={mapSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;