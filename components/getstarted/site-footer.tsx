import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center md:px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logos/cfn-media-dark.png"
            alt="CFN Media Group"
            width={176}
            height={60}
            className="h-7 w-auto"
          />
          <span aria-hidden className="font-semibold text-muted-foreground">
            +
          </span>
          <Image
            src="/logos/tdm-financial-dark.png"
            alt="TDM Financial"
            width={140}
            height={64}
            className="h-6 w-auto"
          />
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
          A data-driven financial marketing agency helping emerging public and pre-public companies
          reach investors across the US and Canadian markets.
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} CFN Media + TDM Financial. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
