"use client";

import { motion } from "framer-motion";
import AnimatedCTAButton from "@/components/shared/animated-cta-button";

export default function ProjectsCTA() {
  return (
    <section className="py-20 bg-[#000000] text-[#f0f0f0]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let&apos;s create something amazing together
          </h2>
          <AnimatedCTAButton href="/contact">
            Start Your Project
          </AnimatedCTAButton>
        </motion.div>
      </div>
    </section>
  );
}
