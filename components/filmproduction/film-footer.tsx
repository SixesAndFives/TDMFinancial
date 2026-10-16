import Image from "next/image"

export function FilmFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center md:px-6">
        <Image
          src="/logos/tdm-financial-dark.png"
          alt="TDM Financial"
          width={180}
          height={82}
          className="h-9 w-auto"
        />
        <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
          Cinematic short films that convey the authenticity and value of your assets to investors
          everywhere.
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} TDM Financial. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
