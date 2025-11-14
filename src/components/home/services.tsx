"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const services = [
  { key: "digital", icon: "💻" },
  { key: "documentaries", icon: "🎬" },
  { key: "activations", icon: "🎯" },
  { key: "commercials", icon: "📹" },
  { key: "reels", icon: "📱" },
  { key: "events", icon: "🎪" },
  { key: "vfx", icon: "✨" },
];

export default function Services() {
  const t = useTranslations("services");

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#8b2490] font-semibold mb-4 uppercase tracking-wider">
            {t("subtitle")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600">{t("subtitle2")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t(`items.${service.key}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`items.${service.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
