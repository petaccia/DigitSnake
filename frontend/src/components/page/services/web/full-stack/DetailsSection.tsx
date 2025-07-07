"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">Détails de l'Offre Full Stack</h2>
        <div className="max-w-9xl mx-auto">
          <div className="bg-primary/85 p-8 rounded-2xl shadow-xl border border-octonary/30 mb-8">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-octonary-rgb), 0.3);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-octonary">Tarif : Sur devis (TJM 300-500€ HT/jour)</h3>
            <p className="text-gray-200 mb-6">
              L'Offre Full Stack est conçue pour des projets web complexes nécessitant un développement frontend et backend sur mesure. Idéal pour des applications web personnalisées ou des plateformes avec des fonctionnalités avancées.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-octonary">Ce qui est inclus :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-center"><span className="text-octonary mr-2">✓</span> Développement frontend et backend</li>
                  <li className="flex items-center"><span className="text-octonary mr-2">✓</span> Conception d'application web sur mesure</li>
                  <li className="flex items-center"><span className="text-octonary mr-2">✓</span> Intégration de bases de données et API</li>
                  <li className="flex items-center"><span className="text-octonary mr-2">✓</span> Allers-retours de corrections selon le projet</li>
                  <li className="flex items-center"><span className="text-octonary mr-2">✓</span> Délai de livraison : À partir de 3 semaines (selon complexité)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-octonary">Options supplémentaires :</h4>
                <ul className="list-none space-y-2 text-gray-200">
                  <li className="flex items-center"><span className="text-octonary mr-2">+ Sur devis</span> Hébergement et maintenance annuelle</li>
                  <li className="flex items-center"><span className="text-octonary mr-2">+ Sur devis</span> Développement de fonctionnalités spécifiques (authentification, tableaux de bord)</li>
                  <li className="flex items-center"><span className="text-octonary mr-2">+ Sur devis</span> Support technique continu post-livraison</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-primary/75 p-8 rounded-2xl shadow-xl border border-octonary/20">
            <style jsx>{`
              div {
                box-shadow: 0 4px 14px 0 rgba(var(--color-octonary-rgb), 0.2);
              }
            `}</style>
            <h3 className="text-2xl font-bold mb-4 text-octonary">Pourquoi Choisir l'Offre Full Stack ?</h3>
            <p className="text-gray-200 mb-6">
              Cette offre est parfaite pour les projets nécessitant une expertise technique approfondie. Nous développons des solutions robustes et évolutives pour répondre à vos besoins spécifiques, qu'il s'agisse d'une application interne ou d'une plateforme client.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-octonary font-bold mr-3 text-xl">1.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Expertise Complète</h4>
                  <p className="text-gray-200">Gestion de l'ensemble du développement, du design à la logique backend.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-octonary font-bold mr-3 text-xl">2.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Solution Évolutive</h4>
                  <p className="text-gray-200">Des applications conçues pour s'adapter à la croissance de votre activité.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-octonary font-bold mr-3 text-xl">3.</span>
                <div>
                  <h4 className="font-semibold text-gray-100">Collaboration Étroite</h4>
                  <p className="text-gray-200">Un partenariat pour définir et atteindre vos objectifs techniques.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-yellow-50 rounded-2xl p-6 md:p-8 border border-yellow-200">
            <h3 className="text-xl font-bold mb-2 text-yellow-800">Note Importante (Travail Solo)</h3>
            <p className="text-yellow-700">
              En tant que travailleur indépendant, je m'engage à offrir une attention exclusive à chaque projet. Cependant, je travaille uniquement pendant les jours ouvrés, sans disponibilité 24/7 ou pour des urgences soir/week-end. Les délais sont garantis en jours ouvrés uniquement pour assurer une qualité optimale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
