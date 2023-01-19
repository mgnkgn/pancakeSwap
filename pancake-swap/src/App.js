import React from "react";
import Footer from "./Footer";
import Pottery from "./Pottery";
import Overview from "./Overview";
import Perpetual from "./Perpetual";
import Swap from "./Swap";
import Limit from "./Limit";
import Bridge from "./Bridge";
import Ifo from "./Ifo";
import Home from "./Home";
import "./stylesheets/index.scss";

function App() {
  return (
    <div className="App">
      {/* <Pottery /> */}
{/*       <Overview /> */}
      {/* <Perpetual /> */}
      <Swap />
{/*       <Footer /> */}
      <Limit />
      <Bridge />
      <Ifo /> 
      <Home />
    </div>
  );
}

export default App;
