"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projectTypes"
import ProjectCard from "./cards"

interface ProjectCarouselProps {
  projects: Project[]
  onOpenLightbox: (projectIndex: number, mediaIndex: number) => void
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, onOpenLightbox }) => {
  const [activeProject, setActiveProject] = useState(0)

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeProject * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <ProjectCard project={project} onOpenLightbox={(mediaIndex) => onOpenLightbox(index, mediaIndex)} />
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 z-10"
        onClick={prevProject}
        style={{ cursor: "pointer" }}
      >
        <ArrowLeft className="h-6 w-6" />
        <span className="sr-only">Previous project</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 z-10"
        onClick={nextProject}
        style={{ cursor: "pointer" }}
      >
        <ArrowRight className="h-6 w-6" />
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
  )
}

export default ProjectCarousel

