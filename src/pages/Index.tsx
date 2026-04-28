import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { TrustSignals } from "@/components/site/TrustSignals";
import { LeadForm } from "@/components/site/LeadForm";
import { Footer } from "@/components/site/Footer";
import { LogoMarquee } from "@/components/site/LogoMarquee";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LogoMarquee />
      <Services />
      <TrustSignals />
      <LeadForm />
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Axion",
            description:
              "Enterprise digital architects offering Learning Design, Technology Solutions, Strategic Consulting and Web & App Development.",
            url: "/",
            areaServed: "Global",
          }),
        }}
      />
    </main>
  );
};

export default Index;
