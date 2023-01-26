import React from "react";

const Navbar = () => {
  return (
    <nav class="header__navbar flex-row">
      <div class="header__navbar__left flex-row">
        <a href="#">
          <div class="header__navbar__left-logo">
            <a href="home.html"
            ><img
                href="#"
                src="/assets/dark-mode/PancakeSwap Logos/Full Logo/color-black.svg"
                alt="rabbit-icon"
                class="header-rabbit-icon"
                width="160"
                height="40"
              />
            </a>
          </div>
        </a>
        <ul class="header__navbar__left-links flex-row">
          <li class="header__navbar__left-links--menu">
            <a href="swap.html">Trade</a>
            <ul class="header__navbar__left-links--submenu">
              <li>
                <a href="swap.html">Swap</a>
              </li>
              <li>
                <a href="limit.html">Limit</a>
              </li>
              <li>
                <a href="liquidity.html">Liquidity</a>
              </li>
              <li class="flex-row">
                <a href="perpetual.html">Perpetual</a>
                <a href="home.html"
                ><img src="/assets/header/New-Window.svg" alt=""
                  /></a>
              </li>
              <li class="flex-row">
                <a href="bridge.html">Bridge</a>
                <a href="#"
                ><img src="/assets/header/New-Window.svg" alt=""
                  /></a>
              </li>
            </ul>
          </li>

          <li class="header__navbar__left-links--menu">
            <a href="farms.html">Earn</a>
            <ul class="header__navbar__left-links--submenu">
              <li>
                <a href="farms.html">Farms</a>
              </li>
              <li>
                <a href="pools.html">Pools</a>
              </li>
            </ul>
          </li>

          <li class="header__navbar__left-links--menu">
            <a href="#">Win</a>
            <ul class="header__navbar__left-links--submenu">
              <li>
                <a href="competition.html">Trading Competition</a>
              </li>
              <li>
                <a href="#">Prediction (BETA)</a>
              </li>
              <li>
                <a href="lottery.html">Lottery</a>
              </li>
              <li>
                <a href="pottery.html">Pottery (BETA)</a>
              </li>
            </ul>
          </li>

          <li class="header__navbar__left-links--menu">
            <a href="overview.html">NFT</a>
            <ul class="header__navbar__left-links--submenu">
              <li>
                <a href="overview.html">Overview</a>
              </li>
              <li>
                <a href="collections.html">Collections</a>
              </li>
              <li>
                <a href="#">Activity</a>
              </li>
            </ul>
          </li>

          <li class="header__navbar__left-links--menu">
            <a href="#"><img src="/assets/header/Dots.svg" alt="" /></a>
            <ul class="header__navbar__left-links--submenu">
              <li>
                <a href="ifo.html">Info</a>
              </li>
              <li>
                <a href="ifo.html">IFO</a>
              </li>
              <li>
                <a href="#">Voting</a>
              </li>
              <li>
                <a href="#" class="leaderboard">Leaderboard</a>
              </li>
              <li class="flex-row">
                <a href="https://medium.com/pancakeswap">Blog</a>
                <a href="#"
                ><img src="/assets/header/New-Window.svg" alt=""
                  /></a>
              </li>
              <li class="flex-row">
                <a href="https://docs.pancakeswap.finance/">Docs</a>
                <a href="#"
                ><img src="/assets/header/New-Window.svg" alt=""
                  /></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="header__navbar__right flex-row">
        <div class="header__navbar__right-price flex-row">
          <img src="/assets/header/Price-Logo.svg" alt="" />
          <a href="#">$4.339</a>
        </div>
        <div class="header__navbar__right-language">
          <img src="/assets/header/Language.svg" alt="" />
          <ul class="header__navbar__right-language--submenu">
            <ul class="flex-col">
              <li><a href="#">العربية</a></li>
              <li><a href="#">বাংলা</a></li>
              <li><a href="#">English</a></li>
              <li><a href="#">Deutsch</a></li>
              <li><a href="#">Ελληνικά</a></li>
              <li><a href="#">Español</a></li>
              <li><a href="#">Suomalainen</a></li>
              <li><a href="#">Filipino</a></li>
              <li><a href="#">Français</a></li>
              <li><a href="#">हिंदी</a></li>
              <li><a href="#">Magyar</a></li>
              <li><a href="#">Bahasa Indonesia</a></li>
              <li><a href="#">Italiano</a></li>
              <li><a href="#">日本語</a></li>
              <li><a href="#">한국어</a></li>
              <li><a href="#">Nederlands</a></li>
              <li><a href="#">Polski</a></li>
              <li><a href="#">Português (Brazil)</a></li>
              <li><a href="#">Português</a></li>
              <li><a href="#">Română</a></li>
              <li><a href="#">Русский</a></li>
              <li><a href="#">Svenska</a></li>
              <li><a href="#">தமிழ்</a></li>
              <li><a href="#">Українська</a></li>
              <li><a href="#">Tiếng Việt</a></li>
              <li><a href="#">简体中文</a></li>
              <li><a href="#">繁體中文</a></li>
            </ul>
          </ul>
        </div>
        <div class="header__navbar__right-settings">
          <img src="/assets/header/Settings.svg" alt="" />
        </div>
        <div class="header__navbar__right-chain">
          <button class="flex-row header-btn-link">
            <img src="/assets/header/Binance.png" alt="" class="bnb" />
            <a class="header-link-bnb">BNB Smart Chain</a>
            <img src="/assets/header/Down-Arrow.svg" alt="" class="arrow" />
          </button>
          <ul class="header__navbar__right-chain--submenu">
            <li>
              <a>Select a Network</a>
            </li>
            <li class="flex-row">
              <a href="#"><img src="/assets/header/Binance.png" alt="" /></a>
              <a href="#">BNB Smart Chain</a>
            </li>
            <li class="flex-row">
              <a href="#"><img src="/assets/header/Ethereum.png" alt="" /></a>
              <a href="#">Ethereum</a>
            </li>
          </ul>
        </div>
        <div class="header__navbar__right-connect flex-row">
          <button class="header-btn-connect">Connect Wallet</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;