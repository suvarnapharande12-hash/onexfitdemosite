import { createFileRoute, Link } from '@tanstack/react-router'
import { SectionReveal } from '~/components/section-reveal'
import { SiteShell } from '~/components/site-shell'
import { StatCounter } from '~/components/stat-counter'
import { TestimonialCarousel } from '~/components/testimonial-carousel'

const testimonials = [
  {
    quote: 'Lost 7 kg and gained confidence through Zumba + HIIT sessions. The coaches made me feel comfortable from day one.',
    name: 'Rhea S.',
    result: 'Women Transformation Journey',
  },
  {
    quote: 'Best women-friendly fitness studio in Pune. Premium setup and zero intimidation.',
    name: 'Neha A.',
    result: '8-week Starter Program',
  },
  {
    quote: 'Yoga and functional training completely improved my posture and daily energy.',
    name: 'Priya T.',
    result: 'Mobility + Strength Track',
  },
  {
    quote: 'Supportive environment with structured training. I reduced body fat without extreme routines.',
    name: 'Aditi M.',
    result: 'Lost 6 kg in 10 weeks',
  },
  {
    quote: 'I joined for fat loss and stayed for the coaching quality. Classes are energetic and well planned.',
    name: 'Karan M.',
    result: 'HIIT + Functional Program',
  },
  {
    quote: 'Balanced training here improved my strength, stamina, and flexibility together.',
    name: 'Siddharth D.',
    result: '12-week Lifestyle Fitness Plan',
  },
  {
    quote: 'From low confidence to consistent workouts. ONEXFIT feels premium but very inclusive.',
    name: 'Megha V.',
    result: 'Consistency streak: 18 weeks',
  },
  {
    quote: 'Great blend of strength, mobility, and cardio. Every week feels purposeful.',
    name: 'Aditya P.',
    result: 'Body recomposition progress in 90 days',
  },
]

const gallery = [
  'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1549570652-97324981a6fd?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=80',
]

