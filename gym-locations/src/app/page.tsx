"use client";
import GymMap from "./components/GymMap";
import gymDataList from "./components/GymData/gymData";
import Gym from "./components/dataTypes/Gym";
import { useState } from "react";
import GymList from "./components/UI/GymList";
import Description from "./components/UI/Description";

export default function Home() {3
  const image = "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png";
  const description = "All Gyms In Davis, California";
  return (
    <div className="m-8 flex gap-4">
      <div className="mt-15 mr-5 ml-5 mb-5 flex-1">
        <GymMap gymList={gymDataList} />
      </div>
      <div className="mt-12 w-[400px]">
        <GymList gymCards={gymDataList}/>
        <Description image={image} description={description} />
      </div>
    </div>
  );
}
