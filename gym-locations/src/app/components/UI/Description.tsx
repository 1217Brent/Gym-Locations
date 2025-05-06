import { JSX } from "react";
import DescriptionCard from "../dataTypes/DescriptionCard";
import { LngLat, LngLatLike } from "mapbox-gl";

// const Description: React.FC<DescriptionCard> = ({ image, description }) => {
//   return (
//     <a
//       href="#"
//       className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//     >
//       <img src={image} />

//       <p className="font-normal text-gray-700 dark:text-gray-400">
//         {description}
//       </p>
//     </a>
//   );
// };
//Function Name (variables {}: variable Type): Return Type

// function Funct(yes: string) {
//     const coord = [100, 100];
//     console.log(yes);
//     return coord as LngLatLike;
// }
function Description({image, description}: DescriptionCard): JSX.Element {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <img src={image} />

      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </a>
  );
}

export default Description;
