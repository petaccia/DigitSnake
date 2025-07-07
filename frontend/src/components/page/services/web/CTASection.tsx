export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/85 via-primary/75 to-secondary/20 shadow-inner relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg animate-fade-in">Transformez Votre Vision en Réalité</h2>
        <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto font-medium animate-fade-in-delay">
          Contactez-nous dès aujourd'hui pour discuter de votre projet de site web et obtenir une solution adaptée à votre budget.
        </p>
        <a href="/contact" className="inline-block bg-secondary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 animate-bounce shadow-lg">
          Nous Contacter Maintenant !
        </a>
      </div>
    </section>
  );
}
