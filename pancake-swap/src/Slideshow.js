import React from "react";

const Slideshow = ({ header, body, footer, background, img, display}) => {

    return (
        <div className={display ? "home1__slideshow flex" : "home1__slideshow flex slider-slide-noActive"}>
            <div className={`home1__slideshow--1 flex-row ${background}`}>
                <div className="flex-col">
                    {header}
                    <p className="normal">{body}</p>
                    {footer}
                </div>
                <div>
                    {img}
                </div>
            </div>

        </div>
    )
}

export default Slideshow;
