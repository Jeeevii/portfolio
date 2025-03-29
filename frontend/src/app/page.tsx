"use client"
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <Hero/>
        <About/>
        <Skills/>
        <Projects isLoaded={isLoaded}/>
      </main>
      <Footer/>
    </div>
  );
}