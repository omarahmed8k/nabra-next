"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContactCTA() {
  const t = useTranslations("contactPage");

  return (
    <section className="py-20 bg-[#000000] text-[#f0f0f0]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-[#f0f0f0]/80 mb-8">
            {t("cta.subtitle")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
