import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Work — EVDB.work",
  description: "Selected work from the studio of Evan DeBiase."
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-cream pb-12 pt-40 md:pt-48">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ScrollReveal>
            <p className="text-eyebrow uppercase text-ink-muted">
              The archive — 2026
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1 className="mt-6 font-serif text-display-xl text-ink">
              Selected <em className="font-light">work.</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Each project is a chance to argue for a different default. Below is
              a small set of the products, brands, and systems I've built — live
              previews and reels included where they exist.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {projects.map((project) => (
        <ProjectShowcase key={project.slug} project={project} />
      ))}
    </>
  );
}
