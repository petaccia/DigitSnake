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

      {/* Footer */}
      <footer className="py-6 bg-primary/95 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} DigitSnake. Tous droits réservés.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
