import React from "react";
import { Link } from "react-router-dom";

const PerpetualNav = () => {
  return (
    <nav class="perpetual-nav">
      <Link to="/">
        <div class="perpetual-nav-logo">
          {" "}
          <img
            src={require("./assets/perpetual/logo-with-text-light.svg").default}
            alt="logo-with-text-light"
            class="perpetual-nav-logo-img"
          />
        </div>
      </Link>
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
                      require("./assets/footer/footer_light_mode.svg").default
                    }
                    alt="light-mode"
                    class="light-mode-img"
                  />
                </div>
                <div class="dark-mode">
                  <img
                    src={
                      require("./assets/footer/footer_dark_mode.svg").default
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
  );
};

export default PerpetualNav;
