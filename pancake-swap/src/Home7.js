import React from "react"
import leftImgL from "./assets/home7/left/1-left@2x.webp"
import bottomImgL from "./assets/home7/left/1-bottom@2x.webp"
import topImgL from "./assets/home7/left/1-top@2x.webp"
import bottomImgR from "./assets/home7/right/2-bottom@2x.webp"
import topImgR from "./assets/home7/right/2-top@2x.webp"
import rightImgR from "./assets/home7/right/2-right@2x.webp"

const Home7 = () => {
    return (
        <>
            <div className="home7">
                <div className="home7-container">
                    <div className="home7-leftimagecontainer">
                        <img className="fmg1" src={leftImgL} alt="" />
                        <img className="fmg2" src={bottomImgL} alt="" />
                        <img className="fmg3" src={topImgL} alt="" />
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
                            src={bottomImgR}
                            alt=""
                        />
                        <img className="fmg2" src={topImgR} alt="" />
                        <img className="fmg3" src={rightImgR} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home7