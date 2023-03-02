import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvDetail from "./page/TvDetail";
import Mainpage from "./page/Mainpage";
import Tvpage from "./page/Tvpage";
import MovieDetail from "./page/MovieDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/tv" element={<Tvpage />} />
        <Route path="/movie:id" element={<MovieDetail />} />
        <Route path="/tv:id" element={<TvDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
