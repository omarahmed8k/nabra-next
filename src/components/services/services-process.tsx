"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ServicesProcess() {
  const t = useTranslations("services.process");

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-[#f0f0f0]/60 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((num) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: num * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#f900fe] to-[#f0f0f0] mb-4">
                {t(`steps.${num}.step`)}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {t(`steps.${num}.title`)}
              </h3>
              <p className="text-[#f0f0f0]/60">{t(`steps.${num}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
