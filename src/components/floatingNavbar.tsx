"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#hero-definition",
    },
    {
      name: "About",
      link: "#about-hero",
      
    },
    {
      name: "Globe",
      link: "#globe",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

