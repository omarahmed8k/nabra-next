"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCTAButton from "@/components/shared/animated-cta-button";

export default function CareersApplicationForm() {
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
    alert("Thank you for your application! We'll get back to you soon.");
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
              Apply Now
            </h2>
            <p className="text-[#f0f0f0]/80 text-center mb-12">
              Fill out the form below and upload your resume to join our team
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
                  placeholder="+20 111 860 0015"
                />
              </div>

              {/* Position */}
              <div>
                <label
                  htmlFor="position"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  Position Applying For *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
                >
                  <option value="">Select a position</option>
                  <option value="software-developer">Software Developer</option>
                  <option value="ui-ux-designer">UI/UX Designer</option>
                  <option value="video-editor">Video Editor</option>
                  <option value="motion-graphics">Motion Graphics Artist</option>
                  <option value="project-manager">Project Manager</option>
                  <option value="marketing-specialist">Marketing Specialist</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* LinkedIn */}
              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
                  placeholder="https://linkedin.com/in/johndoe"
                />
              </div>

              {/* Portfolio */}
              <div>
                <label
                  htmlFor="portfolio"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  Portfolio / Website
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200"
                  placeholder="https://yourportfolio.com"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label
                  htmlFor="resume"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  Resume / CV *
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
                  Accepted formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>

              {/* Cover Letter */}
              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-[#f0f0f0] font-semibold mb-2"
                >
                  Cover Letter / Message *
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-[#000000] border border-[#f0f0f0]/20 text-[#f0f0f0] focus:border-[#f900fe] focus:outline-none focus:ring-2 focus:ring-[#f900fe]/20 transition-all duration-200 resize-none"
                  placeholder="Tell us why you'd be a great fit for our team..."
                />
              </div>

              <AnimatedCTAButton type="submit" className="w-full">
                Submit Application
              </AnimatedCTAButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
