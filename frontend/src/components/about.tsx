"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
          Hello, I'm a Computer Science student at UC Santa Cruz, graduating in June 2025. I'm very passionate about building full-stack applications from the ground up, with a particular focus on backend development. 
          I enjoy working with server interactions, APIs, and databases to create scalable and efficient systems, and I love the challenge of turning complex problems into well-structured solutions.
        </p>
        <p className="text-zinc-400">
          I'm actively seeking entry-level software engineering roles or internships to continue expanding my skills and grow as a developer. 
          I thrive in environments where I can learn, collaborate, and make meaningful contributions while building real-world applications. 
          Whether it's crafting the perfect backend or getting the frontend just right, I enjoy creating seamless, user-centered experiences.
        </p>
        <p className="text-zinc-400">
          Outside of coding, I'm an avid basketball player, gym-goer, and fisherman. I also love playing games with friends and, of course, solving LeetCode problems (because who doesn’t enjoy a good brain workout??). 
          I'm always up for new challenges, whether it's on the court, in the code, or in life.
        </p>
        </div>
        <div className="relative h-80 w-full rounded-lg overflow-hidden border border-zinc-800">
          <Image src="/picture.svg?height=400&width=400" alt="Developer portrait" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default About;