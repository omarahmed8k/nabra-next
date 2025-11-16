"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCTAButton from "@/components/shared/animated-cta-button";
import { useTranslations } from "next-intl";

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = use(params);
  const t = useTranslations("serviceDetail");

  // Map slug to translation key
  const serviceKeyMap: Record<string, string> = {
    "software-development": "softwareDevelopment",
    "video-production": "videoProduction"
  };

  const serviceKey = serviceKeyMap[slug] || "softwareDevelopment";

  // Check if service exists in translations
  if (!t.has(`data.${serviceKey}.title`)) {
    notFound();
  }

  // Get image paths (these remain in code as they're file references)
  const images = {
    main: `/images/services/${slug}.jpg`,
    projects: [
      "/images/projects/1.jpg",
      "/images/projects/2.jpg"
    ]
  };

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={images.main}
          alt={t(`data.${serviceKey}.title`)}
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
              {t("meta.servicesLabel")}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#f0f0f0] mt-4 mb-4">
              {t(`data.${serviceKey}.title`)}
            </h1>
            <p className="text-xl text-[#f0f0f0]/80 max-w-3xl">
              {t(`data.${serviceKey}.subtitle`)}
            </p>
          </motion.div>
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
              {t(`data.${serviceKey}.description`)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-12 text-center"
          >
            {t("sections.features")}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: num * 0.1 }}
                className="bg-[#000000] border border-[#f0f0f0]/10 p-6 rounded-2xl hover:border-[#f900fe]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#f900fe]/20 flex items-center justify-center mb-4">
                  <span className="text-[#f900fe] text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-[#f0f0f0] mb-2">
                  {t(`data.${serviceKey}.features.${num}`)}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-12 text-center"
          >
            {t("sections.process")}
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: num * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#f900fe] to-[#f0f0f0] mb-4">
                  {t(`data.${serviceKey}.process.${num}.step`)}
                </div>
                <h3 className="text-xl font-bold text-[#f0f0f0] mb-3">
                  {t(`data.${serviceKey}.process.${num}.title`)}
                </h3>
                <p className="text-[#f0f0f0]/60">
                  {t(`data.${serviceKey}.process.${num}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-8">
              {t("sections.benefits")}
            </h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((num) => (
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
                  <p className="text-[#f0f0f0]/80 text-lg">{t(`data.${serviceKey}.benefits.${num}`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-8">
              {t("sections.tools")}
            </h2>
            <div className="flex flex-wrap gap-3">
              {(serviceKey === "softwareDevelopment" ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4]).map((num) => (
                <span
                  key={num}
                  className="px-6 py-3 bg-[#000000] border border-[#f0f0f0]/20 rounded-full text-[#f0f0f0] font-semibold hover:border-[#f900fe] hover:text-[#f900fe] transition-all duration-300"
                >
                  {t(`data.${serviceKey}.tools.${num}`)}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-12 text-center"
          >
            {t("sections.relatedProjects")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: num * 0.1 }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-[#f0f0f0]/10 group cursor-pointer"
              >
                <Image
                  src={images.projects[num - 1]}
                  alt={t(`data.${serviceKey}.projects.${num}.title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 bg-white"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#000000] to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-[#f0f0f0]">
                    {t(`data.${serviceKey}.projects.${num}.title`)}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
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
