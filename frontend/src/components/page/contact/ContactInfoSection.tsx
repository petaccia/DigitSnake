import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactInfoSection() {
  return (
    <section className="w-full p-8 bg-gradient-to-br from-primary via-primary/90 to-secondary/10 rounded-3xl border-l-8 border-secondary shadow-2xl flex flex-col justify-between h-full min-h-[600px]">
      <div>
        <span className="inline-block bg-secondary text-tertiary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow">
          Nous contacter
        </span>
        <h2 className="text-3xl font-extrabold text-secondary font-poppins tracking-tight mt-4">
          Coordonnées
        </h2>
        <div className="space-y-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Téléphone */}
            <div className="flex items-center gap-4 bg-primary/80 rounded-xl px-5 py-4 shadow transition hover:scale-[1.02] border-l-4 border-secondary">
              <FaPhone className="text-secondary text-3xl" />
              <a
                href="tel:+33638194752"
                aria-label="Numéro de téléphone"
                className="text-tertiary text-lg font-semibold hover:text-secondary transition"
              >
                06 38 19 47 52
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-primary/80 rounded-xl px-5 py-4 shadow transition hover:scale-[1.02] border-l-4 border-secondary">
              <FaEnvelope className="text-secondary text-3xl" />
              <a
                href="mailto:contact@digitsnake.fr"
                aria-label="Adresse email"
                className="text-tertiary text-lg font-semibold hover:text-secondary transition break-all"
              >
                contact@digitsnake.fr
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Adresse */}
            <div className="flex items-center gap-4 bg-primary/80 rounded-xl px-5 py-4 shadow transition hover:scale-[1.02] border-l-4 border-secondary">
              <FaMapMarkerAlt className="text-secondary text-3xl" />
              <address className="not-italic text-tertiary text-lg font-semibold">
                10 rue Georges Bréant, 28410 Broué
              </address>
            </div>

            {/* Horaires */}
            <div className="flex items-center gap-4 bg-primary/80 rounded-xl px-5 py-4 shadow transition hover:scale-[1.02] border-l-4 border-secondary">
              <FaClock className="text-secondary text-3xl" />
              <div>
                <div className="text-tertiary text-lg font-semibold">Disponibilité</div>
                <div className="text-secondary text-sm italic tracking-wide leading-relaxed">
                  Lundi – Vendredi : 9h – 18h<br />
                  Samedi & Dimanche : Fermé
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bloc bas collé */}
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="flex items-center gap-2 text-secondary text-base font-semibold mb-1">
          <FaMapMarkedAlt className="text-2xl" />
          <span>Intervention dans un rayon de 20 km autour de Broué</span>
        </div>
        <div className="text-quaternary text-sm italic text-center mb-2">
          Réponse sous 24h ouvrées – Service personnalisé et transparent.
        </div>
        <div className="flex flex-row gap-4 mt-2">
          <a
            href="tel:+33638194752"
            className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-6 py-2 rounded-full shadow hover:bg-octonary hover:text-tertiary transition"
          >
            <FaPhone className="w-5 h-5" />
            Appeler directement
          </a>
          <a
            href="https://wa.me/33638194752"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-primary font-bold px-6 py-2 rounded-full shadow hover:bg-octonary hover:text-tertiary transition"
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
        <div className="mt-4 text-quaternary text-xs text-center">
          SIRET : 123 456 789 00012 – <a href="/mentions-legales" className="underline hover:text-secondary">Mentions légales</a>
        </div>
      </div>
    </section>
  );
}
