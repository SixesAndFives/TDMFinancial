import { Mail } from "lucide-react"
import { CalendlyEmbed } from "./calendly-embed"
import { RequestInfoForm } from "./request-info-form"

export function CtaSection() {
  return (
    <section id="contact" className="bg-[var(--color-mist)] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-[var(--color-navy)] md:text-4xl">
            Let&apos;s Discuss Your Company
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Book a brief strategy call to learn how TDM Financial helps public
            companies increase investor visibility and engagement.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Option 1: Calendly */}
          <div className="lg:col-span-2">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--color-navy)]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-gold)] text-xs text-[var(--color-navy-dark)]">
                1
              </span>
              Schedule A Call
            </h3>
            <CalendlyEmbed />
          </div>

          {/* Options 2 & 3 */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--color-navy)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-gold)] text-xs text-[var(--color-navy-dark)]">
                  2
                </span>
                Send Us An Email
              </h3>
              <a
                href="mailto:flane@tdmfinancial.com?subject=Investor%20Visibility%20Inquiry"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-navy)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-navy-light)]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Frank Lane
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--color-navy)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-gold)] text-xs text-[var(--color-navy-dark)]">
                  3
                </span>
                Request Information
              </h3>
              <RequestInfoForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
