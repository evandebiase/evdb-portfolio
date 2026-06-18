import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "About — EVDB.work",
  description: "About Evan DeBiase and the EVDB.work studio."
};

const principles = [
  {
    title: "Rigor over polish",
    body: "Polish is the byproduct of rigor — not the input. Get the model of the problem right and the surface mostly takes care of itself."
  },
  {
    title: "Small surface, deep stack",
    body: "I'd rather ship one thing that genuinely works end-to-end than five things that all feel half-finished. Less surface, more depth."
  },
  {
    title: "The brand is the product",
    body: "Visual identity, voice, motion, and the actual product surface are one continuous artifact. They should be made by the same hand."
  },
  {
    title: "Founders, not committees",
    body: "I work directly with founders. Asynchronous when possible, candid when needed, no agency middle layer."
  }
];

const timeline = [
  { year: "2026", line: "EVDB.work — independent product, brand, and engineering practice. Shipping HaulHub.co, DeepCount.co, and others." },
  { year: "2024", line: "Babson College — designing and shipping an AI-enhanced platform for student career development. End-to-end ownership: design, code, recruiting strategy." },
  { year: "2021", line: "Therapeutic Mentor at the Justice Resource Institute. Trauma-informed work with high-risk youth, cross-functional with care teams and schools." },
  { year: "2014", line: "Independent multimedia producer. National news for PBS and the Christian Science Monitor, interviews with C-suite and billionaires, commercials for Sotheby's. Learned what shipped craft actually looks like." },
  { year: "2010", line: "Began at Babson College undergraduate school." }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream pb-16 pt-40 md:pt-48">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ScrollReveal>
            <p className="text-eyebrow uppercase text-ink-muted">About the studio</p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1 className="mt-6 font-serif text-display-xl text-ink">
              Independent
              <br />
              by <em className="font-light">design.</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              EVDB.work is the independent practice of Evan DeBiase. The work
              spans product strategy, brand identity, and full-stack engineering
              — held together by a single sensibility and shipped by a single
              pair of hands.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Portrait + bio */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:px-12">
          <ScrollReveal className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10 bg-cream-50">
              <Image
                src="/images/portrait.jpg"
                alt="Evan DeBiase"
                width={800}
                height={800}
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-7" delay={0.1}>
            <p className="text-eyebrow uppercase text-ink-muted">Bio</p>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-ink-soft md:text-xl">
              <p>
                My path into building product didn't start in tech. I came up
                through multimedia — producing national news for PBS and the
                Christian Science Monitor, interviewing C-suite executives and
                athletes, cutting commercials for Sotheby's. After that I spent
                three years as a Therapeutic Mentor with the Justice Resource
                Institute, working alongside high-risk youth on resilience and
                growth. Both stretches taught me the same thing: the best
                systems are the ones designed around the actual humans who'll
                use them.
              </p>
              <p>
                For the last two years I've been at Babson College — my undergrad
                alma mater, where I now advise students on careers. The real
                work has been designing and shipping an AI-enhanced platform
                from scratch: structured job search, application prep,
                recruiting pipeline alignment. I own the design, the code, and
                the strategy. It's the same instinct that runs through
                everything I do — someone needs a system that works, and I'd
                rather build it than wait for one to arrive.
              </p>
              <p>
                EVDB.work is where I take everything that background gave me —
                the production polish, the relationship work, the unreasonable
                bar for craft — and apply it to the products and brands of
                founders who feel the same way. The projects on this site are
                real, mostly live, and built by hand. If you're stuck between a
                sketch and something you can ship, that's the gap I'm best at
                closing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-ink/10 bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ScrollReveal>
            <p className="text-eyebrow uppercase text-ink-muted">Principles</p>
            <h2 className="mt-6 max-w-3xl font-serif text-display-md text-ink">
              How the studio <em className="font-light">thinks.</em>
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="flex items-start gap-6 border-t border-ink/10 pt-8">
                  <span className="font-mono text-eyebrow uppercase text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-ink md:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-soft md:text-lg">
                      {p.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ScrollReveal>
            <p className="text-eyebrow uppercase text-ink-muted">Trajectory</p>
            <h2 className="mt-6 max-w-3xl font-serif text-display-md text-ink">
              A short <em className="font-light">timeline.</em>
            </h2>
          </ScrollReveal>

          <ul className="mt-16 space-y-0 border-t border-ink/15">
            {timeline.map((t, i) => (
              <ScrollReveal key={t.year} delay={i * 0.05}>
                <li className="group grid grid-cols-12 items-baseline gap-6 border-b border-ink/15 py-8 transition-colors hover:bg-cream-50">
                  <span className="col-span-2 font-mono text-sm text-ink-muted md:col-span-1">
                    {t.year}
                  </span>
                  <p className="col-span-10 text-lg text-ink md:col-span-11 md:text-2xl">
                    {t.line}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
