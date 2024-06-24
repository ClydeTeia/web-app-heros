"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { FlipWords } from "@/components/ui/flip-words";

export default function FlippingWords() {
  const words = ["Teddie", "Manaf", "Ian"];

  return (
    <div className="h-full relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20  pointer-events-none" />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        <div className="h-[25rem] flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-white dark:text-neutral-400">
            <FlipWords words={words} /> <br />
            are modern heroes
          </div>
        </div>
      </h1>
    </div>
  );
}
