import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Cpu,
  LineChart,
  Layers,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    id: "learning",
    href: "/learning-design",
    icon: GraduationCap,
    title: "Learning Design",
    tagline: "Pedagogy meets product.",
    description:
      "High-impact instructional design, curriculum architecture, and content engineering — built to perform at enterprise scale.",
    points: ["Curriculum architecture", "Interactive courseware", "Assessment systems", "Accessibility (WCAG 2.2)"],
  },
  {
    id: "technology",
    href: "/technology",
    icon: Cpu,
    title: "Technology Solutions",
    tagline: "LMS, CMS, cloud — engineered.",
    description:
      "Platform integration, custom LMS/CMS engineering, and cloud architecture optimized for high-traffic global delivery.",
    points: ["LMS / CMS engineering", "API & systems integration", "Cloud architecture", "Data & analytics pipelines"],
  },
  {
    id: "consulting",
    href: "/consulting",
    icon: LineChart,
    title: "Strategic Consulting",
    tagline: "Roadmaps that ship.",
    description:
      "Advisory across digital transformation, ROI strategy, and product roadmaps — grounded in measurable outcomes.",
    points: ["Digital transformation", "ROI & growth strategy", "Product roadmaps", "Org & ops alignment"],
  },
  {
    id: "development",
    href: "/development",
    icon: Layers,
    title: "Web & App Development",
    tagline: "Full-stack, end-to-end.",
    description:
      "From product to platform — web, iOS, Android, infrastructure, security, SEO and growth analytics under one roof.",
    points: ["Full-stack web & mobile", "Managed hosting & scaling", "Security & maintenance", "SEO & growth analytics"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
            / Service Pillars
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold text-primary leading-tight">
            Four disciplines.<br />One architectural standard.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Every engagement is delivered by senior practitioners — under a single,
            accountable architecture.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={s.href}
                id={s.id}
                className="group relative block p-8 md:p-10 rounded-2xl border border-border bg-card hover:border-accent/40 hover:shadow-elegant transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-32 w-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all" />

                <div className="relative flex items-start justify-between">
                  <div className="h-12 w-12 rounded-xl bg-primary/5 border border-primary/10 grid place-items-center group-hover:bg-accent group-hover:border-accent transition-all">
                    <s.icon className="text-primary group-hover:text-accent-foreground transition-colors" size={22} />
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" size={20} />
                </div>

                <div className="relative mt-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2">
                    {s.tagline}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="text-sm text-foreground/80 flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
