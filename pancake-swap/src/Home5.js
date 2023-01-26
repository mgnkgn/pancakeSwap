import React, { useContext } from "react";
import { ThemeContext } from "./context/light-ctx";

import purpleImg from "./assets/home-5/purple_7.webp";
import greenImg from "./assets/home-5/green_2.webp";
import turquoiseImg from "./assets/home-5/turquoise_4.webp";
import purpleImg2 from "./assets/home-5/purple_6.webp";
import yellowImg from "./assets/home-5/yellow_9.webp";
import gambleCard from "./assets/home-5/card_yugioh.webp";
import gambleCardGreen from "./assets/home-5/card_green.webp";
import gambleCardPink from "./assets/home-5/card_pink.webp";
import gambleCardYugioh from "./assets/home-5/card_yugioh_bottom.webp";
import sphereImg from "./assets/home-5/home-5_sphere.svg";
import arrowImg from "./assets/home-5/home-5_arrowBtn.svg";
import clipImg from "./assets/home-5/home-5_clip.svg";
import arrowImg2 from "./assets/home-5/home-5_arrowBtn.svg";

const Home5 = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <section
      className={
        isLight ? "home-5__container" : "home-5__container home-5__container-DM"
      }
    >
      {/* <!-- 8Pool Right Top --> */}
      <div className="home-5__container__billard-balls">
        <div className="home-5__container__billard-balls__purple_container billard_ball_container">
          <img
            src={purpleImg}
            alt="billard ball"
            className="billard-ball-purple-top"
          />
        </div>
        <div className="home-5__container__billard-balls__green_container billard_ball_container">
          <img
            src={greenImg}
            alt="billard ball"
            className="billard-ball-green-top"
          />
        </div>
        <div className="home-5__container__billard-balls__turquoise_container billard_ball_container">
          <img
            src={turquoiseImg}
            alt="billard ball"
            className="billard-ball-turquiose"
          />
        </div>
        <div className="home-5__container__billard-balls__purple-bottom_container billard_ball_container">
          <img
            src={purpleImg2}
            alt="billard ball"
            className="billard-ball-purple-bottom"
          />
        </div>
        <div className="home-5__container__billard-balls__yellow_container billard_ball_container">
          <img
            src={yellowImg}
            alt="billard ball"
            className="billard-ball-yellow"
          />
        </div>
      </div>
      {/* <!-- Cards left bottom --> */}
      <div className="home-5__container__gamble-cards">
        <div className="home-5__container__gamble-cards_yugioh-top_container gamble_card_container">
          <img
            src={gambleCard}
            alt="gamble card"
            className="gamble-card-yugioh-top"
          />
        </div>
        <div className="home-5__container__gamble-cards_green_container gamble_card_container">
          <img
            src={gambleCardGreen}
            alt="gamble card"
            className="gamble-card-green"
          />
        </div>
        <div className="home-5__container__gamble-cards_pink_container gamble_card_container">
          <img
            src={gambleCardPink}
            alt="gamble card"
            className="gamble-card-pink"
          />
        </div>
        <div className="home-5__container__gamble-cards_yugioh-bottom_container gamble_card_container">
          <img
            src={gambleCardYugioh}
            alt="gamble card"
            className="gamble-card-yugioh-bottom"
          />
        </div>
      </div>
      <div
        className={
          isLight
            ? "home-5__container__main"
            : "home-5__container__main home-5__container__main-DM"
        }
      >
        <h3 className="dark-h3">
          <span>Win</span> millions in prizes
        </h3>
        <p className="home-5__container__main_paragraph">
          Provably fair, on-chain games. Win big with PancakeSwap.
        </p>
        <div className="home-5__container__main__cards-container">
          {/* <!-- Card on the left --> */}
          <div className="card card-left">
            <img
              src={sphereImg}
              alt="sphere icon"
              className="card-left_first-img"
            />
            <div className="card-left_middle-row">
              <h5>Prediction</h5>
              <h3>$840 million</h3>
              <h5>in BNB + CAKE won so far</h5>
              <p>Predict the price trend of BNB or CAKE to win</p>
            </div>
            <button className="card_last_row card_btn">
              Play
              <img
                src={arrowImg}
                alt="arrow icon"
                className="card_btn_img-arrow"
              />
            </button>
          </div>
          {/* <!-- Card on the left finishes -->
      <!-- Card on the right --> */}
          <div className="card card-right">
            <img
              src={clipImg}
              alt="clip icon"
              className="card-right_first-img"
            />
            <div className="card-right_middle-row">
              <h5>Lottery</h5>
              <h3>$111,721</h3>
              <h5>in CAKE prizes this round</h5>
              <p>Buy tickets with CAKE, win CAKE if your numbers match</p>
            </div>
            <button className="card_last_row card_btn">
              Buy Tickets
              <img
                src={arrowImg2}
                alt="arrow icon"
                className="card_btn_img-arrow"
              />
            </button>
          </div>
          {/* <!-- Card on the right finishes --> */}
        </div>
      </div>
    </section>
  );
};

export default Home5;
