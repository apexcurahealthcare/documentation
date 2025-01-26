"use client";

import React from "react";
import { motion } from "motion/react";
const Copyright = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ y: [20, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-center w-full my-4">
        <p className="text-gray-400 text-sm sm:text-xs text-center">
          © 2025 ApexCura Healthcare Platform. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Copyright;
