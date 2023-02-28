import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import PotteryCard from "./PotteryCard";
import { TopNavbar } from "./TopNavbar";
import { ThemeContext } from "./context/light-ctx";

const Pottery = () => {
  const { isLight } = useContext(ThemeContext)
  return (
    <>
      {" "}
      <TopNavbar />
      <div className={isLight ? "sub_nav" : "sub_nav lottery-background3-DM lottery-a-DM lottery-hover-DM"}>
        <ul>
          <li>
            <Link href="#">Trading Competition</Link>
          </li>
          <li>
            <Link href="#">Prediction (BETA)</Link>
          </li>
          <li>
            <Link href="#">Lottery</Link>
          </li>
          <li>
            <Link href="#" className="selected_pottery">
              Pottery (BETA)
            </Link>
          </li>
        </ul>
      </div>
      <section className="pottery_first">
        <div className="pottery_first-img-ct-left">
          <div className="pottery_first-img-ct-left_left-1-ct">
            <img
              src={require("./assets/pottery/left1.png")}
              alt="left1"
              className="img-left-1-pt"
            />
          </div>
          <div className="pottery_first-img-ct-left_left-2-ct">
            <img
              src={require("./assets/pottery/left2.png")}
              alt="left2"
              className="img-left-2-pt"
            />
          </div>
          <div className="pottery_first-img-ct-left_left-3-ct">
            <img
              src={require("./assets/pottery/left3.png")}
              alt="left3"
              className="img-left-3-pt"
            />
          </div>
          <div className="pottery_first-img-ct-left_left-4-ct">
            <img
              src={require("./assets/pottery/left4.png")}
              alt="left4"
              className="img-left-4-pt"
            />
          </div>
        </div>

        <div className="pottery_first-img-ct-right">
          <div className="pottery_first-img-ct-right_right-1-ct">
            <img
              src={require("./assets/pottery/right1.png")}
              alt="right1"
              className="img-right-1-pt"
            />
          </div>
          <div className="pottery_first-img-ct-right_right-2-ct">
            <img
              src={require("./assets/pottery/right2.png")}
              alt="right2"
              className="img-right-2-pt"
            />
          </div>
          <div className="pottery_first-img-ct-right_right-3-ct">
            <img
              src={require("./assets/pottery/right3.png")}
              alt="right3"
              className="img-right-3-pt"
            />
          </div>
        </div>

        <div className="pottery_first-left">
          <img
            src={require("./assets/pottery/banner-bunny.png")}
            className="pottery_first-left_img"
            alt="banner-bunny"
          />
        </div>
        <div className="pottery_first-right">
          <h3 className="pottery_first-right_header-3">
            The PancakeSwap <span>Pottery</span>
          </h3>
          <h2 className="pottery_first-right_header-2">$14,789</h2>
          <p className="pottery_first-right_p1">
            To be won <span>!</span>
          </p>
          <div className="pottery_first-right_menu">
            <img
              src={require("./assets/pottery/svg_menu.svg").default}
              alt="menu-item"
              className="pottery_first-right_menu-item"
            />
            <button className="pottery_first-right_menu-button">
              Stake to WIN!
            </button>
          </div>
          <div className="pottery_first-right_p2_container">
            <p className="pottery_first-right_p2_container_item">
              Deposit CAKE for <span> 10 Weeks </span>
            </p>
            <p className="pottery_first-right_p2_container_item">
              to earn <span> 13.95% </span>APY
            </p>
            <p className="pottery_first-right_p2_container_item">
              And a chance to <span> win prize pot! </span>
            </p>
          </div>
          <p className="pottery_first-right_timer">
            6 <span className="timer_span"> d </span>15
            <span className="timer_span"> h </span> 10
            <span className="timer_span"> m </span>
            <span className="timer_span_ii"> until the next draw </span>
          </p>
        </div>
      </section>
      <section className="pottery_second">
        <div className="pottery_second_line"></div>
        <div className="pottery_second_up">
          <h3 className="pottery_second_up_h3">Current Prize Pot</h3>
          <h2 className="pottery_second_up_h2">$14,798</h2>
          <p className="pottery_second_up_p">Stake to get your tickets NOW</p>
        </div>
        <div className="pottery_second_bottom">
          <div className="pottery_second_bottom_first">
            <PotteryCard />
          </div>
          <div className="pottery_second_bottom_second">
            <img
              src={require("./assets/pottery/honeypot.png")}
              alt="honeypot"
              className="img-honeypot-pt"
            />
          </div>
        </div>
      </section>
      <section className="pottery_third">
        <div className="pottery_third-up">
          <h2 className="pottery_third-up_h2">Finished Rounds</h2>
        </div>
        <div className="pottery_third-down">
          <div className="pottery_third-down_card">
            <div className="pottery_third-down_card-row1">
              <div className="pottery_third-down_card-row1-left">
                <h3 className="pottery_third-down_card-row1-left-h3">Round</h3>
                <p className="pottery_third-down_card-row1-left-p">
                  <span className="pottery_third-down_card-row1-left-p-span">
                    22
                  </span>
                </p>
                <div className="pottery_third-down_card-row1-left-arrow_left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="pottery_third-down_card-row1-left-arrow_left-svg"
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                  </svg>
                </div>
                <div className="pottery_third-down_card-row1-left-arrow_right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="pottery_third-down_card-row1-left-arrow_right-svg"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </div>
                <div className="pottery_third-down_card-row1-left-arrow_most_right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="pottery_third-down_card-row1-left-arrow_most_right-svg"
                  >
                    <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                  </svg>
                </div>
              </div>

              <div className="pottery_third-down_card-row1-right">
                Drawn Oct 28, 2022, 3:01 PM
              </div>
            </div>

            <div className="pottery_third-down_card-row2">
              <div className="pottery_third-down_card-row2-h3">Winner</div>
              <div className="pottery_third-down_card-row2-mid">
                <div className="table_row">
                  <div className="table_row_img_ct">
                    <img
                      src={require("./assets/pottery/table-icons/sleepy-1000.png")}
                      alt="sleepy-1000"
                      className="table_row_img_ct_item"
                    />
                  </div>
                  <div className="table_row_infos">
                    <p className="table_row_infos-code">0x52...d7f7</p>
                    <p className="table_row_infos-user">@strworld</p>
                  </div>
                </div>
                <div className="table_row">
                  <div className="table_row_img_ct">
                    <img
                      src={require("./assets/pottery/table-icons/sleepy-1000.png")}
                      alt="sleepy-1000"
                      className="table_row_img_ct_item"
                    />
                  </div>
                  <div className="table_row_infos">
                    <p className="table_row_infos-code">0xc0...3a12</p>
                    <p className="table_row_infos-user">@christophe988</p>
                  </div>
                </div>
                <div className="table_row">
                  <div className="table_row_img_ct">
                    <img
                      src={require("./assets/pottery/table-icons/sleepy-1000.png")}
                      alt="sleepy-1000"
                      className="table_row_img_ct_item"
                    />
                  </div>
                  <div className="table_row_infos">
                    <p className="table_row_infos-code">0x4a...ca66</p>
                    <p className="table_row_infos-user">@bobon</p>
                  </div>
                </div>
                <div className="table_row">
                  <div className="table_row_img_ct">
                    <img
                      src={require("./assets/pottery/table-icons/sleepy-1000.png")}
                      alt="sleepy-1000"
                      className="table_row_img_ct_item"
                    />
                  </div>
                  <div className="table_row_infos">
                    <p className="table_row_infos-code">0x36...b2d6</p>
                    <p className="table_row_infos-user">@CMFrem</p>
                  </div>
                </div>
                <div className="table_row">
                  <div className="table_row_img_ct">
                    <img
                      src={require("./assets/pottery/table-icons/sleepy-1000.png")}
                      alt="sleepy-1000"
                      className="table_row_img_ct_item"
                    />
                  </div>
                  <div className="table_row_infos">
                    <p className="table_row_infos-code">0x36...b2d6</p>
                    <p className="table_row_infos-user">@CMFrem</p>
                  </div>
                </div>
                <div className="table_row">
                  <div className="table_row_img_ct">
                    <img
                      src={require("./assets/pottery/table-icons/sleepy-1000.png")}
                      alt="sleepy-1000"
                      className="table_row_img_ct_item"
                    />
                  </div>
                  <div className="table_row_infos">
                    <p className="table_row_infos-code">0x94...ce77</p>
                    <p className="table_row_infos-user">@bigkahunabunny</p>
                  </div>
                </div>
                <div className="table_row">
                  <div className="table_row_img_ct">
                    <img
                      src={
                        require("./assets/pottery/table-icons/no-user-icon.svg")
                          .default
                      }
                      alt="no-user-icon"
                      className="table_row_img_ct_item"
                    />
                  </div>
                  <div className="table_row_infos">
                    <p className="table_row_infos-code">0x68...be27</p>
                    <p className="table_row_infos-user"></p>
                  </div>
                </div>
                <div className="table_row">
                  <div className="table_row_img_ct">
                    <img
                      src={
                        require("./assets/pottery/table-icons/no-user-icon.svg")
                          .default
                      }
                      alt="no-user-icon"
                      className="table_row_img_ct_item"
                    />
                  </div>
                  <div className="table_row_infos">
                    <p className="table_row_infos-code">0xe9...d4c0</p>
                    <p className="table_row_infos-user">@GIOS</p>
                  </div>
                </div>
              </div>

              <div className="pottery_third-down_card-row2-left">Latest</div>
            </div>

            <div className="pottery_third-down_card-row3">
              <h3 className="pottery_third-down_card-row3-h3">Prize Pot</h3>
              <h3 className="pottery_third-down_card-row3-h4">~$1,175</h3>
              <p className="pottery_third-down_card-row3-p">251 CAKE</p>
            </div>
            <div className="pottery_third-down_card-row4">
              <p className="pottery_third-down_card-row4-top-p pottery_third-down_card-row4-p">
                Total players this round: <span>1,329</span>
              </p>
              <div className="pottery_third-down_card-row4-bottom">
                <p className="pottery_third-down_card-row4-bottom-p pottery_third-down_card-row4-p">
                  Pottery deposited on: <span>Sep 6, 2022, 3:00 AM</span>
                </p>
                <p className="pottery_third-down_card-row4-bottom-view">
                  View on BscScan
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="pottery_third-down_card-row4-bottom-view-img"
                    >
                      <path d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Pottery Third Finished --> */}
      {/* <!-- Pottery Fourth Starts --> */}
      <section className="pottery_fourth">
        <div className="pottery_fourth-row1">
          <div className="pottery_fourth-row1-up">
            <h3 className="pottery_fourth-row1-up-h3">How to Play</h3>
            <p className="pottery_fourth-row1-up-p">
              Deposit CAKE to get your Pottery tickets. More CAKE deposited,
              higher the chance of winning (and of course, higher the rewards)!
              Simple!
            </p>
          </div>
          {/* <!-- PT4 - row1 bottom --> */}
          <div className="pottery_fourth-row1-bottom">
            <div className="pottery_fourth-row1-bottom-card">
              <h5 className="pottery_fourth-row1-bottom-card-h5">STEP 1</h5>
              <h3 className="pottery_fourth-row1-bottom-card-h3">
                Deposit CAKE
              </h3>
              <p className="pottery_fourth-row1-bottom-card-p">
                Deposit CAKE on the monthly subscription date -- first Monday of
                each Month. Your chance of winning depends on how many CAKE you
                deposit compared to the total pool. Your CAKE deposit will be
                locked for 10 weeks. There will be a monthly TVL cap in the beta
                product stage.
              </p>
            </div>
            <div className="pottery_fourth-row1-bottom-card">
              <h5 className="pottery_fourth-row1-bottom-card-h5">STEP 2</h5>
              <h3 className="pottery_fourth-row1-bottom-card-h3">
                Wait for the Draw
              </h3>
              <p className="pottery_fourth-row1-bottom-card-p">
                A portion of the staking rewards from the CAKE deposited will
                fill the prize pot and there will be one weekly draw. There will
                be eight (8) winners each week. Check your chance of winning,
                add more CAKE on the monthly subscription date to increase your
                odds!
              </p>
            </div>
            <div className="pottery_fourth-row1-bottom-card">
              <h5 className="pottery_fourth-row1-bottom-card-h5">STEP 3</h5>
              <h3 className="pottery_fourth-row1-bottom-card-h3">
                Claim & Withdrawal
              </h3>
              <p className="pottery_fourth-row1-bottom-card-p">
                You can claim any winnings that you may have once the weekly
                draw is completed. Your CAKE can be withdrawn after 10 weeks but
                they won't be providing any winning odds anymore.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Row1 ends -->
  <!-- Row2 starts --> */}
        <div className="pottery_fourth-row2">
          <div className="pottery_fourth-row2-up">
            <div className="pottery_fourth-row2-up-h3">Split Breakdown</div>
          </div>
          <div className="pottery_fourth-row2-mid-left">
            <p className="pottery_fourth-row2-mid-left-p">
              The staking rewards of funds
            </p>
            <h3 className="pottery_fourth-row2-mid-left-h3">
              Prize Pool (80%)
            </h3>
            <ul className="pottery_fourth-row2-mid-left-li-ct">
              <li className="pottery_fourth-row2-mid-left-li-ct-item">
                80% of staking rewards from the funds deposited
              </li>
            </ul>
            <h3 className="pottery_fourth-row2-mid-left-h3">Rewards (20%)</h3>
            <ul className="pottery_fourth-row2-mid-left-li-ct">
              <li className="pottery_fourth-row2-mid-left-li-ct-item">
                20% of the staking rewards from the funds deposited
              </li>
            </ul>

            <h3 className="pottery_fourth-row2-mid-left-h3">Fees (8%)</h3>
            <ul className="pottery_fourth-row2-mid-left-li-ct">
              <li className="pottery_fourth-row2-mid-left-li-ct-item">
                8% of the prize pot distributed each week will be charged as
                fees
              </li>
            </ul>
          </div>
          <div className="pottery_fourth-row2-mid-right">
            <div className="pottery_fourth-row2-mid-right-up">
              <img
                src={require("./assets/pottery/chart.png")}
                alt="chart"
                className="pottery_fourth-row2-mid-right-up-img"
              />
            </div>
            <div className="pottery_fourth-row2-mid-right-down">
              <div className="pottery_fourth-row2-mid-right-down-row1 pottery_fourth-row2-mid-right-down-row">
                <ul>
                  <div className="marker"></div>
                  <li>Prize Pool</li>
                </ul>
                <p>73.6%</p>
              </div>
              <div className="pottery_fourth-row2-mid-right-down-row2 pottery_fourth-row2-mid-right-down-row">
                <ul>
                  <div className="marker"></div>
                  <li>Rewards</li>
                </ul>
                <p>20%</p>
              </div>
              <div className="pottery_fourth-row2-mid-right-down-row3 pottery_fourth-row2-mid-right-down-row">
                <ul>
                  <div className="marker"></div>
                  <li>Fees</li>
                </ul>
                <p>6.4%</p>
              </div>
            </div>
          </div>
          <div className="pottery_fourth-row2-bottom">
            <p className="pottery_fourth-row2-bottom-p">
              Since the rewards from lock-staking are only distributed at the
              end of the duration, the prize pool to be distributed in each of
              the 10 weeks upon deposit is borrowed from the CAKE treasury based
              on the estimated APY. The rewards at the end of the duration from
              the deposit will be used to repay the treasury and to distribute
              the 20% staking rewards. Because the APY may change over the
              duration based on other deposits and their lock-periods in the
              lock CAKE pool, there may be a small deviance from the above
              percentages specified (+/- 10%). But, ultimately all staking
              rewards net of the Pottery fees will be returned to depositors
              through prize pool or rewards -- the expected value is the same.
            </p>
          </div>
        </div>
        {/* <!-- Row2 ends -->
  <!-- Row3 start --> */}
        <div className="pottery_fourth-row3">
          <div className="pottery_fourth-row3-img-ct">
            <img
              src={require("./assets/pottery/honey.png")}
              alt="honey"
              className="pottery_fourth-row3-img-ct-item"
            />
          </div>
          <div className="pottery_fourth-row3-faq">
            <h3 className="pottery_fourth-row3-faq-h3">
              <span> FAQ</span>
            </h3>
            <details className="pottery_fourth-row3-faq-details">
              <summary>
                How is odds calculated?
                <div>
                  Details
                  <img
                    src={require("./assets/pottery/arrow-down-faq.png")}
                    alt="arrow-down-faq"
                    className="arrow-down-faq"
                  />
                </div>
              </summary>
              <div className="pottery_fourth-row3-faq-details-p-div">
                All CAKE deposits will be locked for the same duration, the odds
                of your address winning the prize pool is simply proportional to
                your CAKE deposit over the total CAKE deposit of the whole
                Pottery. Each week, eight (8) addresses are drawn randomly based
                on their odds. Simply put, if user A deposited 1 CAKE, user B
                deposited 2 CAKE, then user B's odds of winning is twice of user
                A's.
              </div>
            </details>
            <details className="pottery_fourth-row3-faq-details">
              <summary>
                Is there any risk associated with depositing and playing
                Pottery?
                <div>
                  Details
                  <img
                    src={require("./assets/pottery/arrow-down-faq.png")}
                    alt="arrow-down-faq"
                    className="arrow-down-faq"
                  />
                </div>
              </summary>
              <div className="pottery_fourth-row3-faq-details-p-div">
                You will be locking your CAKE deposit for 10 weeks and you will
                not be able to withdraw early in any circumstances. Your
                principal (i.e. your deposit) will be returned to your 100%
                after 10 weeks. Only the staking rewards of your deposit will be
                used to fill and operate the Pottery. Simply put, you're only
                risking the staking rewards of your deposit.
              </div>
            </details>
            <details className="pottery_fourth-row3-faq-details pottery_fourth-row3-faq-details-last">
              <summary>
                Where can I learn more about this new Pottery format?
                <div>
                  Details
                  <img
                    src={require("./assets/pottery/arrow-down-faq.png")}
                    alt="arrow-down-faq"
                    className="arrow-down-faq"
                  />
                </div>
              </summary>
              <div className="pottery_fourth-row3-faq-details-p-div">
                Please feel free to reach out to us on
                <span> Telegram </span>or <span> Discord </span> if you're still
                unsure about the format! Please also let us know if you have any
                feedback for us to improve this further.
              </div>
            </details>
          </div>
        </div>
        {/* <!-- Row3 ends --> */}
      </section>
      <Footer />
    </>
  );
};

export default Pottery;
