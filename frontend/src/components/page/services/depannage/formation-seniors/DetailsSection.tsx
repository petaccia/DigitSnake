"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">Détails de la Formation pour Seniors</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6">
          <p>
            Notre service de formation pour seniors est conçu pour vous aider à vous familiariser avec l'informatique et les outils numériques dans un environnement bienveillant et à votre rythme.
          </p>
          <div className="space-y-4">
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Apprentissage bureautique et internet</h3>
              <p className="text-gray-300">Initiation aux logiciels de traitement de texte, tableurs, et navigation sur internet pour gérer vos emails ou faire des recherches.</p>
            </div>
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Sécurité en ligne</h3>
              <p className="text-gray-300">Conseils pratiques pour protéger vos données personnelles, reconnaître les arnaques et naviguer en toute sécurité.</p>
            </div>
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Utilisation des réseaux sociaux</h3>
              <p className="text-gray-300">Apprentissage de l'utilisation de plateformes comme Facebook ou WhatsApp pour rester en contact avec vos proches.</p>
            </div>
          </div>
          <p>
            Que vous soyez novice ou que vous souhaitiez approfondir vos connaissances, nos sessions individuelles ou en petits groupes sont adaptées à votre niveau pour un apprentissage efficace.
          </p>
        </div>
        <div className="mt-12 bg-blue-900/30 rounded-2xl p-6 md:p-8 border border-blue-700 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2 text-blue-300">Tarification</h3>
          <p className="text-blue-200">
            Les formations sont facturées à l'heure, à partir de 40€ HT/heure pour des sessions individuelles. Des forfaits pour plusieurs séances sont disponibles à tarif réduit.
          </p>
        </div>
      </div>
    </section>
  );
}
