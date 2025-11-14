"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCTAButton from "../shared/animated-cta-button";

const projects = [
  { id: 1, size: "large-h", image: "/images/projects/1.jpg" },
  { id: 2, size: "large-h", image: "/images/projects/2.jpg" },
  { id: 3, size: "small", image: "/images/projects/3.jpg" },
  { id: 4, size: "large-w", image: "/images/projects/4.jpg" },
  { id: 5, size: "large-v", image: "/images/projects/5.jpg" },
  { id: 6, size: "large-h", image: "/images/projects/6.jpg" },
  { id: 7, size: "small", image: "/images/projects/7.jpg" },
];

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative overflow-hidden rounded-3xl group cursor-pointer
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
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={`Project ${project.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 bg-white"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-lg font-semibold">View Project</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center py-10">
          <AnimatedCTAButton href="/contact">{t("see")}</AnimatedCTAButton>
        </div>
      </div>
    </section>
  );
}
