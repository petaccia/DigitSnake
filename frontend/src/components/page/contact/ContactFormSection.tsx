export default function ContactFormSection() {
  return (
    <form
      id="contact-form"
      className="bg-gradient-to-br from-primary via-primary/90 to-secondary/10 rounded-3xl shadow-2xl border-l-8 border-secondary p-8 flex flex-col gap-6 "
    >
      <div className="mb-2">
        <span className="inline-block bg-secondary text-tertiary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow">
          Écrivez-nous
        </span>
      </div>
      <h2 className="text-3xl font-bold mb-6 text-secondary font-poppins">
        Formulaire de contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
        <label htmlFor="name" className="block text-tertiary font-medium mb-2">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Votre nom"
          className="w-full border border-secondary/40 rounded-lg px-4 py-2 bg-primary/80 text-tertiary placeholder-quaternary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
        />
        </div>
      <div>
        <label htmlFor="email" className="block text-tertiary font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="votre@email.com"
          className="w-full border border-secondary/40 rounded-lg px-4 py-2 bg-primary/80 text-tertiary placeholder-quaternary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
          />
      </div>
          </div>
      <div>
        <label htmlFor="type" className="block text-tertiary font-medium mb-2">
          Type de demande
        </label>
        <select
          id="type"
          name="type"
          required
          className="w-full border border-secondary/40 rounded-lg px-4 py-2 bg-primary/80 text-tertiary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
        >
          <option value="">Sélectionnez</option>
          <option value="web">Création web</option>
          <option value="depannage">Dépannage informatique</option>
          <option value="devis">Demande de devis</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div>
        <label htmlFor="phone" className="block text-tertiary font-medium mb-2">
          Téléphone (optionnel)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Votre numéro de téléphone"
          className="w-full border border-secondary/40 rounded-lg px-4 py-2 bg-primary/80 text-tertiary placeholder-quaternary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-tertiary font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Votre message..."
          className="w-full border border-secondary/40 rounded-lg px-4 py-2 bg-primary/80 text-tertiary placeholder-quaternary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition resize-none"
        />
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="rgpd" required className="accent-secondary" />
        <label htmlFor="rgpd" className="text-xs text-tertiary">
          J’accepte que mes données soient utilisées pour me recontacter (RGPD)
        </label>
      </div>
      <button
        type="submit"
        className="mt-2 bg-secondary text-tertiary font-bold py-3 px-8 rounded-lg hover:bg-octonary hover:text-primary transition text-lg shadow-md"
      >
        Envoyer
      </button>
      <p className="text-xs text-secondary mt-2">
        Réponse sous 24h ouvrées. Vos données restent confidentielles.
      </p>
    </form>
  );
}