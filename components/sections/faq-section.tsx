"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer: "Simply browse our catalog, select the course you're interested in, and click the 'Enroll Now' button. You'll be guided through our secure checkout process.",
  },
  {
    question: "Are the certificates industry-recognized?",
    answer: "Yes, our certificates are recognized by leading companies in the tech and design industries. We work closely with partners to ensure our curriculum meets current standards.",
  },
  {
    question: "Can I learn at my own pace?",
    answer: "Absolutely! Once you enroll, you have lifetime access to the course materials, allowing you to learn whenever and wherever it's convenient for you.",
  },
  {
    question: "What if I'm not satisfied with a course?",
    answer: "We offer a 30-day money-back guarantee. If you're not happy with your purchase, just contact our support team and we'll issue a full refund.",
  },
  {
    question: "Do I need any prior experience?",
    answer: "Requirement vary by course. We offer everything from beginner-friendly introductions to advanced masterclasses. Check the 'Prerequisites' section on each course page.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 tracking-tight font-syne">
              Frequently Asked <span className="text-primary-600">Questions</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed font-inter mb-8">
              Got questions? We've got answers. If you can't find what you're looking for, feel free to reach out to our support team.
            </p>
            <div className="p-6 rounded-[2rem] bg-card border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3 font-syne">Still have questions?</h3>
              <p className="text-foreground/60 text-sm mb-6 font-inter">We're here to help you with anything you need.</p>
              <Button variant="brand" size="lg" shape="pill" className="w-full">
                Contact Support
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-[2.5rem] p-4 md:p-8 border border-border shadow-sm">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:no-underline hover:text-primary-600 py-5 px-4 rounded-xl transition-all data-[state=open]:bg-primary-500/5 data-[state=open]:text-primary-600 font-syne">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-base leading-relaxed pt-2 pb-5 px-8 font-inter">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
