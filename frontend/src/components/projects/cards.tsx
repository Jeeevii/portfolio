"use client"

import type React from "react"

import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/project"

interface ProjectCardProps {
  project: Project
  onOpenLightbox: (mediaIndex: number) => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenLightbox }) => {
  const isVideo = (src: string) => {
    return src.endsWith(".mp4")
  }

  return (
    <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden">
      <div className="relative h-48 w-full cursor-pointer group" onClick={() => onOpenLightbox(0)}>
        {isVideo(project.media[0].src) ? (
          <div className="h-full w-full bg-zinc-800 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-100 z-10"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
              Video
            </span>
          </div>
        ) : (
          <Image
            src={project.media[0].src}
            alt={project.media[0].alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 px-3 py-1 rounded-md text-sm">
            Click to View ({project.media.length} Items)
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
        {project.githubLink && project.githubLink !== "N/A" ? (
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
          ) : (
            <Button
              variant="outline"
              className="border-zinc-700 text-zinc-500 bg-black opacity-50 cursor-not-allowed"
              disabled
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
          )}
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
  )
}

export default ProjectCard

