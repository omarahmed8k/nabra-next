"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function AboutMissionVision() {
  const t = useTranslations("about");

  const cards = [
    {
      icon: "🎯",
      title: t("missionVision.mission.title"),
      description: t("missionVision.mission.description"),
      delay: 0,
    },
    {
      icon: "👁️",
      title: t("missionVision.vision.title"),
      description: t("missionVision.vision.description"),
      delay: 0.2,
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay }}
              className="bg-[#000000] border border-[#f0f0f0]/10 p-10 rounded-2xl shadow-lg"
            >
              <div className="text-5xl mb-6" aria-hidden>
                {card.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {card.title}
              </h3>
              <p className="text-[#f0f0f0]/80 text-lg">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
