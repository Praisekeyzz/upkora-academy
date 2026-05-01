"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { navLinks } from "@/lib/nav-links"

const HERO_SCROLL_THRESHOLD = 80

export function GlassNavbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > HERO_SCROLL_THRESHOLD)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = (isActive: boolean) =>
    isScrolled
      ? isActive
        ? "text-heading font-semibold"
        : "text-body font-medium hover:text-heading"
      : isActive
        ? "text-white font-semibold"
        : "text-[#D2E5D6] font-medium hover:text-white"

  return (
    <nav className="fixed top-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-7xl -translate-x-1/2 px-6 md:px-12 lg:px-16">
      <div className="flex items-center gap-3 md:gap-4">
        <Link href="/" className="relative z-60 flex shrink-0 items-center justify-center font-bold text-xl transition-colors">
          <span className={isScrolled ? "text-brand" : "text-white"}>Upkora</span>
        </Link>
        <div
          className={`flex min-w-0 flex-1 items-center justify-end gap-4 rounded-full px-5 py-3 backdrop-blur-[20px] transition-all duration-300 md:gap-8 md:px-8 ${
            isScrolled
              ? "border border-heading/10 bg-white/90"
              : "border border-white/20 bg-white/8"
          }`}
        >
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[16px] leading-[100%] transition-colors ${linkClass(isActive)}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex h-8 w-8 flex-col items-center justify-center gap-1.5 transition-colors md:hidden ${
              isScrolled ? "text-heading" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 bg-current transition-all ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition-all ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden mt-2 rounded-2xl overflow-hidden backdrop-blur-[20px] transition-colors duration-300 ${
              isScrolled
                ? "border border-heading/10 bg-white/95"
                : "border border-white/20 bg-white/12"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-5 py-3 text-[16px] border-b last:border-0 transition-colors ${
                    isScrolled
                      ? "border-heading/10 hover:bg-heading/5"
                      : "border-white/10 hover:bg-white/5"
                  } ${linkClass(isActive)}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
