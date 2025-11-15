"use client";

import { motion } from "framer-motion";

const values = [
  {
    icon: "💡",
    title: "Innovation",
    description: "We constantly push boundaries and explore new creative horizons",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description: "We work closely with clients to bring their vision to life",
  },
  {
    icon: "⭐",
    title: "Excellence",
    description: "We deliver nothing but the highest quality in everything we do",
  },
  {
    icon: "🎨",
    title: "Creativity",
    description: "We bring fresh perspectives and bold ideas to every project",
  },
  {
    icon: "📊",
    title: "Results-Driven",
    description: "We focus on delivering measurable impact and ROI",
  },
  {
    icon: "🌟",
    title: "Passion",
    description: "We love what we do and it shows in every project",
  },
];

export default function AboutValues() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-gray-900 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
