"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCTAButton from "@/components/shared/animated-cta-button";

// Mock data - replace with actual data fetching
const projectsData: Record<string, {
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  images: string[];
  client: string;
  date: string;
  services: string[];
}> = {
  orkinz: {
    title: "Orkinz Brand Identity",
    category: "Branding",
    description: "A comprehensive brand identity design project for Orkinz, focusing on creating a modern and memorable visual identity that resonates with their target audience.",
    challenge: "Orkinz needed a fresh brand identity that would differentiate them in a competitive market while maintaining professional credibility and appeal to their diverse client base.",
    solution: "We developed a complete brand identity system including logo design, color palette, typography, and brand guidelines. The design language combines modern aesthetics with timeless elements to ensure longevity.",
    results: [
      "40% increase in brand recognition",
      "Improved customer engagement across all platforms",
      "Successful launch across 5 countries",
      "Award-winning design recognition"
    ],
    image: "/images/projects/orkinz.jpg",
    images: [
      "/images/projects/orkinz-1.jpg",
      "/images/projects/orkinz-2.jpg",
      "/images/projects/orkinz-3.jpg"
    ],
    client: "Orkinz Corporation",
    date: "2024",
    services: ["Brand Identity", "Logo Design", "Brand Guidelines", "Visual Design"]
  }
};

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  // For testing: use orkinz data for all project slugs
  // Later you can switch back to: const project = projectsData[params.slug];
  const project = projectsData["orkinz"];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover bg-white"
          priority
        />
        <div className="absolute inset-0 bg-[#000000]/70" />
        
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#f900fe] font-semibold text-sm uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#f0f0f0] mt-4">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-[#000000] border-b border-[#f0f0f0]/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[#f900fe] font-semibold mb-2">Client</h3>
              <p className="text-[#f0f0f0]">{project.client}</p>
            </div>
            <div>
              <h3 className="text-[#f900fe] font-semibold mb-2">Date</h3>
              <p className="text-[#f0f0f0]">{project.date}</p>
            </div>
            <div>
              <h3 className="text-[#f900fe] font-semibold mb-2">Services</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-[#f0f0f0]/10 rounded-full text-[#f0f0f0] text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-[#f0f0f0]/80 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#000000] border border-[#f0f0f0]/10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-[#f900fe] mb-4">
                The Challenge
              </h3>
              <p className="text-[#f0f0f0]/80 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#000000] border border-[#f0f0f0]/10 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-[#f900fe] mb-4">
                Our Solution
              </h3>
              <p className="text-[#f0f0f0]/80 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Images Gallery */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-12 text-center"
          >
            Project Gallery
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {project.images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-[#f0f0f0]/10"
              >
                <Image
                  src={img}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300 bg-white"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-8">
              Results & Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#f900fe] flex items-center justify-center shrink-0 mt-1">
                    <span className="text-[#f0f0f0] text-sm">✓</span>
                  </div>
                  <p className="text-[#f0f0f0]/80">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#000000] border-t border-[#f0f0f0]/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-6">
              Ready to start your project?
            </h2>
            <p className="text-[#f0f0f0]/80 mb-8 text-lg">
              Let&apos;s create something amazing together
            </p>
            <AnimatedCTAButton href="/contact">
              Get In Touch
            </AnimatedCTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
