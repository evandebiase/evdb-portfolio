"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-cream pb-16 pt-40 md:pb-24">
      {/* Background grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
        }}
      />

      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-eyebrow uppercase text-ink-muted"
        >
          Independent studio · Product · Brand · Engineering
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
          }}
          className="mt-8 font-serif text-display-xl text-ink"
        >
          {["Designed", "with", "rigor."].map((word, i) => (
            <motion.span
              key={i}
              className="mr-[0.18em] inline-block"
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
                }
              }}
            >
              {i === 2 ? <em className="font-light">{word}</em> : word}
            </motion.span>
          ))}
          <br />
          <motion.span
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
              }
            }}
          >
            Built to <em className="font-light">last.</em>
          </motion.span>
        </motion.h1>

        <div className="mt-16 grid grid-cols-1 items-end gap-10 md:mt-24 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-lg leading-relaxed text-ink-soft md:col-span-7 md:text-xl"
          >
            EVDB.work is the independent practice of Evan DeBiase — shipping
            product, brand, and infrastructure for founders who refuse to
            settle for the default.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 md:col-span-5 md:justify-end"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm text-cream transition-all hover:gap-5"
            >
              See selected work
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="text-sm text-ink underline decoration-ink/30 decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom meta strip */}
      <div className="mx-auto mt-16 w-full max-w-[1600px] px-6 md:mt-28 md:px-12">
        <div className="flex items-center justify-between border-t border-ink/15 pt-6 text-xs uppercase tracking-widest text-ink-muted">
          <span className="font-mono">N° 2026 — VOLUME 04</span>
          <span className="hidden font-mono md:inline">↓ Scroll</span>
          <span className="font-mono">Cream Edition</span>
        </div>
      </div>
    </section>
  );
}
