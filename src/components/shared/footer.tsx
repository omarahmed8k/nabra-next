"use client";

import { Link } from "@/i18n/routing";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-[#501454] to-[#8b2490]">
              Nabra
            </h3>
            <p className="text-gray-400">
              Hear the sound of success. We transform ideas into immersive
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#8b2490] transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#8b2490] transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-[#8b2490] transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#8b2490] transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Digital Solutions</li>
              <li>Documentaries</li>
              <li>Event Management</li>
              <li>Visual Effects</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@nabra.com</li>
              <li>Phone: +20 111 860 0015</li>
              <li>Address: Cairo, Egypt</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#501454] transition-colors duration-200 flex items-center justify-center"
            aria-label="Facebook"
          >
            F
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#501454] transition-colors duration-200 flex items-center justify-center"
            aria-label="Instagram"
          >
            I
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#501454] transition-colors duration-200 flex items-center justify-center"
            aria-label="LinkedIn"
          >
            L
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#501454] transition-colors duration-200 flex items-center justify-center"
            aria-label="Twitter"
          >
            T
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
          © {new Date().getFullYear()} Nabra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

