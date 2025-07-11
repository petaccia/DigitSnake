import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactInfoSection() {
  return (
    <section className="max-w-md mx-auto p-8 bg-gradient-to-br from-primary via-primary/90 to-secondary/10 rounded-3xl border-l-8 border-secondary shadow-2xl flex flex-col gap-8">
      <div className="mb-4">
        <span className="inline-block bg-secondary text-tertiary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow">
          Nous contacter
        </span>
      </div>
      <h2 className="text-3xl font-extrabold text-secondary mb-4 font-poppins tracking-tight">
        Coordonnées
      </h2>

      {/* Téléphone */}
      <div className="flex items-center gap-4 bg-primary/80 rounded-xl px-5 py-4 shadow transition hover:scale-[1.02] border-l-4 border-secondary">
        <FaPhone className="text-secondary text-3xl" />
        <a
          href="tel:+33638194752"
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
          className="text-tertiary text-lg font-semibold hover:text-secondary transition break-all"
        >
          contact@digitsnake.fr
        </a>
      </div>

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
          <div className="text-secondary text-sm italic tracking-wide">
            Lundi – Vendredi : 9h – 18h<br />
            Samedi & Dimanche : Fermé
          </div>
        </div>
      </div>
    </section>
  );
}
