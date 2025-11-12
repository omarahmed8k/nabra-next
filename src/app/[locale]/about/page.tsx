import AboutHero from "@/components/about/about-hero";
import AboutStory from "@/components/about/about-story";
import AboutMissionVision from "@/components/about/about-mission-vision";
import AboutValues from "@/components/about/about-values";
import AboutStats from "@/components/about/about-stats";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Nabra",
  description: "Learn more about Nabra and our journey",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      <AboutValues />
      <AboutStats />
    </div>
  );
}
