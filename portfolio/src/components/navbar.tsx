"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-stone-900/80 backdrop-blur-sm z-50 border-b border-stone-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          <span className="text-stone-300">John</span>
          <span className="text-stone-500">Doe</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="#about" className="text-stone-400 hover:text-stone-100 transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-stone-400 hover:text-stone-100 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-stone-400 hover:text-stone-100 transition-colors">
            Projects
          </Link>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="bg-stone-700 hover:bg-stone-600 text-stone-100">Resume</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

