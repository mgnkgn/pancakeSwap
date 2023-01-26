import React, { useContext } from "react"
import leftImgL from "./assets/home7/left/1-left@2x.webp"
import bottomImgL from "./assets/home7/left/1-bottom@2x.webp"
import topImgL from "./assets/home7/left/1-top@2x.webp"
import bottomImgR from "./assets/home7/right/2-bottom@2x.webp"
import topImgR from "./assets/home7/right/2-top@2x.webp"
import rightImgR from "./assets/home7/right/2-right@2x.webp"
import { MotionImageContainer } from "./MotionImage"
import { ThemeContext } from "./context/light-ctx"

const Home7 = () => {
    const imagesR = [bottomImgR, topImgR, rightImgR]
    const imagesL = [leftImgL, bottomImgL, topImgL]
    const { isLight } = useContext(ThemeContext);
    return (
        <>
            <div className="home7">
                <div className="home7-container">
                    <MotionImageContainer images={imagesL} className="home7-leftimagecontainer" />
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
                            <button className={isLight ? "home-7-connect-btn" : "home-7-connect-btn-DM"}>Connect Wallet</button>
                        </div>
                    </div>
                    <MotionImageContainer images={imagesR} className="home7-rightimagecontainer" />
                </div>
            </div>
        </>
    )
}

export default Home7