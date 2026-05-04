"use client"

import { motion } from "framer-motion"
import { Code, Palette, BarChart, Camera, Music, BookOpen, Globe, Lightbulb } from "lucide-react"

const categories = [
  {
    icon: Code,
    title: "Web Development",
    count: "45 Courses",
    color: "bg-primary-500/10 text-primary-600",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    count: "32 Courses",
    color: "bg-secondary-500/10 text-secondary-600",
  },
  {
    icon: BarChart,
    title: "Digital Marketing",
    count: "28 Courses",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Camera,
    title: "Photography",
    count: "15 Courses",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Music,
    title: "Music Production",
    count: "12 Courses",
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: BookOpen,
    title: "Personal Development",
    count: "20 Courses",
    color: "bg-neon/10 text-primary-600",
  },
  {
    icon: Globe,
    title: "Languages",
    count: "18 Courses",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship",
    count: "22 Courses",
    color: "bg-yellow-500/10 text-yellow-600",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="page-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight font-syne">
            Explore Top <span className="text-primary-600">Categories</span>
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed font-inter">
            Choose from a wide variety of courses and start your learning journey in any field that interests you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-card p-6 rounded-[1.5rem] border border-border shadow-sm hover:shadow-xl hover:shadow-primary-500/5 transition-all cursor-pointer group text-center"
            >
              <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:rotate-3 shadow-sm ${category.color}`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary-600 transition-colors font-syne">
                {category.title}
              </h3>
              <p className="text-sm font-medium text-foreground/50 font-inter">{category.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
