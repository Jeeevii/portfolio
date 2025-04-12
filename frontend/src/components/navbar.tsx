"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {Menu, X, Mail, FileText} from "lucide-react"
import Logo from "./logo"
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-zinc-900/80 backdrop-blur-sm z-50 border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#hero" className="text-xl font-bold tracking-tighter">
          {/*className="object-contain h-12 w-auto" */}
          <div className="h-12 sm:h-12 w-auto flex items-center">
            <Logo />
          </div>
          {/* <span className="text-zinc-300">J</span>
          <span className="text-zinc-500">M</span> */}
        </Link>
        
        {/* desktop view */}
        <div className="flex items-center space-x-6">
          <Link href="#about" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            <span className="hidden sm:inline">About</span>
          </Link>
          <Link href="#projects" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            <span className="hidden sm:inline">Projects</span>
          </Link>
          <Link href="#skills" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            <span className="hidden sm:inline">Skills</span>
          </Link>
          <div className="flex items-center space-x-3">
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jeevithanmahenthran@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300 hover:border-zinc-600 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Contact</span>
              </Button>
            </Link>
            <Link href="/docs/resume_spring2025.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="bg-zinc-700 hover:bg-zinc-600 text-zinc-100 transition-all">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Resume</span> 
              </Button>
            </Link>
            {/* mobile view (hamburger toggle) */}
            <button
              className="sm:hidden text-zinc-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* drop down menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4">
          <div className="flex flex-col space-y-2">
            <Link href="#about" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              Skills
            </Link>
          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;