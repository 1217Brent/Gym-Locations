"use client"

import { JSX } from "react";
import { Gym } from "../dataTypes/Gym";
import { GymCard } from "./GymCard";


interface GymListProps {
  gyms: Gym[];
  handleSelectCoordinates: (coordinates: Gym["coordinates"]) => void;
}

function GymList({ gyms, handleSelectCoordinates }: GymListProps): JSX.Element {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {gyms.map((gym) => (
        <GymCard
          key={gym.id}
          gym={{
            name: gym.name,
            image: gym.image,
            description: gym.description,
          }}
          handleCoordsChange={() => handleSelectCoordinates(gym.coordinates)}
        />
      ))}
    </div>
  );
}

export default GymList;
