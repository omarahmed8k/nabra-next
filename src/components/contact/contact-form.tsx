"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
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
    alert("Thank you for your message! We'll get back to you soon.");
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
        Send us a message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-300 font-semibold mb-2"
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
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-[#8b2490] focus:outline-none focus:ring-2 focus:ring-[#8b2490]/20 transition-all duration-200"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-300 font-semibold mb-2"
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
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-[#8b2490] focus:outline-none focus:ring-2 focus:ring-[#8b2490]/20 transition-all duration-200"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-gray-300 font-semibold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-[#8b2490] focus:outline-none focus:ring-2 focus:ring-[#8b2490]/20 transition-all duration-200"
            placeholder="+20 111 860 0015"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-gray-300 font-semibold mb-2"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-[#8b2490] focus:outline-none focus:ring-2 focus:ring-[#8b2490]/20 transition-all duration-200"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-300 font-semibold mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-[#8b2490] focus:outline-none focus:ring-2 focus:ring-[#8b2490]/20 transition-all duration-200 resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-linear-to-r from-[#501454] to-[#8b2490] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#501454]/50 transition-all duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
}
