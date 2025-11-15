"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCTAButton from "@/components/shared/animated-cta-button";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contactPage");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("form.success"));
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white mb-8">
        {t("form.title")}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-[#f0f0f0] font-semibold mb-2"
          >
            {t("form.fields.name.label")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
            placeholder={t("form.fields.name.placeholder")}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[#f0f0f0] font-semibold mb-2"
          >
            {t("form.fields.email.label")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
            placeholder={t("form.fields.email.placeholder")}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-[#f0f0f0] font-semibold mb-2"
          >
            {t("form.fields.phone.label")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
            placeholder={t("form.fields.phone.placeholder")}
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-[#f0f0f0] font-semibold mb-2"
          >
            {t("form.fields.company.label")}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
            placeholder={t("form.fields.company.placeholder")}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-[#f0f0f0] font-semibold mb-2"
          >
            {t("form.fields.message.label")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200 resize-none"
            placeholder={t("form.fields.message.placeholder")}
          />
        </div>

        <AnimatedCTAButton type="submit" className="w-full">
          {t("form.submit")}
        </AnimatedCTAButton>
      </form>
    </motion.div>
  );
}
