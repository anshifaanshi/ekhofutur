"use client";
import React from "react";
import { motion } from "motion/react";

export function LampDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, width: "0%" }}
      whileInView={{ opacity: 1, width: "100%" }}
      transition={{
        delay: 0.3,
        duration: 1.2,
        ease: "easeInOut",
      }}
      style={{
        height: "2px",
        backgroundColor: "#06b6d4", // cyan line color
        marginTop: "2rem", // space below button
        borderRadius: "1px",
      }}
    />
  );
}
