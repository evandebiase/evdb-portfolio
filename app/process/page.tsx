import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Process — EVDB.work",
  description: "How EVDB.work engages, builds, and ships."
};

const phases = [
  {
    n: "01",
    label: "Intake",
    duration: "Week 0",
    title: "Get the question right",
    body: "Most engagements fail because the wrong question got answered beautifully. We start with a short, paid discovery — a tight working session where we pressure-test the problem, the user, and the bet. You leave with clarity even if we don't continue."
  },
  {
    n: "02",
    label: "Frame",
    duration: "Weeks 1–2",
    title: "A working artifact, not a deck",
    body: "Within two weeks I deliver something you can hold: a prototype, a brand sketch, a working data model. Deliverables are interactive from day one. No 60-page PDFs."
  },
  {
    n: "03",
    label: "Build",
    duration: "Weeks 3–10",
    title: "Ship continuously, sit with it",
    body: "We ship in tight cycles into a staging environment you live in. Weekly walkthroughs over Loom or a working session. You'll feel the product change under your hand."
  },
  {
    n: "04",
    label: "Hand-off",
    duration: "Closing weeks",
    title: "Operable on day one",
    body: "Every engagement ends with a fully documented codebase, a running production deployment, and a 30-day window where I'm still on call for edits and questions. You shouldn't need me — but I'm there if you do."
  }
];

export default function ProcessPage() {
  return (
    <>
      <section className="bg-cream pb-16 pt-40 md:pt-48">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ScrollReveal>
            <p className="text-eyebrow uppercase text-ink-muted">How the studio works</p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1 className="mt-6 font-serif text-display-xl text-ink">
              A simple <em className="font-light">process.</em>
              <br />
              A deliberate one.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Engagements are designed around shipping continuously, not staging
              elaborate hand-offs. The point is to move fast without losing the
              parts that make the work yours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Phases */}
      <section className="border-t border-ink/10 bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ScrollReveal>
            <p className="text-eyebrow uppercase text-ink-muted">Phases</p>
            <h2 className="mt-6 font-serif text-display-md text-ink">
              Four <em className="font-light">phases,</em> one continuous arc.
            </h2>
          </ScrollReveal>

          <div className="mt-16 space-y-0">
            {phases.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 0.06}>
                <article className="grid grid-cols-12 items-start gap-6 border-t border-ink/15 py-10 md:py-14">
                  <div className="col-span-12 flex items-center gap-4 md:col-span-2">
                    <span className="font-mono text-eyebrow uppercase text-ink-muted">
                      N° {p.n}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                  </div>
                  <div className="col-span-12 md:col-span-3">
                    <p className="font-serif text-2xl text-ink">{p.label}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-ink-muted">
                      {p.duration}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="font-serif text-2xl text-ink md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-soft md:text-lg">
                      {p.body}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
