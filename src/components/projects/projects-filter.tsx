"use client";

import { useTranslations } from "next-intl";

interface ProjectsFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectsFilter({
  activeCategory,
  onCategoryChange,
}: ProjectsFilterProps) {
  const t = useTranslations("projects");

  const categories = [
    t("categories.all"),
    t("categories.digital"),
    t("categories.video"),
    t("categories.events"),
    t("categories.branding"),
  ];

  
  return (
    <section className="py-12 bg-black border-b border-[#f0f0f0]/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#f900fe] text-[#f0f0f0] shadow-lg shadow-[#f900fe]/50"
                  : "bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0]/60 hover:bg-[#f0f0f0]/5 hover:text-[#f0f0f0]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
