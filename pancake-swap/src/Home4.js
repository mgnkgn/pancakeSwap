import React, { useContext } from "react";
import Footer from "./Footer";
import bnbLogo from "./assets/home4/BNB@2x.webp"
import btcLogo from "./assets/home4/BTC@2x.webp"
import cakeLogo from "./assets/home4/CAKE@2x.webp"
import { MotionImageContainer } from "./MotionImage";
import { ThemeContext } from "./context/light-ctx";




const Home4 = () => {
  const images = [bnbLogo, btcLogo, cakeLogo];
  const { isLight } = useContext(ThemeContext);

  return (
    <>
      {/* Home4 -fatih */}
      <div className={isLight ? "home4" : "home4-DM"}>
        <div className="home4-container">
          <div className="home4-textcontainer">
            <div>
              <h2 className={isLight ? "home4-h2" : "home4-h2-DM"}>
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
              <button className={isLight ? "home4-btn" : "home4-btn-DM"}>Trade Now</button>
              <a href="#">Learn</a>
            </div>
          </div>
          <MotionImageContainer images={images} className="home4-imagecontainer" />
        </div>
      </div>
    </>
  );
};

export default Home4;

