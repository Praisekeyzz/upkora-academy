"use client"

import { motion } from "framer-motion"
import { Star, Clock, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const courses = [
  {
    title: "Complete Web Development Bootcamp 2026",
    instructor: "Sarah Johnson",
    rating: 4.9,
    students: "2.5k",
    duration: "45h 30m",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    tag: "Best Seller",
  },
  {
    title: "Advanced UI/UX Design Principles",
    instructor: "Michael Chen",
    rating: 4.8,
    students: "1.8k",
    duration: "28h 15m",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    tag: "Trending",
  },
  {
    title: "Data Science & Machine Learning with Python",
    instructor: "Dr. Elena Rodriguez",
    rating: 4.9,
    students: "3.2k",
    duration: "52h 10m",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
    tag: "New",
  },
]

export function ServicesShowcaseSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="page-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Our Most Popular <span className="text-brand">Courses</span>
            </h2>
            <p className="text-body text-lg">
              Join thousands of students learning from the best instructors in the industry.
            </p>
          </div>
          <Button variant="ghost" className="text-brand font-bold hover:bg-brand/5">
            View All Courses <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-brand/5 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {course.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-bold text-heading">{course.rating}</span>
                  </div>
                  <span className="text-xs text-body">•</span>
                  <div className="flex items-center text-body">
                    <Users className="w-4 h-4" />
                    <span className="ml-1 text-xs">{course.students} students</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-heading mb-2 line-clamp-2 group-hover:text-brand transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-body mb-4">by {course.instructor}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-brand/5">
                  <div className="flex items-center text-body gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <span className="text-xl font-bold text-brand">{course.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
