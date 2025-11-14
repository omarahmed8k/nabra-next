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
    <section className="py-20 bg-gray-950">
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
          <p className="text-2xl text-[#8b2490] font-semibold">
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
              className="bg-gray-900 p-12 rounded-2xl"
            >
              <p className="text-xl md:text-2xl text-gray-300 mb-8 italic">
                "{t(`items.${testimonials[activeIndex]}.text`)}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-linear-to-br from-[#501454] to-[#8b2490] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {t(`items.${testimonials[activeIndex]}.author`)
                    .charAt(0)
                    .toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-white">
                    {t(`items.${testimonials[activeIndex]}.author`)}
                  </p>
                  <p className="text-gray-400">
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
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-[#501454] hover:text-white transition-all duration-300 flex items-center justify-center font-bold text-gray-400"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-[#501454] hover:text-white transition-all duration-300 flex items-center justify-center font-bold text-gray-400"
              aria-label="Next testimonial"
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
                    ? "bg-[#8b2490] w-8"
                    : "bg-gray-700 hover:bg-gray-600"
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
