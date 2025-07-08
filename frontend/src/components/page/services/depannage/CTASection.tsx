"use client";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-blue-900/30 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://unsplash.com/fr/photos/un-ordinateur-portable-dell-avec-un-ecran-rouge-1C5F88Af9ZU')" }}>
        {/* Replace the URL with a specific Unsplash image related to technical support or customer service */}
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">Besoin d'une Assistance Informatique ?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Contactez-nous dès maintenant pour une intervention rapide ou un devis personnalisé. Nous sommes là pour résoudre vos problèmes informatiques efficacement.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="tel:+33612345678" className="bg-indigo-500 text-white hover:bg-indigo-600 transition-all duration-300 px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl text-lg">
              Appeler maintenant : 06 12 34 56 78
            </a>
            <a href="mailto:contact@digitsnake.fr" className="bg-transparent border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400/10 hover:text-indigo-300 transition-all duration-300 px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl text-lg">
              Envoyer un email
            </a>
          </div>
          <div className="mt-8 bg-indigo-800/70 rounded-2xl p-6 border border-indigo-700 inline-block">
            <p className="text-indigo-200">
              <strong>Horaires d'intervention :</strong> Lundi au Vendredi, 9h-18h (hors jours fériés)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
