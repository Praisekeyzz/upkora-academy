"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight, Mail, BellRing } from "lucide-react"
import { Button } from "@/components/ui/button"
import { waitlistService } from "@/lib/services/waitlist"
import { toast } from "sonner"

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
  </svg>
)

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

interface FooterProps {
  showCTA?: boolean;
}

export function Footer({ showCTA = true }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    setIsLoading(true);
    try {
      // Re-using the waitlist service for newsletter for now, or you can update this to a newsletter endpoint later
      await waitlistService.join({ email, firstName: 'Newsletter', lastName: 'Subscriber' });
      toast.success("Welcome to our newsletter!");
      setEmail("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`relative ${showCTA ? 'mt-40' : 'mt-0'}`}>
      {/* Newsletter CTA Box */}
      {showCTA && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-20">
          <div className="page-container">
            <div className="bg-primary-600 rounded-[2.5rem] p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
              {/* Decorative background element */}
              <div className="absolute top-0 left-0 w-64 h-64 border-[3px] border-black/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

              <div className="relative z-10 max-w-xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 border border-black/10 text-white/90 text-[10px] font-black uppercase tracking-widest mb-6 mx-auto lg:mx-0">
                  <BellRing className="w-3 h-3" />
                  <span>Stay Informed</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight font-syne">
                  Subscribe to our newsletter for <span className="underline decoration-[3px] underline-offset-8 decoration-white/20 text-white">insider updates</span>
                </h2>

                <form onSubmit={handleSubscribe} className="flex flex-col gap-2 max-w-md mx-auto lg:mx-0">
                  <div className="flex bg-white rounded-xl p-1 shadow-xl shadow-black/5 border border-black/5">
                    <div className="flex-1 flex items-center px-4">
                      <Mail className="w-4 h-4 text-slate-400 mr-2" />
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 py-3 bg-transparent outline-none text-black font-medium font-inter text-sm"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      variant="neon"
                      size="default"
                      className="gap-2 group uppercase tracking-wider"
                    >
                      {isLoading ? "..." : "Subscribe"}
                      {!isLoading && (
                        <span className="bg-black text-neon rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:translate-x-1">
                          <ArrowRight size={14} />
                        </span>
                      )}
                    </Button>
                  </div>
                  <p className="text-[9px] font-medium text-white/60 uppercase tracking-widest mt-2 font-inter">
                    No spam. Just high-value insights once a week.
                  </p>
                </form>
              </div>

              <div className="relative z-10 lg:w-1/3 flex flex-col gap-6">
                <div className="flex items-center gap-4 justify-center lg:justify-start">
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
                    Join 10,000+ subscribers
                  </span>
                </div>

                <p className="text-white/80 text-sm font-medium leading-relaxed font-inter border-t border-white/10 pt-6 text-center lg:text-left">
                  Get the latest industry news, expert career advice, and exclusive Upkora Academy updates delivered straight to your inbox.
                </p>

                <div className="flex gap-8 justify-center lg:justify-start">
                  <div className="flex flex-col">
                    <span className="text-white font-black text-xl font-syne">Weekly</span>
                    <span className="text-white/50 text-[10px] uppercase tracking-widest">Digest</span>
                  </div>
                  <div className="flex flex-col border-l border-white/10 pl-8">
                    <span className="text-white font-black text-xl font-syne">100%</span>
                    <span className="text-white/50 text-[10px] uppercase tracking-widest">Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
              {[Youtube, Instagram, Facebook, Linkedin, XIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-neon hover:border-neon transition-all"
                >
                  <Icon size={18} />
                </a>
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
          </div>
        </div>
      </footer>
    </div>
  )
}
