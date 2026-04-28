import { Megaphone } from "lucide-react";

const messages = [
  "New: Axion AI-powered Learning Architect — now in private beta",
  "Now SOC 2 Type II compliant — enterprise security as standard",
  "Featured: How a Fortune 500 cut LMS cost by 47% with Axion",
  "Hiring: Senior Solution Architects across NA, EU & APAC",
  "Webinar — Scaling Learning Platforms to 1M+ users · Register now",
];

export const AnnouncementBar = () => {
  // Duplicate the list so the marquee loops seamlessly with -50% translate.
  const loop = [...messages, ...messages];

  return (
    <div className="relative z-[60] bg-navy-deep text-primary-foreground border-b border-white/10 overflow-hidden">
      <div className="flex items-center">
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground text-xs font-mono uppercase tracking-wider shrink-0">
          <Megaphone size={14} />
          Latest
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap py-2">
            {loop.map((m, i) => (
              <span
                key={i}
                className="mx-8 text-xs md:text-sm text-primary-foreground/80 inline-flex items-center gap-3"
              >
                <span className="h-1 w-1 rounded-full bg-accent" />
                {m}
              </span>
            ))}
          </div>
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-navy-deep to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-navy-deep to-transparent" />
        </div>
      </div>
    </div>
  );
};
