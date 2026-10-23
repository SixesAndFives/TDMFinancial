import type { Metadata, Viewport } from "next"
import { Archivo, Inter } from "next/font/google"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["600", "700", "800", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Campaign Review — PNGAF | TDM Financial",
  description:
    "Sample campaign deliverables for review: GLP-1 article, social posts, and investor deck video.",
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0d1730",
}

export default function ReviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`review-page ${archivo.variable} ${inter.variable}`}>
      {children}
    </div>
  )
}
