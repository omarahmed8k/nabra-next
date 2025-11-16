"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCTAButton from "@/components/shared/animated-cta-button";
import { useTranslations } from "next-intl";

export default function CareersApplicationForm() {
  const t = useTranslations("careersPage.form");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    alert(t("success"));
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      linkedin: "",
      portfolio: "",
      coverLetter: "",
      resume: null,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
    }
  };

  return (
    <section className="py-20 bg-[#000000]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-4 text-center">
              {t("title")}
            </h2>
            <p className="text-[#f0f0f0]/80 text-center mb-12">
              {t("subtitle")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  {t("fields.name.label")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
                  placeholder={t("fields.name.placeholder")}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  {t("fields.email.label")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
                  placeholder={t("fields.email.placeholder")}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  {t("fields.phone.label")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
                  placeholder={t("fields.phone.placeholder")}
                />
              </div>

              {/* Position */}
              <div>
                <label
                  htmlFor="position"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  {t("fields.position.label")}
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
                >
                  <option value="">{t("fields.position.placeholder")}</option>
                  <option value="software-developer">{t("fields.position.options.softwareDeveloper")}</option>
                  <option value="ui-ux-designer">{t("fields.position.options.uiUxDesigner")}</option>
                  <option value="video-editor">{t("fields.position.options.videoEditor")}</option>
                  <option value="motion-graphics">{t("fields.position.options.motionGraphics")}</option>
                  <option value="project-manager">{t("fields.position.options.projectManager")}</option>
                  <option value="marketing-specialist">{t("fields.position.options.marketingSpecialist")}</option>
                  <option value="other">{t("fields.position.options.other")}</option>
                </select>
              </div>

              {/* LinkedIn */}
              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  {t("fields.linkedin.label")}
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
                  placeholder={t("fields.linkedin.placeholder")}
                />
              </div>

              {/* Portfolio */}
              <div>
                <label
                  htmlFor="portfolio"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  {t("fields.portfolio.label")}
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
                  placeholder={t("fields.portfolio.placeholder")}
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label
                  htmlFor="resume"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  {t("fields.resume.label")}
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#f900fe] file:text-[#f0f0f0] hover:file:bg-[#f900fe]/80 file:cursor-pointer"
                  />
                </div>
                <p className="text-[#f0f0f0]/40 text-sm mt-2">
                  {t("fields.resume.helper")}
                </p>
              </div>

              {/* Cover Letter */}
              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  {t("fields.coverLetter.label")}
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200 resize-none"
                  placeholder={t("fields.coverLetter.placeholder")}
                />
              </div>

              <AnimatedCTAButton type="submit" className="w-full">
                {t("submit")}
              </AnimatedCTAButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
