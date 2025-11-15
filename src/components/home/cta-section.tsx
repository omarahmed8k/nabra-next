"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export default function CTASection() {
  const t = useTranslations();

  return (
    <section className="py-20 bg-linear-to-br from-[#f900fe] to-[#000000] text-[#f0f0f0]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto">
            {t("cta.title")}
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#f0f0f0] text-black font-semibold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            {t("contact.cta")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
