import HeroSection from "../components/page/home/HeroSection";
import AboutSection from "../components/page/home/AboutSection";
import ServicesSection from "../components/page/home/ServicesSection";

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
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/80 to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à Démarrer Votre Projet ?</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Contactez-nous pour un site web, un dépannage ou une formation. Nous sommes là pour vous aider à réussir dans le numérique.
            </p>
            <a href="/contact" className="inline-block bg-secondary text-white px-8 py-4 rounded-lg font-medium hover:bg-secondary/90 transition-colors">
              Nous Contacter
            </a>
          </div>
        </section>
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
