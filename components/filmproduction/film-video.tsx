"use client"

import { useEffect, useRef } from "react"

const VIDEO_SRC = "/videos/TDM-Financial-Commercial.mp4"

export function FilmVideo() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    // Try autoplay with sound first; browsers that block it fall back to muted autoplay.
    video.play().catch(() => {
      video.muted = true
      video.play().catch(() => {})
    })
  }, [])

  return (
    <section className="border-b border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-10 md:px-6 md:pb-14 md:pt-12">
        <span className="text-sm font-semibold uppercase tracking-[0.14em] text-gs-primary">
          Film Production
        </span>
        <h1 className="mb-8 mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Cinematic short films that bring your physical assets to life.
        </h1>
        <div className="overflow-hidden rounded-2xl border border-border bg-black">
          <video
            ref={ref}
            src={VIDEO_SRC}
            autoPlay
            playsInline
            controls
            preload="auto"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
