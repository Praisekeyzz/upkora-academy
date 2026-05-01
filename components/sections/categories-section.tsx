"use client"

import { motion } from "framer-motion"
import { Code, Palette, BarChart, Camera, Music, BookOpen, Globe, Lightbulb } from "lucide-react"

const categories = [
  {
    icon: Code,
    title: "Web Development",
    count: "45 Courses",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    count: "32 Courses",
    color: "bg-purple-500/10 text-purple-600",
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
    color: "bg-brand/10 text-brand",
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
    <section className="py-24 bg-surface">
      <div className="page-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Explore Top <span className="text-brand">Categories</span>
          </h2>
          <p className="text-body text-lg">
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
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-brand/5 shadow-sm hover:shadow-md transition-all cursor-pointer group text-center"
            >
              <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${category.color}`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-heading mb-1 group-hover:text-brand transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-body">{category.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
