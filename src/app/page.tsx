import FlippingWords from "@/components/flipWords";
import { GlobeHeroesLocations } from "@/components/globe";
import Section1 from "@/components/section1";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <TracingBeam>
      <main className="flex flex-col w-full h-full py-24 md:p-10">
        <Section1 />
        <FlippingWords />
        <GlobeHeroesLocations />
      </main>
    </TracingBeam>
  );
}
