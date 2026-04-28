import { Layers } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";

const Development = () => (
  <main className="min-h-screen bg-background">
    <Header />
    <ServicePageLayout
      eyebrow="Web & App Development"
      title="Full-stack delivery,"
      highlight="end to end."
      description="From product to platform — web, iOS, Android, infrastructure, security, SEO and growth analytics under one roof."
      icon={Layers}
      outcomes={[
        { metric: "100/100", label: "Lighthouse target" },
        { metric: "<1.2s", label: "LCP P75" },
        { metric: "iOS+Android", label: "Single codebase" },
        { metric: "24/7", label: "Managed support" },
      ]}
      capabilities={[
        { title: "Full-stack web & mobile", body: "React, Next.js, React Native, and native modules where they matter." },
        { title: "Managed hosting & scaling", body: "Edge networks, autoscaling, and disaster recovery built into every release." },
        { title: "Security & maintenance", body: "Pen-tested by default, with patch SLAs and dependency hygiene baked in." },
        { title: "SEO & growth analytics", body: "Technical SEO, schema, and event analytics that compound over time." },
      ]}
      process={[
        { step: "01", title: "Define", body: "Product brief, technical spike, and a tight delivery plan in two weeks." },
        { step: "02", title: "Develop", body: "Two-week sprints, automated tests, and demo-driven progress." },
        { step: "03", title: "Deploy", body: "Phased rollout, monitoring, and a clean handover or ongoing partnership." },
      ]}
    />
    <Footer />
  </main>
);

export default Development;
