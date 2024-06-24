import React from "react";
import { HeroDefinition } from "./heroHighlightPage";
import { JoseRizalQuote } from "./generateText";
import { StickyScrollRevealDemo } from "./stickyScroll";

type Props = {};

export default function Section1({}: Props) {
  return (
    <div className="flex flex-col">
      <HeroDefinition />
      <JoseRizalQuote />
      <StickyScrollRevealDemo />
    </div>
  );
}
