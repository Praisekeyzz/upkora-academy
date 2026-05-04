"use client"

import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, Users, BookOpen, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: GraduationCap,
    title: "Scholarship Facility",
    number: "01",
    description: "Access a wide range of scholarships to fund your education.",
  },
  {
    icon: Users,
    title: "Skilled Instructors",
    number: "02",
    description: "Learn from industry-leading experts and professionals.",
  },
  {
    icon: BookOpen,
    title: "Book Library Facility",
    number: "03",
    description: "Get unlimited access to our vast digital library of resources.",
  },
  {
    icon: Wallet,
    title: "Affordable Price",
    number: "04",
    description: "Quality education shouldn't break the bank. Explore our plans.",
  },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 md:pt-40 overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
          alt="Students learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/80" />
      </div>

      <div className="page-container relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Aligned Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-8 h-0.5 bg-neon" />
              <span className="text-sm font-black uppercase tracking-[0.3em] text-neon font-inter">
                Welcome to Upkora!
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 font-syne tracking-tight text-white">
              Start Your Beautiful <br />
              And <span className="text-neon">Bright</span> Future
            </h1>

            <p className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed font-inter">
              There are many variations of pathways available to you at Upkora. We provide the tools, the mentors, and the community to help you succeed.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Button variant="neon" size="lg" className="w-full sm:w-auto gap-3 group">
                About More
                <span className="bg-black text-neon rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-black gap-3 group">
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Cards on the Right - Grid Layout */}
          <div className="relative pt-12 lg:pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col gap-4 group hover:bg-primary-600 transition-all duration-500 border border-black/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <feature.icon size={24} />
                    </div>
                    <span className="text-2xl font-black text-black/5 group-hover:text-white/20 transition-colors font-syne">
                      {feature.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-950 group-hover:text-white mb-2 font-syne transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-primary-950/60 group-hover:text-white/80 text-xs leading-relaxed font-inter transition-colors line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
