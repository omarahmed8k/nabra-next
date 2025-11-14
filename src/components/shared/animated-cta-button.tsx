"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

interface AnimatedCTAButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function AnimatedCTAButton({ href, children }: AnimatedCTAButtonProps) {
  return (
    <Link href={href} className="inline-block group">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Outer border with animated glow */}
        <motion.div
          className="relative rounded-full p-[2px]"
          style={{
            background: "linear-gradient(90deg, rgba(80,20,84,0.8), rgba(139,36,144,0.8), rgba(80,20,84,0.8))",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Inner black background with gradient overlay */}
          <motion.div
            className="relative px-12 py-4 bg-black rounded-full overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated red gradient fill on hover */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(90deg, #8b1a1a 0%, #c92a2a 50%, #8b1a1a 100%)",
                backgroundSize: "200% 100%",
              }}
              initial={{ opacity: 0 }}
              whileHover={{ 
                opacity: 1,
                backgroundPosition: ["0% 50%", "100% 50%"],
                transition: {
                  opacity: { duration: 0.3 },
                  backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" }
                }
              }}
            />
            
            {/* Red dot indicator */}
            <motion.div
              className="absolute left-6 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Text content */}
            <span className="relative z-10 text-white font-semibold text-lg">
              {children}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
