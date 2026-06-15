import Image from "next/image"

const approach = [
  {
    title: "Powerful visual content",
    body: "We create powerful visual content that conveys ADUR's authentic message and captures investor attention.",
  },
  {
    title: "Targeted platform reach",
    body: "Content is distributed across our platform — proprietary users plus paid visibility on leading social platforms — to reach active investors and influencers.",
  },
  {
    title: "Clear, repeatable messaging",
    body: "Consistent messaging helps investors understand the company's technology, long-term vision, and projected value over time.",
  },
  {
    title: "Built for retention, not hype",
    body: "Rather than short-term promotion, we retain reached investors as followers — building an engaged shareholder base as a lasting corporate asset.",
  },
]

const outcomes = [
  {
    stat: "$2 → $13+",
    label: "Share price during coverage (Nov 2024 – Apr 2026)",
  },
  {
    stat: "Sustained",
    label: "Investor awareness and understanding",
  },
  {
    stat: "Engaged",
    label: "Active shareholder base driving price",
  },
  {
    stat: "Organic",
    label: "Investors sharing the ADUR story with followers",
  },
]

export function CaseStudySection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Case Study — Aduro Clean Technologies (NASDAQ: ADUR)
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--color-navy)] md:text-4xl text-balance">
            Generating Critical Exposure Among Investors and Influencers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {
              "TDM Financial has covered Aduro Clean Technologies since November 2024. During this period, the stock moved from approximately $2 per share to over $13 per share."
            }
          </p>
        </div>

        {/* Chart */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-lg md:p-4">
          <Image
            src="/landing/adur-chart.png"
            alt="ADUR (Aduro Clean Technologies) 5-year stock chart showing price appreciation from approximately $5 to over $17, currently $14.40"
            width={872}
            height={628}
            className="h-auto w-full rounded-lg"
            priority
          />
          <p className="px-2 pb-1 pt-3 text-center text-xs text-muted-foreground">
            ADUR share price experienced significant appreciation during our coverage. Source: ChartIQ / EDGAR Online.
          </p>
        </div>

        {/* Approach */}
        <div className="mt-12">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            Our Approach
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            {
              "Rather than pursuing short-term promotion, TDM Financial implemented a consistent and powerful approach using its content production and platform reach."
            }
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {approach.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="font-serif text-lg font-semibold text-[var(--color-navy)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div className="mt-10 rounded-2xl bg-[var(--color-navy-dark)] p-6 shadow-lg md:p-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            The Outcome
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-serif text-2xl font-semibold text-white md:text-3xl">
                  {item.stat}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          {
            "TDM Financial does not work directly with Aduro Clean Technologies or any related party. Our coverage of Aduro is initiated solely by the TDM Financial team."
          }
        </p>
      </div>
    </section>
  )
}
