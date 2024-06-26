"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `One only dies once, and if one does not die well, a good opportunity is lost and will not present itself again.
`;

export function JoseRizalQuote() {
  return (
    <>
      <p className="p-5 md:p-10 lg:text-3xl md:text-xl text-lg">
        One only dies once, and if one does not die well, a good opportunity is
        lost and will not present itself again.
      </p>
      <br />
      <span className="w-full text-right px-10">-Jose Rizal</span>
    </>
  );
}
