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
    <section id="film" className="border-b border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
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
