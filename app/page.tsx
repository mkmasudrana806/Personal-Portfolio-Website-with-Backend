import AboutMe from "@/components/aboutMe";
import EducationAndCareer from "@/components/educationAndCareer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <AboutMe />
      <EducationAndCareer />
      <Skills />
      <Projects />
    </div>
  );
}
