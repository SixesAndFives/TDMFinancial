"use client"

import { useEffect } from "react"

const CALENDLY_URL = "https://calendly.com/frankcfn"

export function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      data-url={CALENDLY_URL}
      style={{ minWidth: "280px", height: "560px" }}
    />
  )
}
