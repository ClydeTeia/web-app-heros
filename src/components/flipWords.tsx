"use client";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function FlippingWords() {
  const words = [
    "Alan Turing", 
    "Ekkapol Chantawong", 
    "Desmond Thomas Doss", 
    "William Kyle Carpenter",
    "Favorite Comic/Anime Character"
  ];

  return (
    <div className="text-4xl mx-auto font-normal text-white dark:text-neutral-400 py-20">
      <FlipWords words={words} /> <br />
      is a modern hero
    </div>
  );
}