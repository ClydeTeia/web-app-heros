"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { InfiniteMovingCards } from "./ui/movingCards";

function Section3() {
  const items = [
    {
      quote:
        "By providing opportunities for those who have the drive to create progress in our country.",
      name: "TEDDIE JOHN RAJEEV",
      title: "BSSE-2",
    },
    {
      quote:
        "As a student, I can become a bayani by helping my classmates, studying hard, and being kind to everyone. Joining community service, being honest, and taking care of the environment also matter. By doing these simple things, I can inspire others and make a big difference, becoming a hero in my own way.",
      name: "MANAF KASSIM",
      title: "BSSE-2",
    },
    {
      quote:
        "I can be a hero by creating projects that help people worldwide: improving healthcare, developing accessible apps, supporting education, contributing to open source, reducing environmental impact, and promoting ethical AI.",
      name: "IAN CLYDE TEJADA",
      title: "BSSE-2",
    },
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
