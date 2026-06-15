export function CompactFooter() {
  return (
    <footer className="bg-[var(--color-navy-dark)] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-4 text-sm font-semibold text-white">
          <span className="font-serif">TDM Financial</span>
          <span className="text-slate-600" aria-hidden="true">
            |
          </span>
          <span className="text-slate-300">SECFilings.com</span>
        </div>
        <p className="text-xs text-slate-500">
          {`© ${new Date().getFullYear()} TDM Financial. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}
