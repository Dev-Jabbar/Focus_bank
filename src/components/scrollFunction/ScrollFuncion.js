"use client";
import React from "react";
import { motion } from "framer-motion";

const ScrollFuncion = () => {
  return (
    <>
      <motion.span
        className="dark:text-white hidden md:block "
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1, duration: 5 }}
      >
        hold shift + mouse up or down to scroll
      </motion.span>
    </>
  );
};

export default ScrollFuncion;
