"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
}

export function Card({ children, className, glow = false }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl",
        "bg-[rgba(22,32,51,.78)] backdrop-blur-[14px]",
        "border border-[rgba(255,255,255,.08)]",
        "shadow-[0_20px_60px_rgba(0,0,0,.35)]",
        glow && "shadow-[0_0_40px_rgba(0,194,255,0.1)]",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
