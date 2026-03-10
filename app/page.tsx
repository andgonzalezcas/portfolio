import HeroSection from "@/components/ui/sections/hero.section";
import SkillsSection from "@/components/ui/sections/skills.section";
import ProjectsSection from "@/components/ui/sections/projects.section";
import ExperienceSection from "@/components/ui/sections/experience.section";
import ConnectSection from "@/components/ui/sections/connect.section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ConnectSection />
    </main>
  );
}