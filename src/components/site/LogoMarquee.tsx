const logos = [
  "Northwind", "Acme Corp", "Globex", "Initech", "Umbrella",
  "Stark Industries", "Wayne Enterprises", "Hooli", "Pied Piper",
  "Soylent", "Massive Dynamic", "Cyberdyne",
];

export const LogoMarquee = () => {
  const loop = [...logos, ...logos];

  return (
    <section className="py-14 md:py-20 bg-background border-y border-border overflow-hidden">
      <div className="container mb-8">
        <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          / Trusted by enterprise teams across 180+ countries
        </p>
      </div>

      <div className="relative">
        <div className="flex w-max animate-marquee-slow gap-16 px-8">
          {loop.map((name, i) => (
            <div
              key={i}
              className="font-display text-2xl md:text-3xl font-semibold text-muted-foreground/60 hover:text-primary transition-colors whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};
