export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/20 shadow-2xl">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-xl animate-pulse">Prêt à Démarrer Votre Projet ?</h2>
        <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto font-medium">
          Contactez-nous pour un <span className="text-quinary font-bold">site web</span>, un <span className="text-octonary font-bold">dépannage</span> ou une <span className="text-secondary font-bold">formation</span>. Nous sommes là pour vous aider à réussir dans le numérique !
        </p>
        <a href="/contact" className="inline-block bg-secondary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 animate-bounce">
          Nous Contacter Maintenant !
        </a>
      </div>
    </section>
  );
}
