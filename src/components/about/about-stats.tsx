"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const stats = ["experience", "team", "projects", "partners"];

export default function AboutStats() {
  const t = useTranslations("about");

  return (
    <section className="py-20 bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#f900fe] to-[#f0f0f0] mb-2">
                {t(`stats.${stat}.value`)}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-semibold uppercase tracking-wider">
                {t(`stats.${stat}.label`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
