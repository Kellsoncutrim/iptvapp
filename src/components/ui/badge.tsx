import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "popular" | "urgente" | "economia"
  className?: string
}

export function Badge({ children, variant = "popular", className }: BadgeProps) {
  const variants = {
    popular: "bg-[#F59E0B] text-black",
    urgente: "bg-[#EF4444] text-white",
    economia: "bg-[#00C2FF] text-[#0B1220]",
  }

  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
