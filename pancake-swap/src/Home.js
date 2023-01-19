import React from "react";

const Home = () => {
    return (
<>
  {/* Header: Navbar + Home 1 (by Gilxhon) */}
  <header className="header flex-col header-dark">
    <nav className="header__navbar flex-row">
      <div className="header__navbar__left flex-row">
        <a href=""></a>
        <div className="header__navbar__left-logo">
          <a href="">
            {/* <svg
          viewBox="0 0 1281 199"
          class="sc-8a800401-0 fGhPpn desktop-icon"
          color="text"
          width="160px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M247.013 153.096c-2.979 0-5.085-.617-6.318-1.849-1.13-1.233-1.695-3.185-1.695-5.856v-89.22c0-2.672.616-4.624 1.849-5.856 1.233-1.336 3.287-2.004 6.164-2.004h37.753c14.382 0 24.963 3.031 31.744 9.092 6.78 6.061 10.17 15.101 10.17 27.12 0 11.917-3.39 20.906-10.17 26.967-6.678 5.959-17.259 8.938-31.744 8.938h-14.639v24.963c0 2.671-.616 4.623-1.849 5.856-1.233 1.232-3.339 1.849-6.318 1.849h-14.947zm35.288-55.012c4.212 0 7.448-1.13 9.708-3.39 2.362-2.26 3.544-5.65 3.544-10.17 0-4.623-1.182-8.065-3.544-10.325-2.26-2.26-5.496-3.39-9.708-3.39h-12.174v27.275h12.174zM363.071 155.407c-9.656 0-17.412-3.082-23.268-9.245-5.753-6.267-8.629-15.05-8.629-26.351 0-8.629 1.952-16.18 5.855-22.652 4.007-6.472 9.606-11.454 16.797-14.947 7.294-3.595 15.666-5.393 25.117-5.393 7.808 0 14.691.873 20.649 2.62 6.061 1.643 11.608 4.057 16.642 7.242v61.638c0 1.952-.359 3.236-1.079 3.852-.719.617-2.157.925-4.314.925h-15.718c-1.13 0-2.003-.154-2.619-.463-.617-.41-1.13-1.027-1.541-1.849l-2.004-4.622c-2.979 3.184-6.574 5.496-10.786 6.934-4.109 1.541-9.143 2.311-15.102 2.311zm11.558-20.957c4.006 0 7.139-.976 9.399-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.951-.925-4.417-1.387-7.396-1.387-5.445 0-9.811 1.9-13.098 5.701-3.185 3.801-4.777 9.143-4.777 16.026 0 9.965 4.16 14.947 12.482 14.947zM437.679 153.096c-2.98 0-5.086-.617-6.318-1.849-1.233-1.233-1.849-3.185-1.849-5.856V83.907c0-1.849.308-3.082.924-3.698.719-.72 2.157-1.079 4.315-1.079h15.872c1.232 0 2.157.206 2.773.617.719.308 1.13.924 1.233 1.849l.77 4.623c2.877-2.877 6.627-5.137 11.249-6.78 4.726-1.747 9.965-2.62 15.718-2.62 8.321 0 15.05 2.363 20.186 7.088 5.137 4.623 7.705 11.506 7.705 20.649v40.835c0 2.671-.616 4.623-1.849 5.856-1.13 1.232-3.185 1.849-6.164 1.849h-14.947c-2.979 0-5.136-.617-6.472-1.849-1.233-1.233-1.849-3.185-1.849-5.856v-38.832c0-3.082-.668-5.29-2.003-6.626-1.336-1.335-3.442-2.003-6.318-2.003-3.082 0-5.548.822-7.397 2.465-1.746 1.644-2.619 3.904-2.619 6.781v38.215c0 2.671-.617 4.623-1.849 5.856-1.13 1.232-3.185 1.849-6.164 1.849h-14.947zM564.725 155.407c-14.382 0-25.477-3.339-33.285-10.016-7.807-6.677-11.711-16.385-11.711-29.124 0-7.807 1.798-14.69 5.393-20.648 3.596-5.959 8.784-10.582 15.564-13.869 6.883-3.287 14.999-4.931 24.347-4.931 7.088 0 13.047.668 17.875 2.003 4.931 1.336 9.297 3.39 13.098 6.164 1.13.72 1.695 1.644 1.695 2.774 0 .822-.411 1.9-1.233 3.236l-6.318 10.94c-.719 1.439-1.592 2.158-2.619 2.158-.617 0-1.593-.411-2.928-1.233-2.774-1.746-5.393-3.03-7.859-3.852-2.363-.822-5.342-1.233-8.937-1.233-5.137 0-9.297 1.644-12.482 4.931-3.082 3.287-4.623 7.807-4.623 13.56 0 5.856 1.592 10.376 4.777 13.56 3.185 3.082 7.551 4.623 13.098 4.623 3.287 0 6.267-.462 8.938-1.387 2.671-.924 5.393-2.208 8.167-3.852 1.438-.822 2.465-1.233 3.082-1.233.924 0 1.746.719 2.465 2.158l6.934 11.865c.514 1.027.771 1.849.771 2.465 0 .925-.617 1.798-1.849 2.62-4.315 2.774-9.041 4.828-14.177 6.164-5.034 1.438-11.095 2.157-18.183 2.157zM638.004 155.407c-9.657 0-17.413-3.082-23.268-9.245-5.753-6.267-8.63-15.05-8.63-26.351 0-8.629 1.952-16.18 5.856-22.652 4.006-6.472 9.605-11.454 16.796-14.947 7.294-3.595 15.667-5.393 25.118-5.393 7.807 0 14.69.873 20.648 2.62 6.061 1.643 11.609 4.057 16.643 7.242v61.638c0 1.952-.36 3.236-1.079 3.852-.719.617-2.157.925-4.315.925h-15.717c-1.13 0-2.004-.154-2.62-.463-.616-.41-1.13-1.027-1.541-1.849l-2.003-4.622c-2.979 3.184-6.575 5.496-10.787 6.934-4.109 1.541-9.143 2.311-15.101 2.311zm11.557-20.957c4.007 0 7.14-.976 9.4-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.952-.925-4.417-1.387-7.397-1.387-5.444 0-9.81 1.9-13.098 5.701-3.184 3.801-4.777 9.143-4.777 16.026 0 9.965 4.161 14.947 12.482 14.947zM787.963 147.24c.719.822 1.079 1.747 1.079 2.774 0 .924-.308 1.695-.925 2.311-.616.514-1.438.771-2.465.771h-23.885c-1.438 0-2.517-.103-3.236-.308-.616-.309-1.284-.874-2.003-1.695l-20.957-28.508v22.806c0 2.671-.616 4.623-1.849 5.856-1.233 1.232-3.339 1.849-6.318 1.849h-14.947c-2.979 0-5.085-.617-6.318-1.849-1.13-1.233-1.695-3.185-1.695-5.856v-89.22c0-2.672.616-4.624 1.849-5.856 1.233-1.336 3.288-2.004 6.164-2.004h14.947c2.979 0 5.085.668 6.318 2.004 1.233 1.232 1.849 3.184 1.849 5.855v51.622l20.341-26.504c.616-.822 1.284-1.387 2.003-1.695.719-.309 1.798-.463 3.236-.463h23.885c1.027 0 1.797.309 2.311.925.616.514.925 1.233.925 2.157 0 1.028-.36 1.952-1.079 2.774l-26.35 30.203 27.12 32.051zM837.998 155.407c-8.629 0-16.334-1.438-23.114-4.314-6.677-2.877-11.968-7.192-15.872-12.944-3.903-5.753-5.855-12.79-5.855-21.111 0-13.047 3.698-23.012 11.095-29.895 7.396-6.883 18.029-10.324 31.897-10.324 13.561 0 23.834 3.39 30.819 10.17 7.089 6.678 10.633 15.975 10.633 27.891 0 5.137-2.26 7.705-6.78 7.705h-48.386c0 4.417 1.643 7.808 4.931 10.17 3.39 2.363 8.475 3.544 15.255 3.544 4.212 0 7.705-.359 10.479-1.078 2.876-.822 5.753-2.003 8.629-3.544 1.233-.514 2.055-.771 2.465-.771.925 0 1.695.617 2.312 1.849l5.239 9.862c.514 1.028.771 1.798.771 2.312 0 .924-.617 1.798-1.85 2.619-4.211 2.774-8.988 4.777-14.33 6.01-5.342 1.233-11.455 1.849-18.338 1.849zm11.866-48.077c0-3.904-1.13-6.935-3.39-9.092-2.26-2.157-5.651-3.236-10.171-3.236s-7.961 1.13-10.324 3.39c-2.363 2.158-3.544 5.137-3.544 8.938h27.429zM930.417 155.407c-8.63 0-16.797-.873-24.501-2.619-7.705-1.85-13.92-4.418-18.646-7.705-1.746-1.13-2.619-2.312-2.619-3.544 0-.822.308-1.695.924-2.62l7.551-12.019c.822-1.233 1.643-1.849 2.465-1.849.514 0 1.387.359 2.62 1.078 3.801 2.158 8.115 3.904 12.944 5.239 4.828 1.336 9.605 2.004 14.331 2.004 4.828 0 8.372-.719 10.632-2.158 2.363-1.438 3.544-3.749 3.544-6.934 0-3.082-1.284-5.496-3.852-7.242-2.466-1.747-7.14-3.955-14.023-6.626-10.375-3.904-18.491-8.27-24.347-13.099-5.753-4.93-8.629-11.608-8.629-20.032 0-10.17 3.647-17.926 10.941-23.268C907.046 48.67 916.753 46 928.876 46c8.423 0 15.615.77 21.573 2.311 6.061 1.439 11.197 3.699 15.409 6.78 1.747 1.336 2.62 2.569 2.62 3.699 0 .719-.308 1.54-.925 2.465l-7.55 12.02c-.925 1.232-1.747 1.849-2.466 1.849-.513 0-1.387-.36-2.619-1.079-5.959-3.904-13.047-5.855-21.265-5.855-4.418 0-7.808.719-10.171 2.157-2.362 1.438-3.544 3.801-3.544 7.088 0 2.26.617 4.11 1.849 5.548 1.233 1.438 2.877 2.722 4.931 3.852 2.158 1.027 5.445 2.363 9.862 4.007l2.928 1.078c7.602 2.98 13.561 5.856 17.875 8.63 4.418 2.67 7.756 6.009 10.016 10.016 2.26 3.903 3.39 8.834 3.39 14.793 0 9.143-3.441 16.437-10.324 21.881-6.78 5.445-16.796 8.167-30.048 8.167zM1003.53 153.096c-1.54 0-2.72-.257-3.544-.771-.822-.513-1.439-1.541-1.85-3.082l-19.878-66.569c-.205-.616-.308-1.078-.308-1.386 0-1.438 1.027-2.158 3.082-2.158h20.338c1.34 0 2.31.257 2.93.77.62.412 1.03 1.13 1.23 2.158l8.32 34.98 10.48-28.2c.52-1.232 1.03-2.054 1.54-2.465.62-.514 1.65-.77 3.09-.77h9.7c1.44 0 2.42.256 2.93.77.62.41 1.18 1.233 1.7 2.465l10.32 28.2 8.48-34.98c.3-1.027.71-1.746 1.23-2.157.51-.514 1.44-.77 2.77-.77h20.5c2.05 0 3.08.719 3.08 2.157 0 .308-.1.77-.31 1.386l-20.03 66.569c-.41 1.541-1.03 2.569-1.85 3.082-.72.514-1.85.771-3.39.771h-15.1c-1.44 0-2.52-.257-3.24-.771-.72-.616-1.33-1.643-1.85-3.082l-10.17-27.891-10.17 27.891c-.41 1.439-1.03 2.466-1.85 3.082-.72.514-1.79.771-3.23.771h-14.95zM1128.73 155.407c-9.66 0-17.41-3.082-23.27-9.245-5.75-6.267-8.63-15.05-8.63-26.351 0-8.629 1.95-16.18 5.86-22.652 4-6.472 9.6-11.454 16.79-14.947 7.3-3.595 15.67-5.393 25.12-5.393 7.81 0 14.69.873 20.65 2.62 6.06 1.643 11.61 4.057 16.64 7.242v61.638c0 1.952-.36 3.236-1.08 3.852-.72.617-2.15.925-4.31.925h-15.72c-1.13 0-2-.154-2.62-.463-.62-.41-1.13-1.027-1.54-1.849l-2-4.622c-2.98 3.184-6.58 5.496-10.79 6.934-4.11 1.541-9.14 2.311-15.1 2.311zm11.56-20.957c4 0 7.14-.976 9.4-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.96-.925-4.42-1.387-7.4-1.387-5.45 0-9.81 1.9-13.1 5.701-3.18 3.801-4.78 9.143-4.78 16.026 0 9.965 4.17 14.947 12.49 14.947zM1203.18 184.223c-2.98 0-5.08-.616-6.32-1.849-1.13-1.233-1.69-3.185-1.69-5.856V88.222c4.62-3.287 10.43-6.01 17.41-8.167 6.99-2.157 14.28-3.236 21.88-3.236 31.03 0 46.54 13.15 46.54 39.448 0 11.917-3.29 21.419-9.86 28.508-6.58 7.088-15.87 10.632-27.89 10.632-3.39 0-6.68-.411-9.87-1.233-3.08-.821-5.65-1.951-7.7-3.39v25.734c0 2.671-.62 4.623-1.85 5.856-1.23 1.233-3.34 1.849-6.32 1.849h-14.33zm33.44-49.619c4.42 0 7.71-1.643 9.86-4.931 2.26-3.39 3.39-7.91 3.39-13.56 0-6.677-1.33-11.352-4-14.023-2.57-2.773-6.58-4.16-12.02-4.16-3.5 0-6.27.462-8.32 1.387v24.501c0 3.493.97 6.164 2.92 8.013 1.96 1.849 4.68 2.773 8.17 2.773z"
            fill="#000000"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M97.556 198.607c-29.192-.022-52.708-7.027-69.138-19.609-16.627-12.733-25.448-30.803-25.448-51.25 0-19.701 8.801-33.907 18.76-43.51 7.805-7.525 16.417-12.344 22.414-15.117-1.356-4.162-3.048-9.61-4.562-15.238-2.025-7.53-4.012-16.366-4.012-22.84 0-7.663 1.67-15.36 6.175-21.34C46.505 3.385 53.671 0 62.291 0c6.737 0 12.457 2.499 16.934 6.81 4.28 4.12 7.13 9.593 9.097 15.298 3.456 10.024 4.802 22.618 5.179 35.187h8.257c.378-12.569 1.723-25.163 5.18-35.187 1.967-5.705 4.815-11.177 9.096-15.298C120.512 2.5 126.231 0 132.968 0c8.621 0 15.786 3.385 20.546 9.703 4.505 5.98 6.176 13.677 6.176 21.34 0 6.474-1.988 15.31-4.013 22.84-1.514 5.628-3.206 11.076-4.562 15.238 5.997 2.773 14.61 7.592 22.414 15.118 9.959 9.602 18.76 23.808 18.76 43.509 0 20.447-8.82 38.517-25.448 51.25-16.43 12.582-39.946 19.587-69.138 19.609h-.147z"
            fill="#633001"
          ></path>
          <path
            d="M62.29 7.288c-12.625 0-18.437 9.516-18.437 22.675 0 10.46 6.753 31.408 9.523 39.563.624 1.835-.356 3.844-2.142 4.555-10.119 4.031-39.981 18.789-39.981 52.588 0 35.603 30.347 62.448 86.31 62.491l.066-.001.067.001c55.962-.043 86.309-26.888 86.309-62.491 0-33.799-29.862-48.557-39.981-52.588-1.786-.71-2.765-2.72-2.142-4.555 2.771-8.154 9.524-29.103 9.524-39.563 0-13.16-5.812-22.675-18.438-22.675-18.174 0-22.705 26.007-23.028 53.92-.021 1.863-1.513 3.375-3.357 3.375H88.676c-1.845 0-3.336-1.512-3.358-3.375-.323-27.913-4.853-53.92-23.028-53.92z"
            fill="#D1884F"
          ></path>
          <path
            d="M97.696 177.755c-41.118 0-86.372-22.235-86.443-51.018v.134c0 35.632 30.395 62.491 86.443 62.491s86.443-26.859 86.443-62.491v-.134c-.071 28.783-45.325 51.018-86.443 51.018z"
            fill="#FEDC90"
          ></path>
          <path
            class="eye"
            d="M74.85 117.896c0 9.718-4.546 14.779-10.154 14.779s-10.154-5.061-10.154-14.779 4.546-14.779 10.154-14.779 10.154 5.061 10.154 14.779zM140.851 117.896c0 9.718-4.546 14.779-10.154 14.779s-10.154-5.061-10.154-14.779 4.546-14.779 10.154-14.779 10.154 5.061 10.154 14.779z"
            fill="#633001"
          ></path>
        </svg> */}
          </a>
          <a href="home.html">
            <img
              href=""
              src="assets/dark-mode/PancakeSwap Logos/Full Logo/color-black.svg"
              alt="rabbit-icon"
              className="header-rabbit-icon"
              width={160}
              height={40}
            />
          </a>
        </div>
        <ul className="header__navbar__left-links flex-row">
          <li className="header__navbar__left-links--menu">
            <a href="swap.html">Trade</a>
            <ul className="header__navbar__left-links--submenu">
              <li>
                <a href="swap.html">Swap</a>
              </li>
              <li>
                <a href="limit.html">Limit</a>
              </li>
              <li>
                <a href="liquidity.html">Liquidity</a>
              </li>
              <li className="flex-row">
                <a href="perpetual.html">Perpetual</a>
                <a href="home.html">
                  <img src="./assets/header/New-Window.svg" alt="" />
                </a>
              </li>
              <li className="flex-row">
                <a href="bridge.html">Bridge</a>
                <a href="">
                  <img src="./assets/header/New-Window.svg" alt="" />
                </a>
              </li>
            </ul>
          </li>
          <li className="header__navbar__left-links--menu">
            <a href="farms.html">Earn</a>
            <ul className="header__navbar__left-links--submenu">
              <li>
                <a href="farms.html">Farms</a>
              </li>
              <li>
                <a href="pools.html">Pools</a>
              </li>
            </ul>
          </li>
          <li className="header__navbar__left-links--menu">
            <a href="">Win</a>
            <ul className="header__navbar__left-links--submenu">
              <li>
                <a href="competition.html">Trading Competition</a>
              </li>
              <li>
                <a href="">Prediction (BETA)</a>
              </li>
              <li>
                <a href="lottery.html">Lottery</a>
              </li>
              <li>
                <a href="pottery.html">Pottery (BETA)</a>
              </li>
            </ul>
          </li>
          <li className="header__navbar__left-links--menu">
            <a href="overview.html">NFT</a>
            <ul className="header__navbar__left-links--submenu">
              <li>
                <a href="overview.html">Overview</a>
              </li>
              <li>
                <a href="collections.html">Collections</a>
              </li>
              <li>
                <a href="">Activity</a>
              </li>
            </ul>
          </li>
          <li className="header__navbar__left-links--menu">
            <a href="">
              <img src="./assets/header/Dots.svg" alt="" />
            </a>
            <ul className="header__navbar__left-links--submenu">
              <li>
                <a href="ifo.html">Info</a>
              </li>
              <li>
                <a href="ifo.html">IFO</a>
              </li>
              <li>
                <a href="">Voting</a>
              </li>
              <li>
                <a href="" className="leaderboard">
                  Leaderboard
                </a>
              </li>
              <li className="flex-row">
                <a href="https://medium.com/pancakeswap">Blog</a>
                <a href="">
                  <img src="./assets/header/New-Window.svg" alt="" />
                </a>
              </li>
              <li className="flex-row">
                <a href="https://docs.pancakeswap.finance/">Docs</a>
                <a href="">
                  <img src="./assets/header/New-Window.svg" alt="" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="header__navbar__right flex-row">
        <div className="header__navbar__right-price flex-row">
          <img src="./assets/header/Price-Logo.svg" alt="" />
          <a href="">$4.339</a>
        </div>
        <div className="header__navbar__right-language">
          <img src="./assets/header/Language.svg" alt="" />
          <ul className="header__navbar__right-language--submenu">
            <ul className="flex-col">
              <li>
                <a href="">العربية</a>
              </li>
              <li>
                <a href="">বাংলা</a>
              </li>
              <li>
                <a href="">English</a>
              </li>
              <li>
                <a href="">Deutsch</a>
              </li>
              <li>
                <a href="">Ελληνικά</a>
              </li>
              <li>
                <a href="">Español</a>
              </li>
              <li>
                <a href="">Suomalainen</a>
              </li>
              <li>
                <a href="">Filipino</a>
              </li>
              <li>
                <a href="">Français</a>
              </li>
              <li>
                <a href="">हिंदी</a>
              </li>
              <li>
                <a href="">Magyar</a>
              </li>
              <li>
                <a href="">Bahasa Indonesia</a>
              </li>
              <li>
                <a href="">Italiano</a>
              </li>
              <li>
                <a href="">日本語</a>
              </li>
              <li>
                <a href="">한국어</a>
              </li>
              <li>
                <a href="">Nederlands</a>
              </li>
              <li>
                <a href="">Polski</a>
              </li>
              <li>
                <a href="">Português (Brazil)</a>
              </li>
              <li>
                <a href="">Português</a>
              </li>
              <li>
                <a href="">Română</a>
              </li>
              <li>
                <a href="">Русский</a>
              </li>
              <li>
                <a href="">Svenska</a>
              </li>
              <li>
                <a href="">தமிழ்</a>
              </li>
              <li>
                <a href="">Українська</a>
              </li>
              <li>
                <a href="">Tiếng Việt</a>
              </li>
              <li>
                <a href="">简体中文</a>
              </li>
              <li>
                <a href="">繁體中文</a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="header__navbar__right-settings">
          <img src="./assets/header/Settings.svg" alt="" />
        </div>
        <div className="header__navbar__right-chain">
          <button className="flex-row header-btn-link">
            <img src="/assets/header/Binance.png" alt="" className="bnb" />
            <a className="header-link-bnb">BNB Smart Chain</a>
            <img
              src="./assets/header/Down-Arrow.svg"
              alt=""
              className="arrow"
            />
          </button>
          <ul className="header__navbar__right-chain--submenu">
            <li>
              <a>Select a Network</a>
            </li>
            <li className="flex-row">
              <a href="">
                <img src="./assets/header/Binance.png" alt="" />
              </a>
              <a href="">BNB Smart Chain</a>
            </li>
            <li className="flex-row">
              <a href="">
                <img src="/assets/header/Ethereum.png" alt="" />
              </a>
              <a href="">Ethereum</a>
            </li>
          </ul>
        </div>
        <div className="header__navbar__right-connect flex-row">
          <button className="header-btn-connect">Connect Wallet</button>
        </div>
      </div>
    </nav>
    <section className="home1 flex-col home1-light">
      <div className="container flex-col">
        <div className="home1__slideshow flex">
          <div className="home1__slideshow--1 flex-row">
            <div className="flex-col">
              <p>Perpetual Futures</p>
              <p>UP TO 100× LEVERAGE</p>
              <button className="flex-row home-1-btn-light">
                Trade Now
                <img
                  src="assets/dark-mode/right-arrow-Home-1.svg"
                  alt=""
                  className="home-1-img-light"
                />
              </button>
            </div>
            <div>
              <img src="/assets/header/image.webp" alt="" />
            </div>
          </div>
          <div className="home1__slideshow--slider">
            <button className="home1__slideshow--slider-bullet" />
            <button className="home1__slideshow--slider-bullet" />
            <button className="home1__slideshow--slider-bullet" />
          </div>
        </div>
        <div className="home1__hero flex-row">
          <div className="home1__hero__text flex-col">
            <h1>The moon is made of pancakes.</h1>
            <p className="home-1-p-light">
              Trade, earn, and win crypto on the most popular decentralized
              platform in the galaxy.
            </p>
            <div className="flex-row">
              <button className="home-1-btn-light">Connect Wallet</button>
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
            src="/assets/header/background.svg"
            alt=""
            className="home-1-hd-bg"
          />
        </div>
        <div className="home1__background--1" />
      </div>
    </section>
  </header>
  {/* Home 2  */}
  <div className="home-2-bg">
    <div className="home-2-top-bottom-margins">
      <div className="home-2-around-margins">
        <div className="home-2-container">
          <img
            src="assets\home-2\bunny.svg"
            alt="bunny logo"
            className="bunny"
          />
          <h2 className="home-2-h2-main">Used by millions.</h2>
          <h2 className="second-h2 home-2-h2-main">Trusted with billions.</h2>
          <p>
            PancakeSwap has the most users of any decentralized platform, ever.
          </p>
          <p className="second-p">
            And those users are now entrusting the platform with over $3.9
            billion in funds.
          </p>
          <p className="third-p">Will you join them?</p>
          <div className="cards">
            <div className="home-2-card1 home-2-card-light">
              <img src="assets\home-2\card1.svg" alt="people logo" />
              <div className="home-2-card1-flex">
                <h2 className="home-2-card-h2">1.7 million</h2>
                <h2>users</h2>
                <p>in the last 30 days</p>
              </div>
            </div>
            <div className="home-2-card2 home-2-card-light">
              <img src="assets\home-2\card2.svg" alt="people logo" />
              <div className="home-2-card2-flex">
                <h2 className="home-2-card-h2">19 million</h2>
                <h2>trades</h2>
                <p>made in the last 30 days</p>
              </div>
            </div>
            <div className="home-2-card3 home-2-card-light">
              <img src="assets\home-2\card3.svg" alt="people logo" />
              <div className="home-2-card3-flex">
                <h2 className="home-2-card-h2">$3.9 billion</h2>
                <h2>staked</h2>
                <p>Total Value Locked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Home4 -fatih */}
  <div className="home4">
    {/* <svg
  id="upper-svg"
  viewBox="0 0 1660 48"
  preserveAspectRatio="none"
  color="text"
  width="48px"
  xmlns="http://www.w3.org/2000/svg"
  class="sc-8a800401-0 fGhPpn"
>
  <path d="M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z"></path>
</svg> */}
    <div className="home4-container">
      <div className="home4-textcontainer">
        <div>
          <h2 className="home4-h2">
            <span id="trade">Trade</span> anything. No registration, no hassle.
          </h2>
        </div>
        <div>
          <p>
            Trade any token on BNB Smart Chain in seconds, just by connecting
            your wallet.
          </p>
        </div>
        <div>
          <button className="home4-btn">Trade Now</button>
          <a href="#">Learn</a>
        </div>
      </div>
      <div className="home4-imagecontainer">
        <img className="fmg1" src="assets\home4/BNB@2x.webp" alt="" />
        <img className="fmg3" src="assets\home4/BTC@2x.webp" alt="" />
        <img className="fmg2" src="assets\home4/CAKE@2x.webp" alt="" />
      </div>
    </div>
    {/* <svg
  id="below-svg"
  viewBox="0 0 1660 48"
  preserveAspectRatio="none"
  color="text"
  width="48px"
  xmlns="http://www.w3.org/2000/svg"
  class="sc-8a800401-0 fGhPpn"
>
  <path d="M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z"></path>
</svg> */}
  </div>
  {/* Home 3  */}
  <div className="home-3-bg">
    <div className="home-2-top-bottom-margins">
      <div className="home-3-container">
        <div className="home-3-images-container">
          <img
            className="stocks-photo"
            src="https://pancakeswap.finance/images/home/earn/stonks@2x.webp"
            alt=""
          />
          <img
            className="pie-photo"
            src="https://pancakeswap.finance/images/home/earn/pie@2x.webp"
            alt=""
          />
          <img
            className="file-photo"
            src="https://pancakeswap.finance/images/home/earn/folder@2x.webp"
            alt=""
          />
        </div>
        <div className="home-3-text-container">
          <div>
            <h2 className="home3-top-h2">
              <span className="earn">Earn </span>passive income with crypto.
            </h2>
          </div>
          <div>
            <p>PancakeSwap makes it easy to make your crypto work for you.</p>
          </div>
          <div className="button-link">
            <button className="button home3-btn-exp">Explore</button>
            <a href="https://docs.pancakeswap.finance/products/yield-farming">
              Learn
            </a>
          </div>
        </div>
        <div className="home-3-bottom">
          <div className="text-bottom">
            <h2 className="home3-top-h2">
              Top <span className="farms">Farms</span>
            </h2>
            <img src="assets\home-3\button.svg" alt="" />
          </div>
          <div className="stonks">
            <div className="first-row">
              <p>KRS-BUSD LP</p>
              <p className="home3-nums">316.901%</p>
              <p>APY</p>
            </div>
            <div className="second-row">
              <p>WMX-BUSD LP</p>
              <p className="home3-nums">305.817%</p>
              <p>APR</p>
            </div>
            <div className="third-row">
              <p>HOOP-BUSD LP</p>
              <p className="home3-nums">190.155%</p>
              <p>APR</p>
            </div>
            <div className="fourth-row">
              <p>CO-BUSD LP</p>
              <p className="home3-nums">172.351%</p>
              <p>APR</p>
            </div>
            <div className="fifth-row">
              <p>TRIVIA-BNB LP</p>
              <p className="home3-nums">139.364%</p>
              <p>APR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Home-5 by güneş */}
  <section className="home-5__container">
    {/* 8Pool Right Top */}
    <div className="home-5__container__billard-balls">
      <div className="home-5__container__billard-balls__purple_container billard_ball_container">
        <img
          src="assets/home-5/purple_7.webp"
          alt="billard ball"
          className="billard-ball-purple-top"
        />
      </div>
      <div className="home-5__container__billard-balls__green_container billard_ball_container">
        <img
          src="assets/home-5/green_2.webp"
          alt="billard ball"
          className="billard-ball-green-top"
        />
      </div>
      <div className="home-5__container__billard-balls__turquoise_container billard_ball_container">
        <img
          src="assets/home-5/turquoise_4.webp"
          alt="billard ball"
          className="billard-ball-turquiose"
        />
      </div>
      <div className="home-5__container__billard-balls__purple-bottom_container billard_ball_container">
        <img
          src="assets/home-5/purple_6.webp"
          alt="billard ball"
          className="billard-ball-purple-bottom"
        />
      </div>
      <div className="home-5__container__billard-balls__yellow_container billard_ball_container">
        <img
          src="assets/home-5/yellow_9.webp"
          alt="billard ball"
          className="billard-ball-yellow"
        />
      </div>
    </div>
    {/* Cards left bottom */}
    <div className="home-5__container__gamble-cards">
      <div className="home-5__container__gamble-cards_yugioh-top_container gamble_card_container">
        <img
          src="assets/home-5/card_yugioh.webp"
          alt="gamble card"
          className="gamble-card-yugioh-top"
        />
      </div>
      <div className="home-5__container__gamble-cards_green_container gamble_card_container">
        <img
          src="assets/home-5/card_green.webp"
          alt="gamble card"
          className="gamble-card-green"
        />
      </div>
      <div className="home-5__container__gamble-cards_pink_container gamble_card_container">
        <img
          src="assets/home-5/card_pink.webp"
          alt="gamble card"
          className="gamble-card-pink"
        />
      </div>
      <div className="home-5__container__gamble-cards_yugioh-bottom_container gamble_card_container">
        <img
          src="assets/home-5/card_yugioh_bottom.webp"
          alt="gamble card"
          className="gamble-card-yugioh-bottom"
        />
      </div>
    </div>
    <div className="home-5__container__main">
      <h3>
        <span>Win</span> millions in prizes
      </h3>
      <p className="home-5__container__main_paragraph">
        Provably fair, on-chain games. Win big with PancakeSwap.
      </p>
      <div className="home-5__container__main__cards-container">
        {/* Card on the left */}
        <div className="card card-left">
          <img
            src="assets/home-5/home-5_sphere.svg"
            alt="sphere icon"
            className="card-left_first-img"
          />
          <div className="card-left_middle-row">
            <h5>Prediction</h5>
            <h3>$840 million</h3>
            <h5>in BNB + CAKE won so far</h5>
            <p>Predict the price trend of BNB or CAKE to win</p>
          </div>
          <button className="card_last_row card_btn">
            Play
            <img
              src="assets/home-5/home-5_arrowBtn.svg"
              alt="arrow icon"
              className="card_btn_img-arrow"
            />
          </button>
        </div>
        {/* Card on the left finishes */}
        {/* Card on the right */}
        <div className="card card-right">
          <img
            src="assets/home-5/home-5_clip.svg"
            alt="clip icon"
            className="card-right_first-img"
          />
          <div className="card-right_middle-row">
            <h5>Lottery</h5>
            <h3>$111,721</h3>
            <h5>in CAKE prizes this round</h5>
            <p>Buy tickets with CAKE, win CAKE if your numbers match</p>
          </div>
          <button className="card_last_row card_btn">
            Buy Tickets
            <img
              src="assets/home-5/home-5_arrowBtn.svg"
              alt="arrow icon"
              className="card_btn_img-arrow"
            />
          </button>
        </div>
        {/* Card on the right finishes */}
      </div>
    </div>
  </section>
  {/* Home6 - Stavros */}
  <section className="home6">
    <div className="home6-container">
      <div className="home6-top">
        <div>
          <h2 className="home6-h2">
            <span className="stavros_span">CAKE</span> makes our world go round.
          </h2>
          <p>
            CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win
            it, farm it, spend it, stake it... heck, you can even vote with it!
          </p>
          <div>
            <button className="home6-buy-cake-btn">Buy CAKE</button>
            <a href="">Learn</a>
          </div>
        </div>
        {/* Image CakeCoin wrap */}
        <div className="home6-imagecontainer">
          <img
            className="home6-botright"
            src="assets\home6\bottom-right@2x.webp"
            alt="pancake image"
          />
          <img
            className="home6-coin"
            src="assets\home6\coin@2x.webp"
            alt="Cake coin"
          />
          <img
            className="home6-topleft"
            src="assets\home6\top-left@2x.webp"
            alt="pancake image"
          />
          <img
            className="home6-topright"
            src="assets\home6\top-right@2x.webp"
            alt="pancake image"
          />
        </div>
      </div>
      {/* Stats of cake */}
      <div className="home6-stats-table">
        <div>
          <p>Circulating Supply</p>
          <p className="home6-nums">146,467,235</p>
        </div>
        <div>
          <p>Total supply</p>
          <p className="home6-nums">339,969,596</p>
        </div>
        <div>
          <p>Max Supply</p>
          <p className="home6-nums">750,000,000</p>
        </div>
        <div>
          <p>Market cap</p>
          <p className="home6-nums">$650 million</p>
        </div>
        <div>
          <p>Burned to date</p>
          <p className="home6-nums">612,699,204</p>
        </div>
        <div>
          <p>Current emissions</p>
          <p className="home6-nums">11.16/block</p>
        </div>
      </div>
    </div>
  </section>
  {/* home7 -fatih */}
  <div className="home7">
    <div className="home7-container">
      <div className="home7-leftimagecontainer">
        <img className="fmg1" src="assets/home7/left/1-left@2x.webp" alt="" />
        <img className="fmg2" src="assets/home7/left/1-bottom@2x.webp" alt="" />
        <img className="fmg3" src="assets/home7/left/1-top@2x.webp" alt="" />
      </div>
      <div className="home7-textcontainer">
        <div>
          <h2>Start in seconds.</h2>
        </div>
        <div>
          <p>Connect your crypto wallet to start using the app in seconds.</p>
        </div>
        <div>
          <p>
            <span> No registration needed.</span>
          </p>
        </div>
        <div>
          <p>
            <a href="#">Learn how to start</a>
          </p>
          <button className="home-7-connect-btn">Connect Wallet</button>
        </div>
      </div>
      <div className="home7-rightimagecontainer">
        <img
          className="fmg1"
          src="assets/home7/right/2-bottom@2x.webp"
          alt=""
        />
        <img className="fmg2" src="assets/home7/right/2-top@2x.webp" alt="" />
        <img className="fmg3" src="assets/home7/right/2-right@2x.webp" alt="" />
      </div>
    </div>
  </div>
  <footer className="footer">
      <section className="footer__section__lists">
        <div className="footer__section__div">
          <h3>About</h3>
          <ul className="footer__lists__container">
            <li className="footer__lists__container_item--yellow">Contact</li>
            <li>Brand</li>
            <li>Blog</li>
            <li>Community</li>
            <li>Litepaper</li>
            <li className="footer__lists__container_item--dash">-</li>
            <li>Online Store</li>
          </ul>
        </div>
        <div className="footer__section__div">
          <h3>Help</h3>
          <ul className="footer__lists__container">
            <li>Customer Support</li>
            <li>Troubleshooting</li>
            <li>Guides</li>
          </ul>
        </div>
        <div className="footer__section__div">
          <h3>Developers</h3>
          <ul className="footer__lists__container">
            <li>Github</li>
            <li>Documentation</li>
            <li>Bug Bounty</li>
            <li>Audits</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer__section__div--icon">
          <img
            src={require("./assets/footer/footer_pancakeSwap_logo.svg").default}
            alt="PancakeSwap Icon"
          />
        </div>
      </section>
      <section className="footer__section__icons">
        <img
          src={require("./assets/footer/footer_twitter_icon.svg").default}
          alt="twitter icon"
          className="footer__section__icons_item footer__section__icons_item--twitter"
        />
        <img
          src={require("./assets/footer/footer_telegram_icon.svg").default}
          alt="telegram icon"
          className="footer__section__icons_item footer__section__icons_item--telegram"
        />
        <img
          src={require("./assets/footer/footer_reddit_icon.svg").default}
          alt="reddit icon"
          className="footer__section__icons_item footer__section__icons_item--reddit"
        />
        <img
          src={require("./assets/footer/footer_instagram_icon.svg").default}
          alt="instagram icon"
          className="footer__section__icons_item footer__section__icons_item--instagram"
        />
        <img
          src={require("./assets/footer/footer_github_iconn.svg").default}
          alt="github icon"
          className="footer__section__icons_item footer__section__icons_item--github"
        />
        <img
          src={require("./assets/footer/footer_discord_icon.svg").default}
          alt="discord icon"
          className="footer__section__icons_item footer__section__icons_item--discord"
        />
        <img
          src={require("./assets/footer/footer_medium_icon.svg").default}
          alt="medium icon"
          className="footer__section__icons_item footer__section__icons_item--medium"
        />
      </section>
      <section className="footer__section__bottom">
        <div className="footer__section__bottom--item-1 footer__section__bottom--item">
          <div className="footer__section__bottom--item-1__dark-mode-container">
            {/* <!-- ABSOLUTE SLIDER BEGINS--> */}
            <div className="absolute-slider absolute-slider-left">
              <img
                src={require("./assets/footer/footer_light_mode.svg").default}
                alt="light-dark-switch"
                className="absolute-switcher-img"
              />
            </div>
            {/* <!-- ABSOLUTE SLIDER ENDS --> */}
            <div className="footer__section__bottom--item-1__dark-mode-container_light">
              <img
                src={require("./assets/footer/footer_light_mode.svg").default}
                alt="light mode icon"
                className="light_mode"
              />
            </div>
            <div className="footer__section__bottom--item-1__dark-mode-container_dark">
              <img
                src={require("./assets/footer/footer_dark_mode.svg").default}
                alt="dark mode icon"
                className="dark_mode"
              />
            </div>
          </div>
        </div>
        <div className="footer__section__bottom--item-2 footer__section__bottom--item">
          <div className="footer__section__bottom--item-2__left">
            <img
              src={require("./assets/footer/footer_world_icon.svg").default}
              alt="world icon"
              className="footer__section__bottom--item-2__left__world-icon"
            />
            <select className="footer__section__bottom--item-2__left__select">
              <option value="AF">AF</option>
              <option value="SQ">SQ</option>
              <option value="AR">AR</option>
              <option value="HY">HY</option>
              <option value="EU">EU</option>
              <option value="BN">BN</option>
              <option value="BG">BG</option>
              <option value="CA">CA</option>
              <option value="KM">KM</option>
              <option value="ZH">ZH</option>
              <option value="HR">HR</option>
              <option value="CS">CS</option>
              <option value="DA">DA</option>
              <option value="NL">NL</option>
              <option value="EN" selected>
                EN
              </option>
              <option value="ET">ET</option>
              <option value="FJ">FJ</option>
              <option value="FI">FI</option>
              <option value="FR">FR</option>
              <option value="KA">KA</option>
              <option value="DE">DE</option>
              <option value="EL">EL</option>
              <option value="GU">GU</option>
              <option value="HE">HE</option>
              <option value="HI">HI</option>
              <option value="HU">HU</option>
              <option value="IS">IS</option>
              <option value="ID">ID</option>
              <option value="GA">GA</option>
              <option value="IT">IT</option>
              <option value="JA">JA</option>
              <option value="JW">JW</option>
              <option value="KO">KO</option>
              <option value="LA">LA</option>
              <option value="LV">LV</option>
              <option value="LT">LT</option>
              <option value="MK">MK</option>
              <option value="MS">MS</option>
              <option value="ML">ML</option>
              <option value="MT">MT</option>
              <option value="MR">MR</option>
              <option value="MN">MN</option>
              <option value="NE">NE</option>
              <option value="NO">NO</option>
              <option value="FA">FA</option>
              <option value="PL">PL</option>
              <option value="PT">PT</option>
              <option value="PA">PA</option>
              <option value="QU">QU</option>
              <option value="RO">RO</option>
              <option value="RU">RU</option>
              <option value="SM">SM</option>
              <option value="SR">SR</option>
              <option value="SK">SK</option>
              <option value="SL">SL</option>
              <option value="ES">ES</option>
              <option value="SW">SW</option>
              <option value="SV">SV</option>
              <option value="TA">TA</option>
              <option value="TT">TT</option>
              <option value="TE">TE</option>
              <option value="TH">TH</option>
              <option value="BO">BO</option>
              <option value="TO">TO</option>
              <option value="TR">TR</option>
              <option value="UK">UK</option>
              <option value="UZ">UZ</option>
              <option value="VI">VI</option>
              <option value="CY">CY</option>
              <option value="XH">XH</option>
            </select>
          </div>
          <div className="footer__section__bottom--item-2__right">
            <img
              src={require("./assets/footer/footer_circle_icon.svg").default}
              alt="circle icon pancakeswap"
            />
            <span>$4758</span>
          </div>
        </div>
        <div className="footer__section__bottom--item-3 footer__section__bottom--item">
          <button className="footer__section__bottom--item-3__btn">
            Buy CAKE
          </button>
        </div>
      </section>
    </footer>
</>


    );
};

export default Home;
