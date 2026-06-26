"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/80 backdrop-blur-xl border-b border-ink/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight text-ink">
            ev<span className="italic">db</span>
            <span className="text-ink-muted">.work</span>
          </span>
          <span className="hidden text-eyebrow uppercase text-ink-muted md:inline">
            &nbsp;— Studio of Evan DeBiase
          </span>
        </Link>

        <div className="-mr-2 flex items-center gap-1 md:gap-3">
          <nav className="no-scrollbar flex items-center gap-0 overflow-x-auto md:gap-2">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative shrink-0 rounded-full px-2 py-2 text-xs transition-colors md:px-4 md:text-sm",
                    active ? "text-ink" : "text-ink-muted hover:text-ink"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    className={cn(
                      "absolute inset-x-2 -bottom-0.5 h-px origin-left bg-ink transition-transform duration-500 md:inset-x-3",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <a
            href="https://github.com/evandebiase"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="shrink-0 rounded-full p-2 text-ink-muted transition-colors hover:text-ink"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-[18px] w-[18px] md:h-5 md:w-5"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.02c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.77 1.07.77 2.15v3.19c0 .31.21.66.8.55C20.71 21.39 24 17.08 24 12 24 5.65 18.85.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
