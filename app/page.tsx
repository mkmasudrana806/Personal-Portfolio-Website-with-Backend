import HeaderBackend from "@/components/headerBackend";
import HeroBackend from "@/components/heroBackend";
import Footer from "@/components/footer";
import SkillsBackend from "@/components/skillsBackend";
import ProjectsBackend from "@/components/projectsBackend";
import EngineeringDecisionBackend from "@/components/backendDecisionAndPractices";
import AboutMeBackend from "@/components/aboutMeBackend";
import FloatingProfileBackend from "@/components/floatingProfileBackend";

export default function Home() {
  return (
    <div className="w-full">
      <HeaderBackend />
      <HeroBackend />
      <SkillsBackend />
      <ProjectsBackend />
      <EngineeringDecisionBackend />
      <AboutMeBackend />
      <FloatingProfileBackend />
      <Footer />
    </div>
  );
}
