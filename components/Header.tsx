"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Index" },
  { href: "/projects", label: "Work" },
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
            EV<span className="italic">DB</span>
            <span className="text-ink-muted">.work</span>
          </span>
          <span className="hidden text-eyebrow uppercase text-ink-muted md:inline">
            &nbsp;— Studio of Evan DeBiase
          </span>
        </Link>

        <nav className="no-scrollbar -mr-2 flex items-center gap-0 overflow-x-auto md:gap-2">
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
      </div>
    </header>
  );
}
