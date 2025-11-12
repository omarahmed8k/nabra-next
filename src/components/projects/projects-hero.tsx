"use client";

import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of exceptional work
          </p>
        </motion.div>
      </div>
    </section>
  );
}
