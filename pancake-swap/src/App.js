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
import Home4 from "./Home4";
import "./stylesheets/index.scss";
import { TopNavbar } from "./TopNavbar";
import Home from "./Home";
import { ThemeProvider } from "./context/light-ctx";

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
      </Routes>
    </ThemeProvider>
  );
}

export default App;
