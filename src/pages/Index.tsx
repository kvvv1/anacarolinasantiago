import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import InstagramCarousel from "@/components/InstagramCarousel";
import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen pt-16 md:pt-16">
      <Header />
      <HeroSection />
      <AboutSection id="sobre" />
      <ServicesSection id="servicos" />
      <DifferentialsSection id="diferenciais" />
      <TestimonialsSection id="depoimentos" />
      <InstagramCarousel
        urls={[
          "https://www.instagram.com/p/DNEMsY3uZFu/",
          "https://www.instagram.com/p/DLkw_LaO8Lq/",
          "https://www.instagram.com/p/DK2C1kPOPno/",
        ]}
        ratio={1}
      />
      <FAQSection id="faq" />
      <CTASection id="localizacao" />
      <Footer />
    </div>
  );
};

export default Index;
