import ContactHeroSection from "@/components/page/contact/ContactHeroSection";
import ContactInfoSection from "@/components/page/contact/ContactInfoSection";
import ContactFormSection from "@/components/page/contact/ContactFormSection";
import CardMap from "@/components/page/contact/CardMap";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-primary">
      <ContactHeroSection />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-16">
        {/* Section principale avec grille responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          <ContactInfoSection />
          <ContactFormSection />
        </div>

        {/* Section carte avec espacement et centrage */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <CardMap />
        </div>
      </div>
    </main>
  );
}
