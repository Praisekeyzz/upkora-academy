"use client"

import { motion } from "framer-motion"
import { Search, MousePointer2, GraduationCap } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Find Your Course",
    description: "Browse our extensive library of professional courses across various industries.",
    color: "bg-primary-500/10 text-primary-600",
  },
  {
    icon: MousePointer2,
    title: "Enroll & Learn",
    description: "Get instant access to course materials and start learning at your own pace.",
    color: "bg-secondary-500/10 text-secondary-600",
  },
  {
    icon: GraduationCap,
    title: "Get Certified",
    description: "Complete projects and assessments to earn your professional certificate.",
    color: "bg-neon/20 text-primary-950 dark:text-neon",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary-500/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-neon/5 blur-[100px] rounded-full" />
      </div>

      <div className="page-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight font-syne">
            How It <span className="text-primary-600">Works</span>
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed font-inter">
            Start your professional journey in three simple steps. We've streamlined the process to help you focus on learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 rounded-[2rem] bg-card border border-border shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all group"
            >
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center text-lg font-black font-syne shadow-xl group-hover:bg-primary-600 group-hover:text-white transition-colors">
                0{index + 1}
              </div>
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm ${step.color} transition-transform group-hover:scale-110`}>
                <step.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 font-syne group-hover:text-primary-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-foreground/60 text-base leading-relaxed font-inter">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
