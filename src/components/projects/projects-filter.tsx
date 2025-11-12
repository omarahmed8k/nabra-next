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
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/50"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
