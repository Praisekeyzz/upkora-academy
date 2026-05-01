"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { defaultFaqs, type FAQItem } from "@/lib/data/faqs"

interface FAQSectionProps {
  faqs?: FAQItem[]
  showHeader?: boolean
}

export function FAQSection({ faqs: customFaqs, showHeader = true }: FAQSectionProps) {
  const [expandedIdx, setExpandedIdx] = useState(2)
  const { ref, isVisible } = useScrollAnimation()

  const faqs = customFaqs || defaultFaqs

  return (
    <section ref={ref} id="faq" className="w-full bg-white py-20">
      <div className="page-container">
        {showHeader && (
          <motion.div
            className="text-center mb-8 md:mb-12"
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-heading mb-2">
              Frequently Asked <span className="text-accent-green">Questions</span>
            </h2>
            <p className="text-body text-sm md:text-base">Find answers to your most common questions about learning with Upkora Academy.</p>
          </motion.div>
        )}

        <motion.div
          className="space-y-2 md:space-y-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {faqs.map((faq, idx) => (
            <motion.div key={idx} className="w-full" variants={staggerItem}>
              <button
                onClick={() => setExpandedIdx(expandedIdx === idx ? -1 : idx)}
                className="w-full h-[60px] md:h-[72px] px-4 md:px-8 py-3 md:py-4 flex items-center justify-between bg-surface-muted rounded-lg hover:bg-opacity-80 transition"
              >
                <span className={`text-[14px] md:text-[16px] leading-[120%] md:leading-[100%] text-heading text-left ${expandedIdx === idx ? "font-bold" : "font-normal"}`}>
                  {faq.question}
                </span>
                {expandedIdx === idx ? (
                  <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-brand shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-brand shrink-0" />
                )}
              </button>

              {expandedIdx === idx && (
                <div className="w-full px-4 md:px-8 py-3 md:py-4 text-body text-xs md:text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
