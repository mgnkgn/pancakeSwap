import React, { useContext } from "react";

import { ThemeContext } from "./context/light-ctx";

const OverviewCardsSec = (props) => {
  const { isLight } = useContext(ThemeContext);
  const lowerKeyword = props.keyWord.toLowerCase();

  if (lowerKeyword.length > 0) {
    const searchedItem = props.arraySec.filter((el) =>
      el.headerMain.toLowerCase().includes(lowerKeyword)
    );
    return searchedItem.map((el, i) => (
      <div
        className={
          isLight
            ? "overview-newest-arrivals-main-card"
            : "overview-newest-arrivals-main-card overview-newest-arrivals-main-card-dark"
        }
        key={`${el.headerMain}-${i}`}
      >
        <div className="overview-newest-arrivals-main-card-up">
          <div className="overview-newest-arrivals-main-card-up-row1 banner-ct">
            <img src={`${el.img}`} alt="banner" className="banner-img-2" />
          </div>
          <div className="overview-newest-arrivals-main-card-up-row2">
            {el.headerTop}
          </div>
          <div
            className={
              isLight
                ? "overview-newest-arrivals-main-card-up-row3"
                : "overview-newest-arrivals-main-card-up-row3 dark-mode-white"
            }
          >
            {el.headerMain}
          </div>
        </div>
        <div className="overview-newest-arrivals-main-card-down">
          <div className="overview-newest-arrivals-main-card-down-left">
            Asking price
          </div>
          <div className="overview-newest-arrivals-main-card-down-right">
            <div className="overview-newest-arrivals-main-card-down-right-1">
              ${el.priceNum}
            </div>
            <div className="overview-newest-arrivals-main-card-down-right-2">
              <img
                src={require("./assets/overview/icon-lower-part.svg").default}
                alt="icon"
                className="icon-img-2"
              />
            </div>
            <div
              className={
                isLight
                  ? "overview-newest-arrivals-main-card-down-right-3"
                  : "overview-newest-arrivals-main-card-down-right-3 dark-mode-white"
              }
            >
              {el.coinNum}
            </div>
          </div>
        </div>
      </div>
    ));
  }
  return props.arraySec.map((el, i) => (
    <div
      className={
        isLight
          ? "overview-newest-arrivals-main-card"
          : "overview-newest-arrivals-main-card overview-newest-arrivals-main-card-dark"
      }
      key={`${el.headerMain}-${i}`}
    >
      <div className="overview-newest-arrivals-main-card-up">
        <div className="overview-newest-arrivals-main-card-up-row1 banner-ct">
          <img src={`${el.img}`} alt="banner" className="banner-img-2" />
        </div>
        <div className="overview-newest-arrivals-main-card-up-row2">
          {el.headerTop}
        </div>
        <div
          className={
            isLight
              ? "overview-newest-arrivals-main-card-up-row3"
              : "overview-newest-arrivals-main-card-up-row3 dark-mode-white"
          }
        >
          {el.headerMain}
        </div>
      </div>
      <div className="overview-newest-arrivals-main-card-down">
        <div className="overview-newest-arrivals-main-card-down-left">
          Asking price
        </div>
        <div className="overview-newest-arrivals-main-card-down-right">
          <div className="overview-newest-arrivals-main-card-down-right-1">
            ${el.priceNum}
          </div>
          <div className="overview-newest-arrivals-main-card-down-right-2">
            <img
              src={require("./assets/overview/icon-lower-part.svg").default}
              alt="icon"
              className="icon-img-2"
            />
          </div>
          <div
            className={
              isLight
                ? "overview-newest-arrivals-main-card-down-right-3"
                : "overview-newest-arrivals-main-card-down-right-3 dark-mode-white"
            }
          >
            {el.coinNum}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default OverviewCardsSec;
