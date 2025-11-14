"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export default function ProjectsCTA() {
  return (
    <section className="py-20 bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let&apos;s create something amazing together
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-linear-to-r from-[#501454] to-[#8b2490] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#501454]/50 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
