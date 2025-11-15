"use client";

import ProjectsHero from "@/components/projects/projects-hero";
import ProjectsGrid, {
  type Project,
} from "@/components/projects/projects-grid";
import ProjectsStats from "@/components/projects/projects-stats";
import ProjectsCTA from "@/components/projects/projects-cta";

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Campaign 2024",
    size: "large-h",
    image: "/images/projects/1.jpg",
    description: "Comprehensive digital marketing campaign that drives engagement and builds brand awareness across multiple platforms.",
    slug: "brand-campaign-2024",
  },
  {
    id: 2,
    title: "Product Launch Video",
    size: "large-h",
    image: "/images/projects/2.jpg",
    description: "High-impact product launch commercial that captures attention and drives conversions through compelling storytelling.",
    slug: "product-launch-video",
  },
  {
    id: 3,
    title: "Corporate Event",
    size: "small",
    image: "/images/projects/3.jpg",
    description: "Large-scale corporate event management with seamless execution and memorable experiences.",
    slug: "corporate-event",
  },
  {
    id: 4,
    title: "Brand Identity Design",
    size: "large-w",
    image: "/images/projects/4.jpg",
    description: "Complete brand identity redesign that reflects modern values and connects with target audiences.",
    slug: "brand-identity-design",
  },
  {
    id: 5,
    title: "Social Media Campaign",
    size: "large-v",
    image: "/images/projects/5.jpg",
    description: "Viral social media marketing campaign that creates buzz and drives organic reach across platforms.",
    slug: "social-media-campaign",
  },
  {
    id: 6,
    title: "Documentary Series",
    size: "large-h",
    image: "/images/projects/6.jpg",
    description: "Multi-episode documentary production that tells compelling stories and engages audiences.",
    slug: "documentary-series",
  },
  {
    id: 7,
    title: "Product Activation",
    size: "small",
    image: "/images/projects/7.jpg",
    description: "Interactive product activation experience that creates memorable brand touchpoints.",
    slug: "product-activation",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
      <ProjectsStats />
      <ProjectsCTA />
    </div>
  );
}
