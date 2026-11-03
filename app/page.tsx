import Image from "next/image";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

// Tech stack strip under the intro — one quiet, slowly-scrolling line.
// Duplicated four times so the animated translateX(-50%) never shows blank
// edge on wide viewports.
const techStack = [
  "Next.js",
  "TypeScript",
  "Postgres",
  "Stripe",
  "Clerk",
  "Neon",
  "Claude API",
  "Tailwind",
  "Sanity",
  "Mapbox",
  "Vercel",
  "Edge"
];

export default function HomePage() {
  return (
    <>
      {/* Landing intro: identity block on the left, positioning line on the right */}
      <section className="bg-cream pb-6 pt-20 md:pb-8 md:pt-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ScrollReveal>
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
              {/* Identity block */}
              <div className="flex items-center gap-4 md:col-span-4 lg:col-span-3">
                <Image
                  src="/images/avatar.jpg"
                  alt="Evan DeBiase"
                  width={112}
                  height={112}
                  priority
                  className="h-14 w-14 shrink-0 rounded-full border border-ink/10 object-cover"
                />
                <div>
                  <p className="font-serif text-lg leading-tight text-ink">
                    Evan DeBiase
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-ink-muted">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=evandebiase@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Email"
                      className="transition-colors hover:text-ink"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m2 7 10 6 10-6" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/evandebiase/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="transition-colors hover:text-ink"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/evandebiase"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="transition-colors hover:text-ink"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.02c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.77 1.07.77 2.15v3.19c0 .31.21.66.8.55C20.71 21.39 24 17.08 24 12 24 5.65 18.85.5 12 .5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Positioning paragraph */}
              <div className="md:col-span-8 lg:col-span-9">
                <p className="max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
                  Product, brand, and engineering for founders who refuse to
                  settle for the default. A few of the things I've built:
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech-stack marquee */}
      <section
        aria-hidden
        className="overflow-hidden border-y border-ink/10 bg-cream py-3"
      >
        <div className="flex min-w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {[...techStack, ...techStack, ...techStack, ...techStack].map(
            (item, i) => (
              <span
                key={i}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted md:text-[11px]"
              >
                {item}
              </span>
            )
          )}
        </div>
      </section>

      {/* Selected Work header + project index — compact TOC that doubles as
          proof-of-substance above the fold. Each chip jumps to its project. */}
      <section className="bg-cream pb-4 pt-10 md:pb-6 md:pt-14">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ScrollReveal>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-6">
                <div className="h-px flex-1 bg-ink/15" />
                <p className="font-mono text-eyebrow uppercase text-ink-muted">
                  Selected Work / 2026
                </p>
                <div className="h-px flex-1 bg-ink/15" />
              </div>
              <ul className="flex flex-wrap items-baseline justify-center gap-x-5 gap-y-2.5">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <a
                      href={`#${p.slug}`}
                      className="group inline-flex items-baseline gap-2"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                        N° {p.index}
                      </span>
                      <span className="font-serif text-base text-ink underline-offset-4 group-hover:underline">
                        {p.title}
                      </span>
                      <span
                        aria-hidden
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ background: p.accent }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {projects.map((project) => (
        <ProjectShowcase key={project.slug} project={project} />
      ))}
    </>
  );
}
