import HeroSection from "../components/page/home/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section className="py-16 md:py-24 bg-primary/90">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">À Propos de DigitSnake</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-200 mb-6">
                DigitSnake est dédié à rendre l’informatique simple et accessible à tous. Notre mission est d’accompagner nos clients, avec un accent particulier sur les seniors, pour réduire la fracture numérique.
              </p>
              <p className="text-lg text-gray-200">
                Que ce soit pour un site web sur mesure ou un dépannage informatique, nous proposons des solutions personnalisées adaptées à vos besoins.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py- v16 md:py-24 bg-primary/85">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nos Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-primary/80 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Création de Sites Web</h3>
                <p className="text-gray-300 mb-4">
                  De la vitrine simple OnePage Express à l’application web Full Stack, nous concevons des sites modernes et performants adaptés à votre budget.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>OnePage Express : 300 € TTC</li>
                  <li>Pack Starter (3 pages) : 450-500 € TTC</li>
                  <li>Pack Premium (5+ pages) : 1200-1500 € TTC</li>
                  <li>Applications Web sur mesure</li>
                </ul>
              </article>
              <article className="bg-primary/80 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Dépannage Informatique</h3>
                <p className="text-gray-300 mb-4">
                  Support, maintenance et formation pour tous, avec des tarifs réduits pour les seniors.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Diagnostic & dépannage rapide</li>
                  <li>Installation matériel et logiciel</li>
                  <li>Formation personnalisée seniors</li>
                  <li>Taux horaire : 50 €/h (40 €/h seniors)</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

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
