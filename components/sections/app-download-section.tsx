"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { fadeInUp, scaleIn, slideInFromLeft, staggerContainer, staggerItem } from "@/lib/animations"
import { AppDownloadButtons } from "@/components/shared/app-download-buttons"

export function AppDownloadSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="w-full bg-white py-9 md:min-h-[632px] overflow-hidden">
      {/* Desktop */}
      <div className="hidden md:block relative h-screen">
        <motion.div
          className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 h-full"
          initial={{ scale: 1.03, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 1.03, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/icons/app-preview.svg"
            alt="App preview"
            fill
            className="w-full h-full object-cover object-[60%_center] translate-y-7"
            draggable={false}
          />
        </motion.div>

        <div className="page-container relative h-full pt-16">
          <motion.div
            className="w-[494px] flex flex-col gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
          <motion.h2 className="font-semibold text-[52px] text-heading leading-[100%] mb-2" variants={slideInFromLeft}>
            Get the App.
          </motion.h2>
          <motion.h2 className="text-heading leading-[100%] mb-6" variants={slideInFromLeft}>
            <span className="font-semibold text-[52px]">Get It </span>
            <span className="font-bold text-[60px] text-accent-green">Done</span>
            <span className="font-bold text-[60px]">.</span>
          </motion.h2>
          <motion.p className="text-[18px] leading-[150%] text-heading mb-6" variants={staggerItem}>
            The best way to manage your to-do list or your business, right in your pocket.
          </motion.p>
          <motion.div variants={staggerItem}>
            <AppDownloadButtons variant="store" />
          </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden page-container">
        <motion.div
          className="w-full relative py-20"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="w-full flex flex-col gap-4" variants={staggerContainer}>
            <motion.h2 className="font-semibold text-[32px] text-heading leading-[100%] mb-2 text-center" variants={fadeInUp}>
              Get the App.
            </motion.h2>
            <motion.h2 className="text-heading leading-[100%] mb-6 text-center" variants={fadeInUp}>
              <span className="font-semibold text-[32px]">Get It </span>
              <span className="font-bold text-[40px] text-accent-green">Done</span>
              <span className="font-bold text-[40px]">.</span>
            </motion.h2>
            <motion.p className="text-[16px] leading-[150%] text-heading mb-6 text-center" variants={staggerItem}>
              The best way to manage your to-do list or your business, right in your pocket.
            </motion.p>
            <motion.div className="flex justify-center" variants={staggerItem}>
              <AppDownloadButtons variant="store" />
            </motion.div>
          </motion.div>

          <motion.div className="w-full mt-8 flex justify-center" variants={scaleIn}>
            <Image
              src="/icons/app-mockup.svg"
              alt="Makeatask App"
              width={440}
              height={400}
              className="w-full max-w-[340px] h-auto object-contain"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
