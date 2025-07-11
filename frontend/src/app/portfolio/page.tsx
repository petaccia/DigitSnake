import PortfolioHeroSection from "@/components/page/portfolio/HeroSection";
import ProjectList from "@/components/page/portfolio/ProjectList";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <PortfolioHeroSection />
      <ProjectList />
    </main>
  );
}
