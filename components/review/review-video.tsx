const VIDEO_SRC = "/videos/pngaf-deck-screener.mp4"

export function ReviewVideo() {
  return (
    <section className="border-b border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <span className="text-sm font-semibold uppercase tracking-[0.14em] text-gs-primary">
          Investor Deck Video
        </span>
        <h2 className="mb-8 mt-5 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
          PNGAF deck screener.
        </h2>
        <div className="overflow-hidden rounded-2xl border border-border bg-black">
          <video
            src={VIDEO_SRC}
            controls
            playsInline
            preload="metadata"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
