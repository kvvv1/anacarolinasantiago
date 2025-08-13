import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ModalitiesSection from "@/components/ModalitiesSection";

const Index = () => {
  return (
    <div className="min-h-screen pt-16 md:pt-16">
      <Header />
      <HeroSection />
      <AboutSection id="sobre" />
      <ServicesSection id="servicos" />
      <DifferentialsSection id="diferenciais" />
      <ModalitiesSection id="atendimento" />
      <TestimonialsSection id="depoimentos" />
      <CTASection id="localizacao" />
      <Footer />
    </div>
  );
};

export default Index;
