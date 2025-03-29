"use client"

import { useState, useEffect, useRef } from "react"

// Import components
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Footer from "@/components/footer"

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)

  // Animation on page load
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      title: "E-Commerce API",
      description:
        "A scalable RESTful API for e-commerce platforms built with Node.js, Express, and MongoDB. Features include user authentication, product management, and order processing.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
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
  ]

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100">
      <Navbar />

      <main className="container mx-auto px-4 pt-24">
        <Hero isLoaded={isLoaded} />
        <About isLoaded={isLoaded} />
        <Skills isLoaded={isLoaded} />
        <Projects
          isLoaded={isLoaded}
          projects={projects}
          activeProject={activeProject}
          nextProject={nextProject}
          prevProject={prevProject}
          ref={projectsRef}
        />
      </main>

      <Footer />
    </div>
  )
}

