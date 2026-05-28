import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      {/* Compact landing intro — projects start right below */}
      <section className="bg-cream pb-6 pt-28 md:pb-8 md:pt-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ScrollReveal>
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Product, brand, and engineering for founders who refuse to settle
              for the default. A few of the things I've built:
            </p>
          </ScrollReveal>
        </div>
      </section>

      {projects.map((project) => (
        <ProjectShowcase key={project.slug} project={project} />
      ))}

      {/* Closing pull quote */}
      <section className="bg-cream py-32 md:py-48">
        <div className="mx-auto max-w-[1100px] px-6 md:px-12">
          <ScrollReveal>
            <blockquote className="pull-quote font-serif text-3xl leading-snug text-ink md:text-5xl">
              The best work is made with people who care more than they have to.
              That's the bar, every time.
            </blockquote>
            <p className="mt-10 text-xs uppercase tracking-widest text-ink-muted">
              — Evan DeBiase
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
