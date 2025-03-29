"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export default function About({ isLoaded }: { isLoaded: boolean }) {
  return (
    <section
      id="about"
      className={cn(
        "py-20 border-t border-stone-800 scroll-m-24 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-300",
        isLoaded && "opacity-100 translate-y-0",
      )}
    >
      <h2 className="text-3xl font-bold mb-8 text-stone-300">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <p className="text-stone-400">
            Hello! I'm a backend-focused software engineer passionate about building efficient, scalable systems. With a
            strong foundation in computer science and a love for problem-solving, I specialize in creating robust
            backend architectures that power seamless user experiences.
          </p>
          <p className="text-stone-400">
            My journey in software development began during my computer science studies, where I discovered my affinity
            for backend technologies. I enjoy working with databases, APIs, and server-side logic to create the backbone
            of applications.
          </p>
          <p className="text-stone-400">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            deepening my knowledge of system design and architecture.
          </p>
        </div>
        <div className="relative h-80 w-full rounded-lg overflow-hidden border border-stone-800">
          <Image src="/placeholder.svg?height=400&width=400" alt="Developer portrait" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}

