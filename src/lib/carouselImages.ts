// Curated Unsplash imagery (enterprise / tech / strategy aesthetic).
// Using direct Unsplash CDN URLs with sizing params for performance.

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const heroImages = [
  { src: u("photo-1497366216548-37526070297c"), alt: "Modern enterprise workspace with collaborative teams" },
  { src: u("photo-1518770660439-4636190af475"), alt: "Macro view of advanced computing hardware" },
  { src: u("photo-1451187580459-43490279c0fa"), alt: "Global network connectivity visualization" },
  { src: u("photo-1531297484001-80022131f5a1"), alt: "Engineer working on a high-resolution display" },
];

export const trustImages = [
  { src: u("photo-1558494949-ef010cbdcc31"), alt: "Server room with racks of secure infrastructure" },
  { src: u("photo-1573164713714-d95e436ab8d6"), alt: "Cybersecurity dashboard on multiple monitors" },
  { src: u("photo-1486406146926-c627a92ad1ab"), alt: "Data center cooling and power architecture" },
  { src: u("photo-1551288049-bebda4e38f71"), alt: "Real-time analytics dashboard" },
];

export const leadImages = [
  { src: u("photo-1556761175-5973dc0f32e7"), alt: "Strategy session in a modern boardroom" },
  { src: u("photo-1521737711867-e3b97375f902"), alt: "Architects reviewing platform blueprints" },
  { src: u("photo-1542744173-8e7e53415bb0"), alt: "Cross-functional team planning a roadmap" },
  { src: u("photo-1600880292203-757bb62b4baf"), alt: "Executive consultation with digital strategists" },
];
