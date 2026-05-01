"use client"

import { motion } from "framer-motion"
import { Search, CreditCard, BookOpen, GraduationCap } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Find Your Course",
    description: "Browse our extensive catalog of courses and find the one that fits your goals.",
    color: "bg-blue-500",
  },
  {
    icon: CreditCard,
    title: "Enroll Easily",
    description: "Sign up and pay securely using our integrated payment system to get instant access.",
    color: "bg-brand",
  },
  {
    icon: BookOpen,
    title: "Learn at Your Pace",
    description: "Access course materials anytime, anywhere, and learn on your own schedule.",
    color: "bg-accent-green",
  },
  {
    icon: GraduationCap,
    title: "Get Certified",
    description: "Complete the course, pass the assessments, and earn your verified certificate.",
    color: "bg-heading",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="page-container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            How <span className="text-brand">Upkora Academy</span> Works
          </h2>
          <p className="text-body text-lg">
            Start your learning journey in four simple steps. We've made education accessible and straightforward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-brand/10 hidden lg:block -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center group"
            >
              <div className={`w-24 h-24 mx-auto rounded-full ${step.color} text-white flex items-center justify-center mb-6 shadow-xl relative z-10 group-hover:scale-110 transition-transform`}>
                <step.icon className="w-10 h-10" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-heading font-bold flex items-center justify-center text-sm shadow-md">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-heading mb-3">{step.title}</h3>
              <p className="text-body leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
