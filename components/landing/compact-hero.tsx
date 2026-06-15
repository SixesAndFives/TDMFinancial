import Link from "next/link"

export function CompactHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-dark)]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(/landing/hero-bg.png)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-dark)]/70 to-[var(--color-navy-dark)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
        <h1 className="font-serif text-3xl font-semibold leading-[1.15] text-white text-balance md:text-4xl lg:text-5xl">
          Is Your Company Executing But Not Getting The Attention It Deserves?
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          We use a data-driven approach that reaches active investors based on
          their researching, socializing, and following behaviors across
          specific companies, sectors, and market themes.
        </p>
        <div className="mt-8">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--color-gold)] px-8 py-3.5 text-sm font-semibold tracking-wide text-[var(--color-navy-dark)] transition-colors hover:bg-[#b8923f]"
          >
            Schedule A Strategy Call
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8">
          <span className="text-xs uppercase tracking-widest text-slate-500">
            Reaching investors across
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-300">
            <span>SECFilings.com</span>
            <span className="text-slate-600" aria-hidden="true">
              |
            </span>
            <span>X</span>
            <span className="text-slate-600" aria-hidden="true">
              |
            </span>
            <span>Reddit</span>
            <span className="text-slate-600" aria-hidden="true">
              |
            </span>
            <span>TikTok</span>
          </div>
        </div>
      </div>
    </section>
  )
}
