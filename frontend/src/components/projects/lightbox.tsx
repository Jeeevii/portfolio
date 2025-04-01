"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/project"

interface ProjectLightboxProps {
  isOpen: boolean
  onClose: () => void
  project: Project
  initialMediaIndex?: number
}

const ProjectLightbox: React.FC<ProjectLightboxProps> = ({ isOpen, onClose, project, initialMediaIndex = 0 }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(initialMediaIndex)
  const modalRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setCurrentMediaIndex(initialMediaIndex)
  }, [initialMediaIndex, project])

  // Close lightbox when clicking outside the content
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    // Close lightbox when pressing Escape key
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscKey)

      // Prevent scrolling when lightbox is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscKey)
      // Restore scrolling when lightbox is closed
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  // Reset video playback when changing videos
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [currentMediaIndex])

  if (!isOpen || !project) return null

  const currentMedia = project.media[currentMediaIndex]

  const nextMedia = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentMediaIndex < project.media.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1)
    } else {
      setCurrentMediaIndex(0) // Loop back to the first media
    }
  }

  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1)
    } else {
      setCurrentMediaIndex(project.media.length - 1) // Loop to the last media
    }
  }

  const isVideo = (src: string) => {
    return src.endsWith(".mp4")
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
          {/* Render either image or video based on file extension */}
          {isVideo(currentMedia.src) ? (
            <video
              ref={videoRef}
              src={currentMedia.src}
              className="max-w-full max-h-[75vh]"
              controls
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={currentMedia.src}
              alt={currentMedia.alt}
              className="max-w-full max-h-[75vh] object-contain"
              style={{ margin: "auto" }}
            />
          )}

          {/* Navigation arrows (only show if there are multiple media items) */}
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

        {/* Thumbnail navigation */}
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
                {isVideo(media.src) ? (
                  <div className="w-full h-full bg-zinc-700 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-zinc-300"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                ) : (
                  <img
                    src={media.src || "/placeholder.svg"}
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

