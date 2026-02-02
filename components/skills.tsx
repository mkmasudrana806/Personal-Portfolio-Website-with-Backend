import {
  Database,
  Microscope,
  Cpu,
  Terminal,
  Globe,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend Stack",
    icon: <Database className="w-4 h-4" />,
    skills: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "REST APIs",
      "BullMQ",
      "JWT",
      "Bottleneck",
    ],
  },
  {
    title: "Frontend Stack",
    icon: <Layers className="w-4 h-4" />,
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn",
      "Ant Design",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Globe className="w-4 h-4" />,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "DNS Setup",
      "Postman",
      "MongoDB Compass",
      "VS Code",
    ],
  },
  {
    title: "Intelligence & Machine Learning",
    icon: <Cpu className="w-4 h-4" />,
    skills: [
      "Python",
      "Pandas",
      "Easy OCR",
      "PyTorch",
      "Big Data",
      "Machine Learning",
      "Deep Learning",
      "Image Processing",
    ],
  },
  {
    title: "Academic Core",
    icon: <Terminal className="w-4 h-4" />,
    skills: [
      "DBMS",
      "Data Structures",
      "Algorithms",
      "OOP",
      "ML",
      "Software Engineering",
      "Operating Systems",
      "Networking",
    ],
  },
  {
    title: "Research & Theory",
    icon: <Microscope className="w-4 h-4" />,
    skills: [
      "Classification",
      "Detection & Recognition",
      "Explainable AI",
      "LaTeX",
      "Review writing",
      "Complexity Analysis",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 mt-16 px-4 ">
      <div className="container relative z-10 mx-auto  md:px-6">
        {/* Section Header */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center rounded-full border border-border/50 bg-secondary/30 px-4 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
            <p className="text-sm text-foreground/70 font-medium">
              Proficiencies
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Technical{" "}
            <span className="bg-linear-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Skills
            </span>
            <div className="h-1 w-40 bg-accent mt-4 rounded-full opacity-50"></div>
          </h2>
        </div>

        {/* Two-Column Responsive Grid with Gap Fix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Category Title with Bottom Border and Space */}
              <div className="flex items-center gap-2 pb-1 mb-3 border-b border-white/10">
                <span className="text-accent">{category.icon}</span>
                <h4 className="text-lg font-bold uppercase tracking-wider text-foreground">
                  {category.title}
                </h4>
              </div>

              {/* Compact Pills Container */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-1.5 text-sm   border border-accent/30 text-gray-300 rounded-full shadow-[0_0_10px_rgba(var(--accent),0.05)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
