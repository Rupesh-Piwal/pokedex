import { BrowserRouter, Route, Routes } from "react-router";
import Pokemon from "./pages/Pokemon";
import PokemonList from "./pages/PokemonList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Pokemon />} />
        <Route path="/pokemon/:id" element={<PokemonList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
