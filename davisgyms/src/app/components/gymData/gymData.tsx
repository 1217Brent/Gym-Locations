import { Gym } from "../dataTypes/Gym";

const gymLocations: Gym[] = [
    {
        id: 1,
        name: "UC Davis ARC",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/UC_Davis_Activities_and_Recreation_Center.jpg",
        coordinates: [-121.7605, 38.5383],
        description: "The Main UC Davis Gym",
    },
    {
        id: 2,
        name: "UC Davis Track And Field",
        image: "https://campusrecreation.ucdavis.edu/sites/g/files/dgvnsk7736/files/styles/sf_landscape_16x9/public/images/article/track1.jpg",
        coordinates: [-121.7546, 38.5414],
        description: "The UC Davis Track And Field",
    },

    {
        id: 3,
        name: "Community Fitness Davis",
        image: "https://communityfitnessdavis.com/wp-content/uploads/2021/04/CFD-Logo-1.png",
        coordinates: [ -121.70836, 38.55391 ],
        description: "Nearby Gym",
    },
    {
        id: 4,
        name: "Get Fit Davis Gym",
        image: "https://getfitdavis.com/wp-content/uploads/2022/04/GetFitDavisSportLogo.png",
        coordinates: [ -121.67730, 38.55316 ],
        description: "Gym in Davis",
    },
]

export default gymLocations;
