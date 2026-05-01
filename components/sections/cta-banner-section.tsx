"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTABannerSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="page-container py-16 md:py-24">
      <motion.div
        className="py-16 md:py-20 rounded-[40px] bg-brand relative overflow-hidden flex items-center justify-center text-center px-6"
        variants={fadeInUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-green/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

        <motion.div
          className="max-w-3xl mx-auto space-y-6 lg:space-y-8 relative z-10"
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight" variants={staggerItem}>
            Ready to Start Your <span className="text-accent-green">Learning Journey?</span>
          </motion.h2>
          <motion.p className="text-brand-light text-lg lg:text-xl" variants={staggerItem}>
            Join over 10,000+ students already mastering new skills on Upkora Academy. Get started today and transform your career.
          </motion.p>
          <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-brand hover:bg-white/90 rounded-full px-10 h-14 text-lg font-bold">
              Join Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg font-bold">
              Browse Courses
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
