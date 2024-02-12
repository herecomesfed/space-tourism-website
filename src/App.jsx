// import { useState } from "react";
import "./sass/main.scss";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Home from "./pages/Header.jsx";
import Destinations from "./pages/Destinations.jsx";
import Crew from "./pages/Crew.jsx";
import Technology from "./pages/Technology.jsx";

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/destination"
            element={<Destinations bodyClassPage="destinations" />}
          />
          <Route path="/crew" element={<Crew bodyClassPage="crew" />} />
          <Route
            path="/technology"
            element={<Technology bodyClassPage="technology" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
