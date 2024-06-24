"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Jose Rizal - National Hero of the Philippines",
    description:
      "Birth: June 19, 1861 Death: December 30, 1896 José Rizal was a Filipino nationalist, writer, and polymath. He is considered the greatest national hero of the Philippines for his pivotal role in the reform movement against Spanish rule. Through his writings, Rizal inspired the Filipino people to fight for their rights and freedom.",
    contributions: [
      'Literary Works: Author of "Noli Me Tangere" (1887) and "El Filibusterismo" (1891), novels that exposed the abuses of Spanish colonial officials and clergy. These works fueled the Filipino nationalist movement.',
      "Peaceful Reforms: Advocated for peaceful reforms rather than violent revolution, seeking equality and fair treatment under Spanish rule through education and civic engagement.",
      "Martyrdom: His execution on December 30, 1896, by Spanish authorities turned him into a martyr and galvanized the Filipino people to intensify their struggle for independence.",
    ],

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Jose_Rizal_full.jpg/330px-Jose_Rizal_full.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Andrés Bonifacio - Father of the Philippine Revolution",
    description:
      "Birth: November 30, 1863 Death: May 10, 1897 Andrés Bonifacio was a Filipino nationalist and revolutionary leader. He is best known as the founder and leader of the Katipunan, a secret society that spearheaded the Philippine Revolution against Spanish colonial rule. Bonifacio's commitment to the cause of independence and his role in igniting the flames of revolution have made him a revered figure in Philippine history.",
    contributions: [
      "Katipunan (KKK): Founded in 1892, the Katipunan aimed to gain independence from Spain through armed revolt. Bonifacio's leadership and organizational skills were crucial in the initial stages of the revolution.",
      "Revolutionary Leader: Led numerous uprisings, including the notable Cry of Pugad Lawin in 1896, which marked the start of open rebellion against Spanish rule.",
      "Patriotism and Advocacy: Advocated for national unity, independence, and the establishment of a sovereign Filipino nation free from colonial oppression.",
    ],

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Andr%C3%A9s_Bonifacio_%28cropped%29.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <a href="about-hero"></a>

      <StickyScroll content={content} />
    </div>
  );
}
