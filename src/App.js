import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NasaPhoto from "./pages/NasaPhoto";
import MarsRoverPhotos from "./pages/MarsRoverPhotos";
import IAVLibrary from "./pages/IAVLibrary";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<NasaPhoto />} path="/nasaphoto" />
          <Route element={<MarsRoverPhotos />} path="/marsroverphotos" />
          <Route element={<IAVLibrary />} path="/imageandvideolibrary" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
