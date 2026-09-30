export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  // The live URL to embed via iframe. If undefined, ProjectShowcase shows a placeholder pane.
  liveUrl?: string;
  // External link the visitor opens in a new tab (often === liveUrl).
  externalUrl?: string;
  // Accent color override for the project hairlines + dot.
  accent?: string;
};

export const projects: Project[] = [
  {
    slug: "ops-pulse",
    index: "01",
    title: "Ops Pulse",
    tagline: "Real-time restaurant operations built on Snowflake.",
    description:
      "A live operations layer for restaurants. Snowpipe Streaming pipes order and inventory events into Dynamic Tables, serverless alerts flag anomalies as they happen, and a Cortex Analyst assistant answers plain-English questions against the warehouse with row-level governance.",
    year: "2026",
    role: "Product, Data Engineering, AI",
    stack: ["Next.js", "Snowflake", "Snowpipe", "Cortex Analyst"],
    liveUrl: "https://claude1-topaz.vercel.app",
    externalUrl: "https://claude1-topaz.vercel.app",
    accent: "#3E6B85"
  },
  {
    slug: "haulhub",
    index: "02",
    title: "HaulHub.co",
    tagline: "Automated bidding site for vetted heavy-vehicle transport.",
    description:
      "A two-sided marketplace pairing shippers with vetted carriers for heavy commercial equipment. Built for trust, transparent pricing, and the kind of operational rigor freight has historically lacked.",
    year: "2026",
    role: "Product, Design, Engineering",
    stack: ["Next.js", "Postgres", "Stripe", "Mapbox"],
    liveUrl: "https://haulhub.co",
    externalUrl: "https://haulhub.co",
    accent: "#1F3A5F"
  },
  {
    slug: "wtga",
    index: "03",
    title: "WTGA.live",
    tagline: "Find every game. Optimize streaming subscriptions.",
    description:
      "Where The Game At — a fast finder for live sports streams that doubles as a streaming-service optimizer. Built for the moment between sitting down on the couch and realizing the game you wanted is on a network you forgot you have, and for trimming the subscriptions you never actually use.",
    year: "2026",
    role: "Design, Engineering, Product",
    stack: ["Next.js", "TypeScript", "Tailwind", "Edge"],
    liveUrl: "https://wtga.live",
    externalUrl: "https://wtga.live",
    accent: "#B4513E"
  },
  {
    slug: "nashville-biohacking",
    index: "04",
    title: "Nashville Bio-hacking",
    tagline: "Brand and booking for a longevity & performance studio.",
    description:
      "A brand and membership platform for a Nashville longevity and bio-hacking studio — recovery protocols, performance tracking, and class booking wrapped in an editorial identity with frictionless onboarding.",
    year: "2026",
    role: "Design, Engineering",
    stack: ["Next.js", "Sanity", "Tailwind"],
    liveUrl: "https://nashvillebiohacking.com",
    externalUrl: "https://nashvillebiohacking.com",
    accent: "#7B6E5A"
  },
  {
    slug: "deepcount",
    index: "05",
    title: "DeepCount.co",
    tagline: "Baseball analytics tools — the cuts coaches actually use.",
    description:
      "A pybaseball-powered analytics platform for college coaching staffs. Spray charts, plate-discipline shifts, opposing-pitcher decks — built around what coaches actually scribble on a whiteboard the night before a game.",
    year: "2026",
    role: "Product, Engineering, Data",
    stack: ["Next.js", "Python", "pybaseball", "Postgres"],
    liveUrl: "https://deepcount.co",
    externalUrl: "https://deepcount.co",
    accent: "#2D5F4F"
  },
  {
    slug: "casequestions",
    index: "06",
    title: "CaseQuestions.ai",
    tagline: "An AI sparring partner for case and fit interviews.",
    description:
      "AI-driven case and fit interview practice tuned to eight consulting firms: MBB, Deloitte, Accenture, EY-Parthenon, Oliver Wyman, and Strategy&. Voice-first drills with on-demand coaching that surfaces a hint, a clarifying question, or a model answer the moment you stall.",
    year: "2026",
    role: "Product, Engineering, AI",
    stack: ["Next.js", "Claude API", "Neon", "Stripe"],
    liveUrl: "https://casequestions.ai",
    externalUrl: "https://casequestions.ai",
    accent: "#6E3B3F"
  },
  {
    slug: "fieldpath",
    index: "07",
    title: "FieldPath",
    tagline: "An operating system for medical device sales reps.",
    description:
      "A purpose-built sales OS for medical device reps in the field — schedule, tasks, pipeline by stage, case volume, top procedures, and spend per HCP in one workspace. Logs activity automatically so reps stay selling instead of typing.",
    year: "2026",
    role: "Product, Engineering, Design",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://fieldpath-crm.vercel.app",
    externalUrl: "https://fieldpath-crm.vercel.app",
    accent: "#977125"
  }
];

export const featuredProjects = projects;
