import HeroSection from "@/components/sections/hero.section";
import ProjectsSection from "@/components/sections/projects.section";
import ExperienceSection from "@/components/sections/experience.section";
import ConnectSection from "@/components/sections/connect.section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <ConnectSection />
    </main>
  );
}