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
  title: "See the Results — TDM Financial Direct-to-Investor Campaigns",
  description:
    "Our campaigns reach active investors most interested in your company at scale. See how two live client stocks — SPMC and CRDL — are performing in the market today.",
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0d1730",
}

export default function GetStartedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`getstarted ${archivo.variable} ${inter.variable}`}>
      {children}
    </div>
  )
}
