"use client";

import { motion } from "framer-motion";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-linear-to-br from-[#501454] to-[#8b2490] flex items-center justify-center text-8xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#8b2490] font-semibold mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#8b2490] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex items-center text-[#8b2490] font-semibold">
                    View Project
                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-200">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
