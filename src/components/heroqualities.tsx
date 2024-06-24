
import React from 'react';
import { WobbleCard } from './ui/wobble-card';

const HeroQualities = () => (
  <div className="my-36 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <div>
      <h1 className="text-white text-5xl font-bold mb-8 text-center mt-4 bg-black p-4 rounded-md">
        What are a hero&apos;s qualities?
      </h1>
    </div>

    <WobbleCard
      containerClassName="hero-quality-card"
    >
      <h2 className="text-xl font-bold mb-2">Strong will:</h2>
      <p className="text-md">
        To be a hero, you need the will to take action when everybody is doing the opposite reaction.
      </p>
    </WobbleCard>

    <WobbleCard
      containerClassName="hero-quality-card"
    >
      <h2 className="text-xl font-bold mb-2">Kindness:</h2>
      <p className="text-md">
        A hero has empathy and kindness to those who need it.
      </p>
    </WobbleCard>

    <WobbleCard
      containerClassName="hero-quality-card"
    >
      <h2 className="text-xl font-bold mb-2">Self-sacrifice:</h2>
      <p className="text-md">
        A hero is a person who puts others before himself.
      </p>
    </WobbleCard>

    <WobbleCard
      containerClassName="hero-quality-card"
    >
      <h2 className="text-xl font-bold mb-2">Service:</h2>
      <p className="text-md">
        A hero does not turn down when someone is in need.
      </p>
    </WobbleCard>

    <WobbleCard
      containerClassName="hero-quality-card"
    >
      <h2 className="text-xl font-bold mb-2">Sense of Justice:</h2>
      <p className="text-md">
        A hero must have a moral compass and must know when to take the right decisions.
      </p>
    </WobbleCard>
  </div>
);

export default HeroQualities;
