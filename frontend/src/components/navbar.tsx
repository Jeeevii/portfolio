"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="fixed top-0 w-full bg-zinc-900/80 backdrop-blur-sm z-50 border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          <span className="text-zinc-300">Jeevithan</span>
          <span className="text-zinc-500">Mahenthran</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="#about" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            Projects
          </Link>
          <Link href="/docs/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="bg-zinc-700 hover:bg-zinc-600 text-zinc-100" style={{ cursor: 'pointer' }}>Resume</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;