"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import AnimationObserver from "./animations"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <AnimationObserver />
      {children}
    </ThemeProvider>
  )
}

