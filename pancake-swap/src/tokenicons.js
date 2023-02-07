export function GetIconBySymbol({ symbol }) {
    switch (symbol) {
        case 'ETH':
            return <EthIcon />
        case 'USDC':
            return <UsdcIcon />
        case 'USDT':
            return <UsdtIcon />
        case 'LUSD':
            return <LusdIcon />
        case 'BNB':
            return <BnbIcon />
        case 'CAKE':
            return <CakeIcon />
        default:
            return <EthIcon />
    }
}
const CakeIcon = () => {
    return (
        <img
            className="sc-b728c75b-0 hUFSSE"
            alt="CAKE logo"
            width="24px"
            src="https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png"
        />
    )
}
const BnbIcon = () => {
    return (
        <svg
            viewBox="0 0 96 96"
            width="24px"
            color="text"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-4ba21b47-0 IIbzK"
            
        >
            <circle cx={48} cy={48} r={48} fill="#F0B90B" />
            <path
                d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z"
                fill="white"
            />
        </svg>
    )
}
const EthIcon = () => {
    return (
        <svg
            width="18px"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z"
                fill="#627EEA"
            />
            <path
                d="M19.9834 7V16.4455L27.9664 20.0132L19.9834 7Z"
                fill="white"
                fillOpacity="0.602"
            />
            <path
                d="M19.983 7L12 20.0132L19.983 16.4455V7Z"
                fill="white"
            />
            <path
                d="M19.9834 26.1333V32.5514L27.9711 21.499L19.9834 26.1333Z"
                fill="white"
                fillOpacity="0.602"
            />
            <path
                d="M19.983 32.5514V26.1333L12 21.499L19.983 32.5514Z"
                fill="white"
            />
            <path
                d="M19.9834 24.6472L27.9664 20.013L19.9834 16.4453V24.6472Z"
                fill="white"
                fillOpacity="0.2"
            />
            <path
                d="M12 20.013L19.983 24.6472V16.4453L12 20.013Z"
                fill="white"
                fillOpacity="0.602"
            />
        </svg>
    )
}
const UsdcIcon = () => {
    return (
        <svg
            width="18px"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20Z"
                fill="#2775CA"
            />
            <path
                d="M24.6721 22.7261C24.6721 20.2478 23.1851 19.398 20.2111 19.0441C18.0868 18.7608 17.6619 18.1943 17.6619 17.2029C17.6619 16.2114 18.37 15.5743 19.7862 15.5743C21.0608 15.5743 21.7689 15.9992 22.1229 17.0613C22.1938 17.2737 22.4062 17.4153 22.6187 17.4153H23.7515C24.0348 17.4153 24.2472 17.2029 24.2472 16.9197V16.8489C23.9639 15.291 22.6894 14.0873 21.0608 13.9457V12.2463C21.0608 11.963 20.8483 11.7506 20.4944 11.6797H19.4322C19.1489 11.6797 18.9365 11.8921 18.8656 12.2463V13.8749C16.7413 14.1582 15.396 15.5743 15.396 17.3446C15.396 19.6813 16.8122 20.6018 19.7862 20.9559C21.7689 21.3099 22.4062 21.7348 22.4062 22.8678C22.4062 24.0008 21.4148 24.7797 20.0695 24.7797C18.2283 24.7797 17.591 24.0006 17.3786 22.9385C17.3079 22.6554 17.0955 22.5136 16.883 22.5136H15.6792C15.396 22.5136 15.1836 22.7261 15.1836 23.0094V23.0802C15.4667 24.8504 16.5997 26.125 18.9365 26.4791V28.1786C18.9365 28.4617 19.1489 28.6741 19.5029 28.745H20.5651C20.8483 28.745 21.0608 28.5326 21.1316 28.1786V26.4791C23.2559 26.125 24.6721 24.6379 24.6721 22.7261Z"
                fill="white"
            />
            <path
                d="M16.3878 30.1635C10.8646 28.1809 8.03218 22.0204 10.0858 16.5679C11.1479 13.5939 13.4847 11.328 16.3878 10.2659C16.6711 10.1243 16.8127 9.91187 16.8127 9.55771V8.56642C16.8127 8.28313 16.6711 8.0707 16.3878 8C16.317 8 16.1754 8 16.1045 8.0707C9.37763 10.195 5.69544 17.3469 7.81975 24.0738C9.09433 28.0392 12.1392 31.084 16.1045 32.3586C16.3878 32.5002 16.6711 32.3586 16.7418 32.0753C16.8127 32.0046 16.8127 31.9338 16.8127 31.7922V30.8007C16.8127 30.5883 16.6003 30.3052 16.3878 30.1635ZM23.8938 8.0707C23.6105 7.92913 23.3272 8.0707 23.2565 8.35399C23.1856 8.42486 23.1856 8.49556 23.1856 8.63729V9.62858C23.1856 9.91187 23.398 10.195 23.6105 10.3367C29.1337 12.3193 31.9661 18.4798 29.9125 23.9323C28.8504 26.9063 26.5136 29.1722 23.6105 30.2343C23.3272 30.3759 23.1856 30.5883 23.1856 30.9425V31.9338C23.1856 32.2171 23.3272 32.4295 23.6105 32.5002C23.6813 32.5002 23.8229 32.5002 23.8938 32.4295C30.6207 30.3052 34.3029 23.1533 32.1785 16.4263C30.904 12.3902 27.7882 9.34528 23.8938 8.0707Z"
                fill="white"
            />
        </svg>
    )
}
const UsdtIcon = () => {
    return (
        <svg width="18px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20Z" fill="#26A17B"></path><path d="M22.2044 21.9156V21.9123C22.0657 21.922 21.3496 21.964 19.7561 21.964C18.4819 21.964 17.5883 21.9285 17.2722 21.9123V21.9156C12.3722 21.6994 8.71734 20.8478 8.71734 19.8253C8.71734 18.8059 12.3754 17.9511 17.2722 17.7349V21.0672C17.5915 21.0898 18.5109 21.1446 19.7786 21.1446C21.3012 21.1446 22.0625 21.0801 22.2044 21.0672V17.7382C27.0948 17.9575 30.7399 18.8091 30.7399 19.8285C30.7399 20.8478 27.0915 21.6994 22.2044 21.9188V21.9156ZM22.2044 17.393V14.4123H29.027V9.86719H10.4528V14.4123H17.2754V17.393C11.7302 17.6478 7.5625 18.7446 7.5625 20.0607C7.5625 21.3769 11.7335 22.4736 17.2754 22.7317V32.2865H22.2077V22.7317C27.7431 22.4769 31.9044 21.3801 31.9044 20.064C31.9044 18.7511 27.7431 17.6511 22.2077 17.3962" fill="white"></path>
        </svg>
    )
}
const LusdIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18"  viewBox="0 0 40 40" fill="none">
            <g clip-path="url(#clip0_16025_96537)">
                <path d="M39.4175 25.6862C37.2806 33.0542 31.1537 38.5752 23.6039 39.9362V34.1807C24.9687 33.6608 26.197 32.8364 27.1952 31.7701C27.7497 31.1752 28.2237 30.5101 28.605 29.7917C29.3308 28.4233 29.7065 26.8964 29.6984 25.3475C29.6984 20.2594 26.0252 18.2252 22.5815 16.7165L20.8377 15.9456C18.9731 15.1095 17.5469 14.3656 17.5469 13.0923C17.5469 11.3323 19.0828 10.3864 20.5315 10.3864C22.073 10.3864 22.9475 10.9553 23.8712 12.5566L24.5873 13.7973L29.1953 10.8403L28.5949 9.72534C27.5381 7.71038 25.7536 6.17353 23.6042 5.42741V0.148438C24.0523 0.224966 24.495 0.323208 24.9435 0.438267C24.9871 0.449336 25.0364 0.460086 25.0857 0.469878C25.1356 0.479351 25.185 0.492125 25.2332 0.50809C25.2482 0.509793 25.2629 0.513517 25.2769 0.519159C25.3973 0.550771 25.5228 0.57919 25.6486 0.617401C30.7988 2.11572 35.1431 5.59866 37.7253 10.3C40.3075 15.0014 40.9162 20.5361 39.4175 25.6862Z" fill="#745DDF" />
                <path d="M24.041 25.6265C24.041 27.9441 21.9474 29.3761 20.0124 29.3761C17.6893 29.3761 16.361 27.4575 16.104 25.6754L15.8854 24.1285L10.31 25.6985L10.5629 26.9449C11.3608 30.875 14.0449 33.7012 17.6908 34.5539V40.1239C16.7018 40.008 15.7224 39.8199 14.761 39.5607C14.6244 39.5291 14.493 39.4896 14.3564 39.4514C5.72425 36.9378 -0.21463 29.0306 -0.223145 20.04V0.607531C-0.222612 0.167094 0.134378 -0.189898 0.574815 -0.19043H17.6896V5.37422C15.6868 5.95409 13.9804 7.2754 12.9176 9.06919C12.236 10.2621 11.8814 11.614 11.8898 12.9879V13.0972C11.9439 17.6347 15.2789 19.5315 18.4274 20.9581L20.0026 21.6413L20.1337 21.7014C22.631 22.8441 24.041 23.5928 24.041 25.6265Z" fill="#2EB6EA" />
                <path d="M29.6984 25.347C29.7065 26.8959 29.331 28.4226 28.6053 29.791C28.2238 30.5094 27.7496 31.1747 27.1949 31.7696C26.1967 32.8357 24.9684 33.66 23.6036 34.1796L23.606 39.963L21.9896 40.1058C21.9896 40.1058 18.5231 40.2097 17.6977 40.1058L17.6891 34.5522C14.0434 33.6992 11.3594 30.8733 10.5615 26.9426L10.3086 25.6962L15.884 24.1274L16.1026 25.6744C16.3608 27.4571 17.6891 29.3761 20.0123 29.3761C21.9473 29.3761 24.0409 27.9437 24.0409 25.6264C24.0409 23.593 22.6305 22.8453 20.1326 21.7016L20.0015 21.6416L18.4273 20.9584C15.2788 19.5312 11.9443 17.6343 11.8897 13.0975V12.9881C11.8813 11.6143 12.2357 10.2624 12.9174 9.06944C13.98 7.27544 15.6863 5.95392 17.6891 5.37383V-0.196453C21.3348 -0.227426 21.6138 -0.205926 23.6036 0.143613V5.42844C25.753 6.17467 27.5375 7.71152 28.5942 9.72648L29.1947 10.8414L24.5877 13.7959L23.8716 12.5552C22.9478 10.9536 22.073 10.385 20.5318 10.385C19.0831 10.385 17.5472 11.3306 17.5472 13.0909C17.5472 14.3645 18.9738 15.1077 20.838 15.9442L22.5812 16.716C26.0259 18.2248 29.6984 20.258 29.6984 25.347Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_16025_96537">
                    <rect width="40" height="40" rx="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
