"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ServicesHero() {
  const t = useTranslations("services");

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#8b2490] font-semibold mb-4 uppercase tracking-wider">
            {t("subtitle")}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t("subtitle2")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
