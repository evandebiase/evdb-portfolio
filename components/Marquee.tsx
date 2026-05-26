type Props = {
  items: string[];
  speed?: "slow" | "normal";
};

export function Marquee({ items, speed = "normal" }: Props) {
  const list = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden border-y border-ink/10 bg-cream-50 py-8">
      <div
        className="flex w-max items-center gap-12 animate-marquee"
        style={{ animationDuration: speed === "slow" ? "60s" : "40s" }}
      >
        {list.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-serif text-3xl tracking-tight text-ink md:text-5xl"
          >
            {item}
            <span aria-hidden className="text-clay">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
