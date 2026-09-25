import Image from "next/image"
import { Button } from "@/components/getstarted/button"

const CALENDLY_URL = "https://calendly.com/frankcfn"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logos/cfn-media-dark.png"
            alt="CFN Media Group"
            width={176}
            height={60}
            className="h-7 w-auto md:h-8"
            priority
          />
          <span aria-hidden className="text-lg font-semibold text-muted-foreground">
            +
          </span>
          <Image
            src="/logos/tdm-financial-dark.png"
            alt="TDM Financial"
            width={140}
            height={64}
            className="h-6 w-auto md:h-7"
            priority
          />
        </div>
        <Button size="sm" asChild className="font-semibold">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book a Call
          </a>
        </Button>
      </div>
    </header>
  )
}
