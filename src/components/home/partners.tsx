"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Replace these filenames with your actual files placed in /public/images
const partnerImages = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
];

export default function Partners() {
  const t = useTranslations("partners");
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const speed = 0.5; // pixels per frame (adjust for speed)

  // Duplicate items to create a seamless loop
  const items = [...partnerImages, ...partnerImages];

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const scroller = el; // capture non-null element for closures
    let rafId: number | null = null;

    function step() {
      if (pausedRef.current) {
        rafId = requestAnimationFrame(step);
        return;
      }

      // advance
      scroller.scrollLeft += speed;

      // when we've scrolled past the first half (one set), reset
      if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
        scroller.scrollLeft -= scroller.scrollWidth / 2;
      }

      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          {t("title")}
        </motion.h2>

        <div className="relative">
          <div
            ref={scrollerRef}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            onTouchStart={() => (pausedRef.current = true)}
            onTouchEnd={() => (pausedRef.current = false)}
            className="overflow-x-auto overflow-y-hidden w-full border border-[#f0f0f0]/20 rounded-full scrollbar-hide outline-[1px] outline-[#f0f0f0]/10"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex whitespace-nowrap items-center">
              {items.map((src, i) => (
                <div key={`${src}-${i}`} className="inline-flex items-center">
                  <div
                    className="inline-flex items-center justify-center rounded-full px-8 py-6 bg-transparent"
                    style={{ minWidth: 220 }}
                  >
                    <div className="relative w-44 h-20 flex items-center justify-center">
                      <Image
                        src={`/images/partners/${src}`}
                        alt={src.replace(/[-.]/g, " ")}
                        width={176}
                        height={80}
                        className="object-contain transition-all duration-300"
                      />
                    </div>
                  </div>
                  {/* Vertical divider */}
                  <div className="mx-6 h-[100px] w-px bg-[#f0f0f0]/10" />
                </div>
              ))}
            </div>
          </div>
          {/* Edge gradients - positioned outside the scrolling container */}
          <div
            className="pointer-events-none absolute top-0 bottom-0 left-0 w-32 rounded-l-full"
            style={{
              background: "linear-gradient(90deg, rgb(3, 7, 18) 0%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute top-0 bottom-0 right-0 w-32 rounded-r-full"
            style={{
              background: "linear-gradient(270deg, rgb(3, 7, 18) 0%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
