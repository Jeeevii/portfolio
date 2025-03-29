"use client"

import { forwardRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react/dist/lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  demoLink?: string
  image: string
}

interface ProjectsProps {
  isLoaded: boolean
  projects: Project[]
  activeProject: number
  nextProject: () => void
  prevProject: () => void
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(
  ({ isLoaded, projects, activeProject, nextProject, prevProject }, ref) => {
    const [activeProjectIndex, setActiveProject] = useState(activeProject)

    return (
      <section
        id="projects"
        className={cn(
          "py-20 border-t border-stone-800 scroll-m-24 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-700",
          isLoaded && "opacity-100 translate-y-0",
        )}
        ref={ref}
      >
        <h2 className="text-3xl font-bold mb-8 text-stone-300">Projects</h2>

        <div className="relative">
          {/* Project Cards Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeProjectIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-stone-800/50 border border-stone-700 rounded-lg overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2 text-stone-300">{project.title}</h3>
                      <p className="text-stone-400 mb-4">{project.description}</p>
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs bg-stone-700 text-stone-300 px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="border-stone-700 text-stone-300 hover:bg-stone-700">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </Link>
                        {project.demoLink && (
                          <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="border-stone-700 text-stone-300 hover:bg-stone-700">
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

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-stone-700 bg-stone-800/80 hover:bg-stone-700 z-10"
            onClick={prevProject}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous project</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border-stone-700 bg-stone-800/80 hover:bg-stone-700 z-10"
            onClick={nextProject}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next project</span>
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${index === activeProjectIndex ? "bg-stone-300" : "bg-stone-700"}`}
                onClick={() => setActiveProject(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    )
  },
)

Projects.displayName = "Projects"

export default Projects

