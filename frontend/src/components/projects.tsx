"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Github, ExternalLink, ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectsProps {
  isLoaded: boolean
}

interface ProjectImage {
  src: string
  alt: string
}

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  demoLink?: string
  images: ProjectImage[]
}

const Projects: React.FC<ProjectsProps> = ({ isLoaded }) => {
  const [activeProject, setActiveProject] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const projectsRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Close lightbox when clicking outside the image
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setLightboxOpen(false)
      }
    }

    // Close lightbox when pressing Escape key
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxOpen(false)
      }
    }

    if (lightboxOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscKey)
      // Prevent scrolling when lightbox is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
      // Restore scrolling when lightbox is closed
      document.body.style.overflow = ""
    }
  }, [lightboxOpen])

  const openLightbox = (projectIndex: number, imageIndex = 0) => {
    setCurrentProjectIndex(projectIndex)
    setCurrentImageIndex(imageIndex)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    const project = projects[currentProjectIndex]
    if (currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    } else {
      setCurrentImageIndex(0) // Loop back to the first image
    }
  }

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    const project = projects[currentProjectIndex]
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    } else {
      setCurrentImageIndex(project.images.length - 1) // Loop to the last image
    }
  }

  const projects: Project[] = [
    {
      title: "UCSC SlugRush Gym Tracker",
      description:
        "A full stack web app for UCSC students to track gym crowd levels. Frontend built with Next.js and Tailwind CSS, backend running on FastAPI, and a PostgresSQL database running on Supabase.",
      technologies: ["Next.js", "Vercel", "Python", "FastAPI", "Render", "Supabase", "PostgreSQL"],
      githubLink: "https://github.com/Jeeevii/SlugRush",
      demoLink: "N/A",
      images: [
        { src: "/projects/slugrush.png", alt: "SlugRush Daily View" },
        { src: "/projects/slugrush2.png", alt: "SlugRush Weekly View" },
        { src: "/projects/slugrush-mobile.png", alt: "SlugRush mobile view" },
      ],
    },
    {
      title: "Task Management System",
      description:
        "A full-stack task management application with real-time updates. Backend built with Django REST Framework and frontend with React.",
      technologies: ["Python", "Django", "PostgreSQL", "React", "WebSockets"],
      githubLink: "https://github.com",
      demoLink: "N/A",
      images: [
        { src: "/placeholder.svg?height=300&width=600", alt: "Task Management System" },
        { src: "/placeholder.svg?height=300&width=600&text=Dashboard", alt: "Task Management Dashboard" },
        { src: "/placeholder.svg?height=300&width=600&text=Task+Detail", alt: "Task Detail View" },
      ],
    },
    {
      title: "WP.GG (Riot Stats Checker)",
      description:
        "A simple full-stack project which uses the Riot's Public API to access user data, such as win rate, champion pool, match data, etc. Frontend built with HTML/CSS and Javascrip and a backend running on Node.js.",
      technologies: ["Node.js", "HTML/CSS", "Express", "Firebase"],
      githubLink: "https://github.com/Jeeevii/RiotStatsChecker",
      demoLink: "https://wpgg-6f4e2.web.app/index.html",
      images: [
        { src: "/placeholder.svg?height=300&width=600", alt: "WP.GG Main Interface" },
        { src: "/placeholder.svg?height=300&width=600&text=Player+Stats", alt: "Player Statistics" },
        { src: "/placeholder.svg?height=300&width=600&text=Match+History", alt: "Match History" },
      ],
    },
    {
      title: "Real-time Chat Application",
      description:
        "A scalable chat application with real-time messaging, user presence, and message history. Built with Node.js and Socket.io.",
      technologies: ["Node.js", "Socket.io", "Redis", "React", "MongoDB"],
      githubLink: "https://github.com",
      demoLink: "N/A",
      images: [
        { src: "/placeholder.svg?height=300&width=600", alt: "Chat Application" },
        { src: "/placeholder.svg?height=300&width=600&text=Chat+Room", alt: "Chat Room" },
        { src: "/placeholder.svg?height=300&width=600&text=User+Profile", alt: "User Profile" },
      ],
    },
  ]

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <>
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
                    <div className="relative h-48 w-full cursor-pointer group" onClick={() => openLightbox(index, 0)}>
                      <Image
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* THUMBNAIL COVER */}
                      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 px-3 py-1 rounded-md text-sm">
                          Click To View
                        </span>
                      </div>
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
                          <Button
                            variant="outline"
                            className="border-zinc-700 text-zinc-300 bg-black hover:bg-zinc-700"
                            style={{ cursor: "pointer" }}
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </Link>
                        {project.demoLink && project.demoLink !== "N/A" ? (
                          <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              className="border-zinc-700 text-zinc-300 bg-black hover:bg-zinc-700"
                              style={{ cursor: "pointer" }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                          </Link>
                        ) : (
                          <Button
                            variant="outline"
                            className="border-zinc-700 text-zinc-500 bg-black opacity-50 cursor-not-allowed"
                            disabled
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
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
      </section>

      {/* Multi-Image Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div ref={modalRef} className="relative max-w-6xl w-full flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="bg-zinc-800 p-2 rounded-t-lg flex justify-between items-center">
              <h3 className="text-zinc-200 font-medium px-2">
                {projects[currentProjectIndex].title} - Image {currentImageIndex + 1} of{" "}
                {projects[currentProjectIndex].images.length}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700 rounded-full"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="bg-zinc-900 rounded-b-lg p-4 flex items-center justify-center relative">
              {/* Main image */}
              <img
                src={projects[currentProjectIndex].images[currentImageIndex].src}
                alt={projects[currentProjectIndex].images[currentImageIndex].alt}
                className="max-w-full max-h-[75vh] object-contain"
                style={{ margin: "auto" }}
              />

              {/* Navigation arrows (only show if there are multiple images) */}
              {projects[currentProjectIndex].images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 z-10"
                    onClick={prevLightboxImage}
                    style={{ cursor: "pointer" }}
                  >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Previous image</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 z-10"
                    onClick={nextLightboxImage}
                    style={{ cursor: "pointer" }}
                  >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Next image</span>
                  </Button>
                </>
              )}
            </div>

            {/* Thumbnail navigation */}
            {projects[currentProjectIndex].images.length > 1 && (
              <div className="bg-zinc-800 p-3 mt-2 rounded-lg flex justify-center space-x-2 overflow-x-auto">
                {projects[currentProjectIndex].images.map((image, idx) => (
                  <div
                    key={idx}
                    className={`w-16 h-16 relative rounded overflow-hidden cursor-pointer border-2 ${
                      idx === currentImageIndex ? "border-zinc-300" : "border-transparent"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(idx)
                    }}
                  >
                    <img
                      src={image.src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
            
          </div>
        </div>
      )}
    </>
  )
}

export default Projects

