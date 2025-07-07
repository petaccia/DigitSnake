import Card from "@/components/page/services/web/Card";
import HeroSection from "@/components/page/services/web/HeroSection";
import CTASection from "@/components/page/services/web/CTASection";
import DetailsSection from "@/components/page/services/web/DetailsSection";

export default function WebServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="">
            <DetailsSection />
          </div>
          <div className=" bg-yellow-50 rounded-2xl p-6 md:p-8 border border-yellow-200 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-2 text-yellow-800">Note Importante (Travail Solo)</h3>
            <p className="text-yellow-700">
              En tant que travailleur indépendant, je m'engage à offrir une attention exclusive à chaque projet. Cependant, je travaille uniquement pendant les jours ouvrés, sans disponibilité 24/7 ou pour des urgences soir/week-end. Les délais sont garantis en jours ouvrés uniquement pour assurer une qualité optimale.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
