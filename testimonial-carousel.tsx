import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { SectionReveal } from '~/components/section-reveal'
import { SiteShell } from '~/components/site-shell'

type Program = {
  name: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  image: string
  description: string
  whoFor: string
  expectedResults: string
  benefits: Array<string>
}

const programs: Array<Program> = [
  {
    name: 'Yoga & Mobility Flow',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1599447292180-45fd84092ef4?auto=format&fit=crop&w=1800&q=80',
    description:
      'A guided flow that combines flexibility, mobility drills, posture correction, and mindful breathing for full-body wellness.',
    whoFor: 'Beginners, working professionals, and anyone seeking improved mobility, reduced stress, and better recovery.',
    expectedResults: 'Better posture, improved flexibility, reduced stiffness, calmer mind, and more energized daily movement.',
    benefits: ['Beginner-friendly sequences', 'Mobility + flexibility improvement', 'Stress-relief breathwork', 'Mind-body balance routines'],
  },
  {
    name: 'Zumba / Dance Fitness',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1800&q=80',
    description:
      'High-energy dance fitness sessions that blend cardio conditioning with fun choreography and community motivation.',
    whoFor: 'Anyone who wants enjoyable fat-burning workouts, especially members who stay consistent in group energy formats.',
    expectedResults: 'Higher calorie burn, better endurance, improved mood, and stronger confidence through movement.',
    benefits: ['Music-led cardio training', 'Fun group-based sessions', 'Fat-burning dance formats', 'Confidence and consistency boost'],
  },
  {
    name: 'HIIT Fat Loss Training',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1800&q=80',
    description:
      'Time-efficient interval sessions alternating high-intensity work and recovery blocks for fast conditioning gains.',
    whoFor: 'Members aiming for fat loss, improved stamina, and structured high-output workouts within a busy schedule.',
    expectedResults: 'Visible fat reduction, stronger cardiovascular fitness, and higher training efficiency week after week.',
    benefits: ['Structured interval programming', 'Fat-loss focused conditioning', 'Progressive intensity options', 'Time-efficient workout design'],
  },
  {
    name: 'Functional Strength Training',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1534367610501-26bf04f2c947?auto=format&fit=crop&w=1800&q=80',
    description:
      'A balanced strength system using controlled resistance and movement patterns that support real-life performance.',
    whoFor: 'Members who want to build sustainable strength, improve body conditioning, and prevent common movement injuries.',
    expectedResults: 'Better muscle tone, stronger core stability, improved joint control, and confident functional movement.',
    benefits: ['Full-body conditioning approach', 'Technique-focused coaching', 'Injury prevention progressions', 'Strength for real-life movement'],
  },
  {
    name: 'Athletic Performance Training',
    difficulty: 'Advanced',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1800&q=80',
    description:
      'Advanced coaching for speed, agility, power transfer, and conditioning targeted for sport and high-performance goals.',
    whoFor: 'Experienced trainees and competitive athletes looking for performance-specific progression and testing.',
    expectedResults: 'Higher speed output, improved agility, stronger movement efficiency, and enhanced sport readiness.',
    benefits: ['Speed and agility drills', 'Explosive power development', 'Sport-focused conditioning', 'Performance checkpoint assessments'],
  },
]

export const Route = createFileRoute('/programs')({
  head: () => ({
    meta: [
      { title: 'Programs | ONEXFIT Health Club Pune' },
      {
        name: 'description',
        content:
          'Explore ONEXFIT programs: Yoga & Mobility Flow, Zumba / Dance Fitness, HIIT Fat Loss Training, Functional Strength Training, and Athletic Performance Training.',
      },
    ],
  }),
  component: ProgramsPage,
})

function ProgramsPage() {
  const [openProgram, setOpenProgram] = useState<string>(programs[0].name)

  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1571388072750-31a921b3d900?auto=format&fit=crop&w=2200&q=80"
            alt="Inclusive premium fitness class at ONEXFIT"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/78" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionReveal className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] text-[#e4be6a]">ONEXFIT PROGRAMS</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Programs for energy, flexibility, confidence, and strength.</h1>
            <p className="mt-4 text-white/72">
              Select the program that matches your lifestyle and goal. Every track includes structured coaching,
              progress checkpoints, and a supportive premium training environment.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-5">
          {programs.map((program, idx) => {
            const isOpen = openProgram === program.name
            return (
              <SectionReveal key={program.name} delayMs={idx * 60}>
                <article className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04]">
                  <button
                    type="button"
                    onClick={() => setOpenProgram(isOpen ? '' : program.name)}
                    className="flex w-full items-center justify-between gap-3 p-6 text-left transition hover:bg-white/[0.03]"
                  >
                    <div>
                      <h2 className="text-2xl font-semibold text-white">{program.name}</h2>
                      <p className="mt-1 text-xs tracking-[0.14em] text-[#e4be6a]">
                        Difficulty: <span className="text-white/90">{program.difficulty}</span>
                      </p>
                    </div>
                    <span className="text-lg text-white/75">{isOpen ? '−' : '+'}</span>
                  </button>

                  {isOpen ? (
                    <div className="grid gap-6 border-t border-white/10 p-6 lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="overflow-hidden rounded-xl border border-white/10">
                        <img
                          src={program.image}
                          alt={`${program.name} training at ONEXFIT`}
                          className="h-full w-full object-cover transition duration-700 hover:scale-110"
                        />
                      </div>

                      <div>
                        <p className="text-sm text-white/72">{program.description}</p>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="text-xs tracking-[0.14em] text-[#e4be6a]">WHO IT'S FOR</p>
                            <p className="mt-2 text-sm text-white/78">{program.whoFor}</p>
                          </div>
                          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="text-xs tracking-[0.14em] text-[#e4be6a]">EXPECTED RESULTS</p>
                            <p className="mt-2 text-sm text-white/78">{program.expectedResults}</p>
                          </div>
                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
                          <p className="text-xs tracking-[0.14em] text-[#e4be6a]">KEY BENEFITS</p>
                          <ul className="mt-2 grid gap-2 text-sm text-white/80">
                            {program.benefits.map((benefit) => (
                              <li key={benefit}>• {benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </article>
              </SectionReveal>
            )
          })}
        </div>

        <SectionReveal className="mt-12 rounded-3xl border border-[#e4be6a]/35 bg-gradient-to-r from-[#e4be6a]/12 to-black p-8 text-center">
          <h3 className="text-2xl font-semibold">Not sure where to start?</h3>
          <p className="mt-2 text-white/72">Book a free trial and we will recommend the right program for your fitness goal and comfort level.</p>
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
