import { createFileRoute, Link } from '@tanstack/react-router'
import { SectionReveal } from '~/components/section-reveal'
import { SiteShell } from '~/components/site-shell'

const trainers = [
  {
    name: 'Coach Arjun Mehta',
    role: 'Functional Strength & Conditioning Coach',
    bio: 'Designs structured strength and conditioning plans that improve body control, endurance, and long-term fitness confidence.',
    highlights: ['10+ years coaching experience', 'Functional movement and strength specialist', '500+ member transformation journeys mentored'],
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Coach Simran Kaur',
    role: 'Women Fitness, Fat Loss & Mobility Specialist',
    bio: 'Leads women-focused transformation pathways combining fat loss strategy, mobility development, and sustainable lifestyle habits.',
    highlights: ['Women transformation coaching specialist', 'Mobility and posture correction expertise', 'Structured check-in and accountability support'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Coach Rahul Deshpande',
    role: 'Group Fitness, HIIT & Dance Conditioning Coach',
    bio: 'Curates energetic group classes that blend cardio, HIIT, and dance fitness with clear coaching cues for all experience levels.',
    highlights: ['HIIT conditioning specialist', 'Group energy and class motivation expert', 'Zumba and cardio progression coaching'],
    image: 'https://images.unsplash.com/photo-1571388072750-31a921b3d900?auto=format&fit=crop&w=1200&q=80',
  },
]

export const Route = createFileRoute('/trainers')({
  head: () => ({
    meta: [
      { title: 'Expert Trainers | ONEXFIT Health Club Pune' },
      {
        name: 'description',
        content: 'Meet the ONEXFIT coaching team: certified professionals focused on balanced transformation, fat loss, mobility, and functional fitness.',
      },
    ],
  }),
  component: TrainersPage,
})

function TrainersPage() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1549570652-97324981a6fd?auto=format&fit=crop&w=2200&q=80"
            alt="Professional trainer coaching inclusive group fitness session"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/72 to-black/88" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionReveal className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] text-[#e4be6a]">MEET THE ONEXFIT TEAM</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Expert coaches. Structured guidance. Real transformation.</h1>
            <p className="mt-4 text-white/72">
              ONEXFIT coaches combine science-backed planning with supportive accountability so every member progresses
              with clarity, consistency, and confidence.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {trainers.map((trainer, idx) => (
            <SectionReveal key={trainer.name} delayMs={idx * 80}>
              <article className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04]">
                <div className="overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="h-72 w-full object-cover transition duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold">{trainer.name}</h2>
                  <p className="mt-1 text-xs tracking-[0.14em] text-[#e4be6a]">{trainer.role}</p>
                  <p className="mt-4 text-sm text-white/72">{trainer.bio}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-white/80">
                    {trainer.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-12 rounded-3xl border border-white/12 bg-white/[0.04] p-8 text-center">
          <h3 className="text-2xl font-semibold">Train with coaches who are invested in your wellness and outcomes.</h3>
          <p className="mt-2 text-white/70">Start with a free trial and get a personalized recommendation from the team.</p>
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
