"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function HeroDefinition() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        <p>What defines a hero?</p>
        <br />
        <Highlight className="text-black dark:text-white">
          a person who is admired or idealized for courage, outstanding
          achievements, or noble qualities.
        </Highlight>
        <br />
        <p className="text-right text-lg px-4 md:text-1xl lg:text-3xl pt-5">
          -Oxford Dictionary
        </p>
      </motion.h1>
    </HeroHighlight>
  );
}
