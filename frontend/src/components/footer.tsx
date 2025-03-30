"use client";

import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-zinc-950 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-zinc-500">© {new Date().getFullYear()} Jeevithan Mahenthran</p>
          </div>
          <div className="flex space-x-6">
            <Link href="https://github.com/jeeevii" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/jeevithan-mahenthran/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="/docs/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300">
              <FileText className="h-5 w-5" />
              <span className="sr-only">Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;