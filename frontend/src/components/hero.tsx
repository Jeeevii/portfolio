/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import  DecryptButton from "@/components/ui/decryptButton"
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
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
            Hey, I'm a CS student at UC Santa Cruz who loves building full-stack apps with focus on backend development, seeking entry-level roles and internships to grow and build impactful systems.
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
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="github">
                  <g id="github_2">
                    <path id="Vector" d="M50 1.00049C22.3892 1.00049 -0.000244141 23.386 -0.000244141 51.0007C-0.000244141 73.0924 14.3263 91.8345 34.1931 98.4461C36.6918 98.9088 37.6094 97.3614 37.6094 96.0406C37.6094 94.8485 37.5627 90.9095 37.5416 86.7316C23.6311 89.7562 20.6959 80.8322 20.6959 80.8322C18.4215 75.0528 15.1443 73.5163 15.1443 73.5163C10.608 70.4129 15.4863 70.4765 15.4863 70.4765C20.5073 70.8294 23.1511 75.6292 23.1511 75.6292C27.6105 83.2733 34.8479 81.0631 37.7012 79.7859C38.1498 76.5539 39.4458 74.3485 40.8756 73.0999C29.7701 71.8352 18.0952 67.5479 18.0952 48.3894C18.0952 42.9308 20.0485 38.4701 23.2472 34.9687C22.728 33.7091 21.0167 28.6238 23.7315 21.7366C23.7315 21.7366 27.9301 20.3927 37.4851 26.8619C41.4732 25.7537 45.7507 25.1985 50 25.1796C54.2492 25.1985 58.5298 25.7537 62.5258 26.8619C72.0694 20.3927 76.2622 21.7366 76.2622 21.7366C78.9836 28.6238 77.2715 33.7091 76.7523 34.9687C79.9581 38.4701 81.898 42.9304 81.898 48.3894C81.898 67.5934 70.2012 71.8223 59.0675 73.0599C60.8607 74.6116 62.4587 77.6546 62.4587 82.3192C62.4587 89.0091 62.4007 94.3936 62.4007 96.0406C62.4007 97.3712 63.3007 98.9304 65.8355 98.4394C85.6912 91.8204 99.9998 73.085 99.9998 51.0007C99.9998 23.386 77.6135 1.00049 50 1.00049Z" fill="white"/>
                    <path id="Vector_2" d="M18.7264 72.227C18.6166 72.4752 18.2252 72.5498 17.8696 72.3796C17.5068 72.2164 17.3029 71.8776 17.4206 71.6282C17.5284 71.3725 17.9198 71.3012 18.2817 71.4729C18.6452 71.6357 18.8523 71.9776 18.7264 72.227ZM21.1859 74.4215C20.9475 74.6426 20.4812 74.5399 20.1648 74.1905C19.8377 73.8419 19.7766 73.376 20.0185 73.1513C20.2644 72.9305 20.7165 73.0337 21.0444 73.3827C21.3714 73.7352 21.4349 74.1983 21.1855 74.4218L21.1859 74.4215ZM22.8733 77.2292C22.5667 77.4421 22.0655 77.2425 21.7561 76.7978C21.4498 76.3535 21.4498 75.8202 21.7628 75.6065C22.0733 75.3928 22.5667 75.5849 22.8804 76.0261C23.1862 76.4782 23.1862 77.0116 22.8729 77.2296L22.8733 77.2292ZM25.7266 80.4812C25.4524 80.7832 24.8689 80.7024 24.4415 80.2899C24.0047 79.8868 23.8827 79.3146 24.1576 79.0123C24.4348 78.7095 25.0219 78.7946 25.4524 79.2036C25.8865 79.606 26.0191 80.1824 25.7269 80.4812H25.7266ZM29.4143 81.5792C29.2939 81.9706 28.7316 82.1486 28.1653 81.9824C27.5998 81.811 27.2296 81.3522 27.3438 80.9565C27.4614 80.5624 28.0261 80.3769 28.5967 80.555C29.1613 80.7255 29.5323 81.1808 29.4147 81.5792H29.4143ZM33.6118 82.0447C33.6259 82.4573 33.1455 82.7992 32.551 82.8067C31.953 82.8196 31.4695 82.4859 31.4632 82.0804C31.4632 81.6639 31.9326 81.3251 32.5302 81.3153C33.1247 81.3036 33.6118 81.6349 33.6118 82.0447ZM37.7348 81.8867C37.8061 82.289 37.3928 82.7023 36.8027 82.8121C36.2223 82.918 35.685 82.6698 35.6109 82.271C35.5388 81.8584 35.9599 81.4455 36.5391 81.3385C37.1305 81.2357 37.6595 81.4777 37.7348 81.8867Z" fill="white"/>
                  </g>
                </g>
              </svg>            
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
          <Link href="#projects" rel="noopener noreferrer" >
            <DecryptButton />
          </Link>
      </div>
    </section>
  );
};

export default Hero;