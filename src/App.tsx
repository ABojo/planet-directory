import { useState } from "react";
import planetData from "./utils/data.json";

function App() {
  const [planets, setPlanets] = useState(planetData);

  return <div></div>;
}

export default App;
