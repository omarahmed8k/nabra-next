"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const switchLocale = locale === "en" ? "ar" : "en";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Nabra
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-orange-500 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-orange-500 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-orange-500 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-orange-500 transition-colors duration-200"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-orange-500 transition-colors duration-200"
            >
              Contact
            </Link>

            {/* Language Switcher */}
            <Link
              href={pathname}
              locale={switchLocale}
              className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200"
            >
              {switchLocale.toUpperCase()}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
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
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <Link
              href="/"
              className="block text-white hover:text-orange-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-orange-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-white hover:text-orange-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="block text-white hover:text-orange-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-orange-500 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href={pathname}
              locale={switchLocale}
              className="block px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {switchLocale.toUpperCase()}
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

