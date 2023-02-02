import React from "react";
import { Link } from "react-router-dom";

const PerpetualNav = () => {
  return (
    <nav className="perpetual-nav">
      <Link to="/">
        <div className="perpetual-nav-logo">
          {" "}
          <img
            src={require("./assets/perpetual/logo-with-text-light.svg").default}
            alt="logo-with-text-light"
            className="perpetual-nav-logo-img"
          />
        </div>
      </Link>
      <div className="perpetual-nav-mid">
        <div className="perpetual-nav-mid-left">
          Grid <span>New</span>
        </div>
        <div className="perpetual-nav-mid-mid">Perpetuals</div>
        <div className="perpetual-nav-mid-right">Swap</div>
      </div>
      <div className="perpetual-nav-right">
        <div className="perpetual-nav-right-item-logo">
          <img
            src={require("./assets/perpetual/bunny-round.svg").default}
            alt="bunny-round"
            className="perpetual-nav-right-item-logo-bunny"
          />
        </div>
        <div className="perpetual-nav-right-item">4.060</div>
        <div className="perpetual-nav-right-item">
          <img
            src={require("./assets/perpetual/svg_audio.svg").default}
            alt="svg_audio"
            className="perpetual-nav-right-item-img perpetual-nav-right-item-img-audio"
          />
          <div className="dropdown-audio">Submit a ticket</div>
        </div>
        <div className="perpetual-nav-right-item">
          <img
            src={require("./assets/perpetual/svg_world.svg").default}
            alt="svg_world"
            className="perpetual-nav-right-item-img perpetual-nav-right-item-img-world"
          />
          <ul className="dropdown">
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

        <div className="perpetual-nav-right-item">
          <img
            src={require("./assets/perpetual/svg_settings.svg").default}
            alt="svg_disc"
            className="perpetual-nav-right-item-img perpetual-nav-right-item-img-settings"
          />
          <div className="dropdown-settings">
            <div className="dropdown-settings-first">
              <div>Theme</div>
              <div className="light-dark">
                <div className="light-mode">
                  <img
                    src={
                      require("./assets/footer/footer_light_mode.svg").default
                    }
                    alt="light-mode"
                    className="light-mode-img"
                  />
                </div>
                <div className="dark-mode">
                  <img
                    src={
                      require("./assets/footer/footer_dark_mode.svg").default
                    }
                    alt="dark-mode"
                    className="dark-mode-img"
                  />
                </div>
              </div>
            </div>
            <div className="dropdown-settings-row">
              <div>Quick Trading</div>
              <div className="green-checkbox">
                <div className="green-checkbox-white"></div>
              </div>
            </div>
            <div className="dropdown-settings-row">
              <div>Favorites</div>
              <div className="green-checkbox">
                <div className="green-checkbox-white"></div>
              </div>
            </div>
            <div className="dropdown-settings-row">
              <div>Market</div>
              <div className="green-checkbox">
                <div className="green-checkbox-white"></div>
              </div>
            </div>
            <div className="dropdown-settings-row">
              <div>Chart</div>
              <div className="green-checkbox">
                <div className="green-checkbox-white"></div>
              </div>
            </div>
            <div className="dropdown-settings-row">
              <div>Depth</div>
              <div className="green-checkbox">
                <div className="green-checkbox-white"></div>
              </div>
            </div>
            <div className="dropdown-settings-row">
              <div>Order Book</div>
              <div className="green-checkbox">
                <div className="green-checkbox-white"></div>
              </div>
            </div>
            <div className="dropdown-settings-row">
              <div>Trades</div>
              <div className="green-checkbox">
                <div className="green-checkbox-white"></div>
              </div>
            </div>
            <div className="dropdown-settings-row">
              <div>Position & Open Orders</div>
              <div className="green-checkbox">
                <div className="green-checkbox-white"></div>
              </div>
            </div>
            <div className="dropdown-settings-row">
              <div>Place Orders</div>
              <div className="green-checkbox">
                <div className="green-checkbox-white"></div>
              </div>
            </div>
            <div className="dropdown-settings-row">
              <div>Margin Ratio</div>
              <div className="green-checkbox">
                <div className="green-checkbox-white"></div>
              </div>
            </div>
            <div className="dropdown-settings-row">
              <div>Assets</div>
              <div className="green-checkbox">
                <div className="green-checkbox-white"></div>
              </div>
            </div>
            <div className="dropdown-settings-last">
              <div>Back to Default Layout</div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="perpetual-nav-right-item">
          <img
            src={require("./assets/perpetual/svg_questionMark.svg").default}
            alt="svg_questionMark"
            className="perpetual-nav-right-item-img"
          />
        </div>
        <div className="perpetual-nav-right-btn">Connect Wallet</div>
      </div>
    </nav>
  );
};

export default PerpetualNav;
