"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
  align?: "center" | "left"
  className?: string
}

export function SectionTitle({ children, subtitle, align = "center", className }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[#94A3B8] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
