"use client";

import { useState } from "react";
import { JSX } from "react";
import { FoodPlace } from "./components/dataTypes/FoodPlace";
import foodPlaceLocations from "./components/FoodPlaceData/foodPlaceData";
import FoodPlaceList from "./components/UI/FoodPlaceList";
import FoodPlaceMap from "./components/FoodMap";
import NavBar from "./components/UI/NavBar";
import SearchBar from "./components/SearchBar";
import DropDown from "./components/DropDown";

type Coords = FoodPlace["coordinates"];

function App(): JSX.Element {
  const [currCoords, setCurrCoords] = useState<Coords>([139.4413, 35.6999]);
  const [filteredFoodList, setFilteredFoodList] =
    useState<FoodPlace[]>(foodPlaceLocations);
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);

  function handleSelectFoodPlace(coordinates: Coords): void {
    setCurrCoords(coordinates);
    console.log("選択された座標:", coordinates);
  }

  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (input === "") {
      setFilteredFoodList(foodPlaceLocations);
      return;
    }

    const newList: FoodPlace[] = [];
    foodPlaceLocations.forEach((foodplace: FoodPlace) => {
      if (foodplace.name.includes(input)) {
        newList.push(foodplace);
      }
    });
    setFilteredFoodList(newList);
  };

  const handleDropDown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedCuisines(selectedOptions);

    if (selectedOptions.length === 0 || selectedOptions.includes("ALL")) {
      setFilteredFoodList(foodPlaceLocations);
      return;
    }

    const newList = foodPlaceLocations.filter((foodPlace) =>
      foodPlace.cusine.some((cuisine) =>
        selectedOptions.includes(cuisine.toLowerCase())
      )
    );
    setFilteredFoodList(newList);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        <img
          src="/hitotsubashi.jpg"
          alt="Food Hero"
          className="absolute inset-0 w-full h-full object-cover transform"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-md">
            Taste Tokyo
          </h1>
          <p className="mt-4 text-white text-lg md:text-xl max-w-xl drop-shadow-sm">
            一橋の近くのレストランで美味しい飯を食べよう！
          </p>
          <a
            href="#list-section"
            className="mt-6 inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Explore Eats
          </a>
        </div>
      </section>

      {/* Map Section */}
      <section
        id="map-section"
        className="z-0 w-full px-6 md:px-12 lg:px-24 py-8 mt-10 overflow-hidden"
      >
        <div className="p-30">
          <FoodPlaceMap foodList={filteredFoodList} currCoords={currCoords} />
        </div>
      </section>

      {/* List Section */}
      <section
        id="list-section"
        className="left-0 right-0 bg-black overflow-y-auto px-6 md:px-12 lg:px-24 py-8 z-50"
      >
        <h2 className="text-4xl font-bold text-white m-6 text-center">
          一橋に近いレストラン
        </h2>

        <div className="flex flex-col sm:flex-row items-start mb-3 sm:space-x-[3px]">
          <div className="flex-1 w-full">
            <SearchBar onSearch={handleSearchBar} />
          </div>
          <div className="w-full sm:w-1/4 mt-2 sm:mt-0">
            <DropDown
              handleChange={handleDropDown}
              multiple={true}
              value={selectedCuisines}
            />
          </div>
        </div>

        <div className="h-[500px] rounded-2xl shadow-sm bg-black p-5 border border-white">
          <FoodPlaceList
            foodplaces={filteredFoodList}
            handleSelectCoordinates={handleSelectFoodPlace}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 text-sm mt-auto">
        © {new Date().getFullYear()} Hitotsubashi Eats. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
