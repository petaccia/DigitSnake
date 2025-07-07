export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-green-600/90 to-green-400/70 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">Pack Starter - Site Vitrine 3 Pages</h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 font-medium animate-fade-in-delay">
            Un site vitrine de 3 pages (Accueil, Services, Contact) pour présenter votre activité de manière professionnelle. Idéal pour les entreprises en démarrage ou les professionnels souhaitant une présence en ligne structurée.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Demander un Devis 
            </a>
            <a href="#details" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Détails de l'Offre
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
