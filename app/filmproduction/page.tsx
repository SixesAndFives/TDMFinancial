import { SiteHeader } from "@/components/getstarted/site-header"
import { FilmVideo } from "@/components/filmproduction/film-video"
import { FilmHero } from "@/components/filmproduction/film-hero"
import { FilmServices } from "@/components/filmproduction/film-services"
import { ContactSection } from "@/components/getstarted/contact-section"
import { SiteFooter } from "@/components/getstarted/site-footer"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <SiteHeader />
      <FilmVideo />
      <FilmHero />
      <FilmServices />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
