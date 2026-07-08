"use client"

import { cn } from "@/lib/utils"

interface AmbientGlowProps {
  className?: string
  color?: "blue" | "cyan" | "orange"
}

export function AmbientGlow({ className, color = "cyan" }: AmbientGlowProps) {
  const colors = {
    blue: "bg-[#2563EB]",
    cyan: "bg-[#00C2FF]",
    orange: "bg-[#FF6B00]",
  }

  return (
    <div
      className={cn("absolute pointer-events-none", className)}
      aria-hidden="true"
    >
      <div
        className={cn(
          "w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full opacity-[0.08] blur-[100px]",
          colors[color]
        )}
      />
    </div>
  )
}
