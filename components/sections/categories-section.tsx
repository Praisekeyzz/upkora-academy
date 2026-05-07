"use client"

import { motion } from "framer-motion"
import { Code2, BrainCircuit, Cloud, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Scale the future with AWS, Azure, and modern DevOps practices.",
    count: "5+ Tracks",
    color: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    iconColor: "text-cyan-500",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: BrainCircuit,
    title: "AI and Machine Learning",
    description: "Deep dive into neural networks, generative AI, and data science.",
    count: "8+ Specializations",
    color: "from-neon/20 via-neon/5 to-transparent",
    iconColor: "text-[#a3db29]",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&auto=format&fit=crop&q=80",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Master full-stack engineering, from core architecture to deployment.",
    count: "12+ Bootcamps",
    color: "from-primary-600/20 via-primary-600/5 to-transparent",
    iconColor: "text-primary-600",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-primary-50/30">

      {/* Full-section subtle grid — no mask, full coverage */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Fade in at top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

      {/* Fade out at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      <div className="page-container relative z-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-primary-500/10 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-primary-700 font-inter">Industry Tracks</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-primary-950 mb-6 tracking-tight font-syne"
            >
              Focused Learning for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Digital Economy
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-primary-950/60 text-lg md:text-xl leading-relaxed font-inter"
            >
              We've narrowed our focus to the three most critical domains of technology to ensure our students get the highest quality, specialized training.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button variant="ghost" className="font-bold text-primary-600 hover:text-primary-700 p-0 h-auto group text-lg">
              View All Learning Tracks
              <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Button>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-12 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-hide">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className="min-w-[300px] sm:min-w-[340px] lg:min-w-0 snap-center group cursor-pointer"
            >
              <div className="h-full bg-white rounded-[2rem] overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-500">

                {/* TOP — Text content */}
                <div className="flex flex-col p-6 gap-3">
                  {/* Title row with arrow */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-primary-950 font-syne leading-snug group-hover:text-primary-700 transition-colors">
                      {category.title}
                    </h3>

                    {/* Arrow button — top right */}
                    <button className="shrink-0 w-8 h-8 rounded-full border border-primary-200 flex items-center justify-center bg-white group-hover:bg-primary-600 group-hover:border-primary-600 transition-all duration-300 mt-0.5">
                      <ArrowUpRight className="w-4 h-4 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-primary-950/55 text-sm leading-relaxed font-inter group-hover:text-primary-950/75 transition-colors">
                    {category.description}
                  </p>

                  {/* Count badge */}
                  <span className="inline-flex self-start text-xs font-black uppercase tracking-widest text-primary-600/50 font-inter">
                    {category.count}
                  </span>
                </div>

                {/* BOTTOM — Image with icon overlay */}
                <div className="relative w-full flex-1 min-h-[200px] overflow-hidden rounded-b-[2rem]">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Category icon — bottom left of image */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center shadow-lg">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}