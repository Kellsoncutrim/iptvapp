"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { Card } from "@/components/ui/card"
import { Monitor, Wifi, Clapperboard, HeadphonesIcon, Tv, Film } from "lucide-react"

const features = [
  {
    icon: Clapperboard,
    title: "Canais Premium",
    description: "Centenas de canais nacionais e internacionais com programação completa 24h.",
  },
  {
    icon: Wifi,
    title: "Sem Travamentos",
    description: "Servidores de alta performance garantem transmissão estável sem buffer.",
  },
  {
    icon: Monitor,
    title: "HD, Full HD e 4K",
    description: "Qualidade de imagem adaptável à sua conexão, do SD ao 4K.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte 24h",
    description: "Equipe dedicada pronta para ajudar você em qualquer horário.",
  },
  {
    icon: Tv,
    title: "Multiplataforma",
    description: "Funciona em Smart TV, TV Box, Android, iPhone, PC e mais.",
  },
  {
    icon: Film,
    title: "Filmes e Séries",
    description: "Acervo completo com os melhores filmes, séries e conteúdo sob demanda.",
  },
]

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

export function Features() {
  return (
    <section id="beneficios" className="relative py-20 md:py-32">
      <Container>
        <SectionTitle subtitle="Por que escolher a IPTV APP? Descubra o que nos torna a melhor IPTV do Brasil.">
          Benefícios Exclusivos
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="p-6 md:p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C2FF]/20 to-[#2563EB]/20 flex items-center justify-center mb-5">
                  <feature.icon size={24} className="text-[#00C2FF]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
