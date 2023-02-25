import React from "react";

const LeaderboardCard = ({ id, tittle, description, availability, userNr, imgSrc }) => {
    return (
        <div className="leaderboard__card">
            <div className="flex-row">
                <h2 className="leaderboard__card--id">{id}</h2>

                <div className="leaderboard__card--body flex-row">
                    <div className="flex-col">
                        <h2 className="leaderboard__card--tittle">{tittle}</h2>
                        <p>{description}</p>
                        <div className="flex-row">
                            <h2 className="leaderboard__card--soon">
                                <img alt="" src="/assets/leaderboard/image-1.svg" />
                                {availability}
                            </h2>
                            <h2 className="leaderboard__card--people">
                                <img alt="" src="/assets/leaderboard/image-2.svg" />
                                {userNr}
                            </h2>
                        </div>
                    </div>

                    <div className="flex-row">
                        <div className="leaderboard__card--more">
                            <button>See more</button>
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
