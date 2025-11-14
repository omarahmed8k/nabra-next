"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="aspect-video bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center text-gray-500 text-2xl font-semibold"
        >
          🗺️ Map Location
        </motion.div>
      </div>
    </section>
  );
}
