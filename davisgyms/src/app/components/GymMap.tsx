"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { Gym } from "./dataTypes/Gym";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

type GymListProps = {
  gymList: Gym[];
  currCoords: Gym["coordinates"];
};

function GymMap({ gymList, currCoords }: GymListProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Initial map setup
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: currCoords,
      zoom: 15,
    });

    map.current.on("load", () => {
      const geojsonData = {
        type: "FeatureCollection",
        features: gymList.map((gym) => ({
          type: "Feature",
          properties: {
            name: gym.name,
            description: gym.description || "",
          },
          geometry: {
            type: "Point",
            coordinates: gym.coordinates,
          },
        })),
      } as GeoJSON.FeatureCollection<GeoJSON.Point>;

      map.current?.addSource("gyms", {
        type: "geojson",
        data: geojsonData,
      });

      map.current?.addLayer({
        id: "gym-circles",
        type: "circle",
        source: "gyms",
        paint: {
          "circle-color": "#4264fb",
          "circle-radius": 8,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });

      // Click to fly to gym
      map.current?.on("click", "gym-circles", (e) => {
        const coords = e.features?.[0]?.geometry?.coordinates;
        if (coords && map.current) {
          map.current.flyTo({ center: coords as [number, number] });
        }
      });

      // Change cursor on hover
      map.current?.on("mouseenter", "gym-circles", () => {
        if (map.current) {
          map.current.getCanvas().style.cursor = "pointer";
        }
      });

      map.current?.on("mouseleave", "gym-circles", () => {
        if (map.current) {
          map.current.getCanvas().style.cursor = "";
        }
      });
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [gymList, currCoords]);



  return <div ref={mapContainer} style={{ width: "100%", height: "500px" }} />;
}

export default GymMap;
