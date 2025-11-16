"use client";

import { motion } from "framer-motion";
import AnimatedCTAButton from "@/components/shared/animated-cta-button";
import { useTranslations } from "next-intl";

export default function ServicesCTA() {
  const t = useTranslations("services.cta");

  return (
    <section className="py-20 bg-linear-to-br from-[#f900fe] to-black text-[#f0f0f0]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t("title")}
          </h2>
          <AnimatedCTAButton href="/contact">
            {t("button")}
          </AnimatedCTAButton>
        </motion.div>
      </div>
    </section>
  );
}
