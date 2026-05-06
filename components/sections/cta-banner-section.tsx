"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTABannerSection() {
  return (
    <section className="py-24 bg-background">
      <div className="page-container">
        <div className="bg-neon rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          {/* Decorative swirl/line pattern (simplified) */}
          <div className="absolute top-0 left-0 w-64 h-64 border-[3px] border-black/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8 leading-tight font-syne">
              Ready to accelerate your career? <span className="underline decoration-[3px] underline-offset-8 decoration-black/20">Join waitlist now</span>
            </h2>

            <div className="flex flex-col gap-2 max-w-md">
              <label className="text-[10px] font-black uppercase tracking-widest text-black/60 font-inter">
                Enter your email *
              </label>
              <div className="flex bg-white rounded-xl p-1 shadow-xl shadow-black/5 border border-black/5">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="flex-1 px-4 py-3 bg-transparent outline-none text-black font-medium font-inter"
                />
                <Button variant="brand" size="default" className="gap-2 group uppercase tracking-wider">
                  Join Waitlist
                  <span className="bg-black text-neon rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight size={14} />
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative z-10 lg:w-1/3 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((id) => (
                  <img
                    key={id}
                    src={`https://randomuser.me/api/portraits/${id % 2 === 0 ? 'men' : 'women'}/${id + 10}.jpg`}
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-neon object-cover"
                  />
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-black/40 font-inter">
                Join 10,000+ learners
              </span>
            </div>

            <p className="text-black/70 text-base font-medium leading-relaxed font-inter border-t border-black/10 pt-8">
              At Upkora Academy, career progress shows up when you do. We're here to guide you from where you are to the workplaces you want to be.
            </p>

            <div className="flex gap-8">
              <Button variant="ghost" className="p-0 h-auto text-xs font-black uppercase tracking-widest text-black hover:text-primary-600 transition-colors flex items-center gap-2 group font-inter">
                I'm a Business
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button variant="ghost" className="p-0 h-auto text-xs font-black uppercase tracking-widest text-black hover:text-primary-600 transition-colors flex items-center gap-2 group font-inter">
                I'm a University
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
