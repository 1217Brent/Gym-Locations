import GymList from "./components/UI/GymList";
import { JSX } from "react";
import GymMap from "./components/GymMap";
import gymLocations from "./components/gymData/gymData";
function App(): JSX.Element {
  return (
    <>
        <GymMap gymList={gymLocations} />
        <GymList />
    </>

  )
}

export default App;
