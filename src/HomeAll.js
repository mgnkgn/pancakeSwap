import React from "react";
import Navbar from "./Navbar";
import Home1 from "./Home1"

export const HomeAll = () => {
    return (
        <header class="header flex-col header-dark">
            <Navbar />
            <Home1 />
        </header>
    );
};
