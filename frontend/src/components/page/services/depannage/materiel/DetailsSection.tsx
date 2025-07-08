"use client";

export default function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">Détails du Service de Matériel Informatique</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6">
          <p>
            Nous proposons des solutions complètes pour l'acquisition et l'assemblage de matériel informatique, adaptées à vos besoins personnels ou professionnels, avec une option écologique via le reconditionné.
          </p>
          <div className="space-y-4">
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Conseils personnalisés</h3>
              <p className="text-gray-300">Analyse de vos besoins pour vous orienter vers les meilleures solutions matérielles, que ce soit pour le gaming, la bureautique ou des serveurs.</p>
            </div>
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Assemblage sur mesure</h3>
              <p className="text-gray-300">Montage de PC personnalisés avec des composants choisis pour leur performance et leur compatibilité, garantissant une configuration optimale.</p>
            </div>
            <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-700">
              <h3 className="text-xl font-semibold text-indigo-300">Solutions reconditionnées écologiques</h3>
              <p className="text-gray-300">Proposition de matériel reconditionné testé et garanti, pour un choix économique et respectueux de l'environnement.</p>
            </div>
          </div>
          <p>
            Que vous cherchiez à construire une machine puissante ou à remplacer un ancien équipement par une solution abordable, nous avons les options qu'il vous faut.
          </p>
        </div>
        <div className="mt-12 bg-blue-900/30 rounded-2xl p-6 md:p-8 border border-blue-700 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2 text-blue-300">Tarification</h3>
          <p className="text-blue-200">
            Les prix varient selon les composants choisis et l'état (neuf ou reconditionné). L'assemblage est facturé à partir de 80€ HT, hors coût des pièces. Devis gratuit sur demande.
          </p>
        </div>
      </div>
    </section>
  );
}
