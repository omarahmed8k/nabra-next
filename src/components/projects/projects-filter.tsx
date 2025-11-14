"use client";

const categories = ["All", "Digital", "Video", "Events", "Branding"];

interface ProjectsFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectsFilter({
  activeCategory,
  onCategoryChange,
}: ProjectsFilterProps) {
  return (
    <section className="py-12 bg-gray-950 border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#501454] text-white shadow-lg shadow-[#501454]/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
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
