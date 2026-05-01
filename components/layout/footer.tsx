import Image from "next/image"
import Link from "next/link"
import { quickLinks, companyLinks, socialLinks, downloadLinks, footerTagline } from "@/lib/data/footer-links"

export function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="page-container py-12 md:py-16">
        <Link href="/" className="relative z-10 mb-6 inline-flex shrink-0 md:mb-8 text-2xl font-bold text-brand">
          Upkora Academy
        </Link>
        <div className="overflow-visible rounded-2xl bg-surface p-8 md:p-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
            <div className="space-y-4 md:col-span-5">
              <p className="max-w-sm text-sm leading-relaxed text-body">{footerTagline}</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a key={social.alt} href={social.href} target="_blank" rel="noopener noreferrer" className="text-heading hover:opacity-70">
                    {social.alt}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-semibold text-heading text-sm mb-4">Quicklinks</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-body text-sm hover:text-heading">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-semibold text-heading text-sm mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-body text-sm hover:text-heading">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-semibold text-heading text-sm mb-4">Get Started</h4>
              <div className="flex flex-col gap-3">
                <Link href="/courses" className="text-sm text-body hover:text-brand">Browse Courses</Link>
                <Link href="/login" className="text-sm text-body hover:text-brand">Student Login</Link>
                <Link href="/register" className="text-sm text-body hover:text-brand">Create Account</Link>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#CFD0CE]/50">
            <p className="text-body text-sm text-center">
              © {new Date().getFullYear()} Upkora Academy. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
