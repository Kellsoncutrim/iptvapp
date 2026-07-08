"use client"

import { motion } from "framer-motion"
import { Shield, Zap, HeadphonesIcon } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { AmbientGlow } from "@/components/effects/ambient-glow"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
} as const

const trustItems = [
  { icon: Shield, text: "Mais de 10.000 clientes" },
  { icon: Zap, text: "Entrega imediata" },
  { icon: HeadphonesIcon, text: "Suporte 24h" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <AmbientGlow className="top-1/4 -left-20" color="cyan" />
      <AmbientGlow className="bottom-1/4 -right-20" color="blue" />
      <AmbientGlow className="top-1/3 left-1/2 -translate-x-1/2" color="orange" />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/20">
              📺 IPTV Premium +4K — Teste Grátis 6h
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            IPTV APP{" "}
            <span className="bg-gradient-to-r from-[#00C2FF] via-[#2563EB] to-[#FF6B00] bg-clip-text text-transparent">
              A Melhor IPTV
            </span>{" "}
            do Brasil
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Canais premium, filmes, séries e esportes em HD, Full HD e 4K.
            Assine a IPTV APP e tenha a melhor experiência em IPTV sem travamentos.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              variant="whatsapp"
              size="lg"
              href="https://api.whatsapp.com/send?phone=556296418908&text=Olá, quero o teste grátis de 6h da IPTV APP"
              target="_blank"
            >
              Teste Grátis 6h
            </Button>
            <Button
              variant="cta"
              size="lg"
              href="https://api.whatsapp.com/send?phone=556296418908&text=Olá, quero assinar um plano da IPTV APP"
              target="_blank"
            >
              Assinar Agora
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {trustItems.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-[#94A3B8] text-sm">
                <item.icon size={16} className="text-[#00C2FF]" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
