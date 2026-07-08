"use client"

import { motion } from "framer-motion"
import { Check, Zap } from "lucide-react"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { plans } from "@/data/plans"
import { formatPriceShort, pricePerDay, calculateSavings } from "@/lib/utils"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
} as const

export function Plans() {
  const basePrice = 35
  const baseMonths = 1

  return (
    <section id="planos" className="relative py-20 md:py-32">
      <Container>
        <SectionTitle subtitle="Escolha o plano IPTV APP ideal para você. Todos com canais premium, sem travamentos e suporte 24h.">
          Nossos Planos
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {plans.map((plan) => {
            const totalMonths = plan.durationMonths + plan.bonusMonths
            const savings = calculateSavings(basePrice, plan.price, baseMonths, totalMonths)
            const perDay = pricePerDay(plan.price, totalMonths * 30)

            return (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
              >
                <Card
                  glow={plan.popular}
                  className={`p-6 md:p-8 h-full flex flex-col ${
                    plan.popular
                      ? "border-[#F59E0B]/30 shadow-[0_0_60px_rgba(245,158,11,0.15)] ring-1 ring-[#F59E0B]/20"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                    <h3 className="text-white font-bold text-xl">{plan.name}</h3>
                    <div className="flex items-center gap-2">
                      {plan.popular && <Badge variant="popular">Mais Popular</Badge>}
                      {plan.bestValue && <Badge variant="economia">Melhor Economia</Badge>}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold text-white">
                        {formatPriceShort(plan.price)}
                      </span>
                      <span className="text-[#94A3B8] text-sm">{plan.period}</span>
                    </div>
                    <p className="text-[#00C2FF] text-xs mt-1 font-medium">
                      {perDay}
                    </p>
                    {savings > 0 && (
                      <p className="text-[#25D366] text-xs mt-1 font-medium">
                        Economia de {savings}% em relação ao mensal
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[#CBD5E1]">
                        <Check size={16} className="text-[#00C2FF] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <Button
                      variant="cta"
                      size="lg"
                      href={`https://api.whatsapp.com/send?phone=556296418908&text=${encodeURIComponent(plan.whatsapp)}`}
                      target="_blank"
                      className="w-full"
                    >
                      Assinar {plan.name}
                    </Button>
                    <Button
                      variant="whatsapp"
                      size="default"
                      href="https://api.whatsapp.com/send?phone=556296418908&text=Olá, quero o teste grátis de 6h da IPTV APP"
                      target="_blank"
                      className="w-full"
                    >
                      Teste Grátis
                    </Button>
                  </div>

                  {plan.bonusMonths > 0 && (
                    <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,.08)]">
                      <div className="flex items-center gap-2 text-[#F59E0B] text-xs font-medium">
                        <Zap size={14} />
                        <span>Ganhe {plan.bonusMonths} mês grátis + 1 ponto adicional</span>
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
