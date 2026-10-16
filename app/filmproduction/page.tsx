import { FilmHeader } from "@/components/filmproduction/film-header"
import { FilmVideo } from "@/components/filmproduction/film-video"
import { FilmHero } from "@/components/filmproduction/film-hero"
import { FilmServices } from "@/components/filmproduction/film-services"
import { ContactSection } from "@/components/getstarted/contact-section"
import { FilmFooter } from "@/components/filmproduction/film-footer"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <FilmHeader />
      <FilmVideo />
      <FilmHero />
      <FilmServices />
      <ContactSection
        title="Let's talk about your On-Site Film"
        body="Pick a time that works for you, or reach out directly. We'll show you exactly how your on-site film can become a reality"
      />
      <FilmFooter />
    </main>
  )
}
