import React, { useContext } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { ThemeContext } from "./context/light-ctx";

import { TopNavbar } from "./TopNavbar";
import Footer from "./Footer";

const Liquidity = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <>
      <TopNavbar />
      <div className={isLight ? "sub_nav" : "sub_nav-DM"}>
        <ul>
          <li>
            <Link to="#">
              Swap
            </Link>
          </li>
          <li>
            <Link to="/limit">Limit</Link>
          </li>
          <li>
            <Link to="/liquidity" className="selected_pottery">Liquidity</Link>
          </li>
          <li>
            <Link to="/perpetual">
              Perpetual{" "}
              <svg
                viewBox="0 0 24 24"
                color="textSubtle"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-4ba21b47-0 ebMyYP"
              >
                <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/bridge">
              Bridge{" "}
              <svg
                viewBox="0 0 24 24"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-4ba21b47-0 ebMyYP"
              >
                <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <div className="swap-container">
        <div className="swap-main">
          <div className="converter-container">
            <div className="converter">
              <div className="converter-mid">
                <div>
                  <h2>Your Liquidity</h2>
                  <div>
                    <button>
                      <svg
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        color="textSubtle"
                        xmlns="http://www.w3.org/2000/svg"
                        className="sc-4ba21b47-0 ebMyYP"
                      >
                        <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"></path>
                      </svg>
                    </button>
                    <button>
                      <svg
                        viewBox="0 0 24 24"
                        color="textSubtle"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="sc-4ba21b47-0 ebMyYP"
                      >
                        <path d="M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div>Remove liquidity to receive tokens back</div>
              </div>

              <div className="swap-page liquidity-content">
                <div className="liquidity-mid">
                  <p>Connect to a wallet to view your liquidity.</p>
                </div>
                <div>
                  <button>
                    <span>+</span>&nbsp;Add Liquidity
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swap-bottom">
          <div className="swap-bottom-left">
            <div id="version">
              <button className="sc-a8cf5f33-0 kDVdbN" scale="sm">
                V2
              </button>
              <a href="https://v1exchange.pancakeswap.finance/#/" scale="sm">
                V1 (old)
              </a>
            </div>

            <a
              target="_blank"
              rel="noreferrer noopener"
              id="ercBridge"
              href="https://docs.binance.org/smart-chain/guides/cross-chain.html"
              color="primary"
              font-size="16px"
              className="sc-c56ebc7d-0 sc-2d8b3c99-0 dXeKWX jluAhG"
            >
              Convert ERC-20 to BEP-20
              <svg
                viewBox="0 0 24 24"
                color="primary"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-4ba21b47-0 ceTLum"
              >
                <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
              </svg>
            </a>
          </div>
          <div className="swap-bottom-right">
            <div>
              <a
                target="_blank"
                rel="noreferrer noopener"
                id="clickExchangeHelp"
                href="https://docs.pancakeswap.finance/products/pancakeswap-exchange"
                scale="md"
              >
                Need help ?
              </a>
              <svg
                viewBox="0 0 16 16"
                color="text"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-4ba21b47-0 IIbzK"
              >
                <path d="M0 16V0C0 0 3 1 6 1C9 1 16 -2 16 3.5C16 10.5 7.5 16 0 16Z"></path>
              </svg>
            </div>
            <div>
              <img
                src="https://cdn.pancakeswap.com/help/help.png"
                alt="Get some help"
                className="sc-8ebf47af-0 kqjEBp"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Liquidity;
