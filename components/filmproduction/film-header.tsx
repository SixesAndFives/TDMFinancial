import Image from "next/image"
import { Button } from "@/components/getstarted/button"

const CALENDLY_URL = "https://calendly.com/frankcfn"

export function FilmHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Image
          src="/logos/tdm-financial-dark.png"
          alt="TDM Financial"
          width={180}
          height={82}
          className="h-9 w-auto md:h-10"
          priority
        />
        <Button size="sm" asChild className="font-semibold">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book a Call
          </a>
        </Button>
      </div>
    </header>
  )
}
