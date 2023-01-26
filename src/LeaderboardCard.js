import React from "react";

const LeaderboardCard = ({ id, tittle, description, availability, userNr, imgSrc }) => {
    return (
        <div class="leaderboard__card">
            <div class="flex-row">
                <h2 class="leaderboard__card--id">{id}</h2>

                <div class="leaderboard__card--body flex-row">
                    <div class="flex-col">
                        <h2 class="leaderboard__card--tittle">{tittle}</h2>
                        <p>{description}</p>
                        <div class="flex-row">
                            <h2 class="leaderboard__card--soon">
                                <img alt="" src="/assets/leaderboard/image-1.svg" />
                                {availability}
                            </h2>
                            <h2 class="leaderboard__card--people">
                                <img alt="" src="/assets/leaderboard/image-2.svg" />
                                {userNr}
                            </h2>
                        </div>
                    </div>

                    <div class="flex-row">
                        <div class="leaderboard__card--more">
                            <button>See more</button>
                        </div>

                        <div class="leaderboard__card--avatar">
                            <img src={imgSrc} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardCard;