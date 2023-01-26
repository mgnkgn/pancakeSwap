import React from "react";

const OverviewCardsSec = (props) => {
  if (props.keyWord.length > 0) {
    const searchedItem = props.arraySec.filter((el) =>
      el.headerMain.includes(props.keyWord)
    );
    return searchedItem.map((el) => (
      <div className="overview-newest-arrivals-main-card">
        <div className="overview-newest-arrivals-main-card-up">
          <div className="overview-newest-arrivals-main-card-up-row1 banner-ct">
            <img src={`${el.img}`} alt="banner" className="banner-img-2" />
          </div>
          <div className="overview-newest-arrivals-main-card-up-row2">
            {el.headerTop}
          </div>
          <div className="overview-newest-arrivals-main-card-up-row3">
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
            <div className="overview-newest-arrivals-main-card-down-right-3">
              {el.coinNum}
            </div>
          </div>
        </div>
      </div>
    ));
  }
  return props.arraySec.map((el) => (
    <div className="overview-newest-arrivals-main-card">
      <div className="overview-newest-arrivals-main-card-up">
        <div className="overview-newest-arrivals-main-card-up-row1 banner-ct">
          <img src={`${el.img}`} alt="banner" className="banner-img-2" />
        </div>
        <div className="overview-newest-arrivals-main-card-up-row2">
          {el.headerTop}
        </div>
        <div className="overview-newest-arrivals-main-card-up-row3">
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
          <div className="overview-newest-arrivals-main-card-down-right-3">
            {el.coinNum}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default OverviewCardsSec;
