export type MediaType = "image" | "video" | "pdf"

export interface ProjectMedia {
  src: string
  alt: string
  type: MediaType
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  demoLink?: string
  media: ProjectMedia[]
}

