import { GraduationCap } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";

const LearningDesign = () => (
  <main className="min-h-screen bg-background">
    <Header />
    <ServicePageLayout
      eyebrow="Learning Design"
      title="Pedagogy meets product —"
      highlight="engineered to scale."
      description="High-impact instructional design, curriculum architecture, and content engineering — built for enterprises that measure outcomes."
      icon={GraduationCap}
      outcomes={[
        { metric: "3.4x", label: "Avg. completion lift" },
        { metric: "WCAG 2.2", label: "Accessible by default" },
        { metric: "12 wks", label: "Avg. course delivery" },
        { metric: "40+", label: "Languages supported" },
      ]}
      capabilities={[
        { title: "Curriculum architecture", body: "Outcome-mapped programs designed around learner journeys, role pathways, and measurable competencies." },
        { title: "Interactive courseware", body: "Branching scenarios, simulations, and adaptive content built on modern web standards." },
        { title: "Assessment systems", body: "Item banks, proctoring integrations, and analytics that prove transfer of learning." },
        { title: "Accessibility & localization", body: "WCAG 2.2 AA from day one, with translation pipelines for global rollout." },
      ]}
      process={[
        { step: "01", title: "Discover", body: "Audit goals, audience, and existing assets to define the outcome model." },
        { step: "02", title: "Design", body: "Architect curriculum, interaction patterns, and assessment strategy." },
        { step: "03", title: "Deliver", body: "Engineer content, integrate with your LMS, and measure post-launch impact." },
      ]}
    />
    <Footer />
  </main>
);

export default LearningDesign;
