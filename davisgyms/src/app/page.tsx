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

      {/* Map Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-8">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <GymMap gymList={gymLocations} currCoords={currCoords} />
        </div>
      </section>

      {/* Gym Cards Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Explore Gyms</h2>
        <div className="rounded-2xl shadow-sm bg-white">
          <GymList gyms={gymLocations} handleSelectCoordinates={handleSelectGym} />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 mt-auto">
        © {new Date().getFullYear()} Davis Gyms. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
