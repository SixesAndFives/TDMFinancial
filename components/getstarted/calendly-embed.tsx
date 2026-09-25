"use client"

import { useEffect } from "react"

const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css"
const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js"

export function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = WIDGET_CSS
      document.head.appendChild(link)
    }
    if (!document.querySelector(`script[src="${WIDGET_JS}"]`)) {
      const script = document.createElement("script")
      script.src = WIDGET_JS
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget w-full overflow-hidden rounded-xl border border-border bg-white"
      data-url={`${url}?hide_gdpr_banner=1&background_color=ffffff&primary_color=e0a52b`}
      style={{ minWidth: "280px", height: "680px" }}
    />
  )
}
