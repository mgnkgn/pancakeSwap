import React from "react";
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
import Home7 from "./Home7";
import { ParentComponent } from "./form";
import { ClipboardCopy } from "./test";

function App() {
  return (
    <div className="App">
      <ClipboardCopy /
      <Home4 />
      <Home7 />
      <Swap />
      <Limit />
      <Bridge />
      <Ifo />
    </div>
  );
}

export default App;
