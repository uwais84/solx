import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";
import { heroImages } from "@/lib/carouselImages";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-36 bg-hero overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-primary-foreground/80 mb-8"
        >
          <Sparkles size={14} className="text-accent" />
          Enterprise-grade digital architecture
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-primary-foreground leading-[1.05]"
        >
          Engineered platforms for <span className="text-gradient">global scale</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/70 leading-relaxed"
        >
          We design learning, build technology, and architect digital strategy for
          enterprises that demand performance, security, and uncompromising craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact">
            <Button variant="hero" size="lg" className="group">
              Start a project
              <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#services">
            <Button variant="ghostLight" size="lg">Explore services</Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16"
        >
          <ImageCarousel images={heroImages} variant="slide" aspect="aspect-[16/8]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
        >
          {[
            { k: "99.9%", v: "Platform Uptime" },
            { k: "180+", v: "Countries Served" },
            { k: "50ms", v: "Global Edge Latency" },
            { k: "SOC 2", v: "Compliance Ready" },
          ].map((s) => (
            <div key={s.v} className="bg-navy-deep/60 px-6 py-7">
              <div className="text-2xl md:text-3xl font-display font-semibold text-primary-foreground">
                {s.k}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/50">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
