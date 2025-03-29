"use client";

import { useState, useEffect } from "react";
import { Server, Database, Cloud, LayoutGrid, Terminal, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { getIcons } from "@/lib/icons";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", icon: "/icons/nodejs.svg" },
        { name: "Express", icon: "/icons/express.svg" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "Django", icon: "/icons/django.svg" },
        { name: "Java", icon: "/icons/java.svg" },
        { name: "Spring Boot", icon: "/icons/spring.svg" },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "MySQL", icon: "/icons/mysql.svg" },
        { name: "Redis", icon: "/icons/redis.svg" },
        { name: "Elasticsearch", icon: "/icons/elasticsearch.svg" },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        { name: "Docker", icon: "/icons/docker.svg" },
        { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
        { name: "AWS", icon: "/icons/aws.svg" },
        { name: "CI/CD", icon: "/icons/cicd.svg" },
        { name: "Terraform", icon: "/icons/terraform.svg" },
      ],
    },
    {
      title: "Frontend",
      icon: <LayoutGrid className="h-5 w-5" />,
      skills: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "HTML/CSS", icon: "/icons/html5.svg" },
        { name: "Next.js", icon: "/icons/nextjs.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      ],
    },
    {
      title: "Tools & Methods",
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        { name: "Git", icon: "/icons/git.svg" },
        { name: "RESTful APIs", icon: "/icons/api.svg" },
        { name: "GraphQL", icon: "/icons/graphql.svg" },
        { name: "Microservices", icon: "/icons/microservices.svg" },
        { name: "Agile", icon: "/icons/agile.svg" },
      ],
    },
    {
      title: "Other",
      icon: <Settings className="h-5 w-5" />,
      skills: [
        { name: "System Design", icon: "/icons/system-design.svg" },
        { name: "Performance", icon: "/icons/performance.svg" },
        { name: "Security", icon: "/icons/security.svg" },
        { name: "Testing", icon: "/icons/testing.svg" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={cn(
        "py-20 border-t border-zinc-800 scroll-m-24 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-500",
        isLoaded && "opacity-100 translate-y-0",
      )}
    >
      <h2 className="text-3xl font-bold mb-8 text-zinc-300">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-center mb-4">
              <div className="mr-2 text-zinc-400">{category.icon}</div>
              <h3 className="text-xl font-semibold text-zinc-300">{category.title}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex flex-col items-center bg-zinc-700/50 rounded-lg p-3 hover:bg-zinc-700 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center mb-2">
                    {getIcons(skill.name)}
                  </div>
                  <span className="text-sm text-zinc-300 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;