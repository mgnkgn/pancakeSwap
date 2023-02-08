import React from "react";
import Footer from "./Footer";
import { TopNavbar } from "./TopNavbar";

import photoStavrosX from "./assets/competition/MoD-banner-dar.webp";
import photoStavrosXX from "./assets/competition/MoD-storm-bunny.webp";
import photo1 from "./assets/competition/mod-mesh.f35f83b0.png";
import photo2 from "./assets/competition/MoD-bg-shine.b56df09c.png";
import photo3 from "./assets/competition/MoD-hero-bunnies.webp";
import photo4 from "./assets/competition/MoD-banner-dar2.webp";
import photo5 from "./assets/competition/Dalarina.svg"
import photo6 from "./assets/competition/pocket_watch.svg"
import photo7 from "./assets/competition/checkmark.svg";
import photo8 from "./assets/competition/checkmark.svg"
import photo9 from "./assets/competition/rabbit.svg"
import photo10 from "./assets/competition/MoD-banner-dar3.webp"
import photo11 from "./assets/competition/left_feather.svg"
import photo12 from "./assets/competition/right_feather.svg"
import photo13 from "./assets/competition/left_feather_profile.svg"
import photo14 from "./assets/competition/bunny_profile.svg"
import photo15 from "./assets/competition/right_feather_profile.svg"
import photo16 from "./assets/competition/left_feather_score.svg"
import photo17 from "./assets/competition/right_feather_score.svg"
import photo18 from "./assets/competition/trophies.svg"
import photo19 from "./assets/competition/left_feather_score.svg"
import photo20 from "./assets/competition/right_feather_score.svg"
import photo21 from "./assets/competition/syrup-storm-lg.png"
import photo22 from "./assets/competition/chaotic-cakers-lg.png"
import photo23 from "./assets/competition/fearsome-flippers-lg.png"
import photo24 from "./assets/competition/rankings.svg"
import photo25 from "./assets/competition/bunnyman.svg"
import photo26 from "./assets/competition/dollop-1000.png"
import photo27 from "./assets/competition/skull.svg"
import photo28 from "./assets/competition/bull.svg"
import photo29 from "./assets/competition/cracker.svg"
import photo30 from "assets/farms/arrow down.svg"
import photo31 from "./assets/competition/MoD-champion-gold.svg"
import photo32 from "./assets/competition/MoD-top-10-gold.svg"
import photo33 from "./assets/competition/MoD-top-100-gold.svg"
import photo34 from "./assets/competition/MoD-top-500-gold.svg"
import photo35 from "./assets/competition/MoD-participant-gold.svg"
import photo36 from "./assets/competition/MoD-flipper.webp"

