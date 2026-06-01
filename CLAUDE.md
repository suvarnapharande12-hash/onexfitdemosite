import { useEffect, useRef, useState } from 'react'

type StatCounterProps = {
  value: number
  durationMs?: number
  suffix?: string
}

export function StatCounter({ value, durationMs = 1300, suffix = '' }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let raf = 0
    let started = false

    const animate = () => {
      const startedAt = performance.now()
      const step = (now: number) => {
        const progress = Math.min((now - startedAt) / durationMs, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(value * eased))
        if (progress < 1) {
          raf = requestAnimationFrame(step)
        }
      }
      raf = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!started && entries[0]?.isIntersecting) {
          started = true
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.45 },
    )

    observer.observe(element)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [durationMs, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
