import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";
import Link from "next/link";

const stats = [
  { value: "01", label: "Studio of one" },
  { value: "04+", label: "Live products" },
  { value: "100%", label: "Independent" },
  { value: "2026", label: "Currently shipping" }
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee
        items={[
          "Product",
          "Brand",
          "Engineering",
          "Strategy",
          "Editorial",
          "Systems"
        ]}
      />

      {/* Stats / capabilities */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ScrollReveal>
            <p className="text-eyebrow uppercase text-ink-muted">
              A studio, a practice, a vantage point
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h2 className="mt-6 max-w-4xl font-serif text-display-md text-ink">
              I help <em className="font-light">ambitious</em> founders ship the
              version of their product they keep sketching but never quite
              build.
            </h2>
          </ScrollReveal>

          <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-ink/10 pt-12 md:grid-cols-4">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div>
                  <p className="font-serif text-5xl tabular text-ink md:text-7xl">
                    {s.value}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-widest text-ink-muted">
                    {s.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-cream pb-8">
        <div className="mx-auto max-w-[1600px] px-6 pt-24 md:px-12 md:pt-32">
          <ScrollReveal>
            <div className="flex items-end justify-between gap-6 border-b border-ink/15 pb-6">
              <div>
                <p className="text-eyebrow uppercase text-ink-muted">
                  Selected work — 2026
                </p>
                <h2 className="mt-4 font-serif text-display-lg text-ink">
                  Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden text-sm text-ink underline decoration-ink/30 decoration-1 underline-offset-4 transition-colors hover:decoration-ink md:inline"
              >
                View archive →
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {projects.map((project) => (
          <ProjectShowcase key={project.slug} project={project} />
        ))}
      </section>

      {/* Closing pull quote */}
      <section className="bg-cream py-32 md:py-48">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12">
          <ScrollReveal>
            <blockquote className="pull-quote font-serif text-3xl leading-snug text-ink md:text-5xl">
              The best work is made with people who care more than they have to.
              That's the bar, every time.
            </blockquote>
            <p className="mt-10 text-xs uppercase tracking-widest text-ink-muted">
              — Evan DeBiase, Founder
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
