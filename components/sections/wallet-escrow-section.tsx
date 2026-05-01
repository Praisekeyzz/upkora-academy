"use client"

import { motion } from "framer-motion"
import {
  PiBankBold,
  PiLockKeyBold,
  PiCheckCircleBold,
  PiArrowRightBold,
  PiWalletBold,
} from "react-icons/pi"
import type { ComponentType, SVGProps } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { fadeInUp, slideInFromLeft, slideInFromRight, staggerContainer, staggerItem } from "@/lib/animations"

type IconType = ComponentType<SVGProps<SVGSVGElement>>

interface FlowStep {
  icon: IconType
  label: string
  detail: string
}

const flow: FlowStep[] = [
  { icon: PiBankBold, label: "Fund", detail: "Bank transfer to your DVA" },
  { icon: PiLockKeyBold, label: "Hold", detail: "Funds locked in escrow" },
  { icon: PiCheckCircleBold, label: "Release", detail: "Provider gets paid" },
]

export function WalletEscrowSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="w-full bg-brand-dark py-20 md:py-28 overflow-hidden">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.p
              variants={slideInFromLeft}
              className="text-accent-green font-bold text-[14px] md:text-[16px] tracking-[0.18em] uppercase mb-3"
            >
              In-app wallet
            </motion.p>
            <motion.h2
              variants={slideInFromLeft}
              className="text-3xl md:text-5xl font-bold text-white leading-[110%] mb-5"
            >
              Pay safely. <span className="text-accent-green">Get paid faster.</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-white/80 text-[15px] md:text-[17px] leading-[170%] mb-8 max-w-xl"
            >
              Every verified user gets a Dedicated Virtual Account at a Nigerian bank. Fund your wallet with a normal transfer, lock it into escrow when you accept an offer, and release with one tap when the work is done.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-3 mb-10">
              {[
                "Three balances at a glance: available, held, and pending.",
                "Withdraw to your verified Nigerian bank account at any time.",
                "Every fund, hold, release, and payout is logged in your transaction history.",
              ].map((line) => (
                <motion.li
                  key={line}
                  variants={staggerItem}
                  className="flex items-start gap-3 text-white/85 text-[14px] md:text-[15px] leading-[160%]"
                >
                  <PiCheckCircleBold className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                  <span>{line}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-green/20 text-accent-green flex items-center justify-center">
                    <PiWalletBold className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-[12px] uppercase tracking-wider">Your wallet</p>
                    <p className="text-white font-semibold text-[14px]">Available balance</p>
                  </div>
                </div>
                <span className="text-accent-green text-[12px] font-semibold bg-accent-green/15 rounded-full px-3 py-1">
                  KYC verified
                </span>
              </div>

              <p className="text-white text-[40px] md:text-[48px] font-bold leading-none mb-1">
                ₦185,400<span className="text-white/50 text-[24px] md:text-[28px] font-semibold">.00</span>
              </p>
              <p className="text-white/60 text-[13px] mb-8">
                + ₦60,000 held in escrow on 2 active tasks
              </p>

              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {flow.map((step, idx) => {
                  const Icon = step.icon
                  return (
                    <div key={step.label} className="relative">
                      <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-3 md:p-4 text-center">
                        <div className="mx-auto w-9 h-9 md:w-10 md:h-10 rounded-xl bg-accent-green/15 text-accent-green flex items-center justify-center mb-2">
                          <Icon className="w-5 h-5" />
                        </div>
                        <p className="text-white text-[12px] md:text-[13px] font-semibold">{step.label}</p>
                        <p className="text-white/55 text-[10px] md:text-[11px] leading-tight mt-1">
                          {step.detail}
                        </p>
                      </div>
                      {idx < flow.length - 1 && (
                        <PiArrowRightBold className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 text-white/40 w-4 h-4" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <motion.div
              className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 bg-accent-green text-brand-dark px-3 py-2 rounded-full shadow-lg"
              variants={fadeInUp}
            >
              <PiLockKeyBold className="w-4 h-4" />
              <span className="text-[12px] font-bold">Escrow protected</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
