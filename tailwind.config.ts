import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Tokens resolve from CSS variables defined in globals.css.
        // Light mode = cream/ink; dark mode (prefers-color-scheme) = navy.
        // RGB-channel form keeps Tailwind opacity modifiers (e.g. bg-ink/80) working.
        cream: {
          DEFAULT: "rgb(var(--c-cream) / <alpha-value>)",
          50: "rgb(var(--c-cream-50) / <alpha-value>)",
          100: "rgb(var(--c-cream-100) / <alpha-value>)",
          200: "rgb(var(--c-cream-200) / <alpha-value>)",
          300: "rgb(var(--c-cream-300) / <alpha-value>)"
        },
        ink: {
          DEFAULT: "rgb(var(--c-ink) / <alpha-value>)",
          soft: "rgb(var(--c-ink-soft) / <alpha-value>)",
          muted: "rgb(var(--c-ink-muted) / <alpha-value>)",
          line: "rgb(var(--c-ink-line) / <alpha-value>)"
        },
        clay: {
          DEFAULT: "rgb(var(--c-clay) / <alpha-value>)",
          dark: "rgb(var(--c-clay-dark) / <alpha-value>)",
          light: "rgb(var(--c-clay-light) / <alpha-value>)"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"]
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 12vw, 11rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(3rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "eyebrow": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.22em" }]
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        shimmer: "shimmer 2.5s linear infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
