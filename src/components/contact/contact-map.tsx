"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContactMap() {
  const t = useTranslations("contactPage");

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="aspect-video bg-[#000000] border border-[#f0f0f0]/10 rounded-2xl overflow-hidden flex items-center justify-center text-[#f0f0f0]/40 text-2xl font-semibold"
        >
          🗺️ {t("map.label")}
        </motion.div>
      </div>
    </section>
  );
}
