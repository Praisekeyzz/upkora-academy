"use client"

import { motion } from "framer-motion"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 tracking-tight font-syne">
                Bridging the <span className="text-red-500">Skill Gap</span> in a Rapidly Evolving World
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed font-inter">
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
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-red-500/30 group">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="font-bold text-foreground/80 leading-snug pt-2 font-inter transition-colors group-hover:text-foreground text-base">{problem}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 tracking-tight font-syne">
                The <span className="text-primary-600">Upkora Solution</span>
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed font-inter">
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
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary-500/30 group">
                  <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="font-bold text-foreground/80 leading-snug pt-2 font-inter transition-colors group-hover:text-foreground text-base">{solution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
