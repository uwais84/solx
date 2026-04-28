import { LineChart } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";

const Consulting = () => (
  <main className="min-h-screen bg-background">
    <Header />
    <ServicePageLayout
      eyebrow="Strategic Consulting"
      title="Roadmaps that"
      highlight="actually ship."
      description="Advisory across digital transformation, ROI strategy, and product roadmaps — grounded in measurable outcomes, not slideware."
      icon={LineChart}
      outcomes={[
        { metric: "47%", label: "Avg. cost reduction" },
        { metric: "6 wks", label: "Strategy to plan" },
        { metric: "92%", label: "Roadmap delivery rate" },
        { metric: "20+", label: "Fortune 500 clients" },
      ]}
      capabilities={[
        { title: "Digital transformation", body: "Operating-model and platform strategy aligned to business outcomes and timelines." },
        { title: "ROI & growth strategy", body: "Investment cases, unit economics, and KPI trees that survive board scrutiny." },
        { title: "Product roadmaps", body: "Quarterly OKRs, prioritization, and dependency mapping across product lines." },
        { title: "Org & ops alignment", body: "Team topology, RACI, and operating cadence that lets engineering ship faster." },
      ]}
      process={[
        { step: "01", title: "Diagnose", body: "Stakeholder interviews, data review, and a candid baseline assessment." },
        { step: "02", title: "Decide", body: "Options, trade-offs, and a recommended path with clear success metrics." },
        { step: "03", title: "Drive", body: "Embedded with your teams to ensure decisions become delivered outcomes." },
      ]}
    />
    <Footer />
  </main>
);

export default Consulting;
