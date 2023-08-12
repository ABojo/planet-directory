import { useState } from "react";
import planetData from "./utils/data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Planet from "./components/Planet/Planet";
import PlanetT from "./types/Planet";

function App() {
  const [planets] = useState(planetData);

  function findPlanetByName(planetName?: string): PlanetT | undefined {
    if (!planetName) return;

    const pNameLowerCase = planetName.toLowerCase();

    return planets.find((planet) => planet.name.toLowerCase() == pNameLowerCase);
  }

  return (
    <div>
      <BrowserRouter>
        <Header planets={planets} />
        <Routes>
          <Route path="/planet/:planet" element={<Planet findPlanetByName={findPlanetByName} />} />
          <Route index element={<div>HOME</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
