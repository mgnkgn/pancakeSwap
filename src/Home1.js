import React from "react";

const Home1 = () => {
    return (
        <section class="home1 flex-col home1-light">
            <div class="container flex-col">
                <div class="home1__slideshow flex">
                    <div class="home1__slideshow--1 flex-row">
                        <div class="flex-col">
                            <p>Perpetual Futures</p>
                            <p>UP TO 100&times LEVERAGE</p>
                            <button class="flex-row home-1-btn-light">
                                Trade Now
                                <img
                                    src="/assets/dark-mode/right-arrow-Home-1.svg"
                                    alt=""
                                    class="home-1-img-light"
                                />
                            </button>
                        </div>
                        <div>
                            <img src="/assets/header/image.webp" alt="" />
                        </div>
                    </div>

                    <div class="home1__slideshow--slider">
                        <button class="home1__slideshow--slider-bullet"></button>
                        <button class="home1__slideshow--slider-bullet"></button>
                        <button class="home1__slideshow--slider-bullet"></button>
                    </div>
                </div>

                <div class="home1__hero flex-row">
                    <div class="home1__hero__text flex-col">
                        <h1>The moon is made of pancakes.</h1>
                        <p class="home-1-p-light">
                            Trade, earn, and win crypto on the most popular decentralized
                            platform in the galaxy.
                        </p>
                        <div class="flex-row">
                            <button class="home-1-btn-light">Connect Wallet</button>
                            <button>Trade Now</button>
                        </div>
                    </div>

                    <div class="home1__hero__img flex">
                        <img src="/assets/header/astronaut-bunny.webp" alt="" />
                        <img src="/assets/header/star-l@2x.webp" alt="" />
                        <img src="/assets/header/star-r@2x.webp" alt="" />
                        <img src="/assets/header/star-top-r@2x.webp" alt="" />
                    </div>
                </div>

                <div class="home1__background">
                    <img
                        src="/assets/header/background.svg"
                        alt=""
                        class="home-1-hd-bg"
                    />
                </div>

                <div class="home1__background--1"></div>
            </div>
        </section>
    );
};

export default Home1 ;