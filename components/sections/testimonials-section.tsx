import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { testimonials } from "@/lib/data/testimonials"

export function TestimonialsSection() {
  return (
    <section className="w-full bg-brand-dark py-24 md:py-32">
      <div className="page-container text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-3">
          Don&apos;t Just Take Our Word For It
        </h2>
        <p className="text-white/60 text-sm md:text-base font-medium tracking-[0.2em] uppercase">
          Hear what our users are saying
        </p>
      </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </section>
  )
}
