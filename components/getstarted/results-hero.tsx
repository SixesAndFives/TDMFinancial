import Image from "next/image"
import { Button } from "@/components/getstarted/button"
import { ArrowDown, Calendar } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/frankcfn"

export function ResultsHero() {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex items-center gap-4">
          <Image
            src="/logos/tdm-financial-dark.png"
            alt="TDM Financial"
            width={198}
            height={90}
            className="h-9 w-auto md:h-10"
            priority
          />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Direct-to-Investor Marketing
          </span>
        </div>

        <h1 className="mt-8 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl">
          We reach investors that will be most interested in your company — at scale.
        </h1>

        <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-foreground text-pretty md:text-2xl">
          We use an innovative technique to reach millions of active investors who will be the best
          fit for your company and stock — in the most cost-effective way possible.
        </p>

        <p className="mt-4 max-w-2xl text-xl leading-relaxed text-muted-foreground text-pretty md:text-2xl">
          Experience our direct-to-investor marketing campaigns and the gains we&apos;re delivering
          to clients.
        </p>

        <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-foreground text-pretty">
          See how two client stocks, in two very different markets, are performing today.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild className="font-semibold">
            <a href="#results">
              See the results
              <ArrowDown className="size-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="font-semibold">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Calendar className="size-4" />
              Book a call
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
