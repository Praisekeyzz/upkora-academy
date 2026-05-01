interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

export const quickLinks: FooterLink[] = [
  { label: "FAQs", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
]

export const companyLinks: FooterLink[] = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Become an Instructor", href: "#" },
]

export const socialLinks = [
  { icon: "/icons/x-twitter.svg", alt: "X (Twitter)", href: "#" },
  { icon: "/icons/instagram.svg", alt: "Instagram", href: "#" },
  { icon: "/icons/facebook.svg", alt: "Facebook", href: "#" },
]

export const downloadLinks = {
  appStore: {
    href: "#",
    icon: "/icons/app-store-badge.svg",
    alt: "Download from App Store",
  },
  googlePlay: {
    href: "#",
    icon: "/icons/google-play-badge.svg",
    alt: "Download from Google Play",
  },
}

export const footerTagline = "Empowering students through industry-relevant courses and expert mentorship. Join Upkora Academy and start building your future today."

export type { FooterLink, FooterSection }
