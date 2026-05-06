"use client"

import { motion } from "framer-motion"
import { Star, Clock, Users, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const courses = [
  {
    title: "Mastering UI/UX Design Trends",
    category: "Design",
    instructor: "Sarah Jenkins",
    rating: 4.9,
    students: "1.2k",
    duration: "12h 30m",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
    tag: "Bestseller",
  },
  {
    title: "Full-Stack Web Development BootCamp",
    category: "Development",
    instructor: "Michael Chen",
    rating: 4.8,
    students: "2.5k",
    duration: "45h 15m",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    tag: "Popular",
  },
  {
    title: "Digital Marketing Masterclass 2024",
    category: "Marketing",
    instructor: "Emily Rodriguez",
    rating: 4.7,
    students: "3.1k",
    duration: "20h 45m",
    price: "$74.99",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tag: "New",
  },
]

export function ServicesShowcaseSection() {
  return (
    <section className="py-24 bg-background">
      <div className="page-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight font-syne">
              Our Most Popular <span className="text-primary-600">Courses</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed font-inter">
              Join thousands of students who are already mastering new skills with our top-rated industry courses.
            </p>
          </div>
          <Link href="/waitlist">
            <Button variant="ghost" className="flex items-center gap-2 text-primary-600 font-bold text-base hover:gap-3 transition-all font-syne h-auto p-0">
              View All Courses <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-[2rem] overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-neon text-black text-[10px] font-black uppercase tracking-wider shadow-lg">
                  {course.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link href="/waitlist">
                    <Button variant="outline" shape="pill" size="sm" className="bg-white text-black border-none font-bold">
                      Join Waitlist
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-lg bg-primary-500/10 text-primary-600 text-[10px] font-bold uppercase tracking-wide">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-600 transition-colors font-syne line-clamp-2 leading-snug">
                  {course.title}
                </h3>

                <p className="text-foreground/50 text-sm mb-5 font-inter">By {course.instructor}</p>

                <div className="flex items-center justify-between py-4 border-t border-border mt-auto">
                  <div className="flex items-center gap-4 text-foreground/50 text-xs font-medium font-inter">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {course.students}
                    </div>
                  </div>
                  <div className="text-xl font-black text-foreground font-syne">{course.price}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
