"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export function RequestInfoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", company: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent("Information Request — TDM Financial")
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}`,
    )
    window.location.href = `mailto:flane@tdmfinancial.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border bg-[var(--color-mist)] p-6 text-center">
        <Check className="h-6 w-6 text-[var(--color-navy)]" aria-hidden="true" />
        <p className="text-sm font-medium text-[var(--color-navy)]">
          Thanks — your email client is opening. We&apos;ll be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        required
        placeholder="Name"
        aria-label="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-[var(--color-navy)] focus:ring-1 focus:ring-[var(--color-navy)]"
      />
      <input
        type="email"
        required
        placeholder="Email"
        aria-label="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-[var(--color-navy)] focus:ring-1 focus:ring-[var(--color-navy)]"
      />
      <input
        type="text"
        required
        placeholder="Company"
        aria-label="Company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
        className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-[var(--color-navy)] focus:ring-1 focus:ring-[var(--color-navy)]"
      />
      <button
        type="submit"
        className="mt-1 rounded-lg bg-[var(--color-navy)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-navy-light)]"
      >
        Request Information
      </button>
    </form>
  )
}
