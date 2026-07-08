"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const links = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
]

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-y-0 right-0 z-50 w-72 bg-[rgba(22,32,51,.95)] backdrop-blur-[20px] border-l border-[rgba(255,255,255,.08)]"
        >
          <div className="flex items-center justify-end p-4">
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 px-4 mt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="absolute bottom-8 left-4 right-4 flex flex-col gap-3">
            <Button variant="cta" size="lg" href="https://api.whatsapp.com/send?phone=556296418908&text=Olá, quero o plano Semestral da IPTV APP por R$ 170" target="_blank" className="w-full">
              Assinar Agora
            </Button>
            <Button variant="whatsapp" size="default" href="https://api.whatsapp.com/send?phone=556296418908&text=Olá, quero o teste grátis de 6h da IPTV APP" target="_blank" className="w-full">
              Teste Grátis
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
