"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ProjectsStats() {
  const t = useTranslations("projects.stats.items");

  const statsKeys = ["projects", "clients", "team", "experience"];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#f900fe] to-[#f0f0f0] mb-2">
                {t(`${key}.value`)}
              </div>
              <div className="text-sm md:text-base text-[#f0f0f0]/60 font-semibold uppercase tracking-wider">
                {t(`${key}.label`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
