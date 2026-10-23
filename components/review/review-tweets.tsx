import Image from "next/image"

const tweets = [
  {
    title: "The $200 Billion Opportunity",
    body: `The GLP-1 market could reach $200 BILLION by 2030.

With $LLY and $NVO leading the charge, emerging innovators like $PNGAF are exploring new ways to deliver metabolic therapies.

The next phase of the GLP-1 revolution is taking shape.

Read more: [Article Link]`,
  },
  {
    title: "The Innovation Race",
    body: `The GLP-1 race is about more than weight loss.

$AMGN is exploring longer-lasting treatments. $PFE is expanding its obesity pipeline. $PNGAF is developing needle-free peptide patches.

Different approaches. One rapidly evolving market.

Read more: [Article Link]`,
  },
  {
    title: "Beyond the Injection",
    body: `The next chapter of GLP-1 medicine may be defined by how treatments are delivered.

$AZN is advancing oral therapies. $MRK is investing in next-generation GLP-1 development. $PNGAF is exploring transdermal delivery.

The opportunity extends well beyond today's blockbusters.

Read more: [Article Link]`,
  },
  {
    title: "The Healthcare Ripple Effect",
    body: `The $200B GLP-1 opportunity reaches far beyond drugmakers.

$CVS is expanding patient access. $UNH represents the insurance side of the equation. $PNGAF is developing needle-free peptide delivery.

Three different angles on a rapidly evolving healthcare market.

Read more: [Article Link]`,
  },
]

export function ReviewTweets() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <span className="text-sm font-semibold uppercase tracking-[0.14em] text-gs-primary">
          Sample Tweets
        </span>
        <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
          Social posts for the campaign.
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {tweets.map((tweet, i) => (
            <li
              key={tweet.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Tweet {i + 1} — {tweet.title}
                </span>
                <Image
                  src="/logos/social/x.svg"
                  alt="X"
                  width={18}
                  height={18}
                  className="size-4 shrink-0 opacity-70"
                />
              </div>
              <p className="mt-4 whitespace-pre-line leading-relaxed text-foreground/90">
                {tweet.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
