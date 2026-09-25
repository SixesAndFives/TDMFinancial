import { ClientResultCard } from "@/components/getstarted/client-result-card"

// SPMC.V — microcap gold-copper explorer, ~6-month window (Mar -> Sep). CAD.
const spmcPoints = [
  0.55, 0.6, 0.63, 0.57, 0.52, 0.56, 0.5, 0.45, 0.41, 0.4, 0.55, 0.73, 0.81, 0.86, 0.78, 0.84, 0.74,
  0.79,
]
const spmcLabels = [
  "Mar", "", "", "", "May", "", "", "", "Jun", "", "", "Jul", "", "", "Aug", "", "", "Sep",
]

// CRDL — NASDAQ small cap, year-to-date (Jan -> Sep). USD.
const crdlPoints = [
  0.98, 0.95, 1.0, 0.97, 1.02, 1.3, 1.66, 1.42, 1.35, 1.2, 1.08, 1.02, 1.0, 1.05, 1.18, 1.6, 2.0,
  2.31, 2.05, 1.905,
]
const crdlLabels = [
  "Jan", "", "", "", "", "Mar", "", "", "", "", "May", "", "", "", "Jul", "", "", "", "", "Sep",
]

export function CampaignResults() {
  return (
    <section id="results" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gs-primary">
            Actual market results
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
            Two active campaigns. Two very different markets.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            These are live, current client campaigns — one an emerging microcap not yet on a major
            exchange, the other an emerging small cap on the NASDAQ. Both are performing in the
            market today.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          <ClientResultCard
            eyebrow="Client campaign · Emerging microcap · Gold & copper exploration"
            name="South Pacific Metals Corp."
            tickers="TSXV: SPMC · OTCQB: SPMEF"
            description="An emerging gold-copper exploration company with four properties operating in the heart of Papua New Guinea's proven gold and copper production corridors. The South Pacific campaign has been live for most of this year."
            currency="C$"
            price="0.790"
            pct="+71.74%"
            period="6 months"
            points={spmcPoints}
            labels={spmcLabels}
            chartAriaLabel="South Pacific Metals share price up 71.74 percent over the last six months, ending near C$0.79."
            xAd={{
              views: "~46,000",
              date: "Sep 14",
              href: "https://x.com/secfilingscom/status/2099567668089205054",
              description:
                "A recent video ad we ran within South Pacific's campaign reached almost 46,000 targeted investors in a single day on X. We reach millions of targeted investors monthly for SPMC through SECFilings, our stock-market app and advertising account across the leading social networks.",
            }}
            note="South Pacific Metals is an active client. Result: SPMC stock is up over 70% during the last six months."
          />

          <ClientResultCard
            eyebrow="Client campaign · Emerging small cap · Clinical-stage life sciences"
            name="Cardiol Therapeutics Inc."
            tickers="NASDAQ: CRDL · TSX: CRDL"
            description="A pre-commercial, clinical-stage life sciences company developing anti-inflammatory and anti-fibrotic therapies for heart disease. Cardiol has been a client for over three years and remains active today — they hired us before they uplisted to the NASDAQ."
            currency="$"
            price="1.905"
            pct="+91.65%"
            period="YTD"
            points={crdlPoints}
            labels={crdlLabels}
            chartAriaLabel="Cardiol Therapeutics share price up 91.65 percent year to date, ending near $1.91."
            xAd={{
              views: "~224,000",
              date: "Aug 11",
              href: "https://x.com/SECFilingscom/status/2087248257529638913",
              description:
                "An ad we ran within Cardiol's campaign reached almost 224,000 targeted investors in a single day on X. We reach millions of targeted investors monthly for CRDL through SECFilings, our stock-market app and advertising account across the leading social networks.",
              imageSrc: "/campaigns/crdl-x-ad.png",
              imageAlt:
                "SECFilings promoted post on X about Cardiol Therapeutics (CRDL) and CardiolRx, showing the reach of the campaign.",
            }}
            articles={[
              {
                label: "How CardiolRx™ Could Fit Into the Recurrent Pericarditis Treatment Regimen — SECFilings",
                href: "https://www.secfilings.com/news/how-cardiolrx-tm-could-fit-into-the-recurrent-pericarditis-treatment-regimen",
              },
              {
                label: "How CardiolRx Could Fit Into the Pericarditis Treatment Regimen — CFN Media",
                href: "https://cfnmedianews.com/how-cardiolrx-could-fit-into-the-recurrent-pericarditis-treatment-regimen/",
              },
            ]}
            note="In April, we helped expand the company's visibility and investor awareness through a coordinated investor relations campaign. During that period, the company successfully completed a warrant-related financing that strengthened its capital position. Since the beginning of the year, the company's stock has increased more than 90%."
          />
        </div>
      </div>
    </section>
  )
}
