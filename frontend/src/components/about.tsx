/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="about"
      className={cn(
        "py-20 border-t border-zinc-800 scroll-m-24 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-300",
        isLoaded && "opacity-100 translate-y-0",
      )}
    >
      <h2 className="text-3xl font-bold mb-8 text-zinc-300">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-zinc-400">
              Hello! I'm a Computer Science student at UC Santa Cruz, graduating in June 2025. I love building full-stack websites from the ground up, but my real passion is in backend development. I enjoy working with APIs, databases, and server logic to create scalable, and efficient systems. 
              It's a bit hard to explain but, there's just something exciting about breaking down complex problems and turning them into clean, well-structured solutions.
            </p>
            <p className="text-zinc-400">
              Right now, I'm looking for entry-level software engineering roles or internships where I can continue learning, collaborating, and building real-world applications. 
              I thrive best in environments where I can get direct feedback to get things done without sugar-coating the challenges. 
            </p>
            <p className="text-zinc-400">
              Outside the screen, you’ll probably find me on the basketball court, at the gym, or out fishing. I also love gaming with friends and solving leetcode problems...because at this point, NeetCode’s voice is my internal monologue. 
              Powered by too much caffeine and an unhealthy love for White Monster, I’m always up for a challenge, whether it’s in code, competition, or life.
            </p>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden border border-zinc-800">
            <Image src="/projects/tonyCat.jpg" alt="Developer portrait" fill className="object-cover" />
            <p>My Cat</p>
          </div>
        </div>
    </section>
  );
};

export default About;