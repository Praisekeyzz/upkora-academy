"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alex Thompson",
    role: "UX Designer at TechCorp",
    content: "Upkora Academy changed my career path. The UI/UX course was so practical that I could apply everything immediately to my work.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    role: "Frontend Developer",
    content: "The mentorship here is unmatched. Having an industry pro review my code and give real feedback was the turning point for me.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Digital Marketer",
    content: "I've taken many online courses, but Upkora's approach to project-based learning is what makes it stand out from the rest.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager",
    content: "The community is incredible. I've met so many like-minded professionals and even found my current job through the network.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative quotes */}
      <div className="absolute top-20 left-10 text-primary-500/10 -z-10">
        <Quote className="w-64 h-64 rotate-180" />
      </div>

      <div className="page-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight font-syne">
            What Our <span className="text-primary-600">Students</span> Say
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed font-inter">
            Don't just take our word for it. Hear from thousands of successful students who have transformed their lives through Upkora Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-[2rem] border border-border shadow-sm hover:shadow-2xl hover:shadow-primary-500/5 transition-all group"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-lg italic text-foreground/80 mb-8 leading-relaxed font-inter">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-500/20 group-hover:border-primary-500 transition-colors">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground font-syne">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/50 font-inter">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
