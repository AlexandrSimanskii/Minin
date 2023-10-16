import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FavoritesPages from "./pages/FavoritesPages";
import Loyout from "./components/Loyout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loyout />}>
        <Route path="" element={<Home />} />
        <Route path="/favorites" element={<FavoritesPages />} />
      </Route>
    </Routes>
  );
}

export default App;
