import HeaderBackend from "@/components/headerBackend";
import HeroBackend from "@/components/heroBackend";
import Footer from "@/components/footer";
import SkillsBackend from "@/components/skillsBackend";
import ProjectsBackend from "@/components/projectsBackend";
import EngineeringDecisionBackend from "@/components/backendDecisionAndPractices";

export default function Home() {
  return (
    <div className="w-full">
      <HeaderBackend />
      <HeroBackend />
      <SkillsBackend />
      <ProjectsBackend />
      <EngineeringDecisionBackend />
      <Footer />
    </div>
  );
}
