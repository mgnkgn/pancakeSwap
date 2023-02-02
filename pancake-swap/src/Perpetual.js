import React from "react";
import { Link } from "react-router-dom";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";
import Draggable, { DraggableCore } from "react-draggable";
import PerpetualNav from "./PerpetualNav";
import PerpetualGraph from "./PerpetualGraph";

const Perpetual = () => {
  return (
    <>
      <div>
        <PerpetualNav />
        <main className="perpetual-main">
          <section className="left-first">
            <img
              src={require("./assets/perpetual/star_perpetual.svg").default}
              alt="star"
              className="left-first-img"
            />
          </section>

          <section className="left-second">
            <div className="left-second-1">
              BTCUSDT <span>Perpetual</span>
              <div className="submenu-left-1">
                <input
                  type="search"
                  name="submenu-left-1-src"
                  id="submenu-left-1-src"
                  className="submenu-left-1-src"
                  placeholder="Search"
                />
                <div className="submenu-left-1-2nd-row">
                  <img
                    src={
                      require("./assets/perpetual/star_perpetual.svg").default
                    }
                    alt="star_perpetual"
                    className="submenu-left-1-2nd-row-img"
                  />
                  <div className="submenu-row-usd">USDⓈ-M</div>
                </div>

                <div className="btc-submenu-main">
                  <div className="btc-submenu-main-headers">
                    <div className="btc-submenu-main-headers-symbol">
                      Symbols
                    </div>
                    <div className="btc-submenu-main-headers-price">
                      Last Price
                    </div>
                    <div className="btc-submenu-main-headers-vol">Vol</div>
                  </div>

                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div className="btc-submenu-main-row">
                    <div className="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        className="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div className="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div className="btc-submenu-main-row-price">16,295</div>
                    <div className="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-second-2">16601</div>
            <div className="left-second-3">
              <div className="left-second-3-1 left-second-3-row">
                <div className="up">Mark</div>
                <div className="down">16,614</div>
              </div>
              <div className="left-second-3-2 left-second-3-row">
                <div className="up">Index</div>
                <div className="down">16,632</div>
              </div>
              <div className="left-second-3-3 left-second-3-row">
                <div className="up">Funding / Countdown</div>
                <div className="down">
                  <span className="down-span-left">0.0001%</span>
                  <span className="down-span-right"> 00:55:34</span>
                </div>
              </div>
              <div className="left-second-3-4 left-second-3-row">
                <div className="up">24h Change</div>
                <div className="down">-32 -0.19%</div>
              </div>
              <div className="left-second-3-5 left-second-3-row">
                <div className="up">24h High</div>
                <div className="down">17,168</div>
              </div>
              <div className="left-second-3-6 left-second-3-row">
                <div className="up">24h Low</div>
                <div className="down">15,811</div>
              </div>
              <div className="left-second-3-7 left-second-3-row">
                <div className="up">24h Volume(BTC)</div>
                <div className="down">2,689.732</div>
              </div>
              <div className="left-second-3-8 left-second-3-row">
                <div className="up">24h Volume(USDT)</div>
                <div className="down">44,319,163.94</div>
              </div>
            </div>
            <div className="left-second-4">
              <img
                src={
                  require("./assets/perpetual/arrowish_settings.svg").default
                }
                alt="arrowish_settings"
                className="left-second-4-img"
              />
            </div>
          </section>

          <Draggable handle=".left-third-row1">
            <section className="left-third">
              <div className="left-third-row1">
                <div className="left-third-row1-left">
                  <div className="left-third-row1-left-time">Time</div>
                  <div>15m</div>
                  <div>1H</div>
                  <div>4H</div>
                  <div>1D</div>
                  <div>1W</div>
                  <div>
                    <img
                      src={
                        require("./assets/perpetual/arrow-rotate-down.svg")
                          .default
                      }
                      alt="arrow-rotate-down"
                      className="arrow-rotate-down-img arrow-rotate-down-img-fsubmenu"
                    />

                    <div className="submenu-arrow-rotate-down">
                      <div className="submenu-arrow-rotate-down-row1">
                        <div>Select Intervals</div>
                        <div className="edit">Edit</div>
                      </div>
                      <div className="submenu-arrow-rotate-down-row-regular">
                        <div>Time</div>
                        <div>1m</div>
                        <div>3m</div>
                        <div>5m</div>
                      </div>
                      <div className="submenu-arrow-rotate-down-row-regular">
                        <div>15m</div>
                        <div>30m</div>
                        <div className="one-hour">1H</div>
                        <div>2H</div>
                      </div>
                      <div className="submenu-arrow-rotate-down-row-regular">
                        <div>4H</div>
                        <div>6H</div>
                        <div>8H</div>
                        <div>12H</div>
                      </div>
                      <div className="submenu-arrow-rotate-down-row-regular">
                        <div>1D</div>
                        <div>3D</div>
                        <div className="one-week">1W</div>
                        <div>1M</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        require("./assets/perpetual/arrowish-settings-bold.svg")
                          .default
                      }
                      alt="arrow"
                      className="arrowish-settings-bold-img"
                    />

                    <div className="submenu-arrowish-left-third">
                      Technical Indicator
                    </div>
                  </div>
                  <div className="last-price last-price-fsubmenu">
                    Last Price
                    <img
                      src={
                        require("./assets/perpetual/arrow-rotate-down.svg")
                          .default
                      }
                      alt="arrow-rotate-down"
                      className="arrow-rotate-down-img"
                    />
                    <div className="submenu-lastprice">
                      <div>Index Price</div>
                      <div>Mark Price</div>
                      <div className="submenu-lastprice-third">Last Price</div>
                    </div>
                  </div>
                </div>
                <div className="left-third-row1-right">
                  <div className="left-third-row1-right-original">Original</div>
                  <div>Trading View</div>
                  <div>Depth</div>
                  <div>
                    <img
                      src={require("./assets/perpetual/arrow-x.svg").default}
                      alt="arrow-x"
                      className="arrow-x-img"
                    />
                  </div>
                  <div>
                    <img
                      src={
                        require("./assets/perpetual/squares-svg.svg").default
                      }
                      alt="squares-svg"
                      className="sqaures-img"
                    />
                  </div>
                </div>
              </div>
              {/* #########GRAPH############ */}
              <div className="left-third-graph">
                <PerpetualGraph />
              </div>
            </section>
          </Draggable>

          <Draggable handle=".mid-first-row1">
            <section className="mid-first">
              <div className="mid-first-row1">
                <div className="mid-first-row1-headers">
                  <div className="mid-first-row1-headers-item">
                    Positions(0)
                  </div>
                  <div className="mid-first-row1-headers-item">
                    Open Orders(0)
                  </div>
                  <div className="mid-first-row1-headers-item">
                    Order History
                  </div>
                  <div className="mid-first-row1-headers-item">
                    Trade History
                  </div>
                  <div className="mid-first-row1-headers-item">
                    Transaction History
                  </div>
                  <div className="mid-first-row1-headers-item">Assets</div>
                </div>
              </div>
              <div className="mid-first-row2"></div>
            </section>
          </Draggable>

          <Draggable handle=".left-fourth-h3">
            <section className="left-fourth">
              <h3 className="left-fourth-h3">Order Book</h3>
              <div className="left-fourth-row1">
                <div className="left-fourth-row1-books">
                  <div className="left-fourth-row1-books-item">
                    <img
                      src={require("./assets/perpetual/books-left.svg").default}
                      alt="books"
                      className="books-left-img"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="left-fourth-row1-books-item">
                    <img
                      src={
                        require("./assets/perpetual/books-middle.svg").default
                      }
                      alt="books"
                      className="books-middle-img"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="left-fourth-row1-books-item">
                    <img
                      src={
                        require("./assets/perpetual/books-right.svg").default
                      }
                      alt="books"
                      className="books-right-img"
                      width="20"
                      height="20"
                    />
                  </div>
                </div>
                <div className="left-fourth-row1-right">
                  <div className="left-fourth-row1-right-arrow">
                    1
                    <img
                      src={
                        require("./assets/perpetual/arrow-rotate-down.svg")
                          .default
                      }
                      alt="arrow"
                      className="left-fourth-row1-right-arrow-img"
                      width="20"
                      height="20"
                    />
                  </div>
                </div>
              </div>
              <div className="left-fourth-mid">
                <div className="left-fourth-mid-headers">
                  <div>Price(USDT)</div>
                  <div>Size(BTC)</div>
                  <div>Sum(BTC)</div>
                </div>
                <div className="left-fourth-mid-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-mid-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-mid-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-mid-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-mid-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-mid-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-mid-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-mid-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-mid-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-mid-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-mid-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-mid-row-regular-last">
                  16,937
                  <img
                    src={
                      require("./assets/perpetual/arrow-down-last-row.svg")
                        .default
                    }
                    alt="arrow"
                    className="left-fourth-mid-row-regular-last-arrow-img"
                    width="15"
                    height="15"
                  />
                  <span>16,944</span>
                </div>
              </div>
              <div className="left-fourth-bottom">
                <div className="left-fourth-bottom-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-bottom-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-bottom-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-bottom-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-bottom-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-bottom-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-bottom-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-bottom-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-bottom-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
                <div className="left-fourth-bottom-row-regular">
                  <div>17.021</div>
                  <div>1.763</div>
                  <div>13.532</div>
                </div>
              </div>
            </section>
          </Draggable>

          <Draggable handle=".mid-second-mainheader">
            <section className="mid-second">
              <div className="mid-second-mainheader">
                <h3 className="mid-second-mainheader-h3">Trades</h3>
              </div>
              <div className="mid-second-headers">
                <div>Price(USDT)</div>
                <div>Size(BTC)</div>
                <div>Sum(BTC)</div>
              </div>
              <div className="mid-second-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div className="mid-second-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div className="mid-second-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div className="mid-second-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div className="mid-second-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div className="mid-second-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div className="mid-second-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div className="mid-second-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div className="mid-second-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
            </section>
          </Draggable>
          <section className="bottom-left"></section>

          <Draggable handle=".right-first-row1">
            <section className="right-first">
              <div className="right-first-row1">
                <div className="right-first-row1-btns">
                  <button className="right-first-row1-btns-item">Cross</button>
                  <button className="right-first-row1-btns-item">20x</button>
                </div>
                <div className="right-first-row1-arrowsettings">
                  <img
                    src={
                      require("./assets/perpetual/arrowish_settings.svg")
                        .default
                    }
                    alt="settings"
                    className="img-arrowish-settings-rightfirst"
                    width="20"
                    height="20"
                  />
                </div>
              </div>
              <div className="right-first-row2">
                <div className="right-first-row2-limit">Limit</div>
                <div>Market</div>
                <div className="right-first-row2-triple-dots">
                  Trailing St...
                </div>
                <img
                  src={
                    require("./assets/perpetual/arrow-rotate-down.svg").default
                  }
                  alt="arrow"
                  className="arrow-img-row2-opt"
                  width="20"
                  height="20"
                />
                <img
                  src={require("./assets/perpetual/info-svg.svg").default}
                  alt="info-img"
                  className="info-img-row2-opt"
                  width="15"
                  height="15"
                />
              </div>
              <div className="right-first-row3">
                <div className="right-first-row3-left">
                  <div>
                    Avbl <span>- USDT</span>
                  </div>
                </div>
                <div className="right-first-row3-right">
                  <img
                    src={
                      require("./assets/perpetual/svg-calculator.svg").default
                    }
                    alt="calculator"
                    className="img-calculator-row3-right"
                    width="15"
                    height="15"
                  />
                </div>
              </div>
              <div className="right-first-row4">
                <div className="right-first-row4-up">
                  <div className="right-first-row4-up-left">Price</div>
                  <div className="right-first-row4-up-right">
                    <div>1659</div>
                    <div className="last">Last</div>
                    <div>USDT</div>
                  </div>
                </div>
                <div className="right-first-row4-down">
                  <div className="right-first-row4-down-left">Size</div>
                  <div className="right-first-row4-down-right">
                    <div>BTC</div>
                    <img
                      src={
                        require("./assets/perpetual/arrow-rotate-down.svg")
                          .default
                      }
                      alt="arrow"
                      className="img-arrow-down-right-row4"
                      width="20"
                      height="20"
                    />
                  </div>
                </div>
              </div>
              <div className="right-first-row5">
                <div className="line">
                  <div className="squares"></div>
                  <div className="squares"></div>
                  <div className="squares"></div>
                  <div className="squares"></div>
                </div>

                <img
                  src={require("./assets/perpetual/rabbit-img-slideer.png")}
                  alt="rabbit"
                  className="rabbit-slider-img"
                  width="45"
                  height="35"
                />
              </div>
              <div className="right-first-row6">
                <button className="right-first-row6-btn-green">
                  Connect Wallet
                </button>
                <button className="right-first-row6-btn-grey">
                  Daily Rewards Upgrade
                </button>
              </div>
            </section>
          </Draggable>

          <Draggable handle=".right-second-row1">
            <section className="right-second">
              <div className="right-second-row1">
                <h3 className="right-second-row1-h3">Margin Ratio</h3>
              </div>
              <div className="right-second-row-regular">
                <div className="right-second-row-regular-left">
                  Margin Ratio
                </div>
                <div className="right-second-row-regular-right right-second-row-regular-right-percentage">
                  0.00%
                </div>
              </div>
              <div className="right-second-row-regular">
                <div className="right-second-row-regular-left">
                  Maintenance Margin
                </div>
                <div className="right-second-row-regular-right">0.00 USDT</div>
              </div>
              <div className="right-second-row-regular">
                <div className="right-second-row-regular-left">
                  Margin Balance
                </div>
                <div className="right-second-row-regular-right">0.00 USDT</div>
              </div>
            </section>
          </Draggable>

          <Draggable handle=".right-third-row1">
            <section className="right-third">
              <div className="right-third-row1">Assets</div>
              <div className="right-third-row2">
                <div className="right-third-row2-item">Deposit</div>
                <div className="right-third-row2-item">Withdraw</div>
              </div>
            </section>
          </Draggable>
        </main>
      </div>
    </>
  );
};

export default Perpetual;
