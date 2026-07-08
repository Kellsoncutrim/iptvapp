"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { AmbientGlow } from "@/components/effects/ambient-glow"

export function CTAIntermediary() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <AmbientGlow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="orange" />
      <AmbientGlow className="top-0 right-0" color="cyan" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00C2FF]/10 text-[#00C2FF] text-xs font-bold uppercase tracking-wider border border-[#00C2FF]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
            Mais de 10.000 clientes satisfeitos
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Junte-se a milhares de clientes{" "}
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#E65A00] bg-clip-text text-transparent">
              já satisfeitos
            </span>{" "}
            com a IPTV APP
          </h2>

          <p className="text-lg text-[#94A3B8] mb-8 max-w-xl mx-auto">
            Mais de 10.000 clientes já escolheram a melhor IPTV do Brasil.
            Assine agora e tenha acesso ao melhor conteúdo premium.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="cta"
              size="lg"
              href="https://api.whatsapp.com/send?phone=556296418908&text=Olá, quero assinar um plano da IPTV APP"
              target="_blank"
            >
              Assinar Agora
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              href="https://api.whatsapp.com/send?phone=556296418908&text=Olá, quero o teste grátis de 6h da IPTV APP"
              target="_blank"
            >
              Teste Grátis 6h
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
