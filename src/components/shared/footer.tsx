"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedCTAButton from "@/components/shared/animated-cta-button";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-black text-[#f0f0f0] py-16 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Main Container with Radial Gradient */}
        <div
          className="rounded-[40px] p-8 md:p-12 mb-8"
          style={{
            background:
              "radial-gradient(136.2% 150% at 46% -22.8%, #f900fe 0%, rgba(255, 255, 255, 0.03) 37.6389%)",
          }}
        >
          {/* Logo */}
          <div className="mb-12">
            <Link href="/" className="inline-block">
              <Image
                src="/svgs/logo.svg"
                alt="Nabra"
                width={150}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* CTA Section */}
          <div
            className="border border-white/30 rounded-[40px] bg-white/4 p-8 md:p-12 mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl lg:text-[57px] font-bold leading-tight mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-8">
                {t("cta.subtitle")}
              </p>
            </div>

            <div className="flex justify-center">
              <AnimatedCTAButton href="/contact">
                {t("cta.button")}
              </AnimatedCTAButton>
            </div>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {/* Email */}
            <div className="border border-white/30 rounded-[40px] bg-white/4 p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 shrink-0 text-[#f900fe]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg md:text-xl">{t("contact.email")}</p>
                </div>
              </div>
            </div>

            {/* Dubai Office */}
            <div className="border border-white/30 rounded-[40px] bg-white/4 p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 shrink-0 text-[#f900fe]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg md:text-xl">{t("contact.dubai")}</p>
                </div>
              </div>
            </div>

            {/* Dubai Phone */}
            <div className="border border-white/30 rounded-[40px] bg-white/4 p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 shrink-0 text-[#f900fe]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg md:text-xl">{t("contact.dubaiPhone")}</p>
                </div>
              </div>
            </div>

            {/* Egypt Office */}
            <div className="border border-white/30 rounded-[40px] bg-white/4 p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 shrink-0 text-[#f900fe]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg md:text-xl">{t("contact.egypt")}</p>
                </div>
              </div>
            </div>

            {/* Egypt Phone */}
            <div className="border border-white/30 rounded-[40px] bg-white/4 p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 shrink-0 text-[#f900fe]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg md:text-xl">{t("contact.egyptPhone")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Vimeo", url: "https://vimeo.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "Facebook", url: "https://facebook.com" },
              { name: "Instagram", url: "https://instagram.com" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-transparent hover:border-white/20 rounded-[54px] bg-white/[0.07] p-4 transition-all duration-300"
              >
                <span className="text-white/80 group-hover:text-white transition-colors">
                  {social.name}
                </span>
                <div className="w-8 h-8 flex items-center justify-center transform rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="w-5 h-5 fill-white/80 group-hover:fill-white transition-colors"
                  >
                    <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Nabra. {t("copyright")}
        </div>
      </div>
    </footer>
  );
}

