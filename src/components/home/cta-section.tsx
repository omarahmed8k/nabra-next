"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedCTAButton from "@/components/shared/animated-cta-button";

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
          <AnimatedCTAButton href="/contact">
            {t("contact.cta")}
          </AnimatedCTAButton>
        </motion.div>
      </div>
    </section>
  );
}
