import React, { useRef, useState, useContext } from "react";

import { ThemeContext } from "./context/light-ctx";

import { TopNavbar } from "./TopNavbar";
import OverviewCardsSec from "./OverviewCardsSec";
import OverviewCardsFirst from "./OverviewCardsFirst";
import Footer from "./Footer";

const Overview = () => {
  const { isLight } = useContext(ThemeContext);
  const [inputTop, setInputTop] = useState("");
  const inputTopRef = useRef();

  const onSubmitHandlerTop = (event) => {
    event.preventDefault();
    const enteredAdress = inputTopRef.current.value;
    // setInputTop(enteredAdress);
  };

  const onChangeHandlerInput = (event) => {
    event.preventDefault();
    const enteredAddress = event.target.value;
    console.log(event.target.value);
    setInputTop(enteredAddress);
  };
  const arrayBanners = [
    {
      title: "MoonPets",
      avatar:
        "https://static-nft.pancakeswap.com/mainnet/0xE32aE22Ec60E21980247B4bDAA16E9AEa265F919/avatar.png",
      img: "https://pancakeswap.finance/_next/image?url=https%3A%2F%2Fstatic-nft.pancakeswap.com%2Fmainnet%2F0xE32aE22Ec60E21980247B4bDAA16E9AEa265F919%2Fbanner-sm.png&w=750&q=75",
      num: "13.3663",
    },
    {
      title: "Goodfellas Binions",
      avatar:
        "https://static-nft.pancakeswap.com/mainnet/0x59b39a2092cda9C590B1576EE5AA204a487e46e6/avatar.png",
      img: "https://pancakeswap.finance/_next/image?url=https%3A%2F%2Fstatic-nft.pancakeswap.com%2Fmainnet%2F0x59b39a2092cda9C590B1576EE5AA204a487e46e6%2Fbanner-sm.png&w=750&q=75",
      num: "46.5971",
    },
    {
      title: "Planet ZUUD: Tiger Warriors",
      avatar:
        "https://static-nft.pancakeswap.com/mainnet/0xa61da6E5B8F61285d46C2ED65eBE0E7c2FA27044/avatar.png",
      img: "https://pancakeswap.finance/_next/image?url=https%3A%2F%2Fstatic-nft.pancakeswap.com%2Fmainnet%2F0xa61da6E5B8F61285d46C2ED65eBE0E7c2FA27044%2Fbanner-sm.png&w=750&q=75",
      num: "40.4905",
    },
    {
      title: "Neural Pepe",
      avatar:
        "https://static-nft.pancakeswap.com/mainnet/0x012f90E777bdb2B4CA132f0f6EB9e7959075E9b2/avatar.png",
      img: "https://pancakeswap.finance/_next/image?url=https%3A%2F%2Fstatic-nft.pancakeswap.com%2Fmainnet%2F0x012f90E777bdb2B4CA132f0f6EB9e7959075E9b2%2Fbanner-sm.png&w=750&q=75",
      num: "5.9524",
    },
    {
      title: "Trippy Trunkz Ivory Club",
      avatar:
        "https://static-nft.pancakeswap.com/mainnet/0x94d61b937d5B03965e0ee79Ef400d566c7348B90/avatar.png",
      img: "https://pancakeswap.finance/_next/image?url=https%3A%2F%2Fstatic-nft.pancakeswap.com%2Fmainnet%2F0x94d61b937d5B03965e0ee79Ef400d566c7348B90%2Fbanner-sm.png&w=750&q=75",
      num: "17.7058",
    },
    {
      title: "3D brave tigers",
      avatar:
        "https://static-nft.pancakeswap.com/mainnet/0x6f1Dc8a50489C96B6c09bb2aEc28c4043fB1A802/avatar.png",
      img: "https://pancakeswap.finance/_next/image?url=https%3A%2F%2Fstatic-nft.pancakeswap.com%2Fmainnet%2F0x6f1Dc8a50489C96B6c09bb2aEc28c4043fB1A802%2Fbanner-sm.png&w=750&q=75",
      num: "76.17497",
    },
    {
      title: "Pancake Squad",
      avatar:
        "https://static-nft.pancakeswap.com/mainnet/0x0a8901b0E25DEb55A87524f0cC164E9644020EBA/avatar.png",
      img: "https://pancakeswap.finance/_next/image?url=https%3A%2F%2Fstatic-nft.pancakeswap.com%2Fmainnet%2F0x0a8901b0E25DEb55A87524f0cC164E9644020EBA%2Fbanner-sm.png&w=750&q=75",
      num: "153,624.5205",
    },
    {
      title: "Pancake Bunnies",
      avatar:
        "https://static-nft.pancakeswap.com/mainnet/0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07/avatar.png",
      img: "https://pancakeswap.finance/_next/image?url=https%3A%2F%2Fstatic-nft.pancakeswap.com%2Fmainnet%2F0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07%2Fbanner-sm.png&w=750&q=75",
      num: "34,358.38242",
    },
    {
      title: "Gamester Apes",
      avatar:
        "https://static-nft.pancakeswap.com/mainnet/0x4bd2a30435e6624CcDee4C60229250A84a2E4cD6/avatar.png",
      img: "https://pancakeswap.finance/_next/image?url=https%3A%2F%2Fstatic-nft.pancakeswap.com%2Fmainnet%2F0x4bd2a30435e6624CcDee4C60229250A84a2E4cD6%2Fbanner-sm.png&w=750&q=75",
      num: "2,675.98929",
    },
    {
      title: "ShitPunks",
      avatar:
        "https://static-nft.pancakeswap.com/mainnet/0x11304895f41C5A9b7fBFb0C4B011A92f1020EF96/avatar.png",
      img: "https://pancakeswap.finance/_next/image?url=https%3A%2F%2Fstatic-nft.pancakeswap.com%2Fmainnet%2F0x11304895f41C5A9b7fBFb0C4B011A92f1020EF96%2Fbanner-sm.png&w=750&q=75",
      num: "1,853.85411",
    },
    {
      title: "PixelSweeper",
      avatar:
        "https://static-nft.pancakeswap.com/mainnet/0x5F41842CFF838120271d772C6994F051d418a4aD/avatar.png",
      img: "https://pancakeswap.finance/_next/image?url=https%3A%2F%2Fstatic-nft.pancakeswap.com%2Fmainnet%2F0x5F41842CFF838120271d772C6994F051d418a4aD%2Fbanner-sm.png&w=750&q=75",
      num: "1,192.659",
    },
    {
      title: "BornBadBoys",
      avatar:
        "https://static-nft.pancakeswap.com/mainnet/0x44d85770aEa263F9463418708125Cd95e308299B/avatar.png",
      img: "https://pancakeswap.finance/_next/image?url=https%3A%2F%2Fstatic-nft.pancakeswap.com%2Fmainnet%2F0x44d85770aEa263F9463418708125Cd95e308299B%2Fbanner-sm.png&w=750&q=75",
      num: "1,179.5932",
    },
  ];

  // second type of arrays
  const arrayBannersSec = [
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0x44d85770aEa263F9463418708125Cd95e308299B/born-bad-boys-755-1000.png",
      headerMain: "BornBadBoys #755",
      headerTop: "BornBadBoys",
      priceNum: "($53.70)",
      coinNum: "0.2",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0x44d85770aEa263F9463418708125Cd95e308299B/born-bad-boys-7362-1000.png",
      headerMain: "BornBadBoys #7362",
      headerTop: "BornBadBoys",
      priceNum: "($53.70)",
      coinNum: "0.2",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0x44d85770aEa263F9463418708125Cd95e308299B/born-bad-boys-6635-1000.png",
      headerMain: "BornBadBoys #755",
      headerTop: "BornBadBoys",
      priceNum: "($53.70)",
      coinNum: "0.2",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0x44d85770aEa263F9463418708125Cd95e308299B/born-bad-boys-6635-1000.png",
      headerMain: "Lucky",
      headerTop: "Pancake Bunnies",
      priceNum: "($24.05)",
      coinNum: "0.09",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0x0a8901b0E25DEb55A87524f0cC164E9644020EBA/pancake-squad-5395-1000.png",
      headerMain: "Pancake Squad #5395",
      headerTop: "Pancake Squad",
      priceNum: "($4,014.58)",
      coinNum: "15",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0x3E8bb868753357be4492958A8f63dfa29432996D/huble-hi-fiver.gif",
      headerMain: "Huble HiFiver",
      headerTop: "Into the HIFI-Verse",
      priceNum: "($230.29)",
      coinNum: "0.86",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0x0a8901b0E25DEb55A87524f0cC164E9644020EBA/pancake-squad-235-1000.png",
      headerMain: "Pancake Squad #235",
      headerTop: "Pancake Squad",
      priceNum: "($1,901.26)",
      coinNum: "7.1",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0xA46A4920B40f134420b472B16b3328d74D7B6B70/5467-1000.png",
      headerMain: "#5467",
      headerTop: "The Bull Society",
      priceNum: "($80.35)",
      coinNum: "0.3",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0x98F606A4cdDE68b9f68732D21fb9bA8B5510eE48/little-ghosts-5184.gif",
      headerMain: "LittleGhosts #5184",
      headerTop: "LittleGhosts",
      priceNum: "($803.74)",
      coinNum: "3",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07/sunny-1000.png",
      headerMain: "Sunny",
      headerTop: "Pancake Bunnies",
      priceNum: "($3.38)",
      coinNum: "0.0126",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0xAFc7647b584730694B9606511F11F423A0816eFf/horror-ape-club-3036-1000.png",
      headerMain: "HorrorApeClub #3036",
      headerTop: "Horror Ape Club",
      priceNum: "($536.30)",
      coinNum: "2",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0x11304895f41C5A9b7fBFb0C4B011A92f1020EF96/shit-punk-4054-1000.png",
      headerMain: "Shit Punk 4054",
      headerTop: "ShitPunks",
      priceNum: "($26.82)",
      coinNum: "0.1",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0x0a8901b0E25DEb55A87524f0cC164E9644020EBA/pancake-squad-9655-1000.png",
      headerMain: "Pancake Squad #9655",
      headerTop: "Pancake Squad",
      priceNum: "($1,931.04)",
      coinNum: "7.2",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0x0a8901b0E25DEb55A87524f0cC164E9644020EBA/pancake-squad-1977-1000.png",
      headerMain: "Pancake Squad #1977",
      headerTop: "Pancake Squad",
      priceNum: "($2,065.14)",
      coinNum: "7.7",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0x0a8901b0E25DEb55A87524f0cC164E9644020EBA/pancake-squad-3680-1000.png",
      headerMain: "Pancake Squad #3680",
      headerTop: "Pancake Squad",
      priceNum: "($2,065.08)",
      coinNum: "7.7",
    },
    {
      img: "https://static-nft.pancakeswap.com/mainnet/0xE32aE22Ec60E21980247B4bDAA16E9AEa265F919/moon-pets-1678-1000.png",
      headerMain: "MoonPets #1678",
      headerTop: "MoonPets",
      priceNum: "($80.46)",
      coinNum: "0.3",
    },
  ];

  return (
    <>
      <TopNavbar />{" "}
      <div className={isLight ? "sub_nav" : "sub_nav lottery-background3-DM lottery-a-DM lottery-hover-DM"}>
      <ul>
          <li>
            <a href="#" className="selected_pottery">
              Overview
            </a>
          </li>
          <li>
            <a href="collections.html">Collections</a>
          </li>
          <li>
            <a href="#">Activity</a>
          </li>
        </ul>
      </div>
      <div
        className={
          isLight
            ? "overview-nft-market"
            : "overview-nft-market overview-nft-market-dark"
        }
      >
        <div className="overview-nft-market-left">
          <h3 className="overview-nft-market-left-h3">NFT Marketplace</h3>
          <p
            className={
              isLight
                ? "overview-nft-market-left-p"
                : "overview-nft-market-left-p overview-nft-market-left-p-dark"
            }
          >
            Buy and Sell NFTs on BNB Smart Chain
          </p>
        </div>
        <form
          className="overview-nft-market-right"
          onSubmit={onSubmitHandlerTop}
        >
          <input
            type="search"
            name="overview-nft-market-right-search"
            id="overview-nft-market-right-search"
            className={
              isLight
                ? "overview-nft-market-right-search"
                : "overview-nft-market-right-search overview-nft-market-right-search-dark"
            }
            placeholder="Search address"
            autoComplete="off"
            ref={inputTopRef}
            onChange={onChangeHandlerInput}
          />
        </form>
      </div>
      {/* 1st row */}
      <div
        className={
          isLight
            ? "overview-new-collections"
            : "overview-new-collections overview-new-collections-dark"
        }
      >
        <div className="overview-new-collections-row1">
          <h2
            className={
              isLight
                ? "overview-new-collections-row1-h3"
                : "overview-new-collections-row1-h3 overview-new-collections-row1-h3-dark"
            }
          >
            Newest Collections
          </h2>
          <button className="overview-new-collections-row1-btn">
            View All
            <img
              src={require("./assets/overview/right-arrow-svg.svg").default}
              alt="btn-arrow"
              className="overview-new-collections-row1-btn-arrow"
            />
          </button>
        </div>
        <div className="overview-new-collections-row-main">
          <OverviewCardsFirst
            arrayBanners={arrayBanners}
            keyWord={inputTop}
            isLight={isLight}
          />
        </div>
      </div>
      {/* 2nd row */}
      <div
        className={
          isLight
            ? "overview-new-collections"
            : "overview-new-collections overview-new-collections-dark"
        }
      >
        <div className="overview-new-collections-row1">
          <h2
            className={
              isLight
                ? "overview-new-collections-row1-h3"
                : "overview-new-collections-row1-h3 overview-new-collections-row1-h3-dark"
            }
          >
            Hot Collections
          </h2>
          <button className="overview-new-collections-row1-btn">
            View All
            <img
              src={require("./assets/overview/right-arrow-svg.svg").default}
              alt="btn-arrow"
              className="overview-new-collections-row1-btn-arrow"
            />
          </button>
        </div>
        <div className="overview-new-collections-row-main"></div>
      </div>
      <div
        className={
          isLight
            ? "overview-newest-arrivals"
            : "overview-newest-arrivals overview-new-collections-dark"
        }
      >
        <div className="overview-newest-arrivals-row1">
          <h2 className="overview-newest-arrivals-row1-h3 newest-arrival">
            Newest Arrivals
          </h2>
          <button className="overview-newest-arrivals-row1-btn">
            View All
            <img
              src={require("./assets/overview/right-arrow-svg.svg").default}
              alt="btn-arrow"
              className="overview-newest-arrivals-row1-btn-arrow"
            />
          </button>
        </div>
        <div className="overview-newest-arrivals-main">
          <OverviewCardsSec arraySec={arrayBannersSec} keyWord={inputTop} />
          {/* */}
        </div>
      </div>
      {/* FAQ */}
      <div
        className={isLight ? "overview-faq" : "overview-faq overview-faq-dark"}
      >
        <div
          className={
            isLight ? "overview-faq-card" : "overview-faq-card border-dark"
          }
        >
          <div
            className={
              isLight
                ? "overview-faq-card-h3"
                : "overview-faq-card-h3 overview-faq-dark"
            }
          >
            <h3>FAQs</h3>
          </div>
          <details
            className={
              isLight
                ? "overview-faq-card-details"
                : "overview-faq-card-details bg-faq-dark"
            }
          >
            <summary>
              I sold an NFT, where’s my BNB?
              <div>
                Details
                <img
                  src={require("./assets/pottery/arrow-down-faq.svg").default}
                  alt="arrow-down-faq"
                  className="arrow-down-faq"
                />
              </div>
            </summary>
            <div
              className={
                isLight
                  ? "overview-faq-card-details"
                  : "overview-faq-card-details bg-faq-dark"
              }
            >
              Trades are settled in WBNB, which is a wrapped version of BNB used
              on BNB Smart Chain. That means that when you sell an item, WBNB is
              sent to your wallet instead of BNB. You can instantly swap your
              WBNB for BNB with no trading fees on PancakeSwap.
            </div>
          </details>
          <details
            className={
              isLight
                ? "overview-faq-card-details"
                : "overview-faq-card-details bg-faq-dark"
            }
          >
            <summary>
              How can I list my NFT collection on the Market?
              <div>
                Details
                <img
                  src={require("./assets/pottery/arrow-down-faq.svg").default}
                  alt="arrow-down-faq"
                  className="arrow-down-faq"
                />
              </div>
            </summary>
            <div
              className={
                isLight
                  ? "overview-faq-card-details"
                  : "overview-faq-card-details bg-faq-dark"
              }
            >
              In Phase 2 of the NFT Marketplace, collections must be whitelisted
              before they may be listed. We are now accepting applications from
              NFT collection owners seeking to list their collections.
              <div>
                Please apply here
                <img
                  src={require("./assets/overview/link-square.svg").default}
                  alt="link-svg"
                  className="link-svg"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </details>
          <details
            className={
              isLight
                ? "overview-faq-card-details"
                : "overview-faq-card-details bg-faq-dark"
            }
          >
            <summary>
              What are the fees?
              <div>
                Details
                <img
                  src={require("./assets/pottery/arrow-down-faq.svg").default}
                  alt="arrow-down-faq"
                  className="arrow-down-faq"
                />
              </div>
            </summary>
            <div
              className={
                isLight
                  ? "overview-faq-card-details"
                  : "overview-faq-card-details bg-faq-dark"
              }
            >
              100% of all platform fees taken by PancakeSwap from sales are used
              to buy back and BURN CAKE tokens in our weekly CAKE burns.
              Platform fees: 2% is subtracted from NFT sales on the market.
              Subject to change.Collection fees: Additional fees may be taken by
              collection creators, once those collections are live. These will
              not contribute to the CAKE burns.
            </div>
          </details>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Overview;
