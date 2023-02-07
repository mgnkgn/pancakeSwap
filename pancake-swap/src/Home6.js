import React from "react";
import photoStavros from "./assets/home6/bottom-right@2x.webp";
import photoStavros1 from "./assets/home6/coin@2x.webp";
import photoStavros2 from "./assets/home6/top-left@2x.webp";
import photoStavros3 from "./assets/home6/top-right@2x.webp";
const Home6 = () => {
  return (
    <>
      {
        //<!-- Home6 - Stavros -->
      }
      <section class="home6">
        <div class="home6-container">
          <div class="home6-top">
            <div>
              <h2 class="home6-h2">
                <span class="stavros_span">CAKE</span> makes our world go round.
              </h2>
              <p>
                CAKE token is at the heart of the PancakeSwap ecosystem. Buy it,
                win it, farm it, spend it, stake it... heck, you can even vote
                with it!
              </p>
              <div>
                <button class="home6-buy-cake-btn">Buy CAKE</button>
                <a href="">Learn</a>
              </div>
            </div>
            {
              //<!-- Image CakeCoin wrap -->
            }

            <div class="home6-imagecontainer">
              <img
                class="home6-botright"
                src={photoStavros}
                alt="pancake image"
              />
              <img class="home6-coin" src={photoStavros1} alt="Cake coin" />
              <img
                class="home6-topleft"
                src={photoStavros2}
                alt="pancake image"
              />
              <img
                class="home6-topright"
                src={photoStavros3}
                alt="pancake image"
              />
            </div>
          </div>
          {
            //<!-- Stats of cake -->
          }
          <div class="home6-stats-table">
            <div>
              <p>Circulating Supply</p>
              <p class="home6-nums">146,467,235</p>
            </div>
            <div>
              <p>Total supply</p>
              <p class="home6-nums">339,969,596</p>
            </div>
            <div>
              <p>Max Supply</p>
              <p class="home6-nums">750,000,000</p>
            </div>
            <div>
              <p>Market cap</p>
              <p class="home6-nums">$650 million</p>
            </div>
            <div>
              <p>Burned to date</p>
              <p class="home6-nums">612,699,204</p>
            </div>
            <div>
              <p>Current emissions</p>
              <p class="home6-nums">11.16/block</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home6;
