"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Container } from "@/components/ui/container"
import { SectionTitle } from "@/components/ui/section-title"
import { faqItems } from "@/data/faq"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-20 md:py-32">
      <Container>
        <SectionTitle subtitle="Tire suas dúvidas sobre a IPTV APP.">
          Perguntas Frequentes
        </SectionTitle>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[rgba(22,32,51,.78)] backdrop-blur-[14px] border border-[rgba(255,255,255,.08)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
              >
                <span className="text-white font-medium text-sm md:text-base">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#94A3B8] shrink-0"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="text-[#94A3B8] text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
