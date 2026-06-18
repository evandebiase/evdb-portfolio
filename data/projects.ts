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
    slug: "haulhub",
    index: "01",
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
    slug: "nashville-biohacking",
    index: "02",
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
    index: "03",
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
    slug: "credata",
    index: "04",
    title: "CREdata.co",
    tagline: "The data layer for commercial real estate.",
    description:
      "A CRE intelligence platform that pulls scattered market signals — lease comps, ownership changes, tenant movements — into one workspace where the next deal becomes obvious before anyone else sees it.",
    year: "2026",
    role: "Product, Engineering, Data",
    stack: ["Next.js", "TypeScript", "Postgres", "Mapbox"],
    liveUrl: "https://credata.co",
    externalUrl: "https://credata.co",
    accent: "#4A5C6A"
  }
];

export const featuredProjects = projects;
