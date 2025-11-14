"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  { key: "digital", image: "/images/services/social-media.jpg" },
  { key: "documentaries", image: "/images/services/branding.jpg" },
  { key: "activations", image: "/images/services/media-production.jpg" },
  { key: "commercials", image: "/images/services/photography.jpg" },
  { key: "reels", image: "/images/services/web-development.jpg" },
  { key: "events", image: "/images/services/app-development.jpg" },
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={t(`items.${service.key}.title`)}
                fill
                className="bg-white object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Title Overlay */}
              <div className="absolute inset-0 flex items-end p-8">
                <h3 className="text-base font-bold text-white uppercase tracking-wide">
                  {t(`items.${service.key}.title`)}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
