import Link from "next/link"

export function LandingHeader() {
  return (
    <header className="border-b border-white/10 bg-[var(--color-navy-dark)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="font-serif text-xl font-semibold text-white">
          TDM Financial
        </span>
        <Link
          href="#contact"
          className="rounded-lg bg-[var(--color-gold)] px-5 py-2.5 text-xs font-semibold tracking-wide text-[var(--color-navy-dark)] transition-colors hover:bg-[#b8923f]"
        >
          Schedule A Call
        </Link>
      </div>
    </header>
  )
}
