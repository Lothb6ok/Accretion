"use client";
import { motion } from "motion/react";

export const UnderlineVector = () => {
  return (
    <svg
      width="197"
      height="8"
      viewBox="0 0 197 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M1.00009 6.0373C77.7626 -0.644356 120.347 -0.643809 195.335 5.82942"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        stroke="#006FFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
