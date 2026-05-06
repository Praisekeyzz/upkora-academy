"use client"

import { motion } from "framer-motion"
import { Code2, BrainCircuit, ShieldAlert, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Master full-stack engineering, from core architecture to deployment.",
    count: "12+ Bootcamps",
    color: "from-primary-600/20 to-primary-950/40",
    iconColor: "text-primary-500",
  },
  {
    icon: BrainCircuit,
    title: "AI and Machine Learning",
    description: "Deep dive into neural networks, generative AI, and data science.",
    count: "8+ Specializations",
    color: "from-neon/20 to-primary-950/40",
    iconColor: "text-neon",
  },
  {
    icon: ShieldAlert,
    title: "Cyber Security",
    description: "Defend digital frontiers with ethical hacking and network defense.",
    count: "6+ Certifications",
    color: "from-blue-500/20 to-primary-950/40",
    iconColor: "text-blue-400",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scale the future with AWS, Azure, and modern DevOps practices.",
    count: "5+ Tracks",
    color: "from-cyan-500/20 to-primary-950/40",
    iconColor: "text-cyan-400",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="page-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary-700 font-inter">Industry Tracks</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-950 mb-6 tracking-tight font-syne">
              Focused Learning for the <br />
              <span className="text-primary-600">Digital Economy</span>
            </h2>
            <p className="text-primary-950/60 text-lg leading-relaxed font-inter">
              We've narrowed our focus to the four most critical domains of technology to ensure our students get the highest quality, specialized training.
            </p>
          </div>
          <Button variant="ghost" className="font-bold text-primary-600 hover:text-primary-700 p-0 h-auto group">
            View All Learning Tracks
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>

        {/* Mobile: Horizontal Snap Scroll | Desktop: 4-Column Grid */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-8 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-hide">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 snap-center"
            >
              <div className="h-full bg-white rounded-[2.5rem] border border-black/5 p-8 flex flex-col gap-8 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 group relative overflow-hidden">
                {/* Gradient background hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <category.icon className={`w-7 h-7 ${category.iconColor}`} />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-widest text-primary-600/60 mb-2 block font-inter">
                    {category.count}
                  </span>

                  <h3 className="text-2xl font-bold text-primary-950 mb-4 font-syne group-hover:text-primary-700 transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-primary-950/50 text-sm leading-relaxed font-inter group-hover:text-primary-950/70 transition-colors">
                    {category.description}
                  </p>
                </div>

                <div className="mt-auto relative z-10 pt-4">
                  <Button variant="neon" size="sm" className="w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Explore Track
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
