"use client";

import { JSX, MouseEventHandler } from "react";
import { Gym } from "../dataTypes/Gym";


type GymCardProps = {
  gym: Omit<Gym, "id" | "coordinates">
  handleCoordsChange: MouseEventHandler<HTMLDivElement>;
}

function GymCard({ gym, handleCoordsChange }: GymCardProps): JSX.Element {
  const { name, image, description } = gym;

  return (
    <div
      onClick={handleCoordsChange}
      className="w-72 h-80 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden cursor-pointer group"
    >
      <div className="w-full h-36 bg-gray-100 flex items-center justify-center overflow-hidden mb-3 rounded-t-xl">
        <img
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          src={image}
          alt={name}
        />
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 truncate">
          {name}
        </h5>
        <p className="mb-2 text-sm text-gray-700 line-clamp-3 flex-1">
          {description}
        </p>
        <div className="mt-auto pt-2">
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 transition-colors duration-200"
            onClick={(e) => e.stopPropagation()} // Prevent card click from firing
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export { GymCard };
