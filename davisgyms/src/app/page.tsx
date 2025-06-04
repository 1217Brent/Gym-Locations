"use client";

import { useState } from "react";
import { JSX } from "react";
import { Gym } from "./components/dataTypes/Gym";
import gymLocations from "./components/gymData/gymData";
import GymList from "./components/UI/GymList";
import GymMap from "./components/GymMap";

type Coords = Gym["coordinates"];

function App(): JSX.Element {
  const [currCoords, setCurrCoords] = useState<Coords>([-121.75, 38.54]);

  function handleSelectGym(coordinates: Coords): void {
    setCurrCoords(coordinates);
    console.log(coordinates);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        <img
          src="/heroImage.jpg"
          alt="Gym Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-md">
            Find Your Strength
          </h1>
          <p className="mt-4 text-white text-lg md:text-xl max-w-xl drop-shadow-sm">
            Discover top-rated gyms in Davis and take your fitness journey to the next level.
          </p>
          <a
            href="#explore"
            className="mt-6 inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Explore Gyms
          </a>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-8 bg-black">
        <div className="rounded-2xl mt-10 overflow-hidden shadow-md">
          <GymMap gymList={gymLocations} currCoords={currCoords} />
        </div>
      </section>

      {/* Gym Cards Section */}
      <section
        id="explore"
        className="w-full px-6 md:px-12 lg:px-24 py-8 bg-black"
      >
        <h2 className="text-4xl font-bold text-white m-6 text-center">
          Explore Gyms
        </h2>
        <div className="rounded-2xl shadow-sm bg-black p-5 border border-white">
          <GymList
            gyms={gymLocations}
            handleSelectCoordinates={handleSelectGym}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 text-sm mt-auto">
        © {new Date().getFullYear()} Davis Gyms. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
