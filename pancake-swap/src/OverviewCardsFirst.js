import React, { useContext } from "react";

import { ThemeContext } from "./context/light-ctx";

const OverviewCardsFirst = (props) => {
  const { isLight } = useContext(ThemeContext);
  const lowerKeyword = props.keyWord.toLowerCase();
  if (lowerKeyword.length > 0) {
    const searchedItem = props.arrayBanners.filter((el) =>
      el.title.toLowerCase().includes(lowerKeyword)
    );
    return searchedItem.map((el, i) => (
      <div
        style={{ background: !props.isLight && "#383241 !important" }}
        className={
          isLight
            ? "overview-new-collections-row-main-card"
            : "overview-new-collections-row-main-card overview-new-collections-row-main-card-dark"
        }
        key={`${el.title}-${i}`}
      >
        <div className="overview-new-collections-row-main-card-up">
          <img src={`${el.img}`} alt="banner" className="banner-img" />
        </div>
        <div className="overview-new-collections-row-main-card-down">
          <div
            className={
              isLight
                ? "overview-new-collections-row-main-card-down-upper"
                : "overview-new-collections-row-main-card-down-upper overview-new-collections-row-main-card-down-upper-dark"
            }
          >
            {el.title}
          </div>
          <div className="overview-new-collections-row-main-card-down-lower">
            <div
              className={
                isLight
                  ? "overview-new-collections-row-main-card-down-lower-volume"
                  : "overview-new-collections-row-main-card-down-lower-volume dark-purple"
              }
            >
              Volume
            </div>
            <img
              src={require("./assets/overview/icon-lower-part.svg").default}
              alt="icon-volume"
              className="icon-img"
            />
            <div
              className={
                isLight
                  ? "overview-new-collections-row-main-card-down-lower-num"
                  : "overview-new-collections-row-main-card-down-lower-num overview-new-collections-row-main-card-down-upper-dark"
              }
            >
              {el.num}
            </div>
          </div>
        </div>

        <div className="overview-new-collections-row-main-card-circle">
          <img
            src={`${el.avatar}`}
            alt="avatar-banner"
            className="avatar-img"
          />
        </div>
      </div>
    ));
  }
  return props.arrayBanners.map((el, i) => (
    <div
      style={{ background: !props.isLight && "#383241 !important" }}
      className={
        isLight
          ? "overview-new-collections-row-main-card"
          : "overview-new-collections-row-main-card overview-new-collections-row-main-card-dark"
      }
      key={`${el.title}-${i}`}
    >
      <div className="overview-new-collections-row-main-card-up">
        <img src={`${el.img}`} alt="banner" className="banner-img" />
      </div>
      <div className="overview-new-collections-row-main-card-down">
        <div
          className={
            isLight
              ? "overview-new-collections-row-main-card-down-upper"
              : "overview-new-collections-row-main-card-down-upper overview-new-collections-row-main-card-down-upper-dark"
          }
        >
          {el.title}
        </div>
        <div className="overview-new-collections-row-main-card-down-lower">
          <div
            className={
              isLight
                ? "overview-new-collections-row-main-card-down-lower-volume"
                : "overview-new-collections-row-main-card-down-lower-volume dark-purple"
            }
          >
            Volume
          </div>
          <img
            src={require("./assets/overview/icon-lower-part.svg").default}
            alt="icon-volume"
            className="icon-img"
          />
          <div
            className={
              isLight
                ? "overview-new-collections-row-main-card-down-lower-num"
                : "overview-new-collections-row-main-card-down-lower-num overview-new-collections-row-main-card-down-upper-dark"
            }
          >
            {el.num}
          </div>
        </div>
      </div>

      <div className="overview-new-collections-row-main-card-circle">
        <img src={`${el.avatar}`} alt="avatar-banner" className="avatar-img" />
      </div>
    </div>
  ));
};

export default OverviewCardsFirst;
