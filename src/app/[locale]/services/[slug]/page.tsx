"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCTAButton from "@/components/shared/animated-cta-button";

// Mock data - replace with actual data fetching
const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  process: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  benefits: string[];
  tools: string[];
  projects: Array<{
    title: string;
    image: string;
  }>;
}> = {
  "software-development": {
    title: "Software Development",
    subtitle: "Custom software solutions tailored to your business needs",
    description: "We create cutting-edge software applications that drive business growth and digital transformation. Our expert team delivers scalable, secure, and high-performance solutions using the latest technologies and best practices.",
    image: "/images/services/software-development.jpg",
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "Cloud-Native Solutions",
      "API Development & Integration",
      "Database Design & Optimization",
      "Legacy System Modernization"
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Planning",
        description: "We analyze your requirements and create a comprehensive development roadmap"
      },
      {
        step: "02",
        title: "Design & Architecture",
        description: "Our team designs scalable architecture and intuitive user interfaces"
      },
      {
        step: "03",
        title: "Development & Testing",
        description: "Agile development with continuous testing and quality assurance"
      },
      {
        step: "04",
        title: "Deployment & Support",
        description: "Smooth deployment with ongoing maintenance and support"
      }
    ],
    benefits: [
      "Increased operational efficiency",
      "Scalable and future-proof solutions",
      "Reduced development time and costs",
      "Enhanced user experience",
      "24/7 technical support"
    ],
    tools: ["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"],
    projects: [
      { title: "E-commerce Platform", image: "/images/projects/1.jpg" },
      { title: "Healthcare Management", image: "/images/projects/2.jpg" }
    ]
  },
  "video-production": {
    title: "Video Production",
    subtitle: "Professional video content that tells your story",
    description: "From concept to final cut, we produce high-quality video content that engages your audience and amplifies your brand message. Our creative team handles everything from scripting to post-production.",
    image: "/images/services/video-production.jpg",
    features: [
      "Corporate Videos",
      "Commercial Production",
      "Social Media Content",
      "Event Coverage",
      "Animation & Motion Graphics",
      "Documentary Production"
    ],
    process: [
      {
        step: "01",
        title: "Pre-Production",
        description: "Concept development, scripting, storyboarding, and planning"
      },
      {
        step: "02",
        title: "Production",
        description: "Professional filming with high-end equipment and experienced crew"
      },
      {
        step: "03",
        title: "Post-Production",
        description: "Editing, color grading, sound design, and visual effects"
      },
      {
        step: "04",
        title: "Delivery",
        description: "Final delivery in all required formats and platforms"
      }
    ],
    benefits: [
      "Cinematic quality production",
      "Creative storytelling",
      "Fast turnaround times",
      "Multiple format delivery",
      "Experienced production team"
    ],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D"],
    projects: [
      { title: "Brand Documentary", image: "/images/projects/3.jpg" },
      { title: "Product Launch Video", image: "/images/projects/4.jpg" }
    ]
  }
};

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  // For testing: use software-development data for all service slugs
  const service = servicesData["software-development"];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
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
              Services
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#f0f0f0] mt-4 mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-[#f0f0f0]/80 max-w-3xl">
              {service.subtitle}
            </p>
          </motion.div>
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
              Overview
            </h2>
            <p className="text-lg text-[#f0f0f0]/80 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-12 text-center"
          >
            What We Offer
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#000000] border border-[#f0f0f0]/10 p-6 rounded-2xl hover:border-[#f900fe]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#f900fe]/20 flex items-center justify-center mb-4">
                  <span className="text-[#f900fe] text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-[#f0f0f0] mb-2">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-12 text-center"
          >
            Our Process
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#f900fe] to-[#f0f0f0] mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#f0f0f0] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#f0f0f0]/60">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-8">
              Why Choose Us
            </h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
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
                  <p className="text-[#f0f0f0]/80 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-8">
              Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-[#000000] border border-[#f0f0f0]/20 rounded-full text-[#f0f0f0] font-semibold hover:border-[#f900fe] hover:text-[#f900fe] transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-12 text-center"
          >
            Related Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-[#f0f0f0]/10 group cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#000000] to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold text-[#f0f0f0]">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to get started?
            </h2>
            <p className="text-[#f0f0f0]/80 mb-8 text-lg">
              Let&apos;s discuss how we can help your business grow
            </p>
            <AnimatedCTAButton href="/contact">
              Contact Us
            </AnimatedCTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
