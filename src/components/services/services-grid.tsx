"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const services = [
  { key: "branding", image: "/images/services/social-media.jpg", slug: "branding" },
  { key: "digitalCommerce", image: "/images/services/branding.jpg", slug: "digital-commerce" },
  { key: "visualIdentity", image: "/images/services/media-production.jpg", slug: "visual-identity" },
  { key: "socialMedia", image: "/images/services/photography.jpg", slug: "social-media" },
  { key: "uiUx", image: "/images/services/web-development.jpg", slug: "ui-ux-design" },
  { key: "marketing", image: "/images/services/app-development.jpg", slug: "behavioural-marketing" },
  { key: "strategicSupport", image: "/images/services/social-media.jpg", slug: "strategic-support" },
  { key: "software", image: "/images/services/branding.jpg", slug: "software-solutions" },
  { key: "videoProduction", image: "/images/services/media-production.jpg", slug: "video-production" },
  { key: "motionGraphic", image: "/images/services/photography.jpg", slug: "motion-graphic" },
  { key: "production", image: "/images/services/web-development.jpg", slug: "production" },
  { key: "printing", image: "/images/services/app-development.jpg", slug: "printing" },
];

export default function ServicesGrid() {
  const t = useTranslations("services");

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.key}
              href={`/services/${service.slug}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={t(`items.${service.key}.title`)}
                fill
                className="bg-white object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Title Overlay */}
              <div className="absolute inset-0 flex items-end p-8">
                <h3 className="text-base font-bold text-white uppercase tracking-wide">
                  {t(`items.${service.key}.title`)}
                </h3>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
