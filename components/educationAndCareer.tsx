"use client";
import React from "react";
import {
  GraduationCap,
  Beaker,
  Code,
  BrainCircuit,
  Layout,
} from "lucide-react";

const EducationAndCareer = () => {
  const educationPath = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      year: "2021 - 2025",
      title: "B.Sc in Computer Science and Engineering",
      institution: "Green University of Bangladesh",
      details:
        "Deepening practical knowledge in DBMS, Data Structure & Algorithm, OOP, Software Engineering, Operating Systems, Machine Learning and Networking.",
    },
    {
      icon: <Code className="h-5 w-5" />,
      year: "2023 - Present",
      title: "Backend Development",
      institution: "Hands-on Experience",
      details:
        "Building scalable REST APIs design, security best practices, schema design, database optimization, query optimization, modular architecture using Node.js, Express, MongoDB, JWT, BullMQ, Zod technologies.",
    },
    {
      icon: <Layout className="h-5 w-5" />,
      year: "2023 - 2024",
      title: "Frontend Development",
      institution: "Hands-on Experience",
      details:
        "Crafting responsive user interfaces by leveraging React.js, Next.js, Tailwind CSS, TypeScript, CSS3 and Shadcn UI. I focus on building intuitive dashboards and seamless user journeys, utilizing Redux Toolkit and RTK Query for state management and efficient data fetching.",
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      year: "2022 - 2023",
      title: "Problem Solving",
      institution: "HackerRank",
      details:
        "Practicing problem on HackerRank for Data Structure and Algorithms and Object Oriented Programming.",
    },
  ];

  return (
    <div className="container relative z-10 mx-auto px-4 md:px-6">
      {/* Education Timeline */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-foreground mb-12 text-center">
          Education &{" "}
          <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
            Career Path
          </span>
        </h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent/50 to-accent/10 hidden md:block"></div>

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {educationPath.map((item, index) => (
              <div
                key={index}
                className={`md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0
                    ? "md:[&>:last-child]:text-right"
                    : "md:[&>:first-child]:order-2"
                }`}
              >
                {/* Left content on odd, right on even */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-3 md:justify-end">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/20 border border-accent text-accent">
                      {item.icon}
                    </div>
                    <span className="text-sm font-semibold text-accent">
                      {item.year}
                    </span>
                  </div>
                  <div
                    className={`space-y-1 ${index % 2 === 0 ? "" : "md:text-right"}`}
                  >
                    <h4 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-foreground/60">
                      {item.institution}
                    </p>
                    <p className="text-foreground/70 pt-2">{item.details}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex md:justify-center md:items-start md:pt-2">
                  <div className="h-4 w-4 rounded-full bg-accent border-4 border-background shadow-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndCareer;
