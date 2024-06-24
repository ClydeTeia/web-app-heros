"use client";
import React from "react";
import { color, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { start } from "repl";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeHeroesLocations() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: 14.5896,
      startLng: 120.979,
      endLat: 10.3157,
      endLng: 123.8854,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
      order: 2,
      startLat: 10.3157,
      startLng: 123.8854,
      endLat: 14.5995,
      endLng: 120.9842,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
      order: 3,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 10.682,
      endLng: 122.5634,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
      order: 4,
      startLat: 10.682,
      startLng: 122.5634,
      endLat: 14.5995,
      endLng: 120.9842,
      arcAlt: 0.4,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 14.4175,
      endLng: 120.9822,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
      order: 6,
      startLat: 14.4175,
      startLng: 120.9822,
      endLat: 35.6895,
      endLng: 139.6917,
      arcAlt: 0.6,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
      order: 7,
      startLat: 35.6895,
      startLng: 139.6917,
      endLat: 14.5995,
      endLng: 120.9842,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
      order: 8,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 41.9028,
      endLng: 12.4964,
      arcAlt: 0.8,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
      order: 9,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 14.5995,
      endLng: 120.9842,
      arcAlt: 0.9,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
      order: 10,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 48.8566,
      endLng: 2.3522,
      arcAlt: 1.0,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
      order: 11,
      startLat: 48.8566,
      startLng: 2.3522,
      endLat: 14.5995,
      endLng: 120.9842,
      arcAlt: 1.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
      order: 12,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 14.5832,
      endLng: 120.9797,
      arcAlt: 1.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
      order: 13,
      startLat: 14.5832,
      startLng: 120.9797,
      endLat: 10.682,
      endLng: 122.5634,
      arcAlt: 1.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  ];

  return (
    <div className="flex flex-row items-center justify-center h-screen md:h-auto relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            I will put the heroes location here
          </p>
        </motion.div>
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
