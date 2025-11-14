"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

const stats = ["experience", "team", "projects", "partners"];

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="py-20 bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#8b2490] font-semibold mb-4 uppercase tracking-wider">
            {t("subtitle")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#501454] to-[#8b2490] mb-2">
                {t(`stats.${stat}.value`)}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-semibold uppercase tracking-wider">
                {t(`stats.${stat}.label`)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/about"
            className="inline-block px-8 py-4 border-2 border-[#501454] text-[#8b2490] font-semibold rounded-full hover:bg-[#501454] hover:text-white transition-all duration-300"
          >
            {t("cta")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
