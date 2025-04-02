"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {Mail, FileText} from "lucide-react"
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="fixed top-0 w-full bg-zinc-900/80 backdrop-blur-sm z-50 border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#home" className="text-xl font-bold tracking-tighter">
        {/*className="object-contain h-12 w-auto" */}
          <Image src="/gif/jeevi_enlargedLogo.gif" alt="Jeevi Logo" width={90} height={120} className="unoptimized"></Image>
          {/* <span className="text-zinc-300">J</span>
          <span className="text-zinc-500">M</span> */}
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
          <div className="flex items-center space-x-3">
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jeevithanmahenthran@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300 hover:border-zinc-600 transition-all"
                style={{ cursor: 'pointer' }}>
                <Mail className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Contact</span>
              </Button>
            </Link>
            <Link href="/docs/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-zinc-700 hover:bg-zinc-600 text-zinc-100 transition-all"
                style={{ cursor: 'pointer' }}>
                <FileText className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Resume</span>
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;