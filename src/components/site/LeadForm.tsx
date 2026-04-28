import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  GraduationCap,
  Cpu,
  LineChart,
  Layers,
} from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";
import { leadImages } from "@/lib/carouselImages";

const departments = [
  { id: "learning", label: "Learning Design", icon: GraduationCap, email: "learning@sol-x.dev" },
  { id: "technology", label: "Technology Solutions", icon: Cpu, email: "tech@sol-x.dev" },
  { id: "consulting", label: "Strategic Consulting", icon: LineChart, email: "consulting@sol-x.dev" },
  { id: "development", label: "Web & App Development", icon: Layers, email: "build@sol-x.dev" },
];

const budgets = ["< $25k", "$25k – $75k", "$75k – $200k", "$200k+"];

const schema = z.object({
  department: z.string().min(1),
  budget: z.string().min(1),
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Tell us a little more").max(1200),
});

export const LeadForm = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    department: "",
    budget: "",
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const next = () => setStep((s) => Math.min(s + 1, 2));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const set = <K extends keyof typeof data>(k: K, v: string) =>
    setData((d) => ({ ...d, [k]: v }));

  const submit = () => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please review your details");
      return;
    }
    const dept = departments.find((d) => d.id === data.department);
    setSubmitted(true);
    toast.success(`Routed to ${dept?.label ?? "the right team"} — we'll reply within one business day.`);
  };

  const dept = departments.find((d) => d.id === data.department);

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background">
      <div className="container grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
            / Start a project
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold text-primary leading-tight">
            Let's architect your next platform.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Tell us a bit about the work. Your inquiry is routed directly to the
            relevant department lead — no gatekeepers.
          </p>

          <div className="mt-10 space-y-4">
            {departments.map((d) => (
              <div key={d.id} className="flex items-center gap-3 text-sm">
                <div className="h-8 w-8 rounded-md bg-primary/5 border border-primary/10 grid place-items-center">
                  <d.icon size={15} className="text-primary" />
                </div>
                <span className="text-foreground font-medium">{d.label}</span>
                <span className="text-muted-foreground font-mono text-xs ml-auto">
                  {d.email}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <ImageCarousel images={leadImages} variant="slide" aspect="aspect-[16/10]" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative rounded-2xl border border-border bg-card shadow-elegant p-6 md:p-10">
            {!submitted ? (
              <>
                <div className="flex items-center gap-2 mb-8">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all ${
                        i <= step ? "bg-accent" : "bg-border"
                      }`}
                    />
                  ))}
                  <span className="ml-3 text-xs font-mono text-muted-foreground">
                    {String(step + 1).padStart(2, "0")} / 03
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 0 && (
                      <div>
                        <h3 className="font-display text-xl md:text-2xl text-primary font-semibold">
                          Which team should handle this?
                        </h3>
                        <div className="mt-6 grid sm:grid-cols-2 gap-3">
                          {departments.map((d) => {
                            const active = data.department === d.id;
                            return (
                              <button
                                key={d.id}
                                onClick={() => set("department", d.id)}
                                className={`text-left p-4 rounded-xl border transition-all ${
                                  active
                                    ? "border-accent bg-accent/5 shadow-soft"
                                    : "border-border hover:border-primary/30"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <d.icon
                                    size={18}
                                    className={active ? "text-accent" : "text-primary"}
                                  />
                                  <span className="font-medium text-foreground">
                                    {d.label}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {step === 1 && (
                      <div>
                        <h3 className="font-display text-xl md:text-2xl text-primary font-semibold">
                          What's the project budget?
                        </h3>
                        <div className="mt-6 grid grid-cols-2 gap-3">
                          {budgets.map((b) => {
                            const active = data.budget === b;
                            return (
                              <button
                                key={b}
                                onClick={() => set("budget", b)}
                                className={`p-4 rounded-xl border font-medium transition-all ${
                                  active
                                    ? "border-accent bg-accent/5 text-foreground shadow-soft"
                                    : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                                }`}
                              >
                                {b}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-5">
                        <h3 className="font-display text-xl md:text-2xl text-primary font-semibold">
                          A few details and you're done.
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Full name</Label>
                            <Input
                              id="name"
                              value={data.name}
                              maxLength={80}
                              onChange={(e) => set("name", e.target.value)}
                              placeholder="Jane Doe"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Work email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={data.email}
                              maxLength={160}
                              onChange={(e) => set("email", e.target.value)}
                              placeholder="jane@company.com"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            value={data.company}
                            maxLength={120}
                            onChange={(e) => set("company", e.target.value)}
                            placeholder="Acme Inc."
                          />
                        </div>
                        <div>
                          <Label htmlFor="message">Project brief</Label>
                          <Textarea
                            id="message"
                            value={data.message}
                            maxLength={1200}
                            onChange={(e) => set("message", e.target.value)}
                            placeholder="A short description of what you'd like to build, scale, or rethink."
                            rows={5}
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between">
                  <Button
                    variant="ghost"
                    onClick={prev}
                    disabled={step === 0}
                    className="text-muted-foreground"
                  >
                    <ArrowLeft size={16} className="mr-1" /> Back
                  </Button>
                  {step < 2 ? (
                    <Button
                      variant="hero"
                      onClick={next}
                      disabled={
                        (step === 0 && !data.department) ||
                        (step === 1 && !data.budget)
                      }
                    >
                      Continue <ArrowRight size={16} className="ml-1" />
                    </Button>
                  ) : (
                    <Button variant="hero" onClick={submit}>
                      Send inquiry <ArrowRight size={16} className="ml-1" />
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-10"
              >
                <div className="mx-auto h-14 w-14 rounded-full bg-accent/10 grid place-items-center">
                  <Check className="text-accent" size={26} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-primary font-semibold">
                  Inquiry received.
                </h3>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  Routed to <span className="text-foreground font-medium">{dept?.label}</span> ({dept?.email}).
                  A senior lead will reply within one business day.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
