// export default interface Gym {
//     name: string;
//     coordinates: [number, number];
//     description: string;
//     id: number;
// }
import GymCard from "./GymCard"; // returns a JSX Element takes in Gym Data Type
import Gym from "../dataTypes/Gym";
import { useState } from "react";
import gymDataList from "../GymData/gymData";
type DataType = {
    gymList: Gym[];
}

const GymList: React.FC<DataType> = ({gymList}) => { // You Dont need to add a return type, because it also thinks its going to return JSX code
    return (
        // Now I want to iterate over gymDataList and return each gym information
        gymDataList.map((gym, index) => {
            return (
                <GymCard key = {index} name = {gym.name} description = {gym.description} />
            )
        })
    );
}

export default GymList;