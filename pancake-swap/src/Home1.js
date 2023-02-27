import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/light-ctx";
import Slideshow from "./Slideshow";


const Home1 = () => {
    const { isLight } = useContext(ThemeContext);

    const [clicked1, setClicked1] = useState(true);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);


    const handleClick1 = () => {
        setClicked1(true);
        setClicked2(false);
        setClicked3(false);
    }

    const handleClick2 = () => {
        setClicked1(false);
        setClicked2(true);
        setClicked3(false);
    }

    const handleClick3 = () => {
        setClicked1(false);
        setClicked2(false);
        setClicked3(true);
    }

    useEffect(() => {
        let timeout1;
        let timeout2;
        let timeout3;

        if (clicked1) {
            timeout2 = setTimeout(handleClick2, 4000);
        }

        if (clicked2) {
            timeout3 = setTimeout(handleClick3, 4000);
        }

        if (clicked3) {
            timeout1 = setTimeout(handleClick1, 4000);
        }

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
        };
    }, [clicked1, clicked2, clicked3]);



    return (
        <section className={isLight ? "home1 flex-col home1-light" : "home1 flex-col home1-light-DM"}>
            <div className="container flex-col">

                <Slideshow
                    display={clicked1}
                    header={<i className="slider-p-tw"> PancakeSwap x Trust Wallet</i>}
                    body={'Trade and win $10,000 Prize Pool'}
                    footer={
                        <div className="flex-row">
                            <button className="home-1-btn-light" style={{ 'padding': '.3rem' }}>Trade Now Using Trust Wallet<img src="/assets/header/arrow.svg" alt="" /></button>
                            <p></p>
                            <button className="home-1-btn-light" style={{ 'background': '#fff', 'color': '#1fc7d4', 'marginLeft': '.5rem', 'padding': '.3rem', 'borderColor': '#fff' }}>Download Trust Wallet<img src="/assets/header/newtab-TW.svg" alt="" /></button>
                        </div>
                    }
                    background={'slider-background-TW'}
                    img={
                        <div>
                            <img src='https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtrustwalletBg.8b07fa25.png&w=1200&q=75' alt=""
                                style={{
                                    'minWidth': '100%',
                                    'minHeight': '80%',
                                    'marginRight': '.12rem',
                                    'marginTop': '2.2rem'
                                }} />

                            <img src='https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtrustwalletBunny.6e8748a6.png&w=256&q=75' alt=""
                                style={{
                                    'width': '11.6rem',
                                    'marginRight': '8rem'
                                }} />
                        </div>
                    }
                />

                <Slideshow
                    display={clicked2}
                    header={<img alt="" src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAptosXPancakeSwap.e487f52c.png&w=256&q=75" />}
                    body={'Hello Aptos Project Teams!'}
                    footer={<button className={isLight ? "home-1-btn-light" : "home-1-btn-light-DM"}>👋 Get in Touch <img src={isLight ? "/assets/header/newtab.svg" : "/assets/header/newtab-DM.svg"} alt="" /> </button>}
                    background={'slider-background-A'}
                    img={<img src='https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAptos.5b502f26.png&w=1080&q=75' alt="" style={{ 'width': '68rem', 'marginRight': '.12rem' }} />}
                />

                <Slideshow
                    display={clicked3}
                    header={<p>Perpetual Futures</p>}
                    body={'UP TO 100× LEVERAGE'}
                    footer={<button className={isLight ? "home-1-btn-light" : "home-1-btn-light-DM"}>Trade Now <img src={isLight ? "/assets/header/arrow.svg" : "/assets/header/arrow-DM.svg"} alt="" /> </button>}
                    background={'slider-background-P'}
                    img={<img src='https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperpetual.fd0aa080.png&w=640&q=75' alt="" style={{ 'width': '24.5rem' }} />}
                />

                <div className="home1__slideshow--slider">
                    <button onClick={handleClick1} className={clicked1 ? "home1__slideshow--slider-bullet slider-bullet-active" : "home1__slideshow--slider-bullet"} ></button>
                    <button onClick={handleClick2} className={clicked2 ? "home1__slideshow--slider-bullet slider-bullet-active" : "home1__slideshow--slider-bullet"} ></button>
                    <button onClick={handleClick3} className={clicked3 ? "home1__slideshow--slider-bullet slider-bullet-active" : "home1__slideshow--slider-bullet"}></button>
                </div>


                <div className="home1__hero flex-row">
                    <div className="home1__hero__text flex-col">
                        <h1 className={isLight ? "" : "home1-h1"}>The moon is made of pancakes.</h1>
                        <p className={isLight ? "home-1-p-light" : "home-1-p-light-DM"}>
                            Trade, earn, and win crypto on the most popular decentralized
                            platform in the galaxy.
                        </p>
                        <div className="flex-row">
                            <button className={isLight ? "home-1-btn-light" : "home-1-btn-light-DM"}>Connect Wallet</button>
                            <button>Trade Now</button>
                        </div>
                    </div>

                    <div className="home1__hero__img flex">
                        <img src="/assets/header/astronaut-bunny.webp" alt="" />
                        <img src="/assets/header/star-l@2x.webp" alt="" />
                        <img src="/assets/header/star-r@2x.webp" alt="" />
                        <img src="/assets/header/star-top-r@2x.webp" alt="" />
                    </div>
                </div>

                <div className="home1__background">
                    <img
                        src={isLight ? "/assets/header/background.svg" : "/assets/header/background-DM.svg"}
                        alt=""
                        className="home-1-hd-bg"
                    />
                </div>

                <div className={isLight ? "home1__background--1" : "home1__background--2"}></div>
            </div>
        </section>
    );
};

export default Home1;
