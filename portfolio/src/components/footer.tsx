import Link from "next/link"
import { Github, Linkedin, FileText } from "lucide-react/dist/lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-950 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-stone-500">© {new Date().getFullYear()} John Doe</p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-300"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-300"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-300"
            >
              <FileText className="h-5 w-5" />
              <span className="sr-only">Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

