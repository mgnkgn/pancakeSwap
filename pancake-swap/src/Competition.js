import React from "react";
import Footer from "./Footer";
import { TopNavbar } from "./TopNavbar";

const Competition = () => {
  return (
    <>
      <TopNavbar />
      <div className="sub_nav_farms" style="position: relative; z-index: 3">
        <ul>
          <li>
            <a href="#" className="selected_farms top_links">
              Latest
            </a>
          </li>
          <li>
            <a href="#" className="top_links">
              Finished
            </a>
          </li>
        </ul>
      </div>
      <div className="competition_all_content">
        <div className="competition_s1_container">
          <img
            className="net"
            src="assets\competition\mod-mesh.f35f83b0.png"
            alt=""
          />
          <img
            className="halo"
            src="assets\competition\MoD-bg-shine.b56df09c.png"
            alt=""
          />
          <img
            className="bunnies"
            src="assets\competition\MoD-hero-bunnies.webp"
            alt=""
          />
          <img
            className="coin1"
            src="assets\competition\MoD-banner-dar.webp"
            alt=""
          />
          <img
            className="coin2"
            src="assets\competition\MoD-banner-dar2.webp"
            alt=""
          />
          <div className="competition_s1">
            <div className="mines_container">
              <p>May 17-24, 2022</p>
              <img src="assets\competition\Dalarina.svg" alt="" />
              <h2 className="trading_competition">TRADING COMPETITION</h2>
              <h2 className="inprizes">$120,000 in Prizes</h2>
              <h2 className="inprizes">with Tokens and NFTs!</h2>
              <p>Compete with other teams for the highest trading volume!</p>
              <div className="divider"></div>
            </div>
            <div className="finished">
              <img src="assets\competition\pocket_watch.svg" alt="" />
              <div className="finished_bottom">
                <p className="finished_p">Finished!</p>
                <div className="finished_bottom_bottom">
                  <div className="check">
                    <img src="assets\competition\checkmark.svg" alt="" />
                    <p>ENTRY</p>
                  </div>
                  <div className="line_divider"></div>
                  <div className="check">
                    <img src="assets\competition\checkmark.svg" alt="" />
                    <p>LIVE</p>
                  </div>
                  <div className="line_divider"></div>
                  <div className="check">
                    <img src="assets\competition\rabbit.svg" alt="" />
                    <p className="end">END</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="competition_s2_container">
          <img
            className="coin3"
            src="assets\competition\MoD-banner-dar3.webp"
            alt=""
          />
          <div className="finished_s2">
            <div className="feathered">
              <img src="assets\competition\left_feather.svg" alt="" />
              <h2>Finished!</h2>
              <img src="assets\competition\right_feather.svg" alt="" />
            </div>
            <button className="connect_btn">Connect Wallet</button>
          </div>
          <div className="your_score">
            <div className="feathered_bunny_profile">
              <img src="assets\competition\left_feather_profile.svg" alt="" />
              <img src="assets\competition\bunny_profile.svg" alt="" />
              <img src="assets\competition\right_feather_profile .svg" alt="" />
            </div>
            <div className="purple_text_container">
              <div className="your_score1">
                <img src="assets\competition\left_feather_score.svg" alt="" />
                <h2>Your Score</h2>
                <img src="assets\competition\right_feather_score.svg" alt="" />
              </div>
              <div className="check_your_rank">
                <h2>Check your Rank</h2>
                <p>Connect wallet to view</p>
                <button className="connect_btn">Connect Wallet</button>
              </div>
            </div>
          </div>
        </div>
        <div className="competition_s3_container">
          <img
            className="trophies"
            src="assets\competition\trophies.svg"
            alt=""
          />
          <div className="team_ranks">
            <img src="assets\competition\left_feather_score.svg" alt="" />
            <h2>Team Ranks</h2>
            <img src="assets\competition\right_feather_score.svg" alt="" />
          </div>
          <div className="ranking_table_board">
            <div className="left_side">
              <div className="stage">
                <img
                  className="syrup_storm"
                  src="assets\competition\syrup-storm-lg.png"
                  alt=""
                />
                <img
                  className="chaotic"
                  src="assets\competition\chaotic-cakers-lg.png"
                  alt=""
                />
                <img
                  className="fearsome"
                  src="assets\competition\fearsome-flippers-lg.png"
                  alt=""
                />
                <img
                  className="rankings"
                  src="assets\competition\rankings.svg"
                  alt=""
                />
              </div>
              <div className="stats">
                <div className="storm_numbers">
                  <p>$17,878,338</p>
                  <p>Volume</p>
                  <div className="participants">
                    <img src="assets\competition\bunnyman.svg" alt="" />
                    <p>2,098</p>
                  </div>
                  <p>Participants</p>
                </div>
                <div className="storm_numbers">
                  <p>$28,187,929</p>
                  <p>Volume</p>
                  <div className="participants">
                    <img src="assets\competition\bunnyman.svg" alt="" />
                    <p>2,230</p>
                  </div>
                  <p>Participants</p>
                </div>
                <div className="storm_numbers">
                  <p>$16,149,457</p>
                  <p>Volume</p>
                  <div className="participants">
                    <img src="assets\competition\bunnyman.svg" alt="" />
                    <p>2,762</p>
                  </div>
                  <p>Participants</p>
                </div>
              </div>
              <div className="total_participants">
                <h2>Total Participants</h2>
                <div className="bunnyman_numbers">
                  <img src="assets\competition\bunnyman.svg" alt="" />
                  <h2>7090</h2>
                </div>
              </div>
            </div>
            <div className="right_side">
              <div className="table_head">
                <h2>Top Traders</h2>
                <p>Since the start of the competition</p>
              </div>
              <div className="tabs">
                <div className="total">
                  <p>Total</p>
                </div>
                <div className="tabs_second">
                  <p>Storm</p>
                </div>
                <div className="tabs_second">
                  <p>Flippers</p>
                </div>
                <div className="tabs_second">
                  <p>Cakers</p>
                </div>
              </div>
              <div className="rows_grid">
                <div className="rows_grid_1">
                  <p className="numbering">#1</p>
                  <p className="dollar_value">$2,734,120</p>
                  <div className="user">
                    <img src="assets\competition\dollop-1000.png" alt="" />
                    <p>0xd2...6b9A</p>
                  </div>
                  <img src="assets\competition\skull.svg" alt="" />
                </div>
                <div className="rows_grid_1">
                  <p className="numbering">#2</p>
                  <p className="dollar_value">$2,734,120</p>
                  <div className="user">
                    <img src="assets\competition\dollop-1000.png" alt="" />
                    <p>0xd2...6b9A</p>
                  </div>
                  <img src="assets\competition\bull.svg" alt="" />
                </div>
                <div className="rows_grid_1">
                  <p className="numbering">#3</p>
                  <p className="dollar_value">$2,734,120</p>
                  <div className="user">
                    <img src="assets\competition\dollop-1000.png" alt="" />
                    <p>0xd2...6b9A</p>
                  </div>
                  <img src="assets\competition\skull.svg" alt="" />
                </div>
                <div className="rows_grid_1">
                  <p className="numbering">#4</p>
                  <p className="dollar_value">$2,734,120</p>
                  <div className="user">
                    <img src="assets\competition\dollop-1000.png" alt="" />
                    <p>0xd2...6b9A</p>
                  </div>
                  <img src="assets\competition\skull.svg" alt="" />
                </div>
                <div className="rows_grid_1">
                  <p className="numbering">#5</p>
                  <p className="dollar_value">$2,734,120</p>
                  <div className="user">
                    <img src="assets\competition\dollop-1000.png" alt="" />
                    <p>0xd2...6b9A</p>
                  </div>
                  <img src="assets\competition\cracker.svg" alt="" />
                </div>
              </div>
              <div className="table_footer">
                <p>Show More</p>
                <img src="assets\farms\arrow down.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      //Prizes section starts
      <section className="competition-prizes">
        <div className="divider-convex no-show">
          //svg image and laurels
          <div className="divider-image-container">
            //top image
            <svg></svg>
            //div wrapper1
            <div>
              <svg></svg>
              //div wrapper2
              <div>
                <svg></svg>
                <h2>Prizes</h2>
                <svg></svg>
              </div>
              <svg></svg>
            </div>
          </div>
        </div>
        //Prizes section content, wrapper div
        <div className="competition-prizes-content">
          //prizes left
          <section className="competition-prizes-content-table">
            <div className="competition-prizes-content-table-heading">
              <h3>Prizes by Team</h3>
              <p>Higher trading volume = higher rank!</p>
            </div>
            //tab buttons container
            <div className="tab">
              <button>#1 Team</button>
              <button>#2 Team</button>
              <button>#3 Team</button>
            </div>
            <hr></hr>//tab content for team 1
            <div className="tab-content">
              <table>
                //table header (row 0)
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
                      src="./assets/competition/MoD-champion-gold.svg"
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
                      src="./assets/competition/MoD-top-10-gold.svg"
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
                      src="./assets/competition/MoD-top-100-gold.svg"
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
                      src="./assets/competition/MoD-top-500-gold.svg"
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
                      src="./assets/competition/MoD-participant-gold.svg"
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
          <section className="competition-prizes-content-right">
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
              src="./assets/competition/MoD-flipper.webp"
              alt="MoD Flipper"
            />
          </section>
        </div>
      </section>
      {
        //<!-- Rules section starts -->
      }
      <section className="competition-rules">
        <div className="divider-convex no-show">
          {
            //<!-- svg image and laurels -->
          }
          <div className="divider-image-container">
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
        <section className="competition-rules-content">
          {
            //<!-- rules left -->
          }
          <section className="competition-rules-content-left">
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
          <section className="competition-rules-content-right">
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
      <section className="competition-finished">
        <div className="divider-convex no-show"></div>
        {
          //<!-- image and finished container -->
        }
        <div className="competition-finished-container">
          <img />
          <div>
            {
              //<!-- top h2 and laurels container -->
            }
            <div>
              <img
                src="./assets/competition/MoD-storm-bunny.webp"
                alt="Storm bunny"
              />
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
