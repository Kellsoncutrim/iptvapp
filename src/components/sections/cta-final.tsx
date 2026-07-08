"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { AmbientGlow } from "@/components/effects/ambient-glow"

export function CTAFinal() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <AmbientGlow className="top-0 -left-20" color="blue" />
      <AmbientGlow className="bottom-0 -right-20" color="cyan" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Não perca mais tempo com IPTV que{" "}
            <span className="text-[#EF4444]">trava</span>.
            Assine a{" "}
            <span className="text-[#00C2FF]">IPTV APP</span> agora!
          </h2>

          <p className="text-lg text-[#94A3B8] mb-8 max-w-xl mx-auto">
            Assine a IPTV APP agora e tenha a melhor experiência em streaming
            com canais premium, filmes, séries e esportes sem travamentos.
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

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#94A3B8]">
            <span>✅ Entrega imediata</span>
            <span>🔒 Pagamento seguro</span>
            <span>🎯 Sem fidelidade</span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
