"use client"

import { motion } from "framer-motion"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
                Bridging the <span className="text-red-500">Skill Gap</span> in a Rapidly Changing World
              </h2>
              <p className="text-body text-lg">
                Traditional education often struggles to keep up with industry demands. We identified the core challenges students face today:
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Outdated curriculum that doesn't match job requirements",
                "Lack of practical, hands-on project experience",
                "High costs of quality education and certifications",
                "Limited access to industry experts and mentors",
              ].map((problem, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-50 text-red-700 border border-red-100">
                  <AlertCircle className="w-6 h-6 shrink-0" />
                  <p className="font-medium">{problem}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
                The <span className="text-brand">Upkora Solution</span>
              </h2>
              <p className="text-body text-lg">
                We've built a platform that puts students first, focusing on real-world application and career outcomes.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Curriculum designed and updated by industry professionals",
                "Project-based learning with real-world case studies",
                "Affordable pricing with flexible payment options",
                "One-on-one mentorship and active community support",
              ].map((solution, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-brand/5 text-brand border border-brand/10">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <p className="font-medium">{solution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
