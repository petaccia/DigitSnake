export default function ContactDevisSectionButton() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/85 to-primary/75 shadow-2xl">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white drop-shadow-xl">Contactez-nous</h2>
      <div className="max-w-2xl mx-auto bg-primary/90 p-8 rounded-2xl shadow-xl/35 shadow-secondary hover:shadow-2xl/35 transition-all duration-300 border border-secondary/30">
        <p className="text-gray-200 mb-6 text-center">
          Pour toute demande, veuillez utiliser notre page de <a href="/devis" className="text-secondary font-bold hover:underline">devis</a>.
        </p>
        <div className="flex justify-center">
          <a
            href="/devis"
            className="bg-secondary text-tertiary font-bold py-3 px-8 rounded-lg hover:bg-octonary hover:text-primary transition text-lg shadow-md"
          >
            Accéder au formulaire de devis
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}
