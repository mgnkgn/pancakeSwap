import React from "react";
import Footer from "./Footer";
import bnbLogo from "./assets/home4/BNB@2x.webp"
import btcLogo from "./assets/home4/BTC@2x.webp"
import cakeLogo from "./assets/home4/CAKE@2x.webp"

const Home4 = () => {
  return (
    <>
      {/* Home4 -fatih */}
      <div className="home4">
        <div className="home4-container">
          <div className="home4-textcontainer">
            <div>
              <h2 className="home4-h2">
                <span id="trade">Trade</span> anything. No registration, no hassle.
              </h2>
            </div>
            <div>
              <p>
                Trade any token on BNB Smart Chain in seconds, just by connecting
                your wallet.
              </p>
            </div>
            <div>
              <button className="home4-btn">Trade Now</button>
              <a href="#">Learn</a>
            </div>
          </div>
          <div className="home4-imagecontainer">
            <img className="fmg1" src={bnbLogo} alt="" />
            <img className="fmg3" src={btcLogo} alt="" />
            <img className="fmg2" src={cakeLogo} alt="" />
          </div>
        </div>
      </div>
    </>


  );
};

export default Home4;
