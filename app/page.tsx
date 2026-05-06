import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSolutionSection } from "@/components/sections/problem-solution-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { CategoriesSection } from "@/components/sections/categories-section"
import { ServicesShowcaseSection } from "@/components/sections/services-showcase-section"
import { TrustSafetySection } from "@/components/sections/trust-safety-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FAQSection } from "@/components/sections/faq-section"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Upkora Academy",
    "description": "Premier online learning platform providing industry-relevant courses in tech, design, and business.",
    "url": "https://upkora-academy.vercel.app",
    "logo": "https://upkora-academy.vercel.app/icons/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@upkorasolutions.com"
    },
    "sameAs": [
      "https://twitter.com/upkora",
      "https://instagram.com/upkora",
      "https://facebook.com/upkora"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="w-full min-h-screen">
        <HeroSection />
        <ProblemSolutionSection />
        <CategoriesSection />
        <HowItWorksSection />
        <ServicesShowcaseSection />
        <TrustSafetySection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  )
}
