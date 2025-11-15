"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const values = [
  { icon: "💡", key: "innovation" },
  { icon: "🤝", key: "collaboration" },
  { icon: "⭐", key: "excellence" },
  { icon: "🎨", key: "creativity" },
  { icon: "📊", key: "results" },
  { icon: "🌟", key: "passion" },
];

export default function AboutValues() {
  const t = useTranslations("about");

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          {t("values.title")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-[#000000] border border-[#f0f0f0]/10 rounded-2xl hover:shadow-xl hover:border-[#f900fe]/30 transition-all duration-300"
            >
              <div className="text-5xl mb-4" aria-hidden>
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {t(`values.items.${value.key}.title`)}
              </h3>
              <p className="text-[#f0f0f0]/80">
                {t(`values.items.${value.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
