import React from "react";
import GreenBtn from "./GreenBtn";

const PotteryCardOther = ({ part, isDepositShown }) => {
  if (part === 3 && isDepositShown) {
    return (
      <div className="pottery_second_bottom_first_card-row-3">
        <h3 className="pottery_second_bottom_first_card-row-3-h3">
          YOUR DEPOSIT
        </h3>
        <p className="pottery_second_bottom_first_card-row-3-p1">0.000</p>
        <p className="pottery_second_bottom_first_card-row-3-p2">~0.00 USD</p>
      </div>
    );
  }
  if (part === 4 && isDepositShown) {
    return (
      <>
        <div className="pottery_second_bottom_first_card-row-4">
          <div className="pottery_second_bottom_first_card-row-4-left">
            <p className="pottery_second_bottom_first_card-row-4-left-p1">
              APY
            </p>
            <p className="pottery_second_bottom_first_card-row-4-left-p2">
              Next draw date
            </p>
            <p className="pottery_second_bottom_first_card-row-4-left-p3">
              Total Value Locked
            </p>
            <p className="pottery_second_bottom_first_card-row-4-left-p4">
              Max. deposit cap
            </p>
          </div>
          <div className="pottery_second_bottom_first_card-row-4-right">
            <p className="pottery_second_bottom_first_card-row-4-right-p1">
              13.93%
            </p>
            <p className="pottery_second_bottom_first_card-row-4-right-p2">
              <span> in</span>
              <span> 5d</span> <span>20h</span>
              <span>55m</span>
            </p>
            <p className="pottery_second_bottom_first_card-row-4-right-p3">
              164,972.37 CAKE
            </p>
            <p className="pottery_second_bottom_first_card-row-4-right-p4">
              710,000.00 CAKE
            </p>
          </div>
        </div>
        <div className="pottery_second_bottom_first_card-row-5">
          <button className="pottery_second_bottom_first_card-row-5-btn">
            Connect Wallet
          </button>
        </div>
      </>
    );
  }
  if (part === 3 && !isDepositShown) {
    return (
      <div className="pottery-change-row3">
        <img
          className="pottery-change-row3-img"
          src={require("./assets/pottery/img_card_change.png")}
        />
        <p className="pottery-change-row3-p">Wallet not connected</p>
        <GreenBtn width={350} height={52} />
      </div>
    );
  }
  if (part === 4 && !isDepositShown) {
    return (
      <div className="pottery-change-row4">
        <div className="pottery-change-row4-regular">
          <div className="main-flex">
            <div className="main-flex-2">
              <div>
                Weighted <span>Avg multiplier</span>
              </div>
            </div>
            <div className="dash">-</div>
          </div>
        </div>
        <div className="pottery-change-row4-regular">
          <div className="main-flex">
            <div className="main-flex-2">
              <div>
                <span>Deposit</span> by cohort
              </div>
            </div>
            <div className="dash">-</div>
          </div>
        </div>
        <div className="pottery-change-row4-regular">
          <div className="main-flex">
            <div className="main-flex-2">
              <div>
                <span>Remaining </span> period
              </div>
            </div>
            <div className="dash">-</div>
          </div>
        </div>
        <div className="pottery-change-row4-regular">
          <div className="main-flex">
            <div className="main-flex-2">
              <div>
                Total # <span>winnings</span>
              </div>
            </div>
            <div className="dash">-</div>
          </div>
        </div>
      </div>
    );
  }
};

export default PotteryCardOther;
