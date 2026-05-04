import { CTABannerSection } from "@/components/sections/cta-banner-section"
import { FAQSection } from "@/components/sections/faq-section"
import { Footer } from "@/components/layout/footer"
import { extendedFaqs } from "@/lib/data/faqs"

export default function FAQPage() {
  return (
    <main className="w-full">
      <section className="relative w-full min-h-[300px] md:min-h-[400px] overflow-hidden bg-gradient-hero-alt">
        <div className="absolute top-[131px] left-[-6px] w-[140px] h-[80px] md:w-[220px] md:h-[124px] hidden sm:block">
          <img src="/icons/cloud-left.svg" alt="" className="w-full h-full" />
        </div>
        <div className="absolute top-[151px] right-[21px] w-[140px] h-[80px] md:w-[220px] md:h-[124px] hidden sm:block">
          <img src="/icons/cloud-right.svg" alt="" className="w-full h-full" />
        </div>

        <div className="relative pt-32 md:pt-[200px] px-6 md:px-[80px] pb-8 md:pb-12 max-w-[640px]">
          <h1 className="font-bold text-[32px] md:text-[48px] leading-[100%] text-heading mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[14px] md:text-[16px] leading-[150%] text-primary-900/70">
            Find answers to all your questions about learning with Upkora Academy.
          </p>
        </div>
      </section>

      <FAQSection faqs={extendedFaqs} showHeader={false} />
      <CTABannerSection />
      <Footer />
    </main>
  )
}
