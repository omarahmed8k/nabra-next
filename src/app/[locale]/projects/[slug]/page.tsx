"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCTAButton from "@/components/shared/animated-cta-button";
import { useTranslations } from "next-intl";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = use(params);
  const t = useTranslations("projectDetail");

  // For testing: use orkinz data for all project slugs
  // Later you can map slug to different project keys
  // Example: const projectKey = slug === "orkinz" ? "orkinz" : "orkinz";
  const projectKey = slug === "orkinz" ? "orkinz" : "orkinz"; // Currently only supporting orkinz

  // Check if project exists in translations
  if (!t.has(`data.${projectKey}.title`)) {
    notFound();
  }

  // Get image paths (these remain in code as they're file references)
  const images = {
    main: "/images/projects/orkinz.jpg",
    gallery: [
      "/images/projects/orkinz-1.jpg",
      "/images/projects/orkinz-2.jpg",
      "/images/projects/orkinz-3.jpg"
    ]
  };

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={images.main}
          alt={t(`data.${projectKey}.imageAlt`)}
          fill
          className="object-cover bg-white"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/70" />
        
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#f900fe] font-semibold text-sm uppercase tracking-wider">
              {t(`data.${projectKey}.category`)}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#f0f0f0] mt-4">
              {t(`data.${projectKey}.title`)}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-[#000000] border-b border-[#f0f0f0]/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[#f900fe] font-semibold mb-2">{t("meta.client")}</h3>
              <p className="text-[#f0f0f0]">{t(`data.${projectKey}.client`)}</p>
            </div>
            <div>
              <h3 className="text-[#f900fe] font-semibold mb-2">{t("meta.date")}</h3>
              <p className="text-[#f0f0f0]">{t(`data.${projectKey}.date`)}</p>
            </div>
            <div>
              <h3 className="text-[#f900fe] font-semibold mb-2">{t("meta.services")}</h3>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <span
                    key={num}
                    className="px-3 py-1 bg-[#f0f0f0]/10 rounded-full text-[#f0f0f0] text-sm"
                  >
                    {t(`data.${projectKey}.services.${num}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-6">
              {t("sections.overview")}
            </h2>
            <p className="text-lg text-[#f0f0f0]/80 leading-relaxed">
              {t(`data.${projectKey}.description`)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#000000] border border-[#f0f0f0]/10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-[#f900fe] mb-4">
                {t("sections.challenge")}
              </h3>
              <p className="text-[#f0f0f0]/80 leading-relaxed">
                {t(`data.${projectKey}.challenge`)}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#000000] border border-[#f0f0f0]/10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-[#f900fe] mb-4">
                {t("sections.solution")}
              </h3>
              <p className="text-[#f0f0f0]/80 leading-relaxed">
                {t(`data.${projectKey}.solution`)}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Images Gallery */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-12 text-center"
          >
            {t("sections.gallery")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {images.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-[#f0f0f0]/10"
              >
                <Image
                  src={img}
                  alt={t(`data.${projectKey}.galleryAlt`, { index: index + 1 })}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300 bg-white"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-8">
              {t("sections.results")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: num * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#f900fe] flex items-center justify-center shrink-0 mt-1">
                    <span className="text-[#f0f0f0] text-sm">✓</span>
                  </div>
                  <p className="text-[#f0f0f0]/80">{t(`data.${projectKey}.results.${num}`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#000000] border-t border-[#f0f0f0]/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-[#f0f0f0]/80 mb-8 text-lg">
              {t("cta.subtitle")}
            </p>
            <AnimatedCTAButton href="/contact">
              {t("cta.button")}
            </AnimatedCTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
