"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className={cn(
        "py-20 md:py-32 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out",
        isLoaded && "opacity-100 translate-y-0",
      )}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-zinc-300">Jeevithan Mahenthran</span>
        </h1>
        <p className="text-2xl md:text-3xl text-zinc-400 mb-8">Backend Developer & Full Stack Engineer</p>
        <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto">
          Passionate about backend development, specialized in building robust and scalable backend systems, while also developing full-stack applications. 
        </p>
        <div
          className={cn(
            "flex justify-center space-x-8 mb-12 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-300",
            isLoaded && "opacity-100 translate-y-0",
          )}
        >
          <Link href="https://github.com/jeeevii" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full h-20 w-20 flex items-center justify-center bg-zinc-800 border-2 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-700 transition-all duration-300 p-4">
                <img
                  src="/icons/github.png"
                  alt="Github Icon"
                  width={50}
                />              
              </div>
              <span className="text-zinc-400 font-medium">GitHub</span>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/jeevithan-mahenthran/" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full h-20 w-20 flex items-center justify-center bg-zinc-800 border-2 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-700 transition-all duration-300 p-4">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-zinc-100" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <span className="text-zinc-400 font-medium">LinkedIn</span>
            </div>
          </Link>
          <Link href="/docs/resume.pdf" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full h-20 w-20 flex items-center justify-center bg-zinc-800 border-2 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-700 transition-all duration-300 p-4">
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 text-zinc-100"
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
              <span className="text-zinc-400 font-medium">Resume</span>
            </div>
          </Link>
        </div>
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=jeevithanmahenthran@gmail.com" target="_blank" rel="noopener noreferrer">
        <Button className="bg-zinc-700 hover:bg-zinc-600 text-zinc-100" style={{ cursor: 'pointer' }}>Contact Me</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;