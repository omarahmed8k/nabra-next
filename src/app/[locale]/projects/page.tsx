"use client";

import ProjectsHero from "@/components/projects/projects-hero";
import ProjectsGrid, {
  type Project,
} from "@/components/projects/projects-grid";
import ProjectsStats from "@/components/projects/projects-stats";
import ProjectsCTA from "@/components/projects/projects-cta";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("projects");

  const projects: Project[] = [
    {
      id: 1,
      title: t("items.1.title"),
      size: "large-h",
      image: "/images/projects/1.jpg",
      description: t("items.1.description"),
      slug: "brand-campaign-2024",
    },
    {
      id: 2,
      title: t("items.2.title"),
      size: "large-h",
      image: "/images/projects/2.jpg",
      description: t("items.2.description"),
      slug: "product-launch-video",
    },
    {
      id: 3,
      title: t("items.3.title"),
      size: "small",
      image: "/images/projects/3.jpg",
      description: t("items.3.description"),
      slug: "corporate-event",
    },
    {
      id: 4,
      title: t("items.4.title"),
      size: "large-w",
      image: "/images/projects/4.jpg",
      description: t("items.4.description"),
      slug: "brand-identity-design",
    },
    {
      id: 5,
      title: t("items.5.title"),
      size: "large-v",
      image: "/images/projects/5.jpg",
      description: t("items.5.description"),
      slug: "social-media-campaign",
    },
    {
      id: 6,
      title: t("items.6.title"),
      size: "large-h",
      image: "/images/projects/6.jpg",
      description: t("items.6.description"),
      slug: "documentary-series",
    },
    {
      id: 7,
      title: t("items.7.title"),
      size: "small",
      image: "/images/projects/7.jpg",
      description: t("items.7.description"),
      slug: "product-activation",
    },
  ];

  return (
    <div>
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
      <ProjectsStats />
      <ProjectsCTA />
    </div>
  );
}
