"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = ["1", "2", "3"];

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {t("title")}
          </h2>
          <p className="text-2xl text-[#f900fe] font-semibold">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-[#000000] border border-[#f0f0f0]/10 p-12 rounded-2xl"
            >
              <p className="text-xl md:text-2xl text-[#f0f0f0]/80 mb-8 italic">
                "{t(`items.${testimonials[activeIndex]}.text`)}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-linear-to-br from-[#f900fe] to-black rounded-full flex items-center justify-center text-[#f0f0f0] font-bold text-xl">
                  {t(`items.${testimonials[activeIndex]}.author`)
                    .charAt(0)
                    .toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-white">
                    {t(`items.${testimonials[activeIndex]}.author`)}
                  </p>
                  <p className="text-[#f0f0f0]/60">
                    {t(`items.${testimonials[activeIndex]}.position`)}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-[#000000] border border-[#f0f0f0]/20 hover:bg-[#f900fe] hover:text-[#f0f0f0] hover:border-[#f900fe] transition-all duration-300 flex items-center justify-center font-bold text-[#f0f0f0]"
                aria-label={t('prev')}
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-[#000000] border border-[#f0f0f0]/20 hover:bg-[#f900fe] hover:text-[#f0f0f0] hover:border-[#f900fe] transition-all duration-300 flex items-center justify-center font-bold text-[#f0f0f0]"
              aria-label={t('next')}
            >
              →
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#f900fe] w-8"
                    : "bg-[#f0f0f0]/20 hover:bg-[#f0f0f0]/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
