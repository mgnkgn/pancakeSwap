import React from "react";

const Perpetual = () => {
  return (
    <>
      <body>
        <nav class="perpetual-nav">
          <div class="perpetual-nav-logo">
            <a href="home.html">
              {" "}
              <img
                src={
                  require("./assets/perpetual/logo-with-text-light.svg").default
                }
                alt="logo-with-text-light"
                class="perpetual-nav-logo-img"
              />
            </a>
          </div>
          <div class="perpetual-nav-mid">
            <div class="perpetual-nav-mid-left">
              Grid <span>New</span>
            </div>
            <div class="perpetual-nav-mid-mid">Perpetuals</div>
            <div class="perpetual-nav-mid-right">Swap</div>
          </div>
          <div class="perpetual-nav-right">
            <div class="perpetual-nav-right-item-logo">
              <img
                src={require("./assets/perpetual/bunny-round.svg").default}
                alt="bunny-round"
                class="perpetual-nav-right-item-logo-bunny"
              />
            </div>
            <div class="perpetual-nav-right-item">4.060</div>
            <div class="perpetual-nav-right-item">
              <img
                src={require("./assets/perpetual/svg_audio.svg").default}
                alt="svg_audio"
                class="perpetual-nav-right-item-img perpetual-nav-right-item-img-audio"
              />
              <div class="dropdown-audio">Submit a ticket</div>
            </div>
            <div class="perpetual-nav-right-item">
              <img
                src={require("./assets/perpetual/svg_world.svg").default}
                alt="svg_world"
                class="perpetual-nav-right-item-img perpetual-nav-right-item-img-world"
              />
              <ul class="dropdown">
                <li>
                  <a href="">العربية</a>
                </li>
                <li>
                  <a href="">বাংলা</a>
                </li>
                <li>
                  <a href="">English</a>
                </li>
                <li>
                  <a href="">Deutsch</a>
                </li>
                <li>
                  <a href="">Ελληνικά</a>
                </li>
                <li>
                  <a href="">Español</a>
                </li>
                <li>
                  <a href="">Suomalainen</a>
                </li>
                <li>
                  <a href="">Filipino</a>
                </li>
                <li>
                  <a href="">Français</a>
                </li>
                <li>
                  <a href="">हिंदी</a>
                </li>
                <li>
                  <a href="">Magyar</a>
                </li>
                <li>
                  <a href="">Bahasa Indonesia</a>
                </li>
                <li>
                  <a href="">Italiano</a>
                </li>
                <li>
                  <a href="">日本語</a>
                </li>
                <li>
                  <a href="">한국어</a>
                </li>
                <li>
                  <a href="">Nederlands</a>
                </li>
                <li>
                  <a href="">Polski</a>
                </li>
                <li>
                  <a href="">Português (Brazil)</a>
                </li>
                <li>
                  <a href="">Português</a>
                </li>
                <li>
                  <a href="">Română</a>
                </li>
                <li>
                  <a href="">Русский</a>
                </li>
                <li>
                  <a href="">Svenska</a>
                </li>
                <li>
                  <a href="">தமிழ்</a>
                </li>
                <li>
                  <a href="">Українська</a>
                </li>
                <li>
                  <a href="">Tiếng Việt</a>
                </li>
                <li>
                  <a href="">Türkçe</a>
                </li>
                <li>
                  <a href="">简体中文</a>
                </li>
                <li>
                  <a href="">繁體中文</a>
                </li>
              </ul>
            </div>

            <div class="perpetual-nav-right-item">
              <img
                src={require("./assets/perpetual/svg_settings.svg").default}
                alt="svg_disc"
                class="perpetual-nav-right-item-img perpetual-nav-right-item-img-settings"
              />
              <div class="dropdown-settings">
                <div class="dropdown-settings-first">
                  <div>Theme</div>
                  <div class="light-dark">
                    <div class="light-mode">
                      <img
                        src={
                          require("./assets/footer/footer_light_mode.svg")
                            .default
                        }
                        alt="light-mode"
                        class="light-mode-img"
                      />
                    </div>
                    <div class="dark-mode">
                      <img
                        src={
                          require("./assets/footer/footer_dark_mode.svg")
                            .default
                        }
                        alt="dark-mode"
                        class="dark-mode-img"
                      />
                    </div>
                  </div>
                </div>
                <div class="dropdown-settings-row">
                  <div>Quick Trading</div>
                  <div class="green-checkbox">
                    <div class="green-checkbox-white"></div>
                  </div>
                </div>
                <div class="dropdown-settings-row">
                  <div>Favorites</div>
                  <div class="green-checkbox">
                    <div class="green-checkbox-white"></div>
                  </div>
                </div>
                <div class="dropdown-settings-row">
                  <div>Market</div>
                  <div class="green-checkbox">
                    <div class="green-checkbox-white"></div>
                  </div>
                </div>
                <div class="dropdown-settings-row">
                  <div>Chart</div>
                  <div class="green-checkbox">
                    <div class="green-checkbox-white"></div>
                  </div>
                </div>
                <div class="dropdown-settings-row">
                  <div>Depth</div>
                  <div class="green-checkbox">
                    <div class="green-checkbox-white"></div>
                  </div>
                </div>
                <div class="dropdown-settings-row">
                  <div>Order Book</div>
                  <div class="green-checkbox">
                    <div class="green-checkbox-white"></div>
                  </div>
                </div>
                <div class="dropdown-settings-row">
                  <div>Trades</div>
                  <div class="green-checkbox">
                    <div class="green-checkbox-white"></div>
                  </div>
                </div>
                <div class="dropdown-settings-row">
                  <div>Position & Open Orders</div>
                  <div class="green-checkbox">
                    <div class="green-checkbox-white"></div>
                  </div>
                </div>
                <div class="dropdown-settings-row">
                  <div>Place Orders</div>
                  <div class="green-checkbox">
                    <div class="green-checkbox-white"></div>
                  </div>
                </div>
                <div class="dropdown-settings-row">
                  <div>Margin Ratio</div>
                  <div class="green-checkbox">
                    <div class="green-checkbox-white"></div>
                  </div>
                </div>
                <div class="dropdown-settings-row">
                  <div>Assets</div>
                  <div class="green-checkbox">
                    <div class="green-checkbox-white"></div>
                  </div>
                </div>
                <div class="dropdown-settings-last">
                  <div>Back to Default Layout</div>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="perpetual-nav-right-item">
              <img
                src={require("./assets/perpetual/svg_questionMark.svg").default}
                alt="svg_questionMark"
                class="perpetual-nav-right-item-img"
              />
            </div>
            <div class="perpetual-nav-right-btn">Connect Wallet</div>
          </div>
        </nav>
        <main class="perpetual-main">
          <section class="left-first">
            <img
              src={require("./assets/perpetual/star_perpetual.svg").default}
              alt="star"
              class="left-first-img"
            />
          </section>

          <section class="left-second">
            <div class="left-second-1">
              BTCUSDT <span>Perpetual</span>
              <div class="submenu-left-1">
                <input
                  type="search"
                  name="submenu-left-1-src"
                  id="submenu-left-1-src"
                  class="submenu-left-1-src"
                  placeholder="Search"
                />
                <div class="submenu-left-1-2nd-row">
                  <img
                    src={
                      require("./assets/perpetual/star_perpetual.svg").default
                    }
                    alt="star_perpetual"
                    class="submenu-left-1-2nd-row-img"
                  />
                  <div class="submenu-row-usd">USDⓈ-M</div>
                </div>

                <div class="btc-submenu-main">
                  <div class="btc-submenu-main-headers">
                    <div class="btc-submenu-main-headers-symbol">Symbols</div>
                    <div class="btc-submenu-main-headers-price">Last Price</div>
                    <div class="btc-submenu-main-headers-vol">Vol</div>
                  </div>

                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                  <div class="btc-submenu-main-row">
                    <div class="btc-submenu-main-row-star">
                      <img
                        src={
                          require("./assets/perpetual/star_perpetual.svg")
                            .default
                        }
                        alt="star"
                        class="btc-submenu-main-row-star-img"
                      />
                    </div>
                    <div class="btc-submenu-main-row-btcusdt">
                      BTCUSDT <span>Perpetual</span>
                    </div>
                    <div class="btc-submenu-main-row-price">16,295</div>
                    <div class="btc-submenu-main-row-vol">44,637,793</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="left-second-2">16601</div>
            <div class="left-second-3">
              <div class="left-second-3-1 left-second-3-row">
                <div class="up">Mark</div>
                <div class="down">16,614</div>
              </div>
              <div class="left-second-3-2 left-second-3-row">
                <div class="up">Index</div>
                <div class="down">16,632</div>
              </div>
              <div class="left-second-3-3 left-second-3-row">
                <div class="up">Funding / Countdown</div>
                <div class="down">
                  <span class="down-span-left">0.0001%</span>
                  <span class="down-span-right"> 00:55:34</span>
                </div>
              </div>
              <div class="left-second-3-4 left-second-3-row">
                <div class="up">24h Change</div>
                <div class="down">-32 -0.19%</div>
              </div>
              <div class="left-second-3-5 left-second-3-row">
                <div class="up">24h High</div>
                <div class="down">17,168</div>
              </div>
              <div class="left-second-3-6 left-second-3-row">
                <div class="up">24h Low</div>
                <div class="down">15,811</div>
              </div>
              <div class="left-second-3-7 left-second-3-row">
                <div class="up">24h Volume(BTC)</div>
                <div class="down">2,689.732</div>
              </div>
              <div class="left-second-3-8 left-second-3-row">
                <div class="up">24h Volume(USDT)</div>
                <div class="down">44,319,163.94</div>
              </div>
            </div>
            <div class="left-second-4">
              <img
                src={
                  require("./assets/perpetual/arrowish_settings.svg").default
                }
                alt="arrowish_settings"
                class="left-second-4-img"
              />
            </div>
          </section>

          <section class="left-third">
            <div class="left-third-row1">
              <div class="left-third-row1-left">
                <div class="left-third-row1-left-time">Time</div>
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
                    class="arrow-rotate-down-img arrow-rotate-down-img-fsubmenu"
                  />

                  <div class="submenu-arrow-rotate-down">
                    <div class="submenu-arrow-rotate-down-row1">
                      <div>Select Intervals</div>
                      <div class="edit">Edit</div>
                    </div>
                    <div class="submenu-arrow-rotate-down-row-regular">
                      <div>Time</div>
                      <div>1m</div>
                      <div>3m</div>
                      <div>5m</div>
                    </div>
                    <div class="submenu-arrow-rotate-down-row-regular">
                      <div>15m</div>
                      <div>30m</div>
                      <div class="one-hour">1H</div>
                      <div>2H</div>
                    </div>
                    <div class="submenu-arrow-rotate-down-row-regular">
                      <div>4H</div>
                      <div>6H</div>
                      <div>8H</div>
                      <div>12H</div>
                    </div>
                    <div class="submenu-arrow-rotate-down-row-regular">
                      <div>1D</div>
                      <div>3D</div>
                      <div class="one-week">1W</div>
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
                    class="arrowish-settings-bold-img"
                  />

                  <div class="submenu-arrowish-left-third">
                    Technical Indicator
                  </div>
                </div>
                <div class="last-price last-price-fsubmenu">
                  Last Price
                  <img
                    src={
                      require("./assets/perpetual/arrow-rotate-down.svg")
                        .default
                    }
                    alt="arrow-rotate-down"
                    class="arrow-rotate-down-img"
                  />
                  <div class="submenu-lastprice">
                    <div>Index Price</div>
                    <div>Mark Price</div>
                    <div class="submenu-lastprice-third">Last Price</div>
                  </div>
                </div>
              </div>
              <div class="left-third-row1-right">
                <div class="left-third-row1-right-original">Original</div>
                <div>Trading View</div>
                <div>Depth</div>
                <div>
                  <img
                    src={require("./assets/perpetual/arrow-x.svg").default}
                    alt="arrow-x"
                    class="arrow-x-img"
                  />
                </div>
                <div>
                  <img
                    src={require("./assets/perpetual/squares-svg.svg").default}
                    alt="squares-svg"
                    class="sqaures-img"
                  />
                </div>
              </div>
            </div>
            <div class="left-third-graph">
              <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 100 50"
                color="text"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-4ba21b47-0 IIbzK"
              >
                <path
                  d="M 0 49 C 1 49 1 45 4 47 C 7 49 7 35 11 37 C 13 38 14 32 16 34 C 18 35.6667 20 40 22 39 C 24 38 24 34 26 34 C 27 34 29 39 32 36 C 33 35 34 32 35 32 C 37 32 37 35 39 34 C 40 33 39 29 43 31 C 46 32 45 28 47 30 C 50 32 49 22 51 24 Q 53 26 55 24 C 56 23 56 25 57 26 C 58 27 59 28 60 28 C 63 28 66 17 67 16 C 68 15 69 17 70 16 C 71 15 71 13 74 13 C 76 13 76 14 77 15 C 79 17 80 18 82 18 C 83 18 83 17 84 17 C 87 17 89 24 91 24 C 93 24 95 20 96 17 C 97.6667 13.3333 98 9 101 6"
                  stroke="#7645D9"
                  stroke-width="0.2"
                  stroke-dasharray="156"
                  stroke-dashoffset="156"
                  fill="transparent"
                  opacity="0.5"
                  filter="url(#glow)"
                >
                  <animate
                    id="firstline"
                    attributeName="stroke-dashoffset"
                    dur="2s"
                    from="156"
                    to="-156"
                    begin="0s;firstline.end+0.5s"
                  ></animate>
                </path>
                <path
                  d="M 0 49 C 1 49 1 45 4 47 C 7 49 7 35 11 37 C 13 38 14 32 16 34 C 18 35.6667 20 40 22 39 C 24 38 24 34 26 34 C 27 34 29 39 32 36 C 33 35 34 32 35 32 C 37 32 37 35 39 34 C 40 33 39 29 43 31 C 46 32 45 28 47 30 C 50 32 49 22 51 24 Q 53 26 55 24 C 56 23 56 25 57 26 C 58 27 59 28 60 28 C 63 28 66 17 67 16 C 68 15 69 17 70 16 C 71 15 71 13 74 13 C 76 13 76 14 77 15 C 79 17 80 18 82 18 C 83 18 83 17 84 17 C 87 17 89 24 91 24 C 93 24 95 20 96 17 C 97.6667 13.3333 98 9 101 6"
                  stroke="#7645D9"
                  stroke-width="0.2"
                  stroke-dasharray="156"
                  stroke-dashoffset="156"
                  fill="transparent"
                  opacity="0.5"
                  filter="url(#glow)"
                >
                  <animate
                    id="secondline"
                    attributeName="stroke-dashoffset"
                    dur="2s"
                    from="156"
                    to="-156"
                    begin="1.3s;secondline.end+0.5s"
                  ></animate>
                </path>
                <defs>
                  <filter id="glow">
                    <feGaussianBlur
                      class="blur"
                      result="coloredBlur"
                      stdDeviation="4"
                    ></feGaussianBlur>
                    <feMerge>
                      <feMergeNode in="coloredBlur"></feMergeNode>
                      <feMergeNode in="coloredBlur"></feMergeNode>
                      <feMergeNode in="coloredBlur"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>
          </section>

          <section class="mid-first">
            <div class="mid-first-row1">
              <div class="mid-first-row1-headers">
                <div class="mid-first-row1-headers-item">Positions(0)</div>
                <div class="mid-first-row1-headers-item">Open Orders(0)</div>
                <div class="mid-first-row1-headers-item">Order History</div>
                <div class="mid-first-row1-headers-item">Trade History</div>
                <div class="mid-first-row1-headers-item">
                  Transaction History
                </div>
                <div class="mid-first-row1-headers-item">Assets</div>
              </div>
            </div>
            <div class="mid-first-row2"></div>
          </section>

          <section class="left-fourth">
            <h3 class="left-fourth-h3">Order Book</h3>
            <div class="left-fourth-row1">
              <div class="left-fourth-row1-books">
                <div class="left-fourth-row1-books-item">
                  <img
                    src={require("./assets/perpetual/books-left.svg").default}
                    alt="books"
                    class="books-left-img"
                    width="20"
                    height="20"
                  />
                </div>
                <div class="left-fourth-row1-books-item">
                  <img
                    src={require("./assets/perpetual/books-middle.svg").default}
                    alt="books"
                    class="books-middle-img"
                    width="20"
                    height="20"
                  />
                </div>
                <div class="left-fourth-row1-books-item">
                  <img
                    src={require("./assets/perpetual/books-right.svg").default}
                    alt="books"
                    class="books-right-img"
                    width="20"
                    height="20"
                  />
                </div>
              </div>
              <div class="left-fourth-row1-right">
                <div class="left-fourth-row1-right-arrow">
                  1
                  <img
                    src={
                      require("./assets/perpetual/arrow-rotate-down.svg")
                        .default
                    }
                    alt="arrow"
                    class="left-fourth-row1-right-arrow-img"
                    width="20"
                    height="20"
                  />
                </div>
              </div>
            </div>
            <div class="left-fourth-mid">
              <div class="left-fourth-mid-headers">
                <div>Price(USDT)</div>
                <div>Size(BTC)</div>
                <div>Sum(BTC)</div>
              </div>
              <div class="left-fourth-mid-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-mid-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-mid-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-mid-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-mid-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-mid-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-mid-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-mid-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-mid-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-mid-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-mid-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-mid-row-regular-last">
                16,937
                <img
                  src={
                    require("./assets/perpetual/arrow-down-last-row.svg")
                      .default
                  }
                  alt="arrow"
                  class="left-fourth-mid-row-regular-last-arrow-img"
                  width="15"
                  height="15"
                />
                <span>16,944</span>
              </div>
            </div>
            <div class="left-fourth-bottom">
              <div class="left-fourth-bottom-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-bottom-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-bottom-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-bottom-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-bottom-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-bottom-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-bottom-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-bottom-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-bottom-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
              <div class="left-fourth-bottom-row-regular">
                <div>17.021</div>
                <div>1.763</div>
                <div>13.532</div>
              </div>
            </div>
          </section>
          <section class="mid-second">
            <div class="mid-second-mainheader">
              <h3 class="mid-second-mainheader-h3">Trades</h3>
            </div>
            <div class="mid-second-headers">
              <div>Price(USDT)</div>
              <div>Size(BTC)</div>
              <div>Sum(BTC)</div>
            </div>
            <div class="mid-second-row-regular">
              <div>17.021</div>
              <div>1.763</div>
              <div>13.532</div>
            </div>
            <div class="mid-second-row-regular">
              <div>17.021</div>
              <div>1.763</div>
              <div>13.532</div>
            </div>
            <div class="mid-second-row-regular">
              <div>17.021</div>
              <div>1.763</div>
              <div>13.532</div>
            </div>
            <div class="mid-second-row-regular">
              <div>17.021</div>
              <div>1.763</div>
              <div>13.532</div>
            </div>
            <div class="mid-second-row-regular">
              <div>17.021</div>
              <div>1.763</div>
              <div>13.532</div>
            </div>
            <div class="mid-second-row-regular">
              <div>17.021</div>
              <div>1.763</div>
              <div>13.532</div>
            </div>
            <div class="mid-second-row-regular">
              <div>17.021</div>
              <div>1.763</div>
              <div>13.532</div>
            </div>
            <div class="mid-second-row-regular">
              <div>17.021</div>
              <div>1.763</div>
              <div>13.532</div>
            </div>
            <div class="mid-second-row-regular">
              <div>17.021</div>
              <div>1.763</div>
              <div>13.532</div>
            </div>
          </section>
          <section class="bottom-left"></section>

          <section class="right-first">
            <div class="right-first-row1">
              <div class="right-first-row1-btns">
                <button class="right-first-row1-btns-item">Cross</button>
                <button class="right-first-row1-btns-item">20x</button>
              </div>
              <div class="right-first-row1-arrowsettings">
                <img
                  src={
                    require("./assets/perpetual/arrowish_settings.svg").default
                  }
                  alt="settings"
                  class="img-arrowish-settings-rightfirst"
                  width="20"
                  height="20"
                />
              </div>
            </div>
            <div class="right-first-row2">
              <div class="right-first-row2-limit">Limit</div>
              <div>Market</div>
              <div class="right-first-row2-triple-dots">Trailing St...</div>
              <img
                src={
                  require("./assets/perpetual/arrow-rotate-down.svg").default
                }
                alt="arrow"
                class="arrow-img-row2-opt"
                width="20"
                height="20"
              />
              <img
                src={require("./assets/perpetual/info-svg.svg").default}
                alt="info-img"
                class="info-img-row2-opt"
                width="15"
                height="15"
              />
            </div>
            <div class="right-first-row3">
              <div class="right-first-row3-left">
                <div>
                  Avbl <span>- USDT</span>
                </div>
              </div>
              <div class="right-first-row3-right">
                <img
                  src={require("./assets/perpetual/svg-calculator.svg").default}
                  alt="calculator"
                  class="img-calculator-row3-right"
                  width="15"
                  height="15"
                />
              </div>
            </div>
            <div class="right-first-row4">
              <div class="right-first-row4-up">
                <div class="right-first-row4-up-left">Price</div>
                <div class="right-first-row4-up-right">
                  <div>1659</div>
                  <div class="last">Last</div>
                  <div>USDT</div>
                </div>
              </div>
              <div class="right-first-row4-down">
                <div class="right-first-row4-down-left">Size</div>
                <div class="right-first-row4-down-right">
                  <div>BTC</div>
                  <img
                    src={
                      require("./assets/perpetual/arrow-rotate-down.svg")
                        .default
                    }
                    alt="arrow"
                    class="img-arrow-down-right-row4"
                    width="20"
                    height="20"
                  />
                </div>
              </div>
            </div>
            <div class="right-first-row5">
              <div class="line">
                <div class="squares"></div>
                <div class="squares"></div>
                <div class="squares"></div>
                <div class="squares"></div>
              </div>

              <img
                src={require("./assets/perpetual/rabbit-img-slideer.png")}
                alt="rabbit"
                class="rabbit-slider-img"
                width="45"
                height="35"
              />
            </div>
            <div class="right-first-row6">
              <button class="right-first-row6-btn-green">Connect Wallet</button>
              <button class="right-first-row6-btn-grey">
                Daily Rewards Upgrade
              </button>
            </div>
          </section>

          <section class="right-second">
            <div class="right-second-row1">
              <h3 class="right-second-row1-h3">Margin Ratio</h3>
            </div>
            <div class="right-second-row-regular">
              <div class="right-second-row-regular-left">Margin Ratio</div>
              <div class="right-second-row-regular-right right-second-row-regular-right-percentage">
                0.00%
              </div>
            </div>
            <div class="right-second-row-regular">
              <div class="right-second-row-regular-left">
                Maintenance Margin
              </div>
              <div class="right-second-row-regular-right">0.00 USDT</div>
            </div>
            <div class="right-second-row-regular">
              <div class="right-second-row-regular-left">Margin Balance</div>
              <div class="right-second-row-regular-right">0.00 USDT</div>
            </div>
          </section>

          <section class="right-third">
            <div class="right-third-row1">Assets</div>
            <div class="right-third-row2">
              <div class="right-third-row2-item">Deposit</div>
              <div class="right-third-row2-item">Withdraw</div>
            </div>
          </section>
        </main>
      </body>
    </>
  );
};

export default Perpetual;