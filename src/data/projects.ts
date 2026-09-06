export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;

  overview: string;
  challenge: string;
  solution: string;

  services: string[];
  technologies: string[];
  year: string;

  image?: string;
  gallery?: string[];
  url?: string;

  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "perfect-thorough-cleaning",
    number: "01",
    title: "Perfect Thorough Cleaning Services",
    category: "Business website",

    description:
      "A professional business website designed to establish trust, showcase cleaning services, and make it easy for customers to get in touch.",

    overview:
      "Perfect Thorough Cleaning Services needed a professional online presence that could communicate the quality of their services while giving potential customers a clear path to explore services, understand pricing, and book a cleaning.",

    challenge:
      "The website needed to make a local cleaning business feel credible and established while presenting services, pricing, company information, previous work, and booking options without making the experience feel overwhelming.",

    solution:
      "We created a clean, modern business website with a strong visual identity, clear information hierarchy, service-focused layouts, pricing packages, work galleries, trust-building content, and prominent calls to action throughout the experience.",

    services: [
      "Website design",
      "UI/UX design",
      "Frontend development",
      "Responsive design",
      "Business website",
      "Conversion-focused design",
    ],

    technologies: [
      "React",
      "TypeScript",
      "CSS",
    ],

    year: "2026",

    image:
      "/projects/perfect-thorough-cleaning/hero.png",

    gallery: [
      "/projects/perfect-thorough-cleaning/services.png",
      "/projects/perfect-thorough-cleaning/about.png",
      "/projects/perfect-thorough-cleaning/gallery.png",
      "/projects/perfect-thorough-cleaning/pricing.png",
      "/projects/perfect-thorough-cleaning/cta.png",
    ],

    url:
      "https://www.perfectthoroughcleaningservice.ca/",

    featured: true,
  },

  {
    id: "teoassist",
    number: "02",
    title: "TeoAssist",
    category: "AI meeting assistant",

    description:
      "An AI-powered meeting intelligence platform designed to turn conversations into organized summaries, actionable tasks, and useful insights.",

    overview:
      "TeoAssist was designed to make meetings easier to capture, understand, and act on. The platform brings recording, transcription, AI analysis, tasks, participants, and meeting history into one workspace.",

    challenge:
      "Important information from meetings is often buried in recordings, scattered notes, or people's memories. The product needed to turn that information into something structured and useful without adding more work for the user.",

    solution:
      "We designed and developed a meeting intelligence platform centered around a simple workflow: capture the conversation, process it with AI, and turn the result into structured summaries, action items, and searchable meeting records.",

    services: [
      "Product design",
      "UI/UX design",
      "Frontend development",
      "AI integration",
      "Web application development",
      "Desktop application development",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Tauri",
      "Rust",
      "Supabase",
      "OpenAI",
    ],

    year: "2026",

    image:
      "/projects/teoassist/hero.png",

    gallery: [
      "/projects/teoassist/dashboard.png",
      "/projects/teoassist/tasks.png",
      "/projects/teoassist/participants.png",
      "/projects/teoassist/meetings.png",
    ],

    featured: true,
  },
];