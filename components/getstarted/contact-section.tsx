import { CalendlyEmbed } from "@/components/getstarted/calendly-embed"
import { Button } from "@/components/getstarted/button"
import { Mail, Phone, Calendar } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/frankcfn"
const EMAIL = "flane@cfnmedia.com"
const PHONE_DISPLAY = "(206) 369-7050"
const PHONE_HREF = "+12063697050"

const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Engaging CFN Media + TDM Financial",
)}&body=${encodeURIComponent(
  "Hi Frank,\n\nI saw the CFN Media + TDM Financial announcement and I'd like to learn more about engaging your work for our company.\n\nCompany / ticker:\nBest way to reach me:\n\nThanks,",
)}`

export function ContactSection() {
  return (
    <section id="contact" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Let&apos;s talk about your campaign.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Pick a time that works for you, or reach out directly. We&apos;ll show you exactly how
              we&apos;d reach investors for your company.
            </p>

            <div className="mt-6 rounded-xl border border-border bg-card p-5">
              <p className="font-display text-lg font-bold text-foreground">Frank Lane</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Vice President · TDM Financial
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <a
                href={MAILTO}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-gs-primary/60"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-gs-primary/15 text-gs-primary">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Email (opens a reply)</span>
                  <span className="block font-medium">{EMAIL}</span>
                </span>
              </a>

              <a
                href={`tel:${PHONE_HREF}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-gs-primary/60"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-gs-primary/15 text-gs-primary">
                  <Phone className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">Call or text</span>
                  <span className="block font-medium">{PHONE_DISPLAY}</span>
                </span>
              </a>

              <Button
                size="lg"
                asChild
                className="mt-2 w-full font-semibold sm:w-auto"
              >
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="size-4" />
                  Open scheduling in a new tab
                </a>
              </Button>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-foreground">
              Book time directly with{" "}
              <span className="font-semibold">Frank Lane, Vice President</span>
            </p>
            <CalendlyEmbed url={CALENDLY_URL} />
          </div>
        </div>
      </div>
    </section>
  )
}
