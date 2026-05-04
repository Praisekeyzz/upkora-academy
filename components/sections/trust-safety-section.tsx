"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Lock, UserCheck, HeartHandshake, Zap, Globe } from "lucide-react"

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Verified Instructors",
    description: "Every mentor undergoes a rigorous verification process to ensure industry expertise.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Your financial data is protected with industry-standard encryption and security.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: HeartHandshake,
    title: "Satisfaction Guarantee",
    description: "Not happy with a course? Get a full refund within 30 days, no questions asked.",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: UserCheck,
    title: "Active Support",
    description: "Our dedicated support team is available 24/7 to help you with any issues.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Start learning the moment you enroll with immediate course material delivery.",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Join a diverse network of learners and professionals from all over the world.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
]

export function TrustSafetySection() {
  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="page-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight font-syne">
            Why You Can <span className="text-primary-600">Trust</span> Us
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed font-inter">
            Your learning journey is our top priority. We've built a secure and transparent environment so you can focus on mastering new skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-syne group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed font-inter">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
