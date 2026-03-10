import HeroSection from "@/components/sections/hero.section";
import ProjectsSection from "@/components/sections/projects.section";
import ExperienceSection from "@/components/sections/experience.section";
import ConnectSection from "@/components/sections/connect.section";
import Navbar from "@/components/ui/navigation/navbar.component";
import FadeIn from "@/components/wrappers/fadeIn.wrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      <FadeIn isEntry={true}>
        <HeroSection />
      </FadeIn>

      <FadeIn delay={0.1}>
        <ProjectsSection />
      </FadeIn>

      <FadeIn delay={0.2}>
        <ExperienceSection />
      </FadeIn>

      <FadeIn delay={0.3}>
        <ConnectSection />
      </FadeIn>
    </main>
  );
}