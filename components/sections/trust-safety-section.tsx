"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Award, MessageSquare, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description: "Your data and payment information are protected by industry-standard encryption.",
  },
  {
    icon: Award,
    title: "Verified Certs",
    description: "Earn certificates that are recognized by top employers in the industry.",
  },
  {
    icon: MessageSquare,
    title: "24/7 Support",
    description: "Our dedicated support team is always here to help you with any learning challenges.",
  },
  {
    icon: HeartHandshake,
    title: "Job Assistance",
    description: "We provide career guidance and help you connect with potential employers.",
  },
]

export function TrustSafetySection() {
  return (
    <section className="py-24 bg-brand text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 border-8 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border-8 border-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="page-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              A Learning Environment Built on <span className="text-accent-green">Trust & Excellence</span>
            </h2>
            <p className="text-brand-light text-xl mb-10 leading-relaxed">
              We are committed to providing a safe, reliable, and high-quality educational experience for every student.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-brand-light text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[40px] border border-white/10">
              <div className="text-center space-y-6">
                <div className="inline-block p-4 bg-accent-green rounded-2xl shadow-lg">
                  <ShieldCheck className="w-12 h-12 text-brand" />
                </div>
                <h3 className="text-3xl font-bold italic">"Upkora Academy has transformed the way I learn. The quality of instructors is unmatched."</h3>
                <div className="flex flex-col items-center">
                  <p className="font-bold text-xl">David Adebayo</p>
                  <p className="text-accent-green font-medium">Software Engineer @ Google</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
