"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";

const intents = [
  "New project",
  "Fractional engagement",
  "Brand & identity",
  "Advisory",
  "Something else"
];

export default function ContactPage() {
  const [intent, setIntent] = useState(intents[0]);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const body = `From: ${name} <${email}>%0A%0AIntent: ${intent}%0A%0A${message}`;
    window.location.href = `mailto:hello@evdb.work?subject=${encodeURIComponent(
      `[${intent}] Inquiry from ${name}`
    )}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-cream pb-16 pt-40 md:pt-48">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ScrollReveal>
            <p className="text-eyebrow uppercase text-ink-muted">Inquiries</p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1 className="mt-6 font-serif text-display-xl text-ink">
              Let's <em className="font-light">talk.</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              The best engagements start with a real conversation. Tell me what
              you're building, where it's stuck, and what you'd like the next
              ninety days to look like.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-12">
          {/* Left: form */}
          <div className="md:col-span-7">
            <ScrollReveal>
              <p className="text-eyebrow uppercase text-ink-muted">
                Step 01 — What kind of conversation?
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {intents.map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIntent(i)}
                    className={`rounded-full border px-4 py-2 text-sm transition-all ${
                      intent === i
                        ? "border-ink bg-ink text-cream"
                        : "border-ink/15 text-ink hover:border-ink/40"
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="mt-12 grid grid-cols-1 gap-6 border-t border-ink/15 pt-12 md:grid-cols-2"
              >
                <Field label="Your name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field
                  label="Company / project (optional)"
                  name="company"
                  className="md:col-span-2"
                />
                <Field
                  label="Tell me about it"
                  name="message"
                  textarea
                  required
                  className="md:col-span-2"
                />

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm text-cream transition-all hover:gap-5"
                  >
                    Send inquiry
                    <span aria-hidden>→</span>
                  </button>
                  {submitted && (
                    <p className="mt-4 text-sm text-ink-muted">
                      Opening your email client…
                    </p>
                  )}
                </div>
              </form>
            </ScrollReveal>
          </div>

          {/* Right: contact methods */}
          <aside className="space-y-12 md:col-span-5">
            <ScrollReveal>
              <p className="text-eyebrow uppercase text-ink-muted">Direct</p>
              <a
                href="mailto:hello@evdb.work"
                className="mt-4 block font-serif text-3xl text-ink underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-ink md:text-4xl"
              >
                hello@evdb.work
              </a>
              <p className="mt-3 text-sm text-ink-muted">
                Most inquiries get a reply within one business day.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="border-t border-ink/10 pt-12">
                <p className="text-eyebrow uppercase text-ink-muted">Book a call</p>
                <p className="mt-4 text-lg text-ink-soft">
                  Drop your Cal.com or Calendly link into this section to embed
                  the booking widget directly.
                </p>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-full border border-ink/20 px-5 py-3 text-sm text-ink transition-colors hover:border-ink"
                >
                  Open calendar
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="border-t border-ink/10 pt-12">
                <p className="text-eyebrow uppercase text-ink-muted">FAQ — quick</p>
                <dl className="mt-6 space-y-6 text-sm">
                  <div>
                    <dt className="font-serif text-base text-ink">Where are you based?</dt>
                    <dd className="mt-1 text-ink-soft">
                      US-based, available globally and async-first.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-serif text-base text-ink">Do you take equity?</dt>
                    <dd className="mt-1 text-ink-soft">
                      Selectively, for engagements I'd take regardless.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-serif text-base text-ink">When can you start?</dt>
                    <dd className="mt-1 text-ink-soft">
                      Usually 2–4 weeks out. Urgent engagements considered.
                    </dd>
                  </div>
                </dl>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
  className
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  className?: string;
}) {
  const baseClasses =
    "mt-2 w-full border-0 border-b border-ink/20 bg-transparent py-3 text-lg text-ink placeholder-ink-muted/40 outline-none transition-colors focus:border-ink";
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-eyebrow uppercase text-ink-muted">
        {label}
        {required && <span className="ml-1 text-clay">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          className={baseClasses}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className={baseClasses}
        />
      )}
    </label>
  );
}
