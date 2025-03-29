"use client";

import { useState, useRef } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  isLoaded: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isLoaded }) => {
  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "SlugRush Gym Tracker",
      description:
        "A simple web app for UCSC students to track gym crowd levels. Frontend built with Next.js, backend running on Python, and a PostgresSQL database running on Supabase.",
      technologies: ["Next.js", "Vercel", "Python", "FastAPI", "Render", "Supabase", "PostgreSQL"],
      githubLink: "https://github.com/Jeeevii/SlugRush",
      demoLink: "https://github.com/Jeeevii/SlugRush",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Task Management System",
      description:
        "A full-stack task management application with real-time updates. Backend built with Django REST Framework and frontend with React.",
      technologies: ["Python", "Django", "PostgreSQL", "React", "WebSockets"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Microservice Architecture",
      description:
        "A demonstration of microservice architecture using Spring Boot, with service discovery, API gateway, and message queues.",
      technologies: ["Java", "Spring Boot", "RabbitMQ", "Docker", "Kubernetes"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A scalable chat application with real-time messaging, user presence, and message history. Built with Node.js and Socket.io.",
      technologies: ["Node.js", "Socket.io", "Redis", "React", "MongoDB"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
      image: "/placeholder.svg?height=300&width=600",
    },
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section
      id="projects"
      className={cn(
        "py-20 border-t border-zinc-800 scroll-m-24 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-700",
        isLoaded && "opacity-100 translate-y-0",
      )}
      ref={projectsRef}
    >
      <h2 className="text-3xl font-bold mb-8 text-zinc-300">Projects</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeProject * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-zinc-300">{project.title}</h3>
                    <p className="text-zinc-400 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs bg-zinc-700 text-zinc-300 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-zinc-700 text-zinc-300 bg-black hover:bg-zinc-700">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </Link>
                      {project.demoLink && (
                        <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="border-zinc-700 text-zinc-300 bg-black hover:bg-zinc-700">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 z-10"
          onClick={prevProject}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous project</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 z-10"
          onClick={nextProject}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next project</span>
        </Button>
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === activeProject ? "bg-zinc-300" : "bg-zinc-700"}`}
              onClick={() => setActiveProject(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;