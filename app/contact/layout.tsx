import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — EVDB.work",
  description:
    "Get in touch with EVDB.work — the independent studio of Evan DeBiase. Start a conversation about product, brand, or engineering work."
};

export default function ContactLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
