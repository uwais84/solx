import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServicePageProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  icon: LucideIcon;
  capabilities: { title: string; body: string }[];
  outcomes: { metric: string; label: string }[];
  process: { step: string; title: string; body: string }[];
}

export const ServicePageLayout = ({
  eyebrow,
  title,
  highlight,
  description,
  icon: Icon,
  capabilities,
  outcomes,
  process,
}: ServicePageProps) => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hero overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[120px]" />

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-wider text-primary-foreground/80 mb-8"
          >
            <Icon size={14} className="text-accent" />
            {eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-4xl text-4xl md:text-6xl font-display font-semibold tracking-tight text-primary-foreground leading-[1.05]"
          >
            {title} <span className="text-gradient">{highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg text-primary-foreground/70 leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/#contact">
              <Button variant="hero" size="lg" className="group">
                Start a project
                <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/">
              <Button variant="ghostLight" size="lg">All services</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 md:py-20 bg-background border-b border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {outcomes.map((o) => (
            <div key={o.label} className="bg-card px-6 py-7">
              <div className="text-2xl md:text-3xl font-display font-semibold text-primary">{o.metric}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{o.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">/ Capabilities</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold text-primary">
              What we deliver.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="p-7 rounded-2xl border border-border bg-card hover:border-accent/40 hover:shadow-elegant transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-accent/10 grid place-items-center shrink-0">
                    <Check size={16} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-primary">{c.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-slate-soft">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">/ Engagement</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold text-primary">
              How we work.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {process.map((p) => (
              <div key={p.step} className="p-7 rounded-2xl bg-card border border-border">
                <div className="text-xs font-mono text-accent">{p.step}</div>
                <h3 className="mt-3 text-xl font-display font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy-deep">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-primary-foreground">
            Ready to architect what's next?
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Talk to a senior architect — no sales reps, no decks, just a real plan.
          </p>
          <div className="mt-8">
            <Link to="/#contact">
              <Button variant="hero" size="lg">Start a conversation</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
