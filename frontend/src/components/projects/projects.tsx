"use client"

import type React from "react"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/project"
import ProjectCarousel from "./navigation"
import ProjectLightbox from "./lightbox"

interface ProjectsProps {
  isLoaded: boolean
}

const Projects: React.FC<ProjectsProps> = ({ isLoaded }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const projectsRef = useRef<HTMLDivElement>(null)

  const openLightbox = (projectIndex: number, mediaIndex = 0) => {
    setCurrentProjectIndex(projectIndex)
    setCurrentMediaIndex(mediaIndex)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const projects: Project[] = [
    {
      title: "Falsification of Autonomous Driving Stacks",
      description:
        "Research utilizing the CARLA driving simulator running on WSL for conducting autonomous vehicle testing. We focused on determining which initial parameters, such as speed and distance between the ego vehicle and the driving stack, led to the most violations and crashes. Additionally, introduced ChatScene, an LLM focused on creating scenarios to generate custom Scenic scripts for running targeted safety tests.",
      technologies: ["Python", "CARLA", "Scenic", "VerifAI", "ChatScene"],
      githubLink: "https://github.com/Jeeevii/cse233_acc_verifai",
      demoLink: "/docs/cse233_final_report.pdf",
      media: [
        { 
          src: "/REPLACE", 
          alt: "Midterm Demo Video", 
          type: "video" 
        },
        {
          src: "/projects/Graphifier Script.png",
          alt: "Visual Representation of Falsification",
          type: "image",
        },
        {
          src: "/projects/CARLA Crash.png",
          alt: "Carla Violation", 
          type: "image"
        }
      ],
    },
    {
      title: "UCSC SlugRush Gym Tracker",
      description:
        "A full stack web app for UCSC students to track gym crowd levels. Frontend built with Next.js and Tailwind CSS, backend running on FastAPI, and a PostgresSQL database running on Supabase.",
      technologies: ["Next.js", "Vercel", "Python", "FastAPI", "Render", "Supabase", "PostgreSQL"],
      githubLink: "https://github.com/Jeeevii/SlugRush",
      demoLink: "N/A",
      media: [
        { 
          src: "/projects/slugrush.png", 
          alt: "SlugRush Daily View", 
          type: "image" 
        },
        { 
          src: "/projects/slugrush2.png", 
          alt: "SlugRush Weekly View", 
          type: "image" 
        },
      ],
    },
    {
      title: "Body and Soul",
      description:
        "A 2v2 online MOBA developed in Unity 6, where players control monks mastering spiritual arts and astral projection. Built with Photom for multiplayer, the game features skill-based combat and progression. My focus was on designing the upgrade system, implementing various skills, and facilitating the project as Scrum Master.",
      technologies: ["Unity", "Photon", "C#", "SCRUM"],
      githubLink: "N/A",
      demoLink: "https://drive.google.com/file/d/13yVBUx2IcxoUuTJVpGvCxYbKIJIukH2q/view",
      media: [
        { src: "/REPLACE", alt: "Body & Soul Offical Trailer", type: "video" },
        { src: "/projects/Body&Soul Main.png", alt: "Main Screen", type: "image" },
        { src: "/projects/Body&Soul Combat.png", alt: "Combat Phase", type: "image" },
        { src: "/projects/Body&Soul Upgrade.png", alt: "Upgrade Phase", type: "image" },
      ],
    },
    {
      title: "WP.GG (Riot Stats Checker)",
      description:
        "A simple full-stack project which uses the Riot's Public API to access user data, such as win rate, champion pool, match data, etc. Frontend built with HTML/CSS, Javascript and a backend running on Node.js.",
      technologies: ["Node.js", "HTML/CSS", "Express", "Firebase"],
      githubLink: "https://github.com/Jeeevii/RiotStatsChecker",
      demoLink: "https://wpgg-6f4e2.web.app/index.html",
      media: [
        { src: "/projects/Main.png", alt: "WP.GG Main Interface", type: "image" },
        { src: "/project/Stats.png", alt: "WP.GG Stats Page", type: "image" },
      ],
    },
  ]

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
        <ProjectCarousel projects={projects} onOpenLightbox={openLightbox} />
      </section>

      {/* Use the separate ProjectLightbox component */}
      {lightboxOpen && (
        <ProjectLightbox
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          project={projects[currentProjectIndex]}
          initialMediaIndex={currentMediaIndex}
        />
      )}
    </>
  )
}

export default Projects

