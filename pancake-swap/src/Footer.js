import React, { useContext } from "react";
import { ThemeContext } from "./context/light-ctx";

const Footer = () => {
  const { toggleTheme, isLight } = useContext(ThemeContext);

  const themeClickHandler = () => {
    toggleTheme();
  };
  return (
    <footer className="footer">
      <section className="footer__section__lists">
        <div className="footer__section__div">
          <h3>About</h3>
          <ul className="footer__lists__container">
            <li className="footer__lists__container_item--yellow">Contact</li>
            <li>Brand</li>
            <li>Blog</li>
            <li>Community</li>
            <li>Litepaper</li>
            <li className="footer__lists__container_item--dash">-</li>
            <li>Online Store</li>
          </ul>
        </div>
        <div className="footer__section__div">
          <h3>Help</h3>
          <ul className="footer__lists__container">
            <li>Customer Support</li>
            <li>Troubleshooting</li>
            <li>Guides</li>
          </ul>
        </div>
        <div className="footer__section__div">
          <h3>Developers</h3>
          <ul className="footer__lists__container">
            <li>Github</li>
            <li>Documentation</li>
            <li>Bug Bounty</li>
            <li>Audits</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer__section__div--icon">
          <img
            src={require("./assets/footer/footer_pancakeSwap_logo.svg").default}
            alt="PancakeSwap Icon"
          />
        </div>
      </section>
      <section className="footer__section__icons">
        <img
          src={require("./assets/footer/footer_twitter_icon.svg").default}
          alt="twitter icon"
          className="footer__section__icons_item footer__section__icons_item--twitter"
        />
        <img
          src={require("./assets/footer/footer_telegram_icon.svg").default}
          alt="telegram icon"
          className="footer__section__icons_item footer__section__icons_item--telegram"
        />
        <img
          src={require("./assets/footer/footer_reddit_icon.svg").default}
          alt="reddit icon"
          className="footer__section__icons_item footer__section__icons_item--reddit"
        />
        <img
          src={require("./assets/footer/footer_instagram_icon.svg").default}
          alt="instagram icon"
          className="footer__section__icons_item footer__section__icons_item--instagram"
        />
        <img
          src={require("./assets/footer/footer_github_iconn.svg").default}
          alt="github icon"
          className="footer__section__icons_item footer__section__icons_item--github"
        />
        <img
          src={require("./assets/footer/footer_discord_icon.svg").default}
          alt="discord icon"
          className="footer__section__icons_item footer__section__icons_item--discord"
        />
        <img
          src={require("./assets/footer/footer_medium_icon.svg").default}
          alt="medium icon"
          className="footer__section__icons_item footer__section__icons_item--medium"
        />
      </section>
      <section className="footer__section__bottom">
        <div className="footer__section__bottom--item-1 footer__section__bottom--item">
          <div
            className="footer__section__bottom--item-1__dark-mode-container"
            onClick={themeClickHandler}
          >
            {/* <!-- ABSOLUTE SLIDER BEGINS--> */}
            <div
              className={
                isLight
                  ? "absolute-slider absolute-slider-left"
                  : "absolute-slider absolute-slider-right"
              }
            >
              {isLight 
              ? <img
                src={require("./assets/footer/footer_light_mode.svg").default}
                alt="light-dark-switch"
                className="absolute-switcher-img"
              /> 
              : <img
                src={require("./assets/footer/footer_dark_mode.svg").default}
                alt="dark mode icon"
                className="dark_mode"
              />}

            </div>
            {/* <!-- ABSOLUTE SLIDER ENDS --> */}
            <div className="footer__section__bottom--item-1__dark-mode-container_light">
              <img
                src={require("./assets/footer/footer_light_mode.svg").default}
                alt="light mode icon"
                className="light_mode"
              />
            </div>
            <div className="footer__section__bottom--item-1__dark-mode-container_dark">
              <img
                src={require("./assets/footer/footer_dark_mode.svg").default}
                alt="dark mode icon"
                className="dark_mode"
              />
            </div>
          </div>
        </div>
        <div className="footer__section__bottom--item-2 footer__section__bottom--item">
          <div className="footer__section__bottom--item-2__left">
            <img
              src={require("./assets/footer/footer_world_icon.svg").default}
              alt="world icon"
              className="footer__section__bottom--item-2__left__world-icon"
            />
            <select
              className="footer__section__bottom--item-2__left__select"
              defaultValue={"EN"}
            >
              <option value="AF">AF</option>
              <option value="SQ">SQ</option>
              <option value="AR">AR</option>
              <option value="HY">HY</option>
              <option value="EU">EU</option>
              <option value="BN">BN</option>
              <option value="BG">BG</option>
              <option value="CA">CA</option>
              <option value="KM">KM</option>
              <option value="ZH">ZH</option>
              <option value="HR">HR</option>
              <option value="CS">CS</option>
              <option value="DA">DA</option>
              <option value="NL">NL</option>
              <option value="EN">EN</option>
              <option value="ET">ET</option>
              <option value="FJ">FJ</option>
              <option value="FI">FI</option>
              <option value="FR">FR</option>
              <option value="KA">KA</option>
              <option value="DE">DE</option>
              <option value="EL">EL</option>
              <option value="GU">GU</option>
              <option value="HE">HE</option>
              <option value="HI">HI</option>
              <option value="HU">HU</option>
              <option value="IS">IS</option>
              <option value="ID">ID</option>
              <option value="GA">GA</option>
              <option value="IT">IT</option>
              <option value="JA">JA</option>
              <option value="JW">JW</option>
              <option value="KO">KO</option>
              <option value="LA">LA</option>
              <option value="LV">LV</option>
              <option value="LT">LT</option>
              <option value="MK">MK</option>
              <option value="MS">MS</option>
              <option value="ML">ML</option>
              <option value="MT">MT</option>
              <option value="MR">MR</option>
              <option value="MN">MN</option>
              <option value="NE">NE</option>
              <option value="NO">NO</option>
              <option value="FA">FA</option>
              <option value="PL">PL</option>
              <option value="PT">PT</option>
              <option value="PA">PA</option>
              <option value="QU">QU</option>
              <option value="RO">RO</option>
              <option value="RU">RU</option>
              <option value="SM">SM</option>
              <option value="SR">SR</option>
              <option value="SK">SK</option>
              <option value="SL">SL</option>
              <option value="ES">ES</option>
              <option value="SW">SW</option>
              <option value="SV">SV</option>
              <option value="TA">TA</option>
              <option value="TT">TT</option>
              <option value="TE">TE</option>
              <option value="TH">TH</option>
              <option value="BO">BO</option>
              <option value="TO">TO</option>
              <option value="TR">TR</option>
              <option value="UK">UK</option>
              <option value="UZ">UZ</option>
              <option value="VI">VI</option>
              <option value="CY">CY</option>
              <option value="XH">XH</option>
            </select>
          </div>
          <div className="footer__section__bottom--item-2__right">
            <img
              src={require("./assets/footer/footer_circle_icon.svg").default}
              alt="circle icon pancakeswap"
            />
            <span>$4758</span>
          </div>
        </div>
        <div className="footer__section__bottom--item-3 footer__section__bottom--item">
          <button className="footer__section__bottom--item-3__btn">
            Buy CAKE
          </button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
