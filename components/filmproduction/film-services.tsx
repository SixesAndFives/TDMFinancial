import { FileText, Video, Clapperboard } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Pre-production",
    description:
      "Pre-production storyboarding and scripting that incorporates an on-site interview of leadership.",
  },
  {
    icon: Video,
    title: "Production",
    description:
      "Deployment of our film production crew to your site, armed with 4K cameras, lighting, and drones.",
  },
  {
    icon: Clapperboard,
    title: "Post-production",
    description:
      "Post-production into a high-touch, theatrical-like short film.",
  },
]

export function FilmServices() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-gs-primary">
            Services
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
            Our production service includes:
          </h2>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-gs-primary/50"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-gs-primary/15 text-gs-primary">
                <service.icon className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1.5 leading-relaxed text-muted-foreground text-pretty">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
