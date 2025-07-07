import HeroSection from "../components/page/home/HeroSection";
import AboutSection from "../components/page/home/AboutSection";
import ServicesSection from "../components/page/home/ServicesSection";
import CTASection from "../components/page/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* CTA Section */}
        <CTASection />
      </main>

    </div>
  );
}
