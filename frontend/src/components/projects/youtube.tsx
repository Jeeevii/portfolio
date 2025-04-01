"use client"

import type React from "react"

import { useState } from "react"

interface YouTubeEmbedProps {
  src: string
  title?: string
  className?: string
}

// Helper function to extract YouTube ID from various YouTube URL formats
export const getYoutubeId = (url: string): string | null => {
  // Handle different YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)

  // Return the ID if found and valid (11 characters)
  return match && match[2].length === 11 ? match[2] : null
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ src, title = "YouTube video player", className = "" }) => {
  const [isLoading, setIsLoading] = useState(true)
  const youtubeId = getYoutubeId(src)

  if (!youtubeId) {
    return (
      <div className={`bg-zinc-800 flex items-center justify-center p-4 ${className}`}>
        <p className="text-zinc-400">Invalid YouTube URL</p>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} style={{ paddingBottom: isLoading ? "56.25%" : "0" }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
          <div className="animate-pulse flex flex-col items-center">
            <svg className="w-12 h-12 text-red-600 mb-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            <span className="text-zinc-400">Loading video...</span>
          </div>
        </div>
      )}
      <iframe
        className={`w-full h-full ${isLoading ? "absolute inset-0" : ""}`}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  )
}

export default YouTubeEmbed

