import Image from "next/image"
import { TrendingUp, ArrowUpRight, Eye } from "lucide-react"

type XAd = {
  views: string
  date: string
  href: string
  description: string
  imageSrc?: string
  imageAlt?: string
}

type ArticleLink = {
  label: string
  href: string
}

type ClientResultCardProps = {
  eyebrow: string
  name: string
  tickers: string
  description: string
  currency: string
  price: string
  pct: string
  period: string
  points: number[]
  labels: string[]
  chartAriaLabel: string
  xAd: XAd
  articles?: ArticleLink[]
  note: string
}

// Chart geometry — mirrors the site's ADUR chart treatment.
const W = 640
const H = 220
const PAD_X = 16
const PAD_TOP = 16
const PAD_BOTTOM = 28

function buildPaths(points: number[]) {
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1

  const coords = points.map((p, i) => {
    const x = PAD_X + (i / (points.length - 1)) * (W - PAD_X * 2)
    const y = PAD_TOP + (1 - (p - min) / range) * (H - PAD_TOP - PAD_BOTTOM)
    return { x, y }
  })

  const linePath = coords
    .map((c, i) => `${i === 0 ? "M" : "L"} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`)
    .join(" ")

  const areaPath =
    `${linePath} L ${coords[coords.length - 1].x.toFixed(1)} ${H - PAD_BOTTOM} ` +
    `L ${coords[0].x.toFixed(1)} ${H - PAD_BOTTOM} Z`

  return { coords, linePath, areaPath }
}

export function ClientResultCard({
  eyebrow,
  name,
  tickers,
  description,
  currency,
  price,
  pct,
  period,
  points,
  labels,
  chartAriaLabel,
  xAd,
  articles,
  note,
}: ClientResultCardProps) {
  const { coords, linePath, areaPath } = buildPaths(points)
  const gradientId = `fill-${name.replace(/[^a-z0-9]/gi, "").toLowerCase()}`

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gs-primary">
              {eyebrow}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {name}
            </h3>
            <p className="mt-1 font-mono text-sm text-muted-foreground">{tickers}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-3 py-1.5 text-sm font-semibold text-secondary">
            <TrendingUp className="size-4" />
            {pct} · {period}
          </span>
        </div>

        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      </div>

      {/* Chart */}
      <div className="border-t border-border/60 bg-background px-6 py-6 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-bold text-foreground">
              {currency}
              {price}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary">
              <TrendingUp className="size-4" />
              {pct}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{period} performance</p>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="mt-4 h-auto w-full"
          role="img"
          aria-label={chartAriaLabel}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.32" />
              <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0" />
            </linearGradient>
          </defs>

          <line
            x1={PAD_X}
            y1={H - PAD_BOTTOM}
            x2={W - PAD_X}
            y2={H - PAD_BOTTOM}
            stroke="var(--color-border)"
            strokeWidth="1"
          />

          <path d={areaPath} fill={`url(#${gradientId})`} />
          <path
            d={linePath}
            fill="none"
            stroke="var(--color-secondary)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          <circle
            cx={coords[coords.length - 1].x}
            cy={coords[coords.length - 1].y}
            r="5"
            fill="var(--color-secondary)"
            stroke="var(--color-background)"
            strokeWidth="2"
          />

          {coords.map((c, i) =>
            labels[i] ? (
              <text
                key={i}
                x={c.x}
                y={H - 8}
                textAnchor="middle"
                className="fill-muted-foreground"
                style={{ fontSize: "11px" }}
              >
                {labels[i]}
              </text>
            ) : null,
          )}
        </svg>
      </div>

      {/* Live ad on X */}
      <div className="border-t border-border/60 p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Live ad on X
        </p>

        <div className="mt-4 grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-secondary/10 px-3 py-2 text-secondary">
              <Eye className="size-4" />
              <span className="font-display text-2xl font-bold">{xAd.views}</span>
              <span className="text-sm font-medium text-foreground/80">
                targeted investors reached
              </span>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
              {xAd.description}
            </p>
            <a
              href={xAd.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gs-primary hover:underline"
            >
              View the live ad on X ({xAd.date})
              <ArrowUpRight className="size-4" />
            </a>

            {articles && articles.length > 0 ? (
              <div className="mt-4 border-t border-border/60 pt-4">
                <p className="text-sm font-medium text-foreground">Promoted article</p>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {articles.map((a) => (
                    <li key={a.href}>
                      <a
                        href={a.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gs-primary hover:underline"
                      >
                        {a.label}
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {xAd.imageSrc ? (
            <a
              href={xAd.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl border border-border transition-colors hover:border-gs-primary/60"
            >
              <Image
                src={xAd.imageSrc || "/placeholder.svg"}
                alt={xAd.imageAlt || "Live ad on X"}
                width={598}
                height={620}
                className="h-auto w-full"
              />
            </a>
          ) : null}
        </div>
      </div>

      <p className="border-t border-border/60 bg-muted/30 px-6 py-4 text-sm leading-relaxed text-muted-foreground md:px-8">
        {note}
      </p>
    </article>
  )
}
