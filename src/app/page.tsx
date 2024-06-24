import FlippingWords from "@/components/flipWords";
import { GlobeHeroesLocations } from "@/components/globe";

import Section1 from "@/components/section1";
import { TracingBeam } from "@/components/ui/tracing-beam";
import HeroQualities from "@/components/heroqualities";
import Section3 from "@/components/section3";

export default function Home() {
  return (
    <TracingBeam>
      <main className="flex flex-col w-full h-full py-24 md:p-10">
        <Section1 />
        <HeroQualities />
        <FlippingWords />
        <GlobeHeroesLocations />
        <Section3 />
      </main>
    </TracingBeam>
  );
}
