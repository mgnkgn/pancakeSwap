import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./Footer";
import Pottery from "./Pottery";
import Overview from "./Overview";
import Perpetual from "./Perpetual";
import Swap from "./Swap";
import Limit from "./Limit";
import Bridge from "./Bridge";
import Ifo from "./Ifo";
import "./stylesheets/index.scss";
import { TopNavbar } from "./TopNavbar";
import Home from "./Home";
import { ThemeProvider } from "./context/light-ctx";
import DraggableTest from "./DraggableTest";
import Liquidity from "./Liquidity";


function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <TopNavbar />
              <Home />
              <Footer />
            </div>
          }
        />
        <Route path="/perpetual" element={<Perpetual />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/pottery" element={<Pottery />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/limit" element={<Limit />} />
        <Route path="/ifo" element={<Ifo />} />
        <Route path="/bridge" element={<Bridge />} />
        <Route path="/liquidity" element={<Liquidity />} />
        <Route path="/competition" element={<Competition />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
