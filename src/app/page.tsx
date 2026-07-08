import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Plans } from "@/components/sections/plans"
import { CTAIntermediary } from "@/components/sections/cta-intermediary"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTAFinal } from "@/components/sections/cta-final"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Plans />
      <CTAIntermediary />
      <Testimonials />
      <FAQ />
      <CTAFinal />
    </>
  )
}
