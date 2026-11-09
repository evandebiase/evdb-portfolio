"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type Variant = "hero" | "card";

type Props = {
  project: Project;
  variant?: Variant;
};

export function ProjectShowcase({ project, variant = "hero" }: Props) {
  if (variant === "card") return <ProjectCard project={project} />;
  return <ProjectHero project={project} />;
}

function ProjectHero({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      id={project.slug}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative scroll-mt-28 pb-12 pt-6 md:pb-16 md:pt-8"
      style={{ ["--accent" as never]: project.accent ?? "#B4513E" }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12">
        <div className="mb-5 flex flex-wrap items-baseline gap-x-5 gap-y-2 md:mb-7">
          <span className="font-mono text-eyebrow uppercase text-ink-muted">
            N° {project.index}
          </span>
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          <h3 className="font-serif text-3xl leading-none text-ink md:text-4xl lg:text-5xl">
            {project.title}
          </h3>
          <span className="text-base text-ink-soft md:text-lg">
            {project.tagline}
          </span>
        </div>

        <ShowcasePane project={project} />

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-ink-soft md:mt-6">
          <p className="max-w-3xl flex-1 text-base leading-relaxed md:text-lg">
            {project.description}
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-ink/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink"
              >
                {s}
              </li>
            ))}
          </ul>
          <VisitButton project={project} />
        </div>
      </div>
    </motion.section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={project.slug}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group scroll-mt-28"
      style={{ ["--accent" as never]: project.accent ?? "#B4513E" }}
    >
      <div className="mb-3 flex items-baseline gap-3">
        <span className="font-mono text-eyebrow uppercase text-ink-muted">
          N° {project.index}
        </span>
        <span
          aria-hidden
          className="h-1 w-1 rounded-full"
          style={{ background: "var(--accent)" }}
        />
        <h3 className="font-serif text-xl leading-none text-ink md:text-2xl">
          {project.title}
        </h3>
      </div>
      <ShowcasePane project={project} compact />
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="min-w-0 flex-1 text-sm leading-snug text-ink-soft">
          {project.tagline}
        </p>
        <VisitButton project={project} compact />
      </div>
    </motion.section>
  );
}

function VisitButton({
  project,
  compact = false
}: {
  project: Project;
  compact?: boolean;
}) {
  if (!project.liveUrl) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-ink/15 uppercase tracking-widest text-ink-muted",
          compact ? "px-3 py-1 text-[10px]" : "px-5 py-2.5 text-xs"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-ink-muted/50" />
        Coming soon
      </span>
    );
  }
  return (
    <a
      href={project.externalUrl ?? project.liveUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-ink font-medium text-cream transition-colors hover:bg-ink-soft",
        compact ? "px-4 py-1.5 text-xs" : "px-6 py-2.5 text-sm"
      )}
    >
      Open live
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: project.accent ?? "#B4513E" }}
      />
    </a>
  );
}

function ShowcasePane({
  project,
  compact = false
}: {
  project: Project;
  compact?: boolean;
}) {
  const urlLabel =
    project.liveUrl?.replace(/^https?:\/\//, "") ?? `${project.slug}.preview`;

  return (
    <div
      className={cn(
        "group relative overflow-hidden border border-ink/10 bg-cream-50 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]",
        compact
          ? "aspect-[4/3] rounded-lg md:aspect-[16/10] md:rounded-xl"
          : "aspect-[3/4] rounded-xl sm:aspect-[4/3] md:aspect-[16/9] md:rounded-2xl md:shadow-[0_40px_100px_-40px_rgba(0,0,0,0.4)]"
      )}
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 z-20 flex items-center gap-2 border-b border-ink/10 bg-cream/80 backdrop-blur",
          compact ? "px-3 py-1.5" : "px-4 py-2.5 md:px-5 md:py-3"
        )}
      >
        <span className={cn("rounded-full bg-ink/15", compact ? "h-1.5 w-1.5" : "h-2.5 w-2.5")} />
        <span className={cn("rounded-full bg-ink/15", compact ? "h-1.5 w-1.5" : "h-2.5 w-2.5")} />
        <span className={cn("rounded-full bg-ink/15", compact ? "h-1.5 w-1.5" : "h-2.5 w-2.5")} />
        <span
          className={cn(
            "mx-auto truncate font-mono uppercase tracking-widest text-ink-muted",
            compact ? "text-[9px]" : "text-[10px] md:text-[11px]"
          )}
        >
          {urlLabel}
        </span>
        <span className={compact ? "w-6" : "w-12"} aria-hidden />
      </div>

      <div className={cn("absolute inset-0", compact ? "pt-7" : "pt-9 md:pt-11")}>
        <LivePreview project={project} />
      </div>

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
          label="Live embed blocked. Press Open live to view."
          accent={project.accent}
        />
      ) : (
        <iframe
          src={project.liveUrl}
          title={`${project.title} — live preview`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
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
