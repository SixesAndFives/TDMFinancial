import type { Metadata } from "next"
import { LandingHeader } from "@/components/landing/landing-header"
import { CompactHero } from "@/components/landing/compact-hero"
import { CaseStudySection } from "@/components/landing/case-study-section"
import { CtaSection } from "@/components/landing/cta-section"
import { CompactFooter } from "@/components/landing/compact-footer"

export const metadata: Metadata = {
  title: "TDM Financial — Investor Visibility for Public Companies",
  description:
    "TDM Financial helps public companies reach active investors through a data-driven visibility approach. Book a strategy call.",
}

export default function LandingPage() {
  return (
    <main className="bg-background">
      <LandingHeader />
      <CompactHero />
      <CaseStudySection />
      <CtaSection />
      <CompactFooter />
    </main>
  )
}
