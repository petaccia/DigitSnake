export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/85 to-primary/75 shadow-2xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white drop-shadow-xl animate-pulse">Découvrez Nos Services !</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-primary/90 p-8 rounded-2xl shadow-xl/35 shadow-secondary hover:shadow-2xl/35  transition-all duration-300 border border-secondary/30 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3 text-secondary">🌐</div>
              <h3 className="text-2xl font-bold text-secondary">Création de Sites Web</h3>
            </div>
            <p className="text-gray-200 mb-5 text-lg">
              De la vitrine simple à l’application web Full Stack, nous concevons des <span className="font-semibold text-quinary">sites modernes</span> et performants adaptés à votre vision.
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center text-gray-200"><span className="text-secondary mr-2">✓</span> Sites vitrines personnalisés</li>
              <li className="flex items-center text-gray-200"><span className="text-secondary mr-2">✓</span> Applications web sur mesure</li>
              <li className="flex items-center text-gray-200"><span className="text-secondary mr-2">✓</span> Design responsive et moderne</li>
            </ul>
          </article>
          <article className="bg-primary/90 p-8 rounded-2xl shadow-xl/35 shadow-octonary hover:shadow-2xl/35 transition-all duration-300 border border-octonary/30 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3 text-octonary">🛠️</div>
              <h3 className="text-2xl font-bold text-octonary">Dépannage Informatique</h3>
            </div>
            <p className="text-gray-200 mb-5 text-lg">
              <span className="font-semibold text-octonary">Support et maintenance</span> pour tous, avec une attention particulière pour rendre la technologie accessible.
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center text-gray-200"><span className="text-octonary mr-2">✓</span> Diagnostic & dépannage rapide</li>
              <li className="flex items-center text-gray-200"><span className="text-octonary mr-2">✓</span> Installation matériel et logiciel</li>
              <li className="flex items-center text-gray-200"><span className="text-octonary mr-2">✓</span> Formation personnalisée</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