const programCards = [
  {
    title: 'Yoga & Mobility Flow',
    content: 'Improve flexibility, posture, and recovery with beginner-friendly guided mobility sessions.',
  },
  {
    title: 'Zumba / Dance Fitness',
    content: 'High-energy dance workouts that make fat-burning fun while improving stamina and confidence.',
  },
  {
    title: 'HIIT Fat Loss Training',
    content: 'Time-efficient interval circuits designed for calorie burn, conditioning, and sustainable fat loss.',
  },
  {
    title: 'Functional Strength Training',
    content: 'Build practical full-body strength, improve movement quality, and reduce injury risk.',
  },
  {
    title: 'Athletic Performance Training',
    content: 'Advanced coaching for speed, agility, and sport-specific conditioning performance.',
  },
]

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'ONEXFIT Health Club Pune | Premium Inclusive Fitness Studio' },
      {
        name: 'description',
        content:
          'Transform your body, energy, and confidence through structured training, dance fitness, yoga, HIIT, and functional strength programs in Nanded City, Pune.',
      },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 scale-105">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2000&q=80"
            alt="Inclusive group fitness training at ONEXFIT"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/70 to-black/82" />
          <img
            src="/onexfit-mark.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-8 hidden h-16 w-16 opacity-14 md:block lg:h-20 lg:w-20"
          />
        </div>

        <div className="mx-auto grid min-h-[84vh] w-full max-w-7xl items-end gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:px-8 lg:py-24">
          <SectionReveal className="space-y-7">
            <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs tracking-[0.2em] text-white/75">
              PREMIUM FITNESS STUDIO • Nanded City, Pune
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Transform Your Body.
              <span className="block text-[#e4be6a]">Energy. Confidence. Consistency.</span>
            </h1>
            <p className="max-w-2xl text-base text-white/72 sm:text-lg">
              ONEXFIT HEALTH CLUB delivers balanced transformation for women and men through structured training, dance
              fitness, yoga, HIIT, and functional strength programs in a premium coaching environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="luxury-btn rounded-full px-6 py-3 text-sm font-semibold text-black">
                Book Free Trial
              </Link>
              <a
                href="https://wa.me/919860941818?text=Hi%2C%20I%20want%20to%20book%20a%20free%20trial%20at%20ONEXFIT%20Health%20Club."
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-[#e4be6a]/70 hover:bg-[#e4be6a]/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delayMs={120} className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-md">
            <p className="text-xs tracking-[0.18em] text-white/65">TRANSFORMATION METRICS</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <p className="text-3xl font-semibold text-[#e4be6a]">
                  <StatCounter value={500} suffix="+" />
                </p>
                <p className="mt-1 text-xs text-white/65">Lifestyle transformation journeys guided</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <p className="text-3xl font-semibold text-[#e4be6a]">
                  <StatCounter value={94} suffix="%" />
                </p>
                <p className="mt-1 text-xs text-white/65">Members sustaining routines beyond 12 weeks</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <p className="text-3xl font-semibold text-[#e4be6a]">
                  <StatCounter value={35} suffix="+" />
                </p>
                <p className="mt-1 text-xs text-white/65">Yoga, HIIT, dance, and strength sessions weekly</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionReveal className="rounded-3xl border border-white/12 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 shadow-2xl shadow-black/40">
          <p className="text-xs tracking-[0.2em] text-[#e4be6a]">ABOUT ONEXFIT</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A premium studio for balanced transformation and functional wellness.</h2>
          <p className="mt-4 max-w-4xl text-white/75">
            ONEXFIT combines expert coaching with inclusive programming so every member can build energy, strength,
            flexibility, and confidence through a structured, sustainable fitness system.
          </p>
          <div className="mt-6">
            <Link to="/about" className="text-sm font-semibold text-[#f6d289] transition hover:text-[#ffe0a7]">
              Explore the ONEXFIT philosophy →
            </Link>
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-7">
            <p className="text-xs tracking-[0.2em] text-[#e4be6a]">SIGNATURE PROGRAMS</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Strength, cardio, flexibility, and confidence-building fitness</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {programCards.map((program) => (
              <article
                key={program.title}
                className="group rounded-2xl border border-white/12 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#e4be6a]/50 hover:shadow-[0_14px_40px_rgba(228,190,106,0.15)]"
              >
                <h3 className="text-xl font-semibold text-white group-hover:text-[#f0cf87]">{program.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{program.content}</p>
              </article>
            ))}
          </div>
          <div className="mt-7">
            <Link to="/programs" className="rounded-full border border-white/30 px-5 py-2.5 text-sm transition hover:border-[#e4be6a]/65">
              View All Programs
            </Link>
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-7 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#e4be6a]">CINEMATIC TRAINING ENVIRONMENT</p>
              <h2 className="mt-2 text-3xl font-semibold">Premium space. Inclusive energy.</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {gallery.map((src, idx) => (
              <article key={src} className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={src}
                  alt={`ONEXFIT inclusive training environment ${idx + 1}`}
                  className="h-64 w-full object-cover transition duration-700 hover:scale-110"
                />
              </article>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section className="relative isolate my-4 overflow-hidden border-y border-white/10 py-18">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=2000&q=80"
            alt="Group cardio and conditioning session"
            className="h-full w-full object-cover opacity-24"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-xs tracking-[0.2em] text-[#e4be6a]">CLIENT RESULTS & REVIEWS</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Trusted by members across Pune</h2>
            <p className="mt-4 max-w-3xl text-white/72">
              Real journeys built on supportive coaching, functional wellness, and consistent progression.
            </p>
            <div className="mt-8">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <SectionReveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#e4be6a]">VISIT ONEXFIT</p>
            <h2 className="mt-2 text-3xl font-semibold">Destination Centre 1, Nanded City, Pune</h2>
            <p className="mt-4 text-white/70">
              F-55, Destination Centre 1, Sinhagad Road, Nanded City, Pune, Maharashtra 411068, India.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/contact" className="luxury-btn rounded-full px-6 py-3 text-sm font-semibold text-black">
                Book Free Trial
              </Link>
              <a
                href="https://wa.me/919860941818?text=Hi%2C%20I%20want%20to%20book%20a%20free%20trial%20at%20ONEXFIT%20Health%20Club."
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-6 py-3 text-sm transition hover:border-white/60"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15">
            <iframe
              title="ONEXFIT Health Club Location"
              src="https://www.google.com/maps?q=Destination%20Centre%201%2C%20F-55%2C%20Nanded%20City%2C%20Sinhagad%20Road%2C%20Pune%2C%20Maharashtra%20411068&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </SectionReveal>
      </section>
    </SiteShell>
  )
}
