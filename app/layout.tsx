import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { IBM_Plex_Sans } from "next/font/google"
import { Metadata } from 'next'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
})

export const metadata: Metadata = {
  title: "TDM Financial - Investor Media Coverage",
  description: "Maximize investor visibility with proven financial media coverage from TDM Financial.",
  generator: 'v0.dev',
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
