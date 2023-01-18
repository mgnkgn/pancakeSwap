import React from "react";

const OverviewCardsSec = (props) => {
  return props.arraySec.map((el) => (
    <div class="overview-newest-arrivals-main-card">
      <div class="overview-newest-arrivals-main-card-up">
        <div class="overview-newest-arrivals-main-card-up-row1 banner-ct">
          <img src={`${el.img}`} alt="banner" class="banner-img-2" />
        </div>
        <div class="overview-newest-arrivals-main-card-up-row2">
          {el.headerTop}
        </div>
        <div class="overview-newest-arrivals-main-card-up-row3">
          {el.headerMain}
        </div>
      </div>
      <div class="overview-newest-arrivals-main-card-down">
        <div class="overview-newest-arrivals-main-card-down-left">
          Asking price
        </div>
        <div class="overview-newest-arrivals-main-card-down-right">
          <div class="overview-newest-arrivals-main-card-down-right-1">
            ${el.priceNum}
          </div>
          <div class="overview-newest-arrivals-main-card-down-right-2">
            <img
              src={require("./assets/overview/icon-lower-part.svg").default}
              alt="icon"
              class="icon-img-2"
            />
          </div>
          <div class="overview-newest-arrivals-main-card-down-right-3">
            {el.coinNum}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default OverviewCardsSec;
