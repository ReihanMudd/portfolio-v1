"use client";

import { motion, type Variants } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  // Stagger variants for text reveal
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6">
      {/* Ambient Background Glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container-custom mx-auto relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.span
            variants={item}
            className="text-accent font-medium tracking-widest uppercase mb-6 text-sm md:text-base"
          >
            — Introduction
          </motion.span>

          <div className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-8 mix-blend-difference text-foreground">
            <motion.div variants={item}>
              {personalInfo.name.split(" ")[0]}
            </motion.div>
            <motion.div
              variants={item}
              className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700"
            >
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </motion.div>
          </div>

          <motion.h2
            variants={item}
            className="text-2xl md:text-4xl font-light text-muted-foreground mb-8 max-w-2xl"
          >
            {personalInfo.headline}
          </motion.h2>

          <motion.p
            variants={item}
            className="text-base md:text-lg text-zinc-400 max-w-lg mb-12 leading-relaxed"
          >
            {personalInfo.subtext}
          </motion.p>

          <motion.div variants={item}>
            <a
              href="#projects"
              className="group flex items-center gap-3 text-foreground font-medium text-lg hover:text-accent transition-colors duration-300"
            >
              <span className="relative">
                See Selected Work
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
