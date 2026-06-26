import Link from "next/link";

const social = [
  { href: "https://mail.google.com/mail/?view=cm&fs=1&to=evandebiase@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/evandebiase/", label: "LinkedIn" },
  { href: "https://github.com/evandebiase", label: "GitHub" }
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-ink/10 bg-cream">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-eyebrow uppercase text-ink-muted">Open for select work</p>
            <h2 className="mt-6 font-serif text-display-md text-ink">
              Have something <em className="font-light">worth</em> building?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Currently taking on a small number of product and brand engagements for
              founders who care about the craft.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm text-cream transition-all hover:gap-5"
            >
              Start a conversation
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <p className="text-eyebrow uppercase text-ink-muted">Elsewhere</p>
                <ul className="mt-6 space-y-3">
                  {social.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 text-ink transition-opacity hover:opacity-60"
                      >
                        {s.label}
                        <span className="text-xs opacity-40 transition-transform group-hover:translate-x-0.5">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-eyebrow uppercase text-ink-muted">Location</p>
                <p className="mt-6 text-ink">
                  Available globally
                  <br />
                  Based in the US
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 text-xs text-ink-muted md:flex-row md:items-center">
          <p>
            <span className="font-serif text-base text-ink">ev<em>db</em><span className="text-ink-muted">.work</span></span>
            <span className="ml-3">© {new Date().getFullYear()} — All rights reserved</span>
          </p>
          <p className="font-mono uppercase tracking-widest">
            Made with rigor in {new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date())}
          </p>
        </div>
      </div>
    </footer>
  );
}
