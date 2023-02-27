import React, { useContext } from "react";
import { ThemeContext } from "./context/light-ctx";

const LeaderboardCard = ({ id, tittle, description, availability, userNr, imgSrc }) => {

    const {isLight} = useContext(ThemeContext);

    return (
        <div className={isLight ? "leaderboard__card" : "leaderboard__card  lottery-background-border-DM"}>
            <div className="flex-row" >
                <h2 className={isLight ? "leaderboard__card--id" : "leaderboard__card--id lottery-background6-DM lottery-text1-DM"}>{id}</h2>

                <div className={isLight ? "leaderboard__card--body flex-row" : "leaderboard__card--body flex-row lottery-background-DM"}>
                    <div className="flex-col">
                        <h2 className={isLight ? "leaderboard__card--tittle" : "leaderboard__card--tittle lottery-text1-DM "}>{tittle}</h2>
                        <p className={isLight ? "" : "lottery-text3-DM"}>{description}</p>
                        <div className="flex-row">
                            <h2 className={isLight ? "leaderboard__card--soon" : "leaderboard__card--soon lottery-textD-DM"}>
                                <img alt="" src={isLight ? "/assets/leaderboard/image-1.svg" : "/assets/leaderboard/image-1-DM.svg"} />
                                {availability}
                            </h2>
                            <h2 className={isLight ? "leaderboard__card--people" : "leaderboard__card--people lottery-text1-DM"}>
                                <img alt="" src={isLight ? "/assets/leaderboard/image-2.svg" : "/assets/leaderboard/image-2-DM.svg"} />
                                {userNr}
                            </h2>
                        </div>
                    </div>

                    <div className="flex-row">
                        <div className="leaderboard__card--more">
                            <button>See More</button>
                        </div>

                        <div className="leaderboard__card--avatar">
                            <img src={imgSrc} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardCard;
