"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface Project {
  id: number;
  title: string;
  size: string;
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative overflow-hidden rounded-[30px] group cursor-pointer
                col-span-2
                ${project.size === "large-h" ? "md:col-span-2 md:row-span-1" : ""}
                ${
                  project.size === "large-w"
                    ? "md:col-span-2 md:row-span-1"
                    : ""
                }
                ${project.size === "large-v" ? "md:col-span-1 md:row-span-2" : ""}
                ${project.size === "small" ? "md:col-span-1 md:row-span-1" : ""}
              `}
              style={{
                background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.1) 2.21002%, rgba(255, 255, 255, 0) 100%)',
                backdropFilter: 'blur(10px)',
                border: '0px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              {/* Glass Effect Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  backdropFilter: 'blur(5px)',
                  transform: 'rotate(9deg)',
                  transformOrigin: '50% 50%',
                }}
              >
                <div 
                  className="w-full h-full"
                  style={{
                    backdropFilter: 'blur(0px)',
                    opacity: 0.17,
                    background: 'linear-gradient(114deg, rgb(255, 255, 255) 47.7477%, rgba(255, 255, 255, 0.08) 50.8195%)',
                  }}
                />
              </div>

              {/* Title Overlay */}
              <div className="absolute top-8 left-8 right-8 z-10">
                <h6 
                  className="text-white text-center font-bold text-3xl md:text-4xl leading-none"
                  style={{ textShadow: 'none' }}
                >
                  {project.title}
                </h6>
              </div>

              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 bg-white"
                />
                {/* Image Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(165deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
                    opacity: 0.79,
                  }}
                />
              </div>

              {/* Content Text (appears on hover) */}
              <div className="absolute inset-x-8 top-24 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white/80 text-center text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              {/* Background Lines (appears on hover) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 opacity-100">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'url(https://framerusercontent.com/images/UBfETRmMWvNW1BI0VHLyvTjbH4k.svg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
