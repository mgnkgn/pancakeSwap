import React from "react";

const OverviewCardsFirst = (props) => {
  if (props.keyWord.length > 0) {
    const searchedItem = props.arrayBanners.filter((el) =>
      el.title.includes(props.keyWord)
    );
    return searchedItem.map((el, i) => (
      <div
        className="overview-new-collections-row-main-card"
        key={`${el.title}-${i}`}
      >
        <div className="overview-new-collections-row-main-card-up">
          <img src={`${el.img}`} alt="banner" className="banner-img" />
        </div>
        <div className="overview-new-collections-row-main-card-down">
          <div className="overview-new-collections-row-main-card-down-upper">
            {el.title}
          </div>
          <div className="overview-new-collections-row-main-card-down-lower">
            <div className="overview-new-collections-row-main-card-down-lower-volume">
              Volume
            </div>
            <img
              src={require("./assets/overview/icon-lower-part.svg").default}
              alt="icon-volume"
              className="icon-img"
            />
            <div className="overview-new-collections-row-main-card-down-lower-num">
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
      className="overview-new-collections-row-main-card"
      key={`${el.title}-${i}`}
    >
      <div className="overview-new-collections-row-main-card-up">
        <img src={`${el.img}`} alt="banner" className="banner-img" />
      </div>
      <div className="overview-new-collections-row-main-card-down">
        <div className="overview-new-collections-row-main-card-down-upper">
          {el.title}
        </div>
        <div className="overview-new-collections-row-main-card-down-lower">
          <div className="overview-new-collections-row-main-card-down-lower-volume">
            Volume
          </div>
          <img
            src={require("./assets/overview/icon-lower-part.svg").default}
            alt="icon-volume"
            className="icon-img"
          />
          <div className="overview-new-collections-row-main-card-down-lower-num">
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
