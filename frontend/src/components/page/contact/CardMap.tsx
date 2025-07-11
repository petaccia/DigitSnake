// frontend/src/components/page/contact/CardMap.tsx

export default function CardMap() {
  return (
    <section className="w-full bg-gradient-to-br from-primary via-primary/90 to-secondary/10 rounded-3xl border-l-8 border-secondary border shadow-2xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-secondary mb-2 font-poppins">
          Nous situer
        </h2>
        <p className="text-tertiary  font-medium">
          10 rue Georges Bréant, 28410 Broué
        </p>
      </div>
      <div className="w-full h-96">
        <iframe
          title="Carte - 10 rue Georges Bréant, 28410 Broué"
          src="https://www.google.com/maps?q=10+rue+Georges+Bréant,+28410+Broué&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-b-3xl w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}