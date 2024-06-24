import FlippingWords from "@/components/flipWords";
import { GlobeHeroesLocations } from "@/components/globe";
import Image from "next/image";
import Section3 from "@/components/section3";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FlippingWords />
      <GlobeHeroesLocations />
      <Section3 />
    </main>
  );
}
