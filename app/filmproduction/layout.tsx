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
  title: "Film Production — TDM Financial",
  description:
    "TDM Financial produces branded short films of your company's physical assets — drone footage, music, dynamic graphics, and on-site interviews with leadership — to convey the value of your operation to investors.",
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0d1730",
}

export default function FilmProductionLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`filmproduction ${archivo.variable} ${inter.variable}`}>
      {children}
    </div>
  )
}
