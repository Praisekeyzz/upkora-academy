"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-green/10 blur-[120px] rounded-full" />
      </div>

      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
              New Courses Available for 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-heading leading-[1.1] mb-6">
              Master the Skills That <span className="text-brand">Shape the Future</span>
            </h1>
            <p className="text-lg text-body mb-8 max-w-lg">
              Join Upkora Academy and gain access to world-class education. From coding to creative arts, learn from industry experts and accelerate your career today.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" className="bg-brand hover:bg-brand-hover text-white rounded-full px-8 h-14 text-lg">
                Start Learning Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-brand text-brand hover:bg-brand/5">
                <Play className="mr-2 w-5 h-5 fill-current" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {[
                "Expert Instructors",
                "Lifetime Access",
                "Verified Certificates"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-heading font-semibold">
                  <CheckCircle className="w-5 h-5 text-brand" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Students learning together"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/100?u=${i}`}
                        alt="User"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-medium">
                    Joined by <span className="font-bold">10k+</span> students worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Floating cards decoration */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-brand/10 animate-bounce-slow z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent-green/20 flex items-center justify-center text-brand">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-body uppercase font-bold tracking-wider">Course Completed</p>
                  <p className="text-sm font-bold text-heading">UI/UX Design Masterclass</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
