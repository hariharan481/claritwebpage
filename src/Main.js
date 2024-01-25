import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderScreen } from "./Header/HeaderScreen";
import { Venuses } from "./components/Venuses";
import { Home } from "@mui/icons-material";
import { Teams } from "./components/Teams";
import { About } from "./components/About";
export const Main = () => {
  return (
    <>
      <HeaderScreen />{" "}
      <Router>
        <Routes>
          <Route path="/venuse" element={<Venuses />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};
