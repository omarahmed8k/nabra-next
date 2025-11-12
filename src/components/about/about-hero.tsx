"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function AboutHero() {
  const t = useTranslations("about");

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          {t("subtitle")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          {t("title")}
        </motion.p>
      </div>
    </section>
  );
}