const Competition = () => {
  return (
    <>
      <TopNavbar />
      <div class="sub_nav_farms" style={{ position: "relative", zIndex: "3" }}>
        <ul>
          <li>
            <a href="#" class="selected_farms top_links">
              Latest
            </a>
          </li>
          <li>
            <a href="#" class="top_links">
              Finished
            </a>
          </li>
        </ul>
      </div>
      <div class="competition_all_content">
        <div class="competition_s1_container">
          <img
            class="net"
            src={photo1}
            alt=""
          />
          <img
            class="halo"
            src={photo2}
            alt=""
          />
          <img
            class="bunnies"
            src={photo3}
            alt=""
          />
          <img class="coin1" src={photoStavrosX} alt="xxx" />
          <img
            class="coin2"
            src={photo4}
            alt=""
          />
          <div class="competition_s1">
            <div class="mines_container">
              <p>May 17-24, 2022</p>
              <img
                src={photo5}
                alt=""
              />
              <h2 class="trading_competition">TRADING COMPETITION</h2>
              <h2 class="inprizes">$120,000 in Prizes</h2>
              <h2 class="inprizes">with Tokens and NFTs!</h2>
              <p>Compete with other teams for the highest trading volume!</p>
              <div class="divider"></div>
            </div>
            <div class="finished">
              <img
                src={photo6}
                alt=""
              />
              <div class="finished_bottom">
                <p class="finished_p">Finished!</p>
                <div class="finished_bottom_bottom">
                  <div class="check">
                    <img
                      src={photo7}
                      alt=""
                    />
                    <p>ENTRY</p>
                  </div>
                  <div class="line_divider"></div>
                  <div class="check">
                    <img
                      src={photo8}
                      alt=""
                    />
                    <p>LIVE</p>
                  </div>
                  <div class="line_divider"></div>
                  <div class="check">
                    <img
                      src={photo9}
                      alt=""
                    />
                    <p class="end">END</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="competition_s2_container">
          <img
            class="coin3"
            src={photo10}
            alt=""
          />
          <div class="finished_s2">
            <div class="feathered">
              <img
                src={photo11}
                alt=""
              />
              <h2>Finished!</h2>
              <img
                src={photo12}
                alt=""
              />
            </div>
            <button class="connect_btn">Connect Wallet</button>
          </div>
          <div class="your_score">
            <div class="feathered_bunny_profile">
              <img
                src={photo13}
                alt=""
              />
              <img
                src={photo14}
                alt=""
              />
              <img
                src={photo15}
                alt=""
              />
            </div>
            <div class="purple_text_container">
              <div class="your_score1">
                <img
                  src={photo16}
                  alt=""
                />
                <h2>Your Score</h2>
                <img
                  src={photo17}
                  alt=""
                />
              </div>
              <div class="check_your_rank">
                <h2>Check your Rank</h2>
                <p>Connect wallet to view</p>
                <button class="connect_btn">Connect Wallet</button>
              </div>
            </div>
          </div>
        </div>
        <div class="competition_s3_container">
          <img
            class="trophies"
            src={photo18}
            alt=""
          />
          <div class="team_ranks">
            <img
              src={photo19}
              alt=""
            />
            <h2>Team Ranks</h2>
            <img
              src={photo20}
              alt=""
            />
          </div>
          <div class="ranking_table_board">
            <div class="left_side">
              <div class="stage">
                <img
                  class="syrup_storm"
                  src={photo21}
                  alt=""
                />
                <img
                  class="chaotic"
                  src={photo22}
                  alt=""
                />
                <img
                  class="fearsome"
                  src={photo23}
                  alt=""
                />
                <img
                  class="rankings"
                  src={photo24}
                  alt=""
                />
              </div>
              <div class="stats">
                <div class="storm_numbers">
                  <p>$17,878,338</p>
                  <p>Volume</p>
                  <div class="participants">
                    <img
                      src={photo25}
                      alt=""
                    />
                    <p>2,098</p>
                  </div>
                  <p>Participants</p>
                </div>
                <div class="storm_numbers">
                  <p>$28,187,929</p>
                  <p>Volume</p>
                  <div class="participants">
                    <img
                      src={photo25}
                      alt=""
                    />
                    <p>2,230</p>
                  </div>
                  <p>Participants</p>
                </div>
                <div class="storm_numbers">
                  <p>$16,149,457</p>
                  <p>Volume</p>
                  <div class="participants">
                    <img src={photo25} alt="" />
                    <p>2,762</p>
                  </div>
                  <p>Participants</p>
                </div>
              </div>
              <div class="total_participants">
                <h2>Total Participants</h2>
                <div class="bunnyman_numbers">
                  <img src={photo25} alt="" />
                  <h2>7090</h2>
                </div>
              </div>
            </div>
            <div class="right_side">
              <div class="table_head">
                <h2>Top Traders</h2>
                <p>Since the start of the competition</p>
              </div>
              <div class="tabs">
                <div class="total">
                  <p>Total</p>
                </div>
                <div class="tabs_second">
                  <p>Storm</p>
                </div>
                <div class="tabs_second">
                  <p>Flippers</p>
                </div>
                <div class="tabs_second">
                  <p>Cakers</p>
                </div>
              </div>
              <div class="rows_grid">
                <div class="rows_grid_1">
                  <p class="numbering">#1</p>
                  <p class="dollar_value">$2,734,120</p>
                  <div class="user">
                    <img src={photo26} alt="" />
                    <p>0xd2...6b9A</p>
                  </div>
                  <img src={photo27} alt="" />
                </div>
                <div class="rows_grid_1">
                  <p class="numbering">#2</p>
                  <p class="dollar_value">$2,734,120</p>
                  <div class="user">
                    <img src={photo26} alt="" />
                    <p>0xd2...6b9A</p>
                  </div>
                  <img src={photo28} alt="" />
                </div>
                <div class="rows_grid_1">
                  <p class="numbering">#3</p>
                  <p class="dollar_value">$2,734,120</p>
                  <div class="user">
                    <img src={photo26} alt="" />
                    <p>0xd2...6b9A</p>
                  </div>
                  <img src={photo27} alt="" />
                </div>
                <div class="rows_grid_1">
                  <p class="numbering">#4</p>
                  <p class="dollar_value">$2,734,120</p>
                  <div class="user">
                    <img src={photo26} alt="" />
                    <p>0xd2...6b9A</p>
                  </div>
                  <img src={photo27} alt="" />
                </div>
                <div class="rows_grid_1">
                  <p class="numbering">#5</p>
                  <p class="dollar_value">$2,734,120</p>
                  <div class="user">
                    <img src={photo26} alt="" />
                    <p>0xd2...6b9A</p>
                  </div>
                  <img src={photo29} alt="" />
                </div>
              </div>
              <div class="table_footer">
                <p>Show More</p>
                <img src={photo30} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {//Prizes section starts
      }
      <section class="competition-prizes">
        <div class="divider-convex no-show">
          {//svg image and laurels
          }
          <div class="divider-image-container">
            {//top image
            }
            <svg></svg>
            {//div wrapper1
            }
            <div>
              <svg></svg>
              {//div wrapper2
              }
              <div>
                <svg></svg>
                <h2>Prizes</h2>
                <svg></svg>
              </div>
              <svg></svg>
            </div>
          </div>
        </div>
        {//Prizes section content, wrapper div
        }
        <div class="competition-prizes-content">
          {//prizes left
          }
          <section class="competition-prizes-content-table">
            <div class="competition-prizes-content-table-heading">
              <h3>Prizes by Team</h3>
              <p>Higher trading volume = higher rank!</p>
            </div>
            {//tab buttons container
            }
            <div class="tab">
              <button>#1 Team</button>
              <button>#2 Team</button>
              <button>#3 Team</button>
            </div>
            <hr></hr>{//tab content for team 1
            }
            <div class="tab-content">
              <table>
                {//table header (row 0)
                }
                <tr>
                  <th>RANK IN TEAM</th>
                  <th>TIER</th>
                  <th>TOKEN PRIZES (SPLIT)</th>
                  <th>ACHIEVEMENTS</th>
                  <th>NFT</th>
                </tr>
                {
                  //row 1
                }
                <tr>
                  <td>1</td>
                  <td>
                    <svg></svg>
                    <div>GOLD</div>
                  </td>
                  <td>$10.800</td>
                  <td>
                    <img
                      src={photo31}
                      alt="Champion gold"
                    />
                    <div>+2.500</div>
                  </td>
                  <td>
                    <svg></svg>
                  </td>
                </tr>
                {
                  //<!-- row 2 -->
                }
                <tr>
                  <td>2 ~ 10</td>
                  <td>
                    <svg></svg>
                    <div>SILVER</div>
                  </td>
                  <td>$25.200</td>
                  <td>
                    <img
                      src={photo32}
                      alt="Top10"
                    />
                    <div>+1.250</div>
                  </td>
                  <td>
                    <svg></svg>
                  </td>
                </tr>
                {
                  //<!-- row 3 -->
                }
                <tr>
                  <td>11 ~ 100</td>
                  <td>
                    <svg></svg>
                    <div>BRONZE</div>
                  </td>
                  <td>$21.600</td>
                  <td>
                    <img
                      src={photo33}
                      alt="Top100"
                    />
                    <div>+1.000</div>
                  </td>
                  <td>
                    <svg></svg>
                  </td>
                </tr>
                {
                  //<!-- row 4 -->
                }
                <tr>
                  <td>101 ~ 500</td>
                  <td>
                    <svg></svg>
                    <div>PURPLE</div>
                  </td>
                  <td>$14.400</td>
                  <td>
                    <img
                      src={photo34}
                      alt="Top500"
                    />
                    <div>+850</div>
                  </td>
                  <td>
                    <svg></svg>
                  </td>
                </tr>
                {
                  //<!-- row 5 -->
                }
                <tr>
                  <td>501+</td>
                  <td>
                    <svg></svg>
                    <div>TEAL</div>
                  </td>
                  <td>$0</td>
                  <td>
                    <img
                      src={photo35}
                      alt="participate"
                    />
                    <div>+500</div>
                  </td>
                  <td>
                    <svg></svg>
                  </td>
                </tr>
              </table>
            </div>
            <p>
              Prizes to be distributed in CAKE and DAR in a distribution of 1:5
              and shared by all members of each respective tier. The price of
              token prizes ($CAKE and $DAR) in USD will be determined as per
              their BUSD pair price during the tally period.
            </p>
          </section>
          {
            //<!-- prizes right -->
          }
          <section class="competition-prizes-content-right">
            <p>
              Every eligible participant will win prizes at the end of the
              competition.
            </p>
            <h3>
              The better your team performs, the better prizes you will get!
            </h3>
            <p>
              The final winning team will be the team with the highest total
              volume score at the end of the competition period.
            </p>
            <p>In addition to token prizes there are NFT rewards:</p>
            <p>
              A. 300 newly-designed PancakeSwap NFTs to the Top 100 Traders in
              each team.
            </p>
            <p>
              B. 100 Mines of Dalarnia NFTs to the Top 100 Traders ranked by the
              $DAR Trading Volume.
            </p>
            <img
              src={photo36}
              alt="MoD Flipper"
            />
          </section>
        </div>
      </section>
      {
        //<!-- Rules section starts -->
      }
      <section class="competition-rules">
        <div class="divider-convex no-show">
          {
            //<!-- svg image and laurels -->
          }
          <div class="divider-image-container">
            {
              //<!-- top image -->
            }
            <svg></svg>
            {
              //<!-- div wrapper1 -->
            }
            <div>
              <svg></svg>
              {
                //<!-- div wrapper2 -->
              }
              <div>
                <svg></svg>
                <h2>Rules</h2>
                <svg></svg>
              </div>
              <svg></svg>
            </div>
          </div>
        </div>

        {
          //<!-- rules content wrapper -->
        }
        <section class="competition-rules-content">
          {
            //<!-- rules left -->
          }
          <section class="competition-rules-content-left">
            <div>
              <h3>Trade to increase your rank</h3>
              <p>
                Eligible pairs: DAR/BNB, CAKE/BNB, and CAKE/BUSD. Please note
                that the volume from limit orders will not be indexed.
              </p>
            </div>
            <div>
              <h3>Play as a team</h3>
              <p>The higher your team’s rank, the better your prizes!</p>
            </div>
            <div>
              <h3>Everyone’s a winner!</h3>
              <p>Sign up for battle and you’re guaranteed a prize!</p>
            </div>
          </section>

          {
            //<!-- rules right -->
          }
          <section class="competition-rules-content-right">
            <h3>Details</h3>
            {
              //<!-- details wrapper -->
            }
            <div>
              <details>
                <summary>
                  <p>Eligible trading pairs</p>
                  <div>Details</div>
                </summary>
                <div>
                  <p>
                    Only trades on DAR/BNB, CAKE/BNB, and CAKE/BUSD pairs will
                    be included in volume calculations. Please note that the
                    volume from limit orders will not be included.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  <p>Calculating team ranks and winners</p>
                  <div>Details</div>
                </summary>
                <div>
                  <p>
                    - Team ranks are calculated by the total combined volume of
                    the top 500 members of each respective team.
                  </p>
                  <p>
                    - The final winning team will be the team with the highest
                    total volume score at the end of the competition period.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  <p>Prize distribution</p>
                  <div>Details</div>
                </summary>
                <div>
                  <p>
                    - Prizes to be distributed in CAKE and DAR in a distribution
                    of 1:5 and shared by all members of each respective tier.
                  </p>
                  <p>
                    - The price of token prizes ($CAKE and $DAR) in USD will be
                    determined as per their BUSD pair price during the tally
                    period.
                  </p>
                  <p>
                    - Every participant will win at least one prize at the end
                    of the competition.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  <p>Fine print</p>
                  <div>Details</div>
                </summary>
                <div>
                  <p>
                    - In the event of a disagreement concerning the final
                    winning team or rank, PancakeSwap will have the final say.
                  </p>
                  <p>
                    - PancakeSwap can and will disqualify any team or specific
                    members that are proven to have taken malicious action or
                    attempt to “cheat” in any way.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  <p>Can I join the battle after it starts?</p>
                  <div>Details</div>
                </summary>
                <div>
                  <p>
                    Sorry, no. You need to register during the registration
                    period, before the start of the event.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  <p>How do I know if I successfully registered?</p>
                  <div>Details</div>
                </summary>
                <div>
                  <p>
                    At the top of the page, the text in the button “I Want to
                    Battle” will change to “Registered”.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  <p>How can I see my current rank?</p>
                  <div>Details</div>
                </summary>
                <div>
                  <p>
                    Check Your Score section on the event page. You’ll need to
                    connect your wallet, of course.
                  </p>
                </div>
              </details>
              <details>
                <summary>
                  <p>How do I claim my prize(s)?</p>
                  <div>Details</div>
                </summary>
                <div>
                  <p>
                    After the battle ends, visit the event page and click the
                    “Claim Prizes” button in the top section or in “Your Score”
                    section. Once you claim your prizes successfully, the button
                    text will change to “Prizes Claimed”.
                  </p>
                </div>
              </details>
            </div>
          </section>
        </section>
      </section>
      {
        //<!-- Finished section starts -->
      }
      <section class="competition-finished">
        <div class="divider-convex no-show"></div>
        {
          //<!-- image and finished container -->
        }
        <div class="competition-finished-container">
          <img />
          <div>
            {
              //<!-- top h2 and laurels container -->
            }
            <div>
              <img src={photoStavrosXX} alt="Storm bunny" />
              <h2>Finished!</h2>
              <img />
            </div>
            <button>Connect Wallet</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Competition;
