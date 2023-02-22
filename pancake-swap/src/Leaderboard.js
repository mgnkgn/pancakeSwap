import React from "react";
import Footer from "./Footer";
import LeaderboardCard from "./LeaderboardCard";
import { TopNavbar } from "./TopNavbar";

const Leaderboard = () => {
  return (
    <>
      <TopNavbar />

      <section class="leaderboard">
        <div class="leaderboard__container flex-col">
          <div class="leaderboard__top flex-col">
            <h1>Teams & Profiles</h1>
            <p>
              Show off your stats and collectibles with your unique profile.
              Team features will be revealed soon!
            </p>
          </div>

          <div class="leaderboard__teams flex-row">
            <h2>Teams</h2>
          </div>

          <LeaderboardCard
            id={1}
            tittle="Syrup Storm"
            description="The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!"
            availability="Coming Soon"
            userNr="189,617"
            imgSrc="/assets/leaderboard/syrup-storm-md.png"
          />

          <LeaderboardCard
            id={2}
            tittle="Fearsome Flippers"
            description="The flippening is coming. Don't get in these bunnies' way, or you'll get flipped, too!"
            availability="Coming Soon"
            userNr="170,078"
            imgSrc="/assets/leaderboard/fearsome-flippers-md.png"
          />

          <LeaderboardCard
            id={3}
            tittle="Chaotic Cakers"
            description="Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!"
            availability="Coming Soon"
            userNr="342,204"
            imgSrc="/assets/leaderboard/chaotic-cakers-md.png"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Leaderboard;
