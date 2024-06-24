"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { InfiniteMovingCards } from "./ui/movingCards";

function Section3() {
  const items = [
    {
      quote: "teddie is pogi",
      name: "TEDDIE JOHN RAJEEV",
      title: "CEO",
    },
    {
      quote: "i love junem",
      name: "MANAF KASSIM",
      title: "GAMER",
    },
    {
      quote: "DADDY'S HOME",
      name: "IAN CLYDE TEJADA",
      title: "SUGAR DADDY",
    },
    // Add more items as needed
  ];

  return (
    <div className={cn("use client")}>
      <h1 className="text-white text-5xl font-bold mb-8 text-center mt-4 bg-slate-700 p-4 rounded-md">
        HOW CAN A STUDENT LIKE YOU BECOME A BAYANI IN YOUR OWN WAY
      </h1>
      <InfiniteMovingCards items={items} />
    </div>
  );
}

export default Section3;
