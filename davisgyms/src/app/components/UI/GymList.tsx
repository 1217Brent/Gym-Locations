"use client";

import { JSX } from "react";
import { Gym } from "../dataTypes/Gym";
import { GymCard } from "./GymCard";

interface GymListProps {
  gyms: Gym[];
  handleSelectCoordinates: (coordinates: Gym["coordinates"]) => void;
}

function GymList({ gyms, handleSelectCoordinates }: GymListProps): JSX.Element {
  return (
    <div className="overflow-x-auto w-full">
      <div className="flex flex-nowrap gap-6 px-4 py-2 min-w-fit">
        {gyms.map((gym) => (
          <GymCard
            key={gym.id}
            gym={{
              name: gym.name,
              image: gym.image,
              description: gym.description,
              link: gym.link,
            }}
            handleCoordsChange={() => handleSelectCoordinates(gym.coordinates)}
          />
        ))}
      </div>
    </div>
  );
}

export default GymList;
