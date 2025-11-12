"use client";

import { useState } from "react";
import ProjectsHero from "@/components/projects/projects-hero";
import ProjectsFilter from "@/components/projects/projects-filter";
import ProjectsGrid, {
  type Project,
} from "@/components/projects/projects-grid";
import ProjectsStats from "@/components/projects/projects-stats";
import ProjectsCTA from "@/components/projects/projects-cta";

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Campaign 2024",
    category: "Digital",
    image: "🎨",
    description: "Comprehensive digital marketing campaign",
  },
  {
    id: 2,
    title: "Product Launch Video",
    category: "Video",
    image: "🎬",
    description: "High-impact product launch commercial",
  },
  {
    id: 3,
    title: "Corporate Event",
    category: "Events",
    image: "🎪",
    description: "Large-scale corporate event management",
  },
  {
    id: 4,
    title: "Brand Identity Design",
    category: "Branding",
    image: "✨",
    description: "Complete brand identity redesign",
  },
  {
    id: 5,
    title: "Social Media Campaign",
    category: "Digital",
    image: "📱",
    description: "Viral social media marketing campaign",
  },
  {
    id: 6,
    title: "Documentary Series",
    category: "Video",
    image: "📹",
    description: "Multi-episode documentary production",
  },
  {
    id: 7,
    title: "Product Activation",
    category: "Events",
    image: "🎯",
    description: "Interactive product activation experience",
  },
  {
    id: 8,
    title: "Rebranding Project",
    category: "Branding",
    image: "🚀",
    description: "Complete brand transformation",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="pt-20">
      <ProjectsHero />
      <ProjectsFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ProjectsGrid projects={filteredProjects} />
      <ProjectsStats />
      <ProjectsCTA />
    </div>
  );
}
