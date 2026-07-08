"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "./mobile-menu"

const links = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[rgba(11,18,32,.85)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,.08)] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C2FF] to-[#2563EB] flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                IPTV <span className="text-[#00C2FF]">APP</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="whatsapp"
                size="default"
                href="https://api.whatsapp.com/send?phone=556296418908&text=Olá, quero o teste grátis de 6h da IPTV APP"
                target="_blank"
              >
                Teste Grátis
              </Button>
              <Button
                variant="cta"
                size="default"
                href="https://api.whatsapp.com/send?phone=556296418908&text=Olá, quero assinar um plano da IPTV APP"
                target="_blank"
              >
                Assinar Agora
              </Button>
            </div>

            <button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden text-white/60 hover:text-white transition-colors"
              aria-label="Abrir menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  )
}
