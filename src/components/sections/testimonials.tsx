"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { Card } from "@/components/ui/card"
import { testimonials } from "@/data/testimonials"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
} as const

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
} as const

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-20 md:py-32">
      <Container>
        <SectionTitle subtitle="Veja o que nossos clientes estão dizendo sobre a IPTV APP.">
          Depoimentos
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={itemVariants}>
              <Card className="p-6 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#F59E0B]" fill="#F59E0B" />
                  ))}
                </div>
                <p className="text-[#CBD5E1] text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-auto">
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-[#94A3B8] text-xs">{testimonial.city}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
