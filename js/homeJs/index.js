// dark-light mode
const modeContainer = document.querySelector(
  ".footer__section__bottom--item-1__dark-mode-container"
);
const darkMode = document.querySelector(
  ".footer__section__bottom--item-1__dark-mode-container_dark"
);
const lightMode = document.querySelector(
  ".footer__section__bottom--item-1__dark-mode-container_light"
);
const absoluteSlider = document.querySelector(".absolute-slider");
const absoluteSwitcher = document.querySelector(".absolute-switcher-img");

// home-7
const btnConnectWallet = document.querySelector(".home-7-connect-btn");

// home 6
const homeSixCt = document.querySelector(".home6");
const homeSixCt2 = document.querySelector(".home6-container");
const homeSixBtn = document.querySelector(".home6-buy-cake-btn");
const homeSixH2 = document.querySelector(".home6-h2");
const homeSixNums = document.querySelectorAll(".home6-nums");

// home 5
const homeFiveMainCt = document.querySelector(".home-5__container__main");
const homeFiveCompleteCt = document.querySelector(".home-5__container");

// home 3
const homeThreeCompCt = document.querySelector(".home-3-bg");
const homeThreeH2 = document.querySelectorAll(".home3-top-h2");
const homeThreeNums = document.querySelectorAll(".home3-nums");
const homeThreeBtn = document.querySelector(".home3-btn-exp");

// home 4
const homeFourCompCt = document.querySelector(".home4");
const homeFourMainCt = document.querySelector(".home4-container");
const homeFourH2 = document.querySelector(".home4-h2");
const homeFourBtn = document.querySelector(".home4-btn");

// home 2
const homeTwoCompCt = document.querySelector(".home-2-bg");
const homeTwoCards = document.querySelectorAll(".home-2-card-light");
const homeTwoCardsH2 = document.querySelectorAll(".home-2-card-h2");
const homeTwoH2 = document.querySelectorAll(".home-2-h2-main");

// home 1
const homeOneCompCt = document.querySelector(".home1__background--1");
const homeOneHeaderBg = document.querySelector(".home-1-hd-bg");
const homeOneTopCompCt = document.querySelector(".home1-light");
const homeOneP = document.querySelector(".home-1-p-light");
const homeOneBtn = document.querySelectorAll(".home-1-btn-light");
const homeOneImgArrow = document.querySelector(".home-1-img-light");

// header
const headerLeftLogo = document.querySelector(".header-rabbit-icon");
const headerNavbar = document.querySelector(".header__navbar");
const headerBtn = document.querySelector(".header-btn-connect");
const headerLink = document.querySelector(".header-link-bnb");
const headerBtnLink = document.querySelector(".header-btn-link");
// function
let modeState = true;
modeContainer.addEventListener("click", () => {
  if (modeState === true) {
    absoluteSwitcher.src = "assets/footer/footer_dark_mode.svg";
    headerLeftLogo.src =
      "assets/dark-mode/PancakeSwap Logos/Full Logo/color-white.svg";
    headerNavbar.style.backgroundColor = "#27262c";
    headerNavbar.style.borderBottom = "1px solid #27262c";
  } else {
    absoluteSwitcher.src = "assets/footer/footer_light_mode.svg";
    headerLeftLogo.src =
      "assets/dark-mode/PancakeSwap Logos/Full Logo/color-black.svg";
    headerNavbar.style.backgroundColor = "#fff";
    headerNavbar.style.borderBottom = "1px solid #e7e3eb";
  }

  modeState = !modeState;

  absoluteSlider.classList.toggle("absolute-slider-left");
  absoluteSlider.classList.toggle("absolute-slider-right");
  btnConnectWallet.classList.toggle("home-7-connect-btn-DM");
  homeSixCt.classList.toggle("home6-DM");
  homeSixCt2.classList.toggle("home6-DM");
  homeSixBtn.classList.toggle("home6-btn-DM");
  homeSixH2.classList.toggle("home6-h2-DM");
  homeSixNums.forEach((x) => x.classList.toggle("home6-h2-DM"));
  homeFiveMainCt.classList.toggle("home-5__container__main-DM");
  homeFiveCompleteCt.classList.toggle("home-5__container-DM");
  homeThreeCompCt.classList.toggle("home-3-bg-DM");
  homeThreeH2.forEach((x) => x.classList.toggle("home3-top-h2-DM"));
  homeThreeNums.forEach((x) => x.classList.toggle("home3-top-h2-DM"));
  homeThreeBtn.classList.toggle("home3-btn-exp-DM");
  homeFourCompCt.classList.toggle("home4-DM");
  homeFourMainCt.classList.toggle("home4-DM");
  homeFourH2.classList.toggle("home4-h2-DM");
  homeFourBtn.classList.toggle("home4-btn-DM");
  homeTwoCompCt.classList.toggle("home-2-bg-DM");
  homeTwoCards.forEach((x) => x.classList.toggle("home-2-card-light-DM"));
  homeTwoCardsH2.forEach((x) => x.classList.toggle("home-2-card-h2-DM"));
  homeTwoH2.forEach((x) => x.classList.toggle("home-2-card-h2-DM"));
  homeOneCompCt.classList.toggle("home1__background--1-DM");
  homeOneHeaderBg.classList.toggle("home-1-hd-bg-DM");
  homeOneTopCompCt.classList.toggle("home1-light-DM");
  homeOneP.classList.toggle("home-1-p-light-DM");
  homeOneBtn.forEach((x) => x.classList.toggle("home-1-btn-light-DM"));
  homeOneImgArrow.classList.toggle("home-1-img-light-DM");
  headerBtn.classList.toggle("header-btn-connect-DM");
  headerLink.classList.toggle("header-link-bnb-DM");
  headerBtnLink.classList.toggle("header-link-bnb-DM");
});
