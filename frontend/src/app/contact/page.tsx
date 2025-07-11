import ContactHeroSection from "@/components/page/contact/ContactHeroSection";
import ContactInfoSection from "@/components/page/contact/ContactInfoSection";
import ContactFormSection from "@/components/page/contact/ContactFormSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-primary">
      <ContactHeroSection />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ContactInfoSection />
          <ContactFormSection />
        </div>
      </div>
    </main>
  );
}