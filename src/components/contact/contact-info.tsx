"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const contactSections = [
  { icon: "📍", key: "office" },
  { icon: "📧", key: "email" },
  { icon: "📞", key: "phone" },
  { icon: "⏰", key: "hours" },
];

const socialItems = [
  { key: "facebook" },
  { key: "instagram" },
  { key: "linkedin" },
  { key: "twitter" },
];

export default function ContactInfo() {
  const t = useTranslations("contactPage");

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white mb-8">
        {t("info.title")}
      </h2>

      <div className="space-y-8">
        {contactSections.map((section) => {
          const details =
            (t.raw(`info.sections.${section.key}.details`) as string[]) || [];

          return (
            <div
              key={section.key}
              className="bg-[#000000] border border-[#f0f0f0]/10 p-6 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl" aria-hidden>
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t(`info.sections.${section.key}.title`)}
                  </h3>
                  {details.map((detail, idx) => (
                    <p key={idx} className="text-[#f0f0f0]/80">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Social Media */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-white mb-4">
          {t("social.title")}
        </h3>
        <div className="flex gap-4">
          {socialItems.map((social) => {
            const label = t(`social.items.${social.key}`);
            return (
              <a
                key={social.key}
                href="#"
                className="w-12 h-12 rounded-full bg-[#000000] border border-[#f0f0f0]/20 hover:bg-[#f900fe] hover:border-[#f900fe] hover:text-[#f0f0f0] transition-all duration-300 flex items-center justify-center font-bold text-[#f0f0f0]"
                aria-label={label}
              >
                {label.charAt(0)}
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
