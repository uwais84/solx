import { motion } from "framer-motion";
import { ShieldCheck, Globe2, Server, Activity, Lock, Gauge } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";
import { trustImages } from "@/lib/carouselImages";

const signals = [
  { icon: Activity, label: "99.9% Uptime", desc: "SLA-backed availability across regions." },
  { icon: Globe2, label: "Global CDN", desc: "Edge delivery in 180+ countries." },
  { icon: Server, label: "Scalable Architecture", desc: "Horizontal scaling, zero-downtime deploys." },
  { icon: ShieldCheck, label: "SOC 2 Ready", desc: "Audit-aligned security controls." },
  { icon: Lock, label: "Encrypted by Default", desc: "TLS 1.3, AES-256, KMS-managed keys." },
  { icon: Gauge, label: "Sub-100ms p95", desc: "Performance budgets enforced in CI." },
];

export const TrustSignals = () => {
  return (
    <section className="relative py-24 md:py-32 bg-navy-deep overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="container relative">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
            / Infrastructure
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold text-primary-foreground leading-tight">
            Built for the workloads that can't fail.
          </h2>
          <p className="mt-5 text-primary-foreground/70 text-lg">
            Every platform we ship is designed for resilience, observability, and
            measurable performance — from day one.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <ImageCarousel images={trustImages} variant="fade" aspect="aspect-[16/7]" />
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {signals.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-navy-deep/80 p-8 group hover:bg-navy-soft/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 grid place-items-center">
                  <s.icon className="text-accent" size={18} />
                </div>
                <div className="font-display font-semibold text-primary-foreground">
                  {s.label}
                </div>
                <div className="ml-auto h-2 w-2 rounded-full bg-accent animate-pulse-soft" />
              </div>
              <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
