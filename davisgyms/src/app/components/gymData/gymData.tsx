import { Gym } from "../dataTypes/Gym";


const gymLocations: Gym[] = [
    {
        id: 1,
        name: "UC Davis ARC",
        image: "/arc.jpeg",
        coordinates: [-121.7605, 38.5383],
        description: "The Main UC Davis Gym",
        link: "https://campusrecreation.ucdavis.edu/arc",
    },
    {
        id: 2,
        name: "UC Davis Track And Field",
        image: "/ucdTrack.jpeg",
        coordinates: [-121.7546, 38.5414],
        description: "The UC Davis Track And Field",
        link: "https://ucdavisaggies.com/facilities/woody-wilson-track/12",
    },

    {
        id: 3,
        name: "Community Fitness Davis",
        image: "/communityFitness.jpeg",
        coordinates: [ -121.70836, 38.55391 ],
        description: "Nearby Gym",
        link: "https://www.communityfitnessdavis.com/",
    },
    {
        id: 4,
        name: "Get Fit Davis Gym",
        image: "/getFitDavis.jpeg",
        coordinates: [ -121.67730, 38.55316 ],
        description: "Gym in Davis",
        link: "https://getfitdavis.com/",
    },
]

export default gymLocations;
