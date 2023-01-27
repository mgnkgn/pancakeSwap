import React from "react";
import Footer from "./Footer";
import arrowDownFaq from "./assets/pottery/arrow-down-faq.svg"
import { TopNavbar } from "./TopNavbar";

const Ifo = () => {
    return (
        <>
        <TopNavbar />
            <div className="ifo-bottom-half">
                <div className="how-to-take-part">
                    <div className="how-to-take-part-container1">
                        <div className="how-to-take-part-container2">
                            <h2>How to Take Part in the Public Sale</h2>
                            <div className="how-to-take-part-main-container">
                                {/* 1st */}
                                <div className="how-to-take-part-main1">
                                    <div className="how-to-take-part-main1-3adj"></div>
                                    <div className="how-to-take-part-main1-2">
                                        <div className="how-to-take-part-main1-2-1">1</div>
                                        <div className="how-to-take-part-main1-2-2" />
                                    </div>
                                    <div className="how-to-take-part-main1-3">
                                        <h4 className="how-to-take-part-main1-3-1">
                                            Activate your Profile
                                        </h4>
                                        <div className="how-to-take-part-main1-3-2">
                                            You’ll need an active PancakeSwap Profile to take part in an
                                            IFO!
                                        </div>
                                        <button className="how-to-take-part-main1-3-3">
                                            Connect Wallet
                                        </button>
                                    </div>
                                </div>
                                {/* 2nd */}
                                <div className="how-to-take-part-main1">
                                    <div className="how-to-take-part-main1-3left">
                                        <h4 className="how-to-take-part-main1-3-1">
                                            Lock CAKE in the CAKE pool
                                        </h4>
                                        <div className="how-to-take-part-main1-3-2">
                                            The maximum amount of CAKE you can commit to the Public Sale
                                            equals the number of your iCAKE. Lock more CAKE for longer
                                            durations to increase the maximum CAKE you can commit to the
                                            sale. How does the number of iCAKE calculated? Missed this
                                            IFO? You will enjoy the same amount of iCAKE for future IFOs
                                            if your locked-staking position is not unlocked.
                                        </div>
                                    </div>
                                    <div className="how-to-take-part-main1-2">
                                        <div className="how-to-take-part-main1-2-1-adj">2</div>
                                        <div className="how-to-take-part-main1-2-2-adj" />
                                        <div className="how-to-take-part-main1-2-2-adj2" />
                                    </div>
                                    <div className="how-to-take-part-main1-3adj"></div>
                                </div>
                                {/* 3rd */}
                                <div className="how-to-take-part-main1">
                                    <div className="how-to-take-part-main1-3adj"></div>
                                    <div className="how-to-take-part-main1-2">
                                        <div className="how-to-take-part-main1-2-1-adj">3</div>
                                        <div className="how-to-take-part-main1-2-2-adj" />
                                        <div className="how-to-take-part-main1-2-2-adj2" />
                                    </div>
                                    <div className="how-to-take-part-main1-3">
                                        <h4 className="how-to-take-part-main1-3-1">Commit CAKE</h4>
                                        <div className="how-to-take-part-main1-3-2">
                                            Please note that CAKE in the fixed-term staking positions will
                                            remain locked and can not be used for committing to IFO sales.
                                            You will need a separate amount of CAKE in your wallet balance
                                            to commit to the IFO sales.
                                        </div>
                                    </div>
                                </div>
                                {/* 4th */}
                                <div className="how-to-take-part-main1">
                                    <div className="how-to-take-part-main1-3left">
                                        <h4 className="how-to-take-part-main1-3-1">
                                            Claim your tokens and achievement
                                        </h4>
                                        <div className="how-to-take-part-main1-3-2">
                                            After the IFO sales finish, you can claim any IFO tokens that
                                            you bought, and any unspent CAKE tokens will be returned to
                                            your wallet.
                                        </div>
                                    </div>
                                    <div className="how-to-take-part-main1-2">
                                        <div className="how-to-take-part-main1-2-1-adj">4</div>
                                        <div className="how-to-take-part-main1-2-2-adj" />
                                    </div>
                                    <div className="how-to-take-part-main1-3adj"></div>
                                </div>
                                <div className="how-to-take-part-main2" />
                                <div className="how-to-take-part-main3" />
                                <div className="how-to-take-part-main4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ifo-details">
                    <div className="ifo-details-main">
                        <div className="ifo-details-main-img">
                            <img
                                src="https://pancakeswap.finance/images/ifos/ifo-bunny.png"
                                alt="ifo bunny"
                            />
                        </div>
                        <div className="ifo-details-main-table-faq">
                            <h3 className="ifo-details-main-table-faq-h3">
                                <span> Details</span>
                            </h3>
                            <details className="ifo-details-main-table-faq-details">
                                <summary>
                                    What’s the difference between a Public Sale and Private Sale?
                                    <div>
                                        Details
                                        <img
                                            src={arrowDownFaq}
                                            alt="arrow-down-faq"
                                            className="arrow-down-faq"
                                        />
                                    </div>
                                </summary>
                                <div className="ifo-details-main-table-faq-details-p-div">
                                    In the current IFO format. There is a brand new Private Sale. To
                                    participate, participants will have to meet certain requirements
                                    presented on the IFO card. Each eligible participant will be able
                                    to commit any amount of CAKE up to the maximum commit limit, which
                                    is published along with the IFO voting proposal. The Private Sale
                                    has no participation fee.
                                    <br />
                                    In the Public Sale, everyone with an active PancakeSwap profile
                                    can commit. However the maximum amount of CAKE users can commit,
                                    is equal to the number of iCAKE they have.
                                    <br />
                                    Learn more about iCAKE{" "}
                                    <a
                                        className="ifo-anchor"
                                        href="https://docs.pancakeswap.finance/products/ifo-initial-farm-offering/icake"
                                    >
                                        here
                                    </a>
                                    <br />
                                    And there’s a fee for participation: see below.
                                </div>
                            </details>
                            <details className="ifo-details-main-table-faq-details">
                                <summary>
                                    Which sale should I commit to? Can I do both?
                                    <div>
                                        Details
                                        <img
                                            src={arrowDownFaq}
                                            alt="arrow-down-faq"
                                            className="arrow-down-faq"
                                        />
                                    </div>
                                </summary>
                                <div className="ifo-details-main-table-faq-details-p-div">
                                    You can choose one or both at the same time!
                                    <br />
                                    We recommend you to check if you are eligible to participate in
                                    the Private Sale first. In the Public Sale, if the amount you
                                    commit is too small, you may not receive a meaningful amount of
                                    IFO tokens.
                                    <br />
                                    Just remember you need an active PancakeSwap Profile in order to
                                    participate.
                                </div>
                            </details>
                            <details className="ifo-details-main-table-faq-details ifo-details-main-table-faq-details-last">
                                <summary>
                                    How much is the participation fee?
                                    <div>
                                        Details
                                        <img
                                            src={arrowDownFaq}
                                            alt="arrow-down-faq"
                                            className="arrow-down-faq"
                                        />
                                    </div>
                                </summary>
                                <div className="ifo-details-main-table-faq-details-p-div">
                                    There’s only a participation fee for the Public Sale: there’s no
                                    fee for the Private Sale.
                                    <br />
                                    The participation fee decreases in cliffs, based on the percentage
                                    of overflow from the “Public Sale” portion of the IFO.
                                    <br />
                                    Note: Fees may vary between different IFOs. To learn more about
                                    the participation fees, please refer to the details in the IFO
                                    proposal (vote) for the specifics of the IFO you want to take part
                                    in.
                                </div>
                            </details>
                            <details className="ifo-details-main-table-faq-details">
                                <summary>
                                    Where does the participation fee go?
                                    <div>
                                        Details
                                        <img
                                            src={arrowDownFaq}
                                            alt="arrow-down-faq"
                                            className="arrow-down-faq"
                                        />
                                    </div>
                                </summary>
                                <div className="ifo-details-main-table-faq-details-p-div">
                                    The CAKE from the participation fee will be burnt as part of the
                                    weekly token burn.
                                </div>
                            </details>
                            <details className="ifo-details-main-table-faq-details">
                                <summary>
                                    How can I get an achievement for participating in the IFO?
                                    <div>
                                        Details
                                        <img
                                            src={arrowDownFaq}
                                            alt="arrow-down-faq"
                                            className="arrow-down-faq"
                                        />
                                    </div>
                                </summary>
                                <div className="ifo-details-main-table-faq-details-p-div">
                                    You need to contribute a minimum of about 10 USD worth of CAKE to
                                    either sale.
                                    <br />
                                    You can contribute to one or both, it doesn’t matter: only your
                                    overall contribution is counted for the achievement.
                                </div>
                            </details>
                            <details className="ifo-details-main-table-faq-details ifo-details-main-table-faq-details-last">
                                <summary>
                                    What is the difference between an IFO and a cIFO?
                                    <div>
                                        Details
                                        <img
                                            src={arrowDownFaq}
                                            alt="arrow-down-faq"
                                            className="arrow-down-faq"
                                        />
                                    </div>
                                </summary>
                                <div
                                    id="ifo-last-paragraph"
                                    className="ifo-details-main-table-faq-details-p-div"
                                >
                                    cIFOs are a new subtype of IFOs, designed to reward our loyal
                                    community, and also introduce our community to projects with
                                    slightly smaller raises.
                                    <br />
                                    Learn more about cIFO{" "}
                                    <a
                                        className="ifo-anchor"
                                        href="https://medium.com/pancakeswap/community-initial-farm-offering-cifo-the-new-ifo-subtype-ac1abacf66be"
                                    >
                                        here
                                    </a>
                                </div>
                            </details>
                        </div>
                    </div>
                    <a
                        className="ifo-details-link"
                        href="https://docs.pancakeswap.finance/contact-us/business-partnerships#ifos-token-sales"
                    >
                        Apply to run an IFO!
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
            </div>
    <Footer />
        </>
    );
};

export default Ifo;
