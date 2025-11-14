"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const switchLocale = locale === "en" ? "ar" : "en";

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
        className={`container mx-auto rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-black/10 backdrop-blur-xl shadow-lg"
            : "bg-black/5 backdrop-blur-2xl"
        }`}
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        <nav className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative text-2xl font-bold text-black dark:text-white transition-all duration-300 hover:scale-105"
            >
              Nabra
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    pathname === item.href
                      ? "text-[#501454] dark:text-[#8b2490]"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#501454] dark:hover:text-[#8b2490]"
                  } hover:bg-black/5 dark:hover:bg-white/5`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#501454]/10 dark:bg-[#8b2490]/10 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}

              {/* Language Switcher */}
              <Link
                href={pathname}
                locale={switchLocale}
                className="ml-2 px-5 py-2 text-sm font-medium bg-gradient-to-r from-[#501454] to-[#6b1a5e] text-white rounded-full hover:from-[#6b1a5e] hover:to-[#8b2490] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm"
              >
                {switchLocale.toUpperCase()}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-300"
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
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-[#501454]/10 text-[#501454] dark:text-[#8b2490]"
                      : "text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 hover:text-[#501454]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={pathname}
                locale={switchLocale}
                className="block px-4 py-3 mt-4 bg-gradient-to-r from-[#501454] to-[#6b1a5e] text-white text-center rounded-full hover:from-[#6b1a5e] hover:to-[#8b2490] transition-all duration-300 shadow-lg text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {switchLocale.toUpperCase()}
              </Link>
            </motion.div>
          )}
        </nav>
      </div>
    </header>
  );
}

