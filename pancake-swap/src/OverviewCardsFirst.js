import React from "react";

const OverviewCardsFirst = (props) => {
  return props.arrayBanners.map((el) => (
    <div class="overview-new-collections-row-main-card">
      <div class="overview-new-collections-row-main-card-up">
        <img src={`${el.img}`} alt="banner" class="banner-img" />
      </div>
      <div class="overview-new-collections-row-main-card-down">
        <div class="overview-new-collections-row-main-card-down-upper">
          {el.title}
        </div>
        <div class="overview-new-collections-row-main-card-down-lower">
          <div class="overview-new-collections-row-main-card-down-lower-volume">
            Volume
          </div>
          <img
            src={require("./assets/overview/icon-lower-part.svg").default}
            alt="icon-volume"
            class="icon-img"
          />
          <div class="overview-new-collections-row-main-card-down-lower-num">
            {el.num}
          </div>
        </div>
      </div>

      <div class="overview-new-collections-row-main-card-circle">
        <img src={`${el.avatar}`} alt="avatar-banner" class="avatar-img" />
      </div>
    </div>
  ));
};

export default OverviewCardsFirst;
