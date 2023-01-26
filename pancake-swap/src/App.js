import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./Footer";
import Pottery from "./Pottery";
import Overview from "./Overview";
import Perpetual from "./Perpetual";

import "./stylesheets/index.scss";
import { TopNavbar } from "./TopNavbar";
import Home from "./Home";
import { ThemeProvider } from "./context/light-ctx";
import DraggableTest from "./DraggableTest";

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
