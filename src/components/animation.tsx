"use client";
import { motion } from "framer-motion";

export const Section = motion.section;
export const MotionDiv = motion.div;
export const Div = motion.div;
export const H1 = motion.h1;
export const H2 = motion.h2;
export const H5 = motion.h5;
export const P = motion.p;
export const Nav = motion.nav;
export const Ul = motion.ul;
export const MotionH2 = motion.h2;
export const MotionSection = motion.section;

export const titleEffect = {
   initial: { opacity: 0, y: 25 },
   whileInView: { opacity: 1, y: 0 },
   transition: { duration: 0.5 },
   viewport: { once: true },
};

export const cartEffect = (i: number) => {
   return {
      initial: { opacity: 0, y: 25 },
      whileInView: { opacity: 1, y: 0 },
      transition: {
         duration: 0.5,
         ease: "easeOut",
         delay: 0.1 * i,
      },
      viewport: { once: true },
   };
};
