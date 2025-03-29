"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Hero({ isLoaded }: { isLoaded: boolean }) {
  return (
    <section
      className={cn(
        "py-20 md:py-32 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out",
        isLoaded && "opacity-100 translate-y-0",
      )}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-stone-300">John Doe</span>
        </h1>
        <p className="text-2xl md:text-3xl text-stone-400 mb-8">Backend Developer & Full Stack Engineer</p>
        <p className="text-xl text-stone-500 mb-12 max-w-2xl mx-auto">
          Building robust, scalable backend systems and full-stack applications with a focus on performance and
          reliability.
        </p>

        {/* Large Social Icons */}
        <div
          className={cn(
            "flex justify-center space-x-8 mb-12 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-300",
            isLoaded && "opacity-100 translate-y-0",
          )}
        >
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full h-20 w-20 flex items-center justify-center bg-stone-800 border-2 border-stone-700 hover:border-stone-500 hover:bg-stone-700 transition-all duration-300 p-4">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-stone-100" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <span className="text-stone-400 font-medium">GitHub</span>
            </div>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full h-20 w-20 flex items-center justify-center bg-stone-800 border-2 border-stone-700 hover:border-stone-500 hover:bg-stone-700 transition-all duration-300 p-4">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-stone-100" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <span className="text-stone-400 font-medium">LinkedIn</span>
            </div>
          </Link>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full h-20 w-20 flex items-center justify-center bg-stone-800 border-2 border-stone-700 hover:border-stone-500 hover:bg-stone-700 transition-all duration-300 p-4">
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 text-stone-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <span className="text-stone-400 font-medium">Resume</span>
            </div>
          </Link>
        </div>

        <Button className="bg-stone-700 hover:bg-stone-600 text-stone-100">View My Work</Button>
      </div>
    </section>
  )
}

