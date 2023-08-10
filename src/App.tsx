import { useState } from "react";
import planetData from "./utils/data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const [planets, setPlanets] = useState(planetData);

  return (
    <div>
      <BrowserRouter>
        <Header planets={planets} />
        <Routes>
          <Route path="/:planet" element={<div>PLanet</div>} />
          <Route index element={<div>HOME</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
