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
        cream: {
          DEFAULT: "#F5F0E6",
          50: "#FAF6EC",
          100: "#F5F0E6",
          200: "#EDE6D5",
          300: "#E0D5BC"
        },
        ink: {
          DEFAULT: "#161513",
          soft: "#2D2620",
          muted: "#8B8175",
          line: "#1A1A1A"
        },
        clay: {
          DEFAULT: "#B4513E",
          dark: "#8A3C2C",
          light: "#D17961"
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
