"use client";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function FlippingWords() {
  const words = ["Teddie", "Manaf", "Ian"];

  return (
    <div className="text-4xl mx-auto font-normal text-white dark:text-neutral-400 py-20">
      <FlipWords words={words} /> <br />
      are modern heroes
    </div>
  );
}