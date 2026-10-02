import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Video Production | TDM Financial",
  description: "Video production by TDM Financial — watch our work for Village Farms.",
}

const VIDEO_SRC = "/videos/village-farms.mp4"

export default function VideoProductionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/Logo.png"
              alt="TDM Financial Logo"
              width={100}
              height={47}
              className="h-12 w-auto"
            />
          </Link>
          <Button className="bg-[#f47c26] text-white hover:bg-[#f47c26]/90" asChild>
            <a href="tel:+14068625400">Call Us Now: 406.862.5400</a>
          </Button>
        </div>
      </header>

      <main className="flex-1 py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[2fr_1fr] lg:gap-12">
            <video
              src={VIDEO_SRC}
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-lg bg-black shadow-lg"
            />
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-[#002b45] md:text-5xl">
                Video Production
              </h1>
              <p className="text-xl text-[#444444]">
                Village Farms — produced by TDM Financial.
              </p>
              <Button
                className="h-auto bg-[#f47c26] px-8 py-6 text-lg text-white hover:bg-[#f47c26]/90"
                asChild
              >
                <a href={VIDEO_SRC} download="village-farms.mp4">
                  <Download className="size-5" />
                  Download Video
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-[#002b45] text-white">
        <div className="container py-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} TDM Financial. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
