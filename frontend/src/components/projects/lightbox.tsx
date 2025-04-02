/* eslint-disable @next/next/no-img-element */
"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projectTypes"
import YouTubeEmbed from "./youtube"

interface ProjectLightboxProps {
  isOpen: boolean
  onClose: () => void
  project: Project
  initialMediaIndex?: number
}

const ProjectLightbox: React.FC<ProjectLightboxProps> = ({ isOpen, onClose, project, initialMediaIndex = 0 }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(initialMediaIndex)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCurrentMediaIndex(initialMediaIndex)
  }, [initialMediaIndex, project])

  // close with clicking outside the content
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    // close lightbox when pressing Esc key
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscKey)
      // prevent scrolling when lightbox is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscKey)
      // restore scrolling when lightbox is closed
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  const currentMedia = project.media[currentMediaIndex]

  const nextMedia = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentMediaIndex < project.media.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1)
    } else {
      setCurrentMediaIndex(0) // loop back to the first media
    }
  }

  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1)
    } else {
      setCurrentMediaIndex(project.media.length - 1) 
    }
  }

  // render based off media type
  const renderMediaContent = () => {
    if (currentMedia.type === "video") {
      return (
        <div className="w-full max-w-4xl">
          <YouTubeEmbed src={currentMedia.src} title={currentMedia.alt} className="aspect-video" />
        </div>
      )
    } else {
      return (
        <img
          src={currentMedia.src}
          alt={currentMedia.alt}
          className="max-w-full max-h-[75vh] object-contain"
          style={{ margin: "auto" }}
        />
      )
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div ref={modalRef} className="relative max-w-6xl w-full flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="bg-zinc-800 p-2 rounded-t-lg flex justify-between items-center">
          <h3 className="text-zinc-200 font-medium px-2">
            {project.title} - {currentMediaIndex + 1} of {project.media.length}
          </h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700 rounded-full"
            aria-label="Close lightbox"
            style={{ cursor: "pointer" }}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="bg-zinc-900 rounded-b-lg p-4 flex items-center justify-center relative">
          {renderMediaContent()}

          {/* navigation arrows (only show if there are multiple media items) */}
          {project.media.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 z-10"
                onClick={prevMedia}
                style={{ cursor: "pointer" }}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous media</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 z-10"
                onClick={nextMedia}
                style={{ cursor: "pointer" }}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next media</span>
              </Button>
            </>
          )}
        </div>

        {/* thumbnail navigation */}
        {project.media.length > 1 && (
          <div className="bg-zinc-800 p-3 mt-2 rounded-lg flex justify-center space-x-2 overflow-x-auto">
            {project.media.map((media, idx) => (
              <div
                key={idx}
                className={`w-16 h-16 relative rounded overflow-hidden cursor-pointer border-2 ${
                  idx === currentMediaIndex ? "border-zinc-300" : "border-transparent"
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentMediaIndex(idx)
                }}
              >
                {media.type === "video" ? (
                  <div className="w-full h-full bg-zinc-700 flex items-center justify-center">
                    <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </div>
                ) : (
                  <img
                    src={media.src}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectLightbox

