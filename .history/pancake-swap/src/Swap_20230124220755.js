import React, { useState } from "react";
import Footer from "./Footer";
import bnbCoinIcon from "./assets/header/Binance.png";
import ethCoinIcon from "./assets/header/Ethereum.png";
import { TopNavbar } from "./TopNavbar";
import { InputField, Result,  } from "./form";

const Swap = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <>
            <TopNavbar />
            <div className="sub_nav">
                <ul>
                    <li><a href="#" className="selected_pottery">Swap</a></li>
                    <li><a href="limit.html">Limit</a></li>
                    <li><a href="liquidity.html">Liquidity</a></li>
                    <li><a href="perpetual.html">Perpetual <svg viewBox="0 0 24 24" color="textSubtle" width="20px"
                        xmlns="http://www.w3.org/2000/svg" className="sc-4ba21b47-0 ebMyYP">
                        <path
                            d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z">
                        </path>
                    </svg></a></li>
                    <li><a href="bridge.html">Bridge <svg viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg"
                        className="sc-4ba21b47-0 ebMyYP">
                        <path
                            d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z">
                        </path>
                    </svg></a></li>
                </ul>
            </div>
            <div className="swap-container">
                <div className="swap-main">
                    <div className="chart">
                        <div className="chart-header">
                            <div className="chart-leftcontainer">
                                <div>
                                    <svg
                                        viewBox="0 0 96 96"
                                        width="24px"
                                        color="text"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="sc-4ba21b47-0 IIbzK"
                                        style={{ marginRight: 4 }}
                                    >
                                        <circle cx={48} cy={48} r={48} fill="#F0B90B" />
                                        <path
                                            d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <img
                                        className="sc-b728c75b-0 hUFSSE"
                                        alt="CAKE logo"
                                        width="24px"
                                        src="https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png"
                                    />
                                </div>
                                <div>BNB/CAKE</div>
                                <button>
                                    <svg
                                        viewBox="0 0 24 25"
                                        color="primary"
                                        width="20px"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="sc-4ba21b47-0 jNdOfQ"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="chart-header-rightcontainer">
                                <button>
                                    <svg
                                        viewBox="0 0 25 24"
                                        color="text"
                                        width="20px"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="sc-4ba21b47-0 IIbzK"
                                    >
                                        <path d="M20.497 4.6l-.004-.028-.006-.036-.008-.033-.007-.03-.012-.032-.01-.03-.014-.028-.014-.03-.016-.027-.018-.03-.021-.028-.018-.024a.663.663 0 00-.044-.048v-.001a.66.66 0 00-.049-.044l-.024-.018-.028-.02-.03-.018-.026-.016-.03-.015c-.01-.004-.02-.01-.03-.013l-.03-.011-.03-.011-.031-.008-.033-.008-.035-.005-.03-.005A.684.684 0 0019.834 4h-4.667a.667.667 0 100 1.333h3.057l-4.862 4.862a.667.667 0 10.943.943l4.862-4.862v3.057a.667.667 0 101.333 0V4.667a.658.658 0 00-.003-.066zM10.696 12.861l-4.862 4.862v-3.057a.667.667 0 10-1.333 0v4.667l.003.066.005.029.005.035.008.033.008.03.01.032.012.03.013.029.015.03.016.027.017.029.021.028.018.024a.663.663 0 00.093.093l.024.018.029.021.029.018.026.016.03.014.03.014.03.01.031.012.03.007.033.008.036.006.029.004a.657.657 0 00.066.003h4.666a.667.667 0 000-1.333H6.777l4.862-4.862a.667.667 0 00-.943-.943z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="chart-mid">
                            <div>
                                <div />
                                <div>Oct 29, 2022, 05:22 PM</div>
                            </div>
                            <div>
                                <button>24H</button>
                                <button>1W</button>
                                <button>1M</button>
                                <button>1Y</button>
                            </div>
                        </div>
                        <div className="chart-graph">
                            <svg
                                width="100%"
                                height="100%"
                                preserveAspectRatio="none"
                                viewBox="0 0 100 50"
                                color="text"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-4ba21b47-0 IIbzK"
                            >
                                <path
                                    d="M 0 49 C 1 49 1 45 4 47 C 7 49 7 35 11 37 C 13 38 14 32 16 34 C 18 35.6667 20 40 22 39 C 24 38 24 34 26 34 C 27 34 29 39 32 36 C 33 35 34 32 35 32 C 37 32 37 35 39 34 C 40 33 39 29 43 31 C 46 32 45 28 47 30 C 50 32 49 22 51 24 Q 53 26 55 24 C 56 23 56 25 57 26 C 58 27 59 28 60 28 C 63 28 66 17 67 16 C 68 15 69 17 70 16 C 71 15 71 13 74 13 C 76 13 76 14 77 15 C 79 17 80 18 82 18 C 83 18 83 17 84 17 C 87 17 89 24 91 24 C 93 24 95 20 96 17 C 97.6667 13.3333 98 9 101 6"
                                    stroke="#7645D9"
                                    strokeWidth="0.2"
                                    strokeDasharray={156}
                                    strokeDashoffset={156}
                                    fill="transparent"
                                    opacity="0.5"
                                    filter="url(#glow)"
                                >
                                    <animate
                                        id="firstline"
                                        attributeName="stroke-dashoffset"
                                        dur="2s"
                                        from={156}
                                        to={-156}
                                        begin="0s;firstline.end+0.5s"
                                    />
                                </path>
                                <path
                                    d="M 0 49 C 1 49 1 45 4 47 C 7 49 7 35 11 37 C 13 38 14 32 16 34 C 18 35.6667 20 40 22 39 C 24 38 24 34 26 34 C 27 34 29 39 32 36 C 33 35 34 32 35 32 C 37 32 37 35 39 34 C 40 33 39 29 43 31 C 46 32 45 28 47 30 C 50 32 49 22 51 24 Q 53 26 55 24 C 56 23 56 25 57 26 C 58 27 59 28 60 28 C 63 28 66 17 67 16 C 68 15 69 17 70 16 C 71 15 71 13 74 13 C 76 13 76 14 77 15 C 79 17 80 18 82 18 C 83 18 83 17 84 17 C 87 17 89 24 91 24 C 93 24 95 20 96 17 C 97.6667 13.3333 98 9 101 6"
                                    stroke="#7645D9"
                                    strokeWidth="0.2"
                                    strokeDasharray={156}
                                    strokeDashoffset={156}
                                    fill="transparent"
                                    opacity="0.5"
                                    filter="url(#glow)"
                                >
                                    <animate
                                        id="secondline"
                                        attributeName="stroke-dashoffset"
                                        dur="2s"
                                        from={156}
                                        to={-156}
                                        begin="1.3s;secondline.end+0.5s"
                                    />
                                </path>
                                <defs>
                                    <filter id="glow">
                                        <feGaussianBlur
                                            className="blur"
                                            result="coloredBlur"
                                            stdDeviation={4}
                                        ></feGaussianBlur>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                            </svg>
                            <div className="chart-waiting">
                                <div>Loading chart data...</div>
                            </div>
                        </div>
                    </div>
                    <div className="converter-container">
                        <div className="converter">
                            <div className="converter-top">
                                <button id="converter-top-button1">Swap</button>
                                <button id="converter-top-button2">StableSwap</button>
                            </div>
                            <div className="converter-mid">
                                <div>
                                    <button>
                                        <svg
                                            viewBox="0 0 23 22"
                                            color="textSubtle"
                                            width="20px"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="sc-4ba21b47-0 ebMyYP"
                                        >
                                            <path
                                                d="M21.5 1l-20 20"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.033 19H19.5a1 1 0 100-2H9.033l-2 2zm3-3H18.5a1 1 0 001-1V6.533l-2 2V14h-2v-3.467l-2 2V14h-1.467l-2 2zm.936-8H10.5a1 1 0 00-1 1v.469L10.969 8zm-2 2L5.5 13.469V11a1 1 0 011-1h2.469zM4.5 14.469l-2 2V6a1 1 0 012 0v8.469z"
                                            ></path>
                                        </svg>
                                    </button>
                                    <h2>Swap</h2>
                                    <div>
                                        <span>
                                            <div>
                                                <button>
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        height={24}
                                                        width={24}
                                                        color="textSubtle"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="sc-4ba21b47-0 ebMyYP"
                                                    >
                                                        <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <span />
                                        </span>
                                        <button>
                                            <svg
                                                viewBox="0 0 24 24"
                                                color="textSubtle"
                                                width="24px"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-4ba21b47-0 ebMyYP"
                                            >
                                                <path d="M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"></path>
                                            </svg>
                                        </button>
                                        <button>
                                            <svg
                                                id="arrow_loading"
                                                viewBox="0 0 24 24"
                                                color="textSubtle"
                                                width="27px"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-4ba21b47-0 ebMyYP"
                                            >
                                                <path
                                                    stroke="none"
                                                    fill="#D7CAEC"
                                                    d="M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
                                                ></path>
                                                <defs>
                                                    <path
                                                        id="arrow"
                                                        stroke="none"
                                                        fill="none"
                                                        d="M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
                                                    ></path>
                                                    <clipPath id="arrow-clip">
                                                        <use xlinkHref="#arrow" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div>Trade tokens in an instant</div>
                            </div>
                            <div className="swap-page">
                                <div className="swap-page-top">
                                    <div className="swap-currency-input">
                                        <div>
                                            <button>
                                                <div>
                                                    <svg
                                                        viewBox="0 0 96 96"
                                                        width="24px"
                                                        color="text"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="sc-4ba21b47-0 IIbzK"
                                                        style={{ marginRight: 8 }}
                                                    >
                                                        <circle cx={48} cy={48} r={48} fill="#F0B90B" />
                                                        <path
                                                            d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                    <div id="pair">BNB</div>
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        color="text"
                                                        width="20px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="sc-4ba21b47-0 IIbzK"
                                                    >
                                                        <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="token-amount-input">
                                            <label>
                                      {/*           <div>
                                                    <input
                                                        className="token-amount-input _1cvvxtw5 _1cvvxtw8"
                                                        inputMode="decimal"
                                                        title="Token Amount"
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        type="text"
                                                        pattern="^[0-9]*[.,]?[0-9]*$"
                                                        placeholder={0.0}
                                                        minLength={1}
                                                        maxLength={79}
                                                        spellCheck="false"
                                                        defaultValue=""

                                                    />
                                                </div> */}
                                                    <InputField inputValue={inputValue} setInputValue={setInputValue} />
                                                <div></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="swap-currency-buttoncontainer">
                                        <button>
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="sc-4ba21b47-0 hgqOyz _1cvvxtw3"
                                                color="primary"
                                                width="20px"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path>
                                            </svg>
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="sc-4ba21b47-0 hgqOyz _1cvvxtw4"
                                                color="primary"
                                                width="20px"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H16zM8.65 3.35L5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35a.501.501 0 00-.7 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="swap-currency-output">
                                        <div>
                                            <button>
                                                <div>
                                                    <img
                                                        alt="CAKE logo"
                                                        width="24px"
                                                        src="https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png"
                                                    />
                                                    <div id="pair">CAKE</div>
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        color="text"
                                                        width="20px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="sc-4ba21b47-0 IIbzK"
                                                    >
                                                        <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                            <div>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    color="textSubtle"
                                                    width="16px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="sc-4ba21b47-0 ebMyYP"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z"></path>
                                                </svg>
                                                <div id="token-copied">Token address copied</div>
                                            </div>
                                        </div>
                                        <div>
                                            <label>
                                            <Result inputValue={inputValue} />
                                                {/* <div>
                                                    <input
                                                        inputMode="decimal"
                                                        title="Token Amount"
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        type="text"
                                                        pattern="^[0-9]*[.,]?[0-9]*$"
                                                        placeholder={0.0}
                                                        minLength={1}
                                                        maxLength={79}
                                                        spellCheck="false"
                                                        defaultValue=""
                                                    />
                                                </div> */}
                                                <div />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="converter-risk">
                                        <button style={{ textTransform: "uppercase" }}>
                                            scan risk
                                        </button>
                                        <div>
                                            <svg
                                                viewBox="0 0 24 24"
                                                width="20px"
                                                height="20px"
                                                color="textSubtle"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-4ba21b47-0 kodxNO"
                                            >
                                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="converter-tolerance">
                                        <div></div>
                                        <div>
                                            <div>Slippage Tolerance</div>
                                            <div>0.5%</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button>Connect Wallet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swap-bottom">
                    <div className="swap-bottom-left">
                        <div id="version">
                            <button className="sc-a8cf5f33-0 kDVdbN" scale="sm">
                                V2
                            </button>
                            <a href="https://v1exchange.pancakeswap.finance/#/" scale="sm">
                                V1 (old)
                            </a>
                        </div>
                        <a
                            target="_blank"
                            rel="noreferrer noopener"
                            id="ercBridge"
                            href="https://docs.binance.org/smart-chain/guides/cross-chain.html"
                            color="primary"
                            fontSize="16px"
                            className="sc-c56ebc7d-0 sc-2d8b3c99-0 dXeKWX jluAhG"
                        >
                            Convert ERC-20 to BEP-20
                            <svg
                                viewBox="0 0 24 24"
                                color="primary"
                                width="20px"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-4ba21b47-0 ceTLum"
                            >
                                <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="swap-bottom-right">
                        <div>
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                id="clickExchangeHelp"
                                href="https://docs.pancakeswap.finance/products/pancakeswap-exchange"
                                scale="md"
                            >
                                Need help ?
                            </a>
                            <svg
                                viewBox="0 0 16 16"
                                color="text"
                                width="20px"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-4ba21b47-0 IIbzK"
                            >
                                <path d="M0 16V0C0 0 3 1 6 1C9 1 16 -2 16 3.5C16 10.5 7.5 16 0 16Z" />
                            </svg>
                        </div>
                        <div>
                            <img
                                src="https://cdn.pancakeswap.com/help/help.png"
                                alt="Get some help"
                                className="sc-8ebf47af-0 kqjEBp"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
};

export default Swap;
