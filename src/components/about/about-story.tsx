"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function AboutStory() {
  const t = useTranslations("about");

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video bg-linear-to-br from-[#501454] to-[#8b2490] rounded-2xl flex items-center justify-center text-white text-6xl">
              🎯
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              {t("description")}
            </p>
            <p className="text-lg text-gray-300">
              We believe in the power of creativity and innovation to
              transform brands and create lasting impressions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
