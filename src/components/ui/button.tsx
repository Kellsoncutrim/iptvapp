import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps {
  children: React.ReactNode
  variant?: "cta" | "whatsapp" | "ghost" | "outline"
  size?: "default" | "lg"
  href?: string
  target?: string
  className?: string
  onClick?: () => void
}

function Button({ className, variant = "cta", size = "default", href, target, children, onClick }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-[999px] transition-all duration-300 cursor-pointer border-none no-underline"

  const variants = {
    cta: "bg-[#FF6B00] text-white hover:bg-[#E65A00] hover:scale-105 shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)]",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BD5A] hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]",
    ghost:
      "bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/40",
    outline:
      "bg-transparent text-[#00C2FF] border border-[#00C2FF] hover:bg-[#00C2FF]/10",
  }

  const sizes = {
    default: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  }

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}

export { Button }
