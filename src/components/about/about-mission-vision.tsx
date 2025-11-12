"use client";

import { motion } from "framer-motion";

export default function AboutMissionVision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-lg"
          >
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg">
              To ignite brands through transformative storytelling and
              immersive experiences that inspire, engage, and convert across
              all touchpoints.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-2xl shadow-lg"
          >
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 text-lg">
              To be the leading creative agency that sets the standard for
              excellence in visual storytelling and brand transformation
              across the region.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
