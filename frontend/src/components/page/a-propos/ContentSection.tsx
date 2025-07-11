"use client";

export default function AboutContentSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Notre histoire</h2>

          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              DigitSnake est née d’un parcours atypique et inspirant : celui d’un professionnel de terrain 
              qui a choisi de se réinventer dans le numérique. Fort d’une solide expérience dans la technique, 
              la rigueur et le service, j’ai lancé cette entreprise pour proposer des solutions modernes, 
              accessibles et adaptées aux besoins réels des utilisateurs.
            </p>

            <p className="mb-4">
              Depuis sa création en 2025, DigitSnake accompagne les particuliers, professionnels et seniors 
              sur deux fronts : le dépannage informatique local et le développement web sur mesure. 
              Notre approche repose sur l’écoute, la pédagogie et un véritable souci de clarté dans chaque intervention.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Notre mission</h3>

            <p className="mb-4">
              Chez DigitSnake, nous croyons que la technologie doit rester simple, utile et humaine. 
              Notre mission est de rendre le numérique plus compréhensible et accessible à tous, que ce soit 
              pour dépanner un ordinateur, créer un site vitrine, ou former un utilisateur aux bons réflexes numériques.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Notre approche</h3>

            <p className="mb-4">
              Chaque client est unique. C’est pourquoi nous adaptons nos prestations à chaque situation, 
              avec une approche claire, transparente et orientée solution. Que vous soyez une PME souhaitant 
              valoriser sa présence en ligne ou un particulier ayant besoin d’assistance, vous trouverez chez DigitSnake 
              une réponse personnalisée, rapide et efficace.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Un accompagnement humain</h3>

            <p>
              Derrière DigitSnake, c’est une seule personne qui vous accompagne de A à Z, avec passion et professionnalisme. 
              Une relation de confiance, un suivi de proximité, et l’assurance d’un travail bien fait. 
              Car au-delà des outils, c’est l’humain qui fait la différence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
