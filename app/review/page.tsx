import { FilmHeader } from "@/components/filmproduction/film-header"
import { ReviewArticle } from "@/components/review/review-article"
import { ReviewTweets } from "@/components/review/review-tweets"
import { ReviewVideo } from "@/components/review/review-video"
import { FilmFooter } from "@/components/filmproduction/film-footer"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <FilmHeader />
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 pb-2 pt-10 md:px-6 md:pt-12">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-gs-primary">
            Campaign Review — Precision Peptide Company
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            Sample deliverables for review.
          </h1>
        </div>
      </section>
      <ReviewArticle />
      <ReviewTweets />
      <ReviewVideo />
      <FilmFooter />
    </main>
  )
}
