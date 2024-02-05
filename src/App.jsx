// import { useState } from "react";
import "./sass/main.scss";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {browserHistory} from "react-router-dom"
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Header.jsx";
import Destinations from "./pages/Destinations.jsx";
import Crew from "./pages/Crew.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destinations />} />
          <Route path="/crew" element={<Crew />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
