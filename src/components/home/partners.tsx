"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const partners = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6",
  "Partner 7",
  "Partner 8",
];

export default function Partners() {
  const t = useTranslations("partners");

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          {t("title")}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-32 h-20 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-sm font-semibold">
                {partner}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
