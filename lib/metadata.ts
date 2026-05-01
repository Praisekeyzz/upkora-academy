import type { Metadata } from "next"

export const siteMetadata: Metadata = {
  title: {
    default: "Upkora Academy | Learn Skills for the Future",
    template: "%s | Upkora Academy",
  },
  description: "Upkora Academy is a premier online learning platform providing industry-relevant courses in Web Development, Data Science, Design, and more.",
  keywords: [
    "online academy",
    "learning platform",
    "upkora academy",
    "web development courses",
    "skill acquisition",
    "certification",
    "career growth",
  ],
  authors: [{ name: "Upkora Academy" }],
  creator: "Upkora Academy",
  publisher: "Upkora Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://upkora-academy.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Upkora Academy | Learn Skills for the Future",
    description: "Empowering the next generation of tech leaders through accessible and affordable online education.",
    url: "https://upkora-academy.vercel.app",
    siteName: "Upkora Academy",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upkora Academy | Learn Skills for the Future",
    description: "Join Upkora Academy today and start your journey toward a rewarding career in tech.",
    creator: "@upkora",
  },
  robots: {
    index: true,
    follow: true,
  },
}
