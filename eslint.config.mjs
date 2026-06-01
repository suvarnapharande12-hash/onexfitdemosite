type Testimonial = {
  quote: string
  name: string
  result: string
}

type TestimonialCarouselProps = {
  testimonials: Array<Testimonial>
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const duplicated = [...testimonials, ...testimonials]

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-[marquee_36s_linear_infinite] gap-4 py-2">
        {duplicated.map((item, idx) => (
          <article
            key={`${item.name}-${idx}`}
            className="w-[320px] rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-md"
          >
            <p className="text-amber-300">★★★★★</p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">“{item.quote}”</p>
            <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
            <p className="text-xs text-white/60">{item.result}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
