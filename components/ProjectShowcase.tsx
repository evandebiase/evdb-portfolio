"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type Props = {
  project: Project;
};

export function ProjectShowcase({ project }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id={project.slug}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative scroll-mt-32 border-t border-ink/10 py-20 md:py-32"
      style={{ ["--accent" as never]: project.accent ?? "#B4513E" }}
    >
      {/* Project meta row */}
      <div className="mx-auto mb-12 grid w-full max-w-[1600px] grid-cols-12 items-end gap-6 px-6 md:mb-16 md:px-12">
        <div className="col-span-12 flex items-center gap-4 md:col-span-2">
          <span className="font-mono text-eyebrow uppercase text-ink-muted">
            N° {project.index}
          </span>
          <span
            aria-hidden
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--accent)" }}
          />
        </div>

        <div className="col-span-12 md:col-span-7">
          <h3 className="font-serif text-display-md text-ink">
            {project.title}
          </h3>
          <p className="mt-3 text-lg text-ink-soft md:text-xl">
            {project.tagline}
          </p>
        </div>

        <div className="col-span-12 grid grid-cols-2 gap-6 text-xs uppercase tracking-widest text-ink-muted md:col-span-3">
          <div>
            <p className="text-ink-muted/60">Year</p>
            <p className="mt-1 text-ink">{project.year}</p>
          </div>
          <div>
            <p className="text-ink-muted/60">Role</p>
            <p className="mt-1 text-ink">{project.role}</p>
          </div>
        </div>
      </div>

      {/* Single full-width live preview pane */}
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12">
        <ShowcasePane project={project} />

        {/* Footer row: description + stack + CTA */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <p className="text-base leading-relaxed text-ink-soft md:col-span-6 md:text-lg">
            {project.description}
          </p>

          <div className="md:col-span-3">
            <p className="text-eyebrow uppercase text-ink-muted">Built with</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start md:col-span-3 md:justify-end">
            {project.liveUrl ? (
              <a
                href={project.externalUrl ?? project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm text-cream transition-all hover:gap-5"
              >
                Visit live
                <span aria-hidden>↗</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-xs uppercase tracking-widest text-ink-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-muted/50" />
                Coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function ShowcasePane({ project }: { project: Project }) {
  const urlLabel =
    project.liveUrl?.replace(/^https?:\/\//, "") ?? `${project.slug}.preview`;

  return (
    <div
      className={cn(
        "group relative aspect-[3/4] overflow-hidden rounded-xl border border-ink/10 bg-cream-50 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] sm:aspect-[4/3] md:aspect-[16/10] md:rounded-2xl md:shadow-[0_40px_100px_-40px_rgba(0,0,0,0.4)] lg:aspect-[16/9]"
      )}
    >
      {/* Browser chrome */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center gap-2 border-b border-ink/10 bg-cream/80 px-4 py-2.5 backdrop-blur md:px-5 md:py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="mx-auto truncate font-mono text-[10px] uppercase tracking-widest text-ink-muted md:text-[11px]">
          {urlLabel}
        </span>
        <span className="w-12" aria-hidden />
      </div>

      {/* Pane body */}
      <div className="absolute inset-0 pt-9 md:pt-11">
        <LivePreview project={project} />
      </div>

      {/* Hover hairlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 0 1px ${project.accent ?? "#B4513E"}`
        }}
      />
    </div>
  );
}

function LivePreview({ project }: { project: Project }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (!project.liveUrl) {
    return <PreviewPlaceholder label="Live URL coming soon" accent={project.accent} />;
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      {!loaded && !failed && (
        <div className="absolute inset-0 grid place-items-center bg-cream-50">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
            Loading {project.title.toLowerCase()}…
          </span>
        </div>
      )}
      {failed ? (
        <PreviewPlaceholder
          label="Live embed blocked — click 'Visit live' to view"
          accent={project.accent}
        />
      ) : (
        <iframe
          src={project.liveUrl}
          title={`${project.title} — live preview`}
          loading="lazy"
          // Sandbox keeps user safe; allow-same-origin lets most sites actually render.
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          // Mobile: render the iframe at its native pane size — the embedded site shows
          // its own mobile responsive design.
          // Desktop (md+): render at 1.333× the pane size, then scale to 75% — a desktop
          // view inside the chrome that stays interactive and crisp.
          className="absolute left-0 top-0 h-full w-full origin-top-left md:h-[133.33%] md:w-[133.33%] md:[transform:scale(0.75)]"
        />
      )}
    </div>
  );
}

function PreviewPlaceholder({
  label,
  accent
}: {
  label: string;
  accent?: string;
}) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-cream-50"
      style={{
        backgroundImage: `radial-gradient(circle at 30% 30%, ${accent ?? "#B4513E"}11 0%, transparent 50%), radial-gradient(circle at 70% 70%, ${accent ?? "#B4513E"}08 0%, transparent 50%)`
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <span
          aria-hidden
          className="h-2 w-2 animate-pulse rounded-full"
          style={{ background: accent ?? "#B4513E" }}
        />
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
          {label}
        </span>
      </div>
      {/* Decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />
    </div>
  );
}
