"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import AnimatedCTAButton from "../shared/animated-cta-button";

const projects = [
  { id: 1, size: "large-h", image: "/images/projects/1.jpg" }, // Top left - 2 cols, 1 row
  { id: 2, size: "large-h", image: "/images/projects/2.jpg" }, // Top right - 2 cols, 1 row
  { id: 3, size: "small", image: "/images/projects/3.jpg" },   // Middle left - 1 col, 1 row
  { id: 4, size: "large-w", image: "/images/projects/4.jpg" }, // Middle center - 2 cols, 1 row
  { id: 5, size: "large-v", image: "/images/projects/5.jpg" }, // Right tall - 1 col, 2 rows
  { id: 6, size: "large-h", image: "/images/projects/6.jpg" }, // Bottom left - 2 cols, 1 row
  { id: 7, size: "small", image: "/images/projects/7.jpg" },   // Bottom middle - 1 col, 1 row
];

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4">
          {/* Row 1: Two large horizontal cards */}
          <div className="md:col-span-2">
            <Link href={`/projects/project-${projects[0].id}`} className="block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
              className="relative overflow-hidden rounded-[30px] group cursor-pointer h-[250px]"
              style={{
                background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.1) 2.21002%, rgba(255, 255, 255, 0) 100%)',
                backdropFilter: 'blur(10px)',
                border: '0px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              {/* Glass Effect Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  backdropFilter: 'blur(5px)',
                  transform: 'rotate(9deg)',
                  transformOrigin: '50% 50%',
                }}
              >
                <div 
                  className="w-full h-full"
                  style={{
                    backdropFilter: 'blur(0px)',
                    opacity: 0.17,
                    background: 'linear-gradient(114deg, rgb(255, 255, 255) 47.7477%, rgba(255, 255, 255, 0.08) 50.8195%)',
                  }}
                />
              </div>

              {/* Title Overlay */}
              <div className="absolute top-8 left-8 right-8 z-10">
                <h6 
                  className="text-white text-center font-bold text-3xl md:text-4xl leading-none"
                  style={{ textShadow: 'none' }}
                >
                  {t("cards.1.title")}
                </h6>
              </div>

              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Image
                  src={projects[0].image}
                  alt={t("cards.1.title")}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 bg-white"
                />
                {/* Image Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(165deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
                    opacity: 0.79,
                  }}
                />
              </div>

              {/* Content Text (appears on hover) */}
              <div className="absolute inset-x-8 top-24 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white/80 text-center text-sm md:text-base">
                  {t("cards.1.description")}
                </p>
              </div>

              {/* Background Lines (appears on hover) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 opacity-100">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'url(https://framerusercontent.com/images/UBfETRmMWvNW1BI0VHLyvTjbH4k.svg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                </div>
              </div>
            </motion.div>
            </Link>
          </div>

          <div className="md:col-span-2">
            <Link href={`/projects/project-${projects[1].id}`} className="block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative overflow-hidden rounded-[30px] group cursor-pointer h-[250px]"
                style={{
                  background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.1) 2.21002%, rgba(255, 255, 255, 0) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '0px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backdropFilter: 'blur(5px)',
                    transform: 'rotate(9deg)',
                    transformOrigin: '50% 50%',
                  }}
                >
                  <div 
                    className="w-full h-full"
                    style={{
                      backdropFilter: 'blur(0px)',
                      opacity: 0.17,
                      background: 'linear-gradient(114deg, rgb(255, 255, 255) 47.7477%, rgba(255, 255, 255, 0.08) 50.8195%)',
                    }}
                  />
                </div>
                <div className="absolute top-8 left-8 right-8 z-10">
                  <h6 
                    className="text-white text-center font-bold text-3xl md:text-4xl leading-none"
                    style={{ textShadow: 'none' }}
                  >
                    {t("cards.2.title")}
                  </h6>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Image
                    src={projects[1].image}
                    alt={t("cards.2.title")}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 bg-white"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(165deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
                      opacity: 0.79,
                    }}
                  />
                </div>
                <div className="absolute inset-x-8 top-24 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/80 text-center text-sm md:text-base">
                    {t("cards.2.description")}
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 opacity-100">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'url(https://framerusercontent.com/images/UBfETRmMWvNW1BI0VHLyvTjbH4k.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Row 2: Small, Large horizontal, Tall vertical (start) */}
          <div className="md:col-span-1">
            <Link href={`/projects/project-${projects[2].id}`} className="block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative overflow-hidden rounded-[30px] group cursor-pointer h-[250px]"
                style={{
                  background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.1) 2.21002%, rgba(255, 255, 255, 0) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '0px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backdropFilter: 'blur(5px)',
                    transform: 'rotate(9deg)',
                    transformOrigin: '50% 50%',
                  }}
                >
                  <div 
                    className="w-full h-full"
                    style={{
                      backdropFilter: 'blur(0px)',
                      opacity: 0.17,
                      background: 'linear-gradient(114deg, rgb(255, 255, 255) 47.7477%, rgba(255, 255, 255, 0.08) 50.8195%)',
                    }}
                  />
                </div>
                <div className="absolute top-8 left-8 right-8 z-10">
                  <h6 
                    className="text-white text-center font-bold text-2xl md:text-3xl leading-none"
                    style={{ textShadow: 'none' }}
                  >
                    {t("cards.3.title")}
                  </h6>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Image
                    src={projects[2].image}
                    alt={t("cards.3.title")}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 bg-white"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(165deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
                      opacity: 0.79,
                    }}
                  />
                </div>
                <div className="absolute inset-x-8 top-20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/80 text-center text-xs md:text-sm">
                    {t("cards.3.description")}
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 opacity-100">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'url(https://framerusercontent.com/images/UBfETRmMWvNW1BI0VHLyvTjbH4k.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="md:col-span-2">
            <Link href={`/projects/project-${projects[3].id}`} className="block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative overflow-hidden rounded-[30px] group cursor-pointer h-[250px]"
                style={{
                  background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.1) 2.21002%, rgba(255, 255, 255, 0) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '0px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backdropFilter: 'blur(5px)',
                    transform: 'rotate(9deg)',
                    transformOrigin: '50% 50%',
                  }}
                >
                  <div 
                    className="w-full h-full"
                    style={{
                      backdropFilter: 'blur(0px)',
                      opacity: 0.17,
                      background: 'linear-gradient(114deg, rgb(255, 255, 255) 47.7477%, rgba(255, 255, 255, 0.08) 50.8195%)',
                    }}
                  />
                </div>
                <div className="absolute top-8 left-8 right-8 z-10">
                  <h6 
                    className="text-white text-center font-bold text-3xl md:text-4xl leading-none"
                    style={{ textShadow: 'none' }}
                  >
                    {t("cards.4.title")}
                  </h6>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Image
                    src={projects[3].image}
                    alt={t("cards.4.title")}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 bg-white"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(165deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
                      opacity: 0.79,
                    }}
                  />
                </div>
                <div className="absolute inset-x-8 top-24 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/80 text-center text-sm md:text-base">
                    {t("cards.4.description")}
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 opacity-100">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'url(https://framerusercontent.com/images/UBfETRmMWvNW1BI0VHLyvTjbH4k.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="md:col-span-1 md:row-span-2">
            <Link href={`/projects/project-${projects[4].id}`} className="block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative overflow-hidden rounded-[30px] group cursor-pointer h-[504px]"
                style={{
                  background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.1) 2.21002%, rgba(255, 255, 255, 0) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '0px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backdropFilter: 'blur(5px)',
                    transform: 'rotate(9deg)',
                    transformOrigin: '50% 50%',
                  }}
                >
                  <div 
                    className="w-full h-full"
                    style={{
                      backdropFilter: 'blur(0px)',
                      opacity: 0.17,
                      background: 'linear-gradient(114deg, rgb(255, 255, 255) 47.7477%, rgba(255, 255, 255, 0.08) 50.8195%)',
                    }}
                  />
                </div>
                <div className="absolute top-8 left-8 right-8 z-10">
                  <h6 
                    className="text-white text-center font-bold text-3xl md:text-4xl leading-none"
                    style={{ textShadow: 'none' }}
                  >
                    {t("cards.5.title")}
                  </h6>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Image
                    src={projects[4].image}
                    alt={t("cards.5.title")}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 bg-white"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(165deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
                      opacity: 0.79,
                    }}
                  />
                </div>
                <div className="absolute inset-x-8 top-24 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/80 text-center text-sm md:text-base">
                    {t("cards.5.description")}
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 opacity-100">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'url(https://framerusercontent.com/images/UBfETRmMWvNW1BI0VHLyvTjbH4k.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Row 3: Large horizontal, Small */}
          <div className="md:col-span-2">
            <Link href={`/projects/project-${projects[5].id}`} className="block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative overflow-hidden rounded-[30px] group cursor-pointer h-[250px]"
                style={{
                  background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.1) 2.21002%, rgba(255, 255, 255, 0) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '0px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backdropFilter: 'blur(5px)',
                    transform: 'rotate(9deg)',
                    transformOrigin: '50% 50%',
                  }}
                >
                  <div 
                    className="w-full h-full"
                    style={{
                      backdropFilter: 'blur(0px)',
                      opacity: 0.17,
                      background: 'linear-gradient(114deg, rgb(255, 255, 255) 47.7477%, rgba(255, 255, 255, 0.08) 50.8195%)',
                    }}
                  />
                </div>
                <div className="absolute top-8 left-8 right-8 z-10">
                  <h6 
                    className="text-white text-center font-bold text-3xl md:text-4xl leading-none"
                    style={{ textShadow: 'none' }}
                  >
                    {t("cards.6.title")}
                  </h6>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Image
                    src={projects[5].image}
                    alt={t("cards.6.title")}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 bg-white"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(165deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
                      opacity: 0.79,
                    }}
                  />
                </div>
                <div className="absolute inset-x-8 top-24 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/80 text-center text-sm md:text-base">
                    {t("cards.6.description")}
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 opacity-100">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'url(https://framerusercontent.com/images/UBfETRmMWvNW1BI0VHLyvTjbH4k.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="md:col-span-1">
            <Link href={`/projects/project-${projects[6].id}`} className="block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative overflow-hidden rounded-[30px] group cursor-pointer h-[250px]"
                style={{
                  background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.1) 2.21002%, rgba(255, 255, 255, 0) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '0px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backdropFilter: 'blur(5px)',
                    transform: 'rotate(9deg)',
                    transformOrigin: '50% 50%',
                  }}
                >
                  <div 
                    className="w-full h-full"
                    style={{
                      backdropFilter: 'blur(0px)',
                      opacity: 0.17,
                      background: 'linear-gradient(114deg, rgb(255, 255, 255) 47.7477%, rgba(255, 255, 255, 0.08) 50.8195%)',
                    }}
                  />
                </div>
                <div className="absolute top-8 left-8 right-8 z-10">
                  <h6 
                    className="text-white text-center font-bold text-2xl md:text-3xl leading-none"
                    style={{ textShadow: 'none' }}
                  >
                    {t("cards.7.title")}
                  </h6>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Image
                    src={projects[6].image}
                    alt={t("cards.7.title")}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 bg-white"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(165deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
                      opacity: 0.79,
                    }}
                  />
                </div>
                <div className="absolute inset-x-8 top-20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/80 text-center text-xs md:text-sm">
                    {t("cards.7.description")}
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 opacity-100">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'url(https://framerusercontent.com/images/UBfETRmMWvNW1BI0VHLyvTjbH4k.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>

        <div className="flex justify-center py-10">
          <AnimatedCTAButton href="/contact">{t("see")}</AnimatedCTAButton>
        </div>
      </div>
    </section>
  );
}
