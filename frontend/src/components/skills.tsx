/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { Server, Database, PanelTop, Terminal, Gamepad, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <PanelTop className="h-5 w-5" />, 
      skills: ["Next.js", "React", "Angular", "Tailwind CSS", "Figma"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-5 w-5" />, 
      skills: ["Node.js", "Flask", "Python", "C/C++"],
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="h-5 w-5" />, 
      skills: ["PostgreSQL", "Firebase", "Supabase", "Vercel", "Docker"],
    },
    {
      title: "AI & ML Development",
      icon: <Bot  className="h-5 w-5" />, 
      skills: ["LangChain", "LlamaIndex", "NumPy", "CARLA", "Scenic"],
    },
    {
      title: "OS & Networking",
      icon: <Terminal className="h-5 w-5" />, 
      skills: [ "Mininet", "Git", "Linux", "WireShark", "Bash"],
    },
    {
      title: "Game Development",
      icon: <Gamepad className="h-5 w-5" />, 
      skills: ["Unity", "Phaser", "Photon", "C#", "Typescript"],
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
                  className="flex flex-col items-center bg-zinc-700/50 rounded-lg p-3 hover:bg-zinc-700 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center mb-2">
                    <img 
                      src={skill ? `/icons/${skill.toLowerCase().replace(/[^a-z0-9]/g, "")}.svg` : "/globals.svg"} 
                      alt={skill || "unknown skill"} 
                      className="w-8 h-8" 
                    />                  
                  </div>
                  <span className="text-sm text-zinc-300 text-center">{skill}</span>
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
