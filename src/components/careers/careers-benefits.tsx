"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CareersBenefits() {
  const t = useTranslations("careersPage.benefits");

  return (
    <section className="py-20 bg-[#000000]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-[#f0f0f0]/80 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: num * 0.1 }}
              className="bg-[#000000] border border-[#f0f0f0]/10 p-8 rounded-2xl hover:border-[#f900fe]/30 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{t(`items.${num}.icon`)}</div>
              <h3 className="text-xl font-bold text-[#f0f0f0] mb-3">
                {t(`items.${num}.title`)}
              </h3>
              <p className="text-[#f0f0f0]/60">
                {t(`items.${num}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
