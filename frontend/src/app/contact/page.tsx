import ContactHeroSection from "@/components/page/contact/ContactHeroSection";
import ContactInfoSection from "@/components/page/contact/ContactInfoSection";
import CardMap from "@/components/page/contact/CardMap";
import ContactDevisSectionButton from "@/components/page/contact/ContactDevisSectionButton";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-primary">
      <ContactHeroSection />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-16">
        {/* Section principale avec grille responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          <ContactInfoSection />
          <CardMap />
        </div>

        {/* Section carte avec espacement et centrage */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <ContactDevisSectionButton />
        </div>
      </div>
    </main>
  );
}
