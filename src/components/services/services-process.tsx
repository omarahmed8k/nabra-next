"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your goals and vision",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Creating a comprehensive plan",
  },
  {
    step: "03",
    title: "Execution",
    description: "Bringing ideas to life",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Launching and measuring success",
  },
];

export default function ServicesProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-600 mb-4">
                {process.step}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {process.title}
              </h3>
              <p className="text-gray-600">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
