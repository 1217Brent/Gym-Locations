import { GymCard } from "./GymCard";
import gymLocations from "../gymData/gymData";
import { Gym } from "../dataTypes/Gym";
import { JSX } from "react";

function GymList(): JSX.Element {
  return (
    <>
      {gymLocations.map((gym: Omit<Gym, "coordinates">) => (
        <GymCard
          key={gym.id}
          image={gym.image}
          description={gym.description}
          name={gym.name}
        />
      ))}
    </>
  );
}

export default GymList;
