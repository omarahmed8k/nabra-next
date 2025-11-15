"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export interface Project {
  id: number;
  title: string;
  size: string;
  image: string;
  description: string;
  slug: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-4">
          {/* Row 1: Two large horizontal cards */}
          {projects[0] && (
            <div className="md:col-span-2">
              <Link href={`/projects/${projects[0].slug}`} className="block">
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
                      {projects[0].title}
                    </h6>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Image
                      src={projects[0].image}
                      alt={projects[0].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                      {projects[0].description}
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
          )}

          {projects[1] && (
            <div className="md:col-span-2">
              <Link href={`/projects/${projects[1].slug}`} className="block">
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
                      {projects[1].title}
                    </h6>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Image
                      src={projects[1].image}
                      alt={projects[1].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                      {projects[1].description}
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
          )}

          {/* Row 2: Small, Large horizontal, Tall vertical (start) */}
          {projects[2] && (
            <div className="md:col-span-1">
              <Link href={`/projects/${projects[2].slug}`} className="block">
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
                      {projects[2].title}
                    </h6>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Image
                      src={projects[2].image}
                      alt={projects[2].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                      {projects[2].description}
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
          )}

          {projects[3] && (
            <div className="md:col-span-2">
              <Link href={`/projects/${projects[3].slug}`} className="block">
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
                      {projects[3].title}
                    </h6>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Image
                      src={projects[3].image}
                      alt={projects[3].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                      {projects[3].description}
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
          )}

          {projects[4] && (
            <div className="md:col-span-1 md:row-span-2">
              <Link href={`/projects/${projects[4].slug}`} className="block">
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
                      {projects[4].title}
                    </h6>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Image
                      src={projects[4].image}
                      alt={projects[4].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                      {projects[4].description}
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
          )}

          {/* Row 3: Large horizontal, Small */}
          {projects[5] && (
            <div className="md:col-span-2">
              <Link href={`/projects/${projects[5].slug}`} className="block">
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
                      {projects[5].title}
                    </h6>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Image
                      src={projects[5].image}
                      alt={projects[5].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                      {projects[5].description}
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
          )}

          {projects[6] && (
            <div className="md:col-span-1">
              <Link href={`/projects/${projects[6].slug}`} className="block">
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
                      {projects[6].title}
                    </h6>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Image
                      src={projects[6].image}
                      alt={projects[6].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                      {projects[6].description}
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
          )}
        </div>
      </div>
    </section>
  );
}
