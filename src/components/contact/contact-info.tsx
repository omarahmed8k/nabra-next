"use client";

import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: "📍",
    title: "Cairo Office",
    details: ["Nasr City, Cairo, Egypt"],
  },
  {
    icon: "📧",
    title: "Email",
    details: ["info@nabra.com", "contact@nabra.com"],
  },
  {
    icon: "📞",
    title: "Phone",
    details: ["+20 111 860 0015", "+20 23 78 79 772"],
  },
  {
    icon: "⏰",
    title: "Business Hours",
    details: ["Sunday - Thursday: 9:00 AM - 6:00 PM", "Friday - Saturday: Closed"],
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white mb-8">
        Contact Information
      </h2>

      <div className="space-y-8">
        {contactInfo.map((info, index) => (
          <div key={index} className="bg-[#000000] border border-[#f0f0f0]/10 p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{info.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-[#f0f0f0]/80">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Media */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
        <div className="flex gap-4">
          {["Facebook", "Instagram", "LinkedIn", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="w-12 h-12 rounded-full bg-[#000000] border border-[#f0f0f0]/20 hover:bg-[#f900fe] hover:border-[#f900fe] hover:text-[#f0f0f0] transition-all duration-300 flex items-center justify-center font-bold text-[#f0f0f0]"
              aria-label={social}
            >
              {social[0]}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
