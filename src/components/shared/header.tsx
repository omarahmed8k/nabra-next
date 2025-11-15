"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`container mx-auto max-w-6xl rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-white/15 backdrop-blur-xl shadow-lg"
            : "bg-white/10 backdrop-blur-2xl"
        }`}
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        <nav className="px-4 md:ps-6 md:px-2 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative transition-all duration-300 hover:scale-105"
            >
              <Image
                src="/svgs/logo.svg"
                alt="Nabra Logo"
                width={45}
                height={45}
                className="drop-shadow-lg"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/careers", label: "Careers" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                    pathname === item.href
                      ? "text-[#f900fe]"
                      : "text-[#f0f0f0] hover:text-[#f900fe]"
                  } hover:bg-white/5`}
                >
                  {item.label}
                  {/* Underline with scale animation */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#f900fe] transition-all duration-300 ${
                      pathname === item.href
                        ? "w-[calc(100%-1.5rem)] opacity-100"
                        : "w-0 opacity-0 group-hover:w-[calc(100%-1.5rem)] group-hover:opacity-100"
                    }`}
                  />
                </Link>
              ))}

              {/* CTA Button */}
              <Link
                href="/contact"
                className="ml-2 px-8 py-2.5 text-sm font-semibold bg-[#f0f0f0] text-black rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Let&apos;s Talk
              </Link>

              {/* Language Switcher */}
              <div className="relative ml-1 flex items-center rounded-full p-1 border border-black/20">
                <button
                  onClick={() => {
                    window.location.href = `/en${pathname}`;
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 cursor-pointer ${
                    locale === "en"
                      ? "bg-black/20 text-white shadow-md hover:shadow-lg hover:scale-105"
                      : "text-[#f0f0f0]/60 hover:text-white hover:bg-white/5 hover:scale-105"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    window.location.href = `/ar${pathname}`;
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 cursor-pointer ${
                    locale === "ar"
                      ? "bg-black/20 text-white shadow-md hover:shadow-lg hover:scale-105"
                      : "text-[#f0f0f0]/60 hover:text-white hover:bg-white/5 hover:scale-105"
                  }`}
                >
                  AR
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#f0f0f0] hover:bg-white/5 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 space-y-2"
            >
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-[#f900fe]/10 text-[#f900fe]"
                      : "text-[#f0f0f0] hover:bg-white/5 hover:text-[#f900fe]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-4 py-3 mt-4 bg-[#f0f0f0] text-black text-center rounded-full hover:bg-white transition-all duration-300 shadow-lg text-sm font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Let&apos;s Talk
              </Link>

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 mt-4 bg-black/30 rounded-full p-1 border border-[#f0f0f0]/20">
                <button
                  onClick={() => {
                    window.location.href = `/en${pathname}`;
                    setIsMenuOpen(false);
                  }}
                  className={`flex-1 px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                    locale === "en"
                      ? "bg-[#000000] text-white shadow-md hover:shadow-lg hover:scale-105 border border-[#f0f0f0]/20"
                      : "text-[#f0f0f0]/60 hover:text-white hover:bg-white/5 hover:scale-105"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    window.location.href = `/ar${pathname}`;
                    setIsMenuOpen(false);
                  }}
                  className={`flex-1 px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                    locale === "ar"
                      ? "bg-[#000000] text-white shadow-md hover:shadow-lg hover:scale-105 border border-[#f0f0f0]/20"
                      : "text-[#f0f0f0]/60 hover:text-white hover:bg-white/5 hover:scale-105"
                  }`}
                >
                  AR
                </button>
              </div>
            </motion.div>
          )}
        </nav>
      </div>
    </header>
  );
}
