import AboutHeroSection from "@/components/page/a-propos/HeroSection";
import AboutContentSection from "@/components/page/a-propos/ContentSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutHeroSection />
      <AboutContentSection />
    </main>
  );
}
