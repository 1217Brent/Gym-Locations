"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { Gym } from "./dataTypes/Gym";
import type { FeatureCollection, Point } from "geojson";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

type GymListProps = {
  gymList: Gym[];
};

const gymGeoJson = (gymList: Gym[]): FeatureCollection<Point, Gym> => {
  const validArray = gymList || ["undefined bro"];
  return {
    type: "FeatureCollection",
    features: validArray.map((gym: Gym) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: gym.coordinates,
      },
      properties: gym,
    })),
  };
};

function GymMap({ gymList }: GymListProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-121.75, 38.54],
      zoom: 15,
    });

    const geoJsonData = gymGeoJson(gymList as Gym[]);
    console.log("GeoJSON Data:", geoJsonData); // Log GeoJSON data

    map.current.on("load", () => {
      map.current!.addSource("gyms", { type: "geojson", data: geoJsonData });
      console.log("Source added");

      map.current!.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        (error, image) => {
          if (error) {
            console.error("Error loading marker image:", error);
            return;
          }

          if (image && !map.current!.hasImage("marker")) {
            map.current!.addImage("marker", image);
            console.log("Image added");
          }

          map.current!.addLayer({
            id: "gym-layer",
            type: "symbol",
            source: "gyms",
            layout: {
              "icon-image": "marker",
              "icon-size": 0.75,
              "icon-allow-overlap": true,
            },
          });
          console.log("Layer added");

          map.current!.on("click", "gym-layer", (e) => {
            if (e.features && e.features.length > 0) {
              const gym = e.features[0].properties;
              if (gym && gym.name) {
                console.log("Clicked gym:", gym.name);
              } else {
                console.log("Gym data is unavailable.");
              }
             }
          });
        }
      );
    });
  }, [gymList]);

  return <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />;
}

export default GymMap;
