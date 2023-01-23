import React from "react";
import Footer from "./Footer";
import Pottery from "./Pottery";
import Overview from "./Overview";
import Perpetual from "./Perpetual";

import "./stylesheets/index.scss";

function App() {
  return (
    <div className="App">
      <Pottery />
      <Overview />
      {/* <Perpetual /> */}
      <Footer />
    </div>
  );
}

export default App;
