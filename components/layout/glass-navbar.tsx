"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search, Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
  </svg>
)
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "#courses" },
  { name: "Academics", href: "#academics" },
  { name: "Contact", href: "#contact" },
]

export function GlassNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar - Brand Primary Green */}
      <div className="hidden lg:flex w-full h-10 overflow-hidden">
        <div className="bg-neon w-[30%] flex items-center justify-center gap-4 px-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-black/60">Follow Us:</span>
          <div className="flex gap-3">
            {[Facebook, XIcon, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-black/60 hover:text-black transition-colors flex items-center">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
        <div className="bg-primary-950 flex-1 flex items-center justify-end gap-10 px-12 text-white/70 text-[11px] font-bold font-inter">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-neon" />
            25/B Milford Road, New York
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-neon" />
            info@upkorasolutions.com
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-neon" />
            +2 123 654 7898
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-xl py-2" : "bg-white/95 py-4"}`}>
        <div className="page-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/logos/logo-secondary.png" 
              alt="Upkora Academy" 
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-primary-950/70 hover:text-primary-600 transition-colors font-inter flex items-center gap-1 group"
              >
                {link.name}
                {/* {[ "Courses"].includes(link.name) && (
                  <span className="text-[10px] opacity-50 group-hover:rotate-180 transition-transform">▼</span>
                )} */}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Button variant="ghost" size="icon" className="text-primary-950">
              <Search size={22} />
            </Button>
            <Link href="/waitlist">
              <Button variant="neon" size="default" className="gap-2 group">
                Join Waitlist
                <span className="bg-black text-neon rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-950"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-primary-950 z-[60] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-16">
              <img 
                src="/logos/logo-white.png" 
                alt="Upkora Academy" 
                className="h-10 w-auto object-contain"
              />
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:bg-white/10">
                <X size={32} />
              </Button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-black text-white/70 hover:text-neon transition-colors font-syne"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-10 border-t border-white/10 flex flex-col gap-6">
              <Link href="/waitlist" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="neon" size="xl" shape="pill" className="w-full text-xl font-syne">
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
