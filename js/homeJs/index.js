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
let modeState = true;
modeContainer.addEventListener("click", () => {
  if (modeState === true) {
    absoluteSwitcher.src = "assets/footer/footer_dark_mode.svg";
  } else {
    absoluteSwitcher.src = "assets/footer/footer_light_mode.svg";
  }
  console.log("clicked");
  modeState = !modeState;

  absoluteSlider.classList.toggle("absolute-slider-left");
  absoluteSlider.classList.toggle("absolute-slider-right");
});
