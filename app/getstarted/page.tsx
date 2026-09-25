import { SiteHeader } from "@/components/getstarted/site-header"
import { ResultsHero } from "@/components/getstarted/results-hero"
import { CampaignResults } from "@/components/getstarted/campaign-results"
import { ContactSection } from "@/components/getstarted/contact-section"
import { SiteFooter } from "@/components/getstarted/site-footer"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <SiteHeader />
      <ResultsHero />
      <CampaignResults />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
