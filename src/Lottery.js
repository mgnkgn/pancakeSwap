import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SubNav from "./SubNav";

const Lottery = () => {
    return (
        <>
            <Navbar />

            <SubNav />
            
            <section class="lottery flex-col">
                <div class="lottery__hero flex-col">
                    <div class="lottery__hero__contents flex-col">
                        <h2>The PancakeSwap Lottery</h2>
                        <p>$69,420</p>
                        <h2>in prizes!</h2>
                    </div>

                    <div class="lottery__hero__buy flex-col">
                        <img src="assets/lottery/ticket.svg" alt="menu-item" />
                        <button>Buy Tickets</button>
                    </div>
                </div>

                <div class="lottery__images">
                    <div class="lottery__images__container">
                        <img src="/assets/lottery/star-big.png" alt="" />
                        <img src="/assets/lottery/star-small.png" alt="" />
                        <img src="/assets/lottery/three-stars.png" alt="" />
                        <img src="/assets/lottery/ticket-l.png" alt="" />
                        <img src="/assets/lottery/ticket-r.png" alt="" />
                    </div>
                </div>
            </section>

            <section class="tickets flex-col">
                <div class="tickets__container flex-col">
                    <h2 class="tickets__container__title">Get your tickets now!</h2>
                    <div class="tickets__container__time flex-row">
                        <div class="flex-row">
                            <h2>4</h2>
                            <h2>h</h2>
                            <h2>29</h2>
                            <h2>m</h2>
                        </div>
                        <h2>until the draw</h2>
                    </div>

                    <div class="tickets__container__table">
                        <div class="tickets__container__table__container">

                            <div class="flex-row table__top">
                                <h2>Next Draw</h2>
                                <p>#713 | Draw: Nov 10, 2022, 1:00 AM</p>
                            </div>

                            <div class="flex-col table__body">
                                <div class="flex-row table__body--1">
                                    <h2>Prize Pot</h2>

                                    <div class="flex-col">
                                        <h2>~$69,420</h2>
                                        <p>17,137 CAKE</p>
                                    </div>
                                </div>

                                <div class="flex-row table__body--2">
                                    <h2>Your Tickets</h2>
                                    <button>Buy Tickets</button>
                                </div>
                            </div>

                            <div class="flex-row table__details">
                                <a>Details</a>
                                <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg"
                                    class="sc-4ba21b47-0 elUESX" fill="#1fc7d4">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="wallet flex-row">
                <img class="wallet__image" src="/assets/lottery/ticket-l.png" alt="" />
                <div class="wallet__contents flex-col">
                    <h2>Connect your wallet
                        <br />to check if you've won!
                    </h2>
                    <button>Connect Wallet</button>
                </div>
                <img class="wallet__image" src="/assets/lottery/ticket-r.png" alt="" />
            </section>

            <section class="rounds flex-col">
                <div class="rounds__container flex-col">
                    <h2>Finished Rounds</h2>
                    <div class="rounds__history flex-row">
                        <button>All History</button>
                        <button>Your History</button>
                    </div>
                    <div class="rounds__table">
                        <div class="flex-col table__container">

                            <div class="table__top flex-col">
                                <div class="flex-row top__input">
                                    <div class="flex-row">
                                        <h2>Round</h2>
                                        <input inputmode="numeric" id="round-id" name="round-id" scale="lg" value="714" />
                                    </div>

                                    <div class="flex-row">
                                        <button><svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z">
                                            </path>
                                        </svg></button>
                                        <button><svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z">
                                            </path>
                                        </svg></button>
                                        <button><svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3 13.1835H14.17L9.29 18.0635C8.9 18.4535 8.9 19.0935 9.29 19.4835C9.68 19.8735 10.31 19.8735 10.7 19.4835L17.29 12.8935C17.68 12.5035 17.68 11.8735 17.29 11.4835L10.71 4.88347C10.32 4.49347 9.69 4.49347 9.3 4.88347C8.91 5.27347 8.91 5.90347 9.3 6.29347L14.17 11.1835H3C2.45 11.1835 2 11.6335 2 12.1835C2 12.7335 2.45 13.1835 3 13.1835Z">
                                            </path>
                                            <path
                                                d="M20 5.18347C20.5523 5.18347 21 5.63119 21 6.18347V18.1835C21 18.7358 20.5523 19.1835 20 19.1835C19.4477 19.1835 19 18.7358 19 18.1835V6.18347C19 5.63119 19.4477 5.18347 20 5.18347Z">
                                            </path>
                                        </svg></button>
                                    </div>
                                </div>

                                <div class="flex-row top__date">
                                    <p>Drawn Nov 10, 2022, 1:00 AM</p>
                                </div>
                            </div>

                            <div class="table__body flex-row">
                                <h2>Winning Number</h2>
                                <div class="flex-row body_number">
                                    <div>
                                        <img src="/assets/lottery/lottery-dice-pink.svg" alt="" />
                                        <p>6</p>
                                    </div>
                                    <div>
                                        <img src="/assets/lottery/lottery-dice-purple.svg" alt="" />
                                        <p>9</p>
                                    </div>
                                    <div>
                                        <img src="/assets/lottery/lottery-dice-blue.svg" alt="" />
                                        <p>6</p>
                                    </div>
                                    <div>
                                        <img src="/assets/lottery/lottery-dice-cayan.svg" alt="" />
                                        <p>9</p>
                                    </div>
                                    <div>
                                        <img src="/assets/lottery/lottery-dice-green.svg" alt="" />
                                        <p>6</p>
                                    </div>
                                    <div>
                                        <img src="/assets/lottery/lottery-dice-yellow.svg" alt="" />
                                        <p>9</p>
                                    </div>
                                </div>
                                <div class="body_latest">
                                    <h2>Latest</h2>
                                </div>
                            </div>

                            <div class="flex-row table__details">
                                <a>Details</a>
                                <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg"
                                    class="sc-4ba21b47-0 elUESX" fill="#1fc7d4">
                                    <path
                                        d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="howtoplay flex-col">
                <div class="howtoplay__container">
                    <div class="howtoplay__title flex-col">
                        <h2>How to Play</h2>
                        <h3>If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize
                            pool. <br /> Simple!</h3>

                        <div class="flex-row howtoplay__title--row">
                            <div class="title__card">
                                <div class="card__container">
                                    <h3>STEP 1</h3>
                                    <h2>Buy Tickets</h2>
                                    <p>Prices are set when the round starts, equal to 5 USD in CAKE per ticket.</p>
                                </div>
                            </div>

                            <div class="title__card">
                                <div class="card__container">
                                    <h3>STEP 2</h3>
                                    <h2>Wait for the Draw</h2>
                                    <p>There is one draw every day alternating between 0 AM UTC and 12 PM UTC.</p>
                                </div>
                            </div>

                            <div class="title__card">
                                <div class="card__container">
                                    <h3>STEP 3</h3>
                                    <h2>Check for Prizes</h2>
                                    <p>Once the round’s over, come back to the page and check to see if you’ve won!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="seperator"></div>

                    <div class="howtoplay__winning flex-row">
                        <div class="winning__text">
                            <h2>Winning Criteria</h2>
                            <h3>The digits on your ticket must match in the correct order to win.</h3>
                            <p>Here’s an example lottery draw, with two tickets, A and B.</p>
                            <ul>
                                <li>Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket
                                    only wins a “Match first 3” prize.</li>
                                <li>Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn’t win a
                                    prize.</li>
                            </ul>
                            <p>Prize brackets don’t ‘stack’: if you match the first 3 digits in order, you’ll only win prizes from the
                                ‘Match 3’ bracket, and not from ‘Match 1’ and ‘Match 2’.</p>
                        </div>

                        <div class="winning__table">
                            <div class="table__container flex-col">
                                <div class="table__row1 flex-row">
                                    <div class="row__element">
                                        <img src="/assets/lottery/lottery-dice-yellow.svg" alt="" />
                                        <p>9</p>
                                    </div>

                                    <div class="row__element">
                                        <img src="/assets/lottery/lottery-dice-green.svg" alt="" />
                                        <p>1</p>
                                    </div>

                                    <div class="row__element">
                                        <img src="/assets/lottery/lottery-dice-cayan.svg" alt="" />
                                        <p>3</p>
                                    </div>

                                    <div class="row__element">
                                        <img src="/assets/lottery/lottery-dice-blue.svg" alt="" />
                                        <p>6</p>
                                    </div>

                                    <div class="row__element">
                                        <img src="/assets/lottery/lottery-dice-purple.svg" alt="" />
                                        <p>6</p>
                                    </div>

                                    <div class="row__element">
                                        <img src="/assets/lottery/lottery-dice-pink.svg" alt="" />
                                        <p>2</p>
                                    </div>
                                </div>

                                <div class="table__row2 flex-row">
                                    <p>A</p>
                                    <img src="/assets/lottery/row2.svg" alt="" />
                                </div>

                                <div class="table__row3 flex-row">
                                    <p>B</p>
                                    <img src="/assets/lottery/row3.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="seperator"></div>

                    <div class="howtoplay__prize flex-row">
                        <div class="prize__text">
                            <h2>Prize Funds</h2>
                            <p>The prizes for each lottery round come from three sources:</p>
                            <h3>Ticket Purchases</h3>
                            <ul>
                                <li>100% of the CAKE paid by people buying tickets that round goes back into the prize pools.</li>
                            </ul>
                            <h3>Rollover Prizes</h3>
                            <ul>
                                <li>After every round, if nobody wins in one of the prize brackets, the unclaimed CAKE for that bracket
                                    rolls over into the next round and are redistributed among the prize pools.</li>
                            </ul>
                            <h3>CAKE Injections</h3>
                            <ul>
                                <li>An average total of 35,000 CAKE from the treasury is added to lottery rounds over the course of a week.
                                    This CAKE is of course also included in rollovers! Read more in our guide to <a
                                        href="https://docs.pancakeswap.finance/tokenomics/cake/cake-tokenomics">CAKE Tokenomics</a></li>
                            </ul>
                        </div>

                        <div class="prize__table">
                            <div class="table__container flex-col">
                                <div class="table__chart">
                                    <img src="/assets/lottery/chart.svg" alt="" />
                                </div>

                                <div class="table__title flex-row">
                                    <h2>Digits Mached</h2>
                                    <h2>Prize Pool Allocation</h2>
                                </div>

                                <div class="table__elements flex-col">
                                    <div class="element__1 flex-row">
                                        <div class="flex-row">
                                            <div class="color"></div>
                                            <p>Matches first 1</p>
                                        </div>
                                        <h3>2%</h3>
                                    </div>

                                    <div class="element__2 flex-row">
                                        <div class="flex-row">
                                            <div class="color"></div>
                                            <p>Matches first 2</p>
                                        </div>
                                        <h3>3%</h3>
                                    </div>

                                    <div class="element__3 flex-row">
                                        <div class="flex-row">
                                            <div class="color"></div>
                                            <p>Matches first 3</p>
                                        </div>
                                        <h3>5%</h3>
                                    </div>

                                    <div class="element__4 flex-row">
                                        <div class="flex-row">
                                            <div class="color"></div>
                                            <p>Matches first 4</p>
                                        </div>
                                        <h3>10%</h3>
                                    </div>

                                    <div class="element__5 flex-row">
                                        <div class="flex-row">
                                            <div class="color"></div>
                                            <p>Matches first 5</p>
                                        </div>
                                        <h3>20%</h3>
                                    </div>

                                    <div class="element__6 flex-row">
                                        <div class="flex-row">
                                            <div class="color"></div>
                                            <p>Matches all 6</p>
                                        </div>
                                        <h3>40%</h3>
                                    </div>

                                    <div class="element__7 flex-row">
                                        <div class="flex-row">
                                            <div class="color"></div>
                                            <p>Burn Pool</p>
                                        </div>
                                        <h3>20%</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="seperator"></div>

                    <div class="howtoplay__questions flex-row">
                        <img src="/assets/lottery/tombola.png" alt="" />
                        <div class="questions__text">
                            <h3>Still got questions?</h3>
                            <p>Check our in-depth guide on <a href="https://docs.pancakeswap.finance/products/lottery/lottery-guide">how to play
                                <br />the PancakeSwap lottery!</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Lottery;