"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: "🚀",
    title: "Innovative Projects",
    description: "Work on cutting-edge projects with the latest technologies"
  },
  {
    icon: "🌟",
    title: "Growth Opportunities",
    description: "Continuous learning and career development programs"
  },
  {
    icon: "🤝",
    title: "Collaborative Culture",
    description: "Work with talented professionals in a supportive environment"
  },
  {
    icon: "⚡",
    title: "Flexible Working",
    description: "Remote and hybrid work options available"
  },
  {
    icon: "💰",
    title: "Competitive Benefits",
    description: "Attractive compensation and comprehensive benefits package"
  },
  {
    icon: "🎯",
    title: "Impactful Work",
    description: "Create solutions that make a real difference"
  }
];

export default function CareersBenefits() {
  return (
    <section className="py-20 bg-[#000000]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-6">
            Why Work With Us
          </h2>
          <p className="text-lg text-[#f0f0f0]/80 max-w-3xl mx-auto">
            Join a team of passionate professionals dedicated to innovation and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#000000] border border-[#f0f0f0]/10 p-8 rounded-2xl hover:border-[#f900fe]/30 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#f0f0f0] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#f0f0f0]/60">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
