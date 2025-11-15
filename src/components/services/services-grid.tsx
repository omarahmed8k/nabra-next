"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

const services = [
  { key: "digital", icon: "💻", color: "from-blue-500 to-cyan-500" },
  { key: "documentaries", icon: "🎬", color: "from-purple-500 to-pink-500" },
  { key: "activations", icon: "🎯", color: "from-green-500 to-emerald-500" },
  { key: "commercials", icon: "📹", color: "from-orange-500 to-red-600" },
  { key: "reels", icon: "📱", color: "from-pink-500 to-rose-500" },
  { key: "events", icon: "🎪", color: "from-indigo-500 to-blue-500" },
  { key: "vfx", icon: "✨", color: "from-yellow-500 to-orange-500" },
];

export default function ServicesGrid() {
  const t = useTranslations("services");

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900 p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div
                  className={`w-20 h-20 rounded-full bg-linear-to-r ${service.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {t(`items.${service.key}.title`)}
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  {t(`items.${service.key}.description`)}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#f900fe] font-semibold hover:text-[#d900e0] transition-colors duration-200"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
