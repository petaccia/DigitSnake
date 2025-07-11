import DevisHeroSection from "@/components/page/devis/DevisHeroSection";
import DevisSectionForm from "@/components/page/devis/DevisSectionForm";

export default function DevisPage() {
  return (
    <main className="min-h-screen bg-background">
      <DevisHeroSection />
      <DevisSectionForm />
    </main>
  );
}