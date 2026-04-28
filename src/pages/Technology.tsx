import { Cpu } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";

const Technology = () => (
  <main className="min-h-screen bg-background">
    <Header />
    <ServicePageLayout
      eyebrow="Technology Solutions"
      title="LMS, CMS, cloud —"
      highlight="engineered end to end."
      description="Platform integration, custom LMS/CMS engineering, and cloud architecture optimized for high-traffic global delivery."
      icon={Cpu}
      outcomes={[
        { metric: "99.99%", label: "Service uptime" },
        { metric: "50ms", label: "Edge latency P95" },
        { metric: "1M+", label: "Concurrent users" },
        { metric: "SOC 2", label: "Type II ready" },
      ]}
      capabilities={[
        { title: "LMS / CMS engineering", body: "Custom builds and headless integrations across Moodle, Canvas, Drupal, Strapi, and bespoke stacks." },
        { title: "API & systems integration", body: "Identity, billing, HRIS and data-warehouse pipelines with first-class observability." },
        { title: "Cloud architecture", body: "Multi-region AWS, GCP, and Azure deployments with IaC, autoscaling, and cost guardrails." },
        { title: "Data & analytics", body: "Event pipelines, warehouses, and dashboards that turn product usage into decisions." },
      ]}
      process={[
        { step: "01", title: "Architect", body: "Reference architecture, capacity plan, and security model agreed upfront." },
        { step: "02", title: "Build", body: "Iterative delivery with CI/CD, automated tests, and weekly demos." },
        { step: "03", title: "Operate", body: "24/7 SRE, SLOs, and continuous performance and cost optimization." },
      ]}
    />
    <Footer />
  </main>
);

export default Technology;
