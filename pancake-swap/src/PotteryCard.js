import React, { useState } from "react";
import PotteryCardOther from "./PotteryCardOther";

const PotteryCard = () => {
  const [isDepositShown, setIsDepositShown] = useState(true);
  const depositStateHandler = () => {
    setIsDepositShown(true);
  };
  const claimHandler = () => {
    setIsDepositShown(false);
  };
  return (
    <div className="pottery_second_bottom_first_card">
      <div className="pottery_second_bottom_first_card-row-1">
        <h4
          className={
            isDepositShown
              ? "pottery_second_bottom_first_card-row-1-h4 pottery-card-h4-selected"
              : "pottery_second_bottom_first_card-row-1-h4"
          }
          onClick={depositStateHandler}
        >
          Deposit
        </h4>
        <h4
          className={
            isDepositShown
              ? "pottery_second_bottom_first_card-row-1-h4"
              : "pottery_second_bottom_first_card-row-1-h4 pottery-card-h4-selected"
          }
          onClick={claimHandler}
        >
          Claim
        </h4>
      </div>
      {/* <!-- If Deposit Is Selected(Base Case) --> */}
      <div className="pottery_second_bottom_first_card-row-2">
        <div className="pottery_second_bottom_first_card-row-2-left">
          <h2 className="pottery_second_bottom_first_card-row-2-left-h2">
            Pottery
          </h2>
          <p className="pottery_second_bottom_first_card-row-2-left-p">
            Stake CAKE, Earn CAKE, Win CAKE
          </p>
        </div>
        <div className="pottery_second_bottom_first_card-row-2-right">
          <img
            src={require("./assets/pottery/pot-icon.svg").default}
            alt="pot-icon"
            className="img-pot-icon-pt"
          />
          <img
            src={require("./assets/pottery/pancakeSwapRabbit.svg").default}
            alt="pancakeSwapRabbit"
            className="img-rabbit-pt"
          />
        </div>
      </div>
      {/* changing part */}
      {/* row 3 */}
      <PotteryCardOther part={3} isDepositShown={isDepositShown} />
      {/* row 4 */}
      <PotteryCardOther part={4} isDepositShown={isDepositShown} />
    </div>
  );
};

export default PotteryCard;
