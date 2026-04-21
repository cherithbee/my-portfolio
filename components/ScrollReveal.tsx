"use client";
import { motion } from "framer-motion";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Starts invisible and 30px down
      whileInView={{ opacity: 1, y: 0 }} // Fades in and moves up
      viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into view
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}