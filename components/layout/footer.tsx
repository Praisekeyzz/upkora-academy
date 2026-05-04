"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerSections = [
  {
    title: "DATA + AI",
    links: [
      "Data Analytics Bootcamp",
      "Data Science Bootcamp",
      "Machine Learning Engineering and AI Bootcamp",
      "Generative AI for Business",
    ],
  },
  {
    title: "SOFTWARE ENGINEERING",
    links: [
      "Software Engineering Bootcamp",
      "Software Engineering Bootcamp for Beginners",
      "Full Stack Development",
    ],
    subSections: [
      {
        title: "DESIGN",
        links: ["UI/UX Design Bootcamp", "Product Design"],
      }
    ]
  },
  {
    title: "WHY UPKORA",
    links: [
      "How it works",
      "Mentorship",
      "Money-back guarantee",
      "Student outcomes",
      "Student stories",
      "Community",
      "Payment options",
      "Scholarships",
    ],
  },
  {
    title: "CYBERSECURITY",
    links: [
      "Cybersecurity Bootcamp",
      "Ethical Hacking",
      "Network Security",
    ],
    subSections: [
      {
        title: "RESOURCES",
        links: [
          "Blog",
          "Compare bootcamps",
          "Free courses",
          "Learn data science",
          "Learn coding",
          "Learn cybersecurity",
          "Learn data analytics",
        ]
      }
    ]
  },
  {
    title: "ABOUT US",
    links: [
      "Our story",
      "Become a mentor",
      "Join our team",
      "Press inquiries: press@upkorasolutions.com",
    ],
  },
]

export function Footer() {
  return (
    <div className="relative mt-40">
      {/* CTA Box - Brand Green background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-20">
        <div className="page-container">
          <div className="bg-primary-600 rounded-[2.5rem] p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
            {/* Decorative swirl/line pattern */}
            <div className="absolute top-0 left-0 w-64 h-64 border-[3px] border-black/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight font-syne">
                Ready to accelerate your career? <span className="underline decoration-[3px] underline-offset-8 decoration-white/20">Join waitlist now</span>
              </h2>
              
              <div className="flex flex-col gap-2 max-w-md">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/60 font-inter">
                  Enter your email *
                </label>
                <div className="flex bg-white rounded-xl p-1 shadow-xl shadow-black/5 border border-black/5">
                  <input 
                    type="email" 
                    placeholder="name@email.com" 
                    className="flex-1 px-4 py-3 bg-transparent outline-none text-black font-medium font-inter text-sm"
                  />
                  <Button variant="neon" size="default" className="gap-2 group uppercase tracking-wider">
                    Join Waitlist
                    <span className="bg-black text-neon rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <ArrowRight size={14} />
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative z-10 lg:w-1/3 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((id) => (
                    <img
                      key={id}
                      src={`https://randomuser.me/api/portraits/${id % 2 === 0 ? 'men' : 'women'}/${id + 10}.jpg`}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-primary-600 object-cover"
                    />
                  ))}
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-white/60 font-inter">
                  Join 10,000+ learners
                </span>
              </div>
              
              <p className="text-white/80 text-sm font-medium leading-relaxed font-inter border-t border-white/10 pt-6">
                At Upkora Academy, career progress shows up when you do. We're here to guide you from where you are to the workplaces you want to be.
              </p>

              <div className="flex gap-8">
                <Button variant="ghost" className="p-0 h-auto text-[10px] font-black uppercase tracking-widest text-white hover:text-neon transition-colors flex items-center gap-2 group font-inter">
                  I'm a Business
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
                <Button variant="ghost" className="p-0 h-auto text-[10px] font-black uppercase tracking-widest text-white hover:text-neon transition-colors flex items-center gap-2 group font-inter">
                  I'm a University
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white pt-56 pb-12 relative z-10">
        <div className="page-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 mb-20 border-b border-white/10 pb-20">
            {footerSections.map((section, idx) => (
              <div key={idx} className="space-y-10">
                <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 font-inter">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <Link href="#" className="text-sm font-semibold hover:text-primary-500 transition-colors font-inter">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {section.subSections?.map((sub, sidx) => (
                  <div key={sidx} className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 font-inter">
                      {sub.title}
                    </h4>
                    <ul className="space-y-3">
                      {sub.links.map((link) => (
                        <li key={link}>
                          <Link href="#" className="text-sm font-semibold hover:text-primary-500 transition-colors font-inter">
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
            <img 
              src="/logos/logo-white.png" 
              alt="Upkora Academy" 
              className="h-10 w-auto object-contain"
            />

            <div className="flex gap-4">
              {[Youtube, Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 border-t border-white/10 pt-12 text-center">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-widest text-white/50 font-inter">
              <span>© Copyright 2026</span>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Conduct</Link>
              <Link href="#" className="hover:text-white transition-colors">Security</Link>
              <Link href="#" className="hover:text-white transition-colors">Regulation</Link>
            </div>
            {/* <p className="text-[9px] text-white/30 max-w-4xl leading-relaxed font-inter uppercase tracking-[0.1em]">
              Upkora Labs, Inc. operates, through assumed name, two schools registered with the Utah Department of Commerce - Division of Corporations and Commercial Code: Upkora, which is registered as Upkora.com.
            </p> */}
          </div>
        </div>
      </footer>
    </div>
  )
}
