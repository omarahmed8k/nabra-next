"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

interface AnimatedCTAButtonProps {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function AnimatedCTAButton({
  href,
  children,
  onClick,
  type = "button",
  className = "",
}: AnimatedCTAButtonProps) {
  const content = (
    <motion.div
      className="relative px-10 py-4 rounded-[40px] overflow-hidden"
      style={{
        backdropFilter: "blur(15px)",
        background: "linear-gradient(112deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.11) 38%)",
        borderLeft: "2px solid rgba(255, 255, 255, 0.5)",
        borderTop: "2px solid rgba(255, 255, 255, 0.5)",
      }}
      whileHover={{ scale: 1.02, paddingLeft: "50px", paddingRight: "50px"}}
      transition={{ duration: 0.3 }}
    >
      {/* Inner glass layer */}
      <div
        className="absolute inset-0 rounded-[30px]"
        style={{
          backdropFilter: "blur(13px)",
          borderLeft: "2px solid rgba(255, 255, 255, 0)",
          borderTop: "2px solid rgba(255, 255, 255, 0)",
          margin: "5px",
        }}
      />

      {/* Radial gradient background (default visible) */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(127.9% 258% at -40.3% 0%, #f900fe 2.84%, #000000 90.14%, #000000 100%)",
        }}
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Purple dot that appears on hover */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div 
          className="w-6 h-6 rounded-full bg-[#f900fe]"
          style={{ 
            transform: "scale(0.57)",
          }}
        />
      </motion.div>

      {/* Text */}
      <motion.h2
        className="relative z-10 text-white font-bold text-center pointer-events-none"
        style={{ fontFamily: "Syne, sans-serif" }}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.h2>
    </motion.div>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className={`relative inline-block group ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative inline-block group ${className}`}
    >
      {content}
    </button>
  );
}
