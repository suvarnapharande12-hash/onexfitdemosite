import { createFileRoute, Link } from '@tanstack/react-router'
import { SectionReveal } from '~/components/section-reveal'
import { SiteShell } from '~/components/site-shell'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About ONEXFIT | Premium Inclusive Fitness Philosophy in Pune' },
      {
        name: 'description',
        content:
          'Learn why ONEXFIT exists: discipline over motivation, consistency over intensity, and balanced fitness for strength, flexibility, cardio, and wellness.',
      },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1549570652-97324981a6fd?auto=format&fit=crop&w=2100&q=80"
            alt="Inclusive boutique fitness coaching at ONEXFIT"
            className="h-full w-full object-cover opacity-32"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionReveal className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] text-[#e4be6a]">ABOUT ONEXFIT HEALTH CLUB</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Boutique coaching built for balanced transformation.</h1>
            <p className="mt-5 text-white/75">
              ONEXFIT was created for people who want more than generic workouts. We built a premium fitness studio in
              Nanded City, Pune where women and men can transform energy, confidence, strength, and overall wellness.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionReveal className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-white/12 bg-white/[0.04] p-7">
            <p className="text-xs tracking-[0.2em] text-[#e4be6a]">WHY ONEXFIT EXISTS</p>
            <h2 className="mt-2 text-3xl font-semibold">To deliver premium fitness that is inclusive, structured, and results-driven.</h2>
            <p className="mt-4 text-white/72">
              Most gyms provide equipment. ONEXFIT provides direction. We guide every member through a clear system that
              combines fat loss, flexibility, functional wellness, cardio conditioning, and strength development.
            </p>
            <p className="mt-4 text-white/72">
              Our coaching approach integrates smart programming, individual attention, and accountability that helps you
              build consistency for life—not just short-term intensity.
            </p>
          </article>

          <article className="overflow-hidden rounded-2xl border border-white/12">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
              alt="Yoga and mobility practice for posture and flexibility"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </article>
        </SectionReveal>
      </section>

      <section className="relative isolate overflow-hidden border-y border-white/10 py-16">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1900&q=80"
            alt="Energetic group fitness class"
            className="h-full w-full object-cover opacity-22"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              title: 'Discipline over motivation',
              description:
                'Motivation fluctuates. Discipline and structured coaching create long-term progress and confidence.',
            },
            {
              title: 'Consistency over intensity',
              description:
                'Extreme short bursts fade out. Consistent intelligent training builds lasting transformation.',
            },
            {
              title: 'Functional wellness for real life',
              description:
                'Move better, feel better, and perform better with energy, strength, and flexibility in balance.',
            },
          ].map((item, idx) => (
            <SectionReveal key={item.title} delayMs={idx * 80} className="rounded-2xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-[#f0cf87]">{item.title}</h3>
              <p className="mt-3 text-sm text-white/72">{item.description}</p>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionReveal className="grid gap-7 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/12 bg-white/[0.04] p-7">
            <p className="text-xs tracking-[0.2em] text-[#e4be6a]">COACHING PHILOSOPHY</p>
            <h2 className="mt-2 text-3xl font-semibold">Progress with precision and care.</h2>
            <p className="mt-4 text-white/72">
              Every ONEXFIT coach follows a single standard: understand the member, map the goal, then deliver a plan
              that adapts with progress. This is how we build trust, consistency, and meaningful results.
            </p>
          </article>

          <article className="rounded-2xl border border-[#e4be6a]/35 bg-[#e4be6a]/8 p-7">
            <p className="text-sm italic text-[#f7d58f]">
              “At ONEXFIT, we believe premium fitness should feel empowering and welcoming—while still delivering
              serious, measurable transformation.”
            </p>
            <p className="mt-4 text-sm font-semibold text-white">— ONEXFIT Coaching Team</p>
          </article>
        </SectionReveal>

        <SectionReveal className="mt-10 rounded-3xl border border-white/12 bg-gradient-to-r from-white/[0.07] to-white/[0.02] p-8 text-center">
          <h3 className="text-2xl font-semibold">Start your transformation with a complimentary assessment session.</h3>
          <p className="mt-2 text-white/70">Limited free trial slots available every week.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
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
        </SectionReveal>
      </section>
    </SiteShell>
  )
}
